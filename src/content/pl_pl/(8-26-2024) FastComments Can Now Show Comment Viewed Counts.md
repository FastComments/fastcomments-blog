---
[category:Analytics]
###### [postdate]
# [postlink]FastComments Teraz Może Pokazywać Licznik Wyświetleń Komentarzy[/postlink]

{{#unless isPost}}
FastComments teraz wspiera wyświetlanie licznika obok każdego komentarza, który na żywo zwiększa się, gdy użytkownicy przeglądają komentarze.
{{/unless}}

{{#isPost}}

### Co nowego

FastComments teraz wspiera wyświetlanie licznika obok każdego komentarza, który na żywo zwiększa się, gdy użytkownicy przeglądają komentarze. To, czy komentarz jest wyświetlany, zależy od konta użytkownika lub sesji anonimowej. Obsługuje SSO (zarówno Secure SSO, jak i Simple SSO).

### Demo na żywo

Włączyliśmy liczniki wyświetleń komentarzy dla tego wpisu na blogu! Sprawdź licznik obok oka przy każdym komentarzu!

### Dokumentacja

[Możesz znaleźć dokumentację dewelopera do uruchomienia Liczników Wyświetleń tutaj.](https://docs.fastcomments.com/guide-customizations-and-configuration.html#enable-comment-view-counts)

### Wydajność

Liczniki nie są aktualizowane natychmiast, istnieje niewielkie (do trzech sekund) opóźnienie, gdy liczniki są agregowane, a następnie przesyłane przez sieć. To jest optymalizacja, aby jeśli
masz wydarzenie na żywo, a kilka tysięcy osób przegląda powiedzmy 10 komentarzy średnio na stronie, nie wysyłać natychmiast milionów aktualizacji (`3000 użytkowników x 3000 załadowań strony = ~9 milionów zmian`) do każdego użytkownika i nie obciążać
ich przeglądarki ani nie wykorzystywać całej ich przepustowości sieciowej.

### Podsumowanie

Dziękujemy naszym klientom, którzy dają nam ciągłe informacje zwrotne, dzięki którym możemy myśleć o pomysłach takich jak ten oraz dają nam czas na wdrażanie dobrze zoptymalizowanych funkcji. Mamy nadzieję, że
nadal będziecie kochać FastComments.

Na zdrowie!

<script>
    window.demoOverrides = {
        enableViewCounts: true
    }
</script>

{{/isPost}}

---