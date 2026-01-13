---
[category:Features]
###### [postdate]
# [postlink]Sortowanie wątków komentarzy z FastComments[/postlink]

{{#unless isPost}}
Od momentu uruchomienia, FastComments nie pozwalał na zmianę porządku sortowania wątku komentarzy. To się zmienia w tej wersji!
{{/unless}}

{{#isPost}}

#### Grupa docelowa

Grupa docelowa tego artykułu składa się zarówno z administratorów, jak i komentujących.

#### Wprowadzenie

Komentarze zawsze były sortowane za pomocą kombinacji ich wieku i karmy (głosów w górę i w dół). Do tej pory
to był jedyny dozwolony kierunek sortowania.

#### Nowe kierunki sortowania

Widgec komentarzy FastComments teraz dodatkowo obsługuje sortowanie według Najnowsze i Najstarsze.

#### Zmiana kierunku sortowania

Gdy liczba komentarzy na poziomie podstawowym jest większa niż jeden, pojawi się nowe rozwijane menu umożliwiające zmianę kierunku sortowania.

<div class="text-center">
    <img src="images/fc-sort-dropdown.png" alt="Menu rozwijane wyboru sortowania" title="Menu rozwijane wyboru sortowania" />
</div>

Podczas wyboru Najnowsze lub Najstarsze nie uwzględniamy karmy komentarza.

#### Zmiana domyślnego kierunku sortowania

Chociaż domyślny kierunek sortowania to Najbardziej istotne, domyślny kierunek sortowania można łatwo dostosować, tworząc <a href="https://fastcomments.com/auth/my-account/customize-widget" target="_blank">zasadę personalizacji</a>.

#### Przyspieszanie działania

Aby FastComments mogło nadal spełniać swoje imię, znaczna ilość czasu została poświęcona na zapewnienie,
że sortowanie odbywa się w sposób dobrze zoptymalizowany. Komentarze są sortowane w miarę ich dodawania, więc żadne rzeczywiste sortowanie nie odbywa się podczas ładowania strony. Zapewnia to, że ładowanie widżetu komentarzy i zmiana kierunku sortowania jest szybka, niezależnie od tego, ile komentarzy posiadasz.

#### Podsumowując

Mamy nadzieję, że uznałeś tę aktualizację za pomocną. Zachęcamy do komentowania poniżej w razie jakichkolwiek pytań.

Pozdrawiamy!

{{/isPost}}