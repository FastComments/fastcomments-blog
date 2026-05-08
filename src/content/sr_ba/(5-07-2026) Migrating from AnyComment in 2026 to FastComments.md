---
[category:Migration]
###### [postdate]
# [postlink]Migracija sa AnyComment u 2026. na FastComments[/postlink]

{{#unless isPost}}
Pročitajte ovaj post kako biste saznali kako potpuno migrirati sa AnyComment na FastComments u 2026. godini.
{{/unless}}

{{#isPost}}

Imali smo nekoliko kupaca koji su postavljali pitanja o migraciji sa AnyComment u 2026. godini.

## AnyComment živi unutar WordPress-a

AnyComment je WordPress dodatak. Za razliku od samostalnih platformi kao što su Disqus ili Hyvor Talk, ne pokreće vlastiti backend - vaši komentari se čuvaju direktno u vašoj WordPress bazi podataka, u istoj `wp_comments` tabeli koju koristi osnovni WordPress. Ove informacije su odlične za migraciju: nema odvojenog AnyComment izvoza kojeg treba organizovati, i nema potrebe za koordinacijom sa trećim serverom. Vaši podaci su već na vašem vlastitom serveru.

To znači da standardni FastComments WordPress tok migracije obrađuje AnyComment bez dodatnih koraka.

## Opcija 1: FastComments WordPress dodatak (Preporučeno)

Najlakši put je instalirati <a href="https://wordpress.org/plugins/fastcomments/" target="_blank">FastComments WordPress dodatak</a>. Dodatak vas vodi kroz povezivanje vaše WordPress instalacije sa FastComments, i automatski preuzima postojeće podatke o komentarima. Nema potrebe za manuelnim preuzimanjem ili otpremanjem. Podaci se prebacuju iz vaše WordPress baze podataka na naše servere, tako da će ovo takođe smanjiti opterećenje na vašim serverima nakon što migracija bude završena.

Većina migracija se završava za nekoliko minuta.

Nakon što su podaci prebačeni, deaktivišite AnyComment. Komentari će i dalje biti prikazivani od strane FastComments, a dodatak održava vašu WordPress bazu podataka u sinhronizaciji kao rezervnu opciju (ako omogućite tu funkciju), tako da uvek imate vlasništvo nad svojim podacima.

## Opcija 2: WordPress XML izvoz

Ako biste radije migrirali ručno, ili ste već napustili WordPress i samo imate rezervnu XML datoteku, koristite ugrađeni izvoz WordPress-a.

1. U vašem WordPress administratoru, idite na **Alati -> Izvoz** i preuzmite XML datoteku.
2. Prijavite se na vaš FastComments kontrolni panel i idite <a href="https://fastcomments.com/auth/my-account/manage-data/import" target="_blank">ovde da uvezete datoteku</a>.
3. Odaberite **WordPress (.xml)** iz padajućeg menija i učitajte svoju datoteku.

Pošto AnyComment zapisuje u `wp_comments`, svaki AnyComment thread je u toj XML datoteci zajedno sa vašim drugim WordPress komentarima. Uvoznik automatski usklađuje komentare sa pravim postom.

## Zamjena AnyComment Widgeta

Ako ste koristili Opciju 1, FastComments WordPress dodatak već zamjenjuje AnyComment na vašem sajtu - samo deaktivišite AnyComment nakon što migracija bude završena.

Ako ste koristili Opciju 2 i zadržavate svoju WordPress instalaciju, instalirajte FastComments dodatak nakon toga da upravljate renderovanjem widgeta i kontinuiranom sinhronizacijom. Ako potpuno napuštate WordPress, dodajte naš <a href="https://fastcomments.com/install-wizard" target="_blank">instalacijski fragment</a> na vašem novom sajtu - podržavamo mnoge front-end okvire koje <a href="https://fastcomments.com/install-wizard" target="_blank">možete pronaći ovde</a>. <a href="https://fastcomments.com/auth/my-account/help" target="_blank">Možemo pomoći oko toga</a>.

## EU

Ako ste u EU, verovatno želite da kreirate svoj nalog na <a href="https://eu.fastcomments.com" target="_blank">eu.fastcomments.com</a> kako bi vaši podaci o korisnicima ostali u EU.

## Sažetak

1. Instalirajte FastComments WordPress dodatak i pustite ga da prenese vaše podatke, **ili** izvezite iz WordPress-a kao XML i otpremite ga na stranici za uvoz.
2. Deaktivirajte AnyComment.
3. Ako napuštate WordPress, promenite kod widgeta na vašem novom sajtu.

{{/isPost}}

---