---
[category:Integrations]
[category:Features]
###### [postdate]
# [postlink]Wtyczka FastComments dla Moodle[/postlink]

{{#unless isPost}}
FastComments ma teraz dedykowaną wtyczkę Moodle z SSO, wątkowymi komentarzami i czatem współpracy dla Twoich kursów.
{{/unless}}

{{#isPost}}

### Nowości

Z radością ogłaszamy oficjalną wtyczkę FastComments dla Moodle. Jeśli korzystasz z Moodle i chcesz dodać na żywo,
wątkowe komentowanie lub czat współpracy do swoich kursów, ta wtyczka to ułatwia. Zastępuje starą ręczną metodę PHP
odpowiednią wtyczką Moodle, która instaluje się w kilka minut i integruje z istniejącymi kontami użytkowników Moodle. Wtyczka działa
z Moodle 4.1 i nowszymi, a źródło jest dostępne na [GitHub](https://github.com/FastComments/fastcomments-moodle).

### Jak zacząć

Aby zainstalować, pobierz wtyczkę z [Moodle Plugin Directory](https://moodle.org/plugins/local_fastcomments) i zainstaluj ją
za pomocą instalatora wtyczek w swoim serwisie Moodle. Alternatywnie, możesz pobrać ją i rozpakować do
`<moodle-root>/local/fastcomments`, następnie zalogować się jako administrator serwisu i przejść do **Administracja strony > Powiadomienia**.
Moodle wykryje nową wtyczkę i automatycznie uruchomi proces instalacji.

Po zainstalowaniu, przejdź do **Administracja strony > Wtyczki > Wtyczki lokalne > FastComments** aby skonfigurować. Będziesz potrzebować swojego
**Tenant ID** (znajdującego się w panelu FastComments) i swojego **API Secret**, jeśli chcesz korzystać z Secure SSO, co zalecamy.

### Style komentowania

Wtyczka wspiera trzy style komentowania, dzięki czemu możesz wybrać, co najlepiej pasuje do Twoich studentów i struktury kursu.

**Tryb Komentarze** umieszcza pełny widget komentarzy poniżej zawartości strony. Uczniowie otrzymują wątkowe odpowiedzi, @wzmianki,
głosowanie na plus i minus, edytor tekstu oraz dzwonek powiadomień do subskrypcji nowych komentarzy na stronie.

<div class="text-center">
    <div class="sm">Komentarze na stronie kursu</div>
    <img src="images/moodle-course-comments.png" alt="Komentarze kursu" title="Komentarze kursu" />
</div>

**Tryb Czat Współpracy** dodaje pasek na górze strony, który zachęca użytkowników do zaznaczenia tekstu i rozpoczęcia dyskusji. 
Zaznaczony tekst jest powiązany z treścią, dzięki czemu rozmowa jest związana dokładnie z tym, co jest omawiane. Pokazuje również
użytkowników online oraz liczbę aktywnych dyskusji. Ten tryb nie renderuje dolnego widgetu.

<div class="text-center">
    <div class="sm">Czat współpracy powiązany z zaznaczonym tekstem</div>
    <img src="images/moodle-collab-chat.png" alt="Czat Współpracy" title="Czat Współpracy" />
</div>

**Czat Współpracy + Komentarze** daje Ci obie opcje jednocześnie. Uczniowie mogą zaznaczać tekst do dyskusji inline i także
korzystać z pełnego widgetu komentarzy poniżej treści. To świetna opcja dla kursów, w których chcesz zarówno szybkiej informacji zwrotnej inline, jak i
dłuższych, wątkowych rozmów.

<div class="text-center">
    <div class="sm">Oba style komentowania aktywne na stronie</div>
    <img src="images/moodle-page-comments.png" alt="Komentarze na stronie" title="Komentarze na stronie" />
</div>

### Automatyczne SSO

Wtyczka wspiera trzy tryby SSO. **Secure SSO** to zalecana opcja. Zapisuje tożsamość użytkownika po stronie serwera za pomocą
HMAC-SHA256, używając Twojego API Secret, dzięki czemu dane uwierzytelniające nigdy nie są ujawniane po stronie klienta. Dzięki Secure SSO, administratorzy Moodle są
automatycznie synchronizowani jako moderatorzy FastComments, co oznacza, że administratorzy Twojego serwisu mogą moderować komentarze bez żadnej
dodatkowej konfiguracji. Awatary użytkowników, imiona i adresy e-mail są również przekazywane w sposób bezpieczny.

**Simple SSO** przekazuje dane użytkownika (imię, e-mail, awatar) po stronie klienta bez podpisu. Szybko się ją ustawia, ale jest mniej bezpieczna
niż podejście HMAC. Na koniec, **Brak** całkowicie wyłącza SSO, dzięki czemu użytkownicy komentują anonimowo.

### Preferencje powiadomień użytkowników

Studenci mogą zarządzać ustawieniami powiadomień FastComments bezpośrednio z ich profilu Moodle. W sekcji **FastComments**
mogą włączać lub wyłączać powiadomienia o odpowiedziach (otrzymanie e-maila, gdy ktoś odpowie na ich komentarz) oraz powiadomienia o subskrypcji
(otrzymywanie e-maili dla wątków, do których się zapisali). To trzyma wszystko w jednym miejscu i daje studentom kontrolę nad tym, ile e-maili otrzymują.

### Podsumowanie

Wtyczka Moodle jest już dostępna. Aby zapoznać się z pełnym przewodnikiem instalacji, sprawdź
[Przewodnik po integracji Moodle](https://docs.fastcomments.com/guide-installation-moodle.html), a kod źródłowy jest na
[GitHub](https://github.com/FastComments/fastcomments-moodle). Daj nam znać poniżej, jeśli masz jakieś uwagi!

Na zdrowie!

{{/isPost}}

---