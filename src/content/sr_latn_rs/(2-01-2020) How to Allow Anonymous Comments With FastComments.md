---
[category:Tutorials]

###### [postdate]
# [postlink]Kako omogućiti anonimne komentare uz FastComments[/postlink]

{{#unless isPost}}
Po defaultu, FastComments zahteva email za komentarisanje ako niste prijavljeni. Ovaj email koristimo da automatski kreiramo nalog za korisnika i omogućimo mu da verifikuje svoj komentar.
Da biste omogućili anonimno komentarisanje, samo treba da kreirate pravilo za prilagođavanje. Definišite domen, i opcionalno stranicu, na kojima želite
da omogućite anonimno komentarisanje.
{{/unless}}

{{#isPost}}
Po defaultu, FastComments zahteva email za komentarisanje ako niste prijavljeni. Ovaj email koristimo da automatski kreiramo nalog za korisnika i omogućimo mu da verifikuje svoj komentar.
Da biste omogućili anonimno komentarisanje, samo treba da kreirate pravilo za prilagođavanje. Definišite domen, i opcionalno stranicu, na kojima želite
da omogućite anonimno komentarisanje.

To znači da možete kontrolisati na bazi svake strane gde omogućavate anonimne komentare.

<img 
    src="images/fc-allow-anon.png"
    alt="Dozvoli anonimne komentare"
    class='lozad' />

{{/isPost}}

---