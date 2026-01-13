---
[category:Features]

###### [postdate]
# [postlink]Let Code Snippet Support Med FastComments[/postlink]

Nogle af vores kunder har softwareudviklingsrelaterede sites og blogs. I disse fællesskaber er det almindeligt at dele kodeudsnit. Her er, hvordan FastComments gør det nemt.

{{#isPost}}

FastComments tillader deling af kode simpelthen ved at indsætte det i kommentarfeltet. Det kan blandes med anden tekst og billeder, og kræver ikke, at du manuelt tilføjer nogen form for "kode" tags for at tilføje formateringen. Bare indsæt!

Her er en hurtig demo, der viser det i aktion.

<video src="images/fc-code-snippet-demo.mp4" autoplay controls loop=true alt="Code Snippet Sharing Demo" title="Code Snippet Sharing Demo"></video>

### Ydelsesimplikationer

At tilføje denne funktion har kun tilføjet omkring 150 byte til klientbaseret widget, da størstedelen af funktionaliteten håndteres server-side. Faktisk, hvis du pakker dette sammen med de seneste Markdown-funktioner, har widgetstørrelsen faktisk været faldende med disse seneste funktioner!

### Ting at bemærke

Hvis du har et fællesskab, der i høj grad deler kode, bør du overveje at øge den maksimale kommentarstørrelse for at gøre deling af kodeudsnit lettere. Dette gøres via "Tilpas" fanen på administrationsdashboardet.

### Kodedetektion

For at holde størrelsen på den klientbaserede widget nede, vil vi kun automatisk detektere indsat kode for C og Python-lignende sprog (Java, JavaScript, CSS, C++, for eksempel), der bruger "{" eller mellemrum til kontrolflow. Hvis du ofte bruger et sprog, der ikke bliver automatisk detekteret, kontakt os.

For manuelt at indsætte et kodeblok, skriv en kommentar som: ```<code>(defun someLispCode(1, 2, 3))</code>```. Vi kan automatisk detektere omkring 150 sprog.

### Migrering af eksisterende kommentarer

Hvis du gerne vil migrere til FastComments og har mange kommentarer, der har kodeudsnit, som du gerne vil have formateret korrekt, <a href="https://fastcomments.com/auth/my-account/help" target="_blank">kan vi hjælpe</a>.

### Afslutning

Det var det! Vi har rullet dette ud til alle online fællesskaber på FastComments.

God kommentarjour!

{{/isPost}}