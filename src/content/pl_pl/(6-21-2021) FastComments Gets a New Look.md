---
[category:UI & Customization]
###### [postdate]

# [postlink]FastComments Zyskuje Nowy Wygląd[/postlink]

{{#unless isPost}} FastComments został zaktualizowany. Dowiedz się o aktualizacji i jak możesz ją uzyskać. {{/unless}}

{{#isPost}}

### <i class="circle">!</i> Artykuł Zawiera Żargon Techniczny

### Nowy Wygląd

Do dzisiaj wygląd i odczucia związane z widgetem komentarzy FastComments ewoluowały tylko w sposób stopniowy. Dziś wydajemy
całkiem nową wersję!

Sprawdź porównanie poniżej (przeciągnij suwak, aby porównać):

<div class="text-center">
    <div class="screenshot-comparison twentytwenty-container">
      <img src="images/fc-redesign-old.png" />
      <img src="images/fc-redesign-new.png" />
    </div>
</div>

### Istniejący Klienci

Ponieważ wielu naszych użytkowników dostosowuje widget komentarzy, nowy interfejs UI został całkowicie oddzielony. Nie powinieneś zauważyć
zmian, dopóki nie zostaniesz przeniesiony.

### Kto To Otrzyma

Nowi klienci, którzy zapiszą się od dzisiaj, automatycznie otrzymają nowy design. Wszystkie nasze frameworki, biblioteki i
wtyczki zostały zaktualizowane, aby uwzględnić nową wersję widgetu komentarzy FastComments.

### Koniec Wsparcia Dla Poprzedniej Wersji

Obecnie nie ustalamy terminu końca wsparcia dla poprzedniej wersji widgetu komentarzy. To nie oznacza, że nie ogłosimy jednego w
przyszłości. Jednak gdy to zrobimy, damy rozsądny margines (6 - 12 miesięcy od ogłoszenia do wycofania).

Nasz zestaw testów automatycznych został zaktualizowany, aby wspierać różne wersje widgetu komentarzy, dzięki czemu poprzednia wersja
nadal będzie poddawana ciągłym testom automatycznym.

### Tryb Ciemny i Inne Funkcje

Nowy design wspiera tryb ciemny, tak jak oryginalny widget komentarzy. Wszystkie flagi funkcji i ustawienia zostały przeniesione.

Jeśli chodzi o tryb ciemny, w starym interfejsie UI komentarzy, zasoby dla trybu ciemnego były zawsze dołączane podczas ładowania
strony, nawet jeśli nie były używane. To około dodatkowych 2kb, które zawsze były pobierane przez klienta - nawet jeśli nie
były potrzebne.

Nowa wersja widgetu komentarzy pobiera te zasoby, w tym stylizacje, tylko w razie potrzeby.

### Domyślny Awatar

Domyślny awatar używany w nowym interfejsie UI jest inny. Po migracji, domyślny awatar używany w całym produkcie w panelu
administracyjnym i wszystkich e-mailach powiadamiających również zostanie zaktualizowany.

### Implikacje Zasad Dostosowywania

Jesteśmy świadomi, że gdy wprowadzamy zmiany stylizacji w publicznie dostępnym widgetcie komentarzy, możemy złamać dostosowania
naszych klientów. Nie martw się, mamy cię pod opieką i przeszliśmy przez stylizacje widgetów dostosowanych przez wszystkich, aby
upewnić się, że nie uległy regresji. Jednak jeśli zauważasz problemy, daj nam znać.

### Implikacje Wydajności

Całkowity rozmiar widgetu komentarzy wzrósł z 15.4kb do 17.4kb. Choć uważamy, że niewielki wzrost rozmiaru pakietu w
porównaniu do tego, jak dużo lepiej wygląda interfejs UI, jest warte tego, zaplanowaliśmy środki, aby zredukować ten rozmiar.

Ogólnie rzecz biorąc, nowy interfejs UI ładuje się szybciej, ponieważ więcej zasobów jest teraz zgrupowanych razem, co skutkuje mniejszą
liczbą żądań.

### Jak Migracja

#### Poprzez Wsparcie

Po prostu skontaktuj się z przedstawicielem swojego wsparcia lub rozpocznij rozmowę [tutaj](https://fastcomments.com/auth/my-account/help).

#### WordPress

Jeśli używasz **WordPress**, po prostu zaktualizuj do najnowszej wersji i zaktualizuj wszelkie dostosowane stylizacje, które możesz mieć.

#### Dostosowane Integracje

Jeśli używasz widgetu komentarzy **VanillaJS**, po prostu zmień:

        <script src="https://cdn.fastcomments.com/js/embed.min.js"></script>

Na:

        <script src="https://cdn.fastcomments.com/js/embed-v2.min.js"></script>

Jeśli używasz bibliotek **React, Angular lub Vue**, po prostu zaktualizuj do wersji 2.

### Nieco Nerdowskich Statystyk

Od koncepcji, przez design, po implementację, był to projekt trwający dwa miesiące, który obejmował **ponad 100 plików** i
zmienił ponad **dziewięć tysięcy linii kodu**.

Zupełnie przeprojektowaliśmy również nasz system budowy, aby móc mieć wspólną bazę kodu pomiędzy wersjami widgetu komentarzy. Ten system pozwala nam wykorzystywać wyrażenia w czasie kompilacji, by dołączać tylko kod dla odpowiedniej wersji
interfejsu UI, co zmniejsza rozmiar pakietu widgetu.

### Myślenie Przyszłościowe

Poprzedni design trwał od 2019 roku do połowy 2021 roku. Mamy nadzieję, że ten nowy wygląd poprowadzi nas dalej w przyszłość, a nasza
nowa infrastruktura do zarządzania wieloma wersjami interfejsu komentarzy pozwoli FastComments rozwijać się bez zakłóceń dla naszej
bazy klientów w czasie.

Szczęśliwego komentowania!

<link href="image-compare/twentytwenty.css" rel="stylesheet" type="text/css" />
<script src="https://ajax.googleapis.com/ajax/libs/jquery/1.10.2/jquery.min.js"></script> 
<script src="image-compare/jquery.twentytwenty.js"></script> 
<script src="image-compare/jquery.event.move.js"></script>
<script src="image-compare/new-look.js"></script>

{{/isPost}}

---