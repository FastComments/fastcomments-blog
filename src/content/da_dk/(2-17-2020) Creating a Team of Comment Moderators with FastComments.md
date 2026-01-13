---
[category:Moderation]

###### [postdate]
# [postlink]Oprettelse af et Team af Kommentar Moderatorer med FastComments[/postlink]

En enmands hær kan kun skale så langt. Hvad gør du, når du er overvældet af antallet af kommentarer, du skal gennemgå?

{{#unless isPost}}
Læs dette indlæg for at se, hvordan du inviterer kommentar moderatorer til FastComments.
{{/unless}}

{{#isPost}}
### Problemet

Du har meget indhold og mange kommentarer. Det er godt - din brugerbase er engageret nok til at interagere med dig. Men nu er du overvældet
og har brug for at skalere din operation.

### FastComments Moderation

FastComments moderationsværktøjer giver et effektivt miljø til at gennemgå kommentarer, markere dem som spam, eller (hvis du må) slette dem.

Dashboardet er også responsivt, så du kan gennemgå og moderere kommentarer på farten!

Men adgangen til moderering af kommentarer til din side er ikke begrænset til kun din konto. Nogen kan oprette deres egen FastComments-konto og blive inviteret
til din side via admin dashboardet, [eller i bulk via API'en](https://docs.fastcomments.com/guide-api.html#moderator-structure). De behøver ikke engang at vide om FastComments eller oprette en konto på forhånd. Inviteringslinket, som vi viser dig, hvordan du sender, vil guide dem gennem oprettelsen af en konto.

Log blot ind på din konto og hold musen over Moderate Comments. Du vil se en mulighed for at Administrere Moderatorer.

<img 
    src="images/fc-add-moderator-menu.png"
    alt="Administrer Moderatorer Menu"
    title="Administrer Moderatorer Menu"
    class='lozad' />

Hvis du ikke har tilføjet nogen moderatorer endnu, vil denne knap tage dig til en vejledning, der guider dig gennem tilføjelsen af en moderator.

Du skal blot angive et navn og en e-mail. De vil automatisk få sendt et inviteringslink, som også vil guide dem gennem kontooprettelsen.

Valgfrit kan du også placere moderatorer og kommentarer i separate grupper. [Læs mere om Moderationsgrupper og yderligere moderationsfunktioner her.](https://docs.fastcomments.com/guide-moderation.html)

Hvis du har et team af moderatorer, kan du se deres fremskridt fra det samme sted - listen over Kommentar Moderatorer giver statistikker for hver moderator. Dette inkluderer
antallet af kommentarer, de har markeret som gennemgået, spam og slettet.

Det var det. Efter du sender det inviteringslink, kan de oprette deres konto og få fuld adgang til at moderere dine kommentarer. De vil kun se en forenklet
version af siden Moderate Comments - ingen mulighed for at ændre indstillinger gives til moderatorer.

God kommentar-aktivitet!

{{/isPost}}