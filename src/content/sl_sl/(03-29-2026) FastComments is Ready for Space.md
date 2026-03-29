---
[category:Infrastructure]
[category:Announcements]

###### [postdate]
# [postlink]FastComments je pripravljen za vesolje![/postlink]

{{#unless isPost}}
Zaključili smo migracijo naše aktivne-aktivne baze podatkov, kar je prineslo pravo multi-regionalno redundanco za FastComments.
{{/unless}}

{{#isPost}}

### <i class="circle">!</i> Ta članek vsebuje tehnični žargon

### Kaj je novega

Vsak FastComments [point-of-presence](https://sophon.fastcomments.com/) zdaj zapisuje lokalno in asinhrono replicira te zapise na vse druge vozlišča. To bo povečalo vzdržljivost v primerjavi s prejšnjim sistemom, poleg tega pa bo moderacijska orodja za uporabnike v nekaterih regijah hitrejša, s nekaterimi kompromisi.

"Pripravljen za vesolje" je nekoliko optimistična izjava, toda ideja je, da bi lahko FastComments distribuirali na različne planete in bi se sčasoma sistem uskladil. Uporabniki na Plutonu bi se morali vendarle počakati približno en dan, da bi se spremembe odražale na njihovi prihajajoči strani računa, saj lahko trenutno samo eno glavno vozlišče na regijo agregira podatke o naplata.

### Nekaj zgodovine, zakaj sprememba

Ko je FastComments prvotno zaživel, smo imeli zelo tipično arhitekturo. Imeli smo proxy plast, plast aplikacij, bazo podatkov, nekaj replik, nato pa kasneje replikate čez regije in ponudnike oblakov za dodatno redundanco.

Na koncu smo premestili replikate DB v vse cone, kjer je večina naših uporabnikov, in tam tudi implementirali aplikacijo ter ustvarili naš lasten DNS in proxy sistem (opisano v naslednjem blogu), da usmerjamo zahteve na najbližje vozlišče aplikacije. To omogoča hitre branja, vendar upočasni pisanja, saj namesto da bi čakali na eno HTTP potovanje nazaj na strežnik, čakate na HTTP potovanje do bližnjega vozlišča, to vozlišče pa lahko izvede več pisanj v bazo nazaj k primarnemu. Ni dobro!

Da bi se temu izognili, smo prestrukturirali mnoge dele aplikacije, da sprejemajo `readPreference` v argumentih funkcij, tako da lahko klicatelji odločijo, kako zastare so pripravljeni prenašati pri svojih branjih, in poleg tega omogočili, da boljša pisanja (kot so pisanje statistik moderatorjev glede na dejanja moderatorjev) potekajo brez odlašanja. Ni idealno, a je bistveno pospešilo stvari.

Ena težava, s katero smo se srečali pri globalni uporabi Mongo, so omrežni razdelki. Če se dovolj vozlišč odklopi, branje preneha, saj vsako vozlišče postane negotovo, ali je sprejemljivo obravnavati branja. Obstajajo načini, kako to obiti, vendar postanejo robni primeri zapleteni. To ni teoretična težava - zgodilo se je dovoljkrat, da je povzročilo obvestila ob 3. uri zjutraj, da smo se tega naveličali, celo poskušali smo prilagoditi Mongo, da bi bil v redu z negotovostjo izbora replikacijskega nabora do minute. Na žalost omrežja, na primer med Sao Paulom in Falkensteinom, preprosto niso bila zelo dobra preko nekaterih naših ponudnikov gostovanja. Prilagajanje nadzora zagušenosti in podobno je pomagalo, vendar ni rešilo problema.

Sveta rešitev, ob predpostavki, da ste pripravljeni na določene kompromise, je sposobnost za sprejemanje zapisov lokalno na tem vozlišču (ki ima dobro strojno opremo, RAID itd., ki verjetno ne bo odpovedala) in uporabniku sporočiti, da so njegovi podatki shranjeni. V tem točki navzočnosti pa lahko še vedno imate drugo vozlišče kot vroč replikat za trajnost.

Tako smo končali. Oregon, Virginija, Falkenstein, Sao Paulo, Singapur so vsi svoji replikatni kompleti in sprejemajo pisanja. EU
implementacija (čeprav ima le tri PoP) ima enako vedenje.

### Kako deluje

Nekatere od teh zadev so pokrite v prejšnjem razdelku, toda kratek povzetek je, da gre za CRDT-lite. Ustvarili smo proxy (v Rustu, ker seveda) ki sedi med aplikacijo in Mongo in ga dela multi-master. Proxy je zavedajoč o vrstnikih, upravlja s kontrolnimi točkami, replikacijo, nadzorom in začetno sinhronizacijo. To je multi-master nadomestilo za Mongo sistem replikacije, vključno za nekatere DDL ukaze.

**Razlika od drugih orodij** je, da **ne sledi oplogu**. Sledenje oplogu ali uporaba spremembnih tokov ne bi delovalo, ker vam prikazujejo le končno stanje objekta po pisanju, kar povzroča, da je nemogoče obravnavati konflikte. Potrebno je zajeti
vsako operacijo `$set`, `$inc` in replicirati to operacijo.

To je rešitev specifična za domeno. Ne bi delovalo za vse izdelke. Lahko bi rekli, da je to zasnova, usmerjena v domeno :). Deluje za nas, ker smo že od začetka skrbno le `$set` polja, ki jih spreminjamo na dokumentih - nikoli ne uporabljamo Mongo `replaceOne`, na primer. Tako je s številčniki. **Nikoli** ne naredite `SET VOTES = 5`. Namesto tega bi zapisali `INCREMENT VOTES BY 5`, kar omogoča eventualno konsistentnost. Porazdeljene zaklopa se obvladujejo z **popolnim izogibanjem**. Le eno vozlišče
na grozdu ima zastavico nastavljeno za zagon crons. Čeprav se to morda zdi omejeno, lahko kupimo strežnike s terabajti RAM-a, zato lahko sprejmemo ta kompromis, da zmanjšamo tveganje in kompleksnost.

### Branje vaših lastnih zapisov

Za razvijalce, ki uporabljajo API, bi morali biti sposobni brati svoje lastne zapise prav tako kot prej (naredite klic API za ustvarjanje komentarja, nato naštejete komentarje in vidite nov vnos v tem seznamu). **Opozorilo** je, da tega ne morete storiti čez regije. Če vaš zadnji sistem deluje le v eni regiji,
kot na primer us-west, bi morali biti sposobni prebrati svoje lastne zapise, razen v primeru, da med vašim zapisom in branjem to vozlišče odpove **in** se vaša
predpomnilniška DNS posodobi, da se pokaže na naslednje najbližje vozlišče. Pod pogojem, da se to ne zgodi, je branje vaših lastnih zapisov zanesljivo.

### Testiranje in migracija

Približno polovica kode v sistemu je testni okvir, infrastruktura in testi. Kljub temu je bil izid nekoliko polomljen, saj je trajal dlje kot želeni čas nedelovanja (1 ura za EU in 20 minut za nas-global), a smo veseli, da smo dosegli ta mejnik in se vam zahvaljujemo za potrpljenje!

### V zaključku in kaj to pomeni za vas

FastComments bi moral zdaj biti hitrejši in bolj vzdržljiv kot kdajkoli prej, in zdaj se lahko vrnemo k delu na funkcijah :)

Na zdravje!

{{/isPost}}

---