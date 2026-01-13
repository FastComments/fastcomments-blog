---
[category:Analytics]
###### [postdate]
# [postlink]FastComments sada može prikazati brojeve pregleda komentara[/postlink]

{{#unless isPost}}
FastComments sada podržava prikaz broja pored svakog komentara koji se uživo povećava dok korisnici pregledaju komentare.
{{/unless}}

{{#isPost}}

### Šta je novo

FastComments sada podržava prikaz broja pored svakog komentara koji se uživo povećava dok korisnici pregledaju komentare. Da li je komentar pregledan ili ne, zavisi od korisnikovog 
naloga ili anonimne sesije. Podržava SSO (i Sigurno SSO i Jednostavno SSO).

### Live demo

Omogućili smo broj pregleda komentara za ovaj blog post posebno! Proverite broj pored oka za svaki komentar!

### Dokumentacija

[Možete pronaći dokumentaciju za programere za postavljanje brojeva pregleda ovde.](https://docs.fastcomments.com/guide-customizations-and-configuration.html#enable-comment-view-counts)

### Performanse

Brojevi se ne ažuriraju odmah, postoji mali (do tri sekunde) vremenski odložak dok se brojevi agregiraju i zatim šalju preko mreže. Ovo je optimizacija tako da ako 
imate uživo događaj, i nekoliko hiljada ljudi pregledava recimo 10 komentara u proseku na stranici, ne šaljemo odmah milione ažuriranja (`3000 korisnika x 3000 učitavanja stranica = ~9 miliona promena`) svakom korisniku i ne opterećujemo
njihov pretraživač ili ne koristimo celu njihovu propusnost mreže.

### Na kraju

Zahvaljujemo našim korisnicima koji nam daju kontinuirane povratne informacije kako bismo mogli razmišljati o idejama poput ove i takođe nam daju vremena da lansiramo dobro optimizovane funkcije. Nadamo se da
ćete nastaviti da volite FastComments.

Živeli!

<script>
    window.demoOverrides = {
        enableViewCounts: true
    }
</script>

{{/isPost}}

---