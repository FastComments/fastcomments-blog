[category:Features]
[category:UI &amp; Customization]

###### [postdate]
# [postlink]Komentarz bez wybierania nazwy użytkownika[/postlink]

{{#unless isPost}}
FastComments może teraz przydzielać każdemu nowemu odwiedzającemu unikalną, neutralną nazwę użytkownika, tak aby nigdy nie musieli jej wymyślać. Wspólna domyślna nazwa użytkownika również nie jest już „zajmowana” przez pierwszą osobę, która ją użyje.
{{/unless}}

{{#isPost}}

### Co nowego

Jeśli Twoja strona nie wymaga logowania, odwiedzający, który chce zostawić komentarz, był proszony o dwie rzeczy: adres e‑mail i nazwę użytkownika.  
E‑mail jest prosty, ale nazwa użytkownika musi być unikalna, będzie publiczna i muszą ją wymyślić od razu.

Ta wersja usuwa ten krok. Włącz **Generate Usernames Automatically** w personalizacji widgetu, a każdy nowy  
odwiedzający przychodzi z nazwą taką jak `BraveOtter4172` już wypełnioną. Mogą ją zachować lub nadpisać. Tak czy inaczej, szybciej docierają do pola komentarza.

### Włączanie

Otwórz <a href="https://fastcomments.com/auth/my-account/customize-widget" target="_blank">Widget Customization</a>,  
znajdź sekcję **Anonymization** i zaznacz **Generate Usernames Automatically**. Nie ma nic więcej do skonfigurowania.

Działa z włączonym lub wyłączonym **Allow Anonymous Comments**. Jeśli nadal chcesz otrzymywać e‑mail od każdego komentującego, wyłącz anonimowe komentowanie.  
Odwiedzający podają swój e‑mail, nazwa użytkownika jest dla nich obsługiwana i to wszystko. Jeśli nie potrzebujesz e‑maila, włącz anonimowe komentowanie i odwiedzający może skomentować bez wpisywania czegokolwiek poza samym komentarzem.

### Co widzą odwiedzający

Pole nazwy użytkownika jest wstępnie wypełnione wygenerowaną nazwą. Jest to zwykłe pole, więc każdy, kto chce być znany pod inną nazwą, po prostu ją zamienia.  
Nic nie jest ukryte i nic nie jest wymuszone.

Nazwy składają się z dwóch słów i liczby, więc są czytelne i neutralne. Nikt nie kończy jako `user_83729`.

### Każda nazwa jest unikalna

Wygenerowana nazwa jest sprawdzana pod kątem istniejących kont przed jej zaoferowaniem i jest zarezerwowana dla sesji przeglądarki tego odwiedzającego, aby kolejny odwiedzający nie otrzymał tej samej.  
Zalogowani użytkownicy, użytkownicy SSO i odwiedzający, którzy już komentowali, nigdy nie otrzymują nowej nazwy. Zachowują tę, którą mają.

Powracający odwiedzający, który wprowadza e‑mail użyty wcześniej, jest dopasowywany do istniejącego konta, więc druga wizyta nie tworzy drugiej tożsamości, nawet jeśli przeglądarka została wyczyszczona.

### Poprawka błędu – domyślna nazwa użytkownika jest teraz naprawdę współdzielona

Niektórzy z Was używali **Default Username** z wartością taką jak "Anonymous", aby zbliżyć się do tego rozwiązania. To miało pewien haczyk.  
Nazwy użytkowników są unikalne, więc pierwszy odwiedzający, który skomentował jako "Anonymous" z własnym e‑mailem, posiadał tę nazwę, a kolejny odwiedzający z innym e‑mailem otrzymał informację, że nazwa jest zajęta.

To naprawiono. Domyślna nazwa użytkownika jest teraz traktowana jako współdzielona nazwa wyświetlana, a nie tożsamość. Każdy odwiedzający, który ją zachowa, otrzymuje własne konto w tle, a wszyscy są wyświetlani jako "Anonymous". Nazwy użytkowników wpisywane przez odwiedzających nadal muszą być unikalne, jak wcześniej.

Jeśli ustawisz oba, wygenerowana nazwa ma pierwszeństwo.

### Dokumentacja

<a href="https://docs.fastcomments.com/guide-customizations-and-configuration.html#auto-generate-username" target="_blank">The Generate Usernames Automatically guide</a> opisuje tę opcję i to, jak współdziała z innymi ustawieniami anonimowych komentarzy.  
<a href="https://docs.fastcomments.com/guide-customizations-and-configuration.html#default-username" target="_blank">The Default Username guide</a> opisuje zachowanie współdzielonej nazwy.

### Podsumowanie

Ten pomysł pochodzi od klienta prowadzącego stronę, na której odwiedzający są pacjentami, którzy mogą zostawić tylko jedną opinię. Prośba o e‑mail i unikalną nazwę użytkownika była zbyt dużym pytaniem. Jeśli jakieś ustawienie stoi między Twoimi czytelnikami a polem komentarza, daj nam znać poniżej.

Pozdrawiamy!

{{/isPost}}