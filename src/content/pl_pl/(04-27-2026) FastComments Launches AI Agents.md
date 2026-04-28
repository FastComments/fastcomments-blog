---
[category:Features]
[category:Moderation]
[category:Announcements]
###### [postdate]
# [postlink]FastComments uruchamia agentów AI[/postlink]

{{#unless isPost}}
Możesz teraz uruchomić agentów AI, którzy przeczytają każdy nowy komentarz, odpowiedzą w Twoim stylu, podejmą trudne decyzje oraz przyznają odznaki najlepszym współtwórcom. Działają zgodnie z Twoim harmonogramem, w ramach Twojego budżetu i robią tylko to, co im na to pozwolisz.
{{/unless}}

{{#isPost}}

### Uwaga do Społeczności

Chcę to od razu wyjaśnić - nie budujemy czegoś, co pozwala botom udawać prawdziwych użytkowników. Nie wierzę, że to jest dobre dla internetu, społeczności online ani dla kierunku naszego produktu. Celem agentów AI jest wzmocnienie zespołów moderacyjnych lub właścicieli społeczności, którzy nie mogą pozwolić sobie na dedykowanych moderatorów.

Wszystkie komentarze pozostawione przez AI muszą mieć tag "Bot". Tak produkt zostanie wypuszczony, a wszelkie strony, które w jakiś sposób usuną tag Bot z komentarzy botów, będą miały tę funkcję wyłączoną. Ponadto korzystamy tylko z dostawców LLM, którzy nie trenują na naszych danych. Obecnie używamy DeepInfra, który zapewnia jedynie inferencję dla modeli open source.

Teraz, gdy to jest wyjaśnione :)

### Co nowego

FastComments teraz zapewnia zautomatyzowane agenty, które mogą przeprowadzać zadania moderacyjne, przypinać komentarze, podsumowywać wątki komentarzy i nie tylko.

Możesz je znaleźć w sekcji [Dostosuj, a następnie Agenci AI](https://fastcomments.com/auth/my-account/ai-agents).

### Wyzwalacze i Narzędzia

Każdy agent jest skonfigurowany z listą wyzwalaczy i listą dozwolonych działań. Wyzwalacze obejmują nowe komentarze, edycje, usunięcia, progi głosowania, progi flag, działania moderatorów, nowych komentujących i inne. Jeśli nie chcesz, aby agent banował użytkowników, możesz wyłączyć narzędzie banowania.

Na przykład, jeśli chcesz tylko "podsumowującego wątek", który odpowiada tylko po pewnej liczbie komentarzy i przypina ten komentarz, możesz skonfigurować uprawnienia agenta, aby miał dostęp tylko do tych działań.

Możesz również ograniczyć agenta do konkretnych wzorców URL, takich jak `/news/*` lub `/forums/*`, oraz do konkretnych lokalizacji, aby agent społeczności francuskojęzycznej nie zaczynał odpowiadać na Twoje angielskie strony.

### Dry Run, Zatwierdzenia i Budżety

Każdy agent uruchamiany jest domyślnie w trybie dry-run. W trybie dry-run agent czyta kontekst i zapisuje, co by zrobił, ale nie wykonuje żadnych działań. Możesz obserwować kilka rzeczywistych wyzwalaczy, przyjrzeć się proponowanym działaniom i rozumowaniu agenta oraz zdecydować, czy mu ufasz, zanim go aktywujesz.

W przypadku wrażliwych narzędzi możesz wymagać zatwierdzenia przez człowieka. Agent kolejkowa działanie, administrator przegląda proponowane działanie wraz z rozumowaniem i pewnością agenta, a następnie zatwierdza lub odrzuca. Banowanie zawsze wymaga zatwierdzenia w UE zgodnie z artykułem 17 DSA, ale możesz wymagać zatwierdzenia dla dowolnego narzędzia, w dowolnym miejscu.

Każdy agent ma dzienny i miesięczny limit budżetu. Gdy limit zostanie osiągnięty, agent przestaje działać, aż okres się zakończy. Informujemy Cię e-mailem o domyślnych prógach na poziomie 80 procent i 100 procent (możesz również wybrać alert na poziomie 50 procent), aby uniknąć niespodziewanych faktur.

### Pamięć

Agenci mają pamięć, którą agent czyta i zapisuje dla siebie. Mogą zapisywać krótkie notatki o użytkowniku lub wzorcu, takie jak "ostrzegany za nie na temat trzy razy" lub "spamerzy publikujący linki do domeny X", i odczytywać te notatki przy następnym wyzwalaczu. Pamięć jest współdzielona pomiędzy agentami w Twoim zasobie, więc notatki agenta powitalnego mogą informować decyzje agenta moderacyjnego później. Pamięć związana z użytkownikiem jest czyszczona, jeśli użytkownik usunie swoje konto.

### Odtwarzanie i Testowanie

Przed uruchomieniem agenta na żywych danych, możesz przetestować go na historycznych komentarzach. Narzędzie do odtwarzania przechodzi przez prawdziwe przeszłe komentarze w trybie dry-run, pokazuje, co agent by zrobił i klasyfikuje każdą proponowaną akcję w odniesieniu do tego, co rzeczywiście się wydarzyło. To najszybszy sposób na dostrojenie systemowego podpowiedzi bez czekania na wydarzenia na żywo.

### Modele, Prywatność i Koszty

Agenci działają na modelach open-weight hostowanych przez dostawców infrastruktury, którzy nie trenują na danych klientów. Dziś możesz wybierać pomiędzy szybszym modelem (gpt-oss-120B-turbo) a mądrzejszym, ale wolniejszym (GLM 5.1), a my będziemy dalej dodawać opcje w miarę ewolucji rynku. Koszt jest mierzony na podstawie tokenów i przeliczany na dolary na Twojej stronie użytkowania, w towarzystwie codziennych i miesięcznych trendów.

W ramach tej zmiany obniżamy nasze koszty tokenów z $80 za 1M tokenów do $20 za 1M połączonych tokenów wejściowych/wyjściowych. Większość naszych klientów wydaje bardzo mało na tokeny do wykrywania spamu, ponieważ pierwotny system wykrywania spamu oparty na LLM tylko kierował do LLM, jeśli spam przeszedł przez klasyfikator naive-bayes, stąd pierwotnie wysoka cena. Obniżamy koszt, aby zachęcić do korzystania z nowej funkcji agentów.

W pewnym momencie, gdy koszty pamięci spadną i modele takie jak GLM 5.1 staną się bardziej rozsądne do uruchomienia na własnym sprzęcie, zaprzestaniemy korzystania z zewnętrznego dostawcy i uruchomimy sprzęt samodzielnie.

### Na zakończenie

Długo myśleliśmy, jak zbudować to, aby nie sprawiało wrażenia, że agent jest odpowiedzialny. Tryb dry-run, zatwierdzenia, ograniczone narzędzia, limity budżetowe i odtwarzanie wobec historii istnieją, aby pomóc Ci zachować kontrolę. Mamy nadzieję, że agenci AI uwolnią Twoich moderatorów do rozmów, które naprawdę wymagają człowieka.

Dziękujemy naszym klientom, którzy na bieżąco dzielą się opiniami, abyśmy mogli myśleć o takich pomysłach jak ten oraz dać nam czas na ich dobre uruchomienie. Jak zawsze, daj nam znać poniżej, jeśli napotkasz jakiekolwiek problemy.

Na zdrowie!

{{/isPost}}

---