---
[category:API & Development]
[category:Performance]
[category:Announcements]

###### [postdate]
# [postlink]Ažuriranje SDK-a za sustav komentiranja u React Native-u[/postlink]

{{#unless isPost}}
Ponovno smo izgradili fastcomments-react-native-sdk od temelja: novo, učinkovitije upravljanje stanjima, redizajn koristeći dizajnerske tokene, poseban widget za chat, i podršku za web na visokom nivou.
{{/unless}}

{{#isPost}}

### <i class="circle">!</i> Ovaj članak sadrži tehnički izraz

### Što je novo

Tek smo izdali verziju 5.1 `fastcomments-react-native-sdk`, naše React Native biblioteke koja prikazuje komentare i chat s pravim nativnim komponentama umjesto WebView-a.

Prepisali smo unutrašnjost, redizajnirali cijeli izgled, dodali widget za live chat, donijeli SDK na web, i unaprijedili ga na najnoviju verziju React Native i React.

<div class="text-center">
    <img src="images/rn-sdk-light.png" alt="FastComments React Native SDK, svijetla tema" title="FastComments React Native SDK" style="max-width:280px;display:inline-block;margin:8px;vertical-align:top" />
    <img src="images/rn-sdk-dark.png" alt="FastComments React Native SDK, tamna tema" title="FastComments React Native SDK, tamna tema" style="max-width:280px;display:inline-block;margin:8px;vertical-align:top" />
</div>

### Zašto dvije React Native biblioteke?

Kratka napomena, jer često postavljamo ovo pitanje. Izdajemo dvije opcije:

- `fastcomments-react-native` je tanak omotač oko našeg web widgeta koji radi unutar WebView-a. To je najbrži način da odmah dobijete sve značajke, a automatski profitira od web popravaka.
- `fastcomments-react-native-sdk` (ova) prikazuje UI s nativnim React Native komponentama bez webview-a. Fleksibilnija je, potpuno tematski prilagodljiva, i osjeća se nativno jer je nativna.

Za najbolje iskustvo preporučujemo SDK. Ostatak ovog posta govori o tome što se promijenilo u 5.0.

### Novo upravljanje stanjem

Primarni cilj ove promjene je osigurati da naša biblioteka ostane vjerna svom imenu i ostane brza. Imao smo nekoliko kupaca koji su se žalili na njezinu izvedbu, tako da je ovo sada popravljeno.

SDK je prvotno držao svoju stablo komentara u Hookstate-u. Radilo je, ali kako su se niti i live ažuriranja povećavala, stvari su počele usporavati.

Zamijenili smo Hookstate s Zustand-om i ravnim, indeksiranim spremnikom. Komentari sada postoje u `byId` mapi zajedno s indeksima `childrenByParent`, `rootOrder`, i `pinnedIds`, umjesto stabla ugrađenog unutar stanja.

Ovo su prednosti:

- Live događaji (novi komentar, glasovanje, uređivanje) postali su O(1) mutacije umjesto hodanja i kloniranja stabla.
- Odustali smo od dva klona cijelog stabla JSON-a koji su se koristili na svakom dohvaćanju.
- Komponente se pretplaćuju točno na one dijelove koje čitaju, standardni model odabira, tako da glasovanje za jedan komentar utječe samo na taj komentar.

Ta posljednja točka je važnija nego što zvuči. Uz pretplate temeljene na odabiru, red se ponovo prikazuje samo kada se podaci promijene.

### Redizajn temeljen na tokenima

Stari izgled bio je hrpa hardkodiranih stilova. Novi zadani stil generira se iz skupa semantičkih dizajnerskih tokena (`FastCommentsTheme`): boje, razmak, radijus, veličine fonta, debljine fonta, i veličine avatara. Cijelo stablo stilova proizašlo je iz tih tokena.

To znači da je redizajniranje samo jedan prop:

```tsx
<FastCommentsLiveCommenting config={config} theme=\{{ colors: { primary: '#FF5500' } }}/>
```

Tamni način rada je udaljen samo jedan set tokena:

```tsx
import { getDarkTheme } from 'fastcomments-react-native-sdk';

<FastCommentsLiveCommenting config={config} theme={getDarkTheme()}/>
```

Sam redizajn je lakši, moderan neutralan izgled: tanka razdvajanja, gumbe i čipove za glasanje u obliku pilula, ispunjene primarne gumbe, zaobljene avatare, i dosljednu tipografiju. Prop `styles` još uvijek postoji za kirurške preinake, tako da postojeće integracije nastavljaju raditi.

### Posvećen widget za live chat

Dodali smo `FastCommentsLiveChat`, unaprijed određenu prilagodbu chat-a preko istog motora koji odražava chat prikaz našeg Android SDK-a: kronološke poruke s najnovijim na dnu, kompozitor ispod popisa, živahna traka zaglavlja s točkom veze i brojem korisnika, automatsko pomicanje koje staje dok čitate starije poruke, i beskonačnu povijest dok se pomičete prema gore. Svaka unaprijed određena prilagodba može se zamijeniti kroz `config`.

```tsx
<FastCommentsLiveChat config=\{{ tenantId: 'demo', urlId: 'my-room' }}/>
```

### Sada i na webu

Isti SDK sada radi na webu preko `react-native-web`. Rich text kompozitor (pokretan `react-native-enriched`) prikazuje se na isti način na iOS-u, Android-u, i pregledniku, tako da je iskustvo uređivanja dosljedno svugdje s jednom implementacijom. Prekidi koje bi popis komentara inače obrezao (izbornici, odabir GIF-a, lista obavijesti) učvršćeni su ispod svojih okidača na web verziji.

### Održavanje trenutka s React Native-om

5.0 je izgrađen i testiran protiv React Native 0.81 i React 19, i cilja na Novu arhitekturu (Fabric), koju zahtijeva nativni uređivač bogatih tekstova. Održavanje trenutnog stanja ovdje nije besposleno: uređivač, rukovanje gestama, i renderiranje postaju brži i ispravniji kako React Native napreduje, i radije bismo uzeli te nadogradnje postepeno nego da kasnimo godinama.

### Zaključak

Ovo prepisivanje je bilo o tome da React Native SDK dobije istu visoko kvalitetnu podlogu kao naše druge biblioteke: brz i predvidiv model podataka, izgled koji možete tematski prilagoditi u jednom prop-u, widget za chat, i podršku za web, sve na modernoj React Native osnovi.

SDK možete pronaći na <a href="https://www.npmjs.com/package/fastcomments-react-native-sdk" target="_blank">NPM</a> i izvor, s primjerima, na <a href="https://github.com/FastComments/fastcomments-react-native-sdk" target="_blank">GitHub</a>. Javite nam u komentarima ako naiđete na bilo kakve probleme.

Živjeli!

{{/isPost}}

---