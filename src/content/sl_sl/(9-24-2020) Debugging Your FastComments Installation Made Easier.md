---
[category:Tutorials]
###### [postdate]
# [postlink]Poenostavitev odpravljanja težav pri namestitvi FastComments[/postlink]

{{#unless isPost}}
Komentarji se ne prikazujejo? Nastavitve se zdijo, da niso uporabljene? Ugotoviti to je zdaj veliko lažje.
{{/unless}}

{{#isPost}}

### <i class="circle">!</i> Ta članek vsebuje tehnični izraz

#### Kaj je novega

Na <a href="https://fastcomments.com">FastComments</a> smo pravkar izdali razširitev za brskalnik Google Chrome. Ta razširitev vam bo pomagala razumeti, katero konfiguracijo
pridobiva pripomoček za komentarje ter zakaj se morda ne prikazuje.

Razširitev lahko najdete tukaj: <a href="https://chrome.google.com/webstore/detail/fastcomments-debugger/cadggdemhfkjjghkdbfhonoccnplffjj" target="_blank">https://chrome.google.com/webstore/detail/fastcomments-debugger/cadggdemhfkjjghkdbfhonoccnplffjj</a>

#### Kako jo uporabiti

Če ugotovite, da se pripomoček za komentarje ne nalaga ali da se neka konfiguracija, ki ste jo definirali, ne prikazuje, poskusite namestiti <a href="https://chrome.google.com/webstore/detail/fastcomments-debugger/cadggdemhfkjjghkdbfhonoccnplffjj">razširitev</a>
in jo odpreti na vprašanju strani. Da vidite ikono v svoji orodni vrstici, boste morda morali klikniti na kosi sestavljanke v zgornjem desnem kotu, da jo pripnite, kot je prikazano:

<div class="text-center">
    <img src="images/fc-extension-pin.png" alt="Kako pritrditi razširitev" title="Kako pritrditi razširitev" class="lozad" />
</div>

Razširitev lahko pomaga pri odpravljanju dveh vrst napak. Prva je, če pripomoček sploh ni vključen na strani ali če je v skritju pomembna tipkarska napaka.

Druga je, če se zdi, da neka konfiguracija ne učinkuje.

Za odpravljanje obeh napak preprosto kliknite na ikono.

Če orodje ne najde pripomočka za komentarje na strani, boste dobili veliko rdečo napako:

<div class="text-center">
    <img src="images/fc-extension-embed-js-not-found.png" alt="Primer 'Embed.js ni najden'" title="Primer 'Embed.js ni najden'" class="lozad" />
</div>

Če je bilo najdenih eno ali več instanc pripomočka, boste videli njihove konfiguracije prikazane ločeno:

<div class="text-center">
    <img src="images/fc-extension-multiple-instances.png" alt="Primer več konfiguracij" title="Primer več konfiguracij" class="lozad" />
</div>

Poleg tega bo FastComments Debugger prikazal tudi opozorila za pogoste zaplete – na primer, da se pripomoček ne prikazuje v načinu samo za branje, če ni dostopnih komentarjev.

#### "Končne" nastavitve instance?

Lahko opazite, da debugger prikazuje dva sklopa konfiguracij - enega označenega kot "Poslano pripomočku" in enega označenega kot "Končno".

Konfiguracija "Poslano pripomočku" je, kot lahko uganite, konfiguracija, ki jo posredujete pripomočku. Nekatere vrednosti so implicitno posredovane prek embed.js, kot so URL ali naslov strani - in te so vključene.

"Končna" konfiguracija je vse, kar pripomoček uporablja za svojo upodobitev. To lahko pomeni samodejne vrednosti (kot je id instance) ali <b> vrednosti s strani za prilagajanje pripomočka</b>.

#### Kako deluje

Pripomoček za komentarje shranjuje svojo konfiguracijo na mesto, kjer ga lahko najde debugger, nato pa debugger preišče trenutno stran, na kateri ste, za instance pripomočka in jih naloži v spomin.

#### Katere informacije zbira ta razširitev?

Orodje za odpravljanje težav FastComments ne komunicira s strežniki FastComments. V resnici pripomoček ne bo niti preveril vsebine strani, na kateri ste
razen, če jo odprete.

#### Na koncu

Upamo, da bodo nove orodje, kot je to, olajšale nastavitev FastComments za vse vrste strank, ki jih imamo. Sporočite nam v razdelku za komentarje spodaj,
kako je delovalo za vas.

Vemo, da boste v nekaterih primerih še vedno morda potrebovali pomoč - in za to je še vedno na voljo <a href="https://fastcomments.com/auth/my-account/help" target="_blank">stran za podporo strankam</a>.

Na zdravje!

{{/isPost}}

---