[category:Features]
[category:UI &amp; Customization]

###### [postdate]
# [postlink]Komentar Bez Odabira Korisničkog Imena[/postlink]

{{#unless isPost}}
FastComments sada može svakom novom posjetitelju dodijeliti jedinstveno, neutralno korisničko ime tako da nikada ne moraju smišljati vlastito. Dijeljeno Zadano Korisničko Ime također više ne „uzima“ prvi korisnik koji ga koristi.
{{/unless}}

{{#isPost}}

### Što je Novo

Ako vaše web mjesto nema prijavu, posjetitelju koji želi ostaviti komentar traže se dvije stvari: e‑mail i korisničko ime. E‑mail je jednostavan, ali korisničko ime mora biti jedinstveno, bit će javno i moraju ga smisliti odmah.

Ovo izdanje uklanja taj korak. Uključite **Generate Usernames Automatically** u prilagodbi widgeta, i svaki novi posjetitelj dolazi s imenom poput `BraveOtter4172` već unaprijed ispunjenim. Mogu ga zadržati ili prepisati. U svakom slučaju, brže dolaze do okvira za komentar.

### Kako ga Uključiti

Otvorite <a href="https://fastcomments.com/auth/my-account/customize-widget" target="_blank">Widget Customization</a>, pronađite odjeljak **Anonymization** i označite **Generate Usernames Automatically**. Nema ništa drugo za konfigurirati.

Radi s ili bez **Allow Anonymous Comments**. Ako i dalje želite e‑mail od svakog komentatora, isključite anonimno komentiranje. Posjetitelji unesu svoj e‑mail, a korisničko ime se generira za njih, i to je sve. Ako e‑mail nije potreban, uključite anonimno komentiranje i posjetitelj može komentirati bez ikakvog tipkanja osim samog komentara.

### Što Posjetitelji Vidi

Polje za korisničko ime je unaprijed popunjeno generiranim imenom. To je običan unos, pa svatko tko želi biti poznat pod drugim imenom jednostavno ga zamijeni. Ništa nije skriveno i ništa nije nametnuto.

Imena se sastoje od dvije riječi i broja, pa su čitljiva i neutralna. Nitko ne završava kao `user_83729`.

### Svako Ime Je Jedinstveno

Generirano ime se provjerava protiv postojećih računa prije nego što se ponudi, i rezervira se za sesiju preglednika tog posjetitelja kako sljedeći posjetitelj ne bi dobio isto ime. Prijavljeni korisnici, SSO korisnici i posjetitelji koji su već komentirali nikada ne dobivaju novo ime. Zadržavaju ono koje imaju.

Povratni posjetitelj koji unese e‑mail koji je već koristio povezuje se s postojećim računom, pa drugi posjet ne stvara drugi identitet čak i ako je preglednik između toga očišćen.

### Ispravak Greške - Zadano Korisničko Ime Sada Je Zaista Dijeljeno

Neki od vas koristili su **Default Username** s vrijednošću poput „Anonymous“ kako bi došli većinom do ovdje. To je imalo zamku. Korisnička imena su jedinstvena, pa je prvi posjetitelj koji je komentirao kao „Anonymous“ s njihovim e‑mailom posjedovao to ime, a sljedećem posjetitelju s drugim e‑mailom rečeno je da je korisničko ime zauzeto.

To je ispravljeno. Zadano korisničko ime sada se tretira kao zajedničko ime za prikaz, a ne kao identitet. Svaki posjetitelj koji ga zadrži dobiva svoj račun u pozadini, a svi se prikazuju kao „Anonymous“. Korisnička imena koja posjetitelji sami upišu i dalje moraju biti jedinstvena, kao i prije.

Ako postavite oba, generirano ime ima prednost.

### Dokumentacija

<a href="https://docs.fastcomments.com/guide-customizations-and-configuration.html#auto-generate-username" target="_blank">Vodič za Generate Usernames Automatically</a>
covers the option and how it interacts with the other anonymous commenting settings.
<a href="https://docs.fastcomments.com/guide-customizations-and-configuration.html#default-username" target="_blank">Vodič za Default Username</a>
covers the shared-name behavior.

### Zaključak

Ovo je došlo od kupca koji vodi web mjesto gdje su posjetitelji pacijenti koji možda nikada neće ostaviti više od jednog komentara. Traženje e‑maila i jedinstvenog korisničkog imena bilo je previše pitanja. Ako neka postavka stoji između vaših čitatelja i okvira za komentar, javite nam u nastavku.

Živjeli!

{{/isPost}}