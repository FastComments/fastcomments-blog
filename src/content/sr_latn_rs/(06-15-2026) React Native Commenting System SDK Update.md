---
[category:API & Development]
[category:Performance]
[category:Announcements]

###### [postdate]
# [postlink]Ažuriranje SDK-a za sistem komentara u React Native[/postlink]

{{#unless isPost}}
Ponovo smo izgradili fastcomments-react-native-sdk od temelja: nova, efikasnija upravljanja stanjem, redizajn koristeći Design Tokens, posvećen widget za razgovor uživo, i podrška za web prve klase.
{{/unless}}

{{#isPost}}

### <i class="circle">!</i> Ovaj Članak Sadrži Tehnički Žargon

### Šta je Novo

Upravo smo objavili verziju 5.1 `fastcomments-react-native-sdk`, našu React Native biblioteku koja prikazuje komentare i chat sa pravim nativnim komponentama umesto WebView-a.

Ponovno smo napisali unutrašnjost, redizajnirali ceo izgled, dodali widget za razgovor uživo, doneli SDK na web, i unapredili ga na najnoviji React Native i React.

<div class="text-center">
    <img src="images/rn-sdk-light.png" alt="FastComments React Native SDK, svetla tema" title="FastComments React Native SDK" style="max-width:280px;display:inline-block;margin:8px;vertical-align:top" />
    <img src="images/rn-sdk-dark.png" alt="FastComments React Native SDK, tamna tema" title="FastComments React Native SDK, tamna tema" style="max-width:280px;display:inline-block;margin:8px;vertical-align:top" />
</div>

### Zašto Dve React Native Biblioteke?

Brza napomena, zato što dobijamo ovo pitanje. Izrađujemo dve opcije:

- `fastcomments-react-native` je tanak omotač oko našeg web widgeta koji se izvršava u WebView-u. To je najbrži način da dobijete svaki feature odmah, i automatski koristi web ispravke.
- `fastcomments-react-native-sdk` (ovaj) prikazuje UI sa nativnim React Native komponentama bez webview-a. To je fleksibilnije, potpuno prilagodljivo, i deluje nativno jer je nativno.

Za najbolje iskustvo preporučujemo SDK. Ostatak ovog posta govori o tome šta se promenilo u 5.0.

### Novo Upravljanje Stanjem

Glavni motiv ove promene je da se osigura da naša biblioteka ostane verna svom imenu i ostane brza. Imali smo nekoliko kupaca koji su se žalili
na njene performanse, pa je ovo sada ispravljeno.

SDK je prvobitno čuvao svoju strukturu komentara u Hookstate-u. Radilo je, ali kako su se niti i live ažuriranja povećavala, stvari su počele da usporavaju.

Zamenili smo Hookstate sa Zustand-om i ravnim, indeksiranim skladištem. Komentari sada žive u `byId` mapi zajedno sa `childrenByParent`, `rootOrder`, i `pinnedIds` indeksima, umesto u stablu koje je bilo ugnježdeno unutar stanja.

Isplata:

- Live događaji (novi komentar, glasanje, izmena) postali su O(1) mutacije umesto hodanja i kloniranja stabla.
- Odbacili smo dva puna JSON duboka kloniranja stabla koja su se izvršavala pri svakom preuzimanju.
- Komponente se pretplaćuju tačno na one delove koje čitaju, standardni model selektora, tako da glasanje na jednom komentaru utiče samo na jedan komentar.

Ta poslednja tačka je važnija nego što zvuči. Sa pretplatom zasnovanom na selektorima, red se ponovo prikazuje samo kada se podaci o njemu promene.

### Redizajn na Bazi Tokena

Stari izgled bio je gomila hardkodiranih stilova. Novi podrazumevani izgled se generiše iz skupa semantičkih dizajn tokena (`FastCommentsTheme`): boje, razmak, radius, veličine fontova, težine fontova, i veličine avatara. Cela struktura stilova proizašla je iz tih tokena.

To znači da je ponovno stilizovanje samo jedan prop:

```tsx
<FastCommentsLiveCommenting config={config} theme=\{{ colors: { primary: '#FF5500' } }}/>
```

Tamni režim je na dohvat jedne postavke tokena:

```tsx
import { getDarkTheme } from 'fastcomments-react-native-sdk';

<FastCommentsLiveCommenting config={config} theme={getDarkTheme()}/>
```

Sam redizajn ima čistiji, moderni neutralni izgled: tanke razdavače, dugmadi za glasanje i čipsa, popunjena glavna dugmad, zaobljeni avatari, i dosledna tipografiija. `styles` prop je i dalje prisutan za hirurške override-ove, tako da postojeće integracije i dalje funkcionišu.

### Posvećen Widget za Razgovor Uživo

Dodali smo `FastCommentsLiveChat`, preset za chat preko istog motora koji odražava chat prikaz našeg Android SDK-a: hronološke poruke sa najnovijima na dnu, composer ispod liste, uživo glavni trak sa tačkom veze i brojem korisnika, automatsko skrolovanje koje se pauzira dok čitate starije poruke, i beskonačna istorija dok se pomerate ka gore. Svaki preset se može prepraviti putem `config`.

```tsx
<FastCommentsLiveChat config=\{{ tenantId: 'demo', urlId: 'my-room' }}/>
```

### Sada i na Webu

Isti SDK sada radi na webu preko `react-native-web`. Rich text composer (potpomognut sa `react-native-enriched`) prikazuje se na isti način na iOS-u, Android-u, i browser-u, tako da je iskustvo uređivanja konzistentno svuda uz jednu implementaciju. Preklapanja koja bi inače ograničila listu komentara (meni, GIF birač, lista obaveštenja) su vezana ispod njihovih okidača na web verziji.

Možete testirati svaki widget sami u uživo <a href="https://fastcomments.com/commenting-system-for-react-native" target="_blank">browser-u komponenti</a>, koji je ovaj SDK u browser-u putem `react-native-web`.

### Održavanje Aktuelnosti sa React Native

5.0 je izgrađen i testiran protiv React Native 0.81 i React 19, i cilja na Novu Arhitekturu (Fabric), što je neophodno za nativni rich text editor. Održavanje aktuelnosti ovde nije besposlen posao: editor, rukovanje gestovima, i renderovanje postaju brži i tačniji kako React Native napreduje, i više bismo voleli da te nadogradnje uzimamo postepeno nego da ostanemo godinama iza.

### Na Zaključak

Ovo ponovno pisanje je bilo o davanju React Native SDK-ju istu prvu klasu kao našim drugim bibliotekama: brz i predvidiv model podataka, izgled koji možete tematski postaviti u jednom prop-u, widget za chat, i podrška za web, sve na modernoj React Native osnovi.

Možete pronaći SDK na <a href="https://www.npmjs.com/package/fastcomments-react-native-sdk" target="_blank">NPM</a>, izvor, s primerima, na <a href="https://github.com/FastComments/fastcomments-react-native-sdk" target="_blank">GitHub</a>, i svaki widget koji radi uživo u <a href="https://fastcomments.com/commenting-system-for-react-native" target="_blank">browser-u komponenti</a>. Javite nam u nastavku ako naiđete na bilo šta.

Živeli!

{{/isPost}}

---