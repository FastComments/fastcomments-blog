---
[category:Integrations]
[category:API & Development]
###### [postdate]
# [postlink]Dodajte Live Chat u Native Aplikacije Sa FastComments React Native[/postlink]

{{#unless isPost}}
Nakon meseci rada, sa zadovoljstvom objavljujemo da je fastcomments-react-native-sdk sada dostupna u verziji 1.0 za opštu upotrebu.
{{/unless}}

{{#isPost}}

### <i class="circle">!</i> Ovaj Članak Sadrži Tehnički Sadržaj

### Šta je Novo

U FastComments, pokrenuli smo novi način izrade React Native aplikacija sa FastComments. Prethodno ste koristili naš react-native wrapper oko
VanillaJS biblioteke. To je uvelo nekoliko problema sa memorijom i latencijom zbog potrebe za web prikazom - preglednikom u vašoj aplikaciji - samo za učitavanje naše biblioteke.

Sada smo **potpuno** portovali FastComments na React Native, i napisali naš vlastiti WYSIWYG editor kako bismo potpuno eliminisali potrebu za web prikazima.

Biblioteka podržava različite stilove i rasporede. Na primer, evo Erebus stila koji je tamni stil live chat-a:

<div class="text-center">
    <img src="images/skin-erebus.png" alt="Erebus Skin" title="Erebus Skin" />
</div>

Biblioteka je dostupna [na GitHub-u na FastComments/fastcomments-react-native-sdk](https://github.com/FastComments/fastcomments-react-native-sdk) kao i
[na NPM-u](https://www.npmjs.com/package/fastcomments-react-native-sdk).

### Prilagodljiv

Nova native biblioteka je dizajnirana da bude prilagodljiva baš kao postojeća web biblioteka.

Možete:

- Prilagoditi sve resurse i ikone koje biblioteka koristi.
- Prilagoditi stilizaciju svake komponente u biblioteci prosleđivanjem Styles objekta od vrha.
- Prilagoditi sve prevode.
- Koristiti jedan od unapred definisanih ili zajednicom razvijenih stilova.
- Koristiti mnoge iste opcije konfiguracije koje podržava web biblioteka.

### Potpuna Lista Funkcija

Biblioteka podržava mnoge stvari. Nepotpuna lista je:

- [x] Blokiranje
- [x] Chat Reakcije
- [x] Komentari i Odgovori
- [x] Prilagođeni Stilovi (kao tipizovani stil)
- [x] Emotikon
- [x] Oznake
- [x] Gif Pregledač - Sa zadatim trendovima + mogućnošću pretrage. Slike i pretraga su anonimizovani putem prokija.
- [x] Live komentarisanje
- [x] Selekcija i Učitavanje Medija
- [x] Native WYSIWYG editor sa podrškom za slike.
- [x] Notification Service (pribavite korisnikove nepročitane obaveštenja u pozadini za slanje njima itd.)
- [x] Lista Obaveštenja (prikazuje kada se klikne na zvono). Podržava pretplate.
- [x] Paginacija (Dugmadi)
- [x] Paginacija (Beskonačno Pomeranje)
- [x] Prikucavanje Komentara
- [x] Sigurno, jednostavno SSO i anonimno komentarisanje.
- [x] Nekoliko unapred definisanih stilova.
- [x] Prikazivanje/Skriven komentari Toggle
- [x] Tematski razgovori
- [x] Indikatori aktivnosti korisnika
- [x] Glasanje

### Kako Radi

Biblioteka je potpuna rekonstrukcija FastComments klijenta u TypeScript-u i React Native.

### Dugoročni Plan

Dugoročno ćemo održavati i VanillaJS biblioteku i react-native biblioteku paralelno, kao i bilo koje buduće native biblioteke koje možemo razviti.

### Šta Je Sledeće?

Radujemo se povratnim informacijama od korisnika i zajednice kako bismo unapredili ovu biblioteku tokom vremena, baš kao što smo to učinili sa web ekosistemom.

### Na Zaključak

Znamo da je ova biblioteka dugo čekana od strane nekih. Kao i sa svim glavnim izdanjima, drago nam je što smo mogli odvojiti vreme da optimizujemo, testiramo i pravilno objavimo ovu biblioteku.

Živeli!

{{/isPost}}

---