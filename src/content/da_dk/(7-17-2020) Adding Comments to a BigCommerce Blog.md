---
[category:Integrations]
###### [postdate]
# [postlink]Tilføj kommentarer til en BigCommerce blog[/postlink]

{{#isPost}}

#### Tilføj publikumsengagement til enhver side
Hvad nu hvis dit publikum kunne kommentere på dine blogindlæg, stille spørgsmål og give feedback? Nu kan de med FastComments.

#### Tilpassede temaer
For at tilføje FastComments til din BigCommerce butiks blog, skal du redigere dine tema skabeloner. Vi guider dig igennem det.

I BigCommerce dashboardet går du til Butik -> Mine Temaer.

<div class="text-center">
    <img style="vertical-align: top;" src="images/fc-bigcommerce-store-link.png" alt="Butik Link" title="Butik Link" class="lozad" />
    <img style="vertical-align: top;" src="images/fc-bigcommerce-my-themes.png" alt="Mine Temaer Link" title="Mine Temaer Link" class="lozad" />
</div>

Under "Nuværende Tema" vil du se en dropdown med etiketten "Avanceret".

<div class="text-center">
    <img src="images/fc-bigcommerce-advanced-dropdown.png" alt="Tema Avanceret Dropdown" title="Tema Avanceret Dropdown" class="lozad" />
</div>

I denne dropdown er den første mulighed "Rediger tema filer". Hvis denne mulighed ikke kan klikkes, skal du først kopiere temaet via "Lav en kopi".

Når du kan åbne skabeloneditoren, vil du se en filbrowser på venstre side af din browser. Dette er en filbrowser for skabelonerne i dit tema.

Du skal navigere til HTML-skabelonen, der repræsenterer et blogindlæg. Den findes på templates/components/blog/post.html, som illustreret:

<div class="text-center">
    <img src="images/fc-bigcommerce-editor-post-file.png" alt="Editor Post Filplacering" title="Editor Post Filplacering" class="lozad" />
</div>

Dit FastComments kodeudsnit, som du kan få fra <a href="https://fastcomments.com/auth/my-account/get-acct-code" target="_blank">her</a>, skal indsættes lige efter linje 48, som har teksten "&#123;{>components/common/share}&#125;".

<div class="text-center">
    <img src="images/fc-bigcommerce-blog-post-script-location.png" alt="Sted at indsætte FastComments" title="Sted at indsætte FastComments" class="lozad" />
</div>

#### Husk!
Du skal tilføje domænet for din butik til FastComments, hvilket du kan gøre <a href="https://fastcomments.com/auth/my-account/configure-domains" target="_blank">her</a>.

#### Afslutningsvis
Her er, hvordan FastComments skal se ud på din BigCommerce blog. Skål!

<div class="text-center">
    <img src="images/fc-bigcommerce-blog-post-example.png" alt="FastCommence på en BigCommerce Blog" title="FastCommence på en BigCommerce Blog" class="lozad" />
</div>

{{/isPost}}

---