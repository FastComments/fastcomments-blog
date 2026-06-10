---
[category:Migration]
[category:Tutorials]
###### [postdate]
# [postlink]Kako da uklonite oglase iz Disqus komentara[/postlink]

{{#unless isPost}}
Na besplatnom Disqus planu, vaš deo za komentare dolazi sa prilogom oglasa. Postoje dva načina da ih se oslobodite. Bolji način takođe čini da se vaši komentari učitavaju brže i sprečava praćenje vaših čitatelja.
{{/unless}}

{{#isPost}}

Disqus plaća svoj besplatni plan stavljanjem oglasa u vaš deo za komentare, tačno ispod vašeg sadržaja, na istom mestu gde vaši čitatelji idu da razgovaraju s vama. Ti oglasi nisu vaši. Ne birate ih, i ne zarađujete ni centa od njih. To je trgovina za besplatni nivo.

Postoje dva stvarna načina da ih uklonite.

## Opcija 1: Nadogradite svoj Disqus plan

Jednostavan put je da platite Disqus. Njihovi plaćeni planovi isključuju oglase. Trenutne opcije možete pronaći na <a href="https://disqus.com/pricing/" target="_blank">Disqus stranici sa cenama</a>.

To funkcioniše, ali vredi biti jasan u vezi onoga što kupujete. Plaćate da biste uklonili negativnu stranu. Oglasi nestaju, a ostatak Disqus ostaje isti: prostor za komentare i dalje učitava teški paket skripti trećih strana, a vaši čitatelji se i dalje prate na sajtovima koji ga ugrađuju. Plaćate da uklonite oglase, a ne da učinite deo za komentare lakšim ili privatnijim.

## Opcija 2: Pređite na platformu koja nikada ne prikazuje oglase

Drugi način da uklonite oglase je da koristite platformu za komentare koja ih ne prikazuje od samog početka. :)

Za samo $0.99/mo, FastComments pruža duboku funkcionalnost optimizovanu za performanse bez praćenja ili oglasa.

## Čuvate sve komentare

Deo na koji se ljudi najviše brinu je gubitak postojećih diskusija. FastComments ima ugrađeni importer za Disqus koji prebacuje vaše komentare, korisničke ime, korisničke avatare, slike u tekstu, glasove i vremenske oznake. Čak prebacujemo sve slike na naš CDN za vas.

Ako želite potpunu, detaljnu šemu, imamo posvećen vodič: [Migracija sa Disqus na FastComments](/(1-23-2020)-migrating-from-disqus-fastcomments.html). Kratka verzija je u nastavku.

## Kako promeniti u tri koraka

### 1. Izvezite svoje komentare iz Disqus-a

Pratite <a href="https://help.disqus.com/en/articles/1717199-importing-exporting" target="_blank">Disqus-ove sopstvene korake za izvoz</a>. Poslaće vam datoteku sa "gz" ekstenzijom. Nema potrebe da je otvarate ili raspakujete, a podrazumevana Windows instalacija to ni ne može. Naš backend čita tu kompresovanu datoteku direktno.

### 2. Uvezite datoteku u FastComments

Kada se prijavite, idite na <a href="https://fastcomments.com/auth/my-account/manage-data/import" target="_blank">stranicu za uvoz</a>, izaberite Disqus iz padajućeg menija i učitajte datoteku kakva jeste. Uvoz se odvija u pozadini; stranica će se automatski ažurirati dok se odvija da vam prikaže trenutni broj # otkrivenih i uvezenih komentara. Sigurno je ponovo uvoziti koliko god puta vam je potrebno.

### 3. Zamijenite Disqus kod sa našim

Uklonite Disqus ugrađeni kod sa vaših stranica i stavite <a href="https://fastcomments.com/auth/my-account/install-wizard/" target="_blank">FastComments kod</a> umesto njega. Sve dok vaše URL adrese ostanu iste, vaši uvezeni komentari će se tačno poravnati tamo gde su bili.

## Na WordPress-u?

Ako vaš sajt radi na WordPress-u, preskočite ručne korake i instalirajte <a href="https://wordpress.org/plugins/fastcomments/" target="_blank">FastComments WordPress dodatak</a>. On se brine o instalaciji, podešavanju i sinhronizaciji za vas, a zatim možete deinstalirati Disqus.

## Testirajte pre nego što se odlučite

Ne morate sve istovremeno promeniti. Možete privremeno koristiti Disqus i FastComments na istoj stranici kako biste uporedili izgled i osećaj pre nego što potpuno pređete. Ako vam je potrebna pomoć oko bilo čega od ovoga, <a href="https://fastcomments.com/auth/my-account/help" target="_blank">obratite nam se</a> i pomoći ćemo vam.

Niste sigurni koliko će vas FastComments koštati? Svaki plan je bez oglasa, a vašu cenu možete proveriti na <a href="https://fastcomments.com/pricing-calculator" target="_blank">kalkulatoru cena</a>. Ako ste u EU, možete napraviti svoj nalog na <a href="https://eu.fastcomments.com" target="_blank">eu.fastcomments.com</a> kako bi vaši podaci ostali u EU.

## Zaključak

1. Izvezite svoje podatke iz Disqus-a
2. Uvezite ih u FastComments
3. Zamijenite Disqus kod sa <a href="https://fastcomments.com/auth/my-account/get-acct-code" target="_blank">FastComments-ovim</a>

To je to. Nema oglasa u vašem delu za komentare, lakše stranice, i svaki komentar koji ste već imali.

Živeli!

{{/isPost}}

---