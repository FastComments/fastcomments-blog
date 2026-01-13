---
[category:Security]

###### [postdate]
# [postlink]Izveštaj o promenama objavljen[/postlink]

{{#unless isPost}}FastComments sada pruža detaljan izveštaj o svim izmenama napravljenim putem platforme.{{/unless}}

{{#isPost}}

### Šta je novo

Od marta, FastComments sada uključuje detaljno revizijsko praćenje sa Pro planom, kao i za sve postojeće korisnike preduzeća.

Sve administrativne radnje, bilo da se radi o pristupu podacima, izmeni komentara ili ponovnom dozvoljavanju korisnika, prate se i indeksiraju u izveštaju o promenama.

### Kako to koristiti

Izveštaj o promenama može se pristupiti odlaskom na `Manage Data` i zatim `Audit Logs`. Direktna veza je [ovde](https://fastcomments.com/auth/my-account/manage-data/audit-logs).

Da biste započeli, videćete stranicu poput sledeće:

<div class="text-center">
    <img src="/images/audit-log-main.png" alt="Izveštaj o promenama" />
</div>

Ovde možete pretraživati po korisničkom imenu, IP adresi, vrsti radnje ili resursu.

Na primer, filtriranje po resursu:

<div class="text-center">
    <img src="/images/audit-log-resource.png" alt="Izbor resursa u izveštaju o promenama" />
</div>

Takođe možemo detaljno proučiti stavku u izveštaju o promenama, pa čak i videti povezani objekat koji je izmenjen.

Na primer, možemo se zadržati na stavci za zabranu korisnika:

<div class="text-center">
    <img src="/images/audit-log-details.png" alt="Detalji stavke izveštaja o promenama" />
</div>

Ovde možemo videti ko je zabranio korisnika (korisnik sa korisničkim imenom `winrid`). Možemo primetiti da je to trajna zabrana, a takođe imamo ID korisnika i zabranjenu e-poštu, zajedno sa tekstom zbog kojeg su zabranjeni.

Možemo videti IP adresu koja je kreirala zabranu, ali IP adresu originalnog komentatora namerno izostavljamo zbog njihove privatnosti.

Da bismo videli sve događaje od `winrid`, jednostavno možemo kliknuti na ikonu filtra s desne strane, pored njihovog korisničkog imena.

### Ograničavanje pristupa

Podaci u izveštaju o promenama mogu se pristupiti samo korisnicima sa dozvolom `Manage Data`.

### Zadržavanje

Sve stavke u izveštaju o promenama čuvaju se dve godine. Međutim, izveštaj o promenama se briše kada se vaš nalog obriše.

### API pristup

[Dokumentacija za Audit Log API je ovde.](https://docs.fastcomments.com/guide-api.html#audit-log-structure) Videćete da se izveštaj o promenama može sortirati i paginirati na nekoliko različitih načina u zavisnosti od vašeg slučaja upotrebe.

### Postojeći kupci

Ako ste na Pro ili ekvivalentnom planu, primetićete da je izveštaj o promenama automatski omogućен! Ako želite da dobijete pristup, obratite se svom predstavniku za podršku.

### Šta je izostavljeno

Jedina vrsta izmena koja je izostavljena su stvarni komentari i njihovi glasovi. To je zato što smo otkrili da su naši korisnici uglavnom zainteresovani za administrativnu stranu prilikom revizije, a ne nužno zainteresovani za reviziju onoga što ljudi komentarišu. Ove vrste radnji takođe dodaju značajnu buku u izveštaj.

Međutim, ako je to zahtev, obratite se, i možemo razgovarati o omogućavanju ovoga za vas.

### Na kraju

Nadamo se da ćete pronaći ovaj deo naše ponude korisnim, da je korisnički interfejs jednostavan za korišćenje, i da je API brz. 

Živeli!

{{/isPost}}

---