---
[category:API & Development]
[category:Announcements]

###### [postdate]
# [postlink]Migracja FastComments do TypeScript Zakończona[/postlink]

{{#unless isPost}}
W przygotowaniu na następną dekadę rozwoju, przenieśliśmy jeden z największych komponentów FastComments do TypeScript.
{{/unless}}

{{#isPost}}

### <i class="circle">!</i> Ten Artykuł Zawiera Terminologię Techniczną

### Co Nowego

W FastComments cenimy języki z statycznym typowaniem. A konkretnie, lubię porządne systemy typów z szybkim kompilatorem. FastComments zaczęliśmy od tego drugiego - lub
braku kompilatora. Mieliśmy dwa serwisy napisane w nowoczesnym Java w pierwszym roku, główne biblioteki backendowe i frontendowe były napisane w CJS JS działającym na Node.

W przygotowaniu na następne dziesięciolecie rozwoju przenieśliśmy największe komponenty FastComments do TypeScript.

To wiązało się z migracją ponad 130k linii kodu (100k z tego to backend) w 1441 plikach oraz naprawą ponad 8000 błędów kompilacji.

<div class="text-center">
    <div class="sm">woooooo</div>
    <img src="images/ts-migration.png" alt="Zrzut ekranu z GitHub" title="Zrzut ekranu z GitHub" />
</div>

To zostało zrobione w ciągu dwóch tygodni.

### Zatrzymanie Wydania - Dziękujemy

Chciałbym podziękować naszym klientom za radzenie sobie z opóźnieniami w poprawkach błędów lub wydaniach funkcji, ponieważ dokonaliśmy dwutygodniowego zatrzymania wydania
aby dokończyć tę aktualizację. Dziękuję!

### Naprawione Błędy

Jak można się domyślić, naprawiliśmy kilka błędów. Dotyczyły one głównie wykrywania spamu i cache'owania.

### Zmiany Łamiące

- Wszystkie punkty końcowe API teraz zwracają status: 'failed' zamiast mieszanki "failed" i "failure" jako wartości statusu. "success" pozostaje bez zmian.
- Nie będziemy już domyślnie korzystać z pierwszej konfiguracji widgetu, jeśli nie ma dopasowania, zamiast tego zwrócimy domyślną konfigurację systemu.

### Jakie To Było?

Stwierdziliśmy, że, jak zwykle, wiele narzędzi w ekosystemie NPM do pomocy w tym zadaniu nie działało zbyt dobrze. Dlatego używaliśmy LLM do generowania
skryptów, aby wykonać dużą część pracy. Na przykład, intensywnie korzystaliśmy z JSDoc, więc mogliśmy napisać skrypty, które brały JSDoc i konwertowały je na interfejsy typescriptowe
i definicje typów, a także prawidłowo oznaczały argumenty funkcji i typy zwracane. Używaliśmy również tych skryptów do migracji z CJS do ESM, co obejmowało przepisywanie
importów, eksportów i wykrywanie typowych problemów w czasie działania, takich jak `__dirname`.

Czy wspomniałem o problemach w czasie działania?

### Jak Wygląda TypeScript w 2025 Roku?

TypeScript to ładny język do pisania logiki biznesowej. Jednak Java wciąż ma lepszą DevEx. Jeśli Java, Go lub Rust się kompilują, najprawdopodobniej będzie działać. Z TypeScript mogę zrobić coś takiego:

    console.log(__dirname);

... i to skompiluje się.

Ale nie uruchomi się, z nowoczesnymi modułami es. Twój IDE chętnie nawet uzupełni `__dirname`, a potem dojdzie do błędu w czasie działania. To przypomina Spring DI, ale w gorszej formie.

Możesz też robić rzeczy takie jak:

    context.someImportantMethodToCall;

Teraz, to jest "wyrażenie". To jest poprawne "wyrażenie". Na pierwszy rzut oka można pomyśleć, że wywołujemy `someImportantMethodToCall`, ale nie wywołujemy! Mój IDE, przynajmniej, nie
ostrzega o tym, a kompilator też. Kod po prostu nic nie zrobi (chyba że `someImportantMethodToCall` jest klasowym `getterem`, w takim przypadku jest wywoływane automatycznie...)

Poprawka to:

    context.someImportantMethodToCall();

Myślę, że prawdopodobnie można to wykryć czymś takim jak eslint i jakąś regułą "brak efektów ubocznych", ale potem wprowadzisz kolejny duży zestaw bibliotek do utrzymania, a
potem eslint musi analizować całe twoje źródło przy każdym budowie, narzędzia są wolne, itd. - dziękuję. Wpływ na produktywność wynikający z używania wolnych narzędzi takich jak eslint był
znacznie bardziej istotny w mojej karierze w poprzednich pracach niż "wzrost" produktywności, który kiedykolwiek otrzymałem z drobnych rzeczy, które eslint naprawia/zapobiega w zakresie odstępów itd. Są już dostępne szybsze alternatywy,
co jest świetne.

TypeScript jest naprawdę ładny dzięki funkcjom językowym takim jak `Pick<User, 'username', 'email'>`. To, w połączeniu z inferring typu, zapewnia sposób na posiadanie wyników zapytań w bezpiecznych typach z bazy danych dla podzbiorów
większych obiektów bez konieczności definiowania klasy dla każdego kształtu. `Pick` to coś, do czego jestem zaskoczony, że Scala tego nie ma. Typy Unii są również bardzo fajne.

Przyrostowe kompilacje działają również dość dobrze, zwiększyliśmy jedynie nasze czasy kompilacji w CI o około 5 - 10 sekund średnio, dla budowy biblioteki współdzielonej, frontendowej i backendowej.

### Harmonogram Rozwoju

Dla tych, którzy są ciekawi, oto jak wyglądał nasz postęp:

- Dzień Pierwszy: Znaleziono 5564 błędy w 362 plikach.
- Dzień Drugi: Znaleziono 4034 błędy w 239 plikach.
- Dzień Trzeci: Znaleziono 3784 błędy w 191 plikach.
- Dzień Czarty: Znaleziono 2974 błędy w 169 plikach.
- Dzień Piąty: Znaleziono 3000 błędów w 171 plikach.
- Dzień Szósty: Znaleziono 2916 błędów w 165 plikach.
- Dzień Siódmy: Znaleziono 2618 błędów w 157 plikach.
- Dzień Ósmy: Znaleziono 2253 błędy w 109 plikach.
- Dzień Dziewiąty: Znaleziono 1605 błędów w 69 plikach.
- Dzień Dziesiąty: Znaleziono 686 błędów w 53 plikach.
- Dzień 11: Testy jednostkowe backendu zaliczone
- Dzień 12: Rozpoczęcie migracji frontendowej, 3118 błędów.
- Dzień 13: Znaleziono 2172 błedy.
- Dzień 14: Znaleziono 1224 błędy.
- Dzień 15: Znaleziono 498 błędów.
- Dzień 16: Wszystkie błędy kompilacji naprawione.
- Dzień 17: Wydano. Testy E2E zaliczone. 30 minut przestoju podczas niespodziewanych problemów w czasie działania. :)

### Przyszłość

Zrobiliśmy to, aby wspierać rozwój przez następne dziesięciolecie. System jest teraz na tyle duży, że szybciej jest rozwijać z systemem typów niż bez niego.

Możesz również oczekiwać, że nasza biblioteka TypeScript na NPM poprawi się, ponieważ już zaczęła, ponieważ teraz stosujemy tę bibliotekę w naszym kodzie serwera i klienta.

Wkrótce również udostępnimy generowane SDK klienta bezpośrednio z kodu serwera, co było głównym motywem tego wysiłku.

### Podsumowanie

Jak przy każdym dużym wydaniu, cieszymy się, że mogliśmy poświęcić czas na optymalizację, testowanie i właściwe wydanie tych zmian. Daj nam znać
poniżej, jeśli odkryjesz jakiekolwiek problemy.

Na zdrowie!

{{/isPost}}

---