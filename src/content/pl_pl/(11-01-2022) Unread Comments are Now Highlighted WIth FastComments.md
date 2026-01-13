---
[category:UI & Customization]
###### [postdate]
# [postlink]Nieużywane komentarze są teraz wyróżniane w FastComments[/postlink]

{{#unless isPost}}
Czy kiedykolwiek wróciłeś na stronę i chciałeś wznowić czytanie sekcji komentarzy od miejsca, w którym przerwałeś? FastComments teraz wyróżnia komentarze,
które przegapiłeś, co ułatwia to zadanie.
{{/unless}}

{{#isPost}}

### Co nowego

Czy kiedykolwiek wróciłeś na stronę i chciałeś wznowić czytanie sekcji komentarzy od miejsca, w którym przerwałeś? FastComments teraz wyróżnia komentarze,
które przegapiłeś, co ułatwia to zadanie.

<div class="text-center">
    <img src="/images/new-comment-highlighted.png" alt="Avatar w nowym wyróżnionym komentarzu." />
</div>

### Jak to uzyskać

Każdy komentarz, który wywołał powiadomienie w aplikacji (odpowiedzi, odpowiedzi w tej samej wątku lub komentarze na stronie,
do której jesteś subskrybowany), będzie automatycznie wyróżniony z lekko świecącym awatarem użytkownika. Kolor można dostosować za pomocą CSS
korzystając z klasy `is-unread`. Domyślne stylowanie obsługuje również tryb ciemny.

Dodatkowo, nowa klasa CSS `24hr` została dodana do elementów komentarzy opublikowanych w ciągu ostatnich 24 godzin. Możesz jej użyć, aby stylizować
komentarze również.

### Dlaczego wyróżniać awatar?

Rozumiemy, że może być preferowane wyróżnienie całego komentarza. Jednakże, wiąże się to z kwestiami czytelności i stylizacji u
naszych klientów, którzy dostosowali platformę do pasującego produktu. Stwierdziliśmy, że lekkie wyróżnienie awatara to dość nieinwazyjna
zmiana w większości przypadków. Jeśli to konieczne, blask można usunąć i zmienić przy użyciu zasad dostosowywania widgetu.

### Podsumowując

Wiemy, że ta funkcja była długo oczekiwana przez niektórych. Poświęciliśmy czas na wybór stylizacji, która nie była zbyt inwazyjna, ale nadal pomocna, i możemy
zrobić dalsze poprawki na podstawie opinii.

Na zdrowie!

{{/isPost}}

---