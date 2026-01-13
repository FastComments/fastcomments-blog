---
[category:Integracije]
###### [postdate]
# [postlink]Dodavanje komentara na BigCommerce blog[/postlink]

{{#isPost}}

#### Dodajte angažman publike na svaku stranicu
Što ako vaša publika može komentirati vaše blog postove, postavljati pitanja i davati povratne informacije? Sada mogu s FastComments.

#### Prilagođene teme
Kako biste dodali FastComments na blog vaše BigCommerce trgovine, morat ćete urediti predloške teme. Provest ćemo vas kroz to.

U BigCommerce nadzornoj ploči idite na Trgovina -> Moje teme.

<div class="text-center">
    <img style="vertical-align: top;" src="images/fc-bigcommerce-store-link.png" alt="Link trgovine" title="Link trgovine" class="lozad" />
    <img style="vertical-align: top;" src="images/fc-bigcommerce-my-themes.png" alt="Link Moje teme" title="Link Moje teme" class="lozad" />
</div>

Ispod "Trenutna tema" vidjet ćete padajući izbornik s oznakom "Napredno".

<div class="text-center">
    <img src="images/fc-bigcommerce-advanced-dropdown.png" alt="Napredni padajući izbornik teme" title="Napredni padajući izbornik teme" class="lozad" />
</div>

U ovom padajućem izborniku prva opcija je "Uredi datoteke teme". Ako ova opcija nije klikabilna, prvo ćete morati kopirati temu putem "Napravite kopiju".

Kada možete otvoriti uređivač predloška, vidjet ćete preglednik datoteka na lijevoj strani vašeg preglednika. Ovo je preglednik datoteka za predloške u vašoj temi.

Trebate se navigirati do HTML predloška koji predstavlja blog post. Nalazi se na templates/components/blog/post.html, kao što je prikazano:

<div class="text-center">
    <img src="images/fc-bigcommerce-editor-post-file.png" alt="Lokacija datoteke uređivača postova" title="Lokacija datoteke uređivača postova" class="lozad" />
</div>

Vaš FastComments kôd, koji možete dobiti <a href="https://fastcomments.com/auth/my-account/get-acct-code" target="_blank">ovdje</a>, trebao bi biti umetnut odmah nakon linije 48, koja ima tekst "&#123;{>components/common/share}&#125;".

<div class="text-center">
    <img src="images/fc-bigcommerce-blog-post-script-location.png" alt="Mjesto za umetanje FastComments" title="Mjesto za umetanje FastComments" class="lozad" />
</div>

#### Zapamtite!
Morat ćete dodati domenu vaše trgovine na FastComments, što možete učiniti <a href="https://fastcomments.com/auth/my-account/configure-domains" target="_blank">ovdje</a>.

#### Na kraju
Evo kako bi FastComments trebali izgledati na vašem BigCommerce blogu. Zivjeli!

<div class="text-center">
    <img src="images/fc-bigcommerce-blog-post-example.png" alt="FastCommence na BigCommerce blogu" title="FastCommence na BigCommerce blogu" class="lozad" />
</div>

{{/isPost}}

---