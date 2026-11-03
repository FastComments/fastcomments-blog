[category:Security]
[category:Announcements]

###### [postdate]
# [postlink]Vigtige sikkerhedsopdateringer udført[/postlink]

{{#unless isPost}}
Vi har patchet operativsystemet på alle vores servere for at løse en nylig Linux TCP-sårbarhed, og opdateret Node.js for at hente dens oktober sikkerhedsudgivelse. Ingen handling er påkrævet fra din side.
{{/unless}}

{{#isPost}}

### What's New

Vi har for nylig gennemført to sikkerhedsopdateringer på FastComments-infrastrukturen: en operativsystemopdatering for at løse en
sårbarhed i Linux-kernens TCP-kode, og en Node.js-opdatering for at hente den seneste sikkerhedsudgivelse.

### Linux Kernel

Alle vores servere er blevet patchet og kører nu en kerne, der inkluderer rettelsen for
<a href="https://security-tracker.debian.org/tracker/CVE-2026-98432" target="_blank">CVE-2026-98432</a>.

Dette er en use-after-free i kernens IPv4 TCP-kode. Kernen kunne frigøre IP‑indstillingerne knyttet til en forbindelse, mens
en anden CPU stadig læste dem, for eksempel mens SYNACK‑svaret bygges under en TCP‑håndtryk. Rettelsen venter, indtil
ingen CPU længere kan læse den hukommelse, før den frigøres.

### Node.js

FastComments kører på Node.js, og vi har opdateret til version 24.22.1, den patchede udgivelse for 24.x-grenen fra
<a href="https://nodejs.org/en/blog/vulnerability/october-2026-security-releases" target="_blank">October 2026 Node.js security release</a>.

Den udgivelse retter 10 sårbarheder på tværs af de understøttede Node.js-versioner. 8 af dem påvirker 24.x-grenen, og 4 af dem
er klassificeret som høje: to i TLS‑validering af IP‑adresser, én i DNS‑navnehåndtering, og én i Brotli‑dekoderen. Den opdaterer også
indbundne afhængigheder inklusive OpenSSL, c-ares, Undici og CA‑certifikatpakken.

### What You Need To Do

Intet. Disse opdateringer er alle på vores side, så dine widgets, API‑integrationer og SSO‑konfigurationer behøver ingen ændringer.

### In Conclusion

At holde vores infrastruktur opdateret er en løbende del af at drive FastComments, og vi vil fortsætte med at anvende opdateringer som disse
efterhånden som de udgives. Hvis du har spørgsmål, så lad os vide det nedenfor.

Skål!

{{/isPost}}

---