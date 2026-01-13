---
[category:Integrations]
###### [postdate]
# [postlink]Dodavanje komentara na BigCommerce blog[/postlink]

{{#isPost}}

#### Dodajte angažman publike na bilo koju stranicu
Šta ako bi vaša publika mogla da komentariše vaše blog postove, postavlja pitanja i daje povratne informacije? Sada to mogu sa FastComments.

#### Prilagođene teme
Da biste dodali FastComments na blog vaše BigCommerce prodavnice, moraćete da uredite šablone teme. Proći ćemo kroz proces.

U BigCommerce kontrolnoj tabli idite na Storefront -> Moje teme.

<div class="text-center">
    <img style="vertical-align: top;" src="images/fc-bigcommerce-store-link.png" alt="Link za prodavnicu" title="Link za prodavnicu" class="lozad" />
    <img style="vertical-align: top;" src="images/fc-bigcommerce-my-themes.png" alt="Link za moje teme" title="Link za moje teme" class="lozad" />
</div>

Ispod "Trenutna tema" videćete padajući meni sa oznakom "Napredno".

<div class="text-center">
    <img src="images/fc-bigcommerce-advanced-dropdown.png" alt="Napredno padajući meni teme" title="Napredno padajući meni teme" class="lozad" />
</div>

U ovom padajućem meniju prva opcija je "Uredi datoteke teme". Ako ova opcija nije dostupna, prvo ćete morati da kopirate temu putem "Napravite kopiju".

Kada otvorite uređivač šablona, videćete pregledač datoteka sa leve strane vašeg pretraživača. Ovo je pregledač datoteka za šablone u vašoj temi.

Trebalo bi da se krećete do HTML šablona koji predstavlja blog post. Nalazi se na templates/components/blog/post.html, kao što je prikazano:

<div class="text-center">
    <img src="images/fc-bigcommerce-editor-post-file.png" alt="Lokacija datoteke uređivača" title="Lokacija datoteke uređivača" class="lozad" />
</div>

Vaš FastComments kod, koji možete dobiti <a href="https://fastcomments.com/auth/my-account/get-acct-code" target="_blank">ovde</a> treba da se nalepi odmah posle linije 48, koja ima tekst "&#123;{>components/common/share}&#125;".

<div class="text-center">
    <img src="images/fc-bigcommerce-blog-post-script-location.png" alt="Mesto za umetanje FastComments" title="Mesto za umetanje FastComments" class="lozad" />
</div>

#### Zapamtite!
Moraćete da dodate domenu za vašu prodavnicu u FastComments, što možete uraditi <a href="https://fastcomments.com/auth/my-account/configure-domains" target="_blank">ovde</a>.

#### Na zaključku
Evo kako bi FastComments trebalo da izgleda na vašem BigCommerce blogu. Živeli!

<div class="text-center">
    <img src="images/fc-bigcommerce-blog-post-example.png" alt="FastComments na BigCommerce blogu" title="FastComments na BigCommerce blogu" class="lozad" />
</div>

{{/isPost}}

---