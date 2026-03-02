---
[category:Integrations]
[category:Features]
###### [postdate]
# [postlink]Wtyczka FastComments dla Moodle[/postlink]

{{#unless isPost}}
FastComments ma teraz dedykowaną wtyczkę do Moodle z SSO, wątkowymi komentarzami i współpracującym czatem dla Twoich kursów.
{{/unless}}

{{#isPost}}

### Co nowego

Z radością ogłaszamy oficjalną wtyczkę FastComments dla Moodle. Jeśli używasz Moodle i chcesz dodać na żywo, wątkowe komentarze lub współpracujący czat do swoich kursów, ta wtyczka to ułatwia. Zastępuje starą ręczną metodę PHP odpowiednią wtyczką Moodle, która instaluje się w kilka minut i integruje z istniejącymi kontami użytkowników Moodle. Wtyczka działa z Moodle 4.1 i późniejszymi wersjami, a kod źródłowy jest dostępny na [GitHub](https://github.com/FastComments/fastcomments-moodle).

### Jak zacząć

Aby zainstalować, pobierz plik ZIP z [repozytorium GitHub](https://github.com/FastComments/fastcomments-moodle) i rozpakuj go
do `<moodle-root>/local/fastcomments`. Następnie zaloguj się jako administrator witryny i przejdź do **Administracja witryną > Powiadomienia**.
Moodle wykryje nową wtyczkę i uruchomi instalację automatycznie.

Po zainstalowaniu przejdź do **Administracja witryną > Wtyczki > Wtyczki lokalne > FastComments**, aby skonfigurować. Będziesz potrzebować swojego
**Tenant ID** (znajdziesz w swoim pulpicie FastComments) oraz **API Secret**, jeśli chcesz użyć Secure SSO, co zalecamy.

Zauważ, że ręczne pobieranie z GitHub jest tymczasowe, dopóki nie zostanie zatwierdzona wtyczka w katalogu wtyczek Moodle. Po zatwierdzeniu będziesz mógł zainstalować ją bezpośrednio z instalatora wtyczek Moodle.

### Style komentowania

Wtyczka obsługuje trzy style komentowania, dzięki czemu możesz wybrać, co działa najlepiej dla Twoich studentów i struktury kursu.

**Tryb Komentarzy** umieszcza pełen widget komentarzy poniżej treści strony. Studenci mogą uzyskiwać wątkowe odpowiedzi, @wzmianki,
głosować w górę i w dół, korzystać z edytora tekstu i otrzymywać powiadomienia o nowych komentarzach na stronie.

<div class="text-center">
    <div class="sm">Komentarze na stronie kursu</div>
    <img src="images/moodle-course-comments.png" alt="Komentarze Kursu" title="Komentarze Kursu" />
</div>

**Tryb Czat Współpracujący** dodaje pasek na górze strony, który zachęca użytkowników do zaznaczania tekstu i rozpoczynania dyskusji. 
Zaznaczony tekst jest powiązany z treścią, więc rozmowa pozostaje związana z tym, co jest omawiane. Pokazuje także użytkowników online oraz liczbę aktywnych dyskusji. Ten tryb nie generuje dolnego widgetu.

<div class="text-center">
    <div class="sm">Czat współpracujący powiązany z zaznaczonym tekstem</div>
    <img src="images/moodle-collab-chat.png" alt="Czat Współpracujący" title="Czat Współpracujący" />
</div>

**Czat Współpracujący + Komentarze** daje Ci oba te elementy jednocześnie. Studenci mogą zaznaczać tekst do dyskusji inline oraz
korzystać z pełnego widgetu komentarzy poniżej treści. To świetne rozwiązanie dla kursów, w których chcesz zarówno szybkie
opinie inline, jak i dłuższe wątkowe rozmowy.

<div class="text-center">
    <div class="sm">Aktywne oba style komentowania na stronie</div>
    <img src="images/moodle-page-comments.png" alt="Komentarze na Stronie" title="Komentarze na Stronie" />
</div>

### Automatyczne SSO

Wtyczka obsługuje trzy tryby SSO. **Bezpieczne SSO** jest zalecaną opcją. Uwierzytelnia tożsamość użytkowników po stronie serwera
przy użyciu HMAC-SHA256 z Twoim API Secret, dzięki czemu dane uwierzytelniające nigdy nie są ujawniane po stronie klienta. Dzięki Bezpiecznemu SSO administratorzy Moodle są
automatycznie synchronizowani jako moderatorzy FastComments, co oznacza, że Twoi administratorzy witryn mogą moderować komentarze bez dodatkowych ustawień. Awatary użytkowników, imiona i adresy e-mail są wszystkie przesyłane w sposób bezpieczny.

**Proste SSO** przesyła dane użytkowników (imię, e-mail, avatar) po stronie klienta bez podpisu. Jest szybkie do skonfigurowania, ale mniej bezpieczne
niż podejście HMAC. Na koniec, **Brak** całkowicie wyłącza SSO, dzięki czemu użytkownicy komentują anonimowo.

### Preferencje powiadomień użytkowników

Studenci mogą zarządzać swoimi ustawieniami powiadomień FastComments bezpośrednio z ich profilu Moodle. W sekcji **FastComments**
mogą włączyć powiadomienia o odpowiedziach (otrzymywanie e-maila, gdy ktoś odpowiada na ich komentarz) oraz powiadomienia o subskrypcjach
(otrzymywanie e-maili o wątkach, do których się subskrybują). To utrzymuje wszystko w jednym miejscu i daje studentom kontrolę nad ilością emaili, które otrzymują.

### Podsumowanie

Wtyczka Moodle jest już dostępna. Aby uzyskać pełny przewodnik konfiguracji, sprawdź
[Przewodnik Integracji Moodle](https://docs.fastcomments.com/guide-installation-moodle.html), a kod źródłowy jest na
[GitHub](https://github.com/FastComments/fastcomments-moodle). Daj nam znać poniżej, jeśli masz jakieś uwagi!

Na zdrowie!

{{/isPost}}