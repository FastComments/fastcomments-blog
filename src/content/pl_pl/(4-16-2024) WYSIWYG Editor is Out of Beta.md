---
[category:Features]

###### [postdate]
# [postlink]Edytor WYSIWYG FastComments opuścił wersję beta[/postlink]

{{#unless isPost}}
Klienci mogą teraz skorzystać z nowego edytora, który nie używa widocznych znaczników ankerów do formatowania.
{{/unless}}

{{#isPost}}

### Co nowego

Użytkownicy FastComment zawsze mieli możliwość formatowania swoich komentarzy za pomocą znaczników ankerów, takich jak `<b>to</b>`. Jest to bardzo
znane każdemu, kto korzystał z forum internetowego w przeszłości lub wielu naszych konkurentów, jednak niektórzy użytkownicy i
społeczności oczekują innego zachowania.

Możesz teraz stylizować tekst w obszarze komentarza bez znaczników ankerów, ponieważ pole tekstowe można przełączyć na `contenteditable`.

Dla celów demonstracyjnych to zostało włączone na tym blogu.

Zaawansowany edytor ma dokładnie taki sam wygląd jak stary edytor, po prostu nie używa widocznych znaczników ankerów.

### Włączanie zaawansowanego edytowania

W personalizacji widgetu możesz po prostu włączyć `Advanced Editor` i kliknąć zapisz. Dokumentacja jest [tutaj](https://docs.fastcomments.com/guide-customizations-and-configuration.html#enable-wysiwyg).

### Dla deweloperów i pułapki

Dokumentację do włączenia tego w kodzie znajdziesz [tutaj](https://docs.fastcomments.com/guide-customizations-and-configuration.html#enable-wysiwyg), chociaż zalecamy korzystanie z interfejsu użytkownika personalizacji widgetu, ponieważ
zmniejszy to ilość danych przesyłanych w obie strony przy każdym załadowaniu strony.

Wygenerowane HTML z edytowalnej treści jest nieco inne niż w starym edytorze textarea, więc miej to na uwadze,
jeśli analizujesz komentarze z API.

### Optymalizacje

Zachowaliśmy widget komentarzy przed powiększeniem dzięki tej nowej funkcji, dodając to jako rozszerzenie, które jest ładowane w tle,
gdy ta funkcja jest włączona, co utrzymuje domyślny widget komentarzy małym i lekkim.

### Podsumowując

Jak w przypadku wszystkich dużych wydań, cieszymy się, że mogliśmy poświęcić czas na optymalizację, testowanie i właściwe wydanie tej funkcji. Daj nam znać
poniżej, jeśli odkryjesz jakiekolwiek problemy.

Na zdrowie!

{{/isPost}}

---