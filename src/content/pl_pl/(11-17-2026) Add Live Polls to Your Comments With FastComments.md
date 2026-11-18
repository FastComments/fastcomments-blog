[category:Features]
[category:UI & Customization]
[category:Announcements]

###### [postdate]
# [postlink]Dodaj ankiety na żywo do swoich komentarzy z FastComments[/postlink]

{{#unless isPost}}
Komentarze mają teraz ankiety na żywo! Czytelnicy głosują w samym wątku, wyniki aktualizują się na żywo dla wszystkich na stronie, a ankiety działają zarówno w widżecie internetowym, jak i w naszych SDK dla iOS, Android oraz React Native.
{{/unless}}

{{#isPost}}

### Co nowego

Ta wersja dodaje **Live Polls**. Ankieta jest dołączona do komentarza i wyświetlana wewnątrz niego. Czytelnicy klikają opcję, aby zagłosować, nie opuszczając wątku, a wyniki aktualizują się na żywo dla wszystkich przeglądających stronę w miarę napływania głosów. Bez odświeżania i bez ręcznego liczenia odpowiedzi.

<img src="images/fc-live-polls.png" alt="A comment with a poll asking what format the next meetup should be, showing In person at 34%, Online at 21%, and Hybrid at 45%, with 53 responses" title="Live Polls" class="lozad" />

Ponieważ ankieta jest komentarzem, rozmowa pozostaje do niej przyłączona. Ludzie głosują, a potem odpowiadają, wyjaśniając dlaczego.

### Tworzenie ankiety

Gdy ankiety są włączone, edytor komentarzy otrzymuje przycisk ankiety. Kliknięcie go otwiera edytor ankiety pod polem tekstowym, gdzie możesz ustawić:

- **Pytanie**, do 200 znaków.
- **Opcje**, od 2 do 10.
- **Kiedy się zamyka**: nigdy lub po 1 dniu, 3 dniach lub 1 tygodniu. Zamknięta ankieta pokazuje ostateczne wyniki i przestaje przyjmować głosy.
- **Prywatność**: anonimowa, widoczna dla administratorów lub publiczna.
- **Wymagaj głosu, aby zobaczyć wyniki**, co ukrywa wyniki przed każdym widzem, dopóki nie zagłosuje lub ankieta nie zostanie zamknięta.

Następnie napisz swój komentarz i opublikuj go jak zwykle. Ankiety działają w nowych komentarzach oraz w odpowiedziach.

### Głosowanie

Każda osoba otrzymuje jeden głos na ankietę i może go zmienić, dopóki ankieta jest otwarta. Jeśli ankieta nie wymaga najpierw głosu, czytelnicy mogą kliknąć **Pokaż wyniki**, aby zobaczyć aktualny stan przed wyborem.

Prywatność jest ustawiana dla każdej ankiety i wyświetlana bezpośrednio pod opcjami, więc wyborcy wiedzą, kto może zobaczyć ich głos przed oddaniem. Ankiety anonimowe (domyślne) pokazują tylko sumy, a nikt, włącznie z administratorami, nie może zobaczyć, kto na co zagłosował. W ankietach widocznych dla administratorów, administratorzy i moderatorzy mogą otworzyć **Zobacz, kto głosował**. W ankietach publicznych, każdy może.

### Włączanie

Ankiety są domyślnie wyłączone. Otwórz <a href="https://fastcomments.com/auth/my-account/customize-widget" target="_blank">Dostosowanie widżetu</a>, zaznacz **Enable Polls**, i wybierz, kto może je tworzyć:

- **Tylko administratorzy/moderatorzy** (domyślnie), gdy chcesz samodzielnie prowadzić ankiety.
- **Wszyscy**, gdy chcesz, aby twoja społeczność pytała się nawzajem.

Głosowanie wymaga domyślnie zalogowanego użytkownika. Zaznacz **Allow Anonymous Poll Votes**, aby pozwolić każdemu głosować. Aby zachować uczciwość, anonimowe głosy są ograniczone do trzech na adres IP na ankietę na godzinę.

Podobnie jak każda reguła dostosowywania, może ona obowiązywać na całej stronie, domenie lub pojedynczej stronie.

### Powiadomienia

Autor ankiety otrzymuje informacje o odpowiedziach w miarę ich napływania: powiadomienie, grupowane gdy wiele osób głosuje jednocześnie, oraz codzienny e‑mail, gdy w danym dniu ankieta otrzymała nowe odpowiedzi. Tylko pierwszy głos liczy się jako odpowiedź, więc zmiana zdania nie generuje kolejnych powiadomień. Powiadomienia respektują prywatność ankiety, więc anonimowa ankieta podaje jedynie liczbę nowych odpowiedzi, nigdy kto je udzielił.

### Natywne SDK mobilne

Ankiety nie występują tylko w widżecie internetowym. Nasze natywne SDK renderują kartę ankiety, edytor ankiety, wyniki na żywo oraz listę głosujących przy użyciu prawdziwych natywnych komponentów i odczytują te same ustawienia widżetu z twojego panelu. Włącz ankiety raz, a pojawią się na twojej stronie i w aplikacjach.

- **iOS**: <a href="https://github.com/FastComments/fastcomments-ios" target="_blank">fastcomments-ios</a> 2.1.0, przez Swift Package Manager.
- **Android**: <a href="https://github.com/FastComments/fastcomments-android" target="_blank">fastcomments-android</a> 2.1.0, jako `com.fastcomments:android-sdk:2.1.0`.
- **React Native**: <a href="https://www.npmjs.com/package/fastcomments-react-native-sdk" target="_blank">fastcomments-react-native-sdk</a> 5.3.0, na NPM.

SDKi iOS i Android mogą również publikować ankietę z własnego interfejsu UI. Na iOS wygląda to tak:

<div class="code">let draft = PollDraft(question: "Where should we eat?", options: ["Tacos", "Ramen"], closesDays: 1)
if draft.validate() == nil {
    try await sdk.postComment(text: "Lunch vote", poll: draft.toInput())
}</div>

Pliki README dla <a href="https://github.com/FastComments/fastcomments-ios#polls" target="_blank">iOS</a> i <a href="https://github.com/FastComments/fastcomments-android#polls" target="_blank">Android</a>, oraz <a href="https://github.com/FastComments/fastcomments-react-native-sdk/blob/main/CHANGELOG.md" target="_blank">changelog React Native</a>, opisują szczegóły, w tym jak przystosować kolory ankiety do wyglądu twojej aplikacji.

### API

Ankiety są również dostępne w REST API. Możesz utworzyć ankietę wraz z jej komentarzem, przekazując `poll` do `POST /api/v1/comments`, lub dodać, edytować, zamknąć i usunąć ją później za pomocą `/api/v1/polls/:commentId`. Głosy można wyświetlać, oddawać i usuwać przy użyciu `/api/v1/poll-votes`, co ułatwia eksport wyników do arkusza kalkulacyjnego lub własnego CMS. API stosuje te same ustawienia co widżet, a indywidualne głosy w anonimowych ankietach nie mogą być odczytane przez API.

### Obciążenie

Kod ankiety nie jest ładowany, dopóki ankiety nie są włączone, więc nie spowalnia widżetu komentarzy dla innych użytkowników.

### Dokumentacja

<a href="https://docs.fastcomments.com/guide-polls.html" target="_blank">Przewodnik po Live Polls</a> opisuje włączanie ankiet, kto może je tworzyć, anonimowe głosy, prywatność głosujących, powiadomienia i API.

### Wypróbuj

Na <a href="https://fastcomments.com/product/live-polls" target="_blank">demo Live Polls</a> znajduje się ankieta na żywo. Zagłosuj, otwórz stronę w drugiej karcie i obserwuj, jak wyniki się zmieniają. Możesz tam również opublikować własną ankietę.

### Podsumowanie

Jeśli twoje wątki zamieniają się w liczenie głów, wypróbuj ankiety i daj nam znać poniżej, co chciałbyś zobaczyć w przyszłości.

Pozdrawiam!

{{/isPost}}

---