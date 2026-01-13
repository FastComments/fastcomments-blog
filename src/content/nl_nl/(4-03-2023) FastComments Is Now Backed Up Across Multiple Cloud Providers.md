---
[category:Announcements]

###### [postdate]
# [postlink]FastComments Is Nu Ondersteund Door Meerdere Cloudproviders[/postlink]

{{#unless isPost}}
Vanaf april 2023 worden de FastComments-databases nu opgeslagen bij verschillende cloudproviders voor extra voorzichtigheid.
{{/unless}}

{{#isPost}}

### Wat is nieuw

Voorheen had FastComments live databasebackups op meerdere servers, maar binnen dezelfde cloudprovider.

FastComments gebruikt voornamelijk Linode voor de regio's US-West en EU, met afzonderlijke database- en applicatiedepployments.

Elke regio had voorheen zijn eigen replica voor de database als een live backup. Als de primaire database ooit verloren ging, om welke reden dan ook, 
zou de live backup beschikbaar zijn om zijn plaats in te nemen. Er worden ook snapshots van de database gemaakt op deze back-ups.

We hebben nu back-ups toegevoegd op een andere cloudprovider, zodat de gegevens in elke regio niet geïsoleerd zijn tot één datacenter per regio.

De nieuwe database-topologie is:

- US-West
  - Eén databasecluster op Linode in Californië.
  - **NIEUW** Eén live replica op Hetzner in Oregon.
- EU
  - Eén databasecluster op Linode in Frankfurt.
  - **NIEUW** Eén live replica op Hetzner in Falkenstein.

Deze replica's zijn live, ze hebben altijd de laatste versie van de database.

### Conclusie

Net als bij alle grote releases zijn we blij dat we de tijd hebben kunnen nemen om deze functie te optimaliseren, testen en goed vrij te geven. Laat het ons weten
hieronder als je problemen ontdekt.

Proost!

{{/isPost}}

---