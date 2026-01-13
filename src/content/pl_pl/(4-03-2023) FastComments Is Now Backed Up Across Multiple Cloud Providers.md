---
[category:Announcements]

###### [postdate]
# [postlink]FastComments jest teraz wspierany przez wiele dostawców chmury[/postlink]

{{#unless isPost}}
Od kwietnia 2023 roku bazy danych FastComments są teraz przechowywane u wielu dostawców chmury dla dodatkowej ostrożności.
{{/unless}}

{{#isPost}}

### Co nowego

Wcześniej FastComments miał aktywne kopie zapasowe baz danych na wielu serwerach, ale u tego samego dostawcy chmury.

FastComments głównie korzysta z Linode dla regionów US-West i EU, jako osobne wdrożenia bazy danych i aplikacji.

Każdy region wcześniej miał swoją własną replikę bazy danych jako aktywną kopię zapasową. Jeśli główna baza danych została kiedykolwiek utracona, z jakiegokolwiek powodu, 
aktywna kopia zapasowa byłaby dostępna, aby zająć jej miejsce. Zrzuty bazy danych są również wykonywane na tych kopiach zapasowych.

Teraz dodaliśmy kopie zapasowe u innego dostawcy chmury, aby dane w każdym regionie nie były izolowane do jednego centrum danych na region.

Nowa topologia bazy danych to:

- US-West
  - Klaster bazy danych na Linode w Kalifornii.
  - **NOWE** Aktywna replika na Hetzner w Oregonie.
- EU
  - Klaster bazy danych na Linode we Frankfurcie.
  - **NOWE** Aktywna replika na Hetzner w Falkenstein.

Te repliki są aktywne, zawsze mają najnowszą wersję bazy danych. 

### Na zakończenie

Jak w przypadku wszystkich głównych wydań, cieszymy się, że mogliśmy poświęcić czas na optymalizację, testowanie i właściwe wydanie tej funkcji. Daj nam znać
poniżej, jeśli odkryjesz jakiekolwiek problemy.

Na zdrowie!

{{/isPost}}