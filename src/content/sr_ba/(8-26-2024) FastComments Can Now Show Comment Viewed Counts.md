---
[category:Analytics]
###### [postdate]
# [postlink]FastComments sada može prikazivati broj pregleda komentara[/postlink]

{{#unless isPost}}
FastComments sada podržava prikazivanje broja pored svakog komentara koji se uživo povećava dok korisnici pregledaju komentare.
{{/unless}}

{{#isPost}}

### Šta je novo

FastComments sada podržava prikazivanje broja pored svakog komentara koji se uživo povećava dok korisnici pregledaju komentare. Da li je komentar pregledan ili ne određuje se prema
korisničkom nalogu ili anon sesiji. Podržava SSO (i Secure SSO i Simple SSO).

### Uživite u demo

Omogućili smo broj pregleda komentara za ovaj blog post posebno! Proverite broj pored oka na svakom komentaru!

### Dokumentacija

[Možete pronaći dokumentaciju za programere za podešavanje broja pregleda ovde.](https://docs.fastcomments.com/guide-customizations-and-configuration.html#enable-comment-view-counts)

### Performanse

Brojevi se ne ažuriraju odmah, postoji mali (do tri sekunde) kašnjenje dok se brojevi agregiraju i zatim šalju preko mreže. Ovo je optimizacija kako bismo osigurali da ako
imate uživo događaj, i nekoliko hiljada ljudi pregleda recimo 10 komentara u proseku na stranici, ne šaljemo odmah milione ažuriranja (`3000 korisnika x 3000 učitavanja stranice = ~9 miliona promena`) svakom korisniku i usporimo
njihov pretraživač ili iskoristimo svu njihovu mrežnu propusnost.

### Zaključak

Zahvaljujemo našim kupcima koji nam pružaju kontinuirane povratne informacije kako bismo mogli razmišljati o ovakvim idejama i takođe nam daju vremena da pokrenemo dobro optimizovane funkcionalnosti. Nadamo se da ćete
nastaviti da volite FastComments.

Pozdrav!

<script>
    window.demoOverrides = {
        enableViewCounts: true
    }
</script>

{{/isPost}}

---