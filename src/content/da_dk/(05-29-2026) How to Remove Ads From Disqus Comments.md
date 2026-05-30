---
[category:Migration]
[category:Tutorials]
###### [postdate]
# [postlink]Sådan fjerner du annoncer fra Disqus kommentarer[/postlink]

{{#unless isPost}}
På den gratis Disqus-plan kommer din kommentarsektion med annoncer knyttet til. Der er to måder at slippe af med dem på. Den bedre mulighed får også dine kommentarer til at indlæse hurtigere og forhindrer, at dine læsere bliver sporet.
{{/unless}}

{{#isPost}}

Disqus betaler for sin gratis plan ved at placere annoncer i din kommentarsektion, lige under dit indhold, på det sted, hvor dine læsere går for at tale med dig. De annoncer tilhører ikke dig. Du vælger dem ikke, og du tjener ikke en øre fra dem. Det er byttet for den gratis tier.

Der er to reelle måder at fjerne dem på.

## Mulighed 1: Opgrader din Disqus-plan

Den ligetil rute er at betale Disqus. Deres betalte planer slukker for annoncerne. Du kan finde de nuværende muligheder på <a href="https://disqus.com/pricing/" target="_blank">Disqus-prissiden</a>.

Det fungerer, men det er værd at være klar over, hvad du køber. Du betaler for at ophæve en ulempe. Annoncerne forsvinder, og resten af Disqus forbliver det samme: kommentarfeltet indlæser stadig et tungt bundle af tredjeparts scripts, og dine læsere bliver stadig sporet på de sider, der integrerer det. Du betaler for at fjerne annoncerne, ikke for at gøre kommentarsektionen lettere eller mere privat.

## Mulighed 2: Skift til en platform, der aldrig viser annoncer

Den anden måde at fjerne annoncerne på er at bruge en kommentarplatform, der ikke viser dem i første omgang. :)

For kun $0.99/måned giver FastComments dybdeydelsesorienteret funktionalitet uden sporing eller annoncer.

## Du Bevarer Hver Kommentar

Den del, folk bekymrer sig mest om, er at miste deres eksisterende diskussion. FastComments har en indbygget Disqus-importør, som bringer dine kommentarer, brugernavne, brugeravatarer, inline-billeder, stemmer og tidsstempler over. Vi flytter endda alle billeder til vores egen CDN for dig.

Hvis du ønsker den fulde, detaljerede vejledning, har vi en dedikeret guide: [Migrering Fra Disqus Til FastComments](/(1-23-2020)-migrating-from-disqus-fastcomments.html). Den korte version er nedenfor.

## Sådan Skifter Du På Tre Trin

### 1. Eksporter dine kommentarer fra Disqus

Følg <a href="https://help.disqus.com/en/articles/1717199-importing-exporting" target="_blank">Disqus's egne eksporttrin</a>. De sender dig en fil med en "gz" udvidelse via email. Du behøver ikke at åbne eller udpakkefilen, og en standard Windows-installation kan heller ikke. Vores backend læser den komprimerede fil direkte.

### 2. Importer filen til FastComments

Når du er logget ind, skal du gå til <a href="https://fastcomments.com/auth/my-account/manage-data/import" target="_blank">import-siden</a>, vælge Disqus fra dropdown-menuen og uploade filen som den er. Importen kører i baggrunden; siden vil automatisk opdatere, mens den kører for at vise dig et live antal af # af fundne og importerede kommentarer. Det er sikkert at genimportere så mange gange du har brug for.

### 3. Udskift Disqus-snippet med vores

Fjern Disqus-embedkoden fra dine sider og indsæt <a href="https://fastcomments.com/auth/my-account/install-wizard/" target="_blank">FastComments-snippet</a> i stedet. Så længe dine side-URL'er forbliver de samme, vil dine importerede kommentarer linje op præcis som de var.

## På WordPress?

Hvis dit site kører på WordPress, skal du springe de manuelle trin over og installere <a href="https://wordpress.org/plugins/fastcomments/" target="_blank">FastComments WordPress-plugin</a>. Den håndterer installation, opsætning og synkronisering for dig, og så kan du deaktivere Disqus.

## Test Det Før Du Forpligter Dig

Du behøver ikke at flippe indsatsen på en gang. Du kan køre Disqus og FastComments på den samme side midlertidigt for at sammenligne udseendet og følelsen, før du fuldstændigt skifter over. Hvis du har brug for hjælp til noget af dette, <a href="https://fastcomments.com/auth/my-account/help" target="_blank">kontakt os</a>, så hjælper vi dig igennem det.

Usikker på hvad FastComments vil koste dig? Hver plan er uden annoncer, og du kan tjekke dit beløb på <a href="https://fastcomments.com/pricing-calculator" target="_blank">priskalkulatoren</a>. Hvis du er i EU, kan du oprette din konto på <a href="https://eu.fastcomments.com" target="_blank">eu.fastcomments.com</a>, så dine data forbliver i EU.

## Opsummering

1. Eksporter dine data fra Disqus
2. Importer dem til FastComments
3. Udskift Disqus-snippet med <a href="https://fastcomments.com/auth/my-account/get-acct-code" target="_blank">FastComments's</a>

Det er det. Ingen annoncer i din kommentarsektion, lettere sider, og hver kommentar du allerede havde.

Skål!

{{/isPost}}

---