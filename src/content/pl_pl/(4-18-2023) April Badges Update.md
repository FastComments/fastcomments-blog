---
[category:Features]

###### [postdate]

# [postlink]Aktualizacja odznak z kwietnia[/postlink]

{{#unless isPost}}Wprowadzono pewne zmiany w odznakach, dodano kilka funkcji i wprowadzono ulepszenia, aby zapobiec znikaniu odznak podczas ponownego przetwarzania.{{/unless}}

{{#isPost}}

### Co nowego - Stacking odznak

Przed wczorajszym dniem, jeśli miałeś zestaw odznak w swojej społeczności, takich jak:

- Nowy komentator (1 komentarz)
- Członek społeczności (50 komentarzy)
- Ekspert (500 komentarzy)

... a użytkownik osiągnie 500 komentarzy, jego odznaki będą wyświetlane na komentarzach w ten sposób:

    [Nowy komentator] [Członek społeczności] [Ekspert]

W tej szczególnej sytuacji prawdopodobnie chcemy, aby wyświetlana była tylko odznaka `Ekspert`. Cóż, większość naszych klientów tego chce, ale nie wszyscy. Nie wszyscy nasi najemcy
mają taki sam układ i zdajemy sobie z tego sprawę.

Jednak dla społeczności, które stosują powyższy wzór, co jest większością, chcą, aby komentarze pokazywały najbardziej prestiżową odznakę.

Aby obsłużyć ten przypadek użycia, dodaliśmy koncepcję **zamiany** jednej odznaki na inną. Dzięki temu możemy stworzyć ciąg odznak, które użytkownik może zdobywać:

<div class="text-center">
    <img src="images/fc-badge-stacking.png" alt="Stacking odznak" title="Stacking odznak" />
</div>

Wewnątrz nazywamy to *stacking odznak*. Nowa odznaka "stakowana" jest na topie starej.

Możemy to skonfigurować, edytując odznakę i mówiąc, że zastępuje inną:

<div class="text-center">
    <img src="images/fc-badge-stacking-setup.png" alt="Konfiguracja stacking odznak" title="Konfiguracja stacking odznak" />
</div>

Oczywiście może to stać się trudne do śledzenia, więc lista odznak również została zaktualizowana, aby dostarczyć więcej informacji, w tym
która odznaka zastępuje co.

### Co nowego - Udoskonalenia reprocessingu

Kiedy zmieniasz odznakę, musimy przejrzeć wszystkich twoich użytkowników i określić, czy nadal powinni "zdobywać" tę odznakę,
oraz zaktualizować wszystkie wyświetlane style odznak i pamięci podręczne, aby najnowsza wersja była widoczna.

Reprocessing już nie usuwa odznaki z użytkownika przy zapisaniu, nawet jeśli nie spełnia on już kryteriów **chyba że skonfigurowane kryteria zmienią się**.

Uwaga dla administratorów - możesz obniżyć kryteria progowe dla odznaki bez usuwania tej odznaki przez reprocessing. Tylko **zwiększenie** progu spowoduje
reprocessing, który może usunąć odznakę w niektórych przypadkach.

Aby dowiedzieć się więcej, czytaj dalej w *Perspektywie komentatora*.

### Perspektywa komentatora

Reprocessing odznak jest bardzo ryzykowny, ponieważ użytkownicy kochają swoje odznaki - i to rozumiemy! Nie chcemy odbierać odznaki użytkownika, ponieważ
zdobył odznakę Odpowiedzi z powodu 100 użytkowników odpowiadających na jego komentarze, a następnie 10 użytkowników później usunęło swoje komentarze lub zostali usunięci przez moderatorów.

Odznaka powinna pozostać, i rzeczywiście pozostaje, z wyjątkiem...

Podczas reprocessingu nie wiemy, że te wcześniejsze komentarze istnieją, więc odznaka może zostać usunięta z niektórych użytkowników, jeśli odznaka zostanie edytowana, na przykład jeśli styl
zostanie zaktualizowany lub jeśli stacking odznak zostanie skonfigurowany.

To się zdarzyło 17 kwietnia 2023 roku, kiedy wprowadziliśmy *Stacking odznak* i niektóre społeczności włączyły tę funkcję.

Obserwowano dwa scenariusze:

1. Użytkownicy odkryli, że niektóre ich odznaki wydają się być usunięte. Tak naprawdę wydarzyło się, że wszystkie oprócz najbardziej prestiżowych odznak zostały ukryte.
   - **Możesz wyświetlić wszystkie swoje odznaki, jeśli chcesz.** Po prostu kliknij menu z trzema kropkami w prawym górnym rogu swojego profilu i kliknij `Zarządzaj odznakami`.
2. Niektóre odznaki faktycznie zostały usunięte dla niektórych użytkowników, na przykład w przypadku odznaki Odpowiedzi powyżej. Aby zapobiec temu w przyszłości, 
    ulepszyliśmy system reprocessingu, aby odznaka nie została usunięta, chyba że sama kryteria odznaki się zmienią i już nie spełniasz obowiązujących kryteriów, jednak
    odradzamy administratorom społeczności podejmowania takich działań, ponieważ, jak wspomniano, użytkownicy kochają swoje odznaki.

### Dla moderatorów

Nie ma zmian z perspektywy moderatora, poza tym, że w większości przypadków zobaczysz mniej wyświetlanych odznak. Zamiast tego zobaczysz najbardziej prestiżowe odznaki
swoje oraz członków społeczności.

### Istniejący klienci

Zakończyliśmy wdrażanie tej funkcji dla wszystkich istniejących klientów na wszystkich poziomach! Stacking odznak nie jest włączony domyślnie i musi być skonfigurowany ręcznie.

### Na zakończenie

Mamy nadzieję, że uznasz te nowe zestawy funkcji i poprawek za użyteczne i łatwe do użycia. 

Na zdrowie!

{{/isPost}}