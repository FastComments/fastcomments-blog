---
[category:Integraties]
###### [postdate]
# [postlink]Reacties toevoegen aan een BigCommerce Blog[/postlink]

{{#isPost}}

#### Voeg Publieksbetrokkenheid Toe aan Elke Pagina
Wat als je publiek op je blogposts kon reageren, vragen kon stellen en feedback kon geven? Dat kan nu met FastComments.

#### Aangepaste Thema's
Om FastComments aan de blog van je BigCommerce winkel toe te voegen, moet je je themasjablonen bewerken. We zullen je hierbij begeleiden.

Ga in het BigCommerce dashboard naar Storefront -> Mijn Thema's.

<div class="text-center">
    <img style="vertical-align: top;" src="images/fc-bigcommerce-store-link.png" alt="Winkel Link" title="Winkel Link" class="lozad" />
    <img style="vertical-align: top;" src="images/fc-bigcommerce-my-themes.png" alt="Mijn Thema's Link" title="Mijn Thema's Link" class="lozad" />
</div>

Onder "Huidig Thema" zie je een dropdown met het label "Geavanceerd".

<div class="text-center">
    <img src="images/fc-bigcommerce-advanced-dropdown.png" alt="Thema Geavanceerde Dropdown" title="Thema Geavanceerde Dropdown" class="lozad" />
</div>

In deze dropdown is de eerste optie "Thema Bestanden Bewerken". Als deze optie niet klikbaar is, moet je eerst het thema kopiëren via "Maak een Kopie".

Zodra je de sjablooneditor kunt openen, zie je een bestandsbrowser aan de linkerkant van je browser. Dit is een bestandsbrowser voor de sjablonen in je thema.

Je wilt navigeren naar het HTML-sjabloon dat een blogpost vertegenwoordigt. Dit is te vinden op templates/components/blog/post.html, zoals geïllustreerd:

<div class="text-center">
    <img src="images/fc-bigcommerce-editor-post-file.png" alt="Locatie Editor Post Bestand" title="Locatie Editor Post Bestand" class="lozad" />
</div>

Je FastComments codefragment, dat je kunt verkrijgen <a href="https://fastcomments.com/auth/my-account/get-acct-code" target="_blank">hier</a> moet direct na regel 48 worden geplakt, die de tekst "&#123;{>components/common/share}&#125;" bevat.

<div class="text-center">
    <img src="images/fc-bigcommerce-blog-post-script-location.png" alt="Plaats om FastComments in te voegen" title="Plaats om FastComments in te voegen" class="lozad" />
</div>

#### Vergeet Niet!
Je moet het domein van je winkel aan FastComments toevoegen, wat je <a href="https://fastcomments.com/auth/my-account/configure-domains" target="_blank">hier</a> kunt doen.

#### Conclusie
Zo zou FastComments eruit moeten zien op je BigCommerce blog. Proost!

<div class="text-center">
    <img src="images/fc-bigcommerce-blog-post-example.png" alt="FastCommence op een BigCommerce Blog" title="FastCommence op een BigCommerce Blog" class="lozad" />
</div>

{{/isPost}}

---