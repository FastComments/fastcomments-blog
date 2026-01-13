---
[category:API & Development]

###### [postdate]
# [postlink]Ustawianie SSO z FastComments[/postlink]

{{#unless isPost}}
FastComments oferuje rozwiązania SSO dla różnych platform i niestandardowych integracji.
{{/unless}}

{{#isPost}}

# Przegląd

## Czym jest SSO?

SSO, czyli pojedyncze logowanie, to zestaw konwencji używanych do umożliwienia Tobie lub Twoim użytkownikom korzystania z FastComments bez konieczności zakupu kolejnego konta.

Zakładając, że nie pozwalasz na anonimizowane komentarze, konto jest wymagane do komentowania za pomocą FastComments. Proces rejestracji jest dla nas bardzo prosty - użytkownik po prostu zostawia swój email podczas komentarza. Rozumiemy jednak, że nawet to może być dodatkowy opór, którego niektóre strony chcą uniknąć.

## Jak to uzyskać?

Wszystkie typy kont obecnie uzyskują dostęp do SSO, a także wsparcie. Jednak maksymalna liczba użytkowników SSO będzie się różnić w zależności od Twojego pakietu.

### Użytkownicy WordPressa

Jeśli korzystasz z naszej <a href="https://wordpress.org/plugins/fastcomments/" target="_blank">wtyczki WordPress</a>, nie musisz pisać żadnego kodu! Po prostu przejdź do strony Admin wtyczki, kliknij Ustawienia SSO, a następnie Włącz.

To przeniesie Cię do kreatora kliknięcia w jeden przycisk, który stworzy twój klucz API, wyśle go do twojej instalacji WordPressa i włączy SSO. Skonsolidowaliśmy to w kliknięcie jednego przycisku.

Zauważ, że jeśli instalujesz wtyczkę po raz pierwszy, musisz przejść przez proces konfiguracji, zanim zobaczysz stronę admina z przyciskiem Ustawienia SSO.

### Niestandardowe integracje

FastComments SSO używa szyfrowania HMAC-SHA256 jako mechanizmu implementacji SSO. Najpierw omówimy ogólną architekturę, podamy przykłady i szczegółowe kroki. Jednak na końcu
tego artykułu znajdują się instrukcje dotyczące **migracji z Disqus i Commento**.

Przepływ wygląda następująco:

<div class="text-center">
<img src="/images/sso-diagram.png" alt="Diagram SSO FastComments" title="Diagram SSO FastComments" class="lozad" />
</div>

Nie musisz pisać żadnych nowych punktów końcowych API z FastComments SSO. Po prostu zaszyfruj dane użytkownika, używając swojego klucza tajnego, i przekaż ładunek do widgetu komentarzy.

Udostępniamy w pełni funkcjonalne przykłady kodu w kilku językach/i środowiskach, w tym NodeJS, Java/Spring i czystym PHP. Choć w przykładzie NodeJS używamy ExpressJS,
a w przykładzie Java Spring, nie są wymagane żadne frameworki/biblioteki w tych środowiskach do implementacji FastComments SSO - działają natywne pakiety kryptograficzne.

Możesz znaleźć repozytorium z przykładami kodu tutaj:

<a href="https://github.com/fastcomments/fastcomments-code-examples" class="btn" target="_blank">Przykłady kodu SSO FastComments</a>

#### Uzyskaj swój klucz tajny API

Twój klucz tajny API można uzyskać z <a href="https://fastcomments.com/auth/my-account/api-secret" target="_blank">tej strony</a>. Możesz również znaleźć tę stronę, przechodząc do Moje Konto,
klikając kafelek API/SSO, a następnie klikając "Uzyskaj klucz tajny API".

#### Parametry widgetu komentarzy

Dokumentacja API na wysokim poziomie dla widgetu komentarzy znajduje się <a href="https://fastcomments.com/auth/my-account/get-acct-code" target="_blank">tutaj</a> i klikając "Pokaż opcje zaawansowane". W wyszukiwarce szukaj SSO.

Przejdźmy do bardziej szczegółowego omówienia, co oznaczają te parametry.

Widget komentarzy przyjmuje obiekt konfiguracyjny - już to przekazujesz, jeśli używasz FastComments do przesyłania swojego identyfikatora klienta (nazywanego tenantId).

Aby włączyć SSO, przekaż nowy obiekt "sso", który musi mieć następujące parametry. Wartości powinny być generowane **po stronie serwera**.

- userDataJSONBase64: Dane użytkownika w formacie JSON, które są następnie kodowane w Base64.
- verificationHash: Hasz HMAC-SHA256 utworzony z UNIX_TIME + userDataJSONBase64.
- timestamp: Aktualny czas unixowy. **Nie może być w przyszłości, ani bardziej niż trzy godziny w przeszłości.**
- loginURL: URL, który widget komentarzy może pokazać, aby zalogować użytkownika.
- logoutURL: URL, który widget komentarzy może pokazać, aby wylogować użytkownika.
- loginCallback: Gdy podano zamiast URL logowania, funkcja, którą widget komentarzy wywoła po kliknięciu przycisku logowania.
- logoutCallback: Gdy podano zamiast URL wylogowania, funkcja, którą widget komentarzy wywoła po kliknięciu przycisku wylogowania.

#### Obiekt użytkownika 

Obiekt Użytkownika zawiera następujący schemat:

- id (string, wymagane) (maks. 1k znaków)
- email (string, wymagane) (maks. 1k znaków). Uwaga: Musi być unikalny.
- username (string, wymagane) (maks. 1k znaków). Uwaga: Nazwa użytkownika nie może być adresem e-mail. Nie musi być unikalna.
- avatar (string, opcjonalne) (maks. 3k znaków)
- optedInNotifications (boolean, opcjonalne)
- displayLabel (string, opcjonalne, maks. 100 znaków). Ten etykieta będzie wyświetlana obok ich imienia.
- websiteUrl (string, opcjonalne, maks. 2000 znaków). Imię użytkownika będzie prowadziło do tego linku.

#### Powiadomienia

Aby włączyć lub wyłączyć powiadomienia, ustaw wartość optedInNotifications na true lub false odpowiednio. Po raz pierwszy użytkownik załadowuje stronę z tą wartością w ładunku SSO,
ich ustawienia powiadomień zostaną zaktualizowane.

#### Użytkownicy VIP i specjalne etykiety

Możesz wyświetlić specjalną etykietę obok imienia użytkownika, używając opcjonalnego pola "displayLabel".

#### Niezautoryzowani użytkownicy

Aby reprezentować niezautoryzowanego użytkownika, po prostu nie wypełniaj userDataJSONBase64, verificationHash ani timestamp. Podaj loginURL.

#### Bezpośrednie przykłady serializacji i haszowania danych użytkowników

Więcej szczegółów jako przykłady <a href="https://github.com/fastcomments/fastcomments-code-examples/blob/master/sso/nodejs/routes/index.js#L26" target="_blank">tutaj (js)</a>,
<a href="https://github.com/fastcomments/fastcomments-code-examples/blob/master/sso/java/src/main/java/com/winricklabs/ssodemo/DemoController.java#L54" target="_blank">tutaj (java)</a> i
<a href="https://github.com/fastcomments/fastcomments-code-examples/blob/master/sso/php/server.php#L27" target="_blank">tutaj (php)</a>.


### Migracja z Disqus SSO

Największe różnice między Disqus a FastComments SSO polegają na tym, że Disqus używa SHA1 do szyfrowania, podczas gdy my używamy SHA256.
Oznacza to, że migracja z Disqus jest łatwa - zmień algorytm haszowania używany z SHA1 na SHA256 i zaktualizuj nazwy właściwości przekazywanych do interfejsu użytkownika.

### Migracja z Commento SSO

Commento stosuje drastycznie różne podejście do SSO - wymagają posiadania punktu końcowego, który wywołują, aby uwierzytelnić użytkownika. FastComments jest odwrotnie - 
po prostu zakoduj i zhaszuj informacje użytkownika, używając swojego klucza tajnego, i przekaż to dalej.

Rozumiemy, że każda integracja może być skomplikowanym i bolesnym procesem. Nie wahaj się skontaktować ze swoim przedstawicielem lub skorzystać z <a href="https://fastcomments.com/auth/my-account/help" target="_blank">strony pomocy</a>.

{{/isPost}}

---