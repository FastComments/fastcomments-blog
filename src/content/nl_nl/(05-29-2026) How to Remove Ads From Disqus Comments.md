---
[category:Migration]
[category:Tutorials]
###### [postdate]
# [postlink]Hoe advertenties uit Disqus-reacties te verwijderen[/postlink]

{{#unless isPost}}
Bij het gratis Disqus-abonnement worden advertenties in jouw commentaarsectie weergegeven. Er zijn twee manieren om ze te verwijderen. De betere optie zorgt er ook voor dat je reacties sneller laden en voorkomt dat je lezers worden gevolgd.
{{/unless}}

{{#isPost}}

Disqus betaalt voor zijn gratis abonnement door advertenties in jouw commentaarsectie te plaatsen, direct onder jouw inhoud, op de plek waar je lezers met je willen communiceren. Die advertenties zijn niet van jou. Je kiest ze niet en je verdient er geen cent mee. Dat is de ruil voor het gratis niveau.

Er zijn twee echte manieren om ze te verwijderen.

## Optie 1: Upgrade je Disqus-abonnement

De eenvoudigste manier is om Disqus te betalen. Hun betaalde plannen schakelen de advertenties uit. Je kunt de huidige opties vinden op de <a href="https://disqus.com/pricing/" target="_blank">Disqus-prijs pagina</a>.

Dit werkt, maar het is belangrijk om duidelijk te zijn over wat je koopt. Je betaalt om een nadeel ongedaan te maken. De advertenties verdwijnen, en de rest van Disqus blijft hetzelfde: het commentaargebied laadt nog steeds een grote bundel externe scripts, en je lezers worden nog steeds gevolgd op de sites die het insluiten. Je betaalt om de advertenties te verwijderen, niet om de commentaarsectie lichter of privater te maken.

## Optie 2: Overschakelen naar een platform dat nooit advertenties toont

De andere manier om de advertenties te verwijderen is door een commentaarplatform te gebruiken dat ze in de eerste plaats niet uitvoert. :)

Voor slechts $0.99/maand biedt FastComments diep geoptimaliseerde functionaliteit zonder tracking of advertenties.

## Je behoudt elke reactie

Het deel waar mensen zich het meest zorgen over maken, is het verlies van hun bestaande discussie. FastComments heeft een ingebouwde Disqus-importeur die jouw reacties, gebruikersnamen, gebruikersavatars, inline afbeeldingen, stemmen en tijdstempels overbrengt. We verplaatsen zelfs alle afbeeldingen naar onze eigen CDN voor jou.

Als je de volledige, gedetailleerde handleiding wilt, hebben we een speciale gids: [Migreren van Disqus naar FastComments](/(1-23-2020)-migrating-from-disqus-fastcomments.html). De korte versie staat hieronder.

## Hoe te schakelen in drie stappen

### 1. Exporteer je reacties van Disqus

Volg <a href="https://help.disqus.com/en/articles/1717199-importing-exporting" target="_blank">de eigen exportstappen van Disqus</a>. Ze zullen je een bestand met een "gz" extensie per e-mail sturen. Je hoeft het niet te openen of uit te pakken, en een standaard Windows-installatie kan dat toch niet. Onze backend leest dat gecomprimeerde bestand rechtstreeks.

### 2. Importeer het bestand in FastComments

Zodra je bent ingelogd, ga je naar de <a href="https://fastcomments.com/auth/my-account/manage-data/import" target="_blank">importpagina</a>, selecteer Disqus uit de dropdown en upload het bestand zoals het is. De import loopt op de achtergrond; de pagina wordt automatisch bijgewerkt terwijl het loopt om je een live telling te tonen van het aantal ontdekte en geïmporteerde reacties. Het is veilig om zoveel keer opnieuw te importeren als je nodig hebt.

### 3. Vervang de Disqus-snippet door de onze

Verwijder de Disqus-embedcode van je pagina's en voeg <a href="https://fastcomments.com/auth/my-account/install-wizard/" target="_blank">de FastComments-snippet</a> in plaats daarvan toe. Zolang je pagina-URL's dezelfde blijven, komen je geïmporteerde reacties precies overeen met waar ze waren.

## Op WordPress?

Als je site op WordPress draait, sla dan de handmatige stappen over en installeer de <a href="https://wordpress.org/plugins/fastcomments/" target="_blank">FastComments WordPress-plugin</a>. Het regelt installatie, configuratie en synchronisatie voor je, en dan kun je Disqus deactiveren.

## Test het voordat je het definitief maakt

Je hoeft de schakelaar niet in één keer om te zetten. Je kunt Disqus en FastComments tijdelijk op dezelfde pagina draaien om het uiterlijk en gevoel te vergelijken voordat je volledig overstapt. Als je hulp nodig hebt met een van deze stappen, <a href="https://fastcomments.com/auth/my-account/help" target="_blank">neem contact met ons op</a> en we helpen je erdoorheen.

Niet zeker hoeveel FastComments je zal kosten? Elk plan is advertentievrij, en je kunt je nummer controleren op de <a href="https://fastcomments.com/pricing-calculator" target="_blank">prijs calculator</a>. Als je in de EU bent, kun je je account aanmaken op <a href="https://eu.fastcomments.com" target="_blank">eu.fastcomments.com</a> zodat je gegevens in de EU blijven.

## Samenvatting

1. Exporteer je gegevens van Disqus
2. Importeer ze in FastComments
3. Vervang de Disqus-snippet door <a href="https://fastcomments.com/auth/my-account/get-acct-code" target="_blank">FastComments's</a>

Dat is het. Geen advertenties in je commentaarsectie, lichtere pagina's en elke reactie die je al had.

Proost!

{{/isPost}}

---