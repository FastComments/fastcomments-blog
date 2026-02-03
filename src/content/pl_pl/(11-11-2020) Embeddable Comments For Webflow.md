---
[category:Integrations]

###### [postdate]
# [postlink]Osadzane komentarze dla Webflow[/postlink]

{{#unless isPost}}
Instrukcje, w tym wideo, dotyczące instalacji FastComments na stronie Webflow.io.
{{/unless}}

{{#isPost}}

#### Grupa docelowa

Artykuł jest skierowany do każdego, kto chce dodać wsparcie dla komentarzy do swojej strony Webflow.

#### Wprowadzenie

Instalacja FastComments na stronie Webflow jest tak prosta, jak na każdej innej stronie - z jednym wyjątkiem, który jest unikalny dla dostawców hostingu, takich jak Webflow.

#### Kroki

1. Dodaj domenę swojej strony Webflow do swojego konta - widget nie załaduje się bez niej. Jest to domena używana, gdy klikniesz "Opublikuj" w Webflow, na przykład "https://twoj-wspanialy-projekt.webflow.io".
2. W trybie projektowania przejdź do "Dodaj elementy" w lewym górnym rogu, a następnie przewiń na sam dół do "Komponenty". Kliknij "Osadź" - dodaj fragment kodu FastComments, który możesz znaleźć <a href="https://fastcomments.com/auth/my-account/get-acct-code" target="_blank">tutaj</a>

#### Wideo

Oto wideo szczegółowo opisujące instalację, które zaczyna się od nas w projektancie Webflow i kończy na działającym osadzonym widżecie komentarzy na naszej stronie.

<div class="text-center">
    <video src="images/fc-webflow-install.mp4" controls alt="Instrukcja instalacji Webflow" title="Instrukcja instalacji Webflow"></video>
</div>

#### Problemy

FastComments zabezpiecza twoją instalację, weryfikując żądania na podstawie nazwy domeny. Jeśli chcesz, aby widżet komentarzy był widoczny na twojej stronie Webflow, zanim zdobędziesz dedykowaną nazwę domeny, **musisz dodać "weblfow.io" jako domenę do swojego konta <a href="https://fastcomments.com/auth/my-account/configure-domains" target="_blank">tutaj</a>.**

Dla zwiększonego bezpieczeństwa możesz zdefiniować całą nazwę domeny, na przykład "twoja-wspaniala-strona.webflow.io".

#### Podsumowanie

Mamy nadzieję, że ta instrukcja była pomocna i łatwa do przeczytania. Śmiało komentuj poniżej, jeśli masz jakieś pytania.

Na zdrowie!

{{/isPost}}

---