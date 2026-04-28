---
[category:Features]
[category:Moderation]
[category:Announcements]
###### [postdate]
# [postlink]FastComments lancerer AI-agenter[/postlink]

{{#unless isPost}}
Du kan nu oprette AI-agenter, der læser hver ny kommentar, svarer i din stemme, eskalerer de svære beslutninger og tildeler badges til dine bedste bidragydere. De kører efter din tidsplan, inden for dit budget, og gør kun det, du giver dem lov til.
{{/unless}}

{{#isPost}}

### En note til fællesskabet

Jeg vil lige få dette sagt med det samme - vi bygger ikke noget, der lader bots lade som om de er rigtige brugere. Dette er
ikke noget, jeg mener er godt for internettet, online fællesskaber eller vores produktretning. Målet med AI-agenter er at styrke modereringsteam eller fællesskabsejere, der ikke har råd til dedikerede moderatorer.

Alle kommentarer givet af AI skal have "Bot"-mærket. Dette er, hvordan produktet leveres, og enhver side, der på en eller anden måde fjerner Bot-mærket fra bot-kommentarer, vil få funktionen deaktiveret. Desuden bruger vi kun LLM-udbydere, der ikke træner på vores data. Vi bruger i øjeblikket DeepInfra, som kun leverer inferens for open source-modeller.

Nu hvor det er ude af vejen :)

### Hvad er nyt

FastComments tilbyder nu automatiserede agenter, der kan udføre moderering opgaver, fastgøre kommentarer, opsummere kommentartråde, og mere.

Du kan finde dem under [Tilpas, derefter AI-agenter](https://fastcomments.com/auth/my-account/ai-agents).

### Udløsere og værktøjer

Hver agent er sat op med en liste af udløsere og en liste over tilladte handlinger. Udløsere inkluderer nye kommentarer, redigeringer, sletninger, stemmegrænser, flaggrænser, moderatorhandlinger, nykomne kommentatorer og mere. Hvis du ikke ønsker, at en agent skal udelukke brugere, kan du ekskludere ban-værktøjet.

For eksempel, hvis du kun vil have en "trådopsummerer", der kun svarer efter et bestemt antal kommentarer og fastgør den kommentar, kan du opsætte agentens tilladelser, så den kun har adgang til disse handlinger.

Du kan også afgrænse en agent til specifikke URL-mønstre som `/news/*` eller `/forums/*`, og til specifikke locale, så en fransksproget fællesskabsagent ikke begynder at svare på dine engelske sider.

### Tørkørsel, godkendelser og budgetter

Hver agent lanceres som standard i tørkørselsmode. I tørkørsel læser agenten kontekst og skriver ned, hvad den ville gøre, men udfører ikke faktisk nogen handlinger. Du kan se nogle reelle udløsere, kigge på de foreslåede handlinger og agentens ræsonnering, og beslutte, om du stoler på den, før du aktiverer den.

For følsomme værktøjer kan du kræve menneskelig godkendelse. Agenten køer handlingen, en administrator gennemgår den foreslåede handling sammen med agentens ræsonnering og tillid, og godkender eller afviser. Udelukkelser kræver altid godkendelse i EU i henhold til DSA Artikel 17, men du kan kræve godkendelse for ethvert værktøj, hvor som helst.

Hver agent har et dagligt og et månedligt budgetloft. Når loftet rammes, stopper agenten med at køre, indtil perioden ruller over. Vi sender dig en e-mail ved standardgrænser på 80 procent og 100 procent (du kan også tilmelde dig en 50 procent alert), så der ikke kommer nogen overraskende fakturaer.

### Hukommelse

Agenter har hukommelse, som agenten læser og skriver for sig selv. De kan gemme korte noter om en bruger eller et mønster, såsom "advarslet for off-topic tre gange" eller "spamring, der poster links til domæne X", og læse disse noter tilbage ved næste udløser. Hukommelsen deles blandt agenter i dit lejemål, så en velkomstagents noter kan informere en moderationsagents beslutninger senere. Hukommelse knyttet til en bruger bliver ryddet op, hvis de sletter deres konto.

### Afspilning og testkørsel

Før du lader en agent løbe løs på live-trafik, kan du køre den mod dine historiske kommentarer. Afspilningsværktøjet gennemgår reelle tidligere kommentarer i tørkørsel, viser dig, hvad agenten ville have gjort, og klassificerer hver foreslået handling mod, hvad der rent faktisk skete. Dette er den hurtigste måde at justere et systemprompt uden at vente på live begivenheder.

### Modeller, privatliv og omkostninger

Agenter kører på open-weight-modeller, der hostes af infrastrukturoperatører, der ikke træner på kundedata. I dag kan du vælge mellem en hurtigere model (gpt-oss-120B-turbo) og en smartere, langsommere en (GLM 5.1), og vi vil fortsætte med at tilføje muligheder, efterhånden som landskabet udvikler sig. Omkostningerne måles pr. token og omregnes til dollars på din brugsoversigt, sammen med daglige og månedlige tendenser.

Som en del af denne ændring sænker vi vores tokenomkostninger fra $80 pr. 1M tokens til $20 pr. 1M kombinerede input/output tokens. De fleste af vores kunder bruger meget lidt på tokens til spam-detektion, da det oprindelige LLM-baserede spam-detekteringssystem kun fakedede til LLM, hvis spammen kom forbi naive-bayes klassifikatoren, derfor den høje oprindelige omkostning. Vi sænker omkostningerne for at tilskynde til brug af den nye agentsfunktionalitet.

På et tidspunkt, når hukommelsesomkostningerne falder igen, og modeller som GLM 5.1 er mere rimelige at køre på selvhostet hardware, vil vi skifte væk fra at bruge en ekstern udbyder og køre hardware selv.

### Afslutningsvis

Vi har tænkt længe over, hvordan vi kan bygge dette, uden at det føles som om agenten var ansvarlig. Tørkørsel, godkendelser, afgrænsede værktøjer, budgetlofter og afspilning mod historien findes alle for at hjælpe dig med at forblive i kontrol. Vi håber, at AI-agenter frigør dine moderatorer til samtaler, der rent faktisk har brug for et menneske.

Vi takker vores kunder, der giver os løbende feedback, så vi kan finde på ideer som denne og også give os tid til at lancere dem godt. Som altid, lad os vide nedenfor, hvis du opdager nogen problemer.

Skål!

{{/isPost}}

---