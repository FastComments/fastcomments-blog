---
[category:Security]
[category:Features]
###### [postdate]
# [postlink]Wachtwoordauthenticatie is Nu Ondersteund[/postlink]

{{#unless isPost}}
Met deze update ondersteunt FastComments nu traditionele op wachtwoorden gebaseerde authenticatie, naast het bestaande op e-mail gebaseerde systeem.
{{/unless}}

{{#isPost}}

### Wat is Nieuw

Sinds de lancering authenticatete FastComments via magische e-maillinks. Dit was omdat we onze inlogmechanismen konden consolideren in hetzelfde systeem dat werd gebruikt wanneer een gebruiker hun eerste opmerking achterlaat en verifieert/inlogt via een op e-mail gebaseerd link. Echter, niet alle e-mailservers zijn hetzelfde, en soms kon het ontvangen van een link minuten duren. Dit was zeer frustrerend voor sommige van onze gebruikers.

Vanaf eind 2023 ondersteunt FastComments nu authenticatie via wachtwoorden! Op de inlogpagina zijn er nu twee tabbladen - één voor inloggen via e-mail en één voor via wachtwoord.

### Hoe een Wachtwoord in Te Stellen

Je kunt een wachtwoord instellen door naar [Mijn Account -> Accountgegevens -> Wachtwoord Wijzigen](https://fastcomments.com/auth/my-account/edit-details/change-password) te gaan.

Vraag eenvoudig een resetlink aan. Een link wordt naar je e-mail gestuurd, en na het klikken hierop kun je een nieuw wachtwoord instellen. De link werkt slechts één keer en vervalt als deze niet wordt gebruikt.

### Wachtwoordopslag & Beveiliging

Wachtwoorden worden niet opgeslagen. In plaats daarvan worden wachtwoorden gehashed met een 11-rondes zout met bcrypt. Gelijktijdigheid met het op wachtwoorden gebaseerde systeem is beperkt en gemonitord om verschillende soorten aanverwante aanvallen te voorkomen.

### De Toekomst

In de toekomst plannen we ook 2FA te ondersteunen.

### Conclusie

Net als bij alle grote releases zijn we blij dat we de tijd hebben kunnen nemen om deze functie te optimaliseren, testen en goed uit te brengen. Laat ons hieronder weten als je problemen ontdekt.

Proost!

{{/isPost}}

---