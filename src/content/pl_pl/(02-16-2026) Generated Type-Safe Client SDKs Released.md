---
---
[category:API & Development]
[category:Announcements]

###### [postdate]
# [postlink]Generated Type-Safe Client SDKs Released[/postlink]

{{#unless isPost}}
Jak wspomniano w naszym poście o migracji do TypeScript, wydaliśmy wygenerowane, typowo‑bezpieczne SDK klienta dla dziesięciu języków programowania.
{{/unless}}

{{#isPost}}

### <i class="circle">!</i> Ten artykuł zawiera żargon techniczny

### Co nowego

W naszym [post o migracji do TypeScript](/(1-31-2025)-fastcomments-typescript-migration-completed-pl_pl.html) wspomnieliśmy, że pojawią się wygenerowane SDK klienta. Są już tutaj.

FastComments teraz udostępnia oficjalne, typowo‑bezpieczne SDK dla **dziesięciu języków**:

- TypeScript / JavaScript (npm)
- Python (GitHub)
- Rust (crates.io)
- Go (Go modules)
- Java (Maven)
- PHP (Composer)
- Ruby (RubyGems)
- Swift (Swift Package Manager)
- C++ (CMake)
- Nim (Nimble)

Każde SDK jest generowane z tej samej specyfikacji OpenAPI, którą produkuje nasz serwer. Typy, sygnatury metod i modele żądań/odpowiedzi są automatycznie synchronizowane z rzeczywistym API. Twój kompilator wykrywa literówki w nazwach pól oraz brakujące parametry, zanim Twój kod wykona jakiekolwiek żądanie sieciowe.

### Jak to działa

Migracja do TypeScript była warunkiem wstępnym dla tego. Teraz, gdy nasz kod serwera jest w pełni typowany, używamy [naszego fork'a TSOA](https://github.com/FastComments/tsoa), aby wygenerować specyfikację OpenAPI 3.0 bezpośrednio z naszych kontrolerów tras. Ta specyfikacja jest przekazywana do [OpenAPI Generator](https://openapi-generator.tech/), aby wygenerować biblioteki klienckie dla każdego języka.

Gdy API się zmienia, nasze narzędzia wykrywają różnicę w specyfikacji, regenerują dotknięte SDK, uruchamiają testy dla każdego języka i automatycznie otwierają pull requesty. Zbudowaliśmy małe narzędzie zarządzające w Nim, które koordynuje cykl aktualizacji‑test‑wydania we wszystkich dziesięciu repozytoriach.

### Co znajduje się w każdym SDK

Każde SDK udostępnia dwie klasy API:

- **`DefaultApi`**: uwierzytelnione endpointy wymagające Twojego klucza API. Używaj ich po stronie serwera do moderacji, zarządzania użytkownikami, analityki i operacji zbiorczych.
- **`PublicApi`**: nieuwierzytelnione endpointy bezpieczne do wywoływania z przeglądarek i aplikacji mobilnych. Obejmują pobieranie komentarzy, publikowanie, głosowanie i inne operacje skierowane do klienta.

Wszystkie SDK zawierają również narzędzia SSO do integracji z istniejącym systemem uwierzytelniania. SDK TypeScript dodatkowo oferuje subskrypcje zdarzeń w czasie rzeczywistym dla komentarzy na żywo.

### Dokumentacja

Pełna dokumentacja API jest dostępna pod adresem [docs.fastcomments.com](https://docs.fastcomments.com/guide-api.html). Każde repozytorium SDK zawiera również wygenerowaną dokumentację obejmującą wszystkie dostępne metody i modele.

W celu integracji SSO, zobacz nasz [przewodnik SSO](https://docs.fastcomments.com/guide-sso.html). Wszystkie dziesięć SDK zawiera pomocniki SSO korzystające z natywnych bibliotek kryptograficznych.

### Podsumowanie

Posiadanie w pełni typowanego serwera ułatwiło generowanie niezawodnej specyfikacji OpenAPI, a następnie generowanie klientów dla dziesięciu (i kiedyś więcej!) języków było w dużej mierze kwestią zbudowania automatyzacji
i ulepszenia naszych definicji typów, aby były użyteczne, bez dodawania zbyt dużej abstrakcji, która spowolniłaby FastComments!

Jak przy wszystkich dużych wydaniach, cieszymy się, że mogliśmy poświęcić czas na optymalizację, testowanie i właściwe udostępnienie tych SDK. Daj nam znać
poniżej, jeśli masz jakiekolwiek uwagi lub jeśli jest język, który chciałbyś, abyśmy dodali.

Pozdrawiamy!

{{/isPost}}

---
---