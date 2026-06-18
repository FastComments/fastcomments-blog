---
[category:API & Development]
[category:Performance]
[category:Announcements]

###### [postdate]
# [postlink]Ažuriranje SDK-a za komentarisanje u React Native-u[/postlink]

{{#unless isPost}}
Ponovno smo izgradili fastcomments-react-native-sdk od temelja: novo, efikasnije upravljanje stanjem, redizajn koristeći Design Tokens, posvećen live chat widget, i vrhunsku podršku za web.
{{/unless}}

{{#isPost}}

### <i class="circle">!</i> Ovaj članak sadrži tehnički žargon

### Šta je novog

Upravo smo izbacili verziju 5.1 `fastcomments-react-native-sdk`, naše React Native biblioteke koja prikazuje komentare i chat sa pravim native komponentama umesto WebView.

Ponovno smo napisali interne procese, redizajnirali ceo izgled, dodali live chat widget, doneli SDK na web, i nadogradili ga na najnovije verzije React Native i React.

<div class="text-center">
    <img src="images/rn-sdk-light.png" alt="FastComments React Native SDK, svetla tema" title="FastComments React Native SDK" style="max-width:280px;display:inline-block;margin:8px;vertical-align:top" />
    <img src="images/rn-sdk-dark.png" alt="FastComments React Native SDK, tamna tema" title="FastComments React Native SDK, tamna tema" style="max-width:280px;display:inline-block;margin:8px;vertical-align:top" />
</div>

### Zašto dve React Native biblioteke?

Brza napomena, jer dobijamo ovo pitanje. Isporučujemo dve opcije:

- `fastcomments-react-native` je tanak omotač oko našeg web widget-a koji radi u WebView. To je najbrži način da odmah dobijete sve funkcije, i automatski koristi web ispravke.
- `fastcomments-react-native-sdk` (ovaj) prikazuje UI sa native React Native komponentama bez webview-a. Fleksibilniji je, potpuno se može temisati, i deluje native jer jeste native.

Za najbolje iskustvo preporučujemo SDK. Ostatak ovog posta se odnosi na to šta se promenilo u 5.0.

### Novo upravljanje stanjem

Glavni motiv za ovu promenu je da osiguramo da naša biblioteka ostane verna svom imenu i ostane brza. Imali smo nekoliko klijenata koji su se žalili na njenu performansu, tako da je ovo sada ispravljeno.

SDK je prvobitno čuvao svoj stablo komentara u Hookstate. Radilo je, ali kako su se nit i live ažuriranja povećavala, stvari su počele da usporavaju.

Zamenili smo Hookstate sa Zustand i ravnom, indeksiranom prodavnicom. Komentari sada žive u `byId` mapi zajedno sa `childrenByParent`, `rootOrder`, i `pinnedIds` indeksima, umesto u stablu smeštenom unutar stanja.

Dobit:

- Live događaji (novi komentar, glasanje, izmena) postali su O(1) mutacije umesto hodanja i kloniranja stabla.
- Oslobodili smo se dve pune JSON duboke kloniranja stabla koja su se izvodila na svakoj pretrazi.
- Komponente pretplaćuju se tačno na one delove koje čitaju, standardni selektor model, tako da glasanje na jednom komentaru dodiruje samo jedan komentar.

Ta poslednja tačka je važnija nego što zvuči. Sa pretplatama zasnovanim na selektorima, red se ponovo renderuje samo kada se podaci promene.

### Redizajn zasnovan na tokenima

Stari izgled je bio gomila hardkodiranih stilova. Novi podrazumevani izgled se generiše iz seta semantičkih dizajn tokena (`FastCommentsTheme`): boje, razmak, radijus, veličine fonta, težine fonta, i veličine avatara. Cela stabla stilova proizašla su iz tih tokena.

To znači da je promena stila jedina svojstvo:

```tsx
<FastCommentsLiveCommenting config={config} theme=\{{ colors: { primary: '#FF5500' } }}/>
```

Tamni režim je samo token skup daleko:

```tsx
import { getDarkTheme } from 'fastcomments-react-native-sdk';

<FastCommentsLiveCommenting config={config} theme={getDarkTheme()}/>
```

Sam redizajn je čišći, moderni neutralan izgled: tanke separacije, pilasti dugmići za glasanje i čips, popunjeni primarni dugmići, zaobljeni avatare, i dosledna skalabilnost tipa. `styles` svojstvo je i dalje tu za hirurške prepravke, tako da postojeće integracije nastavljaju da rade.

### Posvećen live chat widget

Dodali smo `FastCommentsLiveChat`, chat preset iznad iste mašinerije koja odražava chat pogleda našeg Android SDK-a: hronološke poruke sa najnovijim na dnu, kompozitor ispod liste, live zaglavlje sa tačkom veze i brojem korisnika, automatsko skrolovanje koje se pauzira dok čitate starije poruke, i beskonačna istorija dok skrolujete prema gore. Svaki preset se može prepraviti putem `config`.

```tsx
<FastCommentsLiveChat config=\{{ tenantId: 'demo', urlId: 'my-room' }}/>
```

### Sada i na webu

Isti SDK sada radi na webu preko `react-native-web`. Rich text kompozitor (pokretan `react-native-enriched`) prikazuje se na isti način na iOS-u, Android-u i pretraživaču, tako da je iskustvo uređivanja dosledno svuda sa jednom implementacijom. Overlays koje bi lista komentara inače isekla (meni, GIF birač, lista notifikacija) su vezani ispod svojih okidača na web build-u.

Možete sami isprobati svaki widget u live <a href="https://fastcomments.com/commenting-system-for-react-native" target="_blank">browser-u komponenti</a>, što je ovaj SDK koji radi u pretraživaču preko `react-native-web`.

### Održavanje trenutnosti sa React Native

5.0 je izgrađen i testiran protiv React Native 0.81 i React 19, i cilja na Novu Arhitekturu (Fabric), što je potrebno za native rich text editor. Održavanje trenutnosti ovde nije besposlica: editor, rukovanje gestovima, i renderovanje postaju brži i tačniji kako React Native napreduje, i radije bismo uzeli te nadogradnje postepeno nego da zaostanemo godinama.

### Na kraju

Ova ponovna izrada se radila da se React Native SDK-u da ista prva klasa osnova kao i naše druge biblioteke: brz i predvidiv model podataka, izgled koji možete temisati sa jednim svojstvom, chat widget, i web podrška, sve na modernoj React Native bazi.

Možete pronaći SDK na <a href="https://www.npmjs.com/package/fastcomments-react-native-sdk" target="_blank">NPM</a>, izvor, sa primerima, na <a href="https://github.com/FastComments/fastcomments-react-native-sdk" target="_blank">GitHub</a>, i svaki widget koji radi uživo u <a href="https://fastcomments.com/commenting-system-for-react-native" target="_blank">browser-u komponenti</a>. Javite nam ispod ako naiđete na nešto.

Živeli!

{{/isPost}}

---