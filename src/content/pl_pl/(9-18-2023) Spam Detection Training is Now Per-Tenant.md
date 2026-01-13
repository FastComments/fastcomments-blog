---
[category:AI & Machine Learning]
###### [postdate]
# [postlink]Trening wykrywania spamu jest teraz na poziomie najemcy[/postlink]

{{#unless isPost}}
FastComments przez lata trenowało swój klasyfikator zapobiegania spamowi. Teraz możliwości treningowe zostały ulepszone.
{{/unless}}

{{#isPost}}

### Co nowego

Gdy oznaczasz komentarz jako spam lub nie spam, FastComments uczy się z tego na potrzeby przyszłego wykrywania spamu.

Jednakże, to uczenie odbywało się w tym samym miejscu dla wszystkich. Oznacza to, że trening spamu innego najemcy wpływał na Twój. Są zalety i wady tego rozwiązania. Po pierwsze, automatycznie korzystasz z tego, co inni moderatorzy uważają za spam. Wadą jest, że jeśli popełnią błąd lub jeśli mają treści, które różnią się od Twoich.

Na przykład, jeśli inny najemca ma publiczność zainteresowaną symulatorami wyścigów, mogą oni często oznaczać komentarze z "spamem kryptowalutowym" jako spam. W rezultacie klasyfikator zaczyna łączyć teksty związane z kryptowalutami z spamem.

Ale powiedzmy, że masz stronę zorientowaną na kryptowaluty. Teraz wiele twoich komentarzy zaczyna być oznaczanych jako spam, kiedy nie są. Niektóre z nich mogą być słusznie uznane za spam, ale wiele z nich może nie być.

### Izolowane szkolenie

Gdy nowy najemca dołącza do FastComments, domyślnie jego wykrywanie spamu będzie trenowane na podstawie pracy innych najemców.

Gdy zaczynasz oznaczać komentarze jako spam/nie spam, system zacznie korzystać z twojego własnego zestawu treningowego.

### Aktualizacja 20 września 2023

Stwierdziliśmy, że ta konfiguracja nie była idealna dla wszystkich domyślnie. Izolowane szkolenie spamowe jest teraz tylko opcjonalne. Możesz to włączyć na stronie Ustawienia moderacji, wybierając opcję "Izolowane" w sekcji "Filtr spamowy".

Domyślnie powrócono do treningu "Wspólnego".

### Na żywo

Zestaw szkoleniowy dla twojego najemcy jest teraz zawsze rekonstruowany, ilekroć oznaczasz komentarz jako spam lub nie spam.

Wcześniej system okresowo rekonstruował indeks spamu. Robiono to, aby chronić system przed nadmiernym obciążeniem. Po kilku latach odkryliśmy, że obciążenie z ciągłego treningu nie jest zbyt wysokie, więc zaktualizowaliśmy system, aby automatycznie aktualizował indeks za każdym razem, gdy wprowadzisz zmianę.

Te indeksy są przechowywane na krawędzi w naszych serwerach aplikacyjnych, a wszystkie one aktualizują się niezależnie, aby utrzymać system szybkim i responsywnym.

### Jak to zdobyć

Ta funkcja została wdrożona do wszystkich klientów!

### Na zakończenie

Jak w przypadku wszystkich większych wydań, cieszymy się, że mogliśmy poświęcić czas na optymalizację, testowanie i odpowiednie wdrożenie tej funkcji. Daj nam znać poniżej, jeśli odkryjesz jakiekolwiek problemy.

Na zdrowie!

{{/isPost}}