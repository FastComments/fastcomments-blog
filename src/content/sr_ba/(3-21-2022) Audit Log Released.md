---
[category:Security]

###### [postdate]
# [postlink]Objavljen Rečnik Audita[/postlink]

{{#unless isPost}}FastComments sada pruža detaljan log svih modifikacija napravljenih putem platforme.{{/unless}}

{{#isPost}}

### Šta je Novo

Od marta, FastComments sada uključuje detaljno praćenje sa Pro planom, i za sve postojeće preduzetničke klijente.

Sve administrativne akcije, bilo da je reč o pristupu podacima, modifikaciji komentara, ili ukidanju zabrane korisniku, su praćene i indeksirane u logu audita.

### Kako ga Koristiti

Log audita može se pristupiti odlaskom na `Manage Data` i zatim `Audit Logs`. Direktna poveznica je [ovde](https://fastcomments.com/auth/my-account/manage-data/audit-logs).

Da biste počeli, videćete stranicu poput sledeće:

<div class="text-center">
    <img src="/images/audit-log-main.png" alt="Audit Log" />
</div>

Odatle, možete pretraživati po korisničkom imenu, IP adresi, vrsti akcije, ili resursu.

Na primer, filtriranje po resursu:

<div class="text-center">
    <img src="/images/audit-log-resource.png" alt="Audit Log Resource Selection" />
</div>

Takođe možemo da detaljno istražimo stavku u logu audita, i čak vidimo povezani objekat koji je promenjen.

Na primer, možemo da istražimo stavku za zabranu korisnika:

<div class="text-center">
    <img src="/images/audit-log-details.png" alt="Audit Log Entry Details" />
</div>

Ovde možemo videti ko je zabranio korisnika (korisnik sa korisničkim imenom `winrid`). Možemo videti da je to trajna zabrana, kao i ID korisnika i email zabranjenog, zajedno sa tekstom
zbog kojeg su zabranjeni.

Možemo videti IP koji je napravio zabranu, ali je IP originalnog komentatora namerno izostavljen zbog njihove privatnosti.

Da bismo videli sve događaje od `winrid`, jednostavno možemo kliknuti na ikonu filtra s desne strane, pored njihovog korisničkog imena.

### Ograničavanje Pristupa

Podaci u logu audita mogu se pristupiti samo korisnicima sa `Manage Data` dozvolom.

### Zadržavanje

Sve stavke u logu audita se čuvaju dve godine. Međutim, log audita se briše kada se vaš nalog obriše.

### API Pristup

[Dokumentacija za Audit Log API je ovde.](https://docs.fastcomments.com/guide-api.html#audit-log-structure) Pronaći ćete da se log audita može 
sortirati i paginirati na nekoliko različitih načina u zavisnosti od vašeg slučaja upotrebe.

### Postojeći Klijenti

Ako ste na Pro ili ekvivalentnom planu, primetićete da je log audita automatski omogućen! Ako želite da dobijete pristup, molimo vas da kontaktirate svog podršku
predstavnika.

### Šta je Izostavljeno

Jedina vrsta izmena koje su izostavljene su stvarni komentari i njihovi glasovi. Ovo je zato što smo otkrili da su naši klijenti uglavnom zainteresovani za administrativnu
stranu tokom audita, a ne nužno zainteresovani za audit onoga što ljudi komentarišu. Ove vrste akcija takođe dodaju značajnu buku u log.

Međutim, ako je ovo zahtev, kontaktirajte nas, i možemo razgovarati o omogućavanju toga za vas.

### Zaključak

Nadamo se da ćete pronaći ovu oblast naše ponude korisnom, da će vam UI biti lak za korišćenje, i da će API biti brz.

Živeli!

{{/isPost}}

---