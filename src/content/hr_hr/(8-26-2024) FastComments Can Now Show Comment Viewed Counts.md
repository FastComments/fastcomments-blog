---
[category:Analytics]
###### [postdate]
# [postlink]FastComments sada može prikazivati broj pregleda komentara[/postlink]

{{#unless isPost}}
FastComments sada podržava prikazivanje broja pored svakog komentara koji se uživo povećava dok korisnici pregledavaju komentare.
{{/unless}}

{{#isPost}}

### Što je novo

FastComments sada podržava prikazivanje broja pored svakog komentara koji se uživo povećava dok korisnici pregledavaju komentare. O tome je li komentar pregledan ili ne odlučuje korisnički
račun ili anon sesija. Podržava SSO (i Secure SSO i Simple SSO).

### Živa demonstracija

Omogućili smo broj pregleda komentara za ovaj blog post posebno! Provjerite broj pored oka na svakom komentaru!

### Dokumentacija

[Možete pronaći dokumentaciju za developere za postavljanje Brojeva pregleda ovdje.](https://docs.fastcomments.com/guide-customizations-and-configuration.html#enable-comment-view-counts)

### Performanse

Brojevi se ne ažuriraju odmah, postoji mali (do tri sekunde) kašnjenje dok se brojevi agregiraju i zatim šalju preko mreže. Ovo je optimizacija kako bismo spriječili da, ako
imate događaj uživo i nekoliko tisuća ljudi pregleda recimo 10 komentara u prosjeku na stranici, odmah šaljemo milijune ažuriranja (`3000 korisnika x 3000 učitavanja stranica = ~9 milijuna promjena`) svakom korisniku i opterećujemo
njihov preglednik ili koristimo svu njihovu propusnost.

### Na kraju

Zahvaljujemo našim kupcima koji nam daju kontinuirane povratne informacije kako bismo mogli razmišljati o idejama poput ove i također nam daju vremena da pokrenemo dobro optimizirane funkcije. Nadamo se da ćete
nastaviti voljeti FastComments.

Živjeli!

<script>
    window.demoOverrides = {
        enableViewCounts: true
    }
</script>

{{/isPost}}

---