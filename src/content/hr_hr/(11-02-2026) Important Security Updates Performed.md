[category:Security]
[category:Announcements]

###### [postdate]
# [postlink]Izvršena važna sigurnosna ažuriranja[/postlink]

{{#unless isPost}}
Popravili smo operativni sustav na svim našim poslužiteljima kako bismo otklonili nedavno otkrivenu Linux TCP ranjivost i ažurirali Node.js na njegovu listopadsku sigurnosnu verziju. Nije potrebna nikakva radnja s vaše strane.
{{/unless}}

{{#isPost}}

### Što je novo

Nedavno smo dovršili dva sigurnosna ažuriranja u FastComments infrastrukturi: ažuriranje operativnog sustava za otklanjanje ranjivosti u TCP kodu Linux kernela i ažuriranje Node.js-a za preuzimanje najnovije sigurnosne verzije.

### Linux kernel

Svi naši poslužitelji su zakrpani i sada pokreću kernel koji uključuje popravak za <a href="https://security-tracker.debian.org/tracker/CVE-2026-98432" target="_blank">CVE-2026-98432</a>.

Radi se o use-after-free ranjivosti u IPv4 TCP kodu kernela. Kernel bi mogao osloboditi IP opcije povezane s vezom dok drugi CPU još uvijek čita te podatke, na primjer prilikom izgradnje SYNACK odgovora tijekom TCP handshake-a. Popravak čeka dok nijedan CPU više ne čita tu memoriju prije nego što je oslobodi.

### Node.js

FastComments radi na Node.js-u i ažurirali smo ga na verziju 24.22.1, zakrpanu izdanje za 24.x liniju iz <a href="https://nodejs.org/en/blog/vulnerability/october-2026-security-releases" target="_blank">listopadskog 2026. Node.js sigurnosnog izdanja</a>.

To izdanje ispravlja 10 ranjivosti u podržanim Node.js verzijama. 8 od njih utječe na 24.x liniju, a 4 od njih su ocijenjene kao visoke: dvije u TLS validaciji IP adresa, jedna u rukovanju DNS imenima i jedna u Brotli dekoderu. Također ažurira uključene ovisnosti, uključujući OpenSSL, c-ares, Undici i CA certifikat paket.

### Što trebate učiniti

Ništa. Ova ažuriranja su isključivo na našoj strani, pa vaši widgeti, API integracije i SSO konfiguracije ne trebaju nikakve promjene.

### Zaključak

Održavanje naše infrastrukture zakrpane je stalni dio rada FastComments-a i nastavit ćemo primjenjivati takva ažuriranja čim budu objavljena. Ako imate bilo kakvih pitanja, javite nam ih u nastavku.

Pozdrav!

{{/isPost}}