---
[category:Analytics]
###### [postdate]
# [postlink]FastComments sada može da prikaže broj pregleda komentara[/postlink]

{{#unless isPost}}
FastComments sada podržava prikazivanje broja pored svakog komentara koji se uživo povećava dok korisnici gledaju komentare.
{{/unless}}

{{#isPost}}

### Šta je novo

FastComments sada podržava prikazivanje broja pored svakog komentara koji se uživo povećava dok korisnici gledaju komentare. Da li je komentar pregledan ili ne određuje se prema korisničkom
nalogu ili anonimizovanoj sesiji. Podržava SSO (i Secure SSO i Simple SSO).

### Live Demo

Omogućili smo broj pregleda komentara za ovaj blog post posebno! Proverite broj pored oka kod svakog komentara!

### Dokumentacija

[Možete pronaći dokumentaciju za programere za postavljanje broja pregleda ovde.](https://docs.fastcomments.com/guide-customizations-and-configuration.html#enable-comment-view-counts)

### Performanse

Brojevi se ne ažuriraju odmah, postoji mala (do tri sekunde) kašnjenje dok se brojevi agregiraju i zatim šalju putem mreže. Ovo je optimizacija kako bismo osigurali da, ako
imate uživo događaj, a nekoliko hiljada ljudi pogleda recimo 10 komentara u proseku na stranici, ne šaljemo odmah milijune ažuriranja (`3000 korisnika x 3000 učitavanja stranica = ~9 miliona izmena`) svakom korisniku i ne opterećujemo
njihov pregledač ili ne koriste sav njihov mrežni protok.

### Zaključak

Zahvaljujemo našim kupcima koji nam pružaju kontinuirane povratne informacije kako bismo mogli smisliti ovakve ideje i takođe nam daju vreme da lansiramo dobro optimizovane funkcije. Nadamo se da ćete
nastaviti da volite FastComments.

Živeli!

<script>
    window.demoOverrides = {
        enableViewCounts: true
    }
</script>

{{/isPost}}

---