---
[category:Integrations]
###### [postdate]
# [postlink]Dodawanie komentarzy do bloga BigCommerce[/postlink]

{{#isPost}}

#### Dodaj zaangażowanie publiczności do dowolnej strony
Co jeśli Twoja publiczność mogłaby komentować Twoje posty na blogu, zadawać pytania i przekazywać opinie? Teraz mogą to zrobić z FastComments.

#### Niestandardowe motywy
Aby dodać FastComments do bloga Twojego sklepu BigCommerce, musisz edytować szablony motywów. Przeprowadzimy Cię przez ten proces.

W panelu administracyjnym BigCommerce przejdź do Storefront -> My Themes.

<div class="text-center">
    <img style="vertical-align: top;" src="images/fc-bigcommerce-store-link.png" alt="Link do sklepu" title="Link do sklepu" class="lozad" />
    <img style="vertical-align: top;" src="images/fc-bigcommerce-my-themes.png" alt="Link do moich motywów" title="Link do moich motywów" class="lozad" />
</div>

Pod "Bieżący motyw" zobaczysz rozwijane menu z etykietą "Zaawansowane".

<div class="text-center">
    <img src="images/fc-bigcommerce-advanced-dropdown.png" alt="Rozwijane menu zaawansowane motywu" title="Rozwijane menu zaawansowane motywu" class="lozad" />
</div>

W tym rozwijanym menu pierwszą opcją jest "Edytuj pliki motywu". Jeśli ta opcja jest nieklikalna, musisz najpierw skopiować motyw, wybierając "Zrób kopię".

Gdy będziesz mógł otworzyć edytor szablonów, zobaczysz przeglądarkę plików po lewej stronie przeglądarki. To jest przeglądarka plików dla szablonów w Twoim motywie.

Będziesz chciał przejść do szablonu HTML, który reprezentuje post na blogu. Znajdziesz go pod templates/components/blog/post.html, jak pokazano:

<div class="text-center">
    <img src="images/fc-bigcommerce-editor-post-file.png" alt="Lokalizacja pliku edytora posta" title="Lokalizacja pliku edytora posta" class="lozad" />
</div>

Twój kod FastComments, który możesz znaleźć <a href="https://fastcomments.com/auth/my-account/get-acct-code" target="_blank">tutaj</a>, powinien być wklejony zaraz po linii 48, która zawiera tekst "&#123;{>components/common/share}&#125;".

<div class="text-center">
    <img src="images/fc-bigcommerce-blog-post-script-location.png" alt="Miejsce wstawienia FastComments" title="Miejsce wstawienia FastComments" class="lozad" />
</div>

#### Pamiętaj!
Musisz dodać domenę swojego sklepu do FastComments, co możesz zrobić <a href="https://fastcomments.com/auth/my-account/configure-domains" target="_blank">tutaj</a>.

#### Na zakończenie
Oto jak powinny wyglądać FastComments na Twoim blogu BigCommerce. Na zdrowie!

<div class="text-center">
    <img src="images/fc-bigcommerce-blog-post-example.png" alt="FastCommence na blogu BigCommerce" title="FastCommence na blogu BigCommerce" class="lozad" />
</div>

{{/isPost}}

---