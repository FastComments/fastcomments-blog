---
[category:API & Development]
[category:Performance]
[category:Announcements]

###### [postdate]
# [postlink]Ažuriranje SDK-a za komentare u React Native[/postlink]

{{#unless isPost}}
Ponovo smo izgradili fastcomments-react-native-sdk od temelja: novo, efikasnije upravljanje stanjima, redizajn pomoću dizajn tokova, posvećeni vidget za live chat, i podršku za veb na prvom mestu.
{{/unless}}

{{#isPost}}

### <i class="circle">!</i> Ovaj članak sadrži tehnički žargon

### Šta je novo

Upravo smo lansirali verziju 5.1 `fastcomments-react-native-sdk`, naše React Native biblioteke koja prikazuje komentare i chat sa pravim native komponentama umesto WebView-a.

Ponovo smo napisali interne funkcije, redizajnirali ceo izgled, dodali vidget za live chat, doneli SDK na veb, i unapredili ga na najnoviju verziju React Native i React.

<div class="text-center">
    <img src="images/rn-sdk-light.png" alt="FastComments React Native SDK, svetla tema" title="FastComments React Native SDK" style="max-width:280px;display:inline-block;margin:8px;vertical-align:top" />
    <img src="images/rn-sdk-dark.png" alt="FastComments React Native SDK, tamna tema" title="FastComments React Native SDK, tamna tema" style="max-width:280px;display:inline-block;margin:8px;vertical-align:top" />
</div>

### Zašto dve React Native biblioteke?

Brza beleška, jer dobijamo ovo pitanje. Dostavljamo dve opcije:

- `fastcomments-react-native` je tanka omotnica oko našeg veb vidžeta koji se izvršava u WebView-u. To je najbrži način da odmah dobijete svaku funkciju, a automatski koristi veb ispravke.
- `fastcomments-react-native-sdk` (ovaj) prikazuje UI sa native React Native komponentama bez WebView-a. Fleksibilniji je, u potpunosti se može prilagoditi, i izgleda native jer to i jeste.

Za najbolje iskustvo preporučujemo SDK. Ostatak ovog posta se odnosi na to šta se promenilo u 5.0.

### Novo upravljanje stanjima

Glavni motiv za ovu promenu je osigurati da naša biblioteka ostane verna našem imenu i ostane brza. Imali smo nekoliko korisnika koji su se žalili na performanse, tako da je ovo sada ispravljeno.

SDK je prvobitno čuvao svoj stablaste komentare u Hookstate-u. Radilo je, ali kako su niti i live ažuriranja rasla, stvari su počele usporavati.

Zamenili smo Hookstate sa Zustand-om i ravnim, indeksiranim skladištem. Komentari sada žive u `byId` mapi pored `childrenByParent`, `rootOrder`, i `pinnedIds` indeksa, umesto u stablu unutar stanja.

Isplata:

- Live događaji (novi komentar, glas, izmena) postali su O(1) mutacije umesto hodanja i kloniranja stabla.
- Uklonili smo dva puna JSON deep-clone-a stabla koja su se izvršavala pri svakoj optužbi.
- Komponente se pretplaćuju tačno na one delove koje čitaju, standardni model selektora, pa glas na jednom komentaru dotiče samo jedan komentar.

Ta poslednja tačka je važnija nego što zvuči. Sa pretplatama koje se zasnivaju na selektorima, red se ponovo renderuje samo kada se sopstveni podaci promene.

### Redizajn zasnovan na tokenima

Stari izgled je bio skup hardkodiranih stilova. Novi podrazumevani stil se generiše iz seta semantičkih dizajn tokova (`FastCommentsTheme`): boje, razmak, radijusi, veličine fontova, težine fontova i veličine avatara. Cela stabla stilova derivate iz tih tokova.

To znači da je ponovno stilizovanje jedan prop:

```tsx
<FastCommentsLiveCommenting config={config} theme=\{{ colors: { primary: '#FF5500' } }}/>
```

Tamni režim je udaljen samo jedan set tokena:

```tsx
import { getDarkTheme } from 'fastcomments-react-native-sdk';

<FastCommentsLiveCommenting config={config} theme={getDarkTheme()}/>
```

Sam redizajn je čistiji, moderni neutralni izgled: linijski razdvajači, dugmad za glasanje u obliku pilule i čipsovi, popunjena primarna dugmad, zaobljeni avatari, i dosledna veličina tipa. `styles` prop je još uvek tu za hirurške prepravke, tako da postojeće integracije nastavljaju da rade.

### Posvećeni vidget za live chat

Dodali smo `FastCommentsLiveChat`, unapred definisani chat preko istog motora koji odražava chat prikaz našeg Android SDK-a: hronološke poruke sa najnovijima na dnu, kompozitor ispod liste, live traka zaglavlja sa tačkom povezivanja i brojem korisnika, automatsko skrolovanje koje se pauzira dok čitate starije poruke, i beskonačna istorija dok se skrolujete nagore. Svaki unapred definisan preseta se može prepisati putem `config`.

```tsx
<FastCommentsLiveChat config=\{{ tenantId: 'demo', urlId: 'my-room' }}/>
```

### Sada i na vebu

Isti SDK sada radi na vebu preko `react-native-web`. Kompozitor bogatog teksta (pokretan sa `react-native-enriched`) renderuje se na isti način na iOS-u, Android-u i pretraživaču, tako da je iskustvo uređivanja dosledno svuda sa jednom implementacijom. Overlay-i koje bi lista komentara inače preklinjala (meni, GIF birač, lista notifikacija) su učvršćeni ispod njihovih okidača na veb verziji.

Možete isprobati svaki vidget sami u živoj <a href="https://fastcomments.com/commenting-system-for-react-native" target="_blank">prikazivaču komponenti</a>, koji je ovaj SDK koji se izvršava u pretraživaču putem `react-native-web`.

### Održavanje ažurnosti sa React Native

5.0 je izgrađen i testiran protiv React Native 0.81 i React 19, i cilja na Novu Arhitekturu (Fabric), što native urednik bogatog teksta zahteva. Održavanje ažurnosti ovde nije besposleno: urednik, rukovanje gestama, i renderovanje postaju brži i tačniji kako React Native napreduje, a radije bismo te nadogradnje preuzeli postepeno nego da zaostajemo godinama.

### Na kraju

Ovo ponovno pisanje se odnosi na to da React Native SDK-u da istu prvorazrednu poziciju kao i naši drugi biblioteci: brz i predvidljiv model podataka, izgled koji možete prilagoditi sa jednim propom, vidget za chat, i podršku za veb, sve na modernoj React Native osnovi.

SDK možete pronaći na <a href="https://www.npmjs.com/package/fastcomments-react-native-sdk" target="_blank">NPM</a>, izvor, sa primerima, na <a href="https://github.com/FastComments/fastcomments-react-native-sdk" target="_blank">GitHub</a>, i svaki vidget koji se izvršava u živo u <a href="https://fastcomments.com/commenting-system-for-react-native" target="_blank">prikazivaču komponenti</a>. Javite nam u komentarima ako naiđete na bilo šta.

Živeli!

{{/isPost}}

---