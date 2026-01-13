---
[category:Integrations]
###### [postdate]
# [postlink]Dodajanje komentarjev na BigCommerce blog[/postlink]

{{#isPost}}

#### Dodajte angažiranost občinstva na katero koli stran
Kaj, če bi vaše občinstvo lahko komentiralo vaše objave na blogu, postavljalo vprašanja in dajalo povratne informacije? Zdaj lahko to stori z FastComments.

#### Prilagojene teme
Da bi dodali FastComments na blog vaše trgovine BigCommerce, boste morali urediti predloge vaše teme. Vodili vas bomo skozi postopek.

V nadzorni plošči BigCommerce pojdite na Trgovina -> Moje teme.

<div class="text-center">
    <img style="vertical-align: top;" src="images/fc-bigcommerce-store-link.png" alt="Povezava do trgovine" title="Povezava do trgovine" class="lozad" />
    <img style="vertical-align: top;" src="images/fc-bigcommerce-my-themes.png" alt="Povezava do mojih tem" title="Povezava do mojih tem" class="lozad" />
</div>

Pod "Trenutna tema" boste videli spustni meni z oznako "Napredno".

<div class="text-center">
    <img src="images/fc-bigcommerce-advanced-dropdown.png" alt="Napredni spustni meni teme" title="Napredni spustni meni teme" class="lozad" />
</div>

V tem spustnem meniju je prva možnost "Uredi datoteke teme". Če ta možnost ni klikljiva, boste najprej morali kopirati temo prek "Naredi kopijo".

Ko boste lahko odprli urejevalnik predlog, boste na levi strani brskalnika videli iskalnik datotek. To je iskalnik datotek za predloge v vaši temi.

Morali boste navigirati do HTML predloge, ki predstavlja objavo na blogu. Ta se nahaja na templates/components/blog/post.html, kot je prikazano:

<div class="text-center">
    <img src="images/fc-bigcommerce-editor-post-file.png" alt="Lokacija urejevalnika objave" title="Lokacija urejevalnika objave" class="lozad" />
</div>

Vaš del kode FastComments, ki ga lahko pridobite <a href="https://fastcomments.com/auth/my-account/get-acct-code" target="_blank">tukaj</a>, je treba prilepiti takoj za vrstico 48, ki vsebuje besedilo "&#123;{>components/common/share}&#125;".

<div class="text-center">
    <img src="images/fc-bigcommerce-blog-post-script-location.png" alt="Kraj za vstavljanje FastComments" title="Kraj za vstavljanje FastComments" class="lozad" />
</div>

#### Ne pozabite!
Domeno vaše trgovine boste morali dodati v FastComments, kar lahko storite <a href="https://fastcomments.com/auth/my-account/configure-domains" target="_blank">tukaj</a>.

#### Na zaključek
Tako bi moral izgledati FastComments na vašem BigCommerce blogu. Na zdravje!

<div class="text-center">
    <img src="images/fc-bigcommerce-blog-post-example.png" alt="FastCommence na BigCommerce blogu" title="FastCommence na BigCommerce blogu" class="lozad" />
</div>

{{/isPost}}

---