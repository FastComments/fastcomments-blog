---
[category:Integracije]
[category:API & Razvoj]
###### [postdate]
# [postlink]Dodajte Live Chat u Native Aplikacije sa FastComments React Native[/postlink]

{{#unless isPost}}
Nakon meseci rada, sa zadovoljstvom obaveštavamo da je fastcomments-react-native-sdk sada u verziji 1.0 za opštu dostupnost.
{{/unless}}

{{#isPost}}

### <i class="circle">!</i> Ovaj Članak Sadrži Tehnološki Žargon

### Šta je Novo

U FastComments-u, lansirali smo novi način izrade React Native aplikacija sa FastComments. Pre toga, koristili ste naš react-native wrapper oko
VanillaJS biblioteke. Ovo je uvelo nekoliko problema sa memorijom i latencijom zbog potrebe za web preglednikom - pretraživačem u vašoj aplikaciji - da bi se učitala naša biblioteka.

Sada smo **potpuno** portovali FastComments u React Native i napisali naš WYSIWYG editor kako bismo potpuno eliminisali potrebu za web preglednicima.

Biblioteka podržava različite teme i rasporede. Na primer, evo Erebus teme koja je tamna tema u stilu live chata:

<div class="text-center">
    <img src="images/skin-erebus.png" alt="Erebus Skin" title="Erebus Skin" />
</div>

Biblioteka je dostupna [na GitHub-u na FastComments/fastcomments-react-native-sdk](https://github.com/FastComments/fastcomments-react-native-sdk) kao i
[na NPM-u](https://www.npmjs.com/package/fastcomments-react-native-sdk).

### Prilagodljiv

Nova native biblioteka je dizajnirana da bude prilagodljiva baš kao i postojeća web biblioteka.

Možete:

- Prilagoditi sve resurse i ikone koje biblioteka koristi.
- Prilagoditi stilizovanje svakog komponenta u biblioteci prosleđivanjem Styles objekta sa vrha.
- Prilagoditi sve prevode.
- Koristiti jednu od unapred definisanih ili zajednicom razvijenih tema.
- Koristiti mnoge iste opcije konfiguracije koje podržava web biblioteka.

### Potpuna Lista Karakteristika

Biblioteka podržava mnoge stvari. Nepotpuna lista je:

- [x] Blokiranje
- [x] Reakcije na Čat
- [x] Komentari i Odgovori na Komentare
- [x] Prilagođeni Stilovi (kao tipizovani stil)
- [x] Emoticoni
- [x] Obeležavanje
- [x] Gif Pregledač - Sa default trendovima + mogućnošću pretrage. Slike i pretraga anonimni preko proksija.
- [x] Live komentarisanje
- [x] Izbor i Učitavanje Medija
- [x] Native WYSIWYG editor sa podrškom za slike.
- [x] Servis Obaveštenja (dobijanje nepročitanih obaveštenja korisnika u pozadini za proslavljanje njima, itd.)
- [x] Lista Obaveštenja (prikazuje kada se klikne na zvonce). Podržava pretplate.
- [x] Paginacija (Dugme)
- [x] Paginacija (Beskonačno Skrolovanje)
- [x] Pining Komentara
- [x] Sigurno, Jednostavno SSO i anonimno komentarisanje.
- [x] Nekoliko unapred definisanih tema.
- [x] Prikazivanje/Skrivanje Preklapa za Komentare
- [x] Teme
- [x] Indikatori aktivnosti korisnika
- [x] Glasanje

### Kako Radi

Biblioteka je potpuni ponovni pisanje FastComments klijenta u TypeScript-u i React Native-u.

### Plan na Dugi Rok

Na duži rok, održavaćemo i VanillaJS biblioteku i react-native biblioteku paralelno, kao i bilo koje buduće native biblioteke koje možemo razviti.

### Šta Sledeće?

Radujemo se povratnim informacijama korisnika i zajednice kako bismo poboljšali ovu biblioteku tokom vremena, baš kao što smo to uradili sa web ekosistemom.

### Na kraju

Znamo da je ova biblioteka dugo čekana od strane nekih. Kao i svi veliki izdanja, drago nam je što smo mogli odvojiti vreme da optimizujemo, testiramo i pravilno objavimo ovu biblioteku.

Živeli!

{{/isPost}}

---