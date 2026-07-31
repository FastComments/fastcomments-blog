[category:Migration]
###### [postdate]
# [postlink]Migracja z Cusdis do FastComments[/postlink]

{{#unless isPost}}
Przeczytaj ten post, aby zobaczyć, jak w pełni migrować z Cusdis do FastComments, w tym Twoje wątki, status moderacji i adresy URL stron.
{{/unless}}

{{#isPost}}

Cusdis to lekki, otwarto‑źródłowy system komentarzy. Jeśli go przestałeś potrzebować i chcesz funkcje takie jak filtrowanie spamu, głosowanie, reakcje, powiadomienia, SSO oraz pełny panel moderacji, FastComments teraz importuje Twoje dane z Cusdis bezpośrednio.

## Eksportuj istniejące komentarze

Z pulpitu Cusdis zażądaj pełnego eksportu danych. Cusdis dostarcza pojedynczy plik JSON zawierający Twoje projekty, strony i każdy komentarz, wraz z ich wątkami oraz statusem zatwierdzenia. W zależności od konfiguracji Cusdis eksport jest wysyłany do Ciebie e‑mailem lub pobierany od razu.

Nie ma nic do edytowania ani rozpakowywania. Zachowaj plik ".json" w niezmienionej formie, a nasz backend odczyta go bezpośrednio.

## Importuj do FastComments

Po zalogowaniu przejdź <a href="https://fastcomments.com/auth/my-account/manage-data/import" target="_blank">tutaj, aby zaimportować plik</a>. Wybierz **Cusdis (.json)** z listy rozwijanej i prześlij swój plik.

### Poczekaj kilka minut

Import FastComments jest „asynchroniczny”. Przesyłanie pliku i jego przetwarzanie to oddzielne kroki. Dla małego pliku komunikat o sukcesie pojawia się od razu. Na dole strony importu znajduje się tabela, a każdy wiersz to próba importu. Odśwież stronę, aby obserwować status i liczbę zaimportowanych dotychczas komentarzy.

### Po zakończeniu

Otrzymasz e‑mail, gdy import się zakończy, niezależnie od tego, czy się powiódł. Możesz bezpiecznie zamknąć stronę po pomyślnym przesłaniu, gdy zobaczysz swój import z statusem „Requested” lub „Running”.

Ponowne importowanie jest bezpieczne. FastComments dopasowuje każdy komentarz po jego oryginalnym identyfikatorze Cusdis, więc ponowne uruchomienie importu aktualizuje istniejące komentarze zamiast tworzyć duplikaty. Jeśli import się nie powiedzie, <a href="https://fastcomments.com/auth/my-account/help" target="_blank">skontaktuj się z nami</a> i pomożemy.

## Co jest importowane

- **Wątki odpowiedzi.** Cusdis zagnieżdża odpowiedzi na kilku poziomach, a FastComments odtwarza pełną strukturę rodzic‑dziecko.
- **Status moderacji.** Zatwierdzone komentarze pozostają zatwierdzone. Komentarze oczekujące na zatwierdzenie trafiają do kolejki moderacji FastComments, abyś mógł je przejrzeć.
- **Autorzy.** Imię i e‑mail każdego komentującego zostają przeniesione, a zarejestrowani użytkownicy FastComments są dopasowywani na podstawie e‑maila.
- **Formatowanie.** Komentarze w Cusdis są napisane w Markdown. FastComments renderuje ten sam Markdown, w tym linki, obrazy i podziały linii, więc Twoje wątki wyglądają dokładnie tak samo jak wcześniej.

Komentarze usunięte w Cusdis pozostają, więc zaimportowane wątki pozostają czyste.

## Zastąp widget Cusdis

Gdy Twoje dane zostaną przeniesione, usuń mały fragment kodu Cusdis ze swojej strony i wstaw <a href="https://fastcomments.com/auth/my-account/get-acct-code" target="_blank">nasz własny</a>. Możesz uruchomić Cusdis i FastComments równocześnie przez pewien czas, aby najpierw przetestować wygląd i działanie. Obsługujemy wiele frameworków front‑end, które <a href="https://fastcomments.com/install-wizard" target="_blank">możesz znaleźć tutaj</a>. <a href="https://fastcomments.com/auth/my-account/help" target="_blank">Możemy pomóc w tym</a>.

### Migracja adresów URL jednocześnie

Cusdis powiązuje każdy komentarz z adresem URL strony, więc dopóki Twoje URL-e się nie zmieniają, przejście jest proste. Jeśli Twoje URL-e również się zmieniają, najpierw zaimportuj dane Cusdis, a następnie użyj wbudowanego narzędzia <a href="https://fastcomments.com/auth/my-account/manage-data/migrate-domains" target="_blank">Migrate Comments</a> w sekcji Manage Data, aby przenieść komentarze do nowych lokalizacji. Możesz wprowadzić całą domenę, pełny URL lub identyfikator URL zarówno dla starej, jak i nowej lokalizacji, więc pojedyncza para „from” i „to” przenosi wszystkie pasujące strony jednocześnie. Działa jako zadanie w tle i wysyła e‑mail, gdy zakończy się.

Jeśli wolisz, abyśmy to zrobili (gdy masz wiele stron), <a href="https://fastcomments.com/auth/my-account/help" target="_blank">powiadom nas</a> o starych i nowych URL-ach.

## UE

Jeśli jesteś w UE, prawdopodobnie zechcesz założyć konto na <a href="https://eu.fastcomments.com" target="_blank">eu.fastcomments.com</a>, aby dane Twoich klientów pozostawały w UE.

## Podsumowanie

1. Wyeksportuj swoje dane z Cusdis jako JSON
2. Prześlij go na stronie importu FastComments i wybierz **Cusdis (.json)**
3. Zamień fragment kodu Cusdis na <a href="https://fastcomments.com/auth/my-account/get-acct-code" target="_blank">FastComments</a>

{{/isPost}}

---