---
[category:Features]

###### [postdate]
# [postlink]FastComments WYSIWYG-editoren er ude af beta[/postlink]

{{#unless isPost}}
Kunder kan nu vælge at bruge den nye editor, som ikke bruger synlige anker-tags til formatering.
{{/unless}}

{{#isPost}}

### Hvad er nyt

Brugere af FastComment har altid haft mulighed for at formatere deres kommentarer med anker-tags som `<b>this</b>`. Dette er meget
kendt for enhver, der har brugt et internetforum før, eller mange af vores konkurrenter, men nogle brugere og
fællesskaber forventer en anden adfærd.

Du kan nu style tekst i kommentarfeltet uden anker-tags, da tekstinputtet kan skifte til en `contenteditable`.

Til demonstrationsformål er dette blevet aktiveret på denne blog.

Den avancerede editor har præcis det samme udseende som den gamle editor, den bruger blot ikke synlige anker-tags.

### Aktivere avanceret redigering

I Widget-tilpasning kan du blot aktivere `Advanced Editor` og trykke på gem. Dokumentationen er [her](https://docs.fastcomments.com/guide-customizations-and-configuration.html#enable-wysiwyg).

### For udviklere & udfordringer

Du kan finde dokumentationen til aktivering af dette i koden [her](https://docs.fastcomments.com/guide-customizations-and-configuration.html#enable-wysiwyg), selvom vi anbefaler at bruge Widget-tilpasningsbrugerfladen, da det
vil resultere i mindre data, der sendes frem og tilbage pr. sideindlæsning.

Den genererede HTML fra det indholdbarbare er en smule forskellig fra den gamle textarea-editor, så hold dette in mente,
hvis du parser kommentarer fra API'en.

### Optimeringer

Vi har forhindret kommentarpanelet i at vokse med denne nye funktion ved at tilføje dette som en udvidelse, som indlæses i baggrunden,
når denne funktion er aktiveret, hvilket holder det standard kommentarpanel lille og let.

### Afslutningsvis

Som med alle større udgivelser, er vi glade for, at vi kunne tage os tid til at optimere, teste og korrekt frigive denne funktion. Lad os vide
nedenfor, hvis du opdager nogen problemer.

Skål!

{{/isPost}}

---