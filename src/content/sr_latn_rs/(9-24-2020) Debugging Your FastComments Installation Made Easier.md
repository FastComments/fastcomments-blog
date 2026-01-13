---
[category:Tutorials]
###### [postdate]
# [postlink]Olakšavanje Debagovanja Vaše FastComments Instalacije[/postlink]

{{#unless isPost}}
Komentari se ne prikazuju? Podešavanja se čine da nisu primenjena? Saznati to je sada mnogo lakše.
{{/unless}}

{{#isPost}}

### <i class="circle">!</i> Ovaj Članak Sadrži Tehnički Pojmovnik

#### Šta je Novo

Na <a href="https://fastcomments.com">FastComments</a> upravo smo objavili ekstenziju za pretraživač Google Chrome. Ova ekstenzija će vam pomoći da razumete koje konfiguracije
komentarski widget prima, kao i zašto se možda ne prikazuje.

Ekstenziju možete pronaći ovde: <a href="https://chrome.google.com/webstore/detail/fastcomments-debugger/cadggdemhfkjjghkdbfhonoccnplffjj" target="_blank">https://chrome.google.com/webstore/detail/fastcomments-debugger/cadggdemhfkjjghkdbfhonoccnplffjj</a>

#### Kako je Koristiti

Ako primetite da se komentarski widget ne učitava, ili neka konfiguracija koju ste definisali se ne prikazuje, probajte da instalirate <a href="https://chrome.google.com/webstore/detail/fastcomments-debugger/cadggdemhfkjjghkdbfhonoccnplffjj">ekstenziju</a>
i otvorite je na stranici u pitanju. Da biste videli ikonu u vašoj alatnoj traci, možda ćete morati da kliknete na deo puzzli u gornjem desnom uglu da biste je zakačili kao što je prikazano:

<div class="text-center">
    <img src="images/fc-extension-pin.png" alt="Kako zakačiti ekstenziju" title="Kako zakačiti ekstenziju" class="lozad" />
</div>

Ekstenzija može pomoći u debagovanju dve klasifikacije grešaka. Prva, ako widget uopšte nije uključen na stranicu ili ako postoji velika tipografska greška u skriptu.

Druga je ako neka konfiguracija ne deluje.

Da biste debagovali oboje, jednostavno kliknite na ikonu.

Ako alat ne pronađe komentarski widget na stranici, dobićete veliku crvenu grešku:

<div class="text-center">
    <img src="images/fc-extension-embed-js-not-found.png" alt="Primer embed.js nije pronađen" title="Primer embed.js nije pronađen" class="lozad" />
</div>

Ako su pronađene jedna ili više instanci widgeta, videćete njihove konfiguracije prikazane odvojeno:

<div class="text-center">
    <img src="images/fc-extension-multiple-instances.png" alt="Primer Višestrukih Konfiguracija" title="Primer Višestrukih Konfiguracija" class="lozad" />
</div>

Pored toga, FastComments Debugger će takođe prikazivati upozorenja za uobičajene zamke - kao što je situacija kada widget ne pokazuje u režimu samo za čitanje ako nema dostupnih komentara.

#### "Završene" Postavke Instance?

Možda ćete primetiti da debugger prikazuje dva skupa konfiguracija - jedan označen kao "Prohujalo do Widgeta" i jedan označen kao "Završno".

Konfiguracija "Prohujalo do Widgeta" je, kao što možete pretpostaviti, konfiguracija koju prosleđujete widgetu. Neke vrednosti se implicitno prosleđuju putem embed.js, kao što su URL ili Naslov stranice - i one su uključene.

Konfiguracija "Završno" je sve što widget koristi da se prikaže. To može značiti automatski popunjene vrednosti (kao što je ID instance), ili <b>vrednosti sa administrativne stranice za prilagođavanje widgeta</b>.

#### Kako Funkcioniše

Komentarski widget čuva svoju konfiguraciju na mestu gde je debugger može pronaći, a zatim debugger skenira trenutnu stranicu na kojoj se nalazite za instance widgeta i učitava ih u memoriju.

#### Koje Informacije Ova Ekstenzija Prikuplja?

FastComments Debug Tool ne šalje podatke ni na koji FastComments server. U stvari, widget neće proveriti sadržaj stranice na kojoj se nalazite 
osim ako je ne otvorite.

#### Na Zaključak

Nadamo se da pružanjem više alata kao što je ovaj olakšava postavljanje FastComments za svaku vrstu korisnika koju imamo. Javite nam u odeljku za komentare ispod
kako je to funkcionisalo za vas.

Znamo da vam u nekim slučajevima i dalje može biti potrebna pomoć - i za to i dalje postoji <a href="https://fastcomments.com/auth/my-account/help" target="_blank">stranica za korisničku podršku</a>.

Pozdrav!

{{/isPost}}