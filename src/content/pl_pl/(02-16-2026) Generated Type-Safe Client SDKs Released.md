---
---
[category:API & Development]
[category:Announcements]

###### [postdate]
# [postlink]Wydano wygenerowane typowo bezpieczne SDK klientów[/postlink]

{{#unless isPost}}
Jak wspomniano w naszym poście o migracji do TypeScript, wydaliśmy wygenerowane, typowo bezpieczne SDK klientów dla dziesięciu języków programowania.
{{/unless}}

{{#isPost}}

### <i class="circle">!</i> Artykuł zawiera terminologię techniczną

### Co nowego

W naszym [poście o migracji do TypeScript](/blog/fastcomments-typescript-migration-completed) wspomnieliśmy, że zbliżają się wygenerowane SDK klientów. Są już tutaj.

FastComments teraz dostarcza oficjalne, typowo bezpieczne SDK dla **dziesięciu języków**:

- TypeScript / JavaScript (npm)
- Python (PyPI)
- Rust (crates.io)
- Go (Go modules)
- Java (Maven)
- PHP (Composer)
- Ruby (RubyGems)
- Swift (Swift Package Manager)
- C++ (CMake)
- Nim (Nimble)

Każde SDK jest generowane z tej samej specyfikacji OpenAPI, którą produkuje nasz serwer. Typy, sygnatury metod oraz modele żądań/odpowiedzi pozostają w synchronizacji z rzeczywistym API automatycznie. Twój kompilator wychwytuje literówki w nazwach pól i brakujące parametry, zanim twój kod wykona jakiekolwiek żądanie sieciowe.

### Jak to działa

Migracja do TypeScript była wymogiem wstępnym dla tego. Teraz, gdy nasz kod serwera jest w pełni typowany, używamy [naszego fork'a TSOA](https://github.com/FastComments/tsoa) do generowania specyfikacji OpenAPI 3.0 bezpośrednio z naszych kontrolerów tras. Ta specyfikacja jest podawana do [OpenAPI Generator](https://openapi-generator.tech/), aby produkować biblioteki klienckie dla każdego języka.

Gdy API się zmienia, nasze narzędzia wykrywają różnice w specyfikacji, regenerują dotknięte SDK, uruchamiają testy dla każdego języka i automatycznie otwierają pull requesty. Stworzyliśmy małe narzędzie zarządzające w Nim, które orkiestruje cykl aktualizacji-testów-wydania w dziesięciu repozytoriach.

### Co zawiera każde SDK

Każde SDK dostarcza dwie klasy API:

- **`DefaultApi`**: autoryzowane punkty końcowe, które wymagają twojego klucza API. Używaj ich po stronie serwera do moderacji, zarządzania użytkownikami, analizy i działań masowych.
- **`PublicApi`**: nieautoryzowane punkty końcowe, które można wywołać z przeglądarek i aplikacji mobilnych. Obejmują one pobieranie komentarzy, publikowanie, głosowanie i inne operacje skierowane do klientów.

Wszystkie SDK zawierają również narzędzia SSO do integracji z istniejącym systemem uwierzytelniania. SDK TypeScript dodatkowo zapewnia subskrypcje zdarzeń w czasie rzeczywistym do komentowania na żywo.

### Dokumentacja

Pełna dokumentacja API jest dostępna pod adresem [docs.fastcomments.com](https://docs.fastcomments.com/guide-api.html). Każde repozytorium SDK zawiera również wygenerowaną dokumentację pokrywającą każdą dostępną metodę i model.

Dla integracji SSO, zapraszamy do zapoznania się z naszym [przewodnikiem SSO](https://docs.fastcomments.com/guide-sso.html). Wszystkie dziesięć SDK zawierają narzędzia SSO korzystające z ich natywnych bibliotek kryptograficznych.

### Podsumowując

Posiadanie w pełni typowanego serwera ułatwiło generowanie niezawodnej specyfikacji OpenAPI, a stamtąd generowanie klientów dla dziesięciu (a w przyszłości więcej!) języków było głównie kwestią zbudowania automatyzacji i poprawienia definicji typów, aby mogły być konsumowane, bez dodawania zbyt dużej abstrakcji, która spowolniłaby FastComments!

Jak w przypadku wszystkich dużych wydań, cieszymy się, że mogliśmy poświęcić czas na optymalizację, testowanie i właściwe wydanie tych SDK. Daj nam znać poniżej, jeśli masz jakiekolwiek uwagi lub jeśli jest język, który chciałbyś, abyśmy dodali.

Na zdrowie!

{{/isPost}}