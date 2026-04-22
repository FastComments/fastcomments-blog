---
[category:Features]
[category:Moderation]
###### [postdate]
# [postlink]Zablokowane komentarze są teraz faktycznie zablokowane[/postlink]

{{#unless isPost}}
Ikona kłódki w końcu pojawia się przy zablokowanych komentarzach, a zablokowane komentarze nie mogą być już edytowane ani usuwane, dopóki admin ich nie odblokuje.
{{/unless}}

{{#isPost}}

### Co nowego

Moderatorzy już od dłuższego czasu mogą blokować komentarze. Zablokowanie komentarza zapobiega nowym odpowiedziom, co jest przydatne, gdy wątek osiągnął swój kres lub gdy sub-rozmowa odbiega od tematu.

Problem polegał na tym, że "zablokowane" nie miało dużego znaczenia. Czytelnicy nie mieli wizualnej wskazówki, że komentarz był zablokowany. I chociaż nowe odpowiedzi były zablokowane, oryginalny autor lub każdy z dostępem do edycji nadal mógł edytować lub usuwać komentarz. To naprawdę nie jest zablokowane. Ta aktualizacja naprawia oba te problemy.

### Ikona kłódki

Gdy moderator blokuje komentarz, mała kłódka pojawia się w prawym górnym rogu komentarza, tuż obok ikony pinezki. Pokazuje się to dla każdego czytelnika - a nie tylko dla moderatorów. Odblokowanie komentarza usuwa ikonę kłódki.

Ikona szanuje jasny i ciemny tryb, tak jak ikona pinezki.

### Edycja i usuwanie są zablokowane

Zablokowany komentarz nie może być edytowany ani usuwany przez nikogo, w tym administrację i moderatorów. Jeśli chcesz edytować lub usunąć zablokowany komentarz, najpierw go odblokuj, wprowadź zmiany, a następnie ponownie zablokuj, jeśli chcesz.

Dotyczy to każdej ścieżki, która dotyka komentarza:

- Widżet użytkownika ukrywa wpisy menu Edytuj i Usuń w zablokowanych komentarzach.
- Publiczne punkty końcowe API PATCH i DELETE zwracają błąd `locked`, jeśli docelowy komentarz jest zablokowany.
- UI moderacji administracji wyświetla błąd zablokowania, jeśli próbujesz usunąć bez wcześniejszego odblokowania.

### Wyjątki

Kilka ścieżek celowo omija blokadę, aby mogły pełnić swoją funkcję:

- Usunięcie konta. Jeśli użytkownik usunie swoje konto FastComments, jego komentarze są usuwane niezależnie od stanu blokady.
- Czyszczenie użytkowników w kontekście tenantów / SSO. Ta sama zasada dotyczy usuwania użytkowników na poziomie tenantów.
- Zaplanowane automatyczne usuwanie. Jeśli zaplanowałeś usunięcie komentarza na konkretny czas, harmonogram nie musi się martwić o blokady.
- Czyszczenie duplikatów. Narzędzie dedupe usuwa zablokowane duplikaty bez ceremonii.
- Zakazy moderatorów z opcją "usuń wszystkie komentarze tego użytkownika". Zbanowanie użytkownika i usunięcie jego historii jest pojedynczą zamierzoną akcją, która również usuwa blokady.

Wszystko inne - widżet, UI moderacji, publiczne API, zewnętrzni wywoływacze - respektuje blokadę.

### Kształt błędu API

Jeśli wywołasz publiczne API, aby edytować lub usunąć zablokowany komentarz, otrzymasz odpowiedź podobną do:

<div class="code">{
    "status": "failed",
    "code": "locked",
    "reason": "Komentarz jest zablokowany.",
    "translatedError": "Ten komentarz jest zablokowany i nie można go edytować ani usuwać. Najpierw odblokuj go."
}</div>

Status HTTP to 401. Pole `translatedError` używa skonfigurowanej lokalizacji twojego tenant'a i wszelkich niestandardowych tłumaczeń, które ustawiłeś.

### W konkluzji

Mała zmiana, ale zamyka lukę, która była otwarta przez jakiś czas. Zablokowane teraz oznacza zablokowane.

Pozdrawiam!

{{/isPost}}