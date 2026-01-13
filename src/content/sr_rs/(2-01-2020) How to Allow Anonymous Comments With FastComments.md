---
[category:Tutorials]

###### [postdate]
# [postlink]Kako omogućiti anonimne komentare sa FastComments[/postlink]

{{#unless isPost}}
Podrazumevano, FastComments zahteva email za komentarisanje ako niste prijavljeni. Ovaj email koristimo da automatski kreiramo nalog za korisnika i omogućimo mu da verifikuje svoj komentar. 
Da biste omogućili anonimno komentarisanje, samo treba da kreirate pravilo prilagođavanja. Definišite domen, i opcionalno stranicu, na kojoj želite da omogućite anonimno komentarisanje.
{{/unless}}

{{#isPost}}
Podrazumevano, FastComments zahteva email za komentarisanje ako niste prijavljeni. Ovaj email koristimo da automatski kreiramo nalog za korisnika i omogućimo mu da verifikuje svoj komentar. 
Da biste omogućili anonimno komentarisanje, samo treba da kreirate pravilo prilagođavanja. Definišite domen, i opcionalno stranicu, na kojoj želite da omogućite anonimno komentarisanje.

To znači da možete kontrolisati na bazi svake stranice gde dozvoljavate anonimne komentare.

<img 
    src="images/fc-allow-anon.png"
    alt="Dozvoli anonimne komentare"
    class='lozad' />

{{/isPost}}