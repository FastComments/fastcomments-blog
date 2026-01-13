---
[category:Migration]

###### [postdate]
# [postlink]Migreren van Reacties Van Hyvor Talk Wordt Nu Ondersteund[/postlink]

{{#unless isPost}}
Wanneer je je data-export van Hyvor Talk importeert, kunnen we nu je pagina-niveau reacties migreren.
{{/unless}}

{{#isPost}}

### Wat is Nieuw

Wanneer je opmerkingen importeert om ze van Hyvor Talk te migreren, kan FastComments nu je paginareacties importeren. Daarnaast zullen we detecteren of
commentaartroepen op pagina's gesloten zijn of niet, en deze status ook migreren.

Het opnieuw laten draaien van de import zal geen tellen dupliceren of enige reactie-waarden van voor de import laten verliezen.

### Hoe Reactions In Te Stellen

Het weergeven van paginareacties is niet automatisch. Om te beginnen, moet je je widget-configuratie bijwerken:

```
<script src="https://cdn.fastcomments.com/js/embed-v2.min.js"></script>
<div id="fastcomments-widget"></div>
<script>
    FastCommentsUI(document.getElementById('fastcomments-widget'), {
        "tenantId": "demo",
        pageReactConfig: {
            reacts: [
                {id: 'superb', src: 'https://raw.githubusercontent.com/hfg-gmuend/openmoji/master/color/618x618/1F929.png'}, // Sterren-Alleen
                {id: 'love', src: 'https://raw.githubusercontent.com/hfg-gmuend/openmoji/master/color/618x618/2764.png'}, // Rode Hart
                {id: 'wow', src: 'https://raw.githubusercontent.com/hfg-gmuend/openmoji/master/color/618x618/1F62E.png'}, // Gezicht met Open Mond
                {id: 'sad', src: 'https://raw.githubusercontent.com/hfg-gmuend/openmoji/master/color/618x618/1F622.png'}, // Huilend Gezicht
                {id: 'laugh', src: 'https://raw.githubusercontent.com/hfg-gmuend/openmoji/master/color/618x618/1F602.png'}, // Gezicht met Traanen van Vreugde
                {id: 'angry', src: 'https://raw.githubusercontent.com/hfg-gmuend/openmoji/master/color/618x618/1F620.png'}  // Boos Gezicht
            ]
        }
    });
</script>
```

De ids moeten overeenkomen met die van de Hyvor Talk export. Dit voorbeeld gebruikt de juiste waarden.

Je moet je eigen reactie-afbeeldingen zoeken. Ze kunnen elk formaat zijn, inclusief gifs. Het bovenstaande voorbeeld gebruikt enkele van het OpenMoji-project.

### Conclusie

Zoals bij alle belangrijke releases zijn we blij dat we de tijd hebben kunnen nemen om deze functie te optimaliseren, testen en correct vrij te geven. Laat het ons weten
hieronder als je problemen ontdekt.

Proost!

{{/isPost}}