---
[category:Integrations]
###### [postdate]
# [postlink]Dodavanje komentara na BigCommerce blog[/postlink]

{{#isPost}}

#### Dodajte angažman publike na bilo koju stranicu
Šta ako bi vaša publika mogla komentarisati vaše blog postove, postavljati pitanja i davati povratne informacije? Sada to mogu uz FastComments.

#### Prilagođene teme
Da biste dodali FastComments na blog vaše BigCommerce prodavnice, moraćete da uredite predloške teme. Pružićemo vam uputstvo.

U BigCommerce kontrolnoj tabli idite na Storefront -> Moje Teme.

<div class="text-center">
    <img style="vertical-align: top;" src="images/fc-bigcommerce-store-link.png" alt="Link do prodavnice" title="Link do prodavnice" class="lozad" />
    <img style="vertical-align: top;" src="images/fc-bigcommerce-my-themes.png" alt="Link do mojih tema" title="Link do mojih tema" class="lozad" />
</div>

Pod "Trenutna tema" videćete padajući meni sa oznakom "Napredno".

<div class="text-center">
    <img src="images/fc-bigcommerce-advanced-dropdown.png" alt="Tema Napredni padajući meni" title="Tema Napredni padajući meni" class="lozad" />
</div>

U ovom padajućem meniju prva opcija je "Uredi datoteke teme". Ako ova opcija nije klikabilna, prvo ćete morati kopirati temu putem "Napravite kopiju".

Kada otvorite uređivač predložaka, videćete pretraživač datoteka na levoj strani vašeg pregledača. Ovo je pretraživač datoteka za predloške u vašoj temi.

Treba da pretražujete HTML predložak koji predstavlja blog post. Nalazi se na templates/components/blog/post.html, kao što je prikazano:

<div class="text-center">
    <img src="images/fc-bigcommerce-editor-post-file.png" alt="Lokacija datoteke uređivača posta" title="Lokacija datoteke uređivača posta" class="lozad" />
</div>

Vaš FastComments kod, koji možete dobiti <a href="https://fastcomments.com/auth/my-account/get-acct-code" target="_blank">ovde</a>, treba da bude nalepjen odmah posle linije 48, koja sadrži tekst "&#123;{>components/common/share}&#125;".

<div class="text-center">
    <img src="images/fc-bigcommerce-blog-post-script-location.png" alt="Mesto za umetanje FastComments" title="Mesto za umetanje FastComments" class="lozad" />
</div>

#### Zapamtite!
Morate dodati domen vaše prodavnice u FastComments, što možete uraditi <a href="https://fastcomments.com/auth/my-account/configure-domains" target="_blank">ovde</a>.

#### Na kraju
Evo kako bi FastComments trebao izgledati na vašem BigCommerce blogu. Živeli!

<div class="text-center">
    <img src="images/fc-bigcommerce-blog-post-example.png" alt="FastCommence na BigCommerce blogu" title="FastCommence na BigCommerce blogu" class="lozad" />
</div>

{{/isPost}}

---