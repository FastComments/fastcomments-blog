---
[category:Integrations]
[category:API & Development]
###### [postdate]
# [postlink]Dodajte Live Chat u Nativne Aplikacije Sa FastComments React Native[/postlink]

{{#unless isPost}}
Nakon meseci rada, sa zadovoljstvom objavljujemo da je fastcomments-react-native-sdk sada u verziji 1.0 za opštu dostupnost.
{{/unless}}

{{#isPost}}

### <i class="circle">!</i> Ovaj Članak Sadrži Tehnički Jezik

### Šta je Novo

U FastComments-u, pokrenuli smo novi način za izgradnju React Native aplikacija sa FastComments. Prethodno ste koristili naš react-native omotač oko
VanillaJS biblioteke. To je uvodilo nekoliko problema sa memorijom i kašnjenjem zbog potrebe za web preglednikom - pregledačem u vašoj aplikaciji - samo da biste učitali našu biblioteku.

Sada smo **potpuno** preneli FastComments na React Native i napisali svoj WYSIWYG editor kako bismo potpuno eliminisali potrebu za web pregledima.

Biblioteka podržava različite teme i rasporede. Na primer, ovde je Erebus tema koja je tamna tema u stilu live chata:

<div class="text-center">
    <img src="images/skin-erebus.png" alt="Erebus Skin" title="Erebus Skin" />
</div>

Biblioteka je dostupna [na GitHub-u na FastComments/fastcomments-react-native-sdk](https://github.com/FastComments/fastcomments-react-native-sdk) kao i
[na NPM-u](https://www.npmjs.com/package/fastcomments-react-native-sdk).

### Prilagodljivo

Nova nativna biblioteka je dizajnirana da bude prilagodljiva baš kao i postojeća web biblioteka.

Možete:

- Prilagoditi sve resurse i ikone koje biblioteka koristi.
- Prilagoditi stilizovanje svake komponente u biblioteci prosledjivanjem Styles objekta od vrha.
- Prilagoditi sve prevode.
- Koristiti jednu od unapred definisanih ili zajednički razvijenih tema.
- Koristiti mnoge iste opcije konfiguracije koje podržava web biblioteka.

### Kompletna Lista Funkcija

Biblioteka podržava mnoge stvari. Nepotpuna lista je:

- [x] Blokiranje
- [x] Reakcije u Chatu
- [x] Komentari i Odgovori na Komentare
- [x] Prilagođeni Stilovi (kao tipizirani stil)
- [x] Emotikoni
- [x] Obeležavanje
- [x] Gif Pregledač - Sa podrazumevajućim trendovima + mogućnošću pretrage. Slike i pretraga anonimno posredstvom.
- [x] Live komentarisanje
- [x] Izbor i Učitavanje Medija
- [x] Nativni WYSIWYG editor sa podrškom za slike.
- [x] Obaveštajna Usluga (dobijanje nepročitanih obaveštenja korisnika u pozadini za slanje, itd.)
- [x] Lista Obaveštenja (prikazuje kada se klikne na zvonce). Podržava pretplate.
- [x] Paginacija (Dugmadi)
- [x] Paginacija (Beskonačno Skrolovanje)
- [x] Lepljenje Komentara
- [x] Sigurno, Jednostavno SSO, i anonimno komentarisanje.
- [x] Nekoliko unapred definisanih tema.
- [x] Ukloni/Prikaži Preklop Komentara
- [x] Tematske Linije
- [x] Indikatori aktivnost korisnika
- [x] Glasanje

### Kako Funkcioniše

Biblioteka je potpuni ispis FastComments klijenta u TypeScript-u i React Native-u.

### Dugoročni Plan

Dugoročno, održaćemo i VanillaJS biblioteku i react-native biblioteku paralelno, kao i sve buduće nativne biblioteke koje možda razvijemo.

### Šta je Sledeće?

Radovaćemo se povratnim informacijama korisnika i zajednice kako bismo poboljšali ovu biblioteku tokom vremena, baš kao što smo to uradili sa web ekosistemom.

### Na Zaključku

Znamo da je ova biblioteka dugo čekana od nekih. Kao i sve velike objave, drago nam je što smo mogli da odvojimo vreme da optimizujemo, testiramo i pravilno objavimo ovu biblioteku.

Živeli!

{{/isPost}}

---