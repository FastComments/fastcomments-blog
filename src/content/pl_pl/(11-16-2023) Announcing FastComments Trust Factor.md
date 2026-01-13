---
[category:AI & Machine Learning]

###### [postdate]
# [postlink]Ogłaszamy FastComments Trust Factor[/postlink]

{{#unless isPost}}
FastComments teraz używa więcej heurystyk w określaniu, co jest spamem, a co nie.
{{/unless}}

{{#isPost}}

### Co nowego

Od 16 listopada 2023 FastComments rozpoczął rozszerzanie sposobów określania wiarygodności
użytkowników, aby zredukować frustrację związaną z filtrami spamowymi.

### Wpływ na użytkowników

Jeśli jesteś długoletnim członkiem istniejącej strony i Twoje komentarze były łapane
przez filtr spamowy, ta zmiana jest dla Ciebie.

Otrzymaliśmy liczne zgłoszenia od użytkowników na stronach, które robią rzeczy, których filtry spamowe nie lubią, takie jak udostępnianie dużej liczby linków itp., a te
komentarze trafiają do spamu i są albo blokowane, albo czekają na akceptację moderatora w zależności od konfiguracji strony.

### Wpływ na administratorów i moderatorów strony

1. Możesz zauważyć, że mniej komentarzy automatycznie oznaczanych jest jako spam od Twoich najbardziej aktywnych użytkowników.
2. To nie zmienia detekcji spamu na podstawie czarnej listy słów/fraz. Wulgaryzmy i filtrowane frazy nadal spowodują, że komentarze trafią do spamu, jeśli masz taką konfigurację.

Liczba Trust Factor nie jest obecnie udostępniana administratorom ani moderatorom stron, jednak
jest to coś, co zbadamy w przyszłości.

### Jak obliczany jest Trust Factor

Trust Factor to liczba od `0` do `100` i jest utrzymywana na poziomie każdej strony.

Następujące zmienne są używane do określenia Trust Factor:

- Czas interakcji z witryną.
- Liczba zatwierdzonych komentarzy.
- Liczba przypiętych komentarzy.

Jeśli jesteś członkiem strony przez ponad sześć miesięcy i zostawiłeś ponad 50 zatwierdzonych komentarzy,
będziesz miał doskonały wynik zaufania `100`.

W przeciwnym razie wzór wygląda następująco i będzie ewoluował w czasie:

    min((timeFactor + commentFactor + pinFactor) / 3, 100)

Gdzie:

    timeFactor = 100 * TimeSinceFirstComment / SixMonths
    commentFactor = NumberOfApprovedComments
    pinFactor = NumberOfPinnedComments * 20

Możesz zauważyć `* 20` tutaj - przypięte komentarze mają dużą wagę. Jeśli moderatorzy przypinają
Twoje komentarze, prawdopodobnie jesteś uważany za dość zaufanego użytkownika.

### Dla deweloperów i pułapki

W API, `UserBadgeProgress` teraz ma `autoTrustFactor` i `manualTrustFactor` udostępnione.

`autoTrustFactor` jest obliczany przez nas i nie można go zapisywać za pomocą API.

Jeśli chciałbyś samodzielnie skonfigurować Trust Factor, możesz zdefiniować `manualTrustFactor`. System
wtedy użyje tej wartości zamiast, a my będziemy kontynuować oddzielne utrzymanie wartości `autoTrustFactor`.

### Nadużycia Trust Factor

Jak we wszystkich sprawach, spodziewamy się, że to będzie nadużywane. Ludzie nawiążą relacje z społecznością i potem użyją
konto do publikowania spamu. Jednak uważamy, że z rozsądnie ustawionymi wartościami domyślnymi (sześć miesięcy, 50+ komentarzy) ustawiamy poprzeczkę
na tyle wysoko, aby większości spamerów się to nie opłacało. Gdy zaczną publikować spam, ich konto może być natychmiast
zablokowane przez moderatorów. W przyszłości możemy także pozwolić moderatorom dostosować Trust Factor.

### Podsumowanie

Jak w przypadku wszystkich dużych wydań, cieszymy się, że mogliśmy poświęcić czas na optymalizację, testowanie i odpowiednie wydanie tej funkcji. Dajcie nam znać
poniżej, jeśli odkryjesz jakiekolwiek problemy.

Na zdrowie!

{{/isPost}}

---