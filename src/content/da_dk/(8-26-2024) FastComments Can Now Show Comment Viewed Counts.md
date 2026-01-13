---
[category:Analytics]
###### [postdate]
# [postlink]FastComments kan nu vise kommentars visningstællere[/postlink]

{{#unless isPost}}
FastComments understøtter nu visning af en tæller ved siden af hver kommentar, der live opdateres, når brugere ser kommentarer. 
{{/unless}}

{{#isPost}}

### Hvad er nyt

FastComments understøtter nu visning af en tæller ved siden af hver kommentar, der live opdateres, når brugere ser kommentarer. Om en kommentar ses eller ej bestemmes af brugerens
konto eller anonym session. Det understøtter SSO (både Secure SSO og Simple SSO).

### Live Demo

Vi har aktiveret en kommentarvisningstællemæssigt for dette blogindlæg specifikt! Tjek tælleren ved siden af øjet på hver kommentar!

### Dokumentation

[Du kan finde udviklerdokumentationen til opsætning af visningstællere her.](https://docs.fastcomments.com/guide-customizations-and-configuration.html#enable-comment-view-counts)

### Ydelse

Tællerne opdateres ikke med det samme, der er en lille (op til tre sekunder) forsinkelse, mens tællerne aggregeres og derefter sendes over netværket. Dette er en optimering, så hvis
du har et livearrangement, og et par tusinde mennesker ser for eksempel 10 kommentarer i gennemsnit på siden, sender vi ikke straks millioner af opdateringer (`3000 brugere x 3000 sideindlæsninger = ~9 millioner ændringer`) til hver bruger og overbelaster
deres browser eller bruger al deres netværksbåndbredde.

### Afslutning

Vi takker vores kunder, der giver os løbende feedback, så vi kan tænke på ideer som denne og også give os tid til at lancere godt optimerede funktioner. Vi håber, du
fortsat elsker FastComments.

Skål!

<script>
    window.demoOverrides = {
        enableViewCounts: true
    }
</script>

{{/isPost}}

---