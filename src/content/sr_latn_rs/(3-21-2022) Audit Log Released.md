---
[category:Security]

###### [postdate]
# [postlink]Objavljen Audit Log[/postlink]

{{#unless isPost}}FastComments sada pruža detaljan log svih izmena izvršenih putem platforme.{{/unless}}

{{#isPost}}

### Šta je novo

Od marta, FastComments sada uključuje detaljno praćenje uz Pro plan, i za sve postojeće poslovne korisnike.

Sve administrativne akcije, bez obzira da li je u pitanju pristup podacima, modifikacija komentara, ili ukidanje zabrane korisniku, se prate i indeksiraju u audit logu.

### Kako ga koristiti

Audit Log se može pristupiti odlaskom na `Manage Data` i zatim `Audit Logs`. Direktna veza je [ovde](https://fastcomments.com/auth/my-account/manage-data/audit-logs).

Da biste počeli, videćete stranicu poput sledeće:

<div class="text-center">
    <img src="/images/audit-log-main.png" alt="Audit Log" />
</div>

Odavde, možete pretraživati po korisničkom imenu, IP adresi, tipu akcije, ili resursu.

Na primer, filtriranje po resursu:

<div class="text-center">
    <img src="/images/audit-log-resource.png" alt="Audit Log Resource Selection" />
</div>

Takođe možemo detaljno istražiti unos u audit logu, i čak videti povezani objekat koji je promenjen.

Na primer, možemo istražiti unos za banovanje korisnika:

<div class="text-center">
    <img src="/images/audit-log-details.png" alt="Audit Log Entry Details" />
</div>

Ovde možemo videti ko je banovao korisnika (korisnik sa korisničkim imenom `winrid`). Možemo videti da je u pitanju trajna zabrana, a takođe imamo ID korisnika i e-mail koji je banovan, zajedno sa tekstom zbog kojeg su banovani.

Možemo videti IP koji je napravio zabranu, ali je IP adresа originalnog komentatora namerno izostavljena zbog njihove privatnosti.

Da bismo videli sve događaje iz `winrid`, jednostavno kliknite na ikonu filtera s desne strane, pored njihovog korisničkog imena.

### Ograničavanje pristupa

Podacima u audit logu može pristupiti samo korisnici sa dozvolom `Manage Data`.

### Zadržavanje podataka

Svi unosi u audit logu se čuvaju dve godine. Međutim, audit log se briše kada se vaš nalog obriše.

### API pristup

[Dokumentacija za Audit Log API je ovde.](https://docs.fastcomments.com/guide-api.html#audit-log-structure) Otkrivećete da se audit log može
sortirati i paginirati na nekoliko različitih načina, u zavisnosti od vašeg slučaja korišćenja.

### Postojeći korisnici

Ako ste na Pro planu ili ekvivalentnom, otkrićete da je audit log automatski omogućen! Ako želite da dobijete pristup, molimo vas da se obratite svom predstavniku podrške.

### Šta je izostavljeno

Jedina vrsta izmena koja je izostavljena su stvarni komentari i njihovi glasovi. To je zato što smo utvrdili da su naši korisnici uglavnom zainteresovani za administrativnu stranu prilikom audita, a ne nužno i za audite onoga što ljudi komentarišu. Ove vrste akcija takođe dodaju značajnu buku logu.

Međutim, ako je ovo zahtev, obratite se i možemo razgovarati o omogućavanju ovog za vas.

### Na kraju

Nadamo se da ćete smatrati ovaj deo naše ponude korisnim, korisnički interfejs lakim za korišćenje, i API brzim. 

Pozdrav!

{{/isPost}}

---