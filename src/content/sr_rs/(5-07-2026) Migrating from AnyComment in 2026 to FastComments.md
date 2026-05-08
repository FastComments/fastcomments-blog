---
[category:Migration]
###### [postdate]
# [postlink]Migracija sa AnyComment-a u 2026. na FastComments[/postlink]

{{#unless isPost}}
Pročitajte ovaj post da biste videli kako potpuno migrirati sa AnyComment-a na FastComments u 2026. godini.
{{/unless}}

{{#isPost}}

Imali smo brojne klijente koji su pitali o migraciji sa AnyComment-a u 2026. godini.

## AnyComment živi unutar WordPress-a

AnyComment je WordPress dodatak. Za razliku od samostalnih platformi poput Disqus ili Hyvor Talk, ne pokreće svoj backend - vaši komentari se čuvaju direktno u vašoj WordPress bazi podataka, u istoj `wp_comments` tabeli koju koristi osnovni WordPress. Ovo su sjajne vesti za migraciju: nema potrebe za posebnom AnyComment export opcijom niti trećim serverom za koordinaciju. Vaši podaci su već na vašem serveru.

To znači da standardni tok migracije FastComments za WordPress obrađuje AnyComment bez dodatnih koraka.

## Opcija 1: FastComments WordPress dodatak (preporučeno)

Najlakši put je da instalirate <a href="https://wordpress.org/plugins/fastcomments/" target="_blank">FastComments WordPress dodatak</a>. Dodatak vas vodi kroz povezivanje vaše WordPress instalacije sa FastComments, i automatski prebacuje vaše postojeće podatke o komentarima. Nema potrebe da ručno preuzimate ili otpremate podatke. Podaci se prebacuju sa vaše WordPress baze na naše servere, tako da će se ovo takođe osloboditi opterećenje sa vaših servera kada migracija bude završena.

Većina migracija se završi za nekoliko minuta.

Nakon što su podaci prebačeni, deaktivirajte AnyComment. Komentari će i dalje biti servirani od strane FastComments-a, a dodatak održava vašu WordPress bazu u sinhronizaciji kao rezervnu kopiju (ako omogućite tu opciju), tako da uvek posedujete svoje podatke.

## Opcija 2: WordPress XML Export

Ako radije želite da migrirate ručno, ili ste već prešli sa WordPress-a i samo imate rezervnu XML datoteku, koristite ugrađeni WordPress export.

1. U vašem WordPress admin panelu, idite na **Alati -> Izvoz** i preuzmite XML datoteku.
2. Prijavite se na vaš FastComments kontrolni panel i idite <a href="https://fastcomments.com/auth/my-account/manage-data/import" target="_blank">ovde da uvezete datoteku</a>.
3. Izaberite **WordPress (.xml)** iz padajućeg menija i otpremite vašu datoteku.

Pošto AnyComment piše u `wp_comments`, svaki AnyComment razgovor je u toj XML datoteci pored vaših drugih WordPress komentara. Uvoznik ih automatski uklapa u odgovarajući post.

## Zamena AnyComment Widget-a

Ako ste koristili Opciju 1, FastComments WordPress dodatak već zamenjuje AnyComment na vašem sajtu - samo deaktivirajte AnyComment nakon što migracija završi.

Ako ste koristili Opciju 2 i zadržavate svoju WordPress instalaciju, instalirajte FastComments dodatak nakon toga da obradite prikaz widget-a i kontinuiranu sinhronizaciju. Ako potpuno prelazite sa WordPress-a, ugradite naš <a href="https://fastcomments.com/install-wizard" target="_blank">install snippet</a> na vašem novom sajtu - podržavamo mnoge frontend framework-e koje <a href="https://fastcomments.com/install-wizard" target="_blank">možete pronaći ovde</a>. <a href="https://fastcomments.com/auth/my-account/help" target="_blank">Možemo vam pomoći oko toga</a>.

## EU

Ako ste u EU, verovatno želite da kreirate svoj nalog na <a href="https://eu.fastcomments.com" target="_blank">eu.fastcomments.com</a> kako bi vaši podaci o kupcima ostali u EU.

## Rezime

1. Instalirajte FastComments WordPress dodatak i dozvolite da preuzme vaše podatke, **ili** izvezite iz WordPress-a kao XML i otpremite ga na stranici za uvoz
2. Deaktivirajte AnyComment
3. Ako napuštate WordPress takođe, zamenite kod widget-a na vašem novom sajtu

{{/isPost}}

---