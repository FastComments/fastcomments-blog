---
[category:UI & Customization]
###### [postdate]

# [postlink]FastComments dobiva nov izgled[/postlink]

{{#unless isPost}} FastComments je bil posodobljen. Ugotovite več o posodobitvi in kako jo lahko pridobite. {{/unless}}

{{#isPost}}

### <i class="circle">!</i> Ta članek vsebuje tehnične izraze

### Nov izgled

Do danes se je izgled in občutek vidžeta za komentarje FastComments le postopoma spreminjal. Danes lansiramo
popolnoma novo različico!

Oglejte si primerjavo spodaj (premaknite drsnik za primerjavo):

<div class="text-center">
    <div class="screenshot-comparison twentytwenty-container">
      <img src="images/fc-redesign-old.png" />
      <img src="images/fc-redesign-new.png" />
    </div>
</div>

### Obstoječi kupci

Ker večina naših uporabnikov prilagaja vidžet za komentarje, smo nov uporabniški vmesnik popolnoma ločili. Ne bi smeli
opaziti sprememb, dokler niste migrirani.

### Kdo to dobi

Novi kupci, ki se prijavijo od danes naprej, bodo samodejno dobili nov dizajn. Vse naše ogrodja, knjižnice in
vtičniki so prejeli posodobitve, da vključujejo novo različico vidžeta za komentarje FastComments.

### Konec življenja prejšnje različice

Trenutno ne določamo konca življenja prejšnje različice vidžeta za komentarje. To ne pomeni, da v prihodnosti ne bomo
napovedali eno. Vendar pa, ko to storimo, bomo dali razumen časovni okvir (6 - 12 mesecev od napovedi do umika).

Naš sistem za avtomatizirano testiranje je bil posodobljen, da podpira različne različice vidžeta za komentarje, tako da prejšnja različica
še vedno prejema neprekinjeno avtomatizirano testiranje.

### Dark Mode in druge funkcije

Nov dizajn podpira temni način, tako kot izvirni vidžet za komentarje. Vse zastavice in nastavitve funkcij so bile migrirane.

Kar zadeva temni način, so bili v starem uporabniškem vmesniku za komentarje viri za temni način vedno vključeni ob nalaganju strani, tudi če
niso bili uporabljeni. To je pomenilo dodatnih 2kb, ki je bil vedno prenesen na odjemalca - tudi če ni bil potreben.

Nova različica vidžeta za komentarje na novo prenese te vire, vključno s slogom, le, če je to potrebno.

### Privzeti avatar

Privzeti avatar, uporabljen v novem uporabniškem vmesniku, je drugačen. Ob migraciji bo privzeti avatar, uporabljen v celotnem izdelku v nadzorni plošči
skrbnika in vseh e-poštnih obvestilih, prav tako posodobljen.

### Posledice prilagoditev pravil

Zavedamo se, da ko izvajamo spremembe sloga na javno vidnem vidžetu za komentarje, lahko prekinemo prilagoditve naših strank. Ne skrbite, poskrbeli smo za vas in pregledali smo slog prilagojenega vidžeta vsakega, da se prepričamo, da se ni poslabšal. Vendar, če opazite težave, nam sporočite.

### Posledice glede zmogljivosti

Skupna velikost vidžeta za komentarje se je povečala s 15,4kb na 17,4kb. Medtem ko menimo, da je majhno povečanje velikosti paketa
za to, kako je videti boljši uporabniški vmesnik, vredno truda, smo že pripravili ukrepe, da to zmanjšamo.

Na splošno se nov uporabniški vmesnik nalaga hitreje, saj so sedaj več virov združenih, kar pomeni manj zahtev.

### Kako migrirati

#### Preko podpore

Preprosto se obrnite na svojega predstavnika za podporo ali začnite pogovor [tukaj](https://fastcomments.com/auth/my-account/help).

#### WordPress

Če uporabljate **WordPress**, preprosto nadgradite na najnovejšo različico in posodobite vse prilagojene sloge, ki jih imate.

#### Prilagojene integracije

Če uporabljate vidžet za komentarje **VanillaJS**, preprosto spremenite:

        <script src="https://cdn.fastcomments.com/js/embed.min.js"></script>

Na:

        <script src="https://cdn.fastcomments.com/js/embed-v2.min.js"></script>

Če uporabljate knjižnice **React, Angular ali Vue**, preprosto nadgradite na različico 2.

### Nekaj geekovskih statistik

Od zasnove, oblikovanja in implementacije je bil to dvomesečni projekt, ki je obsegal **100+ datotek** in
spremenil več kot **devet tisoč vrstic kode**.

Popolnoma smo preoblikovali tudi naš sistem gradnje, da bi imeli skupno kodo med različicami vidžeta za komentarje. Ta sistem nam omogoča uporabo izrazov časa sestavljanja, da vključimo le kodo za ustrezno različico uporabniškega vmesnika, kar zmanjša velikost paketa vidžeta.

### Napredno razmišljanje

Prejšnji dizajn je trajal od 2019 do sredine leta 2021. Upamo, da nas ta nov izgled popelje dlje v prihodnost, in naša
nova infrastruktura za upravljanje več različic uporabniškega vmesnika za komentarje bo omogočila FastCommentsu rast brez prekinitev v naši
bazi strank skozi čas.

Srečno komentiranje!

<link href="image-compare/twentytwenty.css" rel="stylesheet" type="text/css" />
<script src="https://ajax.googleapis.com/ajax/libs/jquery/1.10.2/jquery.min.js"></script> 
<script src="image-compare/jquery.twentytwenty.js"></script> 
<script src="image-compare/jquery.event.move.js"></script>
<script src="image-compare/new-look.js"></script>

{{/isPost}}

---