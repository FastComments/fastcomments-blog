---
[category:UI & Customization]
###### [postdate]
# [postlink]Ulæste kommentarer er nu fremhævet med FastComments[/postlink]

{{#unless isPost}}
Har du nogensinde vendt tilbage til en side og ønsket at genoptage læsningen af kommentarsektionen, hvor du slap? FastComments fremhæver nu kommentarer,
du har overset, hvilket gør dette let.
{{/unless}}

{{#isPost}}

### Hvad er nyt

Har du nogensinde vendt tilbage til en side og ønsket at genoptage læsningen af kommentarsektionen, hvor du slap? FastComments fremhæver nu kommentarer,
du har overset, hvilket gør dette let.

<div class="text-center">
    <img src="/images/new-comment-highlighted.png" alt="Avatar i ny kommentar fremhævet." />
</div>

### Hvordan får man det

Enhver kommentar, der udløste en in-app-notifikation (svar, svar i samme tråd, eller kommentarer på en side,
som du er abonnent på), vil automatisk blive fremhævet med brugerens avatar, der skinner svagt. Farven kan tilpasses via CSS
ved hjælp af `is-unread` klassen. Den standard styling understøtter også mørk tilstand.

Derudover er en ny `24hr` CSS-klasse blevet tilføjet til kommentar elementer, der er postet inden for de sidste 24 timer. Du kan bruge dette til at style
kommentarer også.

### Hvorfor fremhæve avataren?

Vi erkender, at det kan være at foretrække at fremhæve hele kommentaren. Dog har dette læsbarheds- og stylingbekymringer med
vores kunder, der har tilpasset platformen til at matche deres produkt. Vi fandt, at det at fremhæve avataren let er en ret diskret
ændring i de fleste tilfælde. Hvis ønskes, kan gløden fjernes og ændres ved hjælp af widget tilpasningsregler.

### Afslutningsvis

Vi ved, at denne funktion har været længe ventet af nogle. Vi har brugt tid på at vælge styling, der ikke var for påtrængende, men stadig nyttig, og vi kan
foretage yderligere justeringer baseret på feedback.

Skål!

{{/isPost}}

---