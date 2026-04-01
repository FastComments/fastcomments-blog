---
[category:Infrastructure]
[category:Announcements]

###### [postdate]
# [postlink]FastComments je pripravljen za vesolje![/postlink]

{{#unless isPost}}
Zaključili smo migracijo naše aktivno-aktivne baze podatkov, kar je prineslo pravo večregionalno redundanco v FastComments.
{{/unless}}

{{#isPost}}

### <i class="circle">!</i> Ta članek vsebuje tehnični jezik

### Kaj je novega

Vsaka [točka prisotnosti](https://sophon.fastcomments.com/) FastComments zdaj piše lokalno in asinhrono replicira te zapise
na vse druge vozlišča. To bo zagotovilo večjo trajnost v primerjavi s prejšnjim sistemom ter pospešilo moderacijska orodja
za uporabnike v nekaterih regijah, s nekaterimi trgovinskimi kompromisi.

"Pripravljen za vesolje" je nekoliko optimistična izjava, toda ideja je, da bi lahko FastComments namestili na različne planete in na koncu bi se sistem usklajil. Uporabniki na Plutonu pa bi morali počakati približno dan, da se spremembe odražajo na njihovi prihajajoči strani računa, saj lahko trenutno samo eno
glavno vozlišče na regijo zbira podatke o obračunavanju.

### Malo zgodovine, zakaj sprememba

Ko je FastComments prvotno začel, smo imeli zelo tipično arhitekturo. Imeli smo proxy plast, aplikacijsko plast, bazo podatkov, nekaj replik, nato pa kasneje replik po regijah in oblačnih ponudnikih za dodatno redundanco.

Sčasoma smo premestili replikacije DB v vse cone, kjer je večina naših uporabnikov, in tudi tam namestili aplikacijo ter ustvarili naš lastni DNS in sistem proxy (opisan v kasnejšem blogu), da preusmerimo zahteve na najbližje aplikacijsko vozlišče. To omogoča hitrejše branje, toda pisanje je počasnejše, saj namesto da čakate na eno HTTP potovanje nazaj na zadnji del, čakate na HTTP potovanje do bližnjega vozlišča, to vozlišče pa lahko večkrat piše nazaj na primarno. Ni dobro!

Da bi to premagali, smo prestrukturirali mnoge dele aplikacije tako, da funkcijam dodamo `readPreference` v argumentih, tako da klicatelji lahko odločijo, kako
stari so branja, ki jih sprejemajo, in na to smo naredili še več zapisov (kot so zapisovanje statistike moderatorjev pri dejanjih moderatorjev), da bodo ti hitri in pozabljeni. Ni idealno, a je stvari znatno pospešilo.

Ena težava, s katero smo se srečevali pri delovanju Mongo globalno, so omrežne prekinitve. Če se dovolj vozlišč izključi, se branje ustavi, saj vsak vozlišče postane negotovo, ali je sprejemljivo posredovati branja. Obstajajo nekateri načini, kako se temu izogniti, a robni primeri postanejo zapleteni. To ni teoretična težava - zgodilo se je dovoljkrat, da smo imeli 3AM strani, da smo se tega naveličali, tudi ko smo poskušali nastaviti Mongo, da bi se spopadel z negotovostjo volitev replikacijskih skupin do minute narazen. Na žalost omrežja za Sao Paulo do Falkensteina, na primer, preprosto niso bila zelo dobra pri nekaterih naših ponudnikih gostovanja. Nastavitev krmiljenja obremenitve in podobno je pomagala, a ni rešila problema.

Sveti gral rešitev, pod pogojem, da ste pripravljeni na določene trgovinske kompromise, je sposobnost sprejeti zapise lokalno na tem vozlišču (ki ima dostojno strojno opremo, RAID itd., ki se verjetno ne bo pokvarila) in uporabniku povedati, da so njegovi podatki shranjeni. Tako imate tudi na tej točki prisotnosti še drugo vozlišče kot vročo replikacijo za trajnost.

Tako smo končali. Oregon, Virginia, Falkenstein, Sao Paulo, Singapur, so vsi svoja replika in sprejemajo zapise. Namestitev v EU 
(imajo samo tri PoP) ima isto obnašanje.

### Kako deluje

Nekateri od tega so zajeti v prejšnjem razdelku, toda TL;DR je, da je to CRDT-lite. Ustvarili smo proxy (v Rustu, ker seveda), ki sedi med aplikacijo in Mongo in ga naredi multi-master. Proxy je zavedajoč se peers, upravlja s kontrolnimi točkami, replicacijo, spremljanjem in začetnim sinhroniziranjem. To je multi-master zamenjava za Mongo sistem replikacije, vključno za nekatere DDL ukaze.

**Razlika od drugih orodij** je, da **ne sledi oplogu**. Sledenje oplogu ali uporaba spremembnih tokov ne bi delovalo, ker vam le pokaže končno stanje objekta po zapisovanju, kar onemogoča reševanje konfliktov. Potrebujete zajeti
vsako operacijo `$set`, `$inc` in replicirati to operacijo samo.

To je rešitev, specifična za domeno. Ne bi delovala za vse izdelke. Lahko bi rekli, da je to zasnova, usmerjena k domeni :). Deluje za nas, ker smo od začetka zelo skrbno samo `$set` polja, ki jih spreminjamo na dokumentih - nikoli ne uporabljamo Mongo `replaceOne`, na primer. Enako velja za števce. **Nikoli** ne naredite `SET VOTES = 5`. Namesto tega bi napisali `INCREMENT VOTES BY 5`, saj to omogoča eventualno skladnost. Porazdeljene zaklepe upravljajo **ne**. Le eno vozlišče
na grozdu ima nastavljen zastavico za izvajanje cronov. Čeprav se to morda zdi omejeno, lahko kupimo strežnike s terabajti RAM-a, tako da lahko sprejmemo ta kompromis za zmanjšanje tveganja in zapletenosti.

### Branje vaših lastnih zapisov

Za razvijalce, ki uporabljajo API, bi se morali sposobni prebrati svoje lastne zapise, kot prej (naredite API klic za ustvarjanje komentarja, nato pa naštetje komentarje in vidite nov vnos na tistem seznamu). **Omejitev** je, da tega ne morete storiti čez regije. Če vaš zadnji del deluje le v eni regiji,
kot je us-west, bi se morali sposobni prebrati svoje lastne zapise, razen v primeru, da med vašim zapisom in vašim branjem to vozlišče gre dol **in** se vaša
predpomnilnik DNS posodobi, da kaže na naslednje najbližje vozlišče. Dokler se to ne zgodi, je branje vaših lastnih zapisov zanesljivo.

[Tudi lahko določite, katero točko prisotnosti dosežete. Več informacij tukaj.](https://docs.fastcomments.com/guide-api.html#reading-your-own-writes)

### Testiranje in migracija

Približno polovica kode v sistemu je testni okvir, testni aparat in testi. Kljub temu je bila izdaja nekoliko nerodna, z daljšim časom izpada (1 ura za EU in 20 minut za us-global), kot smo želeli, a smo veseli, da smo dosegli ta mejnik in se vam zahvaljujemo za vaše potrpljenje!

### Na koncu in kaj to pomeni za vas

FastComments bi moral biti zdaj hitrejši in bolj trajen kot kadarkoli prej, in zdaj se lahko vrnemo k delu na funkcijah :)

Na zdravje!

{{/isPost}}

---