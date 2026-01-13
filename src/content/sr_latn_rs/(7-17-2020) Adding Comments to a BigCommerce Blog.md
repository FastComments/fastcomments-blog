---
[category:Integrations]
###### [postdate]
# [postlink]Dodavanje komentara na BigCommerce blog[/postlink]

{{#isPost}}

#### Dodajte angažman publike na bilo koju stranicu
Šta ako vaša publika može komentarisati vaše blog postove, postavljati pitanja i davati povratne informacije? Sada to mogu sa FastComments.

#### Prilagođene teme
Da biste dodali FastComments na blog vaše BigCommerce prodavnice, moraćete da uredite šablone teme. Uvešćemo vas kroz taj proces.

U BigCommerce kontrolnoj tabli idite na Storefront -> Moje teme.

<div class="text-center">
    <img style="vertical-align: top;" src="images/fc-bigcommerce-store-link.png" alt="Veza do prodavnice" title="Veza do prodavnice" class="lozad" />
    <img style="vertical-align: top;" src="images/fc-bigcommerce-my-themes.png" alt="Veza do mojih tema" title="Veza do mojih tema" class="lozad" />
</div>

Pod "Trenutna tema" videćete padajući meni sa oznakom "Napredno".

<div class="text-center">
    <img src="images/fc-bigcommerce-advanced-dropdown.png" alt="Napredno padajući meni teme" title="Napredno padajući meni teme" class="lozad" />
</div>

U ovom padajućem meniju prva opcija je "Uredi fajlove teme". Ako ova opcija nije aktivna, prvo ćete morati da kopirate temu putem "Napravite kopiju".

Kada otvorite uređivač šablona, videćete pregledač fajlova na levoj strani vašeg pretraživača. Ovo je pregledač fajlova za šablone u vašoj temi.

Trebaće da navigirate do HTML šablona koji predstavlja blog post. To je na templates/components/blog/post.html, kao što je prikazano:

<div class="text-center">
    <img src="images/fc-bigcommerce-editor-post-file.png" alt="Lokacija urednika post fajla" title="Lokacija urednika post fajla" class="lozad" />
</div>

Vaš FastComments kod koji možete dobiti <a href="https://fastcomments.com/auth/my-account/get-acct-code" target="_blank">ovde</a> treba da bude zalepjen odmah nakon linije 48, koja ima tekst "&#123;{>components/common/share}&#125;".

<div class="text-center">
    <img src="images/fc-bigcommerce-blog-post-script-location.png" alt="Mesto za umetanje FastComments" title="Mesto za umetanje FastComments" class="lozad" />
</div>

#### Zapamtite!
Moraćete da dodate domenu vaše prodavnice u FastComments, što možete učiniti <a href="https://fastcomments.com/auth/my-account/configure-domains" target="_blank">ovde</a>.

#### Na kraju
Evo kako bi FastComments trebao da izgleda na vašem BigCommerce blogu. Živeli!

<div class="text-center">
    <img src="images/fc-bigcommerce-blog-post-example.png" alt="FastComments na BigCommerce blogu" title="FastComments na BigCommerce blogu" class="lozad" />
</div>

{{/isPost}}

---