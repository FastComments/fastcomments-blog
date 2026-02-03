---
[category:Integrations]
[category:API & Development]
###### [postdate]
# [postlink]Dodajte Live Chat u Native Aplikacije sa FastComments React Native[/postlink]

{{#unless isPost}}
Nakon meseci rada, sa zadovoljstvom javljamo da je fastcomments-react-native-sdk sada dostupna u verziji 1.0.
{{/unless}}

{{#isPost}}

### <i class="circle">!</i> Ovaj Članak Sadrži Tehnički Jezik

### Šta je Novo

U FastComments-u, pokrenuli smo nov način za izgradnju React Native aplikacija sa FastComments. Prethodno ste koristili naš react-native omotač oko
VanillaJS biblioteke. To je uzrokovalo nekoliko problema sa memorijom i latencijom zbog potrebe za web preglednikom - pretraživačem u vašoj aplikaciji - samo da biste učitali našu biblioteku.

Sada smo **potpuno** preneli FastComments u React Native, i napisali naš sopstveni WYSIWYG editor kako bismo potpuno eliminisali potrebu za web preglednicima.

Biblioteka podržava različite teme i rasporede. Na primer, ovde je Erebus tema koja je tamna tema u stilu live chata:

<div class="text-center">
    <img src="images/skin-erebus.png" alt="Erebus Skin" title="Erebus Skin" />
</div>

Biblioteka je dostupna [na GitHub-u na FastComments/fastcomments-react-native-sdk](https://github.com/FastComments/fastcomments-react-native-sdk) kao i
[na NPM-u](https://www.npmjs.com/package/fastcomments-react-native-sdk).

### Prilagodljivo

Nova native biblioteka je dizajnirana da bude prilagodljiva kao postojeća web biblioteka.

Možete:

- Prilagoditi sve resurse i ikone koje biblioteka koristi.
- Prilagoditi stil svakog komponenta u biblioteci prosledjivanjem Styles objekta sa vrha.
- Prilagoditi sve prevode.
- Koristiti jednu od unapred definisanih ili zajedničkim razvijenih tema.
- Koristiti mnoge iste opcije konfiguracije koje web biblioteka podržava.

### Potpuna Lista Karakteristika

Biblioteka podržava mnoge stvari. Nepotpuna lista je:

- [x] Blokiranje
- [x] Reakcije u Chatu
- [x] Komentari i Odgovori na Komentare
- [x] Prilagođeni Stilovi (kao tipizovani stil)
- [x] Emotikoni
- [x] Oznake
- [x] Gif Pregledač - Sa podrazumevajoćim trendovima + mogućnošću pretrage. Slike i pretraga anonimizovani putem proksija.
- [x] Živo komentarisanje
- [x] Izbor Medija i Učitavanje
- [x] Native WYSIWYG editor sa podrškom za slike.
- [x] Servis za Obaveštenja (dobićete nepročitana obaveštenja korisnika u pozadini da ih gurnete itd.)
- [x] Lista Obaveštenja (prikazuje se kada se klikne na zvono). Podržava pretplate.
- [x] Paginacija (Dugmići)
- [x] Paginacija (Besprijekorno Skrolovanje)
- [x] Pinovanje Komentara
- [x] Sigurno, Jednostavno SSO i anonimno komentarisanje.
- [x] Nekoliko unapred definisanih tema.
- [x] Uključi/Isključi Preklopnik za Komentare
- [x] Tematski Skupovi
- [x] Indikatori aktivnosti korisnika
- [x] Glasanje

### Kako To Funkcioniše

Biblioteka je potpuna ponovna izrada FastComments klijenta u TypeScript-u i React Native.

### Plan Dugoročno

Dugoročno, održavaćemo kako VanillaJS biblioteku, tako i react-native biblioteku paralelno, kao i svake buduće native biblioteke koje možda razvijemo.

### Šta Sledeće?

Radujemo se povratnim informacijama od korisnika i zajednice kako bismo vremenom poboljšali ovu biblioteku, baš kao što smo to učinili sa web ekosistemom.

### U Zaključku

Znamo da su ovu biblioteku neki dugo čekali. Kao što je slučaj sa svim velikim izdanjima, drago nam je da smo mogli da odvojimo vreme da optimizujemo, testiramo i pravilno objavimo ovu biblioteku.

Živeli!

{{/isPost}}

---