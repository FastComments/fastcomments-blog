---
[category:Features]
[category:Moderation]
[category:Announcements]
###### [postdate]
# [postlink]FastComments Lanceert AI Agents[/postlink]

{{#unless isPost}}
Je kunt nu AI Agents opzetten die elke nieuwe reactie lezen, antwoorden in jouw stem, moeilijke beslissingen escaleren en onderscheidingen toekennen aan je beste bijdragers. Ze werken volgens jouw schema, binnen jouw budget, en doen alleen wat je ze toestaat.
{{/unless}}

{{#isPost}}

### Een Nota aan De Gemeenschap

Ik wil dit meteen uit de weg ruimen - we bouwen niets dat bots in staat stelt zich voor te doen als echte gebruikers. Dit is niet iets dat ik goed vind voor het internet, online gemeenschappen, of onze productrichting. Het doel van AI Agents is om moderatorteams of gemeenschapsbeheerders te versterken die zich geen toegewijde moderators kunnen veroorloven.

Alle opmerkingen die door AI zijn gemaakt, moeten de tag "Bot" hebben. Dit is hoe het product wordt geleverd, en elke site die op een of andere manier de Bot-tag uit bot-opmerkingen verwijdert, zal deze functie uitgeschakeld krijgen. Daarnaast gebruiken we alleen LLM-leveranciers die niet op onze data trainen. We gebruiken momenteel DeepInfra, dat alleen inferentie voor open-source modellen biedt.

Nu dat uit de weg is :)

### Wat is Nieuw

FastComments biedt nu geautomatiseerde agents die moderatietaken kunnen uitvoeren, opmerkingen vastpinnen, commentaarthreads samenvatten, en meer.

Je kunt ze vinden onder [Aanpassen, vervolgens AI Agents](https://fastcomments.com/auth/my-account/ai-agents).

### Triggers en Tools

Elke agent is ingesteld met een lijst van triggers en een lijst van toegestane acties. Triggers omvatten nieuwe opmerkingen, bewerkingen, verwijderingen, stemdrempels, vlagdrempels, moderatoracties, eerste keer commenters, en meer. Als je niet wilt dat een agent gebruikers bannt, kun je de ban-tool uitsluiten.

Bijvoorbeeld, als je alleen een "thread-samenvatter" wilt die alleen antwoord geeft na een bepaald aantal opmerkingen en die opmerking vastpint, kun je de machtigingen van de agent zo instellen dat hij alleen toegang heeft tot die acties.

Je kunt een agent ook beperken tot specifieke URL-patronen zoals `/news/*` of `/forums/*`, en tot specifieke locaties, zodat een Frans-talige gemeenschapsagent niet op je Engelse pagina's begint te antwoorden.

### Droogrun, Goedkeuringen en Budgetten

Elke agent wordt standaard in droogrun-modus gelanceerd. In droogrun leest de agent de context en schrijft hij op wat hij zou doen, maar doet hij verder niets. Je kunt een paar echte triggers voorbij zien komen, kijken naar de voorgestelde acties en de redenering van de agent, en beslissen of je hem vertrouwt voordat je hem inschakelt.

Voor gevoelige tools kun je menselijke goedkeuring vereisen. De agent plaatst de actie in de wachtrij, een admin bekijkt de voorgestelde actie samen met de redenering en zelfvertrouwen van de agent, en keurt goed of wijst af. Bans vereisen altijd goedkeuring in de EU volgens DSA Artikel 17, maar je kunt goedkeuring vereisen voor elke tool, overal.

Elke agent heeft een dagelijkse en maandelijkse budgetlimiet. Wanneer de limiet is bereikt, stopt de agent met draaien totdat de periode is verstrijkt. We e-mailen je bij standaarddrempels van 80 procent en 100 procent (je kunt ook kiezen voor een melding bij 50 procent) zodat er geen verrassingsfacturen zijn.

### Geheugen

Agents hebben geheugen waar de agent zelf in leest en schrijft. Ze kunnen korte notities over een gebruiker of een patroon opslaan, zoals "veroordeeld voor off-topic drie keer" of "spamring plaatst links naar domein X", en deze notities opnieuw lezen bij de volgende trigger. Geheugen wordt gedeeld tussen agents in jouw tenant, dus notities van een welkomstagent kunnen later de beslissingen van een moderatie-agent informeren. Geheugen dat aan een gebruiker is gekoppeld, wordt gewist als zij hun account verwijderen.

### Herhaling en Testuitvoering

Voordat je een agent loslaat op live verkeer, kun je het uitvoeren tegen je historische opmerkingen. De herhalings tool doorloopt echte eerdere opmerkingen in droogrun, toont je wat de agent zou hebben gedaan, en klasseert elke voorgestelde actie tegen wat er daadwerkelijk is gebeurd. Dit is de snelste manier om een systeemprompt af te stemmen zonder te wachten op live evenementen.

### Modellen, Privacy en Kosten

Agents draaien op open-gewicht modellen die worden gehost door infrastructuur leveranciers die niet op klantdata trainen. Vandaag kun je kiezen tussen een snellere model (gpt-oss-120B-turbo) en een slimere, tragere (GLM 5.1), en we zullen blijven toevoegen opties naarmate het landschap evolueert. Kosten worden gemeten per token en omgezet in dollars op je gebruikspagina, naast dagelijkse en maandelijkse trends.

Als onderdeel van deze wijziging verlagen we onze token kosten van $80 1M Tokens naar $20 per 1M gecombineerde input/output tokens. De meeste van onze klanten geven heel weinig uit aan tokens voor spamdetectie, omdat het oorspronkelijke LLM-gebaseerde spamdetectiesysteem alleen werd geverifieerd naar de LLM als de spam voor het naive-bayesclassificator kwam, vandaar de hoge kosten oorspronkelijk. We verlagen de kosten om het gebruik van de nieuwe agents functionaliteit aan te moedigen.

Op een gegeven moment, wanneer de geheugen kosten weer dalen en modellen zoals GLM 5.1 redelijker zijn om op zelf gehoste hardware te draaien, zullen we overstappen van het gebruik van een externe leverancier en de hardware zelf runnen.

### Conclusie

We hebben lange tijd nagedacht over hoe we dit konden bouwen zonder het gevoel te geven dat de agent de controle had. Droogrun, goedkeuringen, gelimiteerde tools, budgetlimieten en herhaling tegen de historie bestaan allemaal om je te helpen de controle te behouden. We hopen dat AI Agents je moderators vrijmaken voor de gesprekken die daadwerkelijk een mens nodig hebben.

We danken onze klanten die ons continue feedback geven, zodat we zulke ideeën kunnen bedenken en ook de tijd kunnen krijgen om ze goed te lanceren. Laat het ons altijd weten hieronder als je problemen ontdekt.

Proost!

{{/isPost}}

---