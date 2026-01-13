---
[category:Security]

###### [postdate]
# [postlink]Sprostitev dnevnika revizij[/postlink]

{{#unless isPost}}FastComments zdaj nudi podroben dnevnik vseh sprememb, izvedenih preko platforme.{{/unless}}

{{#isPost}}

### Kaj je novega

Od marca FastComments zdaj vključuje podrobno revizijo s Pro paketom in vsemi obstoječimi podjetniškimi strankami.

Vse administrativne akcije, bodisi gre za dostop do podatkov, spreminjanje komentarja ali odblokiranje uporabnika, so spremljane in indeksirane v dnevniku revizij.

### Kako ga uporabiti

Dnevniku revizij lahko dostopate tako, da greste na `Upravljanje podatkov` in nato `Dnevniki revizij`. Neposredna povezava je [tukaj](https://fastcomments.com/auth/my-account/manage-data/audit-logs).

Na začetku boste videli stran, kot je ta:

<div class="text-center">
    <img src="/images/audit-log-main.png" alt="Dnevnik revizij" />
</div>

Od tu lahko iščete po uporabniškem imenu, IP naslovu, vrsti akcije ali viru.

Na primer, filtriranje po viru:

<div class="text-center">
    <img src="/images/audit-log-resource.png" alt="Izbira vira dnevnika revizij" />
</div>

Lahko se tudi poglobimo v podrobnosti vstopa v dnevniku revizij in celo vidimo povezani objekt, ki je bil spremenjen.

Na primer, lahko se poglobimo v vnos za blokado uporabnika:

<div class="text-center">
    <img src="/images/audit-log-details.png" alt="Podrobnosti vnosa dnevnika revizij" />
</div>

Tukaj lahko vidimo, kdo je blokiral uporabnika (uporabnik z uporabniškim imenom `winrid`). Vidimo, da gre za trajno blokado, poleg tega imamo uporabniško ID in email blokiranega, skupaj s tekstom, zaradi katerega so bili blokirani.

Vidimo IP, ki je ustvaril blokado, vendar je IP originalnega komentatorja namenoma izpuščen za njihovo zasebnost.

Da vidimo vse dogodke iz `winrid`, preprosto kliknemo na ikono filtra na desni strani, poleg njihovega uporabniškega imena.

### Omejevanje dostopa

Podatki v dnevniku revizij so dostopni samo uporabnikom s pravicami `Upravljanje podatkov`.

### Hranjenje

Vsi vnosi v dnevniku revizij se hranijo dve leti. Vendar se dnevnik revizij izbriše, ko je vaš račun izbrisan.

### Dostop do API

[Dokumentacija za API dnevnika revizij je tukaj.](https://docs.fastcomments.com/guide-api.html#audit-log-structure) Ugotovili boste, da se dnevnik revizij lahko
sortira in paginira na več načinov, odvisno od vašega primera uporabe.

### Obstoječe stranke

Če ste na Pro ali enakovrednem paketu, boste opazili, da je bil dnevnik revizij samodejno omogočen! Če želite pridobiti dostop, se obrnite na svojega predstavnika za podporo.

### Kaj je izpuščeno

Edina vrsta sprememb, ki so izpuščene, so dejanski komentarji in njihovi glasovi. To je zato, ker smo ugotovili, da so naši kupci predvsem zainteresirani za administrativno
stran pri reviziji, in ne nujno za revizijo tega, kar ljudje komentirajo. Te vrste akcij prav tako dodajajo precej hrupa v dnevnik.

Vendar, če je to zahteva, nas kontaktirajte in se lahko pogovorimo o omogočanju tega za vas.

### Na zaključek

Upamo, da boste to področje naše ponudbe našli koristno, uporabniški vmesnik enostaven za uporabo, in API hiter. 

Na zdravje!

{{/isPost}}

---