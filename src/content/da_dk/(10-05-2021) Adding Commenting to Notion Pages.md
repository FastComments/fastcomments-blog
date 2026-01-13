---
[category:Integrations]
[category:Tutorials]
###### [postdate]
# [postlink]Tilføjelse af kommentarer til Notion-sider[/postlink]

{{#unless isPost}}
Vil du tilføje kommentarer til dine Notion-sider? Vi har dig dækket.
{{/unless}}

{{#isPost}}

## Hvad er nyt

FastComments er nu en embed.ly udbyder, og giver derfor API'er og tjenester, der gør det muligt at indlejre kommentartråde
i applikationer, der understøtter [oEmbed](https://oembed.com).

Det betyder, at du nu nemt kan tilføje live kommentarer til en side bygget med Notion, Google Sites eller Nimbus Note.

## Hvordan man bruger det - En hurtig demo

Når du er logget ind på din tenant, kan du simpelt besøge [fastcomments.com/create](https://fastcomments.com/create) for at oprette et samtalelink, som derefter
kan tilføjes til din Notion-side eller hvilken som helst applikation, der integrerer med embed.ly.

Du kan prøve det selv med dit demo embed-link, [fastcomments.com/c/demo](https://fastcomments.com/c/demo):

<video src="images/fastcomments-notion.mp4" controls alt="FastComments og Notion Demo" title="FastComments og Notion Demo"></video>

Det indlejrede kommenteringswidget kan derefter tilpasses ligesom enhver anden instans af FastComments.

For eksempel, som vist i videoen ovenfor, kan vi tilpasse kommentarwidgeten, så brugeren kun skal indtaste deres navn og ikke deres email for at kommentere eller stemme.

## Opdatering 2023 - Understøttelse af Super.so

Du kan nu tilføje kommentarer til Super.so-sider, der er bygget oven på Notion-dokumenter, ved hjælp af FastComments! [Du kan finde dokumentationen her.](https://docs.fastcomments.com/guide-installation-super-so.html)

## Google Sites

Google Sites understøttes også, og flowet er lignende.

1. [Opret en samtale til at indlejre.](https://fastcomments.com/create)
2. Når du redigerer din Google Site, naviger til `Indsæt` -> `Indlejre`. Vælg `Ved URL`.
3. Indsæt URL'en fra trin 1.
4. Tryk på `Indsæt`. Færdig!

#### Tilføjelse af indlejningslinket

<div class="text-center">
    <img src="/images/google-sites-howto.png" title="Hvordan man tilføjer FastComments til en Google Site" alt="Hvordan man tilføjer FastComments til en Google Site" />
</div>

#### Kommentarer tilføjet til din Google Site!

<div class="text-center">
    <img src="/images/google-sites-howto-done.png" title="Færdig!" alt="Færdig!" />
</div>

## Nimbus Note

Nimbus Note understøttes også, og flowet er lignende.

1. [Opret en samtale til at indlejre.](https://fastcomments.com/create)
2. Når du redigerer din note, tilføj en indlejringsblok.
3. Brug URL'en fra trin 1 som URL'en til at indlejre.
4. Tryk på `Indsæt`. Færdig!

### Hvem får det

Alle nuværende og nye FastComments-kunder, på alle niveauer, har nu adgang til oEmbed-understøttelse.

### Indlejring af en eksisterende samtale

For at indlejre en eksisterende samtale skal du simpelthen indtaste værdien af <a href="https://docs.fastcomments.com/guide-customizations-and-configuration.html#url-id" target="_blank">URL ID</a>, der er sendt til kommenteringswidgeten
på siden Opret en samtale som samtalenavn.

### Afslutning

Ligesom resten af FastComments håber vi, at du finder denne funktion hurtig og easy at bruge.

Skål!

{{/isPost}}

---