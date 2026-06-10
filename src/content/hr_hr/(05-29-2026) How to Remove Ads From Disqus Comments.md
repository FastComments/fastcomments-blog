[category:Migration]
[category:Tutorials]
###### [postdate]
# [postlink]Kako ukloniti oglase iz Disqus komentara[/postlink]

{{#unless isPost}}
Na besplatnom Disqus planu, vaša sekcija komentara dolazi s prikazanim oglasima. Postoje dva načina da ih se riješite. Bolji način također čini da se vaši komentari učitavaju brže i sprječava praćenje vaših čitatelja.
{{/unless}}

{{#isPost}}

Disqus financira svoj besplatni plan stavljanjem oglasa u vašu sekciju komentara, odmah ispod vašeg sadržaja, na istom mjestu gdje vaši čitatelji idu razgovarati s vama. Ti oglasi nisu vaši. Ne birate ih, i ne zarađujete ni cent od njih. To je cijena za besplatnu razinu.

Postoje dva stvarna načina da ih uklonite.

## Opcija 1: Nadogradite svoj Disqus plan

Jednostavan način je platiti Disqus. Njihovi plaćeni planovi isključuju oglase. Trenutne opcije možete pronaći na <a href="https://disqus.com/pricing/" target="_blank">Disqus stranici s cijenama</a>.

To djeluje, ali vrijedi biti jasan oko onoga što kupujete. Plaćate da biste ponišili minus. Oglasi nestaju, a ostatak Disqus ostaje isti: područje komentara još uvijek učitava veliki skup skripti trećih strana, i vaši čitatelji se još uvijek prate na stranicama koje ga ugrađuju. Plaćate da uklonite oglase, a ne da učinite sekciju komentara lakšom ili privatnijom.

## Opcija 2: Pređite na platformu koja nikada ne prikazuje oglase

Drugi način za uklanjanje oglasa je korištenje platforme za komentiranje koja ih u prvom redu ne prikazuje. :)

Za samo 0,99 USD/mjesečno, FastComments pruža duboku funkcionalnost optimiziranu za performanse bez praćenja ili oglasa.

## Zadržavate svaki komentar

Dio o kojem se ljudi najviše brinu je gubitak njihovih postojećih rasprava. FastComments ima ugrađeni Disqus uvoznik koji prenosi vaše komentare, korisničke nazive, korisničke avatare, slike unutar teksta, glasove i vremenske oznake. Čak premještamo sve slike na naš vlastiti CDN za vas.

Ako želite potpunu, detaljnu šemu, imamo posvećen vodič: [Migracija s Disqusa na FastComments](/(1-23-2020)-migrating-from-disqus-fastcomments.html). Kratka verzija je u nastavku.

## Kako prebaciti u tri koraka

### 1. Izvezite svoje komentare iz Disqusa

Slijedite <a href="https://help.disqus.com/en/articles/1717199-importing-exporting" target="_blank">Disqusove vlastite korake za izvoz</a>. Poslat će vam datoteku s ekstenzijom "gz". Ne morate je otvarati ili raspakirati, a osnovna Windows instalacija to ionako ne može. Naš backend direktno čita tu komprimiranu datoteku.

### 2. Uvezite datoteku u FastComments

Kada se prijavite, idite na <a href="https://fastcomments.com/auth/my-account/manage-data/import" target="_blank">stranicu za uvoz</a>, odaberite Disqus iz padajućeg izbornika i prenesite datoteku onakvu kakva jest. Uvoz se odvija u pozadini; stranica će se automatski ažurirati dok traje kako bi vam prikazala uživo broj pronađenih i uvezenih komentara. Sigurno je ponovno uvesti koliko god puta trebate.

### 3. Zamijenite Disqus snipet našim

Uklonite Disqus kod ugrađivanja s vaših stranica i umjesto njega stavite <a href="https://fastcomments.com/auth/my-account/install-wizard/" target="_blank">FastComments snipet</a>. Sve dok vaši URL-ovi stranica ostanu isti, vaši uvezeni komentari će se točno poravnati gdje su bili.

## Na WordPressu?

Ako vaša stranica radi na WordPressu, preskočite ručne korake i instalirajte <a href="https://wordpress.org/plugins/fastcomments/" target="_blank">FastComments WordPress dodatak</a>. On se brine za instalaciju, postavke i sinkronizaciju umjesto vas, a zatim možete deaktivirati Disqus.

## Isprobajte prije nego što se obvezate

Ne morate odmah prebaciti prekidač. Možete privremeno imati Disqus i FastComments na istoj stranici kako biste usporedili izgled i dojam prije nego što potpuno pređete. Ako vam je potrebna pomoć oko bilo kojeg od ovoga, <a href="https://fastcomments.com/auth/my-account/help" target="_blank">obratite nam se</a> i pomoći ćemo vam.

Niste sigurni koliko će vas FastComments koštati? Svaki plan je bez oglasa, a svoj broj možete provjeriti na <a href="https://fastcomments.com/pricing-calculator" target="_blank">kalkulatoru cijena</a>. Ako ste u EU, možete otvoriti svoj račun na <a href="https://eu.fastcomments.com" target="_blank">eu.fastcomments.com</a> tako da vaši podaci ostanu u EU.

## Sažetak

1. Izvezite svoje podatke iz Disqusa
2. Uvezite ih u FastComments
3. Zamijenite Disqus snipet za <a href="https://fastcomments.com/auth/my-account/get-acct-code" target="_blank">FastCommentsov</a>

To je to. Nema oglasa u vašoj sekciji komentara, lakše stranice, i svaki komentar koji ste već imali.

Živjeli!

{{/isPost}}