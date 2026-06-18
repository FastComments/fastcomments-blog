---
[category:API & Development]
[category:Performance]
[category:Announcements]

###### [postdate]
# [postlink]Ažuriranje SDK-a za sustav komentiranja u React Native[/postlink]

{{#unless isPost}}
Ponovno smo izgradili fastcomments-react-native-sdk od temelja: novo, učinkovitije upravljanje stanjem, redizajn koristeći dizajn tokene, posvećeni widget za chat uživo i prvu klasu web podrške.
{{/unless}}

{{#isPost}}

### <i class="circle">!</i> Ovaj članak sadrži tehnički žargon

### Što je novo

Upravo smo objavili verziju 5.1 `fastcomments-react-native-sdk`, naše React Native biblioteke koja prikazuje komentare i chat s pravim native komponentama umjesto WebView.

Prepisali smo unutrašnjost, redizajnirali cijeli izgled, dodali widget za chat uživo, donijeli SDK na web i nadogradili ga na najnoviju verziju React Native i React.

<div class="text-center">
    <img src="images/rn-sdk-light.png" alt="FastComments React Native SDK, svijetla tema" title="FastComments React Native SDK" style="max-width:280px;display:inline-block;margin:8px;vertical-align:top" />
    <img src="images/rn-sdk-dark.png" alt="FastComments React Native SDK, tamna tema" title="FastComments React Native SDK, tamna tema" style="max-width:280px;display:inline-block;margin:8px;vertical-align:top" />
</div>

### Zašto dvije React Native biblioteke?

Brza napomena, jer često postavljamo ovo pitanje. Nudimo dvije opcije:

- `fastcomments-react-native` je tanak omotač oko našeg web widgeta koji radi u WebView-u. To je najbrži način da odmah dobijete svaku funkciju, a automatski dobija ispravke sa weba.
- `fastcomments-react-native-sdk` (ovaj) prikazuje UI s native React Native komponentama bez webview-a. Fleksibilniji je, potpuno se može temirati i ima osjećaj native funkcionalnosti jer je native.

Za najbolje iskustvo preporučujemo SDK. Ostatak ovog posta govori o tome što se promijenilo u verziji 5.0.

### Novo upravljanje stanjem

Primarni motiv ove promjene je osigurati da naša biblioteka ostane vjerna svom imenu i ostane brza. Imali smo nekoliko pritužbi kupaca
na njenu izvedbu, tako da je ovo sada ispravljeno.

SDK je izvorno čuvao svoju strukturu komentara u Hookstate. Radilo je, ali kako su se niti i živuće nadogradnje povećavale, stvari su počele usporavati.

Zamijenili smo Hookstate s Zustand i ravnom, indeksiranom pohranom. Komentari sada žive u `byId` mapi uz `childrenByParent`, `rootOrder` i `pinnedIds` indekse, umjesto da budu u stablu unutar stanja.

Isplata:

- Živi događaji (novi komentar, glasovanje, izmjena) postali su O(1) mutacije umjesto hodanja i kloniranja stabla.
- Odustali smo od dvije potpune JSON duboke klonove stabla koji su se ranije izvršavali pri svakom dohvaćanju.
- Komponente se pretplaćuju točno na one dijelove koje čitaju, standardni model selektora, tako da glasovanje za jedan komentar utječe samo na taj komentar.

Ta posljednja točka je važnija nego što zvuči. S pretplatama temeljenim na selektorima, redoslijed se ponovno prikazuje samo kada se vlastiti podaci promijene.

### Redizajn temeljen na tokenima

Stari izgled bio je hrpa hardkodiranih stilova. Novi zadani stil generira se iz skupa semantičkih dizajn tokena (`FastCommentsTheme`): boje, razmak, radijus, veličine fontova, težine fontova i veličine avatare. Cijelo stablo stilova proizlazi iz tih tokena.

To znači da je ponovno oblikovanje samo jedan prop:

```tsx
<FastCommentsLiveCommenting config={config} theme=\{{ colors: { primary: '#FF5500' } }}/>
```

Tamni način rada udaljen je samo jedan set tokena:

```tsx
import { getDarkTheme } from 'fastcomments-react-native-sdk';

<FastCommentsLiveCommenting config={config} theme={getDarkTheme()}/>
```

Sama promjena dizajna je čišći, moderni neutralni izgled: linije za odvajanje, dugmadi za glasanje i čips u obliku pilule, ispunjena primarna dugmad, zaobljeni avatari i konzistentna tipografska skala. Prop `styles` je i dalje tu za kirurške preklapanja, tako da postojeće integracije nastavljaju raditi.

### Posvećen widget za chat uživo

Dodali smo `FastCommentsLiveChat`, unaprijed definirani chat preko istog motora koji odražava chat vizual našeg Android SDK-a: kronološke poruke s najnovijim na dnu, kompozitor ispod liste, uživo traka zaglavlja s točkom veze i brojem korisnika, automatsko pomicanje koje se pauzira dok čitate starije poruke, i beskonačna povijest dok se pomičete prema gore. Svaka unaprijed definirana postavka može se nadjačati preko `config`.

```tsx
<FastCommentsLiveChat config=\{{ tenantId: 'demo', urlId: 'my-room' }}/>
```

### Sada također na Webu

Isti SDK sada radi na webu preko `react-native-web`. Kompozitor bogatog teksta (napajan s `react-native-enriched`) prikazuje se na isti način na iOS-u, Android-u i pregledniku, tako da je iskustvo uređivanja dosljedno svugdje s jednom implementacijom. Preklapanja koja bi inače isječena lista komentara (izbornici, odabir GIF-ova, popis obavijesti) su učvršćena ispod svojih okidača na web izdanju.

Možete isprobati svaki widget sami u live <a href="https://fastcomments.com/commenting-system-for-react-native" target="_blank">pregledniku komponenti</a>, što je ovaj SDK koji radi u pregledniku putem `react-native-web`.

### Održavanje s trenutnim verzijama React Native

5.0 je izgrađen i testiran protiv React Native 0.81 i React 19, i cilja na novu arhitekturu (Fabric), koju zahtijeva native editor bogatog teksta. Održavanje trenutnosti ovdje nije bespredmetno: editor, upravljanje gestama i renderiranje postaju brži i precizniji kako React Native napreduje, i radije bismo dobivali te nadogradnje postepeno nego da zakažemo godinama.

### Zaključak

Ovo prepisivanje bilo je o tome da se SDK za React Native dobije istu prvi razred kao naše druge biblioteke: brz i predvidljiv model podataka, izgled koji se može temirati u jednom prop-u, widget za chat i web podršku, sve na modernoj osnovi React Native.

SDK možete pronaći na <a href="https://www.npmjs.com/package/fastcomments-react-native-sdk" target="_blank">NPM</a>, izvor, s primjerima, na <a href="https://github.com/FastComments/fastcomments-react-native-sdk" target="_blank">GitHub</a>, i svaki widget koji radi uživo u <a href="https://fastcomments.com/commenting-system-for-react-native" target="_blank">pregledniku komponenti</a>. Javite nam u nastavku ako naiđete na bilo što.

Živjeli!

{{/isPost}}

---