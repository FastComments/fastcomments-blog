---
[category:Analitika]
###### [postdate]
# [postlink]FastComments zdaj lahko prikaže število ogledov komentarjev[/postlink]

{{#unless isPost}}
FastComments zdaj podpira prikaz števila ob vsakem komentarju, ki se v živo povečuje, ko uporabniki ogledujejo komentarje.
{{/unless}}

{{#isPost}}

### Kaj je novega

FastComments zdaj podpira prikaz števila ob vsakem komentarju, ki se v živo povečuje, ko uporabniki ogledujejo komentarje. To, ali je komentar ogledan ali ne, določa uporabnikov račun ali anon seansa. Podpira SSO (tako Secure SSO kot Simple SSO).

### Živa predstavitev

Omogočili smo štetje ogledov komentarjev za to objavo posebej! preverite število ob očesu pri vsakem komentarju!

### Dokumentacija

[Za nastavitev štetja ogledov lahko najdete dokumentacijo za razvijalce tukaj.](https://docs.fastcomments.com/guide-customizations-and-configuration.html#enable-comment-view-counts)

### Učinkovitost

Števila se ne posodobijo takoj, obstaja majhna (do tri sekunde) zamuda, ko se števila agregirajo in nato pošiljajo preko omrežja. To je optimizacija, da če imate živo dogajanje, in nekaj tisoč ljudi ogleda recimo 10 komentarjev na povprečni strani, ne pošiljamo takoj milijonov posodobitev (`3000 uporabnikov x 3000 nalaganj strani = ~9 milijonov sprememb`) vsakemu uporabniku in ne obremenjujemo njihovega brskalnika ali ne porabimo celotne pasovne širine omrežja.

### Na koncu

Zahvaljujemo se našim strankam, ki nam dajejo stalne povratne informacije, da lahko razmišljamo o idejah, kot je ta, in nam tudi dajejo čas za zagon dobro optimiziranih funkcij. Upamo, da boste še naprej ljubili FastComments.

Na zdravje!

<script>
    window.demoOverrides = {
        enableViewCounts: true
    }
</script>

{{/isPost}}

---