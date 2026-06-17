---
[category:API & Development]
[category:Performance]
[category:Announcements]

###### [postdate]
# [postlink]Ažuriranje SDK-a za sistem komentara React Native[/postlink]

{{#unless isPost}}
Ponovo smo izgradili fastcomments-react-native-sdk od temelja: novo, efikasnije upravljanje stanjem, redizajn koristeći dizajn tokene, posvećen widget za chat uživo i podršku za web u prvom razredu.
{{/unless}}

{{#isPost}}

### <i class="circle">!</i> Ovaj članak sadrži tehnički žargon

### Šta je novo

Upravo smo lansirali verziju 5.1 za `fastcomments-react-native-sdk`, našu React Native biblioteku koja renderuje komentare i chat sa pravim nativnim komponentama umesto WebView-a.

Ponovo smo napisali unutrašnjost, redizajnirali ceo izgled, dodali widget za chat uživo, doveli SDK na web i ažurirali ga na najnoviju verziju React Native i React.

<div class="text-center">
    <img src="images/rn-sdk-light.png" alt="FastComments React Native SDK, svetli tema" title="FastComments React Native SDK" style="max-width:280px;display:inline-block;margin:8px;vertical-align:top" />
    <img src="images/rn-sdk-dark.png" alt="FastComments React Native SDK, tamni tema" title="FastComments React Native SDK, tamni tema" style="max-width:280px;display:inline-block;margin:8px;vertical-align:top" />
</div>

### Zašto dve React Native biblioteke?

Brza napomena, jer dobijamo ovo pitanje. Imamo dve opcije:

- `fastcomments-react-native` je tanka omotač oko našeg web widgeta koji se pokreće u WebView-u. To je najbrži način da dobijete sve funkcije odmah i automatski profitira od web ispravki.
- `fastcomments-react-native-sdk` (ovaj) renderuje UI sa nativnim React Native komponentama bez webview-a. Fleksibilniji je, potpuno temabilan i deluje nativno jer to i jeste nativno.

Za najbolje iskustvo preporučujemo SDK. Ostalo u ovom postu govorimo o tome šta je promenjeno u 5.0.

### Novo upravljanje stanjem

Glavni razlog za ovu promenu je da se osigura da naša biblioteka ostane verna našem imenu i bude brza. Imali smo nekoliko klijenata koji su se žalili na njenu performansu, pa je ovo sada ispravljeno.

SDK je prvobitno držao svoj komentar drvo u Hookstate-u. Radilo je, ali kako su niti i ažuriranja uživo rasla, stvari su počele da usporavaju.

Zamenili smo Hookstate sa Zustand-om i ravnom indeksiranom prodavnicom. Komentari sada žive u `byId` mapi zajedno sa `childrenByParent`, `rootOrder` i `pinnedIds` indeksima, umesto u drvetu ugneždenom unutar stanja.

Dobitak:

- Ažuriranja uživo (novi komentar, glasanje, izmena) postala su O(1) mutacije umesto hodanja i kloniranja drveta.
- Ukupno smo izbacili dva duboka klona JSON-a celog drveta koja se pre ranila na svakoj dohvatu.
- Komponente se pretplaćuju tačno na delove koje čitaju, standardni selektor model, tako da glasanje za jedan komentar dodiruje samo jedan komentar.

Ta poslednja tačka je važnija nego što zvuči. Sa pretplatama zasnovanim na selektorima, redak se ponovo renderuje samo kada se podaci sami promene.

### Redizajn zasnovan na tokenima

Stari izgled je bio hrpa hardkodiranih stilova. Novi zadani izgled generiše se iz skupa semantičkih dizajn tokena (`FastCommentsTheme`): boje, razmak, radijus, veličine fonta, težine fonta i veličine avatara. Ceo stil drvo potiče iz tih tokena.

To znači da je ponovna stilizacija jedan prop:

```tsx
<FastCommentsLiveCommenting config={config} theme=\{{ colors: { primary: '#FF5500' } }}/>
```

Tamni režim je udaljen samo jedan set tokena:

```tsx
import { getDarkTheme } from 'fastcomments-react-native-sdk';

<FastCommentsLiveCommenting config={config} theme={getDarkTheme()}/>
```

Sam redizajn ima čistiji, savremeni neutralni izgled: tanke separatorne linije, dugmiće za glasanje i čips, ispunjene primarne dugmice, zaobljene avatare i doslednu tipografiju. Prop `styles` je i dalje tu za hirurške izmene, tako da postojeće integracije nastavljaju da rade.

### Posvećeni widget za chat uživo

Dodali smo `FastCommentsLiveChat`, preset za chat preko istog motora koji odražava chat pogled našeg Android SDK-a: hronološke poruke sa najnovijim na dnu, kompozitor ispod liste, live gornji deo sa tačkom veze i brojem korisnika, automatsko pomeranje koje se pauzira dok čitate starije poruke i beskonačna istorija dok se pomerate nagore. Svaki preset se može prilagoditi kroz `config`.

```tsx
<FastCommentsLiveChat config=\{{ tenantId: 'demo', urlId: 'my-room' }}/>
```

### Sada i na webu

Isti SDK sada radi na webu preko `react-native-web`. Rich text kompozitor (pokrenut od `react-native-enriched`) renderuje se na isti način na iOS, Android i pregledaču, tako da je iskustvo uređivanja dosledno svuda sa jednom implementacijom. Preklapanja koja bi inače isekla listu komentara (meni, selektor GIF-ova, lista obaveštenja) su vezane ispod svojih okidača na web verziji.

### Održavanje aktuelnosti sa React Native

5.0 je izgrađen i testiran za React Native 0.81 i React 19, i usmerava se na Novu arhitekturu (Fabric), koju nativni urednik bogatog teksta zahteva. Održavanje aktuelnosti ovde nije besposlica: uređivač, upravljanje gestama i renderovanje postaju brži i tačniji kako React Native napreduje, i radije bismo uzeli ta poboljšanja postepeno nego da zaostanemo godinama.

### Zaključak

Ovo ponovno pisanje je bilo o tome da se React Native SDK-u da isti prvi razred kao naše druge biblioteke: brz i predvidljiv model podataka, izgled koji možete tematični u jednom prop-u, widget za chat i podrška za web, sve na savremenoj osnovi React Native.

SDK možete pronaći na <a href="https://www.npmjs.com/package/fastcomments-react-native-sdk" target="_blank">NPM</a> i izvor, sa primerima, na <a href="https://github.com/FastComments/fastcomments-react-native-sdk" target="_blank">GitHub</a>. Javite nam u komentarima ako naiđete na nešto.

Živeli!

{{/isPost}}

---