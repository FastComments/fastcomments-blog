---
[category:API & Development]

###### [postdate]
# [postlink]White Labeling FastComments[/postlink]

{{#unless isPost}}
White Labeling, z pełną integracją API i narzędziami automatyzacyjnymi, wchodzi do FastComments.
{{/unless}}

{{#isPost}}

## Co nowego

FastComments może teraz integrować się z innymi aplikacjami i zewnętrznymi sprzedawcami za pomocą White Labeling. White Labeling pozwala na tworzenie kont FastComments (zwanych najemcami), użytkowników, moderatorów i więcej.

Oferujemy teraz [kompleksowe API](https://docs.fastcomments.com/guide-white-labeling.html#white-labeling-using-the-api) do automatyzacji integracji
z zewnętrznymi podmiotami.

Możesz teraz, za pomocą API:

- Tworzyć klientów (dzieci najemcy), którymi zarządza Twój najemca.
- Zarządzać pakietami dostępnymi dla Twoich klientów oraz sposobem, w jaki będziesz obsługiwać fakturowanie.
- Dodawać i zarządzać użytkownikami w zarządzanych przez Ciebie najemcach.
- Dodawać i zarządzać moderatorami w zarządzanych przez Ciebie najemcach.
- Zapraszać moderatorów i wysyłać linki logowania do użytkowników najemców.

## Fakturowanie

W przypadku fakturowania istnieją dwie opcje:

1. Za pośrednictwem FastComments Flex, użycie Twoich dzieci najemców jest automatycznie zbierane i fakturowane do najemcy głównego. Można to monitorować za pomocą [Strony Analityki Fakturowania](https://fastcomments.com/auth/my-account/analytics/billing).
2. Za pośrednictwem FastComments Pro, uzyskujesz dostęp do stworzenia stałej liczby dzieci najemców za stałą miesięczną cenę.

## Debranding

Zarządzani najemcy mogą mieć włączony debranding, co usuwa nasze loga z widgetu komentarzy.

## Jak uzyskać White Labeling

Obecnie plany FastComments Flex i Pro oferują dostęp do API White Labeling.

## Skrypty i przykłady

Przykładowy skrypt, który wykorzystuje API do skonfigurowania najemcy z użytkownikami i moderatorami, [jest dostępny tutaj](https://github.com/FastComments/fastcomments-code-examples/tree/master/white-labeling).

## Kompleksowa weryfikacja

Każdy zasób API zawiera kompleksowe walidacje i ograniczenia, z pomocnymi komunikatami o błędach, aby prowadzić Cię przez ich poprawne używanie.

<div class="code"><div class="title">Przykład szczegółowego błędu</div><div class="line">{</div><div class="line">  "status": "failed",</div><div class="line">  "reason": "Użytkownik z tym id nie istnieje w tym najemcy. Najpierw stwórz użytkownika, a potem zrób z niego moderatora.",</div><div class="line">  "code": "not-found"</div><div class="line">}</div></div>

## Inne przypadki użycia

API [użytkowników najemcy](https://docs.fastcomments.com/guide-api.html#tenant-user-structure) oraz [moderatorów](https://docs.fastcomments.com/guide-api.html#moderator-structure) mogą być również używane do
dodawania i zarządzania tymi zasobami w Twoim własnym najemcy, niezależnie od white labelingu.

## Dokumentacja

Pełną dokumentację dotyczącą White Labeling oraz korzystania z API możesz znaleźć [tutaj](https://docs.fastcomments.com/guide-white-labeling.html).

## Podsumowanie

Mamy nadzieję, że ta aktualizacja i jej dokumentacja były dla Ciebie przydatne. Powodzenia w integracji!

{{/isPost}}