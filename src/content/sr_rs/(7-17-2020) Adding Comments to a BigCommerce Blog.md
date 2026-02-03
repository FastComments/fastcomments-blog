---
[category:Integrations]
###### [postdate]
# [postlink]Dodavanje komentara na BigCommerce blog[/postlink]

{{#isPost}}

#### Dodajte angažman publike na svaku stranicu
Šta ako bi vaša publika mogla da komentariše vaše blog postove, postavlja pitanja i daje povratne informacije? Sada to može sa FastComments.

#### Prilagođene teme
Da biste dodali FastComments na blog vaše BigCommerce prodavnice, biće potrebno da uredite šablone vaše teme. Provešćemo vas kroz to.

U BigCommerce kontrolnoj tabli idite na Storefront -> Moje Teme.

<div class="text-center">
    <img style="vertical-align: top;" src="images/fc-bigcommerce-store-link.png" alt="Link do prodavnice" title="Link do prodavnice" class="lozad" />
    <img style="vertical-align: top;" src="images/fc-bigcommerce-my-themes.png" alt="Link do mojih tema" title="Link do mojih tema" class="lozad" />
</div>

Pod "Trenutna Tema" videćete padajući meni sa oznakom "Napredno".

<div class="text-center">
    <img src="images/fc-bigcommerce-advanced-dropdown.png" alt="Napredno padajuće dugme teme" title="Napredno padajuće dugme teme" class="lozad" />
</div>

U ovom padajućem meniju, prva opcija je "Uredi teme fajlove". Ako ova opcija nije klikabilna, prvo ćete morati da kopirate temu preko "Napravite kopiju".

Kada otvorite uređivač šablona, videćete preglednik fajlova na levoj strani vašeg pregledača. Ovo je preglednik fajlova za šablone u vašoj temi.

Treba da se uputite na HTML šablon koji predstavlja blog post. To je na templates/components/blog/post.html, kako je prikazano:

<div class="text-center">
    <img src="images/fc-bigcommerce-editor-post-file.png" alt="Lokacija fajla uređivača postova" title="Lokacija fajla uređivača postova" class="lozad" />
</div>

Vaš FastComments kodni isječak, koji možete dobiti <a href="https://fastcomments.com/auth/my-account/get-acct-code" target="_blank">ovde</a> treba da bude umetnut odmah nakon linije 48, koja sadrži tekst "&#123;{>components/common/share}&#125;".

<div class="text-center">
    <img src="images/fc-bigcommerce-blog-post-script-location.png" alt="Mesto za umetanje FastComments" title="Mesto za umetanje FastComments" class="lozad" />
</div>

#### Zapamtite!
Biće potrebno da dodate domenu za vašu prodavnicu u FastComments, što možete uraditi <a href="https://fastcomments.com/auth/my-account/configure-domains" target="_blank">ovde</a>.

#### Na kraju
Evo kako bi FastComments trebali da izgledaju na vašem BigCommerce blogu. Zdravlje!

<div class="text-center">
    <img src="images/fc-bigcommerce-blog-post-example.png" alt="FastComments na BigCommerce blogu" title="FastComments na BigCommerce blogu" class="lozad" />
</div>

{{/isPost}}

---