---
[category:UI & Customization]

###### [postdate]
# [postlink]Rozmiary stron są teraz dostosowywalne[/postlink]

{{#unless isPost}}
FastComments miał ustalony rozmiar strony wynoszący 30 komentarzy od momentu uruchomienia. Teraz jest to dostosowywalne!
{{/unless}}

{{#isPost}}

### Co nowego

Twoje wątki komentarzy mogą teraz mieć różne rozmiary paginacji, a to można teraz dostosować globalnie w Twoim koncie, na poziomie
strony lub nawet konkretnej strony. Może to być pożądane, jeśli chcesz, aby niektóre strony miały mniej lub więcej komentarzy wyświetlanych przed
tym, jak użytkownik musi przejść do paginacji.

Ma to także wpływ na nieskończone przewijanie oraz wszelkie frameworki lub integracje wyświetlające komentarze z FastComments.

Rozmiary stron mogą wynosić od `10` do `200`. Domyślnie pozostaje na poziomie `30`.

### Jak to uzyskać

Po prostu przejdź do zaufanego [Widget Customization UI](https://fastcomments.com/auth/my-account/customize-widget) i
zdefiniuj rozmiar swojej strony.

Należy zauważyć, że FastComments wstępnie oblicza komentarze wyświetlane na każdej stronie, więc zmiana tego parametru spowoduje, że nasz system
przeliczy wszystkie Twoje wątki komentarzy. Nie spowoduje to żadnych przestojów, ale może zająć kilka minut, aby zmiana się pojawiła.

### Dokumentacja

Zaktualizowaną dokumentację na temat rozmiarów stron można znaleźć na [docs.fastcomments.com](https://docs.fastcomments.com/guide-customizations-and-configuration.html#page-size).

### Zmiany przełomowe

W ramach tej zmiany dwie tłumaczenia zdefiniowane w widżecie komentarzy zostały przemianowane. `PREV_30` i `NEXT_30` zostały teraz
zmienione na `PREV` i `NEXT`, odpowiednio, i zawierają zmienną `[count]`.

Jeśli zdefiniowałeś tłumaczenia dla przycisków paginacji za pomocą Widget Customization UI, to już je dla Ciebie przenieśliśmy.
Jeśli przekazujesz tłumaczenia w jakiejś integracji za pomocą kodu, będziesz musiał zaktualizować te:

- `PREV_30` -> `PREV`
- `NEXT_30` -> `NEXT`

### Na zakończenie

Jak w przypadku wszystkich głównych wersji, cieszymy się, że mogliśmy poświęcić czas na optymalizację, testowanie i odpowiednie wprowadzenie tej funkcji. Daj nam znać
poniżej, jeśli odkryjesz jakiekolwiek problemy.

Na zdrowie!

{{/isPost}}

---