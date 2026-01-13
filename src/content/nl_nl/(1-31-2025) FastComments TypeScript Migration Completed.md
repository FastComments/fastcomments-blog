---
[category:API & Development]
[category:Announcements]

###### [postdate]
# [postlink]FastComments TypeScript Migratie Voltooid[/postlink]

{{#unless isPost}}
In voorbereiding op het volgende decennium van ontwikkeling hebben we een van de grootste FastComments-componenten naar TypeScript gemigreerd.
{{/unless}}

{{#isPost}}

### <i class="circle">!</i> Dit Artikel Bevat Technisch Jargon

### Wat is nieuw

Bij FastComments waarderen we statisch getypte talen. Meer specifiek, ik hou van fatsoenlijke type systemen met snelle compilers. FastComments zijn we begonnen met de laatste - of
geen compiler. Hoewel we binnen het eerste jaar twee diensten hebben geschreven in modern Java, zijn de belangrijkste backend- en frontendbibliotheken geschreven in CJS JS die draait op Node.

In voorbereiding op het volgende decennium van ontwikkeling hebben we de grootste FastComments-componenten naar TypeScript gemigreerd.

Dit omvatte het migreren van meer dan 130k regels code (100k daarvan is backend) verspreid over 1441 bestanden, en het oplossen van meer dan 8000 compileerfouten.

<div class="text-center">
    <div class="sm">woooooo</div>
    <img src="images/ts-migration.png" alt="GitHub Screenshot" title="GitHub Screenshot" />
</div>

Dit is gedaan in twee weken.

### Code Freeze - Dank U

Ik wil onze klanten bedanken voor hun geduld met eventuele vertragingen in bugfixes of functie-releases terwijl we een code freeze van twee weken hadden om deze upgrade te voltooien. Bedankt!

### Bugs Opgelost

Zoals je je kunt voorstellen, hebben we een handvol bugs opgelost. Deze betroffen vooral spamdetectie en caching. 

### Brekende Wijzigingen

- Alle API-eindpunten retourneren nu status: 'failed' in plaats van een mix van "failed" en "failure" als statuswaarden. "success" blijft onveranderd.
- We zullen niet langer standaard naar de eerste widgetconfiguratie gaan als er geen match is; in plaats daarvan zullen we de standaard systeemconfiguratie retourneren.

### Hoe Was Het?

We ontdekten dat, zoals gebruikelijk, veel van de tools in het NPM-ecosysteem om deze taak te helpen niet erg goed werkten. Dus hebben we LLM's gebruikt om
scripts te genereren om veel van het werk te doen. Bijvoorbeeld, we maakten intensief gebruik van JSDoc, zodat we scripts konden schrijven om de JSDoc te nemen en om te zetten naar TypeScript-interfaces
en type-definities, en functieargumenten en returntype's correct te annoteren. We gebruikten deze scripts ook om te migreren van CJS naar ESM, wat het herschrijven van
imports, exports, en het detecteren van veel voorkomende runtime-problemen zoals `__dirname` omvatte.

Heb ik de runtime-problemen al genoemd?

### Hoe Is TypeScript in 2025?

TypeScript is een fijne taal voor het schrijven van bedrijfslogica. Maar, Java heeft nog steeds een betere DevEx. Als Java, Go of Rust compileert, werkt het waarschijnlijk. Met TypeScript
kan ik iets doen zoals:

    console.log(__dirname);

... en dit zal compileert.

Maar het zal niet draaien, met moderne es-modules. Je IDE autocompleet zelfs gelukkig `__dirname`, en dan zal het in de runtime misgaan. Het voelt als Spring DI, maar erger.

Je kunt ook dingen doen zoals:

    context.someImportantMethodToCall;

Nu, dit is een "statement". Het is een geldige "statement". Bij eerste oogopslag zou je kunnen denken dat we `someImportantMethodToCall` aanroepen, maar dat doen we niet! Mijn IDE, tenminste, waarschuwt hier niet voor, en de compiler ook niet. De code zal gewoon niets doen (tenzij `someImportantMethodToCall` een class `getter` is, in welk geval het impliciet wordt aangeroepen...)

De oplossing is:

    context.someImportantMethodToCall();

Ik denk dat je dit waarschijnlijk kunt detecteren met iets als eslint en een "geen bijwerkingen" regel, maar dan trek je weer een grote set bibliotheken binnen om up-to-date te houden, en
dan moet eslint je hele codebasis in elke build parseren, zijn de tools traag, en zo verder - geen dank. De productiviteitsimpact van het omgaan met trage tools zoals eslint is
significant geweest in mijn carrière in eerdere banen dan de productiviteits "boost" die ik ooit heb gekregen van de kleine dingen die eslint oplost/voorkomt met spaties, enzovoort. Er komen nu snellere alternatieven uit, wat geweldig is.

TypeScript is echt fijn vanwege taalfuncties zoals `Pick<User, 'username', 'email'>`. Dit, gecombineerd met type-inferentie, biedt een manier om type-veilige queryresultaten uit de database te krijgen voor subsets
van grotere objecten zonder dat je een klasse voor elke vorm hoeft te definiëren. `Pick` is iets waarvan ik verrast ben dat Scala het niet heeft. Type Unions zijn ook echt fijn.

Incrementele builds werken ook redelijk goed, we hebben onze buildtijden in CI met gemiddeld ongeveer 5 - 10 seconden verhoogd, voor het bouwen van de gedeelde bibliotheek, frontend en backend.

### Ontwikkelingslijn

Voor degenen die nieuwsgierig zijn, hier is hoe onze voortgang eruitzag:

- Dag Eén: Vond 5564 fouten in 362 bestanden.
- Dag Twee: Vond 4034 fouten in 239 bestanden.
- Dag Drie: Vond 3784 fouten in 191 bestanden.
- Dag Vier: Vond 2974 fouten in 169 bestanden.
- Dag Vijf: Vond 3000 fouten in 171 bestanden.
- Dag Zes: Vond 2916 fouten in 165 bestanden.
- Dag Zeven: Vond 2618 fouten in 157 bestanden.
- Dag Acht: Vond 2253 fouten in 109 bestanden.
- Dag Negen: Vond 1605 fouten in 69 bestanden.
- Dag Tien: Vond 686 fouten in 53 bestanden.
- Dag 11: Backend Eenheidstests Slagen
- Dag 12: Begin met migreren van frontend, 3118 fouten.
- Dag 13: Vond 2172 fouten.
- Dag 14: Vond 1224 fouten.
- Dag 15: Vond 498 fouten.
- Dag 16: Alle compileerfouten opgelost.
- Dag 17: Vrijgegeven. E2E tests slagen. 30 minuten downtime tijdens onverwachte runtime-problemen. :)

### De Toekomst

We hebben dit gedaan om de ontwikkeling voor het volgende decennium te ondersteunen. Het systeem is nu groot genoeg dat het sneller is om te ontwikkelen met een type systeem dan zonder.

Je kunt ook verwachten dat onze TypeScript-bibliotheek op NPM zal verbeteren, zoals het al is begonnen te doen, aangezien we die bibliotheek nu zelf gebruiken in onze server- en clientcode.

We zullen binnenkort ook gegenereerde client SDK's rechtstreeks vanuit de servercode uitbrengen, wat een belangrijke motivatie was voor deze inspanning.

### Conclusie

Zoals bij alle grote releases, zijn we blij dat we de tijd hebben kunnen nemen om deze veranderingen te optimaliseren, te testen en goed vrij te geven. Laat het ons weten
hieronder als je problemen ontdekt.

Proost!

{{/isPost}}

---