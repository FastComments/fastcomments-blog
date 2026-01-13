---
[category:Features]
###### [postdate]
# [postlink]Komentarji so zdaj uređeni s FastComments[/postlink]

{{#unless isPost}}
Zelo pričakovana posodobitev, zdaj lahko urejate komentarje, ki so bili p оставлены s FastComments.
{{/unless}}

{{#isPost}}

### <i class="circle">!</i> Ta članek vsebuje tehnične izraze

#### Kaj je novega

Komentarji, ki so bili puščeni s FastComments, so zdaj lahko urejeni - ne glede na to, ali ste prijavljeni ali ne.

<img src="images/fc-editing-demo.gif" alt="Urejevanje Demo GIF (17mb)" title="Urejevanje Demo" />

Razumljivo, je bila ena naših najbolj zahtevanih funkcij, in veselimo se, da smo dosegli to prelomnico s našo bazo uporabnikov.

#### Kako deluje

Prijavljeni uporabniki lahko vedno urejajo svoje komentarje. Za anonimne komentatorje naši strežniki zagotavljajo začasno 24-urno obdobje, v katerem lahko uredijo svoj komentar po
komentiranju, dokler ne zaprejo brskalnika. To pomeni, da lahko anonimni komentator komentira, nato pa svoj komentar uredi, da odpravi morebitne tipkarske napake, brez kakršnekoli prijave!

Če anonimni komentator zapre svoj brskalnik, ne bo mogel urediti svojega komentarja, razen če klikne na čarobno povezavo, poslano na njegov e-poštni naslov.

Za dodatno varnost bo začasna uredniška ključna beseda neveljavna ob vsakem poskusu napačnega ugibanja ključa.

#### Zakaj zdaj, po tako dolgem času?

Kot pri vseh spremembah na strani odjemalca, moramo biti previdni, da ne povečamo njegove velikosti. Ta funkcija znatno poveča velikost osnovne kode za komentiranje (približno 1kb gzipped - približno 10% povečanje).
Želeli smo zagotoviti, da to ne zmanjša učinkovitosti FastComments in da funkcija pravilno deluje z našimi funkcijami v živo. Prav tako smo želeli, da funkcija
zadostuje najpogostejši uporabi naših strank - anonimnemu komentiranju.

#### Urejanje komentarjev v živo

Enako kot komentiranje in glasovanje - urejanje poteka v živo. Če sta dva uporabnika na isti strani, in uporabnik uredi svoj komentar, bo drugi uporabnik to videl.

#### Omogočanje urejanja komentarjev

Zaključili smo z uvajanjem urejanja komentarjev kot privzete možnosti za vse naše stranke. Trenutno te možnosti ni mogoče izklopiti.

#### Kaj sledi?

Načrtujemo izdajo možnosti brisanja komentarjev tudi v prihodnji posodobitvi.

#### Integracije tretjih strank

Urejanje komentarja bo povzročilo, da se bo dogodek razširil na vse integracije, ki jih imate - kot je WordPress. Če uporabljate naš WordPress vtičnik, bo dodajanje komentarja posodobilo
vašo WordPress namestitev v ozadju, tako da obdržite kopijo svojih podatkov. Če uredite komentar, sledimo isti logiki in posodobimo kopijo v vaši WordPress
namestitvi. To velja tudi za druge integracije, ne samo WordPress.

#### Na koncu

Vemo, da je bila ta funkcija dolgo pričakovana s strani nekaterih. Kot pri vseh večjih izdajah smo veseli, da smo si mogli vzeti čas za optimizacijo, testiranje in pravilno izdajo te funkcije.

Na zdravje!

{{/isPost}}

---