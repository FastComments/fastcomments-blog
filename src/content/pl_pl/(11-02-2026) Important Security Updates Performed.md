[category:Security]
[category:Announcements]

###### [postdate]
# [postlink]Wykonane ważne aktualizacje zabezpieczeń[/postlink]

{{#unless isPost}}
Zaktualizowaliśmy system operacyjny na wszystkich naszych serwerach, aby naprawić niedawno wykrytą lukę w Linux TCP, oraz zaktualizowaliśmy Node.js, aby uwzględnić październikowe wydanie zabezpieczeń. Nie wymaga to żadnych działań z Twojej strony.
{{/unless}}

{{#isPost}}

### Co nowego

Ostatnio zakończyliśmy dwie aktualizacje zabezpieczeń w infrastrukturze FastComments: aktualizację systemu operacyjnego, aby naprawić
lukę w kodzie TCP jądra Linux, oraz aktualizację Node.js, aby uwzględnić najnowsze wydanie zabezpieczeń.

### Jądro Linux

Wszystkie nasze serwery zostały załatane i teraz działają na jądrze, które zawiera poprawkę dla
<a href="https://security-tracker.debian.org/tracker/CVE-2026-98432" target="_blank">CVE-2026-98432</a>.

Jest to błąd typu use‑after‑free w kodzie IPv4 TCP jądra. Jądro mogło zwolnić opcje IP podłączone do połączenia, podczas gdy
inny procesor nadal je odczytywał, na przykład podczas budowania odpowiedzi SYNACK w trakcie nawiązywania połączenia TCP. Poprawka czeka, aż
żaden procesor nie będzie już mógł odczytywać tej pamięci przed jej zwolnieniem.

### Node.js

FastComments działa na Node.js i zaktualizowaliśmy się do wersji 24.22.1, poprawionej wersji linii 24.x z
<a href="https://nodejs.org/en/blog/vulnerability/october-2026-security-releases" target="_blank">October 2026 Node.js security release</a>.

To wydanie naprawia 10 luk w obsługiwanych wersjach Node.js. 8 z nich dotyczy linii 24.x, a 4 z nich
są oceniane jako wysokie: dwie w walidacji TLS adresów IP, jedna w obsłudze nazw DNS oraz jedna w dekoderze Brotli. Aktualizuje także dołączone zależności, w tym OpenSSL, c‑ares, Undici oraz pakiet certyfikatów CA.

### Co musisz zrobić

Nic. Te aktualizacje są po naszej stronie, więc Twoje widgety, integracje API i konfiguracje SSO nie wymagają żadnych zmian.

### Podsumowanie

Utrzymywanie naszej infrastruktury w stanie aktualnym jest stałym elementem prowadzenia FastComments i będziemy kontynuować stosowanie takich aktualizacji,
gdy tylko będą dostępne. Jeśli masz jakiekolwiek pytania, daj nam znać poniżej.

Pozdrawiamy!

{{/isPost}}

---