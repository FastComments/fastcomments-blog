[category:Features]
[category:Moderation]

###### [postdate]
# [postlink]Zbanowani Użytkownicy Są Teraz Wyszukiwalni[/postlink]

{{#unless isPost}}
Strona z zbanowanymi użytkownikami ma teraz wiersz wyszukiwania, więc możesz znaleźć zakaz według e‑maila, imienia, osoby, która go wydała, lub komentarza, który go spowodował.
{{/unless}}

{{#isPost}}

### Co nowego

Strona z zbanowanymi użytkownikami w sekcji Moderuj komentarze ma teraz wiersz wyszukiwania nad tabelą. Do tej pory jedynym sposobem przeglądania tej listy były kontrolki Strona i Liczba na stronę, co jest w porządku, gdy masz kilkanaście zakazów, ale uciążliwe, gdy masz kilka tysięcy.

Istnieją trzy kontrolki: **Search By** wybiera pole, **Match** wybiera Contains lub Equals, a **Value** to to, czego szukasz.

### Co możesz wyszukać

**Search By** oferuje pięć opcji:

- **Any Field** – przeszukuje wszystko poniżej jednocześnie
- **Email** – zbanowany adres
- **Name** – nazwa zapisana w zakazie
- **Banned By** – moderator, który wydał zakaz
- **Banned For Saying** – tekst komentarza, który spowodował zbanowanie użytkownika

Ostatnie cztery odpowiadają kolumnom o tej samej nazwie w tabeli, więc rozwijane menu jest takie samo jak element, który filtruje.

### Zawiera vs Równa się

**Contains** znajduje twoją wartość w dowolnym miejscu pola. **Equals** dopasowuje całe pole.

Zazwyczaj chcesz używać Contains. Wyszukiwanie `bademail.com` znajdzie każdy zakaz na tę domenę, w tym zakaz z wildcardem `*@bademail.com`, ponieważ zakazy wildcard są przechowywane z gwiazdką.

Equals służy, gdy masz dokładną wartość i nie chcesz wyników przybliżonych. Wyszukiwanie w polu Email `spammer@example.com` z opcją Equals zwróci tylko ten jeden zakaz i nic więcej.

Obie opcje są niewrażliwe na wielkość liter w każdym polu. Ma to większe znaczenie niż się wydaje: gdy zakaz jest tworzony z komentarza, tylko część domenowa adresu jest zamieniana na małe litery, więc zakaz może być rzeczywiście zapisany jako `MixedCase@Example.com`. Wyszukiwanie `mixedcase@example.com` go znajdzie.

### Dwa wyszukiwania, które warto znać

**Banned For Saying** przeszukuje tekst komentarza, który wywołał zakaz. Jeśli określona fraza lub link rozprzestrzeniły się, możesz w jednej zapytaniu wyświetlić wszystkich, którzy zostali zbanowani z tego powodu.

**Banned By** przeszukuje moderatora, który wydał zakaz. Jeśli chcesz przejrzeć decyzje konkretnego moderatora lub wprowadzasz kogoś i chcesz zobaczyć, co robił, to jedno wyszukiwanie wystarczy.

### Działa z paginacją i udostępnianiem

Wyszukiwanie jest zapisane w URL strony, więc przewijanie wyników zachowuje je zastosowane i możesz wysłać przefiltrowaną listę innemu moderatorowi, kopiując URL, tak jak już udostępniasz linki moderacyjne. Rozpoczęcie nowego wyszukiwania przenosi cię z powrotem do pierwszej strony, a **Clear** przywraca pełną listę.

### Wyszukiwanie po nazwie odzwierciedla to, co widzisz

Zakaz przechowuje nazwę, jaką użytkownik miał w momencie banowania, ale tabela wyświetla nazwę, którą ma teraz. Nie zawsze są one takie same, a zakaz utworzony wpisaniem adresu e‑mail nie ma w ogóle zapisanej nazwy.

Dlatego wyszukiwanie po nazwie rozwiązuje użytkownika stojącego za każdym zakazem i dopasowuje się do nazwy, którą tabela faktycznie wyświetla. Jeśli ktoś został zbanowany jako „OldHandle” i od tego czasu zmienił nazwę na „NewHandle”, oba wyszukiwania go znajdą. Jeśli zbanowałeś adres, a tabela wyświetla dla niego nazwę, wyszukiwanie tej nazwy działa.

### Dokumentacja

<a href="https://docs.fastcomments.com/guide-moderation.html#banning-users" target="_blank">Sekcja Banning Users w Przewodniku Moderacji</a> opisuje wiersz wyszukiwania szczegółowo.

### Podsumowanie

To rozwiązanie powstało po obserwacji, jak strona jest faktycznie używana. Zakazy gromadzą się cicho przez lata, a potem pewnego dnia potrzebujesz znaleźć konkretny i nie ma sposobu, by to zrobić. Teraz jest.

Daj nam znać poniżej, jeśli jest pole, które chciałbyś móc przeszukiwać, a nie znajduje się na liście.

Pozdrawiamy!

{{/isPost}}

---