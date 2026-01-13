---
[category:Tutorials]
###### [postdate]
# [postlink]Debugging Your FastComments Installation Made Easier[/postlink]

{{#unless isPost}}
Komentari se ne prikazuju? Postavke se čine neprimenjenim? Saznati to je upravo postalo mnogo lakše.
{{/unless}}

{{#isPost}}

### <i class="circle">!</i> Ovaj članak sadrži tehnički žargon

#### Šta je novo

Na <a href="https://fastcomments.com">FastComments</a> smo upravo objavili ekstenziju za Google Chrome. Ova ekstenzija će vam pomoći da razumete kakvu konfiguraciju
widget za komentare prima, kao i zašto se možda ne prikazuje.

Ekstenziju možete pronaći ovde: <a href="https://chrome.google.com/webstore/detail/fastcomments-debugger/cadggdemhfkjjghkdbfhonoccnplffjj" target="_blank">https://chrome.google.com/webstore/detail/fastcomments-debugger/cadggdemhfkjjghkdbfhonoccnplffjj</a>

#### Kako je koristiti

Ako otkrijete da se widget za komentare ne učitava, ili neka konfiguracija koju ste definisali se ne prikazuje, pokušajte da instalirate <a href="https://chrome.google.com/webstore/detail/fastcomments-debugger/cadggdemhfkjjghkdbfhonoccnplffjj">ekstenziju</a>
i otvorite je na stranici koja vas interesuje. Da biste videli ikonu na alatnoj traci, možda ćete morati da kliknete na deo u obliku puzzli u gornjem desnom uglu da je "prikvačite", kao što je prikazano:

<div class="text-center">
    <img src="images/fc-extension-pin.png" alt="Kako prikvačiti ekstenziju" title="Kako prikvačiti ekstenziju" class="lozad" />
</div>

Ekstenzija može pomoći u ispravci dve klasifikacije grešaka. Prva, ako widget uopšte nije uključen na stranicu ili postoji velika greška u skripti.

Druga je ako neka konfiguracija ne izgleda kao da se primenjuje.

Da biste ispravili oboje, jednostavno kliknite na ikonu.

Ako alat ne pronađe widget za komentare na stranici, dobićete veliku crvenu grešku:

<div class="text-center">
    <img src="images/fc-extension-embed-js-not-found.png" alt="Primer 'Embed.js not found'" title="Primer 'Embed.js not found'" class="lozad" />
</div>

Ako je pronađeno jedno ili više instanci widgeta, videćete njihove konfiguracije prikazane odvojeno:

<div class="text-center">
    <img src="images/fc-extension-multiple-instances.png" alt="Primer višestrukih konfiguracija" title="Primer višestrukih konfiguracija" class="lozad" />
</div>

Pored toga, FastComments Debugger će takođe prikazati upozorenja za uobičajene probleme - kao što je widget koji se ne prikazuje u režimu samo za čitanje ako nema komentara.

#### "Konačne" postavke instance?

Možete primetiti da debugger prikazuje dva skupa konfiguracija - jedan označen kao "Prosleđeno widgetu" i jedan označen kao "Konačno".

Konfiguracija "Prosleđeno widgetu" je, kao što možete pretpostaviti, konfiguracija koju prosledite widgetu. Neke vrednosti se implicitno prosleđuju putem embed.js kao što su URL ili naslov stranice - i one su uključene.

"Konačna" konfiguracija je sve što widget koristi za renderovanje. To može značiti samo-popunjene vrednosti (kao što je id instance), ili <b> vrednosti sa admin stranice za prilagođavanje widgeta</b>.

#### Kako to funkcioniše

Widget za komentare skladišti svoju konfiguraciju na mestu gde debugger može da je pronađe, a zatim debugger skenira trenutnu stranicu na kojoj se nalazite za instance widgeta i učitava ih u memoriju.

#### Koje informacije ova ekstenzija prikuplja?

FastComments Debug Tool ne telefonira ili komunicira sa bilo kojim FastComments serverima. Zapravo, widget čak neće ni proveriti sadržaj stranice na kojoj se nalazite
osim ako je ne otvorite.

#### Na kraju

Nadamo se da će pružanje više alata poput ovog olakšati postavljanje FastComments-a za svaku vrstu kupca koju imamo. Javite nam u odeljku za komentare ispod
kako je ovo funkcionisalo za vas.

Znamo da u nekim slučajevima još uvek možete zatrebati pomoć - i za to postoji <a href="https://fastcomments.com/auth/my-account/help" target="_blank">stranica za korisničku podršku</a>.

Živeli!

{{/isPost}}

---