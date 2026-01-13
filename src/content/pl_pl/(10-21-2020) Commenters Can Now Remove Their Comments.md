---
[category:Features]
###### [postdate]
# [postlink]Komentujący mogą teraz usuwać swoje komentarze[/postlink]

{{#unless isPost}}
Wyczekiwana aktualizacja, teraz możesz usuwać swoje komentarze zostawione za pomocą FastComments.
{{/unless}}

{{#isPost}}

### <i class="circle">!</i> Ten artykuł zawiera terminologię techniczną

#### Co nowego

Jak niedawno ogłoszono - komentarze zostawione za pomocą FastComments mogą być teraz edytowane - niezależnie od tego, czy jesteś zalogowany, czy nie.

<img src="images/fc-deleting-demo.gif" alt="Usuwanie Demo GIF (11mb)" title="Usuwanie Demo" />

W ramach kontynuacji, możliwość usuwania swoich komentarzy została wydana. Zrozumiałe, podobnie jak edytowanie komentarzy, była to jedna z najczęściej zgłaszanych funkcji, i cieszymy się, że osiągnęliśmy ten kamień milowy z naszą bazą użytkowników.

#### Jak to działa

Usuwanie komentarzy działa tak samo jak edytowanie - zalogowani użytkownicy zawsze mogą edytować i usuwać swoje komentarze. Dla anonimowych komentujących, nasze serwery zapewniają tymczasowe 24-godzinne okno, w którym mogą edytować lub usuwać swój komentarz po
skomentowaniu, o ile nie zamkną przeglądarki. Na przykład oznacza to, że anonimowy komentator może skomentować, a następnie edytować swój komentarz, aby poprawić wszelkie literówki lub usunąć go, bez konieczności logowania się!

Jeśli anonimowy komentator zamknie przeglądarkę, nie będzie mógł edytować ani usuwać swojego komentarza, chyba że kliknie magiczny link wysłany na jego adres email.

Dla dodatkowego bezpieczeństwa tymczasowy klucz edycyjny zostanie unieważniony przy każdej próbie jego błędnego odgadnięcia.

#### Dlaczego teraz, po tak długim czasie?

Racjonalne uzasadnienie dla tego jest takie samo, jak dlaczego edytowanie zajęło tak długo, aby zostało wydane. Chcieliśmy upewnić się, że nie wpłynie to na wydajność FastComments i chcieliśmy mieć pewność, że działa to poprawnie z naszymi funkcjami komentowania na żywo. Ponadto, chcieliśmy, aby ta funkcja
dostosowała się do najczęściej występującego przypadku użycia naszych klientów - anonimowego komentowania.

#### Usuwanie komentarzy na żywo

Tak jak w przypadku komentowania i głosowania - usuwanie odbywa się na żywo. Jeśli dwóch użytkowników jest na tej samej stronie, a jeden użytkownik usuwa swój komentarz, drugi użytkownik zobaczy, że został on usunięty.

#### Włączanie usuwania komentarzy

Zakończyliśmy wprowadzanie edytowania i usuwania komentarzy domyślnie dla wszystkich naszych klientów. Obecnie nie ma możliwości wyłączenia tej funkcji.

#### Integracje zewnętrzne

Usunięcie komentarza spowoduje propagację wydarzenia do wszystkich integracji, które masz - jak WordPress. Jeśli korzystasz z naszej wtyczki do WordPressa, dodanie komentarza aktualizuje
twoją instalację WordPressa w tle, aby zachować kopię twoich danych. Jeśli usuwasz komentarze, stosujemy tę samą logikę i usuwamy je z twojej instalacji WordPressa. Dotyczy to innych integracji, nie tylko WordPressa.

#### Na zakończenie

Wiemy, że ta funkcja była długo oczekiwana przez niektórych. Jak w przypadku wszystkich ważnych wydań, cieszymy się, że mogliśmy poświęcić czas na optymalizację, testowanie i właściwe wydanie tej funkcji.

Na zdrowie!

{{/isPost}}