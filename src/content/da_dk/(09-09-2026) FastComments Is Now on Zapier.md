[category:Features]
[category:Integrations]
###### [postdate]
# [postlink]FastComments er nu på Zapier[/postlink]

{{#unless isPost}}
Forbind dine kommentarer til tusindvis af apps med den officielle FastComments-app til Zapier. Triggere udløses i det øjeblik, en kommentar bliver postet, og enhver app kan oprette kommentarer, sider og brugere på dit site.
{{/unless}}

{{#isPost}}

### What's New

Der er nu en officiel FastComments-app på [Zapier](https://zapier.com). Log ind én gang fra Zapier-editoren, og du kan sende hver ny kommentar til Slack, logge dem i et regneark, tilføje kommentatorer til dit CRM eller oprette kommentarer fra en formularindsendelse, uden at skrive kode.

Før dette betød det at integrere FastComments i et andet værktøj at opsætte en egen webhook-modtager eller skrive mod REST API'en. Begge fungerer stadig. Zapier-appen er til de tilfælde, hvor du foretrækker ikke at køre noget.

### Triggers

Tre triggere, alle øjeblikkelige:

- **New Comment** udløses, når en kommentar er postet. Som standard udløses kun godkendte, ikke-spam kommentarer, så en Zap, der poster til en offentlig kanal, ikke lækker ting, der stadig er i moderationskøen. Der er en afkrydsningsboks for at inkludere alt.
- **Updated Comment** udløses, når en kommentar redigeres, godkendes, stemmes på, fastgøres eller på anden måde ændres. Filtrer på det godkendte felt, så bliver det en "godkendt kommentar"-trigger.
- **Deleted Comment** udløses, når en kommentar slettes, med den fulde kommentar til dine optegnelser.

Hver trigger har et valgfrit domænefilter, der viser de domæner, der er konfigureret på din konto, så en Zap kan overvåge et site ud af mange.

Triggerne er understøttet af webhooks, ikke polling. FastComments leverer begivenheden til Zapier i det øjeblik, den sker, intet poller din konto mens den venter, og ventetiden koster ingen API‑kreditter.

### Actions and Searches

Handlinger kalder FastComments API på dine vegne:

- **Create Comment** på enhver side, som en navngivet kommentator eller en eksisterende SSO‑bruger, eventuelt som et svar.
- **Create Page**, så en side kan listes og begrænses til medlemsgrupper før dens første kommentar.
- **Create SSO User**, så medlemmer fra dine andre værktøjer kan kommentere under deres egen identitet.
- **Create Feed Post** og **Create Hash Tag**.
- **Flag Comment** til moderatorgennemgang.

Søgninger slår ting op til senere trin: **Find Comment** efter id, **Find SSO User** efter e‑mail, og **Find Page** efter URL‑ID. Kombinér en søgning med den tilsvarende oprettelse i Zapier's "find or create"-tilstand, så den manglende bruger eller side oprettes for dig.

### A Few Zaps to Start With

- New Comment, derefter Slack "Send Channel Message". Kortlæg kommentatorens navn, kommentaren og sidens URL. Brug domænefilteret til at dirigere hvert site til sin egen kanal.
- New Comment, derefter Google Sheets "Create Spreadsheet Row", med Deleted Comment som tilføjer en række som en anden Zap. Regnearket bliver et revisionsspor.
- Updated Comment filtreret på Approved er sand, derefter Gmail "Send Email" for at lade forfatteren vide, at deres kommentar er live.
- Typeform "New Response", derefter Create Comment på din testimonials-side med Approved efterladt uafkrydset, så du kan gennemgå hver enkelt, før den vises.
- WordPress "New Post", derefter Create Page, så hvert indlæg registreres før den første kommentar.

[The guide](https://docs.fastcomments.com/guide-installation-zapier.html) har mere, inklusive et workflow til at provisionere SSO‑brugere fra dit medlemsværktøj.

### How It Connects

Appen bruger OAuth. Når du tilføjer et FastComments-trin, spørger Zapier om din region (United States eller EU), sender dig til FastComments for at logge ind, og viser en samtykkeside, der navngiver applikationen, den konto, den vil oprette forbindelse til, og de anmodede tilladelser. Ingen API‑nøgle kopieres til Zapier.

Personen, der godkender forbindelsen, skal være en API‑admin på kontoen. Kontoejere har dette allerede og kan give det til andre teammedlemmer på Users‑siden.

Hver forbindelse vises under **Integrate, then Connected Apps** i dit dashboard, markeret som en officiel integration, med hvornår den sidst blev brugt. At tilbagekalde den deraf afbryder Zapier med det samme. At tænde en Zap opretter et webhook‑abonnement, du kan se på Webhooks‑siden med kilden **API**, og at slukke Zap'en fjerner det.

### What It Costs

Appen er gratis på alle Zapier‑planer, inklusive den gratis, og FastComments opkræver ikke ekstra for den. Triggere bruger ingen API‑kreditter. Handlinger og søgninger bruger de samme kreditter som et kald fra din egen kode ville, én per kald i de fleste tilfælde.

### Documentation

[The Zapier guide](https://docs.fastcomments.com/guide-installation-zapier.html) dækker tilslutning af en konto, hver trigger og handling med deres felter, eksempelpå Zaps og fejlfinding. Integrationens kildekode er open source på [github.com/FastComments/fastcomments-zapier](https://github.com/FastComments/fastcomments-zapier).

### In Conclusion

Åbn [fastcomments.com/zapier](https://fastcomments.com/zapier) for at finde appen, tilslutte din konto og bygge din første Zap.

Som altid, lad os vide nedenfor, hvis du støder på noget.

Skål!

{{/isPost}}

---