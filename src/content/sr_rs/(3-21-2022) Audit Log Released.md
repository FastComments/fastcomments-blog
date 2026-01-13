---
[category:Security]

###### [postdate]
# [postlink]Objavljen Audit Log[/postlink]

{{#unless isPost}}FastComments sada pruža detaljan zapis svih izmena napravljenih putem platforme.{{/unless}}

{{#isPost}}

### Šta je novo

Od marta, FastComments sada uključuje detaljan audit sa Pro planom, i za sve postojeće poslovne korisnike.

Sve administratorske akcije, bilo da se radi o pristupu podacima, izmeni komentara ili debanovanju korisnika, se prate i indeksiraju u audit logu.

### Kako ga koristiti

Audit Log možete pristupiti tako što idete na `Manage Data` i zatim `Audit Logs`. Direktna veza je [ovde](https://fastcomments.com/auth/my-account/manage-data/audit-logs).

Da biste započeli, videćete stranicu poput sledeće:

<div class="text-center">
    <img src="/images/audit-log-main.png" alt="Audit Log" />
</div>

Odavde možete pretraživati po korisničkom imenu, IP adresi, tipu akcije ili resursu.

Na primer, filtriranje po resursu:

<div class="text-center">
    <img src="/images/audit-log-resource.png" alt="Audit Log Resource Selection" />
</div>

Takođe možemo istražiti detalje stavke u audit logu, i čak videti povezani objekat koji je izmenjen.

Na primer, možemo istražiti stavku za banovanje korisnika:

<div class="text-center">
    <img src="/images/audit-log-details.png" alt="Audit Log Entry Details" />
</div>

Ovde možemo videti ko je banovao korisnika (korisnik sa korisničkim imenom `winrid`). Možemo videti da je to trajni ban, i takođe imamo ID korisnika i email koji su banovani, zajedno sa tekstom
zbog kojeg su banovani.

Možemo videti IP adresu koja je kreirala ban, ali je IP adresa originalnog komentatora namerno izostavljena radi njihove privatnosti.

Da bismo videli sve događaje od `winrid`, jednostavno možemo kliknuti na ikonu filtera sa desne strane, pored njihovog korisničkog imena.

### Ograničavanje pristupa

Podaci u audit logu mogu biti dostupni samo korisnicima sa dozvolom `Manage Data`.

### Čuvanje podataka

Sve stavke u audit logu se čuvaju dve godine. Međutim, audit log se briše kada se vaš nalog obriše.

### API pristup

[Dokumentacija za Audit Log API je ovde.](https://docs.fastcomments.com/guide-api.html#audit-log-structure) Videćete da se audit log može
sortirati i paginirati na nekoliko različitih načina u zavisnosti od vaših potreba.

### Postojeći korisnici

Ako ste na Pro ili ekvivalentnom planu, saznaćete da je audit log automatski omogućen! Ako želite da dobijete pristup, molimo kontaktirajte vašeg predstavnika za podršku.

### Šta je izostavljeno

Jedina vrsta izmena koja je izostavljena su stvarni komentari i njihovi glasovi. Ovo je zato što smo otkrili da su naši korisnici uglavnom zainteresovani za administrativnu stranu prilikom audita, a ne nužno za audite onoga što ljudi komentarišu. Ove vrste akcija takođe dodaju značajnu buku u log.

Međutim, ako je ovo zahtev, obratite se, i možemo razgovarati o omogućavanju ovoga za vas.

### Na kraju

Nadamo se da ćete pronaći ovaj deo naše ponude korisnim, UI lakim za korišćenje i API brzo.

Živeli!

{{/isPost}}

---