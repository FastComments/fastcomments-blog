---
[category:Features]
###### [postdate]
# [postlink]Komentarji so zdaj urejevali z FastComments[/postlink]

{{#unless isPost}}
Dolgo pričakovana posodobitev, zdaj lahko urejate komentarje, ki so jih pustili z FastComments.
{{/unless}}

{{#isPost}}

### <i class="circle">!</i> Ta članek vsebuje tehnične izraze

#### Kaj je novega

Komentarje, ki so jih pustili z FastComments, je zdaj mogoče urejati - bodisi, da ste prijavljeni bodisi ne.

<video src="images/fc-editing-demo.mp4" autoplay loop muted playsinline title="Predstava urejanja"></video>

Razumljivo je, da je to ena naših najbolj zahtevanih funkcij in veselimo se, da smo dosegli ta mejnik s našo bazo uporabnikov.

#### Kako deluje

Prijavljeni uporabniki lahko vedno urejajo svoje komentarje. Za anonimne komentatorje naši strežniki nudijo začasno 24-urno okno, da lahko uredijo svoj komentar po
komentarju, dokler ne zaprejo svojega brskalnika. Na primer, to pomeni, da lahko anonimni komentator komentar, nato pa svojo opombo popravi za morebitne tipkarske napake, ne da bi se kdaj prijavil!

Če anonimni komentator zapre svoj brskalnik, ne bo mogel urediti svojega komentarja, razen če klikne magično povezavo, poslano na njegov e-naslov.

Za dodatno varnost bo začasna ključna vrednost za urejanje razveljavljen na vsak poskus napačnega ugibanja ključa.

#### Zakaj zdaj, po vseh teh letih?

Kot pri vseh spremembah na stranski vtičnik moramo biti previdni, da ne povečamo njegove velikosti. Ta funkcija znatno povečuje velikost osnovne kode za komentiranje (približno 1kb stisnjen - približno 10% povečanja).
Želeli smo zagotoviti, da ne zmanjša zmogljivosti FastComments in želeli smo zagotoviti, da pravilno deluje z našimi funkcijami v realnem času. Prav tako smo želeli, da funkcija ustreza
najpogostejši uporabi naših strank - anonimnemu komentiranju.

#### Urejanje komentarjev v živo

Tako kot komentiranje in glasovanje - urejanje poteka v živo. Če sta dva uporabnika na isti strani in uporabnik uredi svoj komentar, bo drugi uporabnik videl, da se posodablja.

#### Omogočanje urejanja komentarjev

Zaključili smo z uvedbo urejanja komentarjev privzeto za vse naše stranke. Trenutno ga ni mogoče izklopiti.

#### Kaj sledi?

Načrtujemo, da bomo v prihodnji posodobitvi omogočili tudi brisanje komentarjev.

#### Integracije tretjih strani

Urejanje komentarja bo povzročilo, da se dogodek razširi na vse integracije, ki jih imate - kot je WordPress. Če uporabljate naš WordPress vtičnik, dodajanje komentarja posodobi
vašo namestitev WordPress v ozadju, tako da ohranite kopijo svojih podatkov. Če uredite komentar, sledimo isti logiki in posodobimo kopijo v vaši namestitvi WordPress.
To velja za druge integracije, ne le za WordPress.

#### V zaključku

Vemo, da so nekateri to funkcijo dolgo čakali. Tako kot pri vseh večjih izdajah smo veseli, da smo lahko vzeli čas za optimizacijo, testiranje in ustrezno izdajo te funkcije.

Na zdravje!

{{/isPost}}

---