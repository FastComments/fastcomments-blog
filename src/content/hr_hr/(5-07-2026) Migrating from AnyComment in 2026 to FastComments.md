---
[category:Migration]
###### [postdate]
# [postlink]Migriranje s AnyComment u 2026. na FastComments[/postlink]

{{#unless isPost}}
Pročitajte ovu objavu da biste saznali kako potpuno migrirati s AnyComment-a na FastComments u 2026.
{{/unless}}

{{#isPost}}

Imali smo nekoliko kupaca koji su pitali o migraciji s AnyComment-a u 2026.

## AnyComment Uživanje unutar WordPress-a

AnyComment je WordPress dodatak. Za razliku od samostalnih platformi poput Disqus-a ili Hyvor Talk-a, ne pokreće vlastiti backend - vaši komentari se pohranjuju izravno u vašu WordPress bazu podataka, u istoj `wp_comments` tablici koju koristi osnovni WordPress. To su odlične vijesti za migraciju: nema odvojenog AnyComment izvoza koji treba obraditi, i nema poslužitelja trećih strana s kojima se treba koordinirati. Vaši podaci su već na vašem vlastitom poslužitelju.

To znači da standardni tijek migracije FastComments za WordPress obrađuje AnyComment bez dodatnih koraka.

## Opcija 1: FastComments WordPress Dodatak (Preporučeno)

Najlakša opcija je instalirati <a href="https://wordpress.org/plugins/fastcomments/" target="_blank">FastComments WordPress dodatak</a>. Dodatak vas vodi kroz povezivanje vaše WordPress instalacije s FastComments, a automatski kopira vaše postojeće podatke komentara. Nema potrebe za ručnim preuzimanjem ili učitavanjem. Podaci se kopiraju iz vaše WordPress baze podataka na naše poslužitelje, tako da će se to također smanjiti opterećenje vaših poslužitelja kada migracija završi.

Većina migracija se završi za nekoliko minuta.

Nakon što su podaci preneseni, deaktivirajte AnyComment. Komentari će se nastaviti posluživati putem FastComments-a, a dodatak održava vašu WordPress bazu podataka u sinkronizaciji kao sigurnosnu kopiju (ako omogućite tu opciju), tako da uvijek posjedujete svoje podatke.

## Opcija 2: WordPress XML Izvoz

Ako radije želite migrirati ručno, ili ste već prešli s WordPress-a i imate samo sigurnosnu kopiju XML-a, upotrijebite ugrađeni izvoz WordPress-a.

1. U vašem WordPress administratorskom području, idite na **Alati -> Izvoz** i preuzmite XML datoteku.
2. Prijavite se na vašu FastComments nadzornu ploču i idite <a href="https://fastcomments.com/auth/my-account/manage-data/import" target="_blank">ovdje da uvezete datoteku</a>.
3. Odaberite **WordPress (.xml)** iz padajućeg izbornika i učitajte svoju datoteku.

Budući da AnyComment zapisuje u `wp_comments`, svaki AnyComment razgovor je u toj XML datoteci zajedno s vašim drugim WordPress komentarima. Uvoznik automatski usklađuje te komentare s pravom objavom.

## Zamjena AnyComment Widget-a

Ako ste koristili Opciju 1, FastComments WordPress dodatak već zamjenjuje AnyComment na vašoj stranici - samo deaktivirajte AnyComment nakon završetka migracije.

Ako ste koristili Opciju 2 i zadržavate svoju WordPress instalaciju, instalirajte FastComments dodatak nakon toga da upravlja prikazivanjem widgeta i kontinuiranom sinkronizacijom. Ako potpuno napuštate WordPress, dodajte naš <a href="https://fastcomments.com/install-wizard" target="_blank">instalacijski kod</a> na svoju novu stranicu - podržavamo mnoge front-end okvire koje <a href="https://fastcomments.com/install-wizard" target="_blank">možete pronaći ovdje</a>. <a href="https://fastcomments.com/auth/my-account/help" target="_blank">Možemo vam pomoći s tim</a>.

## EU

Ako ste u EU, vjerojatno ćete htjeti otvoriti svoj račun na <a href="https://eu.fastcomments.com" target="_blank">eu.fastcomments.com</a> kako bi vaši podaci o korisnicima ostali u EU.

## Sažetak

1. Instalirajte FastComments WordPress dodatak i dopustite mu da kopira vaše podatke, **ili** izvozite iz WordPress-a kao XML i učitajte ga na stranici za uvoz
2. Deaktivirajte AnyComment
3. Ako također napuštate WordPress, zamijenite kod widgeta na vašoj novoj stranici

{{/isPost}}

---