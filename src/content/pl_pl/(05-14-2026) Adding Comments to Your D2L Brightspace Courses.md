---
[category:Integrations]
[category:Features]
###### [postdate]
# [postlink]Dodawanie komentarzy do Twoich kursów D2L Brightspace[/postlink]

{{#unless isPost}}
FastComments teraz instalują się w D2L Brightspace w jednym kroku za pomocą LTI 1.3 Dynamic Registration, z automatycznym SSO, wątkami komentarzy oraz czatem współpracującym dla każdej jednostki kursowej.
{{/unless}}

{{#isPost}}

### Co nowego

FastComments teraz wspiera D2L Brightspace poprzez standard IMS LTI 1.3 Advantage, w tym Dynamic Registration.
Oznacza to, że nie ma potrzeby instalowania wtyczki, wymiany kluczy ani podłączania każdego kursu. Twój administrator Brightspace
wkleja jeden URL w ekranie rejestracji LTI Advantage, a FastComments i Brightspace kończą
przy handshake automatycznie. Nauczyciele następnie dodają FastComments do dowolnej jednostki tak samo, jak dodają inne zewnętrzne
narzędzia, a uczniowie widzą wątki komentarzy osadzone bezpośrednio w treści kursu.

<div class="text-center">
    <div class="sm">Wątki komentarzy osadzone jako temat wewnątrz jednostki Brightspace</div>
    <img src="images/d2l-course-comments.png" alt="FastComments działające wewnątrz jednostki D2L Brightspace" title="FastComments w jednostce Brightspace" />
</div>

### Rozpoczęcie pracy

Z poziomu swojego panelu FastComments, otwórz stronę [LTI 1.3 Configuration page](https://fastcomments.com/auth/my-account/lti-config),
wybierz **D2L Brightspace** z rozwijanej listy platform, a następnie kliknij **Generate URL**. Otrzymasz URL do rejestracji jednorazowej,
który jest ważny przez 30 minut.

W Brightspace, twój administrator otwiera **Admin Tools > Manage Extensibility > LTI Advantage > Register Tool**, wkleja
URL do pola **Tool initiation registration endpoint** i zatwierdza. Brightspace przeprowadza handshake rejestracji
z FastComments, wymienia klucze do podpisu i tworzy wpis narzędzia. Popup zamyka się automatycznie po zakończeniu.

Po rejestracji administrator włącza narzędzie i tworzy wdrożenie ograniczone do jednostek organizacyjnych, które powinny mieć
dostęp. Od tego momentu FastComments pojawia się w każdym wyborze treści kursu pod opcją **Add Existing**.

### Dodawanie do kursu

W dowolnej jednostce kursowej, nauczyciel klika **Add Existing**, wybiera **FastComments** z listy działań, a
narzędzie jest umieszczane jako temat w jednostce. Zmiana nazwy tematu, zmiana kolejności w jednostce, ograniczenie do
konkretnych grup lub warunków publikacji oraz przełączanie widoczności odbywają się przy użyciu standardowych kontrolek Brightspace. Nie ma osobnego
ekranu ustawień FastComments, którego musieliby się nauczyć nauczyciele.

Do osadzenia w linii, to samo narzędzie FastComments jest również dostępne za pośrednictwem dialogu **Insert Stuff**
edytora HTML Brightspace w sekcji **LTI Advantage**. Używa to przepływu LTI Deep Linking, aby umieścić wątek komentarzy bezpośrednio wewnątrz lektury,
instrukcji quizu lub jakiegokolwiek innego tematu HTML, dzięki czemu dyskusja znajduje się obok treści, której dotyczy.

### Automatyczne SSO

Studenci nigdy nie widzą ekranu logowania. Uruchomienie LTI 1.3 przesyła tożsamość studenta z Brightspace (`sub`, `name`, `email`,
i `picture`) podpisaną kluczem prywatnym Brightspace. FastComments weryfikuje podpis w stosunku do opublikowanego
JWKS Brightspace, tworzy bezpieczną sesję SSO dla użytkownika i renderuje widget komentarzy. Komentarze są przypisane do konta studenta
Brightspace, a nauczyciele moderują używając swojej tożsamości Brightspace również.

Mapowanie ról jest automatyczne. Użytkownicy **Administrator** Brightspace występują jako administratorzy FastComments, użytkownicy **Instructor**
jako moderatorzy, a wszyscy inni jako standardowi komentatorzy. Nie ma osobnej listy użytkowników do utrzymania po stronie FastComments - podąża za tym, co mówi Brightspace.

### Zakres wątków

Każdy wątek komentarzy jest powiązany z potrójnym zestawem: gospodarzem Brightspace, kursem i linkiem do zasobu. Oznacza to, że dwa
kursy, które obydwa korzystają z tematu "Refleksje na temat lektury", mają swoje własne dyskusje. To samo dotyczy sytuacji, gdy nauczyciel
dodaje FastComments dwukrotnie w tym samym kursie (na przykład raz jako temat jednostki i raz jako osadzenie w linii wewnątrz
strony HTML) - każde miejsce to swój własny wątek.

Część hosta celowo stanowi część identyfikatora wątku. Jeśli Twoja instytucja działa na wielu instancjach Brightspace
w ramach jednego konta FastComments, rozmowy pozostają odizolowane do każdej instancji, nawet gdy identyfikatory kursów kolidują.

### Na zakończenie

Jeśli korzystasz z D2L Brightspace, możesz być gotowy z FastComments w ciągu jednego popołudnia: wygeneruj URL, wklej go
do Brightspace i pozwól nauczycielom wrzucić narzędzie do swoich jednostek. Aby uzyskać pełny przewodnik krok po kroku, w tym
rozwiązywanie problemów i zrzuty ekranu na każdej stronie, zobacz
[Przewodnik instalacji LTI 1.3](https://docs.fastcomments.com/guide-installation-lti-1p3.html). Ta sama integracja obejmuje także
Moodle, Blackboard, Sakai, Schoology i każdą inną platformę LTI 1.3 Advantage, ale Brightspace był naszym celem pilotowym
i przepływ tam jest niezawodny.

Na zdrowie!

{{/isPost}}

---