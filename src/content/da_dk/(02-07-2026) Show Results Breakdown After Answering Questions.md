---
[category:Features]
[category:Ratings & Reviews]
###### [postdate]
# [postlink]Vis Resultaterne Efter Besvarelse af Spørgsmål[/postlink]

{{#unless isPost}}
FastComments giver nu mulighed for at vise brugerne en samlet opdeling af alle svar efter de har besvaret et vurderings- eller spørgeskema spørgsmål.
{{/unless}}

{{#isPost}}

### Hvad er nyt

Når du indsamler feedback via stjerneratings, NPS, thumbs up/down, eller slider spørgsmål, kan du nu vise brugerne en samlet resultatopdeling straks efter de svarer.

Tidligere ville brugerne svare på et spørgsmål og blot se deres valg fremhævet. Nu, med den nye **Vis Resultaterne Efter Besvarelse** indstilling, ser de hvordan alle andre på den side har svaret.

### Hvordan det ser ud

For **stjerneratings** viser opdelingen den gennemsnitlige bedømmelse med delvist udfyldte stjerner, et stregdiagram med fordeling pr. stjerne og procenter, samt det samlede antal svar.

For **NPS spørgsmål** viser det NPS scoren sammen med Promoter, Passive og Detractor procenter med farvekodede barer.

For **Thumbs Up/Down** ser brugerne procentfordelingen mellem thumbs up og thumbs down.

For **Slider spørgsmål** vises den gennemsnitlige værdi og det samlede antal svar.

Under-spørgsmål får også deres egen individuelle opdeling.

### Sådan aktiveres det

1. Gå til [Tilpas UI](https://fastcomments.com/auth/my-account/customize-widget).
2. Rediger din tilpasningsregel (eller opret en ny).
3. Under spørgsmålsindstillingerne, tjek **Vis Resultaterne Efter Besvarelse**.
4. Gem.

Det er det. Opdelingen vil vises for brugerne på den side efter de har indsendt deres svar.

### Ydeevne

Opdelingsdataene er aggregeret pr. side og cached på serversiden, så det tilføjer ikke betydelig belastning. Når en bruger indsender et nyt svar, opdateres cachen, så opdelingen straks afspejler de nyeste data.

### Mørk tilstand

Opdelingen understøtter fuldt ud mørk tilstand. Når dit site bruger en mørk baggrund, tilpasser barerne, etiketterne og tekstfarverne sig automatisk.

### Afslutning

Denne funktion giver brugerne øjeblikkelig social bevis og kontekst efter besvarelse, hvilket kan øge engagementet med dine vurderinger og spørgeskemaer. Det fungerer med alle fire spørgetyper og kræver ingen kodeændringer for at aktivere.

Vi håber, du nyder denne tilføjelse. Lad os vide nedenfor, hvis du har nogen feedback!

Skål!

{{/isPost}}