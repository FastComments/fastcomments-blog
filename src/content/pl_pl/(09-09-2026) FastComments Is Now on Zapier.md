[category:Features]
[category:Integrations]
###### [postdate]
# [postlink]FastComments jest teraz w Zapier[/postlink]

{{#unless isPost}}
Połącz swoje komentarze z tysiącami aplikacji za pomocą oficjalnej aplikacji FastComments dla Zapier. Wyzwalacze uruchamiają się w momencie opublikowania komentarza, a dowolna aplikacja może tworzyć komentarze, strony i użytkowników na Twojej witrynie.
{{/unless}}

{{#isPost}}

### Co nowego

Teraz dostępna jest oficjalna aplikacja FastComments w [Zapier](https://zapier.com). Zaloguj się raz w edytorze Zapier i możesz wysyłać każdy nowy komentarz do Slacka, zapisywać je w arkuszu kalkulacyjnym, dodawać komentujących do swojego CRM lub tworzyć komentarze z przesłania formularza, bez pisania kodu.

Wcześniej podłączenie FastComments do innego narzędzia wymagało uruchomienia własnego odbiornika webhooków lub pisania przeciwko REST API. Obie metody nadal działają. Aplikacja Zapier jest przeznaczona dla przypadków, w których nie chcesz nic uruchamiać.

### Wyzwalacze

Trzy wyzwalacze, wszystkie natychmiastowe:

- **New Comment** uruchamia się, gdy komentarz zostanie opublikowany. Domyślnie wyzwalane są tylko zatwierdzone, nie‑spamowe komentarze, więc Zap publikujący w publicznym kanale nie ujawni treści, które nadal znajdują się w kolejce moderacji. Dostępne jest pole wyboru, aby uwzględnić wszystko.
- **Updated Comment** uruchamia się, gdy komentarz zostanie edytowany, zatwierdzony, oceniony, przypięty lub w inny sposób zmieniony. Filtruj po polu zatwierdzonym, a stanie się to wyzwalaczem „zatwierdzony komentarz”.
- **Deleted Comment** uruchamia się, gdy komentarz zostanie usunięty, wraz z pełnym komentarzem do Twoich rekordów.

Każdy wyzwalacz ma opcjonalny filtr domen, wymieniający domeny skonfigurowane na Twoim koncie, więc Zap może obserwować jedną witrynę spośród wielu.

Wyzwalacze są oparte na webhookach, a nie na odpytywaniu. FastComments dostarcza zdarzenie do Zapier w momencie jego wystąpienia, nic nie odpyta Twojego konta w oczekiwaniu, a oczekiwanie nie kosztuje żadnych kredytów API.

### Akcje i wyszukiwania

Akcje wywołują API FastComments w Twoim imieniu:

- **Create Comment** na dowolnej stronie, jako nazwany komentujący lub istniejący użytkownik SSO, opcjonalnie jako odpowiedź.
- **Create Page**, aby strona mogła być wymieniona i ograniczona do grup członków przed pierwszym komentarzem.
- **Create SSO User**, aby członkowie z innych narzędzi mogli komentować pod własną tożsamością.
- **Create Feed Post** i **Create Hash Tag**.
- **Flag Comment** do przeglądu przez moderatora.

Wyszukiwania przeglądają dane do późniejszych kroków: **Find Comment** po id, **Find SSO User** po emailu i **Find Page** po ID URL. Połącz wyszukiwanie z odpowiadającym tworzeniem w trybie „find or create” Zapiera i brakujący użytkownik lub strona zostanie utworzony za Ciebie.

### Kilka Zapsów na początek

- New Comment, a potem Slack „Send Channel Message”. Mapuj nazwę komentującego, komentarz i URL strony. Użyj filtru domen, aby kierować każdą witrynę do własnego kanału.
- New Comment, a potem Google Sheets „Create Spreadsheet Row”, z Deleted Comment dopisującym wiersz jako drugi Zap. Arkusz staje się ścieżką audytu.
- Updated Comment filtrowany, gdy Approved jest prawdziwe, a potem Gmail „Send Email”, aby poinformować autora, że jego komentarz jest opublikowany.
- Typeform „New Response”, a potem Create Comment na stronie z referencjami, z Approved odznaczonym, abyś mógł przejrzeć każdy przed jego wyświetleniem.
- WordPress „New Post”, a potem Create Page, aby każdy post został zarejestrowany przed pierwszym komentarzem.

[The guide](https://docs.fastcomments.com/guide-installation-zapier.html) zawiera więcej, w tym przepływ pracy do provisioningu użytkowników SSO z Twojego narzędzia członkostwa.

### Jak to działa

Aplikacja używa OAuth. Gdy dodajesz krok FastComments, Zapier pyta o Twój region (United States lub EU), przekierowuje Cię do FastComments w celu logowania i wyświetla stronę zgody, na której podana jest nazwa aplikacji, konto, z którym się połączy, oraz żądane uprawnienia. Żaden klucz API nie jest kopiowany do Zapier.

Osoba zatwierdzająca połączenie musi być administratorem API na koncie. Właściciele kont już mają takie uprawnienia i mogą przyznać je innym członkom zespołu na stronie Użytkownicy.

Każde połączenie pojawia się w **Integrate**, a potem **Connected Apps** w Twoim panelu, oznaczone jako oficjalna integracja, wraz z informacją, kiedy było ostatnio używane. Cofnięcie go tam natychmiast rozłącza Zapier. Włączenie Zapa tworzy subskrypcję webhooka, którą możesz zobaczyć na stronie Webhooks ze źródłem **API**, a wyłączenie Zapa usuwa ją.

### Koszty

Aplikacja jest darmowa w każdym planie Zapier, w tym w darmowym, a FastComments nie pobiera za nią dodatkowych opłat. Wyzwalacze nie zużywają kredytów API. Akcje i wyszukiwania zużywają te same kredyty, co wywołanie z własnego kodu, po jednym kredycie na wywołanie w większości przypadków.

### Dokumentacja

[The Zapier guide](https://docs.fastcomments.com/guide-installation-zapier.html) opisuje łączenie konta, każdy wyzwalacz i akcję wraz z ich polami, przykładowe Zaps oraz rozwiązywanie problemów. Sama integracja jest otwarto‑źródłowa pod adresem [github.com/FastComments/fastcomments-zapier](https://github.com/FastComments/fastcomments-zapier).

### Podsumowanie

Otwórz [fastcomments.com/zapier](https://fastcomments.com/zapier), znajdź aplikację, połącz swoje konto i zbuduj swój pierwszy Zap.

Jak zawsze, daj nam znać poniżej, jeśli napotkasz jakiekolwiek problemy.

Cheers!

{{/isPost}}

---