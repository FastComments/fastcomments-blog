[category:Features]
[category:Announcements]
[category:UI & Customization]

###### [postdate]
# [postlink]Wsparcie dla języka arabskiego i języków pisanych od prawej do lewej[/postlink]

{{#unless isPost}}
FastComments teraz obsługuje język arabski, a każdy element FastComments wyświetla się od prawej do lewej dla arabskiego i hebrajskiego. Liczby takie jak „3 komentarze” również używają teraz prawidłowej formy liczby mnogiej we wszystkich językach.
{{/unless}}

{{#isPost}}

### Co nowego

Arabski jest teraz obsługiwanym językiem, z kodem lokalizacji `ar`. Widżet komentarzy, pozostałe widżety do osadzania, e‑maile, pulpit nawigacyjny oraz strona marketingowa są wszystkie przetłumaczone.

Arabski jest również zapisywany od prawej do lewej, więc jego dodanie wymagało nauczenia FastComments wyświetlania się w obu kierunkach. To rozwiązanie dotyczy także hebrajskiego.

### Układ od prawej do lewej

Gdy lokalizacja jest arabska lub hebrajska, cały interfejs jest odbijany w lustrze. Awatar, imię i kontrolki odpowiedzi w komentarzu zamieniają się miejscami, menu i listy rozwijane otwierają się w kierunku właściwej krawędzi, a strzałki wskazują kierunek czytania. Dotyczy to widżetu komentarzy oraz jego rozszerzeń, takich jak czat na żywo i ankiety, systemu zgłoszeń, czatu współpracy i podsumowań recenzji, e‑maili oraz pulpitu nawigacyjnego.

Nie ma nic do konfigurowania, poza ręcznym ustawieniem lokalizacji dla swojego użytkownika, jeśli jest to pożądane.

### Komentarze zachowują własny kierunek

Czasami sekcja komentarzy jest w wielu językach. Angielski komentarz na stronie arabskiej lub arabski komentarz na stronie angielskiej powinny nadal czytać się naturalnie.

Każdy komentarz i nazwa użytkownika podążają za kierunkiem własnego tekstu. Na stronie angielskiej arabska odpowiedź jest wyświetlana od prawej do lewej, podczas gdy otaczające ją komentarze są od lewej do prawej, a odwrotnie na stronie arabskiej. Bloki kodu wewnątrz komentarzy zawsze są wyświetlane od lewej do prawej, ponieważ tak jest w kodzie.

### Ustawianie lokalizacji

Domyślnie widżet pobiera lokalizację z przeglądarki odwiedzającego, więc użytkownicy arabscy otrzymują arabską wersję automatycznie. Aby wymusić inną, ustaw lokalizację na stronie dostosowywania widżetu w sekcji „Locale / Language” lub w kodzie:

<div class="code">    FastCommentsUI(document.getElementById('fastcomments-widget'), {
        tenantId: 'demo',
        locale: 'ar'
    });
</div>

Jeśli używasz SSO, przekaż `locale: 'ar'` w obiekcie użytkownika, aby ich e‑maile również były w języku arabskim.

### Liczby mnogie, prawidłowo obsługiwane

Angielski ma dwie formy dla liczby: „1 komentarz” i „2 komentarze”. Arabski ma osobne formy dla jednego, dwóch, trzech do dziesięciu oraz jedenaście do dziewięćdziesięciu dziewięciu, a dla setki ponownie używa liczby pojedynczej. Rosyjski, ukraiński, polski, chorwacki, serbski, słoweński i hebrajski również mają własne zasady.

Do tej pory FastComments rozpoznawał tylko „jeden” i „wszystko inne”, więc rosyjski czytelnik mógł zobaczyć niewłaściwą formę rzeczownika dla 2 lub 5 komentarzy. Każdy ciąg z liczbą teraz wybiera właściwą formę dla swojego języka, w widżecie, e‑mailach i na pulpicie nawigacyjnym.

Podczas tej pracy przejrzeliśmy wszystkie ciągi z liczbą we wszystkich językach. Wykryliśmy szereg starszych błędów tłumaczeniowych, które zostały naprawione. Na przykład w kilku językach słowo oznaczające odpowiedź było czasownikiem „odpowiedzieć”, więc komentarz wyświetlał „1 Reply” jako odpowiednik „1 To reply”.

Jeśli dostosowałeś tekst liczby, np. etykietę „comments”, Twój tekst jest nadal używany dla każdej liczby.

### Znajdowanie swojego języka

Selektory języka w pulpicie nawigacyjnym teraz wyświetlają nazwę każdego języka obok angielskiej, np. „Arabic (العربية)” i „German (Germany) (Deutsch)”. Jeśli ktoś trafi na niewłaściwy język, nadal może znaleźć swój.

### Dokumentacja

<a href="https://docs.fastcomments.com/guide-supported-languages.html" target="_blank">Przewodnik po obsługiwanych językach</a> wymienia wszystkie kody lokalizacji i opisuje zachowanie od prawej do lewej. <a href="https://docs.fastcomments.com/guide-customizations-and-configuration.html#locale" target="_blank">Opcja locale</a> opisuje wymuszanie lokalizacji w widżecie.

To opiera się na [nasze pierwsze wydanie lokalizacji](/(2-05-2020)-fastcomments-gets-localized.html) z 2020 roku, które rozpoczęło się od trzech języków. Obecnie mamy dwadzieścia osiem lokalizacji.

### Podsumowanie

Cieszymy się, że możemy udostępnić FastComments użytkownikom arabskim i zapewnić lepsze doświadczenie dla użytkowników hebrajskich. Jeśli zauważysz niepoprawne tłumaczenie w swoim języku, daj nam znać poniżej, a naprawimy je.

Pozdrawiamy!

{{/isPost}}

---