---
[category:Tutorials]
###### [postdate]
# [postlink]Debugiranje vaše FastComments instalacije postalo je lakše[/postlink]

{{#unless isPost}}
Komentari se ne prikazuju? Postavke se čine neprimijenjenima? Rješavanje tog problema sada je znatno jednostavnije.
{{/unless}}

{{#isPost}}

### <i class="circle">!</i> Ovaj članak sadrži tehnički žargon

#### Što je novo

Na <a href="https://fastcomments.com">FastComments</a> upravo smo objavili ekstenziju za preglednik Google Chrome. Ova ekstenzija će vam pomoći u razumijevanju koju konfiguraciju
widget za komentare prima, kao i zašto se možda ne prikazuje.

Ekstenziju možete pronaći ovdje: <a href="https://chrome.google.com/webstore/detail/fastcomments-debugger/cadggdemhfkjjghkdbfhonoccnplffjj" target="_blank">https://chrome.google.com/webstore/detail/fastcomments-debugger/cadggdemhfkjjghkdbfhonoccnplffjj</a>

#### Kako je koristiti

Ako primijetite da se widget za komentare ne učitava, ili neka konfiguracija koju ste definirali se ne prikazuje, pokušajte instalirati <a href="https://chrome.google.com/webstore/detail/fastcomments-debugger/cadggdemhfkjjghkdbfhonoccnplffjj">ekstenziju</a>
i otvoriti je na stranicama u pitanju. Da biste vidjeli ikonu u vašoj alatnoj traci, možda ćete morati kliknuti na komad puzzli u gornjem desnom kutu kako biste je pričvrstili, kao što je prikazano:

<div class="text-center">
    <img src="images/fc-extension-pin.png" alt="Kako pričvrstiti ekstenziju" title="Kako pričvrstiti ekstenziju" class="lozad" />
</div>

Ekstenzija može pomoći u otklanjanju dvije klasifikacije grešaka. Prva, ako widget nije uopće uključen na stranicu ili ako postoji velika greška u skripti.

Druga je ako neka konfiguracija ne djeluje čini se.

Da biste otklonili oboje, jednostavno kliknite na ikonu.

Ako alat ne pronađe widget za komentare na stranici, dobit ćete veliku crvenu grešku:

<div class="text-center">
    <img src="images/fc-extension-embed-js-not-found.png" alt="Primjer Embed.js nije pronađen" title="Primjer Embed.js nije pronađen" class="lozad" />
</div>

Ako je pronađeno jedno ili više instanci widgeta, vidjet ćete njihovu konfiguraciju prikazanu odvojeno:

<div class="text-center">
    <img src="images/fc-extension-multiple-instances.png" alt="Primjer višestrukih konfiguracija" title="Primjer višestrukih konfiguracija" class="lozad" />
</div>

Osim toga, FastComments Debugger će također prikazati upozorenja za uobičajene zamke - poput toga da se widget ne prikazuje u readonly modu ako nije dostupno nijedan komentar.

#### "Završne" postavke instancije?

Možete primijetiti da debugger prikazuje dva skupa konfiguracija - jedan označen "Proslijeđeno widgetu" i jedan označen "Završno".

Konfiguracija "Proslijeđeno widgetu" je, kao što možete pretpostaviti, konfiguracija koju prosljeđujete widgetu. Neki se podaci implicitno prosljeđuju putem embed.js, poput URL-a ili Naslova stranice - i oni su uključeni.

"Završna" konfiguracija je sve što widget koristi za svoju prikazivanje. To može značiti samostalno popunjene vrijednosti (poput id-a instance), ili <b>vrijednosti s administracijskog sučelja za prilagodbu widgeta</b>.

#### Kako to djeluje

Widget za komentare pohranjuje svoju konfiguraciju na mjesto gdje ga debugger može pronaći, a zatim debugger skenira trenutnu stranicu na kojoj se nalazite za instance widgeta i učitava ih u memoriju.

#### Koje informacije ova ekstenzija prikuplja?

FastComments Debug Tool ne šalje nikakve informacije kući niti komunicira s bilo kojim FastComments serverima. U stvari, widget neće ni provjeriti sadržaj stranice na kojoj se nalazite
osim ako je ne otvorite.

#### U zaključku

Nadamo se da pružanje više alata poput ovoga olakšava postavljanje FastComments za svaki tip kupca kojeg imamo. Javite nam u odjeljku za komentare dolje
kako je ovo funkcioniralo za vas.

Znamo da vam u nekim slučajevima možda još uvijek treba pomoć - i za to još uvijek postoji <a href="https://fastcomments.com/auth/my-account/help" target="_blank">stranica za korisničku podršku</a>.

Živjeli!

{{/isPost}}