[category:Migration]
###### [postdate]
# [postlink]Migracija iz Yotpo na FastComments[/postlink]

{{#unless isPost}}
Iščete alternativo Yotpo? Ta objava opisuje, kako migrirati pregled izdelkov iz Yotpo na FastComments, kaj se ohrani, kako se platforme primerjajo, in kaj se spremeni za vaš spletni trgovec.
{{/unless}}

{{#isPost}}

Imamo stalno število trgovcev na Shopify, ki se sprašujejo o alternativah Yotpo in kako prenesti svoje preglede izdelkov s te platforme. Ta objava pokriva, na kaj morate biti pozorni pri alternativi Yotpo, kako deluje migracija na FastComments od začetka do konca, in kako se stvari spremenijo, ko ste na FastComments.

## Kdo je ta objava namenjena

Ta vodnik je namenjen trgovcem e-trgovine in lastnikom trgovin, ki uporabljajo Yotpo za preglede izdelkov in želijo hitrejšo, lažjo ali bolj dostopno alternativo. Večina trgovcev, s katerimi govorimo, je na Shopify, vendar FastComments deluje enako na WooCommerce trgovinah, BigCommerce, prilagojenih trgovinah in brezglavih nastavitvah. Proces migracije je enak ne glede na to, kje teče vaša trgovina.

## Zakaj preiti

- FastComments je hiter. Yotpo naloži skoraj megabajt JavaScripta in številne povratne podatke od tretjih oseb, kar lahko upočasni strani s proizvodi.
- Pregledi se ne prikažejo takoj. Kupec odda pregled, stran mu sporoči, naj preveri svojo pošto, in pregled se prikaže šele po določenem času.
- FastComments ponuja bolj linearno cenovno politiko brez funkcionalnih omejitev za različne ravni.

FastComments prikazuje ocene z zvezdicami in nitke pregledov v enem ~30KB vtičniku, ki se posodablja v realnem času. Novi pregledi se pojavijo na vseh odprtih straneh v trenutku, ko jih objavijo, brez potrebe po osvežitvi! Naš načrt temelji na obsegu prometa in vključuje ocene, AI moderacijo, večstopenjsko moderacijo, funkcijo vprašanj in popolno izvoz podatkov. Veliko strank plača le en dolar, pri čemer so na voljo cene za upravitelje in moderatorje za večje organizacije.

## Izkušnja v živo

FastComments Povzetek Vtičnik je v živo, prav tako kot naši vtičniki za komentarje in klepet. Če je oddan pregled, se ocene takoj posodobijo brez osvežitve. To je lahko koristno za lansiranje izdelkov.

FastComments deluje tudi izven Shopify, če se kadarkoli odločite za premik ali upravljate različne trgovine na različnih platformah.

## Yotpo vs FastComments Na Enkrat

Hiter pregled dimenzij, o katerih se trgovci sprašujejo, ko iščejo alternativo Yotpo:

- Teža vtičnika: Yotpo pošlje več kot 800KB JavaScripta preko več povratnih poti. FastComments pošlje 38KB v eni povratni poti.
- Pregledi v živo: Yotpo zahteva osvežitev strani za prikaz novih pregledov. FastComments dodaja nove zvezdice in komentarje na vse odprte strani v realnem času.
- Cene: Yotpo zaračunava glede na število pregledov preko ravninskih načrtov z omejitvami funkcij. FastComments ima enotno ceno glede na promet strani in vključuje vse funkcije v vsakem načrtu.
- Pregledi fotografij in videov: Oba podpirata.
- Pregledi vprašanj in odgovorov: Yotpo prodaja Q&A kot dodaten modul. FastComments vključuje to prek vgrajene funkcije vprašanj.
- AI moderacija: Yotpo ponuja osnovna pravila za samodejno objavo. FastComments vključuje AI agente s konfigurabilnim ocenjevanjem na komentar in dnevniki revizij ter ročno in samodejno konfiguracijo objave.
- Izvoz podatkov: Yotpo omejuje popoln izvoz za višje ravni. FastComments vključuje popoln CSV in JSON izvoz v vsakem načrtu.
- Migracija iz konkurenta: Yotpo zaračunava za migracijsko pomoč. FastComments to opravi brezplačno preko podpornega zahtevka.

## Kako migracija deluje

Yotpo nima čiste samopostrežne izvozne možnosti, ki bi se gladko preslikala v javno shemo uvoza, zato migracije Yotpo upravljamo preko naše podporne ekipe namesto preko standardne strani za uvoz. Postopek od začetka do konca je:

1. Odprite <a href="https://fastcomments.com/contact-us" target="_blank">podporni zahtevek</a> in nas obvestite, da se selite iz Yotpo.
2. Poslali vam bomo navodila za izvoz vaših podatkov iz Yotpo. Izvoz pokriva preglede, ocene, fotografije, oznake preverjenega kupca in povezane odgovore.
3. Izvoz nam pošljete nazaj v zahtevku.
4. Vsako polje preslikamo v FastComments in ga naložimo v staging najemnika, povezanega z vašim računom, tako da si lahko ogledate rezultat, preden gre karkoli v živo na vaši trgovini.
5. Ko potrdite predogled, podatke promoviramo v vaš proizvodni najemnik.

Večina migracij Yotpo se zaključi v enem tednu od prejema izvoza.

## Kaj se ohrani

Preslikava pokriva vse, kar Yotpo hrani za vsak pregled:

- Ocene z zvezdicami in agregirana ocena izdelka
- Besedilo pregleda, povezani odgovori in časovni žigi odgovorov
- Priloge fotografij in videov (datoteke premaknemo na naš CDN)
- Oznake preverjenega kupca
- Identifikatorji strank, tako da se število pregledov na profilih strank ujema s prejšnjimi
- Časovni žigi oddaje, tako da ostane kronološki red na vaših straneh izdelkov ohranjen

Če imate Yotpo vprašanja in odgovore, se ti preslikajo v funkcijo Vprašanja FastComments na istih nitkah izdelkov.

## Zamenjava Vtičnika

Ko so podatki preneseni, zamenjajte Yotpo vtičnik na predlogi strani izdelka za FastComments vtičnik. Smo aplikacija za Shopify, tako da je to za večino trgovin enovrstni blok v vaši temi. <a href="https://fastcomments.com/install-wizard" target="_blank">Vrhunski čarovnik za namestitev</a> pokriva Shopify, brezglave nastavitve in glavne okvirje sprednjega dela. <a href="https://fastcomments.com/auth/my-account/help" target="_blank">Pomagali vam bomo</a>.

Lahko začasno izvajate Yotpo in FastComments ob straneh na eni sami strani izdelka, če želite primerjati videz in občutek, preden se popolnoma preusmerite.

## EU

Če ste v EU, ustvarite svoj račun na <a href="https://eu.fastcomments.com" target="_blank">eu.fastcomments.com</a>, da ostanejo vaši podatki strank v EU.

## Pogosta vprašanja o prehodu iz Yotpo

### Je FastComments cenejši od Yotpo?

V skoraj vseh primerih, ja. FastComments deluje na enem enotnem načrtu na podlagi prometa, ki vključuje vse funkcije, medtem ko Yotpo zaračunava na podlagi pregledov preko ravninskih načrtov in dodaja stroške nadomestila. Izračunajte številke za svojo trgovino na <a href="https://fastcomments.com/pricing-calculator" target="_blank">cenovniku</a>.

### Ali lahko ob prehodu obdržim svoje preglede Yotpo?

Da. Migracija ohrani vsak pregled, vsako oceno, vsako fotografijo in video prilogo, vsak povezan odgovor in vsako oznako preverjenega kupca. Časovni žigi oddaje se prenesejo, tako da ostane kronološki red na vaših straneh izdelkov enak.

### Ali FastComments deluje izven Shopify?

Da. FastComments deluje na Shopify, WordPressu, WooCommerce, BigCommerce, prilagojenih trgovinah in brezglavih nastavitvah. <a href="https://fastcomments.com/install-wizard" target="_blank">Čarovnik za namestitev</a> pokriva glavne okvirje sprednjega dela.

### Ali lahko najprej izvajam Yotpo in FastComments ob straneh?

Da. Namestite oba vtičnika na eno stran izdelka med predogledom staginga, da primerjate, kako izgledata in delujeta na vaši trgovini, nato pa odstranite Yotpo, ko ste pripravljeni na popolno preusmeritev.

### Kaj pa Yotpo Loyalnost, Yotpo SMS ali Yotpo E-pošta?

FastComments je platforma za preglede in komentiranje v živo. Ne upravlja z zvestobnimi programi, SMS trženjem ali kampanjami e-pošte. Če danes uporabljate te Yotpo izdelke, jih boste želeli obdržati ali prenesti na namensko orodje, ko preklopite preglede na FastComments.

Upoštevajte, da bi radi razvili to funkcionalnost, in če ste zainteresirani za beta testiranje, bomo to z veseljem dodali na naš kratkoročni načrt.

### Ali bodo moje ocene z zvezdicami še vedno prikazane na mojih straneh izdelkov?

Da. FastComments vtičnik prikazuje agregatno oceno z zvezdicami, posamezne ocene pregledov in število pregledov na istih mestih, kjer je bil Yotpo vtičnik. HTML vsakega pregleda je strukturiran tako, da lahko iskalniki zajamejo podatke o ocenjevanju na strani.

### Ali bo prehod iz Yotpo na FastComments vplival na mojo SEO?

Če se URL-ji vaših strani izdelkov ne spremenijo, ne. Vsebin pregleda se preseli na nov vtičnik na istih URL-jih, in iskalniki vidijo iste izdelke s istimi pregledi na istih straneh. Če spreminjate URL-je kot del selitve, nam pošljite stare in nove pare URL-jev v podporni zahtevek, da lahko uvoznik preslika.

### Ali obstaja brezplačno preizkusno obdobje?

Vsak načrt FastComments se začne z brezplačnim preizkusnim obdobjem. Ustvarite lahko račun, izvedete predogled uvoza in vidite vtičnik na staging najemniku, preden se zavežete k plačanemu načrtu.

## Povzetek

1. <a href="https://fastcomments.com/contact-us" target="_blank">Odprite podporni zahtevek</a> in nam sporočite, da želite migrirati iz Yotpo
2. Izvozite svoje podatke Yotpo in jih pošljite nam v zahtevku
3. Predogled uvoza na staging najemniku
4. Zamenjajte Yotpo vtičnik za FastComments vtičnik na predlogi vaše strani izdelka

{{/isPost}}