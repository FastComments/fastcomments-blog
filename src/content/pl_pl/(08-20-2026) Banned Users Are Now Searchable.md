[category:Features]
[category:Moderation]

###### [postdate]
# [postlink]Zbanowani Użytkownicy Są Teraz Wyszukiwalni[/postlink]

{{#unless isPost}}
Strona Zbanowani Użytkownicy ma teraz wiersz wyszukiwania, więc możesz znaleźć zakaz według e‑maila, imienia, osoby, która go wydała, lub komentarza, który go spowodował.
{{/unless}}

{{#isPost}}

### Co nowego

Strona Zbanowani Użytkownicy w sekcji Moderuj komentarze ma teraz wiersz wyszukiwania nad tabelą. Do tej pory jedynym sposobem przeglądania tej listy były kontrolki Strona i Liczba na stronę, co jest w porządku przy kilkunastu zakazach, ale uciążliwe przy kilku tysiącach.

Istnieją trzy kontrolki: **Search By** wybiera pole, **Match** wybiera Zawiera lub Równa się, a **Value** to wartość, której szukasz.

### Co możesz wyszukać

**Search By** oferuje pięć opcji:

- **Any Field** – przeszukuje wszystko poniżej jednocześnie
- **Email** – zbanowany adres
- **Name** – imię komentującego
- **Banned By** – moderator, który wydał zakaz
- **Banned For Saying** – tekst komentarza, który spowodował zakaz użytkownika

Ostatnie cztery odpowiadają kolumnom o tej samej nazwie w tabeli, więc rozwijane menu jest identyczne z tym, co filtruje.

### Zawiera vs Równa się

**Contains** znajduje twoją wartość w dowolnym miejscu pola. **Equals** dopasowuje całe pole.

Zazwyczaj używasz **Contains**. Wyszukiwanie `bademail.com` znajdzie każdy zakaz na tę domenę, w tym zakaz z wildcardem `*@bademail.com`, ponieważ zakazy z wildcardem są przechowywane z gwiazdką.

**Equals** służy, gdy masz dokładną wartość i nie chcesz wyników przybliżonych. Wyszukiwanie w polu Email wartości `spammer@example.com` przy użyciu Equals zwróci tylko ten jeden zakaz i nic więcej.

Obie opcje są niewrażliwe na wielkość liter we wszystkich polach. Ma to większe znaczenie niż się wydaje: gdy zakaz jest tworzony z komentarza, tylko część domenowa adresu jest zamieniana na małe litery, więc zakaz może być rzeczywiście zapisany jako `MixedCase@Example.com`. Wyszukiwanie `mixedcase@example.com` znajdzie go.

### Dwa wyszukiwania, które warto znać

**Banned For Saying** przeszukuje tekst komentarza, który wywołał zakaz. Jeśli określona fraza lub link rozprzestrzenia się, możesz w jednej zapytaniu wyświetlić wszystkich, którzy zostali za to zbanowani.

**Banned By** przeszukuje moderatora, który wydał zakaz. Jeśli chcesz przejrzeć decyzje konkretnego moderatora lub wprowadzasz kogoś i chcesz zobaczyć, co robił, to jedno wyszukiwanie wystarczy.

### Działa z paginacją i udostępnianiem

Wyszukiwanie jest zapisywane w URL strony, więc przewijanie wyników zachowuje je zastosowane i możesz wysłać przefiltrowaną listę innemu moderatorowi, kopiując URL, tak jak już udostępniasz linki moderacyjne. Rozpoczęcie nowego wyszukiwania przenosi cię z powrotem do pierwszej strony, a **Clear** przywraca pełną listę.

### Dokumentacja

<a href="https://docs.fastcomments.com/guide-moderation.html#banning-users" target="_blank">Sekcja Banning Users w Przewodniku Moderacji</a> opisuje wiersz wyszukiwania szczegółowo.

### Podsumowanie

Ten pomysł powstał po obserwacji, jak strona jest faktycznie używana. Zakazy gromadzą się cicho przez lata, a potem pewnego dnia musisz znaleźć konkretny i nie ma sposobu, aby to zrobić. Teraz jest.

Daj nam znać poniżej, jeśli jest pole, które chciałbyś móc przeszukiwać, a nie znajduje się na liście.

Pozdrawiamy!

{{/isPost}}