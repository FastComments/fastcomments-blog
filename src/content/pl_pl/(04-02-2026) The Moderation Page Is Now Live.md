---
[category:Features]
[category:Moderation]
###### [postdate]
# [postlink]Strona Moderacji Jest Już Dostępna[/postlink]

{{#unless isPost}}
Strona moderacji FastComments teraz pokazuje powiadomienie na żywo, gdy przychodzą nowe komentarze, które pasują do Twoich aktualnych filtrów.
{{/unless}}

{{#isPost}}

### Co Nowego

Strona moderacji była zawsze potężnym narzędziem do zarządzania komentarzami. Można było filtrować według statusu, wyszukiwać według tekstu, filtrować według strony lub użytkownika oraz wykonywać operacje masowe. Ale aby zobaczyć nowe komentarze, trzeba było odświeżyć stronę.

Już nie! Strona moderacji teraz pokazuje, kiedy przychodzą nowe komentarze, które pasują do Twoich aktualnych filtrów. Na górze listy komentarzy pojawia się baner informujący o tym, ile nowych komentarzy czeka, a kliknięcie go ładuje je w linii bez pełnego odświeżenia strony.

Wiadomość "nowe komentarze dla Twoich filtrów" powinna być praktycznie natychmiastowa w większości przypadków.

### Ocena Filtrów

Warstwa transportowa ocenia wszystkie filtry moderacji po stronie serwera. Obejmuje to filtry statusu (wymaga przeglądu, wymaga zatwierdzenia, spam, oznaczone, zbanowane), filtry stringów (ID użytkownika, URL strony, domena), a nawet wyszukiwanie tekstowe. Cytowany tekst jak `"dokładna fraza"` wykonuje dokładne dopasowanie podciągu bez względu na wielkość liter, podczas gdy terminy bez cudzysłowu wykonują nieściśle sugestywne dopasowanie bez względu na wielkość liter.

To oznacza, że jeśli filtrujesz komentarze spamowe, nie będziesz powiadamiany o zatwierdzonych komentarzach. Jeśli szukasz komentarzy zawierających określoną frazę, tylko pasujące komentarze uruchomią baner.

### Grupy Moderacji

Jeśli Twoje konto używa grup moderacyjnych, aby ograniczyć, którzy moderatorzy mogą widzieć które komentarze, te ograniczenia są w pełni egzekwowane dla powiadomień na żywo. Warstwa transportowa wywołuje aplikację serwera, aby zbudować filtr, który obejmuje ograniczenia grupowe w oparciu o przypisane grupy moderatora. Ten filtr jest przechowywany w pamięci podręcznej przez czas trwania połączenia WebSocket i aktualizowany zawsze, gdy moderator zmienia filtry.

### Utracone Wydarzenia

Jeśli połączenie moderatora chwilowo się zerwie (problemy z siecią, uśpienie laptopa itp.), system automatycznie nadrobi zaległości po ponownym połączeniu, aby nie przegapić żadnej pracy.

### Wydajność

Zaprojektowaliśmy tę funkcję, aby miała minimalny wpływ na czas ładowania strony moderacji.

### Wieloregionowe

Ta funkcja działa bezproblemowo w naszej globalnie rozproszonej architekturze, więc globalnie rozproszone zespoły moderacyjne mają ten sam widok na żywo.

### Na Zakończenie

Mamy nadzieję, że ta funkcja zaoszczędzi czas moderatorów i uczyni doświadczenie moderacji bardziej responsywnym. Jak zawsze, dziękujemy naszym klientom za ich opinie i wsparcie.

Pozdrawiamy!

{{/isPost}}