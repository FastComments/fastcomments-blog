---
[category:Features]
[category:Moderation]
###### [postdate]
# [postlink]Strona Moderacji Jest Teraz Aktywna[/postlink]

{{#unless isPost}}
Strona moderacji FastComments teraz wyświetla powiadomienie na żywo, gdy pojawią się nowe komentarze, które pasują do twoich aktualnych filtrów.
{{/unless}}

{{#isPost}}

### Co nowego

Strona moderacji zawsze była potężnym narzędziem do zarządzania komentarzami. Można było filtrować według statusu, szukać według tekstu, filtrować według strony
lub użytkownika oraz wykonywać masowe akcje. Ale, aby zobaczyć nowe komentarze, musiałeś odświeżyć stronę.

Nie więcej! Strona moderacji teraz pokazuje, kiedy przychodzą nowe komentarze, które pasują do twoich aktualnych filtrów. Na górze listy komentarzy pojawia się baner informujący, ile nowych komentarzy czeka, a kliknięcie na niego ładuje je w trybie inline bez pełnego odświeżania strony.

Wiadomość "nowe komentarze dla twoich filtrów" powinna być niemal natychmiastowa w większości przypadków.

### Ocena Filtrów

Warstwa transportowa ocenia wszystkie filtry moderacji po stronie serwera. Obejmuje to filtry statusu (wymaga przeglądu, wymaga zatwierdzenia, spam, zgłoszone,
zablokowane), filtry ciągów (ID użytkownika, URL strony, domena), a nawet wyszukiwanie tekstu. Cytowany tekst, taki jak <div class="code">"dokładna fraza"</div>, przeprowadza
dokładne, niezróżnicowane wielkościowo dopasowanie podciągu, podczas gdy terminy niecytowane wykonują zbliżone dopasowanie, które nie różnicuje wielkości liter.

Oznacza to, że jeśli filtrujesz komentarze dotyczące spamu, nie będziesz informowany o zatwierdzonych komentarzach. Jeśli szukasz komentarzy
zawierających określoną frazę, tylko pasujące komentarze uruchamiają baner.

### Grupy Moderacji

Jeśli twoje konto używa grup moderacyjnych do ograniczenia, którzy moderatorzy mogą widzieć które komentarze, te ograniczenia są w pełni egzekwowane
dla powiadomień na żywo. Warstwa transportowa odwołuje się do serwera aplikacji, aby zbudować filtr, który obejmuje ograniczenia grupowe
w oparciu o przypisane grupy moderatorów. Ten filtr jest buforowany przez czas trwania połączenia WebSocket i aktualizowany, gdy
moderator zmienia filtry.

### Przegapione Wydarzenia

Jeśli połączenie moderatora zostanie tymczasowo przerwane (problemy z siecią, uśpienie laptopa itp.), system automatycznie uzupełnia straty po ponownym połączeniu, aby
nie przegapić żadnej pracy.

### Wydajność

Zaprojektowaliśmy tę funkcję tak, aby miała minimalny wpływ na czas ładowania strony moderacji.

### Wiele Regionów

Ta funkcja działa płynnie w naszej globalnie rozproszonej architekturze, dzięki czemu globalnie rozproszone zespoły moderacyjne zyskują ten sam widok na żywo.

### Na zakończenie

Mamy nadzieję, że ta funkcja pozwoli moderatorom zaoszczędzić czas i uczyni doświadczenie moderacji bardziej responsywnym. Jak zawsze, dziękujemy naszym klientom za
ich opinie i wsparcie.

Na zdrowie!

{{/isPost}}