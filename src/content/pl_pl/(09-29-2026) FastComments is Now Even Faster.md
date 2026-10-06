[category:Features]
[category:Performance]

###### [postdate]
# [postlink]FastComments jest teraz jeszcze szybszy[/postlink]

{{#unless isPost}}
Usunęliśmy jedno żądanie sieciowe przy ładowaniu widgetu komentarzy, co jeszcze bardziej skróciło czasy ładowania.
{{/unless}}

{{#isPost}}

### <i class="circle">!</i> Ten artykuł zawiera żargon techniczny

### Co nowego

Jak FastComments działał przez ostatnie pięć lat lub tak, to najpierw ładujemy mały skrypt, iframe się ładuje, potem skrypt, który zawiera jego stylizację, a następnie żądanie do API o wszystko, co potrzebne do wyświetlenia komentarzy. Choć brzmi to jak dużo, jest to bardzo kompaktowe w porównaniu z większością systemów!

Jednak teraz jest to nawet jedno żądanie mniej. Odpowiedź iframe, która dostarcza widget, zawiera również komentarze i wszystkie dane, których użytkownik potrzebuje początkowo, więc ostatnie żądanie do API zniknęło.

API pozostaje utrzymywane w celu zachowania kompatybilności wstecznej dla wszystkich, którzy na nim polegają.

### Brak konfiguracji

Nie ma żadnego ustawienia dla tego i nie ma wersji do aktualizacji. Jeśli osadzasz FastComments za pomocą naszego skryptu, masz to już wbudowane.

Twoja własna strona pozostaje niezmieniona w obu przypadkach. Widget nadal ładuje się w iframe i nadal nie blokuje Twojej treści, dokładnie tak jak wcześniej.

### Gdzie to nie ma zastosowania

Kilka ścieżek tego nie używa i zachowuje się dokładnie tak, jak zawsze:

- Boty wyszukiwarek, które już renderują komentarze bezpośrednio na stronie, a nie w iframe
- Kanały aktywności użytkowników i filtrowanie hashtagów, które odczytują z różnych endpointów

### Podsumowanie

Mamy nadzieję, że nadal będziesz cieszyć się korzystaniem z naszej platformy i że wprowadzone przez nas ulepszenia przyniosą wartość. :)

Pozdrawiamy!

{{/isPost}}