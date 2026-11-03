[category:Security]
[category:Announcements]

###### [postdate]
# [postlink]Izvedene pomembne varnostne posodobitve[/postlink]

{{#unless isPost}}
Popravili smo operacijski sistem na vseh naših strežnikih, da odpravimo nedavno ranljivost Linux TCP, ter posodobili Node.js, da vključimo njegovo oktobrsko varnostno izdajo. Na vaši strani ni potrebna nobena akcija.
{{/unless}}

{{#isPost}}

### Kaj je novega

V zadnjem času smo zaključili dve varnostni posodobitvi v infrastrukturi FastComments: posodobitev operacijskega sistema za odpravo ranljivosti v TCP kodi jedra Linux, ter posodobitev Node.js, da vključimo najnovejšo varnostno izdajo.

### Jedro Linux

Vsi naši strežniki so bili popravljeni in zdaj poganjajo jedro, ki vključuje popravilo za
<a href="https://security-tracker.debian.org/tracker/CVE-2026-98432" target="_blank">CVE-2026-98432</a>.

Gre za napako use-after-free v IPv4 TCP kodi jedra. Jedro je lahko sprostilo IP možnosti, priložene povezavi, medtem ko je drug procesor še vedno bral te podatke, na primer med gradnjo odgovora SYNACK med TCP ročnim pozdravom. Popravilo počaka, dokler noben procesor več ne bere tega pomnilnika, preden ga sprosti.

### Node.js

FastComments deluje na Node.js, in posodobili smo na različico 24.22.1, popravljeno izdajo za linijo 24.x iz <a href="https://nodejs.org/en/blog/vulnerability/october-2026-security-releases" target="_blank">oktobrske varnostne izdaje Node.js 2026</a>.

Ta izdaja odpravlja 10 ranljivosti v podprtih različicah Node.js. 8 od njih vpliva na linijo 24.x, 4 pa so ocenjene kot visoke: dve v TLS potrditvi IP naslovov, ena v obravnavi DNS imen in ena v dekodirniku Brotli. Prav tako posodablja vključene odvisnosti, vključno z OpenSSL, c-ares, Undici in paketom CA certifikatov.

### Kaj morate storiti

Nič. Vse te posodobitve so na naši strani, zato vaši pripomočki, API integracije in SSO konfiguracije ne potrebujejo nobenih sprememb.

### Zaključek

Vzdrževanje naše infrastrukture posodobljene je stalni del upravljanja FastComments, in bomo še naprej izvajali posodobitve, kot so te, ko bodo izdate. Če imate kakršna koli vprašanja, nas spodaj obvestite.

Lep pozdrav!

{{/isPost}}