---
[category:Tutorials]
###### [postdate]
# [postlink]Debugging Your FastComments Installation Made Easier[/postlink]

{{#unless isPost}}
Komentarze się nie wyświetlają? Ustawienia wydają się nie być zastosowane? Rozwiązanie tego problemu stało się znacznie łatwiejsze.
{{/unless}}

{{#isPost}}

### <i class="circle">!</i> Ten artykuł zawiera terminologię techniczną

#### Co nowego

W <a href="https://fastcomments.com">FastComments</a> właśnie wprowadziliśmy rozszerzenie dla przeglądarki Google Chrome. To rozszerzenie pomoże Ci zrozumieć, jaką konfigurację
otrzymuje widget komentarzy oraz dlaczego może się nie wyświetlać.

Możesz znaleźć rozszerzenie tutaj: <a href="https://chrome.google.com/webstore/detail/fastcomments-debugger/cadggdemhfkjjghkdbfhonoccnplffjj" target="_blank">https://chrome.google.com/webstore/detail/fastcomments-debugger/cadggdemhfkjjghkdbfhonoccnplffjj</a>

#### Jak to używać

Jeśli zauważysz, że widget komentarzy się nie ładuje lub nie wyświetla się niektóre zdefiniowane przez Ciebie ustawienia, spróbuj zainstalować <a href="https://chrome.google.com/webstore/detail/fastcomments-debugger/cadggdemhfkjjghkdbfhonoccnplffjj">to rozszerzenie</a>
i otworzyć je na stronie, której to dotyczy. Aby zobaczyć ikonę na pasku narzędzi, może być konieczne kliknięcie w kawałek układanki w prawym górnym rogu, aby przypiąć ją, jak pokazano:

<div class="text-center">
    <img src="images/fc-extension-pin.png" alt="Jak przypiąć rozszerzenie" title="Jak przypiąć rozszerzenie" class="lozad" />
</div>

Rozszerzenie może pomóc w debugowaniu dwóch klasyfikacji błędów. Pierwsza, jeśli widget w ogóle nie jest zawarty na stronie lub występuje poważny błąd typograficzny w skrypcie.

Druga to sytuacja, gdy niektóre konfiguracje zdają się nie działać.

Aby debugować obie, wystarczy kliknąć ikonę.

Jeśli narzędzie nie znajdzie widgetu komentarzy na stronie, otrzymasz wielki czerwony błąd:

<div class="text-center">
    <img src="images/fc-extension-embed-js-not-found.png" alt="Przykład: brak Embed.js" title="Przykład: brak Embed.js" class="lozad" />
</div>

Jeśli znaleziono jedną lub więcej instancji widgetu, zobaczysz ich konfiguracje wyświetlane osobno:

<div class="text-center">
    <img src="images/fc-extension-multiple-instances.png" alt="Przykład wielu konfiguracji" title="Przykład wielu konfiguracji" class="lozad" />
</div>

Ponadto, Debugger FastComments wyświetli również ostrzeżenia dla typowych problemów - jak widget nie wyświetlający się w trybie tylko do odczytu, jeśli brak komentarzy.

#### Ustawienia "finalne" instancji?

Możesz zobaczyć, że debugger wyświetla dwa zestawy konfiguracji - jeden oznaczony jako "Przekazane do widgetu" i jeden oznaczony jako "Finalne".

Konfiguracja "Przekazane do widgetu" to, jak możesz się domyślać, konfiguracja, którą przekazujesz do widgetu. Niektóre wartości są przekazywane domyślnie przez embed.js, takie jak URL lub Tytuł strony - i te są uwzględnione.

Konfiguracja "Finalne" to wszystko, co widget wykorzystuje do renderowania siebie. Może to oznaczać wartości automatycznie wypełnione (jak identyfikator instancji) lub <b>wartości z strony administracyjnej dostosowania widgetu</b>.

#### Jak to działa

Widget komentarzy przechowuje swoją konfigurację w miejscu, w którym debugger może ją znaleźć, a następnie debugger skanuje aktualną stronę, na której się znajdujesz, w poszukiwaniu instancji widgetu i ładuje je do pamięci.

#### Jakie informacje zbiera to rozszerzenie?

Narzędzie debugowania FastComments nie nawiązuje kontaktu ani nie komunikuje się z żadnymi serwerami FastComments. W rzeczywistości widget nawet nie sprawdzi zawartości strony, na której się znajdujesz,
chyba że je otworzysz.

#### Na koniec

Mamy nadzieję, że dostarczanie takich narzędzi ułatwi konfigurację FastComments dla każdego typu klienta, którego mamy. Daj nam znać w sekcji komentarzy poniżej,
jak to dla Ciebie działało.

Zdajemy sobie sprawę, że w niektórych przypadkach możesz nadal potrzebować pomocy - i na to nadal mamy <a href="https://fastcomments.com/auth/my-account/help" target="_blank">stronę wsparcia klienta</a>.

Na zdrowie!

{{/isPost}}

---