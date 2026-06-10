---
[category:Migration]
[category:Tutorials]
###### [postdate]
# [postlink]Kako ukloniti oglase iz Disqus komentara[/postlink]

{{#unless isPost}}
Na besplatnom Disqus planu, vaša sekcija komentara dolazi s oglasima. Postoje dva načina da ih se rešite. Bolji način takođe ubrzava učitavanje vaših komentara i sprečava praćenje vaših čitatelja.
{{/unless}}

{{#isPost}}

Disqus plaća za svoj besplatni plan postavljajući oglase u vašu sekciju komentara, odmah ispod vašeg sadržaja, na istom mestu gde vaši čitatelji dolaze da razgovaraju s vama. Ti oglasi nisu vaši. Ne birate ih, niti zarađujete bilo kakvu svotu od njih. To je cena za besplatnu verziju.

Postoje dva stvarna načina da ih uklonite.

## Opcija 1: Nadogradite svoj Disqus plan

Jednostavan način je da platite Disqus-u. Njihovi plaćeni planovi isključuju oglase. Trenutne opcije možete pronaći na <a href="https://disqus.com/pricing/" target="_blank">Disqus stranici za cene</a>.

Ovo funkcioniše, ali je važno biti jasan u vezi onoga što kupujete. Plaćate da biste ukinuli negativnu stranu. Oglasi nestaju, a ostatak Disqus-a ostaje isti: sekcija komentara i dalje učitava težak paket skripti trećih strana, a vaši čitatelji se i dalje prate širom sajtova koji ga uključuju. Plaćate da biste uklonili oglase, a ne da biste učinili sekciju komentara lakšom ili privatnijom.

## Opcija 2: Pređite na platformu koja nikad ne prikazuje oglase

Drugi način da uklonite oglase je korišćenje platforme za komentare koja ih uopšte ne prikazuje. :)

Za samo 0.99 $/mesec, FastComments pruža duboku funkcionalnost optimizovanu za performanse bez praćenja ili oglasa.

## Zadržavate svaki komentar

Deo o kojem ljudi najviše brinu je gubitak njihove postojeće diskusije. FastComments ima ugrađeni uvoznik za Disqus koji prenosi vaše komentare, korisnička imena, korisničke avatare, inline slike, glasove i vremenske oznake. Čak prebacujemo sve slike na naš vlastiti CDN za vas.

Ako želite potpunu, detaljnu šemu, imamo posvećen vodič: [Migracija sa Disqusa na FastComments](/(1-23-2020)-migrating-from-disqus-fastcomments.html). Kratak pregled je ispod.

## Kako preći u tri koraka

### 1. Izvezite svoje komentare iz Disqusa

Pratite <a href="https://help.disqus.com/en/articles/1717199-importing-exporting" target="_blank">Disqus-ove vlastite korake za izvoz</a>. Poslaće vam fajl sa "gz" ekstenzijom. Ne morate ga otvarati ili raspakovati, a podrazumevana Windows instalacija to ne može ni da uradi. Naša pozadina čita taj kompresovani fajl direktno.

### 2. Uvezite fajl u FastComments

Kada se prijavite, idite na <a href="https://fastcomments.com/auth/my-account/manage-data/import" target="_blank">stranicu za uvoz</a>, izaberite Disqus iz padajućeg menija i otpremite fajl onako kako jeste. Uvoz se odvija u pozadini; stranica će se automatski ažurirati dok se odvija kako bi vam pokazala trenutni broj otkrivenih i uvezenih komentara. Sigurno je ponovo uvoziti koliko god puta vam treba.

### 3. Zamenite Disqus kod za naš

Uklonite Disqus kod sa vaših stranica i umesto toga umetnite <a href="https://fastcomments.com/auth/my-account/install-wizard/" target="_blank">FastComments kod</a>. Sve dok vaši URL-ovi stranica ostanu isti, vaši uvezeni komentari će se tačno poklopiti sa mestima gde su bili.

## Na WordPress-u?

Ako vaša stranica radi na WordPress-u, preskočite ručne korake i instalirajte <a href="https://wordpress.org/plugins/fastcomments/" target="_blank">FastComments WordPress dodatak</a>. On se brine za instalaciju, podešavanje i sinhronizaciju umesto vas, a zatim možete deaktivirati Disqus.

## Testirajte pre nego što se obavežete

Ne morate prebacivati prekidač odjednom. Možete privremeno koristiti Disqus i FastComments na istoj stranici kako biste uporedili izgled i osećaj pre nego što pređete potpuno. Ako želite pomoć oko bilo čega od ovoga, <a href="https://fastcomments.com/auth/my-account/help" target="_blank">obratite nam se</a> i pomoći ćemo vam da to rešite.

Niste sigurni koliko će vas FastComments koštati? Svaki plan je bez oglasa, a možete proveriti svoju cenu na <a href="https://fastcomments.com/pricing-calculator" target="_blank">kalkulatoru cena</a>. Ako ste u EU, možete kreirati svoj račun na <a href="https://eu.fastcomments.com" target="_blank">eu.fastcomments.com</a> kako bi vaši podaci ostali u EU.

## Recap

1. Izvezite svoje podatke iz Disqusa
2. Uvezite ih u FastComments
3. Zamenite Disqus kod za <a href="https://fastcomments.com/auth/my-account/get-acct-code" target="_blank">FastComments-ov</a>

To je to. Bez oglasa u vašoj sekciji komentara, lakše stranice i svaki komentar koji ste već imali.

Živeli!

{{/isPost}}