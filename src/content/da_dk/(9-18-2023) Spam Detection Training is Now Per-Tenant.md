---
[category:AI & Machine Learning]
###### [postdate]
# [postlink]Spam Detection Training is Now Per-Tenant[/postlink]

{{#unless isPost}}
FastComments har i årevis trænet sin spamforebyggende klassifikator. Nu er træningskapaciteterne blevet opgraderet.
{{/unless}}

{{#isPost}}

### Hvad er Nyt

Når du markerer en kommentar som spam, eller ikke spam, lærer FastComments af dette til fremtidig spamdetektering.

Men denne læring skete det samme sted for alle. Det betyder, at en anden lejers spamtræning påvirkede din. Der er fordele og ulemper ved dette. Først drager du automatisk fordel af, hvad andre moderatorer anser for at være spam. Ulempen er, at hvis de laver en fejl, eller hvis de har indhold, der er forskelligt fra dit.

For eksempel, hvis en anden lejer har et publikum, der handler om racingsimulatorer, kan de markere kommentarer med "krypto spam" som spam, en del. Som et resultat begynder klassifikatoren at relaterer tekst relateret til krypto som spam.

Men lad os sige, at du har et site, der er krypto-orienteret. Nu begynder mange af dine kommentarer at blive markeret som spam, når de ikke er. Nogle af dem kan med rette være spam, men mange ikke.

### Isoleret Træning

Når en ny lejer tilslutter sig FastComments, vil deres spamdetektering som standard blive trænet på det tidligere arbejde fra andre lejere.

Når du begynder at markere kommentarer som spam/ikke spam, vil systemet skifte til at bruge dit eget træningssæt.

### Opdatering 20. sept 2023

Vi fandt ud af, at denne opsætning ikke var ideel for alle som standard. Isoleret Spam Træning er ikke kun opt-in. Du kan aktivere dette på Moderationsindstillingssiden ved at vælge "Isoleret" i "Spam Filter" valgmuligheden.

Standardindstillingen er nu tilbage til "Delt" træning.

### Live

Træningssættet for din lejer bliver nu altid genopbygget, hver gang du markerer en kommentar som spam eller ikke spam.

Tidligere ville systemet genopbygge spamindekset periodisk. Dette blev gjort for at beskytte systemet mod overdreven belastning. Efter et par år har vi fundet ud af, at belastningen fra kontinuerlig træning ikke er meget høj, så vi har opdateret systemet til automatisk at opdatere indekset hver gang du foretager en ændring.

Disse indekser opbevares på kanten i vores applikationsservere, og de opdateres alle uafhængigt for at holde systemet hurtigt og responsivt.

### Sådan Får Du Det

Denne funktion er rullet ud til alle kunder!

### Afslutningsvis

Som med alle større udgivelser er vi glade for, at vi kunne tage os tid til at optimere, teste og korrekt frigive denne funktion. Lad os vide nedenfor, hvis du opdager nogen problemer.

Skål!

{{/isPost}}