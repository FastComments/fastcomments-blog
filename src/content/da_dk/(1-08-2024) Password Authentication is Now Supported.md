---
[category:Security]
[category:Features]
###### [postdate]
# [postlink]Password-authentifikation er nu understøttet[/postlink]

{{#unless isPost}}
Med denne opdatering understøtter FastComments nu traditionel password-baseret autentifikation ud over det eksisterende email-baserede system.
{{/unless}}

{{#isPost}}

### Hvad er nyt

Siden lanceringen har FastComments autentificeret via magiske email-links. Dette var fordi vi kunne konsolidere vores loginmekanismer i det samme system, der bruges
til når en bruger efterlader sin første kommentar og verificerer/logger ind via et email-baseret link. Men ikke alle email-servere er ens, og nogle gange
kan det tage minutter at modtage et link. Dette var meget frustrerende for nogle af vores brugere.

Fra slutningen af 2023 understøtter FastComments nu autentificering via passwords! På login-siden er der nu to faner - en til at logge ind via email og en til via
password.

### Sådan indstilles et password

Du kan indstille et password ved at gå til [Min Konto -> Kontodetaljer -> Skift Password](https://fastcomments.com/auth/my-account/edit-details/change-password).

Anmod blot om et reset-link. Et link vil blive sendt til din email, og ved at klikke på dette vil du kunne indstille et nyt password. Linket virker kun én gang og udløber, hvis det ikke bruges.

### Password-opbevaring & Sikkerhed

Passwords gemmes ikke. I stedet bliver passwords hashet med en 11-runds salt ved hjælp af bcrypt. Adgang til det password-baserede system er begrænset
og overvåget for at forhindre forskellige typer af password-relaterede angreb.

### Fremtiden

I fremtiden planlægger vi også at understøtte 2FA.

### Afslutning

Ligesom med alle store udgivelser er vi glade for, at vi kunne tage os tid til at optimere, teste og korrekt frigive denne funktion. Lad os vide
nedenfor, hvis du opdager eventuelle problemer.

Skål!

{{/isPost}}