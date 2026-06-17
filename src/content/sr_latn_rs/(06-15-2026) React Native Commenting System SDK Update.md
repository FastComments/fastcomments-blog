---
[category:API & Development]
[category:Performance]
[category:Announcements]

###### [postdate]
# [postlink]Ažuriranje React Native Commenting System SDK[/postlink]

{{#unless isPost}}
Ponovo smo izgradili fastcomments-react-native-sdk od osnova: novo, efikasnije upravljanje stanjem, redizajn korišćenjem dizajn tokena, posvećen live chat vidžet, i podrška za web.
{{/unless}}

{{#isPost}}

### <i class="circle">!</i> Ovaj Članak Sadrži Tehničke Terminologije

### Šta je Novo

Upravo smo objavili verziju 5.1 `fastcomments-react-native-sdk`, naše React Native biblioteke koja prikazuje komentare i chat sa pravim native komponentama umesto WebView-a.

Prepisali smo interne delove, redizajnirali čitav izgled, dodali live chat vidžet, doneli SDK na web, i unapredili ga na najnoviji React Native i React.

<div class="text-center">
    <img src="images/rn-sdk-light.png" alt="FastComments React Native SDK, svetla tema" title="FastComments React Native SDK" style="max-width:280px;display:inline-block;margin:8px;vertical-align:top" />
    <img src="images/rn-sdk-dark.png" alt="FastComments React Native SDK, tamna tema" title="FastComments React Native SDK, tamna tema" style="max-width:280px;display:inline-block;margin:8px;vertical-align:top" />
</div>

### Zašto Dve React Native Biblioteke?

Brza napomena, jer često dobijamo ovo pitanje. Nudimo dve opcije:

- `fastcomments-react-native` je tanak omotač oko našeg web vidžeta koji se pokreće u WebView-u. To je najbrži način da odmah dobijete sve funkcije, i automatski se koristi ispravkama sa weba.
- `fastcomments-react-native-sdk` (ovaj) prikazuje UI sa native React Native komponentama bez webview-a. To je fleksibilnije, potpuno prilagodljivo, i deluje native jer je native.

Za najbolje iskustvo preporučujemo SDK. Ostatak ovog posta govori o tome šta se promenilo u 5.0.

### Novo Upravljanje Stanjem

Glavni cilj ove promene je da osigura da naša biblioteka ostane verna svom imenu i ostane brza. Imali smo nekoliko klijenata koji su se žalili na performanse, tako da je ovo sada ispravljeno.

SDK je prvobitno čuvao svoj komentar drvo u Hookstate. Radilo je, ali kako su se niti i live ažuriranja povećavala, stvari su počele da usporavaju.

Zamenili smo Hookstate sa Zustand-om i ravnim, indeksiranim skladištem. Komentari sada žive u `byId` mapi uz `childrenByParent`, `rootOrder`, i `pinnedIds` indekse, umesto u stablu ugnježdenom unutar stanja.

Isplata:

- Događaji uživo (novi komentar, glas, izmena) postali su O(1) mutacije umesto prolaska i kloniranja stabla.
- Odbacili smo dva puna stabla JSON dubokih klonova koji su se koristili na svakoj dohvatu.
- Komponente se pretplate tačno na one delove koje čitaju, standardni model selektora, pa glas na jednom komentaru dodiruje jedan komentar.

Ta poslednja tačka je važnija nego što zvuči. Sa pretplatama zasnovanim na selektorima, red se ponovo prikazuje samo kada se podaci ljudi menjaju.

### Redizajn Zasnovan na Tokenima

Stari izgled bio je gomila hardkodiranih stilova. Novi podrazumevani izgled generisan je iz skupa semantičkih dizajn tokena (`FastCommentsTheme`): boje, razmaku, radijusi, veličine fonta, težine fonta, i veličine avatare. Cela struktura stila se proizašla iz tih tokena.

To znači da je preoblikovanje samo jedna svojstvo:

```tsx
<FastCommentsLiveCommenting config={config} theme=\{{ colors: { primary: '#FF5500' } }}/>
```

Tamni režim je udaljen samo jedan set tokena:

```tsx
import { getDarkTheme } from 'fastcomments-react-native-sdk';

<FastCommentsLiveCommenting config={config} theme={getDarkTheme()}/>
```

Sam redizajn je čišći, moderan-neutralan izgled: tanki separatori, dugmadi za glasanje i čipsovi u obliku tableta, popunjena primarna dugmad, zaobljeni avatare, i konzistentna tipografija. `styles` svojstvo je još uvek tu za hirurške preinake, tako da postojeće integracije nastavljaju raditi.

### Posvećen Live Chat Vidžet

Dodali smo `FastCommentsLiveChat`, chat preset nad istim motorom koji odražava chat prikaz našeg Android SDK-a: hronološke poruke sa najnovijim na dnu, kompozitor ispod liste, traka uživo sa tačkom veze i brojem korisnika, automatski skrol koji se pauzira dok čitate starije poruke, i beskonačna istorija dok skrolujete nagore. Svaki preset se može prepisivati kroz `config`.

```tsx
<FastCommentsLiveChat config=\{{ tenantId: 'demo', urlId: 'my-room' }}/>
```

### Sada i na Webu

Isti SDK sada radi na webu kroz `react-native-web`. Rich text kompozitor (pokretan sa `react-native-enriched`) prikazuje se na isti način na iOS-u, Android-u, i pretraživaču, tako da je iskustvo uređivanja konzistentno svuda sa jednom implementacijom. Preklapanja koja bi lista komentara inače zanemarila (meni, GIF birac, lista obaveštenja) su vezana ispod njihovih okidača na web verziji.

### Održavanje Trenutačnosti sa React Native

5.0 je izgrađena i testirana na React Native 0.81 i React 19, i cilja na Novu Arhitekturu (Fabric), koju zahteva native rich text editor. Održavanje trenutačnosti ovde nije unos posla: editor, upravljanje gestama, i renderisanje postaju brži i tačniji kako React Native napreduje, i radije bismo uzeli te nadogradnje postepeno nego da zaostanemo godinama.

### Na Zaključak

Ova prepravka je bila o tome da se React Native SDK pruži istu prvorazrednu osnovu kao i naše druge biblioteke: brz i predvidljiv model podataka, izgled koji možete prilagoditi u jednom svojstvu, chat vidžet, i podrška za web, sve na modernoj React Native osnovi.

SDK možete pronaći na <a href="https://www.npmjs.com/package/fastcomments-react-native-sdk" target="_blank">NPM</a> i izvor, sa primerima, na <a href="https://github.com/FastComments/fastcomments-react-native-sdk" target="_blank">GitHub</a>. Javite nam u komentarima ispod ako naiđete na nešto.

Živeli!

{{/isPost}}

---