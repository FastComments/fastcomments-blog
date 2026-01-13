---
[category:Features]

###### [postdate]
# [postlink]Udgivelse af Visningsnavne[/postlink]

{{#unless isPost}}
FastComments har altid understøttet visningsnavne for SSO-brugere. Dog blev dette aldrig præsenteret for almindelige kommentatorer. I dag ændrer det sig!
{{/unless}}

{{#isPost}}

### Hvad er Nyt

FastComments har altid understøttet visningsnavne for SSO-brugere. Dog blev dette aldrig præsenteret for almindelige kommentatorer. I dag ændrer det sig!

På siden [Kontodetaljer](https://fastcomments.com/auth/my-account/edit-details) kan du nu udfylde et nyt felt `Visningsnavn`. `Visningsnavn` vil
blive vist på dine kommentarer og dine profiler.

### Emojis

Tidligere havde brugerne problemer med at bruge emojis i brugernavne, da man skal indtaste sit brugernavn for at logge ind. Dog kan `Visningsnavn` nu indeholde emojis.

### Unikhed og Misbrug

Pointen med `Visningsnavn` er, at det ikke er unikt. Hvis to FastComments.com-brugere, på to meget forskellige store fællesskaber, begge har lignende navne, ønsker vi
at de blot kan sætte deres foretrukne visningsnavn. Dog kan vi ikke begrænse, hvor folk kommenterer med deres globale FastComments-konto, så nogle gange kan dette
resultere i forvirring.

At have et lignende navn som en anden bruger, eller en moderator, er i sig selv ikke en sag om misbrug. Dog, hvis du misbruger dette ved forsætligt at udgive dig for andre brugere, kan vi
deaktivere denne funktion på din konto, og du vil være begrænset til kun at bruge `brugernavn`.

### Log Ind

Du bruger stadig dit brugernavn til at logge ind - **ikke dit visningsnavn!**

### For Udviklere & Fallgruber

De almindelige `Bruger` objekter, der exposeres via API-en, har nu `displayName`.

### Afslutning

Som med alle større udgivelser er vi glade for, at vi kunne tage os tid til at optimere, teste og korrekt udgive denne funktion. Lad os vide
herunder, hvis du opdager eventuelle problemer.

Skål!

{{/isPost}}

---