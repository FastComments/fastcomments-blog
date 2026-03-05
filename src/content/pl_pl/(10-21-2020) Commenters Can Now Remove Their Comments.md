---
[category:Features]
###### [postdate]
# [postlink]Komentujący mogą teraz usuwać swoje komentarze[/postlink]

{{#unless isPost}}
Oczekiwana aktualizacja, teraz możesz usunąć swoje komentarze zostawione w FastComments.
{{/unless}}

{{#isPost}}

### <i class="circle">!</i> Ten artykuł zawiera terminologię techniczną

#### Co nowego

Jak ostatnio ogłoszono - komentarze zostawione w FastComments mogą teraz być edytowane - niezależnie od tego, czy jesteś zalogowany, czy nie.

<video src="images/fc-deleting-demo.mp4" autoplay loop muted playsinline title="Demonstracja usuwania"></video>

W ramach kontynuacji, możliwość usuwania swoich komentarzy została wprowadzona. Zrozumiale, podobnie jak edytowanie komentarzy, była to jedna z najczęściej zgłaszanych przez nas funkcji, i cieszymy się, że osiągnęliśmy ten kamień milowy z naszą bazą użytkowników.

#### Jak to działa

Usuwanie komentarzy działa tak samo jak edytowanie - zalogowani użytkownicy zawsze mogą edytować i usuwać swoje komentarze. Dla anonimowych komentujących, nasze serwery zapewniają tymczasowe 24-godzinne okno, aby mogli edytować lub usuwać swój komentarz po
skomentowaniu, pod warunkiem, że nie zamkną swojej przeglądarki. Na przykład oznacza to, że anonimowy komentujący może skomentować, a następnie edytować swój komentarz, aby poprawić wszelkie błędy, lub go usunąć, bez logowania się!

Jeśli anonimowy komentujący zamknie swoją przeglądarkę, nie będzie mógł edytować ani usuwać swojego komentarza, chyba że kliknie magię linku wysłanego na jego adres e-mail.

Dla dodatkowego bezpieczeństwa, tymczasowy klucz edycji zostanie unieważniony przy każdej próbie błędnego odgadnięcia klucza.

#### Dlaczego teraz, po tak długim czasie?

Racjonalne uzasadnienie jest takie samo jak powód, dla którego edytowanie zajęło tak długo do wydania. Chcieliśmy upewnić się, że nie wpłynie to negatywnie na wydajność FastComments i chcieliśmy upewnić się, że działa poprawnie z naszymi funkcjami komentowania na żywo. Również chcieliśmy, aby ta funkcja
dostosowała się do najczęstszych przypadków użycia naszych klientów - anonimowego komentowania.

#### Usuwanie komentarzy na żywo

Tak jak komentowanie i głosowanie - usuwanie odbywa się na żywo. Jeśli dwóch użytkowników znajduje się na tej samej stronie, a jeden użytkownik usuwa swój komentarz, drugi użytkownik zobaczy, że został usunięty.

#### Włączanie usuwania komentarzy

Zakończyliśmy wprowadzanie edytowania i usuwania komentarzy domyślnie dla wszystkich naszych klientów. Obecnie nie można tego wyłączyć.

#### Integracje zewnętrzne

Usunięcie komentarza spowoduje propagację zdarzenia do wszelkich zintegrowanych systemów, które posiadasz - jak WordPress. Jeśli korzystasz z naszej wtyczki WordPress, dodanie komentarza aktualizuje
Twoją instalację WordPress w tle, abyś zachował kopię swoich danych. Jeśli usuniesz komentarze, stosujemy tę samą logikę i usuwamy je z Twojej instalacji WordPress. Dotyczy to innych integracji, a nie tylko WordPressa.

#### Podsumowując

Wiemy, że ta funkcja była długo oczekiwana przez niektórych. Jak to bywa w przypadku wszystkich dużych wydań, cieszymy się, że mogliśmy poświęcić czas na optymalizację, testowanie i odpowiednie wydanie tej funkcji.

Na zdrowie!

{{/isPost}}