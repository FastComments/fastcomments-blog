---
[category:Features]
###### [postdate]
# [postlink]Notifikations-e-mails aktiveret for abonnementer[/postlink]

{{#unless isPost}}
FastComments sender nu e-mails til brugere for sider, de er abonnenter på.
{{/unless}}

{{#isPost}}

### Hvad er nyt

Med FastComments kan brugere klikke på klokkeslagsikonet i et kommentarwidget for at abonnere på den pågældende side. Vi vil underrette dem
når der er nye kommentarer på den side, eller når der er en ny kommentar i et svarthread, de er en del af.

Vi har gjort dette i årevis, men vi sendte ikke e-mails for disse notifikationer - de var kun synlige i vores dashboard.

Vi vil nu sende e-mails for disse notifikationer.

### Nye e-mailtyper

Vi sender nu to nye typer e-mails. Den første er, når du kun har et par notifikationer. Vi vil simpelthen liste
de nye kommentarer i e-mailen til dig.

Den anden type e-mail, du vil modtage, indeholder links til hver side, du har modtaget notifikationer for. Dette sendes
når du modtager mange notifikationer.

Disse notifikations-e-mails er kun for nye kommentarer på sider, du er abonnent på.

### E-mail-notifikationsplan

Notifikations-e-mails sendes hver time for at forhindre overdreven e-mailkommunikation. Undtagelsen er, hvis den pågældende side har over ti tusinde
kommentarer, i hvilket tilfælde vil vi kun sende notifikationer for den side én gang om dagen.

### For webstedsejere - Tilpasning af e-mails

En ny `New Subscription Comments` e-mail skabelon vil snart være tilgængelig for tilpasning.

### For udviklere & udfordringer

For SSO-brugere vil vi som standard ikke sende notifikations-e-mails. Du skal passere et nyt flag: `optedInSubscriptionNotifications: true` i brugerobjektet, eller
i payload til kommentarwidgetten, for at aktivere disse nye notifikationer.

### Afslutningsvis

Som med alle større udgivelser er vi glade for, at vi kunne tage os tid til at optimere, teste og korrekt frigive denne funktion. Giv os besked
herunder, hvis du opdager eventuelle problemer.

Skål!

{{/isPost}}

---