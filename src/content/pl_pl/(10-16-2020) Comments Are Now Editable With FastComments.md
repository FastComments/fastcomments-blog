---
[category:Features]
###### [postdate]
# [postlink]Komentarze są teraz edytowane za pomocą FastComments[/postlink]

{{#unless isPost}}
Długo oczekiwana aktualizacja, teraz możesz edytować komentarze pozostawione za pomocą FastComments.
{{/unless}}

{{#isPost}}

### <i class="circle">!</i> Ten artykuł zawiera techniczne terminy

#### Co nowego

Komentarze pozostawione za pomocą FastComments mogą teraz być edytowane - niezależnie od tego, czy jesteś zalogowany, czy nie.

<video src="images/fc-editing-demo.mp4" autoplay loop muted playsinline title="Demo edytowania"></video>

Zrozumiale, to jedna z naszych najczęściej zgłaszanych funkcji, i cieszymy się, że możemy osiągnąć ten kamień milowy z naszymi użytkownikami.

#### Jak to działa

Zalogowani użytkownicy zawsze mogą edytować swoje komentarze. Dla anonimowych komentujących, nasze serwery zapewniają tymczasowy 24-godzinny okres, w którym mogą edytować swoje komentarze po
skomentowaniu, pod warunkiem, że nie zamkną przeglądarki. Na przykład oznacza to, że anonimowy komentator może skomentować, a następnie edytować swój komentarz, aby poprawić wszelkie błędy, bez kiedykolwiek logowania się!

Jeśli anonimowy komentator zamknie swoją przeglądarkę, nie będzie mógł edytować swojego komentarza, chyba że kliknie magiczny link wysłany na jego adres e-mail.

Dla dodatkowego bezpieczeństwa, tymczasowy klucz edytowania zostanie unieważniony przy każdej próbie zgadnięcia klucza w sposób niepoprawny.

#### Dlaczego teraz, po tak długim czasie?

Jak przy wszystkich zmianach w widgetach po stronie klienta, musimy uważać, aby nie zwiększać jego rozmiaru. Ta funkcja dodaje znaczną wielkość do podstawowego kodu komentarzy (około 1kb po skompresowaniu - około 10% wzrostu).
Chcieliśmy upewnić się, że nie zmniejszy to wydajności FastComments i chcieliśmy zapewnić, że działa prawidłowo z naszymi funkcjami komentarzy na żywo. Poza tym, chcieliśmy, aby funkcja
uwzględniała najczęstszy przypadek użycia naszych klientów - anonimowe komentowanie.

#### Edytowanie komentarzy na żywo

Tak jak w przypadku komentowania i głosowania - edytowanie odbywa się na żywo. Jeśli dwóch użytkowników jest na tej samej stronie, a jeden z użytkowników edytuje swój komentarz, drugi użytkownik zobaczy jego aktualizację.

#### Włączanie edytowania komentarzy

Skończyliśmy wprowadzać edytowanie komentarzy domyślnie dla wszystkich naszych klientów. Obecnie nie można tego wyłączyć.

#### Co dalej?

Planujemy również udostępnić możliwość usuwania komentarzy w przyszłej aktualizacji.

#### Integracje zewnętrzne

Edycja komentarza spowoduje propagację zdarzenia do wszystkich twoich integracji - takich jak WordPress. Jeśli używasz naszej wtyczki WordPress, dodanie komentarza aktualizuje
twoją instalację WordPress w tle, abyś zachował kopię swoich danych. Jeśli edytujesz komentarz, stosujemy tę samą logikę i aktualizujemy kopię w twojej instalacji WordPress.
To dotyczy innych integracji, nie tylko WordPressa.

#### Podsumowując

Wiadomo, że ta funkcja była długo oczekiwana przez niektórych. Jak wszystkie ważne wydania, cieszymy się, że mogliśmy poświęcić czas na optymalizację, testowanie i właściwe wprowadzenie tej funkcji.

Na zdrowie!

{{/isPost}}