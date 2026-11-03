[category:Security]
[category:Announcements]

###### [postdate]
# [postlink]Važne sigurnosne nadogradnje izvršene[/postlink]

{{#unless isPost}}
Popravili smo operativni sistem na svim našim serverima kako bismo otklonili nedavnu Linux TCP ranjivost i ažurirali Node.js da preuzme oktobarsko sigurnosno izdanje. Nije potrebna nikakva akcija s vaše strane.
{{/unless}}

{{#isPost}}

### Šta je novo

Nedavno smo završili dva sigurnosna ažuriranja u FastComments infrastrukturi: ažuriranje operativnog sistema za otklanjanje ranjivosti u TCP kodu Linux kernela i ažuriranje Node.js-a kako bismo preuzeli najnovije sigurnosno izdanje.

### Linux kernel

Svi naši serveri su ažurirani i sada rade na kernelu koji uključuje popravku za <a href="https://security-tracker.debian.org/tracker/CVE-2026-98432" target="_blank">CVE-2026-98432</a>.

Ovo je use-after-free u IPv4 TCP kodu kernela. Kernel bi mogao osloboditi IP opcije prikačene na vezu dok drugi CPU još uvek čita te opcije, na primer tokom izgradnje SYNACK odgovora tokom TCP rukovanja. Popravka čeka dok nijedan CPU više ne može čitati tu memoriju pre nego što je oslobodi.

### Node.js

FastComments radi na Node.js-u i ažurirali smo ga na verziju 24.22.1, zakrpljeno izdanje za 24.x liniju iz <a href="https://nodejs.org/en/blog/vulnerability/october-2026-security-releases" target="_blank">oktobarskog 2026 Node.js sigurnosnog izdanja</a>.

To izdanje otklanja 10 ranjivosti u podržanim Node.js verzijama. 8 njih utiče na 24.x liniju, a 4 od njih su ocenjene kao visoke: dve u TLS validaciji IP adresa, jedna u obradi DNS imena i jedna u Brotli dekoderu. Takođe ažurira uvezane zavisnosti uključujući OpenSSL, c-ares, Undici i CA paket sertifikata.

### Šta treba da uradite

Ništa. Ova ažuriranja su isključivo na našoj strani, tako da vaši widgeti, API integracije i SSO konfiguracije ne zahtevaju nikakve promene.

### Zaključak

Održavanje naše infrastrukture ažuriranom je stalni deo rada FastComments-a i nastavićemo da primenjujemo ovakva ažuriranja čim budu objavljena. Ako imate bilo kakvih pitanja, javite nam ih ispod.

Pozdrav!

{{/isPost}}

---