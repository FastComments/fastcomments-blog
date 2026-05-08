[category:Migration]  
###### [postdate]  
# [postlink]Migracija sa AnyComment-a u 2026. na FastComments[/postlink]  

{{#unless isPost}}  
Pročitajte ovaj post da saznate kako potpuno migrirati sa AnyComment-a na FastComments u 2026.  
{{/unless}}  

{{#isPost}}  

Imali smo nekoliko klijenata koji su pitali o migraciji sa AnyComment-a u 2026.  

## AnyComment živi unutar WordPress-a  

AnyComment je WordPress dodatak. Za razliku od samostalnih platformi poput Disqus ili Hyvor Talk, ne pokreće sopstveni backend - vaši komentari se čuvaju direktno u vašoj WordPress bazi podataka, u istoj `wp_comments` tabeli koju koristi osnovni WordPress. Ovo su odlične vesti za migraciju: nema dodatnog AnyComment izvezenog podataka s kojim treba da se nosite, niti treće strane servera sa kojom treba da se koordinirate. Vaši podaci su već na vašem serveru.  

To znači da standardni FastComments WordPress proces migracije obrađuje AnyComment bez dodatnih koraka.  

## Opcija 1: FastComments WordPress dodatak (Preporučeno)  

Najlakši put je da instalirate <a href="https://wordpress.org/plugins/fastcomments/" target="_blank">FastComments WordPress dodatak</a>. Dodatak vas vodi kroz povezivanje vaše WordPress instalacije sa FastComments, i automatski prebacuje vaše postojeće podatke o komentarima. Nema potrebe za manuelnim preuzimanjem ili otpremanjem. Podaci se prebacuju iz vaše WordPress baze podataka na naše servere, tako da će ovo takođe smanjiti opterećenje vaših servera kada migracija bude završena.  

Većina migracija se završava za nekoliko minuta.  

Kada se podaci presele, deaktivišite AnyComment. Komentari će nastaviti da se isporučuju preko FastComments, a dodatak održava vašu WordPress bazu podataka u sinhronizaciji kao rezervnu kopiju (ako omogućite tu funkciju), tako da uvek posedujete svoje podatke.  

## Opcija 2: WordPress XML izvoz  

Ako radije želite da migrirate ručno, ili ste već prešli sa WordPress-a i imate samo rezervnu XML datoteku, koristite ugrađeni izvoz WordPress-a.  

1. U vašem WordPress admin panelu, idite na **Alati -> Izvoz** i preuzmite XML datoteku.  
2. Prijavite se na vaš FastComments kontrolni panel i idite <a href="https://fastcomments.com/auth/my-account/manage-data/import" target="_blank">ovde da uvezete datoteku</a>.  
3. Odaberite **WordPress (.xml)** iz padajućeg menija i otpremite vašu datoteku.  

Pošto AnyComment piše u `wp_comments`, svaki AnyComment razgovor je u toj XML datoteci zajedno sa vašim drugim WordPress komentarima. Uvoznik ih automatski usklađuje sa pravim postom.  

## Zamena AnyComment widget-a  

Ako ste koristili Opciju 1, FastComments WordPress dodatak već zamenjuje AnyComment na vašem sajtu - samo deaktivirajte AnyComment nakon što migracija završi.  

Ako ste koristili Opciju 2 i održavate vašu WordPress instalaciju, instalirajte FastComments dodatak nakon toga da upravljate renderovanjem widget-a i kontinuiranom sinhronizacijom. Ako potpuno prelazite sa WordPress-a, postavite naš <a href="https://fastcomments.com/install-wizard" target="_blank">instalacioni isječak</a> na vašem novom sajtu - podržavamo mnoge frontend okvire koje <a href="https://fastcomments.com/install-wizard" target="_blank">možete pronaći ovde</a>. <a href="https://fastcomments.com/auth/my-account/help" target="_blank">Možemo pomoći sa tim</a>.  

## EU  

Ako ste u EU, verovatno ćete želeti da kreirate svoj nalog na <a href="https://eu.fastcomments.com" target="_blank">eu.fastcomments.com</a> kako bi vaši podaci ostali u EU.  

## Rezime  

1. Instalirajte FastComments WordPress dodatak i pustite ga da prekopira vaše podatke, **ili** izvezite iz WordPress-a kao XML i otpremite ga na stranici za uvoz  
2. Deaktivirajte AnyComment  
3. Ako napuštate WordPress takođe, zamenite kod widget-a na vašem novom sajtu  

{{/isPost}}