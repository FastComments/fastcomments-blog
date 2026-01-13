---
[category:API & Development]
###### [postdate]
# [postlink]Webhooks w FastComments[/postlink]

{{#unless isPost}}
FastComments może teraz wywołać Twoje API w celu tworzenia, aktualizacji i usuwania komentarzy.
{{/unless}}

{{#isPost}}

### <i class="circle">!</i> Ten artykuł zawiera techniczne terminy

#### Co nowego

Dzięki FastComments teraz można wywołać punkt końcowy API za każdym razem, gdy komentarz zostanie dodany, zaktualizowany lub usunięty z naszego systemu. 

Osiągamy to za pomocą asynchronicznych webhooków przez HTTP/HTTPS.

#### Jak to użyć

Najpierw przejdź do <a href="https://fastcomments.com/auth/my-account/manage-data/webhooks" target="_blank">panelu administracyjnego Webhooków</a>. Jest to dostępne przez Zarządzaj danymi -> Webhooki.

Stamtąd możesz określić punkty końcowe dla każdego typu zdarzenia komentarza.

Dla każdego typu zdarzenia, upewnij się, że klikniesz **Wyślij testowy ładunek**, aby upewnić się, że prawidłowo skonfigurowałeś swoją integrację. Zobacz następny dział, "Testowanie", aby uzyskać szczegóły.

<div class="text-center">
    <img src="images/fc-webhooks-test-verified.png" alt="Przykład konfiguracji Webhooków" title="Przykład konfiguracji Webhooków" class="lozad" />
</div>

#### Testowanie

W <a href="https://fastcomments.com/auth/my-account/manage-data/webhooks" target="_blank">panelu administracyjnym Webhooków</a> znajdują się przyciski "Wyślij testowy ładunek" dla każdego
typu zdarzenia (Utworzenie, Aktualizacja, Usunięcie). Zdarzenia Utworzenia i Aktualizacji wysyłają obiekt WebhookComment jako próbkę, podczas gdy testowanie Usunięcia wyśle próbne ciało żądania tylko z identyfikatorem.

Test wykona dwa wywołania, aby zweryfikować kod odpowiedzi dla scenariuszy "szczęśliwych" (prawidłowy klucz API) i "smutnych" (nieprawidłowy klucz API).

Gdy test wyśle nieprawidłowy klucz API, powinieneś zwrócić kod statusu 401, aby test zakończył się powodzeniem. Jeśli nie sprawdzisz prawidłowo wartości tokena, zobaczysz błąd taki jak:

<div class="text-center">
    <img src="images/fc-webhooks-test-expected-401.png" alt="Błąd testu uwierzytelniania Webhooków" title="Błąd testu uwierzytelniania Webhooków" class="lozad" />
</div>

#### Struktura obiektu komentarza
<div class="code">/**
 * @typedef {Object} WebhookComment
 * @property {string} id
 * @property {string} urlId
 * @property {string} url
 * @property {string} userId
 * @property {string} commenterEmail
 * @property {string} commenterName
 * @property {string} comment
 * @property {string} commentHTML
 * @property {string} parentId
 * @property {DateString} date
 * @property {number} votes
 * @property {boolean} verified
 * @property {number} verifiedDate
 * @property {boolean} reviewed
 * @property {string} avatarSrc
 * @property {boolean} isSpam
 * @property {boolean} aiDeterminedSpam
 * @property {boolean} hasImages
 * @property {number} pageNumber
 * @property {boolean} approved
 * @property {string} locale
 */
</div>

#### Struktura zdarzenia "Utwórz"

Ciało żądania zdarzenia "utwórz" to obiekt WebhookComment.

#### Struktura zdarzenia "Aktualizuj"

Ciało żądania zdarzenia "aktualizuj" to obiekt WebhookComment.

#### Struktura zdarzenia "Usuń"

Ciało żądania zdarzenia "usuń" to obiekt WebhookComment, **ale zawierający tylko identyfikator**.

#### Dlaczego zarówno Utworzenie, jak i Aktualizacja korzystają z HTTP PUT, a nie POST?

**Ponieważ wszystkie nasze żądania zawierają identyfikator**, powtarzanie tego samego żądania Utworzenia lub Aktualizacji **nie powinno tworzyć nowych obiektów po Twojej stronie**. Oznacza to, że te wezwania są idempotentne i powinny być
zdarzeniami PUT zgodnie ze specyfikacją HTTP.

#### Jak to działa

Wszystkie zmiany w obiekcie Komentarz w systemie wywołują zdarzenie, które trafia do kolejki. Możesz monitorować tę kolejkę w <a href="https://fastcomments.com/auth/my-account/manage-data/webhooks" target="_blank">panelu administracyjnym Webhooków</a> w przypadku, gdy Twoje API przestanie działać. Jeśli żądanie do Twojego API nie powiedzie się, ponownie je umieścimy w kolejce na harmonogramie. Ten harmonogram to 1 minuta * liczba prób. Jeśli wywołanie się nie powiedzie, spróbuje ponownie za minutę. Jeśli zawiedzie dwukrotnie, poczeka dwie minuty, i tak dalej.
Dzieje się tak, aby nie obciążać Twojego API, jeśli przestaje działać z powodów związanych z obciążeniem.

#### Bezpieczeństwo i token API

W nagłówku żądania przekażemy Twój <a href="https://fastcomments.com/auth/my-account/api-secret" target="_blank">Sekret API</a> w parametrze o nazwie "token".

Jeśli nie sprawdzisz prawidłowo tego parametru, Twoja integracja nie zostanie oznaczona jako Zweryfikowana. Jest to zabezpieczenie, aby zapewnić, że wszelkie integracje z FastComments są bezpieczne.

#### Podsumowując

Mamy nadzieję, że integracja Webhooków FastComments będzie dla Ciebie łatwa do zrozumienia i szybka do skonfigurowania.

Jeśli masz dalsze pytania, nie wahaj się skontaktować z <a href="https://fastcomments.com/auth/my-account/help" target="_blank">stroną wsparcia klienta</a>.

Pozdrawiamy!

{{/isPost}}

---