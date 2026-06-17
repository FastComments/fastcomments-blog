---
[category:API & Development]
[category:Performance]
[category:Announcements]

###### [postdate]
# [postlink]React Native Komentarisanje Sistema SDK Ažuriranje[/postlink]

{{#unless isPost}}
Ponovo smo izgradili fastcomments-react-native-sdk od temelja: novo, efikasnije upravljanje stanjima, redizajn koristeći dizajn tokene, posvećeni vidget za razgovor uživo, i podrška za web prvog reda.
{{/unless}}

{{#isPost}}

### <i class="circle">!</i> Ovaj Članak Sadrži Tehnički Žargon

### Šta je Novo

Tek smo poslali verziju 5.1 našeg `fastcomments-react-native-sdk`, naše React Native biblioteke koja renderuje komentare i razgovore sa pravim nativnim komponentama umesto WebView-a.

Ponovo smo napisali unutrašnjost, redizajnirali ceo izgled, dodali widget za razgovor uživo, doneli SDK na web i unapredili ga na najnoviji React Native i React.

<div class="text-center">
    <img src="images/rn-sdk-light.png" alt="FastComments React Native SDK, svetla tema" title="FastComments React Native SDK" style="max-width:280px;display:inline-block;margin:8px;vertical-align:top" />
    <img src="images/rn-sdk-dark.png" alt="FastComments React Native SDK, tamna tema" title="FastComments React Native SDK, tamna tema" style="max-width:280px;display:inline-block;margin:8px;vertical-align:top" />
</div>

### Zašto Dve React Native Biblioteke?

Brza napomena, jer dobijamo ovo pitanje. Imamo dve opcije:

- `fastcomments-react-native` je tanak omotač oko našeg web vidgeta koji radi unutar WebView-a. To je najbrži način da odmah dobijete sve funkcije, i automatski profitira od web ispravki.
- `fastcomments-react-native-sdk` (ovaj) renderuje korisnički interfejs sa nativnim React Native komponentama bez WebView-a. Fleksibilniji je, potpuno prilagodljiv, i deluje nativno jer to i jeste nativno.

Za najbolje iskustvo preporučujemo SDK. Ostatak ovog posta se bavi onim što se promenilo u 5.0.

### Novo Upravljanje Stanjima

Glavni uzrok ove promene je da se osigura da naša biblioteka ostane verna našem imenu i ostane brza. Imali smo nekoliko klijenata koji su se žalili na njene performanse, tako da je ovo sada reševano.

SDK je prvobitno čuvao svoju strukturu komentara u Hookstate-u. Radilo je to, ali kako su niti i ažuriranja uživo rasla, stvari su počele da usporavaju.

Zamenili smo Hookstate sa Zustand-om i ravnim, indeksiranim skladištem. Sada komentari žive u `byId` mapi pored `childrenByParent`, `rootOrder`, i `pinnedIds` indeksa, umesto u stablu smeštenom unutar stanja.

Isplata:

- Uživo događaji (novi komentar, glasanje, izmena) postali su O(1) mutacije umesto hodanja i kloniranja stabla.
- Odbacili smo dva puna stabla JSON dubokih klonova koja su ranije bila pokrenuta na svakoj dohvatu.
- Komponente se pretplaćuju na tačno one delove koje čitaju, standardni selektor model, tako da glasanje na jednom komentaru dotiče samo jedan komentar.

Ta poslednja tačka je važnija nego što zvuči. Sa pretplatama zasnovanim na selektorima, red se ponovo renderuje samo kada se podaci o njemu menjaju.

### Redizajn Zasnovan na Tokenima

Stari izgled bio je gomila hardkodiranih stilova. Novi podrazumevani se generiše iz skupa semantičkih dizajn tokena (`FastCommentsTheme`): boje, razmaci, radijus, veličine fonta, težine fonta, i veličine avatare. Cela stabla stilova proizašla su iz tih tokena.

To znači da je ponovno stilizovanje samo jedan prop:

```tsx
<FastCommentsLiveCommenting config={config} theme=\{{ colors: { primary: '#FF5500' } }}/>
```

Tamni režim je samo jedan set tokena udaljen:

```tsx
import { getDarkTheme } from 'fastcomments-react-native-sdk';

<FastCommentsLiveCommenting config={config} theme={getDarkTheme()}/>
```

Sam redizajn je čišći, moderan-neutralan izgled: tanki razdvojnici, pilasti dugmići za glasanje i čipovi, ispunjeni primarni dugmići, zaobljeni avatare, i dosledna tipografska skala. Prop `styles` je još uvek prisutan za hirurške prepravke, tako da postojeće integracije nastavljaju da rade.

### Posvećen Widget za Razgovor Uživo

Dodali smo `FastCommentsLiveChat`, unapred podesivi razgovor preko istog motora koji oslikava prikaz razgovora našeg Android SDK: hronološke poruke sa najnovijim na dnu, kompozitor ispod liste, uživo zaglavlje sa tačkom konekcije i brojem korisnika, automatsko pomeranje koje se zaustavlja dok čitate starije poruke, i beskonačna istorija dok se pomerate nagore. Svaki unapred podešeni je moguće zameniti kroz `config`.

```tsx
<FastCommentsLiveChat config=\{{ tenantId: 'demo', urlId: 'my-room' }}/>
```

### Sada i na Webu

Isti SDK sada radi na webu kroz `react-native-web`. Kompozitor bogatog teksta (pokretan sa `react-native-enriched`) se renderuje isto na iOS-u, Android-u, i pregledaču, tako da je iskustvo uređivanja dosledno svuda sa jednom implementacijom. Preklapanja koja bi lista komentara inače preklapala (meni, GIF biraci, lista notifikacija) su vezana ispod svojih okidača na web gradnji.

### Održavanje Aktuelnosti sa React Native

5.0 je izgrađena i testirana protiv React Native 0.81 i React 19, i cilja na novu arhitekturu (Fabric), što je potrebno za nativni uređivač bogatog teksta. Održavanje aktuelnosti ovde nije samo posla: uređivač, upravljanje pokretima, i renderovanje postaju brži i ispravniji kako React Native napreduje, i radije bismo nastavili sa tim unapređenjima postepeno nego da zaostanemo godinama.

### Na Zaključku

Ovo prepisivanje je imalo za cilj da pruži React Native SDK-u istu prvorazrednu poziciju kao i naše druge biblioteke: brz i predvidljiv model podataka, izgled koji možete tematički prilagoditi u jednom prop-u, widget za razgovor, i podršku za web, sve na modernoj osnovi React Native.

Možete pronaći SDK na <a href="https://www.npmjs.com/package/fastcomments-react-native-sdk" target="_blank">NPM</a> i izvor, sa primerima, na <a href="https://github.com/FastComments/fastcomments-react-native-sdk" target="_blank">GitHub</a>. Javite nam u nastavku ako naiđete na nešto.

Živeli!

{{/isPost}}

---