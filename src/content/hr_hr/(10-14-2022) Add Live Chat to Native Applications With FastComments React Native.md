---
[category:Integrations]
[category:API & Development]
###### [postdate]
# [postlink]Dodajte Uži Razgovor u Nativne Aplikacije s FastComments React Native[/postlink]

{{#unless isPost}}
Nakon mjeseci rada, s zadovoljstvom najavljujemo da je fastcomments-react-native-sdk sada dostupna u verziji 1.0 za opću upotrebu.
{{/unless}}

{{#isPost}}

### <i class="circle">!</i> Ovaj Članak Sadrži Tehnički Rječnik

### Što je Novo

U FastComments-u smo lansirali novi način izrade React Native aplikacija s FastComments. Prije ste koristili naš react-native omotač oko
VanillaJS biblioteke. To je uvelo nekoliko problema s memorijom i latencijom jer je bila potrebna web prikaz - preglednik unutar vaše aplikacije - samo za učitavanje naše biblioteke.

Sada smo **potpuno** prenijeli FastComments na React Native i napisali vlastiti WYSIWYG editor kako bismo potpuno eliminirali potrebu za web prikazima.

Biblioteka podržava različite kože i rasporede. Na primjer, evo Erebus kože koja je tamna koža stilizirana za razgovor uživo:

<div class="text-center">
    <img src="images/skin-erebus.png" alt="Erebus Skin" title="Erebus Skin" />
</div>

Biblioteka je dostupna [na GitHubu na FastComments/fastcomments-react-native-sdk](https://github.com/FastComments/fastcomments-react-native-sdk) kao i
[na NPM-u](https://www.npmjs.com/package/fastcomments-react-native-sdk).

### Prilagodljivo

Nova nativna biblioteka dizajnirana je da bude prilagodljiva baš kao i postojeća web biblioteka.

Možete:

- Prilagoditi sve resurse i ikone koje biblioteka koristi.
- Prilagoditi stiliziranje svakog komponenta u biblioteci proslijeđivanjem Styles objekta s vrha.
- Prilagoditi sve prijevode.
- Koristiti jednu od unaprijed definiranih ili zajednicom razvijenih koža.
- Koristiti mnoge iste opcije konfiguracije koje podržava web biblioteka.

### Potpuni Popis Značajki

Biblioteka podržava mnoge stvari. Nepotpuni popis uključuje:

- [x] Blokiranje
- [x] Reakcije na Razgovor
- [x] Komentari i Odgovori
- [x] Prilagođeni Stilovi (kao uređivač stilova)
- [x] Emotikon
- [x] Označavanje
- [x] Gif Preglednik - S zadanim trending + mogućnošću pretraživanja. Slike i pretraživanje anonimni putem proxy-a.
- [x] Komentiranje uživo
- [x] Odabir i Učitavanje Medija
- [x] Nativni WYSIWYG editor s podrškom za slike.
- [x] Usluga Obavijesti (dobivanje nepročitanih obavijesti korisnika u pozadini kako bi ih mogli slati, itd.)
- [x] Popis Obavijesti (prikazuje kada se klikne na zvono). Podržava pretplate.
- [x] Paginacija (Dugmadi)
- [x] Paginacija (Besplatno Pomicanje)
- [x] Štititi Komentare
- [x] Sigurno, Jednostavno SSO, i anonimno komentiranje.
- [x] Nekoliko unaprijed definiranih koža.
- [x] Prikaži/Sakrij Preklop komentara
- [x] Nit
- [x] Indikatori aktivnosti korisnika
- [x] Glasanje

### Kako to Radi

Biblioteka je potpuni ponovni pisanje FastComments klijenta u TypeScript-u i React Native-u.

### Dugoročni Plan

Na dugoročne staze, održavat ćemo i VanillaJS biblioteku i react-native biblioteku paralelno, kao i bilo koje buduće nativne biblioteke koje možemo razvijati.

### Što je Sljedeće?

Radujemo se povratnim informacijama od korisnika i zajednice kako bismo vremenom poboljšali ovu biblioteku, baš kao što smo to činili s web ekosustavom.

### Na Zaključak

Znamo da su ovu biblioteku neki dugo čekali. Kao i kod svih glavnih izdanja, drago nam je što smo mogli odvojiti vrijeme za optimizaciju, testiranje i pravilno objavljivanje ove biblioteke.

Živjeli!

{{/isPost}}

---