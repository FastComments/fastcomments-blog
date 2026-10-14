[category:Migration]
[category:Tutorials]

###### [postdate]
# [postlink]Jak migrować z OpenWeb do FastComments w 2026[/postlink]

{{#unless isPost}}
Przewodnik funkcja po funkcji dla wydawców przechodzących z OpenWeb (dawniej Spot.IM): co mapuje 1:1, co jest inne, jak działa import CSV, jak zmienia się handshake SSO oraz plan krok po kroku przejścia.
{{/unless}}

{{#isPost}}

### <i class="circle">!</i> Ten artykuł zawiera żargon techniczny

Ten przewodnik jest przeznaczony dla liderów produktu i inżynierii oraz menedżerów społeczności, którzy dziś korzystają z OpenWeb i potrzebują planu migracji. Przechodzi przez każdy element OpenWeb, podaje odpowiednik FastComments i jasno wskazuje, gdzie nie ma dopasowania 1:1.

### Dlaczego teraz

30 września 2026 roku Sąd Okręgowy w Tel Awiwie zarządził powołanie tymczasowego zarządcy nad OpenWeb na wniosek jego pożyczkodawcy, Mars Growth Capital, który posiada pierwszeństwo w roszczeniach wobec aktywów i kont firmy i dąży do egzekucji wobec izraelskich aktywów, kont bankowych i własności intelektualnej OpenWeb (<a href="https://www.calcalistech.com/ctechnews/article/aaji32ku3" target="_blank">Calcalist, Sept 30</a>). Następnego dnia powołano tymczasowego powiernika, adw. Ehuda Gindesa (<a href="https://www.calcalistech.com/ctechnews/article/rmmk2cphu" target="_blank">Calcalist, Oct 4</a>). Wcześniej w 2026 roku Microsoft, jeden z największych klientów OpenWeb, zakończył współpracę i wstrzymał płatności z powodu sporu o ruch, który OpenWeb odrzuca (<a href="https://www.calcalistech.com/ctechnews/article/s1kfnxo5mx" target="_blank">Calcalist, Sept 28</a>).

OpenWeb twierdzi, że platforma nadal działa. Nadzór sądowy, pożyczkodawca egzekwujący roszczenia wobec IP, od którego zależy Twój widget komentarzy, oraz powiernik dbający o wartość aktywów nie są warunkami, które chcesz mieć jako wydawca kluczowego elementu zaangażowania. Jeśli nie wykonałeś jeszcze pełnego eksportu danych, zrób to najpierw, dzisiaj, zanim przejdziesz do dalszych kroków w tym przewodniku.

### Co potrzebujesz przed rozpoczęciem

Zbierz te elementy, zanim dotkniesz kodu:

- **Eksport komentarzy z OpenWeb.** OpenWeb udostępnia API eksportu (v4), które generuje spakowane pliki CSV, maksymalnie 100 000 komentarzy na plik, z oknami datowymi do jednego miesiąca i linkami do pobrania, które wygasają po tygodniu (<a href="https://developers.openweb.com/docs/export-comments-v4" target="_blank">OpenWeb docs</a>). Zamów wszystkie potrzebne okna i przechowaj pliki w bezpiecznym miejscu. Jeśli Twój kontakt w OpenWeb dostarczył Ci kiedyś eksport CSV z panelu administracyjnego, zachowaj go również. Importer FastComments odczytuje CSV OpenWeb z kolumnami takimi jak `id`, `post_id`, `parent_comment_id`, `user_name`, `user_display_name`, `content`, `written_at`, `message_status`, `likes_count`, `dislikes_count`, `reports_count` i `url`.
- **Twój Spot ID oraz listę identyfikatorów postów.** Każdy `data-post-id` przekazany do launchera staje się identyfikatorem URL w FastComments. Jeśli Twoje identyfikatory postów są identyfikatorami artykułów CMS, zanotuj, jak są generowane, aby móc emitować te same wartości po stronie FastComments.
- **Listę użytkowników SSO.** Konkretnie wartości `primary_key` i `user_name`, które zarejestrowałeś w OpenWeb. Autorstwo komentarzy jest dopasowywane po nazwie użytkownika podczas importu, więc musisz przekazać te same nazwy użytkowników w ładunku SSO FastComments.
- **Listę moderatorów i role.** Konta administratorów, moderatorów i dziennikarzy oraz sekcje, które każdy moderuje.
- **Konfigurację moderacji.** Polityka całej witryny (zatwierdzaj wszystkie, publikuj i moderuj, wymagaj zatwierdzenia), nadpisania per artykuł, lista ograniczonych słów, wyciszeni i zbanowani użytkownicy.
- **Niestandardowy CSS i ustawienia motywu.** Wyeksportuj wszystko, co masz w panelu administracyjnym, aby móc odtworzyć to w sekcji dostosowywania widgetu FastComments.
- **Miejsce, w którym launcher znajduje się w Twoich szablonach**, włączając wszystkie strony, które uruchamiają Reakcje, Topic Tracker, Spotlight, Dzwonek Powiadomień lub Samodzielną Reklamę bez Konwersacji.

### Migracja wspomagana AI

FastComments udostępnia [LLM Kit i serwer MCP, aby przyspieszyć migrację](https://docs.fastcomments.com/guide-llm-kit.html).

### Jak identyfikatory postów OpenWeb mapują się na identyfikatory URL FastComments

FastComments wiąże wątek komentarzy z `urlId`. Domyślnie identyfikator URL to wyczyszczony adres strony, ale możesz ustawić dowolny ciąg znaków – dokładnie to robi importer OpenWeb: odczytuje kolumnę `post_id` i używa jej jako identyfikatora URL FastComments dla każdego komentarza w danym artykule. Przechowuje także kolumnę `url` jako wyświetlany adres, więc linki moderacyjne i e‑maile powiadamiające wskazują właściwą stronę.

Zatem reguła dla Twoich szablonów brzmi: gdziekolwiek przekazywałeś `data-post-id="POST_ID"` i `data-post-url="ARTICLE_URL"` do OpenWeb, przekaż `urlId: 'POST_ID'` i `url: 'ARTICLE_URL'` do FastComments. Zaimportowane wątki będą się pokrywać z istniejącymi wątkami bez przekierowań i bez przepisywania URL. Zobacz <a href="https://docs.fastcomments.com/guide-customizations-and-configuration.html#url-id" target="_blank">dokumentację URL ID</a>.

Jeśli wolisz kluczyć wątki po URL zamiast po identyfikatorze postu, najpierw zaimportuj, a potem użyj narzędzia Migrate Comments w sekcji Manage Data, aby masowo przenieść wątki z identyfikatora postu na URL.

### Mapa funkcji

<div class="pretty-table wide-table">

| OpenWeb | FastComments | Uwagi |
| --- | --- | --- |
| Conversation with real-time updates | Comment widget with live commenting | Live by default. New comments collapse behind a "Show N New Comments" button, or appear instantly with `showLiveRightAway`. |
| Likes and dislikes on comments | Up and down votes | Import preserves `likes_count` and `dislikes_count`. Heart style and "disable voting" are config options. |
| Reactions (article-level icons) | Page Reacts | Configurable icon set on the page, remembered per user. |
| Replies and threading | Threaded replies, unlimited depth | `maxReplyDepth` caps nesting. |
| Sorting: best, newest, oldest | Most Relevant, Newest First, Oldest First | `defaultSortDirection` sets the default per site or per URL pattern. |
| User profiles | User profiles | Avatar, bio, badges, karma, activity, DMs. Works for SSO users. |
| Author Badge | `displayLabel`, `isAdmin`, `isModerator`, badges | Set in the SSO payload. No backend lookup call needed. |
| Pinned Live Blog updates, highlighted comments | Pin and Unpin on any comment | Moderators pin from the widget or dashboard. An AI agent template pins top-voted comments. |
| In Conversation Polls | Polls on comments | 2 to 10 options, close dates, privacy modes, creator restrictions. |
| Ask Me Anything formats | No dedicated product | Run as a thread with the author's SSO user labeled and the question pinned. |
| Live Blog | No 1:1 equivalent | Live Chat widget and chat-mode comments exist. Editorial live blogging stays in your CMS. |
| Topic Tracker (follow topics and authors) | Page subscriptions | Users follow a page, not a topic or author. No cross-article follow. |
| Notification Bell | Notification bell in the widget | Replies, mentions, thread activity, votes, subscriptions, badges, DMs. |
| Email notifications | Email notifications with templates | Per-user opt-in via SSO flags. Custom templates, branded sender. |
| SSO handshake (codeA/codeB) | Secure SSO (HMAC-SHA256 payload) | No register-user call. Sign a payload server-side, pass it to the widget. |
| Third-party SSO (Auth0, Gigya, Piano) | Secure SSO after your provider authenticates | Same payload. Your backend signs it once the user is logged in. |
| Identity (OpenWeb registration screens) | Magic-link login, Simple SSO | Readers log in with an email link. No passwords. |
| Moderation policy per article | Customization rules per URL ID pattern | Approval mode, spam filter and more vary by `*/section/*` patterns. |
| Aida AI moderation | Spam classifiers, LLM based filters, image moderation, AI Agents | Agents start in dry run and can require human approval. |
| Restricted words | Word blacklist customizable by locale | ~450 default phrases, editable. |
| User muting | Block User | Per-reader block from the comment menu. |
| Bans | Bans | Permanent, timed, shadow, IP-hashed, plus-alias aware. |
| Moderation Panel | Moderate Comments dashboard | Filters, bulk actions with undo, moderation groups, digest emails with one-click approve. |
| Notification Webhook | Webhooks | Comment created, updated, deleted. No per-user notification webhook. |
| Engagement dashboard | Analytics | Live users online, top pages, page loads, comments, votes, accounts by day. No ad revenue reporting. |
| In-conversation ads, Standalone Ad | None | FastComments runs no ads. You keep your own ad stack around the widget. |
| Social Reviews (star ratings) | Ratings and Reviews | Separate product on the same account. |
| Popular in the Community | Recent Discussions and Top Pages widgets | Recirculation driven by comment activity. |
| Comment Counter | Comment count widgets | Single and bulk. |
| Export Comments API | CSV export, API, webhooks | Export from the dashboard any time. |
| Export and Delete User Data (GDPR/CCPA) | Account and data deletion, EU region | eu.fastcomments.com keeps data in the EU. DPA available. |
| Android, iOS, React Native SDKs | Android, iOS, React Native SDKs | Native UI, SSO, live updates, threading, moderation actions. |
| Launcher, Virtual Pages, React SDK | Embed script, `fcConfigs`, React, Vue, Angular, SolidJS libraries | `update()` and `destroy()` for SPAs. |

</div>

Reszta tej sekcji przechodzi przez każdą grupę szczegółowo.

### Conversation, Votes and Reactions

Conversation OpenWeb to wątek w czasie rzeczywistym. Widget komentarzy FastComments działa tak samo: komentarze, edycje, usunięcia, głosy i akcje moderacyjne są wypychane do wszystkich oglądających wątek (<a href="https://docs.fastcomments.com/guide-customizations-and-configuration.html#disable-live-commenting" target="_blank">docs</a>). Domyślnie nowe komentarze od innych osób pojawiają się za przyciskiem "Show 2 New Comments", aby strona nie przeskakiwała pod czytelnika. Dla wydarzeń na żywo ustaw `showLiveRightAway`, aby renderowały się od razu, oraz `newCommentsToBottom`, jeśli chcesz, aby płynęły w dół jak czat.

Polubienia i niepolubienia stają się głosami w górę i w dół. Importer zachowuje oba liczniki per komentarz. Jeśli Twoja społeczność jest przyzwyczajona do jednego polubienia, przełącz styl głosowania na serca w sekcji dostosowywania widgetu. Głosowanie można także całkowicie wyłączyć.

Reakcje OpenWeb to osobny widget z dwoma‑czterema oznaczonymi ikonami na artykule (<a href="https://developers.openweb.com/docs/reactions" target="_blank">OpenWeb docs</a>). Odpowiednikiem FastComments są Page Reacts: konfigurowalny zestaw obrazków reakcji dołączony do widgetu komentarzy, zapamiętywany per strona i per użytkownik (<a href="https://docs.fastcomments.com/guide-page-reacts.html" target="_blank">docs</a>). Liczniki reakcji nie są częścią eksportu komentarzy OpenWeb, więc zaczynają się od zera.

Sortowanie mapuje się bezpośrednio. Wartości `data-sort-by` OpenWeb: best, newest i oldest odpowiadają Most Relevant, Newest First i Oldest First. Ustaw domyślne przy pomocy `defaultSortDirection` (`MR`, `NF`, `OF`) w kodzie lub w regule dostosowywania. Czytelnicy mogą przełączać w widgetcie.

`data-read-only="true"` staje się `readonly: true`, co blokuje nowe komentarze, głosy, edycje i usunięcia. `data-post-staleness-days` nie ma bezpośredniego odpowiednika, ale reguła dostosowywania może zastosować `readonly` do wzorca identyfikatora URL, a także możesz przełączać to w szablonach w zależności od wieku artykułu. `data-messages-count` to rozmiar strony, ustawiany w sekcji dostosowywania widgetu od 10 do 200 komentarzy.

### Replies and Threading

FastComments obsługuje nieograniczoną głębokość domyślnie; `maxReplyDepth` ją ogranicza (`1` daje płaską strukturę dwupoziomową). CSV OpenWeb zawiera kolumny `parent_id` i `parent_comment_id`. Importer odczytuje `parent_comment_id` i odtwarza drzewo odpowiedzi w pełnej głębokości, więc odpowiedź na odpowiedź pozostaje zagnieżdżona pod swoim bezpośrednim rodzicem, zachowując autora, znacznik czasu, głosy, liczbę flag i stan zatwierdzenia. Odpowiedzi są łączone nawet wtedy, gdy pojawiają się przed swoim rodzicem w pliku, lub gdy rodzic został zaimportowany z wcześniejszego okna eksportu. Odpowiedź, której rodzic nie występuje w żadnym eksporcie, staje się komentarzem najwyższego poziomu. Identyfikator wiadomości OpenWeb jest przechowywany w każdym komentarzu, więc ponowny import starszego płaskiego importu wstawia go w odpowiednie miejsce.

### User Profiles and Badges

Użytkownicy FastComments, w tym użytkownicy SSO, mają profil z awatarem, nazwą wyświetlaną, biografią, odznakami, karmą, liczbą komentarzy, publicznym feedem aktywności i wiadomościami prywatnymi (<a href="https://docs.fastcomments.com/guide-user-profiles.html" target="_blank">docs</a>). Każdy z elementów (aktywność, komentarze profilu, DM) może być wyłączony per użytkownik w ładunku SSO lub globalnie w konfiguracji.

Odznaka autora w OpenWeb wymaga wywołania `GET /sso/v1/user/{primary_key}` i umieszczenia zwróconego ID w `data-author-id`. W FastComments ustawiasz `displayLabel: 'Author'` (lub dowolną etykietę do 100 znaków) w ładunku SSO użytkownika oraz `isAdmin` lub `isModerator` dla personelu. Etykieta wyświetla się obok ich imienia przy każdym komentarzu. Dla bardziej rozbudowanego systemu skonfiguruj odznaki w sekcji Customize → Badges: obrazy lub tekstowe odznaki, przyznawane automatycznie po osiągnięciu progów (liczba komentarzy, głosy w górę, przypięte komentarze, status weterana, szybkość odpowiedzi) lub ręcznie, i przypisywalne z ładunku SSO przy pomocy `badgeConfig` (<a href="https://docs.fastcomments.com/guide-badges.html" target="_blank">docs</a>).

### Pinned Comments, Polls and Q&A

Każdy moderator może przypiąć lub odpiąć komentarz z menu komentarza w widgetcie lub z panelu moderacji. Przypięte komentarze są wypychane na żywo do wszystkich wątku. Jeśli chcesz automatyzacji, funkcja AI Agents udostępnia szablon Top Comment Pinner, który przypina komentarz najwyższego poziomu po przekroczeniu progu głosów (<a href="https://docs.fastcomments.com/guide-ai-agents.html" target="_blank">docs</a>).

In Conversation Polls OpenWeb pozwalają personelowi dołączyć sondę 2‑4‑opcyjną do komentarza najwyższego poziomu. Polls FastComments również dołączają się do komentarza, z 2‑10 opcjami, opcjonalną datą zamknięcia, prywatnością wyników (anonimowo, tylko adminy, wszyscy) i trybem "głosuj, aby zobaczyć wyniki". Wybierasz, kto może tworzyć sondy (wyłączone, adminy i moderatorzy, wszyscy) oraz czy anonimowi czytelnicy mogą głosować. Sondy są także dostępne w publicznym API do tworzenia ich z CMS.

OpenWeb oferował formaty Ask Me Anything. FastComments nie ma oddzielnego produktu Q&A. Praktycznym zamiennikiem jest zwykły wątek na dedykowanym identyfikatorze URL: użytkownik SSO gościa ma `displayLabel`, przypinasz wprowadzający komentarz, czytelnicy zadają pytania w komentarzach najwyższego poziomu, gość odpowiada w wątku, a powiadomienia o wzmiankach i odpowiedziach przyciągają ludzi z powrotem. Ustaw `noNewRootComments` po zamknięciu okna, aby tylko odpowiedzi były kontynuowane.

Community Spotlight (kolektor e‑maili, licznik i karty przekierowujące OpenWeb) nie ma odpowiednika. Widget obsługuje niestandardowy nagłówek HTML nad polem komentarza poprzez `headerHTML`, co zapewnia wezwanie do działania, ale nie formularz przechwytywania e‑maili.

### Live Blog

FastComments nie posiada Live Blog. Live Blog OpenWeb to produkt redakcyjny: reporterzy przypisani w panelu administracyjnym publikują aktualizacje z osadzonymi linkami, tweetami i wideo, a czytelnicy śledzą na bieżąco (<a href="https://developers.openweb.com/docs/live-blog" target="_blank">OpenWeb docs</a>).

Co FastComments oferuje dla relacji na żywo, to strona czytelnika: widget Live Chat (`embed-live-chat.min.js`) do strumieniowego czatu oraz widget komentarzy w trybie czatu (`showLiveRightAway` plus `newCommentsToBottom`) obok Twojej relacji na żywo. Dla samych aktualizacji redakcyjnych wydawcy odchodzący od OpenWeb trzymają je w CMS lub dedykowanym narzędziu live blog i osadzają FastComments poniżej do dyskusji. Media (YouTube, SoundCloud i inne) są obsługiwane w komentarzach, więc aktualizacje personelu publikowane jako komentarze zawierają bogate media.

### Topic Tracker, Notifications and Email

Topic Tracker OpenWeb pozwala czytelnikowi śledzić tematy i autorów wyciągnięte z metadanych strony i otrzymywać powiadomienia, gdy nowe artykuły pasują (<a href="https://developers.openweb.com/docs/topic-tracker" target="_blank">OpenWeb docs</a>). FastComments nie ma śledzenia tematów lub autorów pomiędzy artykułami. Czytelnicy subskrybują stronę z dzwonka powiadomień i otrzymują aktualizacje dla tego wątku, z częstotliwością wybraną przy subskrypcji: co minutę, podsumowanie godzinne lub dzienne. Jeśli śledzenie pomiędzy artykułami jest kluczowe dla Twoich wskaźników retencji, daj nam znać – ta funkcja jest na naszej roadmapie.

Reszta elementów Dzwonka Powiadomień mapuje się bezpośrednio. Widget ma dzwonek, który zmienia się na czerwony z liczbą nieprzeczytanych i wyświetla listę: odpowiedzi do Ciebie, odpowiedzi w wątku, w którym komentowałeś, wzmianki, głosy w górę Twoich komentarzy, aktywność na subskrybowanych stronach, przyznane odznaki i wiadomości prywatne (<a href="https://docs.fastcomments.com/guide-notifications.html" target="_blank">docs</a>). Powiadomienia w aplikacji są w czasie rzeczywistym przez WebSocket. E‑maile o odpowiedziach i wzmiankach są wysyłane co minutę, tylko dla zatwierdzonych komentarzy.

Dla użytkowników SSO przekaż `optedInNotifications` i `optedInSubscriptionNotifications` w ładunku – FastComments zaktualizuje ich preferencje przy następnym ładowaniu strony. E‑maile wymagają adresu e‑mail w ładunku. Szablony e‑maili są edytowalne per typ i per język w sekcji Customize → Email Templates, a wysyłka z własnej domeny z DKIM jest wspierana. Moderatorzy i administratorzy otrzymują podsumowanie dzienne, tygodniowe lub miesięczne z jednoczesnym zatwierdzaniem, odpowiadaniem i linkami do spamu.

Webhook powiadomień OpenWeb wysyła zdarzenia per‑użytkownik (`replied-message`, `liked-message`, `topic-by-keyword` itd.) do Twojego endpointu. Webhooki FastComments obejmują zasób komentarza: utworzony, zaktualizowany i usunięty, z dowolną liczbą subskrybujących endpointów (<a href="https://docs.fastcomments.com/guide-webhooks.html" target="_blank">docs</a>). Jeśli używałeś webhooka powiadomień do własnego systemu e‑mail, odtworzysz tę logikę na zdarzeniach komentarzy lub pozwolisz FastComments wysyłać e‑maile.

### SSO: From codeA/codeB to a Signed Payload

Handshake OpenWeb ma sześć kroków: czekaj na `spot-im-api-ready`, OpenWeb generuje `codeA`, Twój klient wysyła go do backendu, backend potwierdza użytkownika i wywołuje `GET https://www.spot.im/api/sso/v1/register-user?code_a=...&access_token=...&primary_key=...&user_name=...`, OpenWeb zwraca `codeB`, a Twój klient odsyła `codeB` z powrotem do OpenWeb (<a href="https://developers.openweb.com/docs/single-sign-on" target="_blank">OpenWeb docs</a>). Wylogowanie wywołuje `window.SPOTIM.logout()`.

Secure SSO FastComments nie wymaga obrotu i nie ma nowego endpointu po Twojej stronie. Gdy renderujesz stronę dla zalogowanego użytkownika, backend serializuje użytkownika, koduje Base64 i podpisuje HMAC‑SHA256 przy użyciu Twojego sekretu API. Widget wysyła ładunek wraz z żądaniami, a FastComments weryfikuje podpis (<a href="https://docs.fastcomments.com/guide-customizations-and-configuration.html#sso-secure" target="_blank">docs</a>). W Node:

<div class="code">    const crypto = require('crypto');
    const user = {
        id: 'your-primary-key',          // same value you used as primary_key with OpenWeb
        email: 'reader@example.com',
        username: 'reader',              // same user_name you registered with OpenWeb
        displayName: 'Reader Name',
        avatar: 'https://example.com/avatars/reader.png',
        displayLabel: 'Subscriber',      // optional, replaces the Author Badge lookup
        optedInNotifications: true
    };
    const userDataJSONBase64 = Buffer.from(JSON.stringify(user)).toString('base64');
    const timestamp = Date.now();
    const verificationHash = crypto
        .createHmac('sha256', process.env.FASTCOMMENTS_API_SECRET)
        .update(timestamp + userDataJSONBase64)
        .digest('hex');
    // Render into the page config:
    // sso: { userDataJSONBase64, verificationHash, timestamp,
    //        loginURL: 'https://example.com/login', logoutURL: 'https://example.com/logout' }
</div>

Znacznik czasu to milisekundy od epoki i jest odrzucany, jeśli starszy niż dwa dni. Dla niezalogowanego czytelnika pomiń trzy podpisane pola i przekaż tylko `loginURL` (lub funkcję `loginCallback`), a widget pokaże okno logowania zamiast edytora. Pełne przykłady w Node, Java i PHP znajdują się w <a href="https://github.com/FastComments/fastcomments-code-examples/tree/master/sso" target="_blank">repozytorium przykładów kodu</a>.

Użytkownicy są tworzeni przy pierwszym ładowaniu strony. Nie rejestrujesz ich masowo. Ponieważ importer OpenWeb dopasowuje autorów komentarzy po `user_name`, użytkownik, którego ładunek SSO zawiera tę samą `username`, rości sobie prawo do zaimportowanych komentarzy przy pierwszym załadowaniu wątku i może je edytować lub usuwać od tego momentu. Istnieje także API użytkownika SSO, jeśli chcesz wstępnie tworzyć konta.

Za każdym razem, gdy ładunek jest wysyłany, FastComments aktualizuje rekord użytkownika, więc zmieniona nazwa wyświetlana lub awatar po Twojej stronie propaguje się przy następnym wyświetleniu strony. Ustaw pole na `null`, aby je wyczyścić.

Jeśli używałeś third‑party SSO OpenWeb z Auth0, Gigya lub Piano poprzez `window.SPOTIM.startSSOForProvider`, przepływ FastComments jest taki sam: po uwierzytelnieniu użytkownika przez dostawcę, backend buduje i podpisuje ładunek. Nie ma specyficznej integracji po stronie FastComments.

Dwie inne opcje istnieją. Simple SSO przekazuje obiekt użytkownika niepodpisany z klienta, dla platform bez backendu, i oznacza aktywność jako zweryfikowaną, gdy podany jest e‑mail (<a href="https://docs.fastcomments.com/guide-customizations-and-configuration.html#sso-simple" target="_blank">docs</a>). SAML 2.0 podpisuje Twój personel w samym panelu FastComments przez Okta, Azure AD lub ADFS, z mapowaniem ról, i jest dostępny w planach enterprise (<a href="https://docs.fastcomments.com/guide-saml.html" target="_blank">docs</a>).

### Moderation

API polityki moderacji per‑artykuł OpenWeb ma cztery wartości: `spot_policy`, `approve_all`, `publish_and_moderate` i `require_approval`. FastComments konfiguruje te same zachowania w Ustawieniach Moderacji: automatyczne zatwierdzanie włączone lub wyłączone, wymóg zatwierdzenia tylko przy pierwszym komentarzu użytkownika oraz auto‑zatwierdzanie tylko zweryfikowanych (zalogowanych lub SSO) komentarzy. Reguły stosowane są globalnie lub do wzorca identyfikatora URL, takiego jak `*/politics/*`, co pozwala odtworzyć politykę per‑sekcja. Każdy komentarz, zatwierdzony lub nie, trafia do panelu Moderate Comments, więc model publikuj‑potem‑recenzuj jest domyślnym widokiem (<a href="https://docs.fastcomments.com/guide-moderation.html" target="_blank">docs</a>).

Import przenosi stan moderacji. OpenWeb `message_status` o wartości `approved` importuje się jako zatwierdzony i recenzowany; `rejected` jako spam i recenzowany; wszystko inne jako niezatwierdzony i nieprzejrzany, więc pojawia się w kolejce moderacji. `reports_count` staje się liczbą flag komentarza.

Automatyczna moderacja w FastComments jest warstwowa, a nie jednorazowy system jak Aida:

- Klasyfikator spamu, ciągle trenowany, dostępny jako wspólny model dla wszystkich najemców lub izolowany dla Twojego najemcy, z czynnikiem zaufania, który łagodzi filtrowanie dla długoletnich lub często przypiętych użytkowników.
- Opcjonalna kontrola spamu LLM w rozliczeniu Flex (modele otwarte jak GLM‑5.3 są dostępne)
- Moderacja treści obrazów przy niskiej, średniej lub wysokiej czułości dla przesyłanych obrazów.
- Lokalna czarna lista słów, ok. 450 domyślnych fraz, edytowalna, maskująca dopasowania gwiazdkami. To miejsce na Twoje ograniczone słowa z OpenWeb.
- Progi flag, które automatycznie ukrywają komentarz po N zgłoszeniach.
- Zapobieganie powtarzaniu i prawie‑duplikatom, zawsze włączone.
- AI Agents: agenci zdarzeniowi z wyraźną listą dozwolonych narzędzi (oznacz spam, zatwierdź, zablokuj, przypnij, ostrzeż DM, zbanuj, przyznaj odznakę, odpowiedz). Każdy agent zaczyna w trybie dry run, wrażliwe narzędzia mogą być uzależnione od zatwierdzenia człowieka, a każda akcja jest logowana z uzasadnieniem i wynikiem wiarygodności.

API wyciszania użytkowników OpenWeb pozwala jednemu czytelnikowi SSO wyciszyć innego. Odpowiednikiem w FastComments jest Block User w menu komentarza, dostępny dla każdego zalogowanego czytelnika. Bany są akcją moderatora: permanentne lub na określony czas, opcjonalnie shadow ban (użytkownik widzi swój komentarz, nikt inny nie), opcjonalnie po zahashowanym IP, z plus‑aliasami e‑mail traktowanymi jako jeden adres. Lista zbanowanych użytkowników jest przeszukiwalna po e‑mailu, imieniu, moderatorze i komentarzu, który spowodował bana.

Panel Moderate Comments obsługuje filtry (wymaga przeglądu, wymaga zatwierdzenia, spam, oznaczone, od zbanowanych użytkowników) oraz wyszukiwanie tekstowe, akcje masowe z cofnięciem i pauzą, "select all matching" dla bardzo dużych kolejek, grupy moderacji, tak aby Twój dział sportowy widział tylko wątki sportowe, logi per‑komentarz pokazujące, dlaczego e‑mail został wysłany lub nie, oraz udostępnialne linki filtrowane. Moderatorzy mają tylko panel; nie mogą zmieniać ustawień ani importować danych.

### Analytics

Analytics FastComments pokazuje użytkowników online w danej chwili na Twoich witrynach i per strona, najpopularniejsze strony pod względem komentarzy lub aktywnych czytelników, oraz serię dzienną dla odsłon, komentarzy, głosów i utworzonych kont (<a href="https://docs.fastcomments.com/guide-analytics.html" target="_blank">docs</a>). Statystyki moderatorów są oddzielne. Liczby są prawie w czasie rzeczywistym, opóźnione maksymalnie o minutę, a każda odsłona jest liczona, a nie próbkowana.

Nie znajdziesz tu nic o wypełnieniu reklam, CPM ani przychodach, ponieważ nie ma reklam. Jeśli dashboard OpenWeb był Twoim źródłem raportowania zaangażowania‑do‑przychodów, to raportowanie przenosi się do Twojego własnego stosu reklamowego.

### Monetization

OpenWeb umieszcza reklamy wewnątrz i wokół Conversation i oferuje jednostkę Standalone Ad, z kampaniami konfigurowanymi przez kontakt w OpenWeb (<a href="https://developers.openweb.com/docs/standalone-ad" target="_blank">OpenWeb docs</a>). FastComments nie uruchamia reklam w widgetcie, nie ma podziału przychodów i nie ładuje skryptów reklamowych ani śledzących stron trzecich. Widget to iframe, który umieszczasz; sloty reklamowe powyżej i poniżej są Twoje i działają przez to, co już używasz.

Kompromis jest wyraźny: tracisz to, co OpenWeb Ci płaciło, a zyskujesz stały, przewidywalny koszt i widget, który nie generuje dodatkowych żądań reklamowych. Branding jest usunięty w planach Flex i Pro, a white‑labeling jest dostępny w planach Pro i Enterprise.

### Data Export and Privacy

Wszystkie dane komentarzy można wyeksportować z panelu FastComments jako CSV w dowolnym momencie, z datami w formacie UTC ISO, a te same dane są dostępne przez API. Webhooki obejmują bieżącą synchronizację. Pliki importu są usuwane z FastComments zaraz po zakończeniu importu.

W kontekście GDPR i CCPA OpenWeb udostępnia API eksportu i usuwania, gdzie komentarze usuniętych użytkowników pozostają przypisane do losowego konta gościa (<a href="https://developers.openweb.com/docs/export-and-delete-user-data" target="_blank">OpenWeb docs</a>). FastComments obsługuje żądania eksportu i usuwania danych, oferuje Umowę o Przetwarzaniu Danych oraz prowadzi oddzielne wdrożenie w UE pod adresem <a href="https://eu.fastcomments.com" target="_blank">eu.fastcomments.com</a>, z danymi replikowanymi wyłącznie w punktach obecności UE. Załóż tam konto, jeśli Twoi czytelnicy są w Europie. W regionie UE zakazy agentów AI zawsze wymagają zatwierdzenia człowieka, aby spełnić Art. 17 DSA.

Dane komentarzy w globalnym wdrożeniu są replikowane w regionach, w tym w węźle Singapur, a widget jest serwowany z własnej DNS i CDN FastComments. Skrypt embed ma około 35 KB po skompresowaniu w tranzycie.

### Mobile SDKs

OpenWeb dostarcza SDK‑y Android, iOS i React Native z Conversation, Articles, Authentication, Notifications, Reactions i In Conversation Polls. FastComments dostarcza natywne biblioteki <a href="https://docs.fastcomments.com/guide-lib-android.html" target="_blank">Android</a>, <a href="https://docs.fastcomments.com/guide-lib-ios.html" target="_blank">iOS</a> i <a href="https://docs.fastcomments.com/guide-lib-react-native-sdk.html" target="_blank">React Native</a> z wątkowanymi komentarzami, aktualizacjami na żywo przez WebSocket, Secure SSO, głosowaniem, wzmiankami, uploadem obrazów, akcjami moderacji (flagi, przypinanie, blokowanie), tematyzowaniem, trybem live chat i komponentem feedu społecznościowego. Region UE to flaga konfiguracyjna. Nie ma osobnego SDK reklamowego, bo nie ma reklam.

### Embed and SPA Integration

Launcher i kontener OpenWeb:

<div class="code">    &lt;script async src="https://launcher.spot.im/spot/SPOT_ID" data-spotim-module="spotim-launcher"&gt;&lt;/script&gt;
    &lt;div data-spotim-module="conversation"
         data-post-id="POST_ID"
         data-post-url="ARTICLE_URL"
         data-article-tags="TOPIC1, TOPIC2"&gt;&lt;/div&gt;
</div>

Odpowiednik FastComments:

<div class="code">    &lt;script async src="https://cdn.fastcomments.com/js/embed-v2-async.min.js"&gt;&lt;/script&gt;
    &lt;div id="fastcomments-widget"&gt;&lt;/div&gt;
    &lt;script&gt;
        window.fcConfigs = [{
            target: '#fastcomments-widget',
            tenantId: 'YOUR_TENANT_ID',
            urlId: 'POST_ID',        // was data-post-id
            url: 'ARTICLE_URL',      // was data-post-url
            pageTitle: 'Article title'
        }];
    &lt;/script&gt;
</div>

Twój tenant ID znajduje się na <a href="https://fastcomments.com/auth/my-account/api-secret" target="_blank">stronie poświadczeń</a> po założeniu konta. `data-article-tags` nie ma odpowiednika, ponieważ nie ma śledzenia tematów; hashtagi w komentarzach to odrębna funkcja.

Dla nieskończonego przewijania i aplikacji jednopostaciowych (SPA) podejście Virtual Pages OpenWeb to jeden kontener na artykuł. W FastComments wywołujesz `FastCommentsUI(element, config)` per wątek, a później `instance.update(newConfig)` aby zamienić identyfikator URL lub `instance.destroy()` aby usunąć (<a href="https://docs.fastcomments.com/guide-dynamic-comment-widget.html" target="_blank">docs</a>). Biblioteki React, Vue, Angular i SolidJS obsługują to, gdy zmienia się prop konfiguracyjny. Callbacki cyklu życia (`onInit`, `onRender`, `commentCountUpdated`, `onReplySuccess`, `onVoteSuccess`, `onAuthenticationChange`, `onCommentSubmitStart`) zastępują zdarzenia DOM `spot-im-*`, które nasłuchiwałeś.

Liczniki komentarzy na stronach indeksowych używają widgetu licznika komentarzy, pojedynczego lub zbiorczego. Dla SEO komentarze są renderowane bezpośrednio w stronie dla robotów wyszukiwarek, a nie w iframe, więc nie ma wywołania API SEO do konfiguracji.

### Step-by-Step Cutover

**1. Utwórz konto i skonfiguruj podstawy.** Zarejestruj się na fastcomments.com lub eu.fastcomments.com. Ustaw ustawienia moderacji, czarną listę słów, styl głosowania, domyślne sortowanie i niestandardowy CSS w sekcji dostosowywania widgetu. Dodaj moderatorów i grupy moderacji. Jeśli masz wielu administratorów, wsparcie zaimportuje ich dla Ciebie.

**2. Uruchom pierwszy import.** Przejdź do <a href="https://fastcomments.com/auth/my-account/manage-data/import" target="_blank">Manage Data, Import</a>, wybierz OpenWeb (.csv) i prześlij. Import działa jako zadanie w tle; strona pokazuje liczbę wierszy i status, a Ty otrzymujesz e‑mail po zakończeniu (<a href="https://docs.fastcomments.com/guide-migrations.html" target="_blank">docs</a>). Każdy komentarz zachowuje swój identyfikator wiadomości OpenWeb jako zewnętrzny ID, więc ponowne uruchomienie importu aktualizuje istniejące komentarze zamiast tworzyć duplikaty.

**3. Zweryfikuj liczby.** Porównaj liczbę wierszy zadania z Twoim eksportem. Otwórz kilka URL‑ów o wysokim ruchu w panelu moderacji i sprawdź autorów, daty, sumy głosów i stany zatwierdzenia. Potwierdź, że odrzucone komentarze pojawiają się jako spam, a oczekujące w kolejce.

**4. Zbuduj ładunek SSO.** Zaimplementuj kod podpisujący powyżej w backendzie, używając tych samych `id` i `username`, które używałeś w OpenWeb. Przetestuj na koncie personelu na stronie testowej: zaimportowane komentarze wyświetlają się jako ich własne, a edycja i usuwanie pojawiają się w menu komentarza.

**5. Zamień embed w szablonie testowym.** Zastąp launcher i kontener snippetem FastComments, mapując `data-post-id` na `urlId` i `data-post-url` na `url`. Usuń `window.SPOTIM.logout()` i nasłuchiwacze `spot-im-*`, lub zamapuj je na odpowiednie callbacki. Zastosuj swój CSS w regule dostosowywania zamiast w kodzie, aby był testowany przy każdej aktualizacji FastComments.

**6. Uruchom równolegle.** Umieść FastComments w sekcji lub procentowo w artykułach, podczas gdy OpenWeb pozostaje w pozostałych. Nic po stronie OpenWeb nie musi się zmienić. Monitoruj kolejkę moderacji i stronę analityki. Czytelnicy komentujący na stronach FastComments w tym oknie nie będą w Twoim eksporcie OpenWeb, więc zaplanuj ostateczny import przed ich startem, nie po nim.

**7. CSP i DNS.** Jeśli używasz Content‑Security‑Policy, zezwól `cdn.fastcomments.com` i `fastcomments.com` (lub `eu.fastcomments.com`) na `script-src`, `frame-src` i `connect-src`, i usuń wpisy `spot.im` i `openweb.com` po usunięciu launchera. Nic nie zmienia się w Twoim DNS. Przekierowania nie są potrzebne, ponieważ identyfikatory URL się zgadzają.

**8. Ostateczny import i uruchomienie.** Pobierz jeszcze jeden eksport OpenWeb obejmujący okres równoległego działania, prześlij go (ponowny import jest bezpieczny), a następnie wdroż zmianę szablonu na wszystkich stronach i usuń launcher, Reakcje, Topic Tracker, Spotlight, dzwonek i kontenery reklam.

**9. Lista kontrolna uruchomienia.**

- Live commenting widoczny na produkcyjnym artykule w dwóch przeglądarkach.
- Logowanie SSO, wylogowanie i komentarz pod prawdziwym kontem subskrybenta.
- Moderatorzy otrzymują podsumowanie i mogą zatwierdzać z niego.
- E‑maile o odpowiedziach i wzmiankach przychodzą i odsyłają do właściwej strony.
- Lista banów i czarna lista słów wypełniona.
- Page Reacts i liczniki komentarzy renderują się tam, gdzie wcześniej były Reakcje i licznik.
- Raporty CSP czyste.
- Ostatnie porównanie liczby komentarzy między eksportem a panelem.

### Co tracisz i co jest inne

Bycie szczerym co do luk:

- **Live Blog.** Brak odpowiednika. Trzymaj go w CMS lub narzędziu do live blogowania i umieść FastComments pod nim.
- **Topic Tracker.** Brak śledzenia tematów lub autorów pomiędzy artykułami. Tylko subskrypcje stron.
- **Community Spotlight.** Brak produktu kart CTA. `headerHTML` daje wiadomość nad kompozytorem, nie formularz przechwytywania e‑maili.
- **Przychody z reklam.** Brak. Widget jest wolny od reklam z założenia.
- **Webhook powiadomień.** Webhooki dotyczą zdarzeń komentarza, nie zdarzeń powiadomień per‑użytkownik.
- **Historia reakcji.** Liczniki reakcji na poziomie artykułu nie są w eksporcie komentarzy i zaczynają się od zera. Czasem możemy je wyciągnąć ze strony.
- **Historia sond.** Definicje sond i głosy nie są w eksporcie komentarzy; tekst komentarza sondy jest importowany, sama sonda nie. Czasem możemy je wyciągnąć ze strony.
- **Model logowania.** Czytelnicy bez SSO logują się magic linkiem zamiast hasła lub przycisku logowania społecznościowego.
- **Zespół moderacji ludzkiej.** OpenWeb dostarcza zespół moderacji z Aida. FastComments zapewnia narzędzia, klasyfikatory i agenty; ludzie są po Twojej stronie.

Co zyskujesz, w tym samym duchu: widget, który dodaje jeden mały skrypt i nie generuje żądań reklamowych, moderację, którą jeden człowiek może obsłużyć na dużej witrynie dzięki akcjom masowym i agentom, SSO jako funkcję podpisywania zamiast protokołu oraz dostawcę, który nie jest pod nadzorem sądowym.

### Harmonogram i darmowa oferta importu

Zaplanowanie od jednego do dwóch tygodni dla wydawcy z jedną integracją SSO i kilkuset tysiącami komentarzy: dzień lub dwa na eksport i pierwszy import, kilka dni na SSO i szablony, okno równoległego działania, a potem ostateczny import i przełączenie. Platforma już obsługuje tę skalę: United Cloud obsługuje ponad dziesięć portali i miliony komentarzy w FastComments, a itsfoss.com przeniosło historię 88 000 komentarzy z innego dostawcy przy użyciu tego samego samodzielnego importera.

FastComments importuje Twój eksport CSV z OpenWeb za darmo, pomaga uruchomić OpenWeb i FastComments równolegle podczas przejścia oraz wspiera samą migrację, w tym pytania o wątkowanie i dopasowanie użytkowników. Plany Enterprise zawierają SLA 99,99 % i wsparcie w ciągu godziny w godzinach pracy. Cennik Flex oparty na zużyciu jest dostępny dla witryn, które chcą rozpocząć bez umowy.

<a href="https://fastcomments.com/contact-us">Napisz do nas</a> z rozmiarem eksportu i konfiguracją SSO, a wrócimy z planem.

### Podsumowanie

Pobierz swój eksport już dziś. Pamiętaj: te same identyfikatory postów stają się identyfikatorami URL, stan moderacji przenosi się, a embed to prosta zamiana. Miejsca, w których FastComments różni się, są wymienione powyżej, abyś mógł podjąć decyzję na podstawie faktów. :)

Cheers!

{{/isPost}}

---