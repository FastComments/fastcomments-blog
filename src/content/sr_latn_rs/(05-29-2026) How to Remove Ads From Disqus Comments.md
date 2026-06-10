[category:Migration]
[category:Tutorials]
###### [postdate]
# [postlink]Kako ukloniti oglase iz Disqus komentara[/postlink]

{{#unless isPost}}
Na besplatnom Disqus planu, vaša sekcija komentara dolazi sa oglasima. Postoje dva načina da ih se oslobodite. Bolji način takođe ubrzava učitavanje vaših komentara i sprečava praćenje vaših čitalaca.
{{/unless}}

{{#isPost}}

Disqus plaća svoj besplatni plan stavljanjem oglasa u vašu sekciju komentara, odmah ispod vašeg sadržaja, na istom mestu gde vaši čitaoci dolaze da razgovaraju sa vama. Ti oglasi nisu vaši. Ne birate ih i ne zarađujete ni centa od njih. To je cena za besplatni nivo.

Postoje dva stvarna načina da ih uklonite.

## Opcija 1: Nadogradite svoj Disqus plan

Jednostavan put je da platite Disqus. Njihovi plaćeni planovi isključuju oglase. Trenutne opcije možete pronaći na <a href="https://disqus.com/pricing/" target="_blank">Disqus stranici sa cenama</a>.

To funkcioniše, ali vredi razjasniti šta kupujete. Plaćate da biste otklonili nedostatak. Oglasi nestaju, a ostatak Disqus ostaje isti: sekcija za komentare i dalje učitava težak paket skripti trećih strana, a vaši čitaoci se i dalje prate na sajtovima koji ga embeduju. Plaćate da uklonite oglase, a ne da učinite sekciju za komentare lakšom ili privatnijom.

## Opcija 2: Pređite na platformu koja nikad ne prikazuje oglase

Drugi način da uklonite oglase je da koristite platformu za komentare koja ih uopšte ne pokreće. :)

Za samo $0.99/mo, FastComments pruža duboku funkcionalnost optimizovanu za performanse bez praćenja ili oglasa.

## Sačuvajte svaki komentar

Deo zbog kojeg se ljudi najviše brinu je gubitak njihove postojeće diskusije. FastComments ima ugrađeni Disqus uvoznik koji prenosi vaše komentare, korisničke nazive, korisničke avatare, inline slike, glasove i oznake vremena. Čak premeštamo sve slike na naš CDN.

Ako želite potpunu, detaljnu šemu, imamo posvećen vodič: [Migracija sa Disqus na FastComments](/(1-23-2020)-migrating-from-disqus-fastcomments.html). Kratka verzija je ispod.

## Kako preći u tri koraka

### 1. Izvezite svoje komentare iz Disqus

Pratite <a href="https://help.disqus.com/en/articles/1717199-importing-exporting" target="_blank">Disqus-ove korake za izvoz</a>. Poslaće vam fajl sa "gz" ekstenzijom. Nema potrebe da ga otvarate ili raspakujete, a podrazumevana Windows instalacija to ionako ne može. Naš backend čita taj komprimovani fajl direktno.

### 2. Uvezite fajl u FastComments

Kada se prijavite, idite na <a href="https://fastcomments.com/auth/my-account/manage-data/import" target="_blank">stranicu za uvoz</a>, izaberite Disqus iz padajućeg menija i uploadujte fajl onakav kakav jeste. Uvoz se obavlja u pozadini; stranica će se automatski ažurirati kako se uvoz odvija da bi vam pokazala trenutni broj otkrivenih i uvezenih komentara. Sigurno je ponovo uvesti koliko god puta vam je potrebno.

### 3. Zamenite Disqus kod našim

Uklonite Disqus embed kod sa vaših stranica i umetnite <a href="https://fastcomments.com/auth/my-account/install-wizard/" target="_blank">FastComments kod</a> umesto toga. Sve dok vaši URL-ovi stranica ostaju isti, vaši uvezeni komentari će se tačno poravnati tamo gde su bili.

## Na WordPressu?

Ako vaš sajt koristi WordPress, preskočite ručne korake i instalirajte <a href="https://wordpress.org/plugins/fastcomments/" target="_blank">FastComments WordPress dodatak</a>. On će obaviti instalaciju, postavku i sinhronizaciju za vas, a zatim možete deaktivirati Disqus.

## Testirajte pre nego što se obavežete

Ne morate sve prebaciti odjednom. Možete privremeno pokretati Disqus i FastComments na istoj stranici da uporedite izgled i osećaj pre nego što se potpuno prebacite. Ako želite pomoć oko bilo čega ovoga, <a href="https://fastcomments.com/auth/my-account/help" target="_blank">obratite nam se</a> i pomoći ćemo vam.

Niste sigurni koliko će vas FastComments koštati? Svaki plan je bez oglasa, a možete proveriti svoj broj na <a href="https://fastcomments.com/pricing-calculator" target="_blank">kalkulatoru cena</a>. Ako ste u EU, možete kreirati svoj nalog na <a href="https://eu.fastcomments.com" target="_blank">eu.fastcomments.com</a> tako da vaši podaci ostanu u EU.

## Preporučak

1. Izvezite svoje podatke iz Disqus
2. Uvezite ih u FastComments
3. Zamenite Disqus kod za <a href="https://fastcomments.com/auth/my-account/get-acct-code" target="_blank">FastComments-ov</a>

To je to. Nema oglasa u vašoj sekciji komentara, lakše stranice i svaki komentar koji ste već imali.

Pozdrav! 

{{/isPost}}