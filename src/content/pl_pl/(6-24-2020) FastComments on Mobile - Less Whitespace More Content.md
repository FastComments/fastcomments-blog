---
[category:UI & Customization]
###### [postdate]
# [postlink]FastComments na urządzeniach mobilnych - mniej pustej przestrzeni, więcej treści[/postlink]

{{#unless isPost}}
Poprawiliśmy czytelność i wygląd FastComments na urządzeniach mobilnych.
{{/unless}}

{{#isPost}}
#### Problem

Kiedy po raz pierwszy wydaliśmy FastComments, chcieliśmy elegancki design, który dobrze działałby zarówno na urządzeniach mobilnych, jak i na przeglądarkach desktopowych. Jednakże, gdy dodawaliśmy więcej funkcji i obserwowaliśmy interakcje użytkowników z FastComments, zdaliśmy sobie sprawę, że marnujemy przestrzeń na ekranie w naszym interfejsie mobilnym, starając się go "upiększyć".

Tak więc, znaleźliśmy kompromis.

#### Rozwiązanie

Tutaj możesz zobaczyć, że wcześniej nie wykorzystywaliśmy przestrzeni w bardzo efektywny sposób.

<div class="text-center">
    <img 
        src="images/mobile-v1.png"
        alt="Wersja mobilna przed"
        title="Wersja mobilna przed"
        class='lozad' />
</div>

Teraz wymieniliśmy pionową przestrzeń na ekranie na poziomą przestrzeń na ekranie.

<div class="text-center">
    <img 
        src="images/mobile-v2.png"
        alt="Wersja mobilna po"
        title="Wersja mobilna po"
        class='lozad' />
</div>

    
#### Implkacje dotyczące dostosowania

Jesteśmy świadomi, że wprowadzając zmiany w stylizacji publicznego widgetu komentarzy, możemy naruszyć personalizacje naszych klientów. Nie martw się, mamy to pod kontrolą i sprawdziliśmy stylizację wszystkich niestandardowych widgetów, aby upewnić się, że nie zostały uszkodzone. Jeśli jednak napotykasz problemy, daj nam znać.

#### Implkacje dotyczące wydajności

Ta zmiana zwiększyła rozmiar widgetu o około 300 bajtów, co łącznie dało 10,1 kb. Jak przy wszystkich wydaniach, które zwiększają rozmiar widgetu, będziemy szukać sposobów, aby go zmniejszyć.

Szczęśliwego komentowania!

{{/isPost}}

---