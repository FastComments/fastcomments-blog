---
[category:Security]

###### [postdate]
# [postlink]FastComments teraz obsługuje ścisłe ustawienia ciasteczek stron trzecich[/postlink]

{{#unless isPost}}
Do tej pory FastComments wymagało włączenia ciasteczek stron trzecich, aby działać w pełni. To już nie jest konieczne!
{{/unless}}

{{#isPost}}

### Co nowego

Wyłączanie ciasteczek stron trzecich domyślnie staje się normą w przeglądarkach z orientacją na prywatność. Przykładem jest Safari od Apple na iOS, gdzie
jeśli zostawisz swój adres e-mail, aby skomentować za pomocą FastComments, zweryfikujesz ten komentarz, a następnie wrócisz na tę stronę, aby zostawić kolejny komentarz lub odpowiedzieć
komuś, odkryjesz, że wszelkie dalsze komentarze, które zostawisz, będą oznaczone jako nieweryfikowane.

To zdarzy się tylko w domyślnej konfiguracji, która pokazuje etykietę `Nieweryfikowane` na komentarzach. Jednak może to wpłynąć na inne rzeczy, takie jak automatyczne zatwierdzanie,
jeśli automatyczne zatwierdzanie jest włączone tylko dla zweryfikowanych komentarzy.

Jak możesz sobie wyobrazić, może to prowadzić do frustrującego zachowania, gdzie użytkownik weryfikuje swój komentarz, klika "Pozostaw mnie zalogowanym", a następnie
nadal nie jest zalogowany, gdy odwiedza twoją stronę lub aplikację. Zauważ, że to nie dotyczy integracji SSO, ponieważ SSO nie zależy
od ciasteczek.

Teraz, z nowym ustawieniem, które można włączyć o nazwie `Włącz okno popup z ciasteczkami stron trzecich` w ustawieniach widżetu, ten problem został rozwiązany poprzez
otwarcie okna popup, które pobiera ciasteczko użytkownika. Na razie dzieje się to tylko, jeśli interagują z widżetem komentarzy, ale efektem jest to, że
komentarz zostanie opublikowany z ich sesji FastComments.com, co oznacza, że ich komentarz jest zweryfikowany, i tak dalej.

### Jak to uzyskać i dokumentacja

Wszyscy klienci FastComments na wszystkich poziomach mają teraz dostęp do tej funkcji. Sprawdź [dokumentację](https://docs.fastcomments.com/guide-customizations-and-configuration.html#enable-third-party-cookie-bypass), aby dowiedzieć się, jak włączyć omijanie ciasteczek stron trzecich.

### Na koniec

Jak przy wszystkich dużych wydaniach, cieszymy się, że mogliśmy poświęcić czas na optymalizację, testowanie i prawidłowe wydanie tej funkcji. Daj nam znać
poniżej, jeśli odkryjesz jakiekolwiek problemy.

Na zdrowie!

{{/isPost}}