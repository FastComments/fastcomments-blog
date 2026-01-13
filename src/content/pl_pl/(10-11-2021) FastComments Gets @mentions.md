---
[category:Features]
###### [postdate]
# [postlink]FastComments Zyskuje @wzmianki[/postlink]

{{#unless isPost}}
Czy kiedykolwiek chciałeś @wzmiankować jednego lub więcej użytkowników w komentarzu? Teraz możesz.
{{/unless}}

{{#isPost}}

### Co nowego

Chociaż wcześniej FastComments powiadamiało użytkowników, gdy odpowiadałeś na ich komentarze, nie było możliwości oznaczenia wielu osób w jednym komentarzu. Ponadto, powiadomienia były wysyłane w partiach co godzinę. Dzięki `@wzmiankom`, teraz możesz oznaczyć jednego lub więcej użytkowników, a FastComments powiadomi ich od razu za pośrednictwem e-maila.

### Jak to używać

Podczas pisania `@`, a następnie początku imienia użytkownika, pojawi się lista wyników wyszukiwania.

<div class="text-center">
    <img src="images/fc-mentions.png" alt="Użycie Wzmianków" title="@wzmianki Demo" />
</div>

Po prostu kliknij nazwisko użytkownika, którego chcesz oznaczyć.

Dodatkowo, możesz użyć klawiszy strzałek w górę i w dół do nawigacji w tej liście, i nacisnąć enter, aby wybrać, lub escape, aby wyjść.

Wiemy, że możesz chcieć użyć symbolu `@` bez oznaczania użytkownika. FastComments wykryje to i nie zakłóci twojego doświadczenia pisania.

### Kto to zyskuje

Wszyscy obecni i nowi klienci FastComments, we wszystkich poziomach, mają teraz dostęp do `@wzmianków`. `@wzmianki` zostały wprowadzone do wcześniejszych wersji widżetu komentarzy.

### Jak działa autouzupełnianie

Użytkownicy wyświetleni na liście autouzupełniającej są określani przez:

- Użytkowników, którzy komentowali tę samą stronę lub wątek.
- Użytkowników, którzy stworzyli swoje konta FastComments przez tę samą stronę.
- Moderatorów bieżącej strony.
- Użytkowników SSO, którzy należą do bieżącego najemcy.

### Edytowanie komentarzy

Wzmianki można dodać do istniejących komentarzy poprzez ich edytowanie. Jednak aplikacja `Moderuj komentarze` obecnie nie autouzupełnia `@wzmianek`.

### Rozważania na przyszłość

W przyszłości użytkownicy, którzy mają otwarte FastComments w oknie przeglądarki, otrzymają powiadomienie, gdy będą wzmiankowani, jeśli zapisali się na powiadomienia.

### Podsumowując

Podobnie jak reszta FastComments, mamy nadzieję, że uznasz tę funkcję za szybką i łatwą w użyciu.

Na zdrowie!

{{/isPost}}