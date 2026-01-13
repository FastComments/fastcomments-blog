---
[category:Integraties]
###### [postdate]
# [postlink]Reacties Inbedden op een GatsbyJS-site met FastComments[/postlink]

{{#unless isPost}}
Je kunt nu FastComments gebruiken om reacties in te bedden in een site gemaakt met Gatsby!
{{/unless}}

{{#isPost}}

### <i class="circle">!</i> Dit Artikel Bevat Technisch Vakjargon

#### Wat is Nieuw

We hebben onlangs onze <a href="https://blog.fastcomments.com/(8-12-2020)-fastcomments-goes-react.html" target="_blank">React-component</a> voor FastComments gelanceerd.

Dit opent veel mogelijkheden - inclusief het integreren van FastComments met Gatsby.

#### Als Je Je Eigen Wrapper Hebt Geschreven

Als je je eigen React-wrapper voor FastComments hebt geschreven - overweeg dan om deze te vervangen door de onze. Wij onderhouden deze abstractie voor je - en het bevat veel handige dingen zoals <a href="https://github.com/FastComments/fastcomments-react/blob/master/example/src/DarkModeApp.tsx#L8" target="_blank">automatisch herladen bij configuratiewijzigingen</a>.

#### Hoe het Werkt

Aangezien FastComments een React-component heeft als wrapper rond onze kernwidget - is het slechts een kwestie van onze React-bibliotheek gebruiken om de widget aan de clientzijde te instantiëren.

We ondersteunen deze component volledig en zullen deze up-to-date houden.

#### Voorbeelden?

We zijn begonnen met het opzetten van voorbeelden, die je <a href="https://github.com/FastComments/fastcomments-gatsbyjs-example" target="_blank">hier</a> kunt vinden.

#### Nachtmodus

Een van de voorbeelden die we hebben is "nachtmodus" - FastComments weergeven op een site met een zwarte (of zeer donkere) achtergrond: <a href="https://github.com/FastComments/fastcomments-react/blob/master/example/src/DarkModeApp.tsx" target="_blank">https://github.com/FastComments/fastcomments-react/blob/master/example/src/DarkModeApp.tsx</a>.

Bovendien, aangezien de widget reageert op configuratiewijzigingen, betekent dit dat je een modus kunt hebben om het thema van je site te schakelen en snel fastcomments-react kunt vertellen om te updaten.

#### Ter Conclusie

We hopen dat je het integreren van FastComments in je Gatsby-site snel en eenvoudig zult vinden.

Proost!

{{/isPost}}

---