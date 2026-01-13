---
[category:Integrations]
###### [postdate]
# [postlink]Aggiungere commenti a un blog BigCommerce[/postlink]

{{#isPost}}

#### Aggiungi Coinvolgimento del Pubblico a Qualsiasi Pagina
E se il tuo pubblico potesse commentare i tuoi post del blog, fare domande e dare feedback? Ora può farlo con FastComments.

#### Temi Personalizzati
Per aggiungere FastComments al blog del tuo negozio BigCommerce, dovrai modificare i template del tuo tema. Ti guideremo attraverso il processo.

Nel pannello di controllo BigCommerce vai su Storefront -> I miei Temi.

<div class="text-center">
    <img style="vertical-align: top;" src="images/fc-bigcommerce-store-link.png" alt="Link Negozio" title="Link Negozio" class="lozad" />
    <img style="vertical-align: top;" src="images/fc-bigcommerce-my-themes.png" alt="Link I Miei Temi" title="Link I Miei Temi" class="lozad" />
</div>

Sotto "Tema Corrente" vedrai un menu a discesa con l'etichetta "Avanzato".

<div class="text-center">
    <img src="images/fc-bigcommerce-advanced-dropdown.png" alt="Menu a discesa Tema Avanzato" title="Menu a discesa Tema Avanzato" class="lozad" />
</div>

In questo menu a discesa la prima opzione è "Modifica File Tema". Se questa opzione non è cliccabile, dovrai prima copiare il tema tramite "Crea una Copia".

Una volta che puoi aprire l'editor del template, vedrai un browser di file sul lato sinistro del tuo browser. Questo è un browser di file per i template nel tuo tema.

Dovrai navigare verso il template HTML che rappresenta un post del blog. Si trova in templates/components/blog/post.html, come illustrato:

<div class="text-center">
    <img src="images/fc-bigcommerce-editor-post-file.png" alt="Posizione File Editor Post" title="Posizione File Editor Post" class="lozad" />
</div>

Il tuo frammento di codice FastComments, che puoi ottenere da <a href="https://fastcomments.com/auth/my-account/get-acct-code" target="_blank">qui</a>, dovrebbe essere incollato subito dopo la linea 48, che contiene il testo "&#123;{>components/common/share}&#125;".

<div class="text-center">
    <img src="images/fc-bigcommerce-blog-post-script-location.png" alt="Luogo per inserire FastComments" title="Luogo per inserire FastComments" class="lozad" />
</div>

#### Ricorda!
Dovrai aggiungere il dominio del tuo negozio a FastComments, cosa che puoi fare <a href="https://fastcomments.com/auth/my-account/configure-domains" target="_blank">qui</a>.

#### In Conclusione
Ecco come dovrebbe apparire FastComments sul tuo blog BigCommerce. Salute!

<div class="text-center">
    <img src="images/fc-bigcommerce-blog-post-example.png" alt="FastCommence su un Blog BigCommerce" title="FastCommence su un Blog BigCommerce" class="lozad" />
</div>

{{/isPost}}

---