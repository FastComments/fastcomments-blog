---
[category:Migration]
[category:Tutorials]
###### [postdate]
# [postlink]Kako da uklonite oglase iz Disqus komentara[/postlink]

{{#unless isPost}}
Na besplatnom Disqus planu, vaš deo za komentare ima oglase. Postoje dva načina da ih se rešite. Bolji način takođe ubrzava učitavanje vaših komentara i sprečava praćenje vaših čitalaca.
{{/unless}}

{{#isPost}}

Disqus finansira svoj besplatni plan postavljanjem oglasa u vaš deo za komentare, odmah ispod vašeg sadržaja, na istom mestu gde vaši čitaoci odlaze da razgovaraju s vama. Ti oglasi nisu vaši. Ne birate ih, i ne zarađujete ni centa od njih. To je cena za besplatni nivo.

Postoje dva stvarna načina da ih uklonite.

## Opcija 1: Nadogradite svoj Disqus plan

Jednostavan način je da platite Disqus. Njihovi plaćeni planovi isključuju oglase. Trenutne opcije možete pronaći na <a href="https://disqus.com/pricing/" target="_blank">Disqus stranici sa cenama</a>.

Ovo funkcioniše, ali je važno jasno reći šta kupujete. Plaćate da biste uklonili nedostatak. Oglasi nestaju, a ostalo u Disqusu ostaje isto: deo za komentare i dalje učitava težak paket skripti trećih strana, a vaši čitaoci su još uvek praćeni na stranicama koje ga ugrađuju. Plaćate uklanjanje oglasa, a ne da biste deo za komentare učinili lakšim ili privatnijim.

## Opcija 2: Pređite na platformu koja nikada ne prikazuje oglase

Drugi način da uklonite oglase je korišćenje platforme za komentarisanje koja ih niti prikazuje. :)

Za samo $0.99/mesečno, FastComments pruža duboku funkcionalnost optimizovanu za performanse bez praćenja ili oglasa.

## Zadržavate svaki komentar

Deo koji ljude najviše brine je gubitak postojeće diskusije. FastComments ima ugrađeni Disqus uvoznik koji prenosi vaše komentare, imena korisnika, avatare korisnika, inline slike, glasove i vremenske oznake. Čak prebacujemo sve slike na naš vlastiti CDN za vas.

Ako želite detaljne upute, imamo posvećen vodič: [Migracija sa Disqus-a na FastComments](/(1-23-2020)-migrating-from-disqus-fastcomments.html). Kratak pregled je ispod.

## Kako preći u tri koraka

### 1. Izvezite svoje komentare iz Disqus-a

Pratite <a href="https://help.disqus.com/en/articles/1717199-importing-exporting" target="_blank">Disqus-ove korake za izvoz</a>. Poslaće vam datoteku sa "gz" ekstenzijom. Ne morate je otvarati ili raspakovati, a podrazumevana Windows instalacija to ni ne može. Naš backend direktno čita tu kompresovanu datoteku.

### 2. Uvezite datoteku u FastComments

Kada se prijavite, idite na <a href="https://fastcomments.com/auth/my-account/manage-data/import" target="_blank">stranicu za uvoz</a>, izaberite Disqus iz padajućeg menija i otpremite datoteku onako kako jeste. Uvoz se obavlja u pozadini; stranica će se automatski ažurirati dok se proces odvija da vam pokaže trenutni broj otkrivenih i uvezenih komentara. Sigurno je ponovo uvoziti koliko god puta vam je potrebno.

### 3. Zamenite Disqus snippet našim

Uklonite Disqus embed kod sa svojih stranica i umesto njega ubacite <a href="https://fastcomments.com/auth/my-account/install-wizard/" target="_blank">FastComments snippet</a>. Sve dok URL-ovi vaših stranica ostanu isti, vaši uvezeni komentari će se tačno poravnati tamo gde su bili.

## Na WordPress-u?

Ako vaša stranica radi na WordPress-u, preskočite ručne korake i instalirajte <a href="https://wordpress.org/plugins/fastcomments/" target="_blank">FastComments WordPress plugin</a>. On se brine o instalaciji, podešavanju i sinhronizaciji za vas, a zatim možete deaktivirati Disqus.

## Testirajte pre nego što se obavežete

Ne morate isključiti disqus odjednom. Možete privremeno koristiti Disqus i FastComments na istoj stranici kako biste uporedili izgled i osećaj pre nego što se potpuno prebacite. Ako vam treba pomoć oko nečega od ovoga, <a href="https://fastcomments.com/auth/my-account/help" target="_blank">kontaktirajte nas</a> i pomoći ćemo vam.

Niste sigurni koliko će vas FastComments koštati? Svaki plan je bez oglasa, a možete proveriti svoj iznos na <a href="https://fastcomments.com/pricing-calculator" target="_blank">računaru za cene</a>. Ako ste u EU, možete kreirati svoj račun na <a href="https://eu.fastcomments.com" target="_blank">eu.fastcomments.com</a> kako bi vaši podaci ostali u EU.

## Rezime

1. Izvezite svoje podatke iz Disqus-a
2. Uvezite ih u FastComments
3. Zamenite Disqus snippet sa <a href="https://fastcomments.com/auth/my-account/get-acct-code" target="_blank">FastComments-ovim</a>

To je to. Nema oglasa u vašem delu za komentare, lakše stranice, i svaki komentar koji ste već imali.

Živeli!

{{/isPost}}

---