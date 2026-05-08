---
[category:Migration]
###### [postdate]
# [postlink]Migriranje sa AnyComment u 2026. godini na FastComments[/postlink]

{{#unless isPost}}
Pročitajte ovaj post da biste saznali kako da potpuno migrirate sa AnyComment na FastComments u 2026. godini.
{{/unless}}

{{#isPost}}

Imali smo nekoliko kupaca koji su pitali o migraciji sa AnyComment u 2026. godini.

## AnyComment živi unutar WordPress-a

AnyComment je WordPress dodatak. Za razliku od samostalnih platformi kao što su Disqus ili Hyvor Talk, ne pokreće svoj vlastiti backend - vaši komentari se čuvaju direktno u vašoj WordPress bazi podataka, u istoj `wp_comments` tabeli koju koristi osnovni WordPress. Ovo su odlične vesti za migraciju: nema posebnog AnyComment eksportovanja koje treba obraditi, niti treće strane servera sa kojom se mora koordinirati. Vaši podaci su već na vašem serveru.

To znači da standardni postupak migracije FastComments za WordPress obuhvata AnyComment bez dodatnih koraka.

## Opcija 1: FastComments WordPress Dodatak (Preporučeno)

Najlakši put je da instalirate <a href="https://wordpress.org/plugins/fastcomments/" target="_blank">FastComments WordPress dodatak</a>. Dodatak vas vodi kroz povezivanje vaše WordPress instalacije sa FastComments, i automatski prenosi vaše postojeće podatke o komentarima. Nema potrebe da preuzimate ili otpremate nešto ručno. Podaci se prebacuju iz vaše WordPress baze podataka na naše servere, tako da će se ovo takođe osloboditi opterećenje sa vaših servera nakon što migracija bude završena.

Većina migracija završi za nekoliko minuta.

Nakon što su podaci preneseni, deaktivirajte AnyComment. Komentari će se i dalje prikazivati putem FastComments, a dodatak održava vašu WordPress bazu podataka u sinhronizaciji kao rezervu (ako omogućite tu opciju), tako da uvek posedujete svoje podatke.

## Opcija 2: WordPress XML Eksport

Ako više volite da migrirate ručno, ili ste već prešli sa WordPress-a i imate samo rezervnu XML datoteku, koristite ugrađeni eksport WordPress-a.

1. U vašem WordPress administrativnom panelu, idite na **Alati -> Eksport** i preuzmite XML datoteku.
2. Prijavite se na vaš FastComments kontrolni panel i idite <a href="https://fastcomments.com/auth/my-account/manage-data/import" target="_blank">ovde da otpremite datoteku</a>.
3. Izaberite **WordPress (.xml)** iz padajućeg menija i otpremite vašu datoteku.

Pošto AnyComment upisuje u `wp_comments`, svaka AnyComment diskusija se nalazi u toj XML datoteci zajedno sa vašim ostalim WordPress komentarima. Uvoznik automatski usklađuje komentare sa pravim postom.

## Zamena AnyComment Dodatka

Ako ste koristili Opciju 1, FastComments WordPress dodatak već zamenjuje AnyComment na vašem sajtu - samo deaktivirajte AnyComment nakon završetka migracije.

Ako ste koristili Opciju 2 i zadržavate vašu WordPress instalaciju, instalirajte FastComments dodatak kako biste upravljali prikazom dodataka i kontinuiranom sinhronizacijom. Ako se potpuno prebacujete sa WordPress-a, dodajte naš <a href="https://fastcomments.com/install-wizard" target="_blank">instalacioni snippet</a> na vašem novom sajtu - podržavamo mnogo frontend okvira koje <a href="https://fastcomments.com/install-wizard" target="_blank">možete pronaći ovde</a>. <a href="https://fastcomments.com/auth/my-account/help" target="_blank">Možemo vam pomoći sa tim</a>.

## EU

Ako ste u EU, verovatno ćete želeti da kreirate svoj nalog na <a href="https://eu.fastcomments.com" target="_blank">eu.fastcomments.com</a> kako bi vaši podaci o korisnicima ostali u EU.

## Recap

1. Instalirajte FastComments WordPress dodatak i dozvolite mu da prenese vaše podatke, **ili** eksportujte iz WordPress-a kao XML i otpremite ih na stranici za uvoz
2. Deaktivirajte AnyComment
3. Ako i odlazite sa WordPress-a, zamenite kod dodatka na vašem novom sajtu

{{/isPost}}

---