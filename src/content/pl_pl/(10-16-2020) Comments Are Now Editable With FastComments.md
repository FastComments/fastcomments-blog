---
[category:Features]
###### [postdate]
# [postlink]Komentarze są teraz edytowalne z FastComments[/postlink]

{{#unless isPost}}
Wyczekiwana aktualizacja, teraz możesz edytować komentarze pozostawione za pomocą FastComments.
{{/unless}}

{{#isPost}}

### <i class="circle">!</i> Ten artykuł zawiera terminologię techniczną

#### Co nowego

Komentarze pozostawione za pomocą FastComments mogą teraz być edytowane - niezależnie od tego, czy jesteś zalogowany, czy nie.

<img src="images/fc-editing-demo.gif" alt="Edycja - GIF demonstracyjny (17mb)" title="Edycja - demonstracja" />

Zrozumiale, była to jedna z najczęściej zgłaszanych funkcji i cieszymy się, że osiągnęliśmy ten kamień milowy z naszą bazą użytkowników.

#### Jak to działa

Zalogowani użytkownicy zawsze mogą edytować swoje komentarze. Dla anonimowych komentatorów nasze serwery oferują tymczasowe 24-godzinne okno na edytowanie komentarza po jego złożeniu, o ile nie zamkną przeglądarki. Na przykład oznacza to, że anonimowy komentator może skomentować, a następnie edytować swój komentarz, aby poprawić wszelkie literówki, bez konieczności logowania!

Jeśli anonimowy komentator zamknie przeglądarkę, nie będzie mógł edytować swojego komentarza, chyba że kliknie magiczny link wysłany na ich email.

Dla dodatkowego bezpieczeństwa tymczasowy klucz edycji zostanie unieważniony przy każdej próbie nieprawidłowego odgadnięcia klucza.

#### Dlaczego teraz, po tak długim czasie?

Jak w przypadku wszystkich zmian w widżecie po stronie klienta, musimy być ostrożni, aby nie powiększyć jego rozmiaru. Ta funkcja dodaje znaczny rozmiar do podstawowego kodu komentarzy (około 1kb po zgraniu - około 10% wzrostu).
Chcieliśmy upewnić się, że nie wpłynie to na wydajność FastComments i że będzie działać poprawnie z naszymi funkcjami komentarzy na żywo. Ponadto chcieliśmy, aby funkcja dostosowywała się do najczęstszych doświadczeń naszych klientów - anonimowych komentarzy.

#### Edytowanie komentarzy na żywo

Tak jak w przypadku komentowania i głosowania - edytowanie odbywa się na żywo. Jeśli dwóch użytkowników znajduje się na tej samej stronie i jeden z nich edytuje swój komentarz, drugi użytkownik zobaczy tę aktualizację.

#### Włączanie edytowania komentarzy

Skończyliśmy wprowadzać edytowanie komentarzy domyślnie dla wszystkich naszych klientów. Na chwilę obecną nie można tego wyłączyć.

#### Co dalej?

Planujemy również wprowadzenie możliwości usuwania komentarzy w przyszłej aktualizacji.

#### Integracje zewnętrzne

Edycja komentarza spowoduje, że zdarzenie rozprzestrzeni się na wszelkie integracje, które posiadasz - jak WordPress. Jeśli używasz naszego wtyczki do WordPressa, dodanie komentarza aktualizuje Twoją instalację WordPressa w tle, dzięki czemu zachowujesz kopię swoich danych. Jeśli edytujesz komentarz, stosujemy tę samą logikę i aktualizujemy kopię w Twojej instalacji WordPressa. Dotyczy to również innych integracji, nie tylko WordPressa.

#### Podsumowując

Wiemy, że ta funkcja była długo oczekiwana przez niektórych. Jak przy wszystkich dużych wydaniach, cieszymy się, że mogliśmy poświęcić czas na optymalizację, testowanie i prawidłowe wprowadzenie tej funkcji.

Na zdrowie!

{{/isPost}}

---