---
[category:Beveiliging]

###### [postdate]
# [postlink]Bescherming van Reactiedraden met Single-Sign-On[/postlink]

{{#unless isPost}}
Beschouw je je reactiedraden niet als openbaar? Heb je SSO ingesteld voor authenticatie? Dit kan iets voor jou zijn.
{{/unless}}

{{#isPost}}

### <i class="circle">!</i> Dit Artikel Bevat Technische Terminologie

#### Inleiding

FastComments SSO <a href="/(4-13-2020)-setting-up-sso-with-fastcomments.html" target="_blank">(details hier)</a> biedt je gebruikers een manier
om te commentariëren zonder in te loggen op een ander platform.

Dit alleen beveiligt echter je reactiedraden niet, aangezien commentaargegevens standaard openbare informatie zijn - iedereen die de pagina kan bekijken, kan de opmerkingen zien. Deze release verandert dat.

#### No-Code Instelling

We kunnen het bekijken en interactie hebben met onze reactiedraden voorkomen, wanneer SSO is ingesteld, door een <a href="https://fastcomments.com/auth/my-account/customize-widget" target="_blank">aanpassingsregel</a> te creëren.

Als je dat doet, zoek naar SSO, en je zult deze optie vinden:

<div class="text-center">
    <img src="/images/fc-sso-protection.png" title="Configuratieoptie voor het Beveiligen van Reacties via SSO" alt="Configuratieoptie voor het Beveiligen van Reacties via SSO" class="lozad" />
</div>

Schakel het in en sla de aanpassingsregel op.

#### Alleen Een Bepaalde Domein of Pagina Beveiligen

Om alleen een bepaalde Domein of Pagina te beveiligen, configureren we simpelweg de aanpassingsregel om dit te doen.

Bovenaan de aanpassingsinterface vinden we twee invoervelden, Domein en URL ID.

<div class="text-center">
    <img src="/images/fc-sso-protection-by-page.png" title="Configuratieoptie per Pagina of Domein" alt="Configuratieoptie per Pagina of Domein" class="lozad" />
</div>

Om alleen een bepaald domein te beveiligen, voer je het betreffende domein in het veld "domein" in.

Om een bepaalde pagina te beveiligen, voer je een pagina-URL in het veld "URL ID" in. Als je een aangepaste integratie met FastComments hebt, kun je hier een soort ID invoeren in plaats van een URL.

#### Bescherming Verder Dan Lezen

Het inschakelen van deze optie zal de pagina of domein beschermen tegen het plaatsen van reacties, tenzij de gebruiker is ingelogd via SSO. 

#### Punten van Aandacht

Alle gebruikers die opmerkingen hebben gemaakt vóór je SSO-integratie kunnen deze niet zien, tenzij ze inloggen via je SSO-integratie.

#### Ter Afsluiting

We hopen dat je deze gids nuttig en gemakkelijk te lezen hebt gevonden. Voel je vrij om hieronder commentaar te geven met eventuele vragen.

Proost!

{{/isPost}}

---