---
[category:Features]

###### [postdate]
# [postlink]Wydanie nazw wyświetlanych[/postlink]

{{#unless isPost}}
FastComments zawsze wspierał nazwy wyświetlane dla użytkowników SSO. Jednak nigdy nie były one udostępniane zwykłym komentatorom. Dziś to się zmienia!
{{/unless}}

{{#isPost}}

### Co nowego

FastComments zawsze wspierał nazwy wyświetlane dla użytkowników SSO. Jednak nigdy nie były one udostępniane zwykłym komentatorom. Dziś to się zmienia!

Na stronie [Szczegóły konta](https://fastcomments.com/auth/my-account/edit-details) możesz teraz uzupełnić nowe pole `Nazwa wyświetlana`. `Nazwa wyświetlana` będzie 
wyświetlana przy twoich komentarzach oraz na twoim profilu.

### Emojis

W przeszłości użytkownicy mieli trudności z używaniem emotikonów w nazwach użytkowników, ponieważ aby się zalogować, trzeba było wpisać swoją nazwę użytkownika. Jednak teraz `Nazwa wyświetlana` może zawierać emotikony.

### Unikalność i nadużycia

Celem `Nazwy wyświetlanej` jest to, że nie jest unikalna. Jeśli dwóch użytkowników FastComments.com, w dwóch bardzo różnych dużych społecznościach, będzie miało podobne imiona, chcielibyśmy, aby mogli po prostu ustawić swoją preferowaną nazwę wyświetlaną. Jednak nie możemy ograniczać miejsc, w których ludzie komentują ze swoim globalnym kontem FastComments, więc czasami może to prowadzić do zamieszania.

Posiadanie podobnej nazwy do innego użytkownika lub moderatora samo w sobie nie jest przypadkiem nadużycia. Jednak jeśli nadużywasz tego, celowo udając innych użytkowników, możemy wyłączyć tę funkcję na twoim koncie, a ty będziesz ograniczony do korzystania tylko z `username`.

### Logowanie

Wciąż używasz swojej nazwy użytkownika do logowania - **nie swojej nazwy wyświetlanej!**

### Dla deweloperów i pułapki

Zwykłe obiekty `User` udostępnione za pośrednictwem API mają teraz `displayName`.

### Podsumowując

Jak w przypadku wszystkich większych wydań, cieszymy się, że mogliśmy poświęcić czas na optymalizację, testowanie i właściwe wydanie tej funkcji. Daj nam znać 
poniżej, jeśli odkryjesz jakiekolwiek problemy.

Na zdrowie!

{{/isPost}}

---