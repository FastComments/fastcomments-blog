---
[category:Features]
[category:Moderation]
###### [postdate]
# [postlink]Sprog, der bruges i kommentarer, kan nu begrænses[/postlink]

{{#unless isPost}}
Nogle fællesskaber ønsker at begrænse de sprog, der anvendes. Dette kan nu gøres med FastComments.
{{/unless}}

{{#isPost}}

### Hvad er nyt

FastComments har altid forsøgt at støtte så mange sprog og lokaliteter som muligt.

Dog ønsker nogle fællesskaber at begrænse de sprog, der bruges til at kommunikere og skrive kommentarer.

I stedet for at håndhæve dette som en regel og potentielt udelukke brugere, kan dette nu konfigureres eksplicit på platformen.

### Sådan sætter du det op

I den samme Widget Customization UI, som du sikkert kender, kan du nu vælge et eller flere sprog, som kommentarer kan skrives på.

Platformen vil, ved indsendelse af kommentar, forsøge at bestemme kommentarens sprog i realtid. Hvis sikkerheden for det bestemte sprog er
over 70%, og det matcher med et tilladt sprog, så er kommentaren tilladt.

Hvis den skrevne kommentar ikke er på et sprog defineret af din konfiguration, vil brugeren få vist en fejlmeddelelse på deres eget sprog.

### Udviklerindflydelse

Denne konfiguration vil påvirke kommentarer gemt via API'et også.

Du vil modtage en fejl som følgende:

            status: 'failed',
            reason: `Kommentaren ser ud til at være på et af disse sprog: [es], men kun [en,fr] er tilladt.`,
            code: 'language-not-allowed',
            translatedError: "En fejlmeddelelse på brugerens sprog."

### Afslutning

Som med alle store udgivelser er vi glade for, at vi kunne tage os tid til at optimere, teste og korrekt frigive denne funktion. Giv os besked
herunder, hvis du opdager nogen problemer.

Skål!

{{/isPost}}

---