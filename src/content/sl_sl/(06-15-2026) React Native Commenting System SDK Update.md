---
[category:API & Development]
[category:Performance]
[category:Announcements]

###### [postdate]
# [postlink]Posodobitev SDK sistema komentarjev React Native[/postlink]

{{#unless isPost}}
Na novo smo zgradili fastcomments-react-native-sdk: novo, bolj učinkovito upravljanje stanja, prenovo z uporabo oblikovalskih tokenov, namenski vtičnik za live klepet in podporo za splet v prvem razredu.
{{/unless}}

{{#isPost}}

### <i class="circle">!</i> Ta članek vsebuje tehnične izraze

### Kaj je novega

Pravkar smo izdali različico 5.1 `fastcomments-react-native-sdk`, naše knjižnice React Native, ki prikazuje komentarje in klepet z resničnimi native komponentami namesto z WebView.

Prepisali smo notranjost, prenovili celoten videz, dodali vtičnik za live klepet, prenesli SDK na splet in ga nadgradili na najnovejšo različico React Native in React.

<div class="text-center">
    <img src="images/rn-sdk-light.png" alt="FastComments React Native SDK, svetla tema" title="FastComments React Native SDK" style="max-width:280px;display:inline-block;margin:8px;vertical-align:top" />
    <img src="images/rn-sdk-dark.png" alt="FastComments React Native SDK, temna tema" title="FastComments React Native SDK, temna tema" style="max-width:280px;display:inline-block;margin:8px;vertical-align:top" />
</div>

### Zakaj dve knjižnici React Native?

Kratka opomba, ker prejemamo to vprašanje. Izdajamo dve možnosti:

- `fastcomments-react-native` je tanek ovitek okoli našega spletnega vtičnika, ki teče v WebView. To je najhitrejši način, da takoj dobite vse funkcije, in avtomatsko izkorišča spletne popravke.
- `fastcomments-react-native-sdk` (ta) prikazuje uporabniški vmesnik z nativnimi komponentami React Native brez webview. Je bolj fleksibilen, popolnoma tematski in deluje kot native, ker je native.

Za najboljšo izkušnjo priporočamo SDK. Preostali del tega prispevka se nanaša na to, kar se je spremenilo v 5.0.

### Novo upravljanje stanja

Glavni razlog za to spremembo je zagotoviti, da naša knjižnica ostaja zvesta svojemu imenu in ostaja hitra. Imeli smo več strank, ki so se pritoževale
zaradi njene zmogljivosti, zato je to sedaj rešeno.

SDK je prvotno hranil svoj drevo komentarjev v Hookstate. Delovalo je, vendar so s povečanjem niti in live posodobitev stvari začele upočasnjevati.

Hookstate smo nadomestili z Zustand in flat, indeksiranim skladiščem. Komentarji zdaj živijo v `byId` mapi skupaj z indeksi `childrenByParent`, `rootOrder` in `pinnedIds`, namesto v drevesu, ki je bilo gnezdeno znotraj stanja.

Plodovi:

- Live dogodki (nov komentar, glasovanje, urejanje) so postali O(1) mutacije namesto hoditi in klonirati drevo.
- Opustili smo dva globoka kloniranja celotnega drevesa JSON, ki sta se izvajala pri vsakem pridobivanju.
- Komponente se naročajo natančno na tiste dele, ki jih berejo, standardni model selektorjev, tako da glasovanje za en komentar vpliva samo na en komentar.

Ta zadnja točka je pomembnejša, kot se zdi. Z naročninami, temelječimi na selektorjih, se vrstica znova prikaže le, ko se spremenijo njeni podatki.

### Prenova na osnovi tokenov

Stari videz je bil kupa hardkodiranih stilov. Novi privzeti videz je generiran iz nabora semantičnih oblikovalskih tokenov (`FastCommentsTheme`): barve, razmik, polmer, velikosti pisave, teže pisave in velikosti avatarjev. Celotno drevo slogov izhaja iz teh tokenov.

To pomeni, da je preoblikovanje ena lastnost:

```tsx
<FastCommentsLiveCommenting config={config} theme=\{{ colors: { primary: '#FF5500' } }}/>
```

Temni način je ena nastavitev tokenov stran:

```tsx
import { getDarkTheme } from 'fastcomments-react-native-sdk';

<FastCommentsLiveCommenting config={config} theme={getDarkTheme()}/>
```

Prenova sama po sebi je bolj čista, moderna nevtralna podoba: tanki separatorji, gumbi za glasovanje in čipi v obliki tablet, napolnjeni primarni gumbi, zaobljeni avatarji in dosleden tipografski obseg. Lastnost `styles` je še vedno tam za kirurške nadomeščitve, tako da obstoječe integracije delujejo naprej.

### Namenski vtičnik za live klepet

Dodali smo `FastCommentsLiveChat`, prednastavljeno klepetalnico, ki deluje na isti osnovi in odraža klepetalni pogled našega Android SDK: kronološke slike sporočil z najnovejšimi na dnu, ustvarjalec pod seznamom, živi glavni trak s točko povezave in številom uporabnikov, samodejno pomikanje, ki se ustavi, ko berete starejša sporočila, in neskončna zgodovina, ko se pomikate navzgor. Vsaka prednastavitev je mogoče prekiniti preko `config`.

```tsx
<FastCommentsLiveChat config=\{{ tenantId: 'demo', urlId: 'my-room' }}/>
```

### Zdaj tudi na spletu

Enak SDK sedaj deluje na spletu preko `react-native-web`. Urejevalnik bogatega besedila (podprt z `react-native-enriched`) se prikazuje na enak način na iOS, Android in brskalniku, tako da je izkušnja urejanja dosledna povsod z enotno implementacijo. Prekrivanja, ki bi sicer bila obrezana s seznamom komentarjev (meni, izbira GIF-ov, seznam obvestil), so ankrirana pod njihovimi sprožilci na spletnem gradnji.

### Ostanite aktualni s React Native

5.0 je zgrajen in preizkušen proti React Native 0.81 in React 19, in cilja na Novo arhitekturo (Fabric), kar zahteva nativni urejevalnik bogatega besedila. Ostanek aktualen v tem primeru ni le izguba časa: urejevalnik, obvladovanje gest in upodabljanje postajajo hitrejši in bolj pravilni, ko React Native napreduje, in raje bi te nadgradnje prevzeli postopoma, kot da bi za leti zamudili.

### Na kratko

Ta prepis je bil o tem, da se SDK React Native da na enako prvo mesto kot naše druge knjižnice: hiter in predvidljiv model podatkov, videz, ki ga lahko tematske z eno lastnostjo, vtičnik za klepet in podporo za splet, vse na moderni osnovi React Native.

SDK lahko najdete na <a href="https://www.npmjs.com/package/fastcomments-react-native-sdk" target="_blank">NPM</a> in izvor, z za primeri, na <a href="https://github.com/FastComments/fastcomments-react-native-sdk" target="_blank">GitHub</a>. Sporočite nam spodaj, če naletite na kaj.

Na zdravje!

{{/isPost}}

---