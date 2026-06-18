---
[category:API & Development]
[category:Performance]
[category:Announcements]

###### [postdate]
# [postlink]Posodobitev SDK sistema za komentiranje React Native[/postlink]

{{#unless isPost}}
Ponovno smo zgradili fastcomments-react-native-sdk od osnov: novo, učinkovitejše upravljanje stanja, prenovo z uporabo oblikovalskih tokenov, namenski vtičnik za klepet v živo in podporo za splet.
{{/unless}}

{{#isPost}}

### <i class="circle">!</i> Ta članek vsebuje tehnični žargon

### Kaj je novega

Pravkar smo izdali različico 5.1 `fastcomments-react-native-sdk`, naše knjižnice React Native, ki prikazuje komentarje in klepet z resničnimi naravnimi komponentami namesto WebView.

Prepisali smo notranjost, prenovili celoten videz, dodali vtičnik za klepet v živo, pripeljali SDK na splet in ga nadgradili na najnovejši React Native in React.

<div class="text-center">
    <img src="images/rn-sdk-light.png" alt="FastComments React Native SDK, svetla tema" title="FastComments React Native SDK" style="max-width:280px;display:inline-block;margin:8px;vertical-align:top" />
    <img src="images/rn-sdk-dark.png" alt="FastComments React Native SDK, temna tema" title="FastComments React Native SDK, temna tema" style="max-width:280px;display:inline-block;margin:8px;vertical-align:top" />
</div>

### Zakaj dve knjižnici React Native?

Hitra opomba, ker dobimo to vprašanje. Izdajamo dve možnosti:

- `fastcomments-react-native` je tanek ovoj okoli našega spletnega vtičnika, ki deluje v WebView. To je najhitrejši način, da takoj dobite vse funkcije, in avtomatsko koristi spletne popravke.
- `fastcomments-react-native-sdk` (ta) prikazuje uporabniški vmesnik z naravnimi komponentami React Native brez webview. Je bolj fleksibilen, popolnoma tematski in se počuti naravno, ker je naraven.

Za najboljšo izkušnjo priporočamo SDK. Preostali del tega prispevka govori o tem, kaj se je spremenilo v 5.0.

### Novo upravljanje stanja

Glavni razlog za to spremembo je zagotoviti, da naša knjižnica ostane zvesto svojim imenom in ostane hitra. Nekateri kupci so se pritoževali glede njene zmogljivosti, zato je to zdaj rešeno.

SDK je prvotno shranjeval svojo drevo komentarjev v Hookstate. Delovalo je, vendar je postalo počasneje, ko so se niti in žive posodobitve povečale.

Hookstate smo nadomestili z Zustand in ravnim, indeksiranim shrambo. Komentarji zdaj živijo v mapi `byId` poleg indeksov `childrenByParent`, `rootOrder` in `pinnedIds`, namesto v drevesu, ki je bilo gnezdeno v stanju.

Prednost:

- Živahni dogodki (nov komentar, glasovanje, ureditev) so postali O(1) mutacije, namesto da bi prehajali in kopirali drevo.
- Opustili smo dva popolna globoka JSON klona dreves, ki sta se izvajala ob vsakem pridobivanju.
- Komponente se naročijo natanko na tiste dele, ki jih preberejo, standardni model selektorja, tako da glasovanje za en komentar vpliva samo na en komentar.

Ta zadnja točka je pomembnejša, kot se sliši. Z naročninami na osnovi selektorja se vrstica ponovno nariše le, ko se spremenijo njeni lastni podatki.

### Prenova na osnovi tokenov

Stari videz je bil kup trdno kodiranih slogov. Novi privzeti je generiran iz nabora semantičnih oblikovalskih tokenov (`FastCommentsTheme`): barve, razmik, radij, velikosti pisave, debeline pisave in velikosti avatarjev. Celotno drevo slogov izhaja iz teh tokenov.

To pomeni, da je ponovna stilizacija ena lastnost:

```tsx
<FastCommentsLiveCommenting config={config} theme=\{{ colors: { primary: '#FF5500' } }}/>
```

Temni način je oddaljen le eno nastavitev tokena:

```tsx
import { getDarkTheme } from 'fastcomments-react-native-sdk';

<FastCommentsLiveCommenting config={config} theme={getDarkTheme()}/>
```

Prenova sama po sebi je čistejši, sodoben nevtralen videz: tanki ločevalniki, gumbi in čipi za glasovanje, napolnjeni primarni gumbi, zaobljeni avatarji in dosledna lestvica tipov. Lastnost `styles` je še vedno prisotna za kirurške preseke, tako da obstoječe integracije še naprej delujejo.

### Namenski vtičnik za klepet v živo

Dodali smo `FastCommentsLiveChat`, nastavitev klepeta nad isto napravo, ki odraža pogled na klepet našega Android SDK: kronološka sporočila z najnovejšimi na dnu, ustvarjalec pod seznamom, trak z glavo v živo s točko povezave in številom uporabnikov, samodejno pomikanje, ki se ustavi, medtem ko berete starejša sporočila, in neskončna zgodovina, ko se pomikate navzgor. Vsaka nastavitev je nadomestljiva preko `config`.

```tsx
<FastCommentsLiveChat config=\{{ tenantId: 'demo', urlId: 'my-room' }}/>
```

### Zdaj tudi na spletu

Enak SDK zdaj deluje na spletu preko `react-native-web`. Urejevalnik bogatega bes teksta (ki ga poganja `react-native-enriched`) prikazuje enako na iOS, Android in brskalniku, tako da je izkušnja urejanja povsod dosledna z enotno implementacijo. Prekrivanja, ki bi jih seznam komentarjev sicer prekinil (meni, izbira GIF-ov, seznam obvestil), so na spletnem gradniku pritrjena pod svojimi sprožilci.

Vsak vtičnik lahko poskusite sami v živi <a href="https://fastcomments.com/commenting-system-for-react-native" target="_blank">brskalniku komponent</a>, kar je ta SDK, ki teče v brskalniku preko `react-native-web`.

### Ostanite v koraku s React Native

5.0 je zgrajen in testiran proti React Native 0.81 in React 19, in se osredotoča na Novo arhitekturo (Fabric), ki jo zahteva naravni urejevalnik bogatega besedila. Ostanek v koraku tukaj ni le nagravžno delo: urejevalnik, obvladovanje gest in risanje postajajo hitrejši in natančnejši, ko se React Native premika naprej, in raje bi se počasi prilagajali tem nadgradnjam, kot pa da bi zaostajali leti.

### Zaključek

Ta prepis je bil o tem, da smo React Native SDK dali enak prednost kot naše druge knjižnice: hiter in predvidljiv podatkovni model, videz, ki ga lahko tematsko oblikujete v eni lastnosti, vtičnik za klepet in podporo za splet, vse na sodobni podlagi React Native.

SDK lahko najdete na <a href="https://www.npmjs.com/package/fastcomments-react-native-sdk" target="_blank">NPM</a>, izvor, z nečimer, na <a href="https://github.com/FastComments/fastcomments-react-native-sdk" target="_blank">GitHub</a>, in vsak vtičnik, ki deluje v živo v <a href="https://fastcomments.com/commenting-system-for-react-native" target="_blank">brskalniku komponent</a>. Sporočite nam spodaj, če naletite na kaj.

Na zdravje!

{{/isPost}}

---