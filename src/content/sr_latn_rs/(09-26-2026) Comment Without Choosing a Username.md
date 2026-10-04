[category:Features]
[category:UI &amp; Customization]

###### [postdate]
# [postlink]Komentar bez odabira korisničkog imena[/postlink]

{{#unless isPost}}
FastComments sada može svakom novom posetiocu dodeliti jedinstveno, neutralno korisničko ime tako da nikada ne mora da ga izmisli. Deljeno podrazumevano korisničko ime takođe više ne „uzima“ prvi korisnik koji ga koristi.
{{/unless}}

{{#isPost}}

### Šta je novo

Ako vaš sajt nema prijavu, posetilac koji želi da ostavi komentar je pitao za dve stvari: e‑mail i korisničko ime.  
E‑mail je jednostavan, ali za korisničko ime mora biti jedinstveno, biće javno i moraju ga smisliti odmah.

Ovo izdanje uklanja taj korak. Uključite **Generate Usernames Automatically** u prilagođavanju vašeg vidžeta, i svaki novi  
posetilac dolazi sa imenom poput `BraveOtter4172` već popunjenim. Mogu ga zadržati ili prepisati. U svakom slučaju,  
brže dolaze do polja za komentar.

### Uključivanje

Otvorite <a href="https://fastcomments.com/auth/my-account/customize-widget" target="_blank">Widget Customization</a>,  
pronađite odeljak **Anonymization** i označite **Generate Usernames Automatically**. Nema ništa drugo za podešavanje.

Radi sa ili bez **Allow Anonymous Comments**. Ako i dalje želite e‑mail od svakog komentatora, isključite anonimno  
komentarisanje. Posetioci unesu svoj e‑mail, korisničko ime se generiše za njih, i to je sve. Ako ne trebate e‑mail, uključite anonimno komentarisanje i posetilac može komentarisati bez ikakvog kucanja osim samog komentara.

### Šta posetioci vide

Polje za korisničko ime je unapred popunjeno generisanim imenom. To je običan unos, pa svako ko želi da bude poznat pod drugim imenom jednostavno ga zameni. Ništa nije sakriveno i ništa nije nametnuto.

Imena se sastoje od dve reči i broja, pa su čitljiva i neutralna. Niko ne završava kao `user_83729`.

### Svako ime je jedinstveno

Generisano ime se proverava protiv postojećih naloga pre nego što se ponudi, i rezerviše se za sesiju pregledača tog posetioca kako sledeći posetilac ne bi dobio isto ime. Prijavljeni korisnici, SSO korisnici i posetioci koji su već komentarisali nikada ne dobijaju novo ime. Zadržavaju ono koje imaju.

Povratni posetilac koji unese e‑mail koji je ranije koristio se povezuje sa svojim postojećim nalogom, tako da drugi poset ne kreira drugi identitet čak i ako je pregledač između toga očišćen.

### Ispravka greške - podrazumevano korisničko ime je sada zaista deljeno

Neki od vas su koristili **Default Username** sa vrednošću poput „Anonymous“ da bi došli do većeg dela ovde. To je imalo zamku. Korisnička imena su jedinstvena, pa je prvi posetilac koji je komentarisao kao „Anonymous“ sa svojim e‑mailom posedovao to ime, a sledećem posetiocu sa drugim e‑mailom je rečeno da je korisničko ime zauzeto.

To je ispravljeno. Podrazumevano korisničko ime se sada tretira kao deljeno ime za prikaz, a ne kao identitet. Svaki posetilac koji ga zadrži dobija svoj sopstveni nalog u pozadini, i svi se prikazuju kao „Anonymous“. Korisnička imena koja posetioci sami unesu i dalje moraju biti jedinstvena, kao i ranije.

Ako postavite oba, generisano ime ima prednost.

### Dokumentacija

<a href="https://docs.fastcomments.com/guide-customizations-and-configuration.html#auto-generate-username" target="_blank">Vodič za Generate Usernames Automatically</a>  
pokazuje opciju i kako ona interaguje sa ostalim podešavanjima anonimnog komentarisanja.  
<a href="https://docs.fastcomments.com/guide-customizations-and-configuration.html#default-username" target="_blank">Vodič za Default Username</a>  
pokriva ponašanje deljenog imena.

### Zaključak

Ovo je došlo od klijenta koji vodi sajt gde su posetioci pacijenti koji možda nikada neće ostaviti više od jednog komentara. Traženje e‑maila i jedinstvenog korisničkog imena bilo je previše pitanja. Ako neko podešavanje stoji između vaših čitalaca i polja za komentar, javite nam u nastavku.

Živeli!

{{/isPost}}

---