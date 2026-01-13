---
[category:Analytics]
###### [postdate]
# [postlink]FastComments Kan Nu Weergeven Hoeveel Keer Een Reactie Is Gezien[/postlink]

{{#unless isPost}}
FastComments ondersteunt nu het weergeven van een telling naast elke reactie die live toeneemt naarmate gebruikers reacties bekijken.
{{/unless}}

{{#isPost}}

### Wat Is Nieuw

FastComments ondersteunt nu het weergeven van een telling naast elke reactie die live toeneemt naarmate gebruikers reacties bekijken. Of een reactie wel of niet wordt bekeken, wordt bepaald door het account van de gebruiker of de anonieme sessie. Het ondersteunt SSO (zowel Secure SSO als Simple SSO).

### Live Demo

We hebben een telling van reacties voor deze blogpost speciaal ingeschakeld! Controleer de telling naast het oog op elke reactie!

### Documentatie

[Je kunt de ontwikkelaarsdocumentatie voor het instellen van Weergavetellingen hier vinden.](https://docs.fastcomments.com/guide-customizations-and-configuration.html#enable-comment-view-counts)

### Prestaties

Tellingen worden niet onmiddellijk bijgewerkt, er is een kleine (tot drie seconden) vertraging terwijl de tellen worden geaggregeerd en vervolgens via het netwerk worden verzonden. Dit is een optimalisatie zodat als je een live evenement hebt, en enkele duizenden mensen gemiddeld 10 reacties op de pagina bekijken, we niet onmiddellijk miljoenen updates verzenden (`3000 gebruikers x 3000 pagina belastingen = ~9 miljoen wijzigingen`) naar elke gebruiker en hun browser vertragen of al hun netwerkbandbreedte gebruiken.

### Conclusie

We bedanken onze klanten die ons continue feedback geven, zodat we over ideeën zoals deze kunnen nadenken en ons ook de tijd geven om goed geoptimaliseerde functies te lanceren. We hopen dat je blijf houden van FastComments.

Gezondheid!

<script>
    window.demoOverrides = {
        enableViewCounts: true
    }
</script>

{{/isPost}}

---