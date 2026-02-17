---
[category:Features]
[category:Email]

###### [postdate]
# [postlink]DKIM-configuratie Nu Beschikbaar in de UI[/postlink]

{{#unless isPost}}
FastComments biedt nu een UI voor het configureren van DKIM, waardoor het gemakkelijker wordt om de afleveringspercentages van e-mails te verbeteren zonder de API te gebruiken.
{{/unless}}

{{#isPost}}

### Wat is Nieuw

Het instellen van DKIM voor je aangepaste e-maildomein is nu gemakkelijker geworden. Voorheen vereiste het configureren van DKIM het direct gebruik van de 
<a href="https://docs.fastcomments.com/guide-api.html#domain-config-structure" target="_blank">Domain Configs API</a>. Nu kun je 
DKIM direct vanuit de FastComments admin UI configureren.

### Waarom DKIM Belangrijk Is

Wanneer je het Afzenddomein voor e-mails die FastComments namens jou verzendt, aanpast, moeten e-mailproviders verifiëren dat 
die e-mails legitiem zijn. DKIM (DomainKeys Identified Mail) is een van de belangrijkste authenticatiemechanismen die daarbij helpt. 
Zonder een juiste DKIM-configuratie is de kans groter dat e-mails die namens jouw domein worden verzonden, in de spamfolder eindigen.

### Hoe je Het Instelt

Navigeer naar de <a href="https://fastcomments.com/auth/my-account/configure-domains" target="_blank">Mijn Domeinen</a> pagina en klik 
op "Geavanceerd Weergeven" voor het domein dat je wilt configureren. Je ziet de DKIM-instellingen waar je je domeinnaam, sleutelselecteur, 
en privésleutel kunt invoeren.

Na het opslaan wordt de DKIM-configuratie toegepast op alle e-mails die van dat domein worden verzonden.

### De API Werkt Nog Steeds

Als je de voorkeur geeft aan het programmatisch beheren van de DKIM-configuratie, blijft de 
<a href="https://docs.fastcomments.com/guide-api.html#domain-config-structure" target="_blank">Domain Configs API</a> zoals voorheen werken.

### Conclusie

We hopen dat dit het gemakkelijker maakt om ervoor te zorgen dat jouw gebruikers de e-mails ontvangen die FastComments namens jou verzendt. Laat het ons weten 
hieronder als je vragen hebt.

Proost!

{{/isPost}}

---