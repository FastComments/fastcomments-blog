---
[category:Integrations]
[category:Features]
###### [postdate]
# [postlink]Wtyczka FastComments do Moodle[/postlink]

{{#unless isPost}}
FastComments ma teraz dedykowaną wtyczkę do Moodle z SSO, wątkowymi komentarzami i wspólnym czatem dla Twoich kursów.
{{/unless}}

{{#isPost}}

### Co nowego

Z przyjemnością ogłaszamy oficjalną wtyczkę FastComments dla Moodle. Jeśli korzystałeś z Moodle i chciałeś dodać na żywo,
wątkowe komentarze lub wspólny czat do swoich kursów, ta wtyczka to ułatwia. Zastępuje stary ręczny sposób PHP
proper wtyczką do Moodle, która instaluje się w kilka minut i integruje z istniejącymi kontami użytkowników Moodle. Wtyczka działa
z Moodle 4.1 i nowszymi, a źródło jest dostępne na [GitHub](https://github.com/FastComments/fastcomments-moodle).

### Rozpoczęcie

Aby zainstalować, pobierz plik ZIP z [repozytorium GitHub](https://github.com/FastComments/fastcomments-moodle) i rozpakuj go
do `<moodle-root>/local/fastcomments`. Następnie zaloguj się jako administrator serwisu i przejdź do **Administracja serwisem > Powiadomienia**.
Moodle wykryje nową wtyczkę i uruchomi instalację automatycznie.

Po zainstalowaniu przejdź do **Administracja serwisem > Wtyczki > Wtyczki lokalne > FastComments**, aby skonfigurować. Będziesz potrzebować swojego
**Identifikatora najemcy** (znajdziesz go w swoim panelu FastComments) oraz **Tajnego klucza API**, jeśli chcesz używać Secure SSO, co zalecamy.

Zauważ, że ręczne pobranie z GitHub jest tymczasowe, podczas gdy czekamy na zatwierdzenie wtyczki w katalogu wtyczek Moodle. Po zatwierdzeniu będziesz mógł zainstalować ją bezpośrednio z poziomu instalatora wtyczek Moodle.

### Style komentarzy

Wtyczka obsługuje trzy style komentarzy, więc możesz wybrać to, co najlepiej pasuje do Twoich studentów i struktury kursu.

**Tryb Komentarzy** umieszcza pełny widżet komentarzy poniżej treści stron. Studenci otrzymują wątkowe odpowiedzi, @wzmianki,
głosowanie w górę i w dół, edytor tekstu oraz dzwonek powiadomień, aby subskrybować nowe komentarze na stronie.

<div class="text-center">
    <div class="sm">Komentarze na stronie kursu</div>
    <img src="images/moodle-course-comments.png" alt="Komentarze do kursu" title="Komentarze do kursu" />
</div>

**Tryb Czat Wspólny** dodaje pasek na górze strony, który zachęca użytkowników do zaznaczenia tekstu i rozpoczęcia dyskusji. 
Zaznaczony tekst jest związany z treścią, więc rozmowa pozostaje związana z tym, o czym dokładnie jest mowa. Pokazuje również
użytkowników online oraz liczbę aktywnych dyskusji. Ten tryb nie renderuje widżetu na dole.

<div class="text-center">
    <div class="sm">Wspólny czat związany z zaznaczonym tekstem</div>
    <img src="images/moodle-collab-chat.png" alt="Czat Wspólny" title="Czat Wspólny" />
</div>

**Czat Wspólny + Komentarze** daje Ci oba jednocześnie. Studenci mogą zaznaczać tekst do dyskusji i korzystać
z pełnego widżetu komentarzy poniżej treści. To świetne rozwiązanie dla kursów, w których chcesz zarówno szybkie opinie inline,
jak i dłuższe wątkowe rozmowy.

<div class="text-center">
    <div class="sm">Oba style komentarzy aktywne na stronie</div>
    <img src="images/moodle-page-comments.png" alt="Komentarze na Stronie" title="Komentarze na Stronie" />
</div>

### SSO, które po prostu działa

Wtyczka obsługuje trzy tryby SSO. **Bezpieczne SSO** to zalecana opcja. Podpisuje tożsamość użytkownika po stronie serwera za pomocą
HMAC-SHA256, używając Twojego Tajnego Klucza API, więc dane logowania nigdy nie są ujawniane na kliencie. Przy Bezpiecznym SSO administratorzy Moodle
są automatycznie synchronizowani jako moderatorzy FastComments, co oznacza, że administratorzy witryn mogą moderować komentarze bez żadnych
dodatkowych ustawień. Awatary użytkowników, imiona i adresy e-mail są przesyłane w sposób bezpieczny.

**Proste SSO** przesyła dane użytkownika (imię, e-mail, avatar) po stronie klienta bez podpisu. Szybko się je konfiguruje, ale jest mniej bezpieczne
niż podejście HMAC. Na koniec, **Brak** całkowicie dezaktywuje SSO, więc użytkownicy komentują anonimowo.

### Preferencje powiadomień użytkownika

Studenci mogą zarządzać swoimi ustawieniami powiadomień FastComments bezpośrednio w swoim profilu Moodle. W sekcji **FastComments**
mogą włączać powiadomienia o odpowiedziach (otrzymują e-mail, gdy ktoś odpowiada na ich komentarz) oraz powiadomienia o subskrypcjach
(otrzymują e-maile dla wątków, do których się subskrybują). To wszystko w jednym miejscu i daje studentom kontrolę nad tym, ile e-maili otrzymują.

### Podsumowanie

Wtyczka Moodle jest już dostępna. Aby zapoznać się z pełnym przewodnikiem ustawień, sprawdź
[Przewodnik Integracji Moodle](https://docs.fastcomments.com/guide-moodle.html), a kod źródłowy jest dostępny na
[GitHub](https://github.com/FastComments/fastcomments-moodle). Daj nam znać poniżej, jeśli masz jakiekolwiek uwagi!

Pozdrawiamy!

{{/isPost}}