---
[category:API & Development]
[category:Performance]
[category:Announcements]

###### [postdate]
# [postlink]Ažuriranje SDK-a za sistem komentara React Native[/postlink]

{{#unless isPost}}
Ponovo smo izgradili fastcomments-react-native-sdk od temelja: novo, efikasnije upravljanje stanjima, redizajn koristeći dizajn tokene, posvećen widget za chat uživo, i vrhunska web podrška.
{{/unless}}

{{#isPost}}

### <i class="circle">!</i> Ovaj Članak Sadrži Tehnički Žargon

### Šta je Novo

Upravo smo objavili verziju 5.1 `fastcomments-react-native-sdk`, našu React Native biblioteku koja renderuje komentare i chat sa pravim native komponentama umesto WebView.

Prepisali smo interne procese, redizajnirali celokupan izgled, dodali widget za chat uživo, doneli SDK na web, i nadogradili ga na najnovije verzije React Native i React.

<div class="text-center">
    <img src="images/rn-sdk-light.png" alt="FastComments React Native SDK, svetla tema" title="FastComments React Native SDK" style="max-width:280px;display:inline-block;margin:8px;vertical-align:top" />
    <img src="images/rn-sdk-dark.png" alt="FastComments React Native SDK, tamna tema" title="FastComments React Native SDK, tamna tema" style="max-width:280px;display:inline-block;margin:8px;vertical-align:top" />
</div>

### Zašto Dve React Native Biblioteke?

Brza napomena, jer imamo ovo pitanje. Obezbeđujemo dve opcije:

- `fastcomments-react-native` je tanak obuhvat oko našeg web widgeta koji radi u WebView-u. To je najbrži način da odmah dobijete svaku funkciju, i automatski koristi web ispravke.
- `fastcomments-react-native-sdk` (ova) renderuje UI sa native React Native komponentama bez webview-a. Fleksibilnija je, potpuno prilagodljiva temama, i deluje native jer je native.

Za najbolje iskustvo preporučujemo SDK. Ostatak ovog posta se bavi onim što se promenilo u 5.0.

### Novo Upravljanje Stanjem

Primarni motiv za ovu promenu je da se osigura da naša biblioteka ostane verna našem imenu i ostane brza. Imali smo nekoliko klijenata koji su se žalili na njen performans, pa je ovo sada ispravljeno.

SDK je prvobitno čuvao svoju strukturu komentara u Hookstate-u. Radilo je, ali kako su se brojevi i žive ispravke povećavali, stvari su počele da usporavaju.

Zamenili smo Hookstate sa Zustand-om i ravnim, indeksiranim skladištem. Komentari sada žive u `byId` mapi pored `childrenByParent`, `rootOrder`, i `pinnedIds` indeksa, umesto u stablu unutar stanja.

Dobitak:

- Živi događaji (novi komentar, glasanje, izmena) postali su O(1) mutacije umesto hodanja i kloniranja stabla.
- Odbacili smo dva potpuna JSON kloniranja stabla koja su se ranije izvršavala pri svakoj pretrazi.
- Komponente se pretplaćuju na tačno one delove koje čitaju, standardni model selektora, tako da glasanje na jednom komentaru utiče na jedan komentar.

Ta poslednja tačka je važnija nego što zvuči. Sa pretplatama baziranim na selektorima, red se ponovo renderuje samo kada se podaci za taj red menjaju.

### Redizajn na Bazi Tokena

Stari izgled je bio gomila hardkodiranih stilova. Novi podrazumevani izgled generiše se iz skupa semantičkih dizajn tokena (`FastCommentsTheme`): boje, razmak, radijus, veličine fonta, težine fonta i veličine avatare. Ceo stilizacijski stablo se izvuče iz tih tokena.

To znači da je preuređenje samo jedan prop:

```tsx
<FastCommentsLiveCommenting config={config} theme=\{{ colors: { primary: '#FF5500' } }}/>
```

Tamni režim je samo jedan set tokena daleko:

```tsx
import { getDarkTheme } from 'fastcomments-react-native-sdk';

<FastCommentsLiveCommenting config={config} theme={getDarkTheme()}/>
```

Sam redizajn je čišći, moderan neutralan izgled: tanki razdavači, glasovi dugmadi u obliku tableta i čipsova, popunjena primarna dugmad, zaobljeni avatare i dosledna skala tipa. Prop `styles` je i dalje prisutan za hirurške izmene, tako da postojeće integracije i dalje funkcionišu.

### Posvećeni Widget za Chat Uživo

Dodali smo `FastCommentsLiveChat`, chat predložak iznad istog motora koji odražava chat prikaz našeg Android SDK-a: hronološke poruke sa najnovijim na dnu, komponotor ispod liste, traka sa uživo zaglavljem sa tačkom veze i brojem korisnika, automatsko skrolovanje koje se zaustavlja dok čitate starije poruke, i beskonačna istorija dok se krećete nagore. Svaki predložak se može zameniti preko `config`.

```tsx
<FastCommentsLiveChat config=\{{ tenantId: 'demo', urlId: 'my-room' }}/>
```

### Sada i na Webu

Isti SDK sada radi na webu putem `react-native-web`. Kompozitor bogatog teksta (pokretan `react-native-enriched`) renderuje se na isti način na iOS-u, Android-u i u pregledaču, tako da je iskustvo uređivanja dosledno svuda uz jednu implementaciju. Overlay-ji koje bi lista komentara inače prekidala (meni, GIF picker, lista notifikacija) su vezani ispod svojih okidača na web verziji.

### Održavanje Trenutnog Stanja sa React Native

5.0 je izgrađena i testirana u odnosu na React Native 0.81 i React 19, i cilja na Novu Arhitekturu (Fabric), što je potrebno za native uređivač bogatog teksta. Održavanje trenutnog stanja ovde nije samo besposlica: uređivač, upravljanje gestama, i rendovanje postaju brži i tačniji dok React Native napreduje, i radije bismo uzeli te nadogradnje postepeno nego da budemo godinama unazad.

### Zaključak

Ova prepravka je bila o tome da se React Native SDK-u dodeli isti vrhunski status kao i našim drugim bibliotekama: brz i predvidljiv model podataka, izgled koji možete tematski prilagoditi u jednom prop-u, widget za chat, i web podrška, sve na modernoj bazi React Native.

SDK možete pronaći na <a href="https://www.npmjs.com/package/fastcomments-react-native-sdk" target="_blank">NPM</a> i izvor, sa primerima, na <a href="https://github.com/FastComments/fastcomments-react-native-sdk" target="_blank">GitHub</a>. Javite nam ispod ako naiđete na bilo šta.

Pozdrav!

{{/isPost}}

---