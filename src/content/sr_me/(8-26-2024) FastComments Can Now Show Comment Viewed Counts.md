---
[category:Analytics]
###### [postdate]
# [postlink]FastComments sada može prikazati broj pregleda komentara[/postlink]

{{#unless isPost}}
FastComments sada podržava prikazivanje broja pored svakog komentara koji se uživo povećava dok korisnici pregledaju komentare.
{{/unless}}

{{#isPost}}

### Šta je novo

FastComments sada podržava prikazivanje broja pored svakog komentara koji se uživo povećava dok korisnici pregledaju komentare. Da li je komentar pregledan ili ne određuje se na osnovu korisničkog
naloga ili anon sesije. Podržava SSO (i Secure SSO i Simple SSO).

### Uživite demo

Omogućili smo brojač pregleda komentara za ovaj blog post posebno! Proverite broj pored oka na svakom komentaru!

### Dokumentacija

[Možete pronaći dokumentaciju za programere za postavljanje Brojeva pregleda ovde.](https://docs.fastcomments.com/guide-customizations-and-configuration.html#enable-comment-view-counts)

### Performanse

Brojevi se ne ažuriraju odmah, postoji mali (do tri sekunde) kašnjenje dok se brojevi agregiraju i zatim šalju putem mreže. Ovo je optimizacija tako da ako
imate uživo događaj, i nekoliko hiljada ljudi pregledava recimo 10 komentara u proseku na stranici, ne šaljemo odmah milionske ažuriranja (`3000 korisnika x 3000 učitavanja stranica = ~9 miliona promena`) svakom korisniku i opterećujemo
njihov pretraživač ili koristimo svu njihovu propusnost.

### Na kraju

Zahvaljujemo našim kupcima koji nam daju kontinuirane povratne informacije kako bismo mogli da razmišljamo o idejama poput ove i takođe daju nam vreme da lansiramo dobro optimizovane funkcije. Nadamo se da ćete
nastaviti da volite FastComments.

Pozdrav!

<script>
    window.demoOverrides = {
        enableViewCounts: true
    }
</script>

{{/isPost}}

---