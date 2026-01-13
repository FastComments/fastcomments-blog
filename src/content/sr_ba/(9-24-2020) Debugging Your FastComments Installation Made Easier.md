---
[category:Tutorials]
###### [postdate]
# [postlink]Debugging Your FastComments Installation Made Easier[/postlink]

{{#unless isPost}}
Komentari se ne prikazuju? Postavke se čine da nisu primenjene? Razumevanje toga je sada puno lakše.
{{/unless}}

{{#isPost}}

### <i class="circle">!</i> Ovaj Članak Sadrži Tehničke Pojmove

#### Šta je Novo

Na <a href="https://fastcomments.com">FastComments</a> upravo smo objavili ekstenziju za pretraživač Google Chrome. Ova ekstenzija će vam pomoći da razumete koju konfiguraciju
widget za komentare prima, kao i zašto se možda ne prikazuje.

Ekstenziju možete pronaći ovde: <a href="https://chrome.google.com/webstore/detail/fastcomments-debugger/cadggdemhfkjjghkdbfhonoccnplffjj" target="_blank">https://chrome.google.com/webstore/detail/fastcomments-debugger/cadggdemhfkjjghkdbfhonoccnplffjj</a>

#### Kako Je Koristiti

Ako primetite da se widget za komentare ne učitava, ili neka konfiguracija koju ste definisali se ne prikazuje, pokušajte da instalirate <a href="https://chrome.google.com/webstore/detail/fastcomments-debugger/cadggdemhfkjjghkdbfhonoccnplffjj">ekstenziju</a>
i otvorite je na stranici u pitanju. Da biste videli ikonu u vašem alatu, možda ćete morati da kliknete na puzzle komad u gornjem desnom uglu da biste je zakačili, kao što je prikazano:

<div class="text-center">
    <img src="images/fc-extension-pin.png" alt="Kako zakačiti ekstenziju" title="Kako zakačiti ekstenziju" class="lozad" />
</div>

Ekstenzija može pomoći u debagovanju dve klasifikacije grešaka. Prva, ako widget uopšte nije uključen na stranicu ili postoji velika greška u skriptu.

Druga je ako neka konfiguracija čini se da ne stupa na snagu.

Za debagovanje obe, jednostavno kliknite na ikonu.

Ako alat ne nađe widget za komentare na stranici, dobićete veliku crvenu grešku:

<div class="text-center">
    <img src="images/fc-extension-embed-js-not-found.png" alt="Primer Embed.js nije pronađen" title="Primer Embed.js nije pronađen" class="lozad" />
</div>

Ako su pronađene jedna ili više instanci widgeta, videćete njihove konfiguracije prikazane odvojeno:

<div class="text-center">
    <img src="images/fc-extension-multiple-instances.png" alt="Primer više konfiguracija" title="Primer više konfiguracija" class="lozad" />
</div>

Štaviše, FastComments Debugger će takođe prikazati upozorenja za uobičajene zamke - poput widgeta koji se ne prikazuje u režimu samo za čitanje ako nema dostupnih komentara.

#### "Final" Postavke Instance?

Možda ćete primetiti da debugger prikazuje dva skupa konfiguracija - jedan označen "Prosleđeno widgetu" i jedan označen "Final".

Konfiguracija "Prosleđeno widgetu" je, kao što možete pogoditi, konfiguracija koju prosleđujete widgetu. Neke vrednosti se implicitno prosleđuju preko embed.js, kao što su URL ili Naslov stranice - i te su uključene.

"Final" konfiguracija je sve što widget koristi za renderovanje. To može značiti automatski popunjene vrednosti (poput ID instance), ili <b>vrednosti sa administrativne stranice za prilagođavanje widgeta</b>.

#### Kako To Funkcioniše

Widget za komentare čuva svoju konfiguraciju na mestu gde ga debugger može pronaći, a zatim debugger skenira trenutnu stranicu na kojoj se nalazite za instance widgeta i učitava ih u memoriju.

#### Koje Informacije Ova Ekstenzija Prikuplja?

FastComments Debug Tool ne šalje podatke niti komunicira sa bilo kojim FastComments serverima. U stvari, widget čak ne proverava sadržaj stranice na kojoj se nalazite
osim ako je ne otvorite.

#### Na Zaključku

Nadamo se da će pružanje više alata poput ovog olakšati postavljanje FastComments-a za sve tipove kupaca koje imamo. Javite nam u komentaru ispod
kako je to funkcionisalo za vas.

Znamo da će u nekim slučajevima možda još uvek biti potrebna pomoć - i za to postoji <a href="https://fastcomments.com/auth/my-account/help" target="_blank">stranica za korisničku podršku</a>.

Živeli!

{{/isPost}}