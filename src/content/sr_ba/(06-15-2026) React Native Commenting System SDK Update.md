---
[category:API & Development]
[category:Performance]
[category:Announcements]

###### [postdate]
# [postlink]Ažuriranje SDK sistema komentarisanja React Native[/postlink]

{{#unless isPost}}
Ponovo smo izgradili fastcomments-react-native-sdk od temelja: novo, efikasnije upravljanje stanjima, redizajn korišćenjem dizajn tokena, posvećen live chat widget, i podrška za web prvoklasnog kvaliteta.
{{/unless}}

{{#isPost}}

### <i class="circle">!</i> Ovaj Članak Sadrži Tehničku Terminologiju

### Šta je Novo

Upravo smo objavili verziju 5.1 za `fastcomments-react-native-sdk`, našu React Native biblioteku koja prikazuje komentare i chat sa pravim nativnim komponentama umesto WebView.

Ponovo smo napisali unutrašnjost, redizajnirali ceo izgled, dodali live chat widget, doneli SDK na web i unapredili ga na najnoviji React Native i React.

<div class="text-center">
    <img src="images/rn-sdk-light.png" alt="FastComments React Native SDK, svetla tema" title="FastComments React Native SDK" style="max-width:280px;display:inline-block;margin:8px;vertical-align:top" />
    <img src="images/rn-sdk-dark.png" alt="FastComments React Native SDK, tamna tema" title="FastComments React Native SDK, tamna tema" style="max-width:280px;display:inline-block;margin:8px;vertical-align:top" />
</div>

### Zašto Dve React Native Biblioteke?

Brza napomena, jer često dobijamo ovo pitanje. Uključujemo dve opcije:

- `fastcomments-react-native` je tanka omotača oko našeg web widget-a koji radi u WebView. To je najbrži način da odmah dobijete sve funkcionalnosti, i automatski ima koristi od web ispravki.
- `fastcomments-react-native-sdk` (ova) prikazuje UI sa nativnim React Native komponentama bez webview-a. To je fleksibilnije, potpuno prilagodljivo, i deluje nativno jer to jeste nativno.

Za najbolje iskustvo preporučujemo SDK. Ostatak ovog posta se odnosi na to šta se promenilo u verziji 5.0.

### Novo Upravljanje Stanjima

Primarni razlog za ovu promenu je da osiguramo da naša biblioteka ostane verna našem imenu i ostane brza. Imali smo nekoliko korisnika koji su se žalili
na njene performanse, pa je ovo sada ispravljeno.

SDK je prvobitno držao svoj komentarni stablo u Hookstate. Funkcionisalo je, ali kako su se thread-ovi i live ažuriranja povećavali, stvari su počele da usporavaju.

Zamenili smo Hookstate sa Zustand-om i ravnim, indeksiranim skladištem. Komentari sada žive u `byId` mapi pored `childrenByParent`, `rootOrder`, i `pinnedIds` indeksa, umesto u stablu koje je bilo ugnježdeno unutar stanja.

Ovo donosi:

- Živi događaji (novi komentar, glas, izmena) postali su O(1) mutacije umesto hodanja i kloniranja stabla.
- Eliminisali smo dve duboke klonove JSON stabla koji su se ranije izvodili na svakom preuzimanju.
- Komponente se pretplaćuju tačno na one delove koje čitaju, standardni model selektora, tako da glas na jednom komentaru dodiruje samo jedan komentar.

Ta poslednja tačka je važnija nego što zvuči. Sa pretplatom na osnovu selektora, red se ponovo prikazuje samo kada se njeni podaci promene.

### Redizajn Zasnovan na Tokenima

Stari izgled je bio skup hardkodiranih stilova. Novi podrazumevani izgled se generiše iz seta semantičkih dizajn tokena (`FastCommentsTheme`): boje, razmak, radius, veličine fonta, težine fonta i veličine avatara. Ceo stilski stablo se izvodi iz tih tokena.

To znači da je ponovni stil jedan prop:

```tsx
<FastCommentsLiveCommenting config={config} theme=\{{ colors: { primary: '#FF5500' } }}/>
```

Tamni način je samo jedan set tokena daleko:

```tsx
import { getDarkTheme } from 'fastcomments-react-native-sdk';

<FastCommentsLiveCommenting config={config} theme={getDarkTheme()}/>
```

Sam redizajn ima čistiji, savremeni neutralni izgled: veoma tanke separator linije, dugmad za glasanje i čips u obliku pilule, ispunjena primarna dugmad, zaobljeni avatare, i dosledna skala tipa. `styles` prop je još uvek prisutan za kirurgijske promene, tako da postojeće integracije nastavljaju da funkcionišu.

### Posvećen Live Chat Widget

Dodali smo `FastCommentsLiveChat`, chat preset preko istog motora koji odražava chat prikaz našeg Android SDK-a: hronološke poruke sa najnovijim na dnu, kompozitor ispod liste, živi header trak sa tačkom povezivanja i brojem korisnika, automatsko skrolovanje koje se pauzira dok čitate starije poruke, i beskonačna istorija dok skrolujete nagore. Svaki preset se može promeniti putem `config`.

```tsx
<FastCommentsLiveChat config=\{{ tenantId: 'demo', urlId: 'my-room' }}/>
```

### Sada i na Webu

Isti SDK sada radi na webu preko `react-native-web`. Kompozitor bogatog teksta (pokretan `react-native-enriched`) prikazuje se na isti način na iOS-u, Android-u i pretraživaču, tako da je iskustvo uređivanja dosledno svuda sa jednom implementacijom. Preklapanja koja bi inače sečena lista komentara (meni, GIF selektor, lista obaveštenja) su vezana ispod svojih okidača na web izgradnji.

Možete sami probati svaki widget u živom <a href="https://fastcomments.com/commenting-system-for-react-native" target="_blank">pregledaču komponenti</a>, što je ovaj SDK koji radi u pretraživaču putem `react-native-web`.

### Održavanje Aktualnosti sa React Native

Verzija 5.0 je izgrađena i testirana uz React Native 0.81 i React 19, i cilja na Novu Arhitekturu (Fabric), što je potrebno za nativni editor bogatog teksta. Održavanje trenutne verzije nije samo dodatni posao: editor, rukovanje gestovima, i renderovanje postaju brži i ispravniji kako React Native napreduje, i radije bismo primali ta unapređenja postepeno nego da zaostajemo godinama.

### Zaključak

Ova ponovna izgradnja je bila o davanju React Native SDK-u istog prvoklasnog položaja kao i našim drugim bibliotekama: brzi i predvidljivi model podataka, izgled koji možete prilagoditi u jednom prop-u, chat widget, i podrška za web, sve na savremenoj React Native osnovi.

Možete pronaći SDK na <a href="https://www.npmjs.com/package/fastcomments-react-native-sdk" target="_blank">NPM</a>, izvor, sa primerima, na <a href="https://github.com/FastComments/fastcomments-react-native-sdk" target="_blank">GitHub</a>, i svaki widget koji radi uživo u <a href="https://fastcomments.com/commenting-system-for-react-native" target="_blank">pregledaču komponenti</a>. Javite nam ispod ako naiđete na bilo šta.

Pozdrav!

{{/isPost}}

---