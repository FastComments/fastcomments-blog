[category:Migration]
###### [postdate]
# [postlink]Migracja z Commento i Cusdis w 2026[/postlink]

{{#unless isPost}}
Usługi hostowane Commento i Cusdis przestały odpowiadać. Oto jak przejść do FastComments oraz jak możemy pomóc odzyskać Twoje komentarze z Internet Archive, jeśli nigdy ich nie wyeksportowałeś.
{{/unless}}

{{#isPost}}

Jeśli sekcja komentarzy na Twojej stronie stała się pusta, ten wpis jest dla Ciebie. Opisuje, co się zmieniło, jak zaimportować eksport, jeśli go masz, oraz jak możemy pomóc odzyskać Twoje komentarze z Internet Archive, jeśli go nie masz.

## Co się stało

Oto co widzimy na dzień 1 listopada 2026:

- **Commento.** commento.io, jego API i skrypt widgetu zwracają 404. Zapiski Internet Archive pokazują, że strona działała 25 maja 2026, a 11 czerwca 2026 zwracała 404.
- **Cusdis.** cusdis.com i jego API zwracają błąd Cloudflare 521, co oznacza, że serwer za Cloudflare jest wyłączony. Zapiski pokazują działanie do 27 sierpnia 2026, a 16 października 2026 zwracają 521. Skrypt widgetu nadal się ładuje, więc Twoja strona wyświetla pusty prostokąt w miejscu komentarzy.

Nie znaleźliśmy żadnego ogłoszenia o zamknięciu od żadnego z projektów. Jeśli hostujesz samodzielnie Commento lub Cusdis, Twoja instalacja nie jest tym dotknięta i możesz z niej wyeksportować dane, kiedy będziesz gotowy do migracji.

## Znajdź swoje dane

Wybrana ścieżka zależy od tego, co posiadasz:

1. **Masz plik eksportu.** Sprawdź również swoją skrzynkę odbiorczą, ponieważ Commento wysyłał eksporty e‑mailem jako plik „.gz”. Przejdź dalej do kroków importu.
2. **Hostujesz samodzielnie.** Wyeksportuj z własnego panelu, a następnie postępuj zgodnie z krokami importu.
3. **Korzystałeś z usługi hostowanej i nie masz eksportu.** Panel, z którego można było wyeksportować, nie istnieje. Przeczytaj sekcję odzyskiwania poniżej.

## Importuj plik eksportu

Po zalogowaniu przejdź <a href="https://fastcomments.com/auth/my-account/manage-data/import" target="_blank">tutaj, aby zaimportować plik</a>. Wybierz **Commento (.gz, .json)** lub **Cusdis (.json)** z listy rozwijanej i prześlij swój plik. Nie ma potrzeby rozpakowywania pliku „.gz” Commento przed importem.

Import działa w tle i otrzymasz e‑mail, gdy się zakończy. Ponowne importowanie jest bezpieczne, ponieważ każdy komentarz jest dopasowywany do swojego oryginalnego identyfikatora i aktualizowany w miejscu.

Mamy dłuższy przewodnik dla każdego formatu: <a href="https://blog.fastcomments.com/(1-25-2020)-migrating-from-commento-to-fastcomments.html" target="_blank">Commento</a> i <a href="https://blog.fastcomments.com/(07-24-2026)-migrating-from-cusdis-to-fastcomments.html" target="_blank">Cusdis</a>. Ich kroki dotyczące żądania eksportu z hostowanego panelu nie mają już zastosowania, ale szczegóły importu są aktualne.

## Odzyskaj swoje komentarze z Internet Archive

Commento i Cusdis ładują komentarze przy pomocy JavaScript z własnych serwerów. Gdy Internet Archive przechwytuje stronę w przeglądarce, może zapisać te odpowiedzi razem ze stroną. Zapisane odpowiedzi zawierają wątki komentarzy.

Przetestowaliśmy to sami. <a href="https://web.archive.org" target="_blank">Wayback Machine</a> przechowuje ponad 12 000 przechwyconych odpowiedzi komentarzy Commento oraz przechwycenia dla 448 projektów Cusdis, a najnowsze pochodzą z 2026 roku. Nie mamy narzędzia samoobsługowego do tego. Przeprowadzamy odzyskiwanie za Ciebie, więc <a href="https://fastcomments.com/contact-us" target="_blank">napisz do nas</a> aby rozpocząć.

### Sprawdź najpierw własną stronę

Otwórz jeden z bardziej popularnych postów w Wayback Machine, zamieniając adres na własny:

<div class="code">    https://web.archive.org/web/2025/https://example.com/your-post
</div>

Przewiń do sekcji komentarzy. Jeśli Twoje komentarze się pojawią, archiwum ma ten wątek. Jeśli nie, spróbuj innego roku, używając kalendarza u góry strony. Pusty wynik w jednym poście nie wyklucza reszty Twojej witryny, więc napisz do nas w każdym przypadku.

### Jak działa odzyskiwanie

1. **Podaj nam swoją domenę.** Jeśli używałeś Cusdis, wyślij także swój App ID, wartość `data-app-id` w kodzie na Twojej stronie. Poprosimy Cię o potwierdzenie kontroli nad domeną, ponieważ te komentarze należą do Twojej witryny.
2. **Znajdujemy Twoje wątki.** Zbieramy przechwyty dla Twojej witryny i sprawdzamy, czy każdy z nich należy do Twojej domeny i strony. Odzyskiwanie Commento trwa dłużej, ponieważ archiwum nie indeksuje przechwyceń według witryny i musimy przeglądać wszystkie.
3. **Pokazujemy Ci, co znaleźliśmy.** Zobaczysz, ile stron i komentarzy zostało przywróconych oraz datę najnowszego komentarza, zanim cokolwiek zostanie zaimportowane.
4. **Importujemy wątki do Twojego konta.** Następnie możesz edytować lub usunąć dowolny komentarz w panelu moderacji.

### Co zostaje przywrócone

<div class="pretty-table wide-table">

| Dane | Commento | Cusdis |
| --- | --- | --- |
| Treść komentarza | Tak | Tak |
| Wyświetlana nazwa autora | Tak | Tak |
| Data komentarza | Tak | Tak |
| Wątkowanie odpowiedzi | Tak | Tak |
| Wynik głosowania | Tak | Cusdis nie ma głosów |
| Adres strony | Tak | Tak, choć niektóre witryny przechowywały tylko ścieżkę, więc potrzebujemy Twojej domeny |
| E‑mail autora | Nie | Nie |
| Komentarze oczekujące na zatwierdzenie | Nie | Nie |
| Komentarze napisane po ostatnim przechwyceniu | Nie | Nie |
| Strony, których archiwum nigdy nie przechwyciło | Nie | Nie |

</div>

### Czego się spodziewać

To odzyskiwanie z migawków, więc planuj luki. Działa najlepiej dla stron, które były wystarczająco popularne, aby były często i niedawno przechwytywane.

Dwa wyniki z naszych testów pokazują zakres. Na jednym blogu 30 zapytań zwróciło 810 komentarzy na 19 stronach. Na innej stronie, która nadal wyświetla komentarze, najnowsza zarchiwizowana kopia zakończyła się w październiku 2023, podczas gdy żywa strona działała do marca 2025. Wszystko, co zostało napisane pomiędzy ostatnim przechwyceniem a zamknięciem, nie znajduje się w archiwum.

Brakujące e‑maile również mają znaczenie. Odzyskane komentarze zachowują nazwę autora, ale nie mogą być dopasowane do konta FastComments, a ich autorzy nie będą powiadamiani o nowych odpowiedziach.

## Zastąp widżet

Niezależnie od wybranej ścieżki, stary fragment kodu musi zostać usunięty z Twojej strony. Dla Commento usuń to, wraz z `count.js`, jeśli używasz liczników komentarzy:

<div class="code">    &lt;script defer src="https://cdn.commento.io/js/commento.js"&gt;&lt;/script&gt;
    &lt;div id="commento"&gt;&lt;/div&gt;
</div>

Dla Cusdis usuń to:

<div class="code">    &lt;div id="cusdis_thread" data-app-id="..." data-page-id="..."&gt;&lt;/div&gt;
    &lt;script async defer src="https://cusdis.com/js/cusdis.es.js"&gt;&lt;/script&gt;
</div>

Następnie dodaj nasz:

<div class="code">    &lt;script async src="https://cdn.fastcomments.com/js/embed-v2-async.min.js"&gt;&lt;/script&gt;
    &lt;div id="fastcomments-widget"&gt;&lt;/div&gt;
    &lt;script&gt;
        window.fcConfigs = [{
            target: '#fastcomments-widget',
            tenantId: 'YOUR_TENANT_ID'
        }];
    &lt;/script&gt;
</div>

Obsługujemy także wiele frameworków front‑end, które możesz znaleźć <a href="https://fastcomments.com/install-wizard" target="_blank">tutaj</a>. Nie musisz czekać, aż zakończy się odzyskiwanie, aby przełączyć się. Twoi czytelnicy mogą od razu zaczynać komentować, a odzyskane wątki dołączą do tych samych stron po ich zaimportowaniu.

### Jeśli Twoje adresy URL się zmieniają

Zaimportowane komentarze są powiązane z adresem URL strony, więc jeśli Twoje adresy URL pozostają takie same, wątki automatycznie się dopasują. Jeśli się zmieniają, najpierw zaimportuj, a potem użyj narzędzia <a href="https://fastcomments.com/auth/my-account/manage-data/migrate-domains" target="_blank">Migracja komentarzy</a> w sekcji Zarządzanie danymi, aby przenieść je do nowych lokalizacji.

## UE

Jeśli jesteś w UE, prawdopodobnie zechcesz założyć konto na <a href="https://eu.fastcomments.com" target="_blank">eu.fastcomments.com</a>, aby dane Twoich klientów pozostawały w UE.

## Podsumowanie

1. Poszukaj pliku eksportu, także w swojej skrzynce e‑mail.
2. Jeśli go masz, prześlij go na <a href="https://fastcomments.com/auth/my-account/manage-data/import" target="_blank">stronie importu</a>.
3. Jeśli nie, sprawdź swoją stronę w Wayback Machine i <a href="https://fastcomments.com/contact-us" target="_blank">napisz do nas</a>, podając swoją domenę.
4. Zamień stary fragment kodu na <a href="https://fastcomments.com/auth/my-account/get-acct-code" target="_blank">nasz</a>.

Pozdrawiamy!

{{/isPost}}

---