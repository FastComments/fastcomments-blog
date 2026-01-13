---
[category:Tutorials]
###### [postdate]
# [postlink]Debugging Your FastComments Installation Made Easier[/postlink]

{{#unless isPost}}
Komentari se ne prikazuju? Podešavanja se ne čine primenjenim? Saznati to je postalo znatno lakše.
{{/unless}}

{{#isPost}}

### <i class="circle">!</i> Ovaj Članak Sadrži Tehničku Terminologiju

#### Šta je Novo

Na <a href="https://fastcomments.com">FastComments</a> smo upravo objavili ekstenziju za Google Chrome. Ova ekstenzija će vam pomoći da shvatite koju konfiguraciju
widget za komentare dobija, kao i zašto se možda ne prikazuje.

Ekstenziju možete pronaći ovde: <a href="https://chrome.google.com/webstore/detail/fastcomments-debugger/cadggdemhfkjjghkdbfhonoccnplffjj" target="_blank">https://chrome.google.com/webstore/detail/fastcomments-debugger/cadggdemhfkjjghkdbfhonoccnplffjj</a>

#### Kako je Koristiti

Ako primetite da se widget za komentare ne učitava, ili neka konfiguracija koju ste definisali se ne prikazuje, pokušajte sa instalacijom <a href="https://chrome.google.com/webstore/detail/fastcomments-debugger/cadggdemhfkjjghkdbfhonoccnplffjj">ekstenzije</a>
i otvori je na stranici u pitanju. Da biste videli ikonu u vašoj alatnoj traci, možda ćete morati da kliknete na puzzlu u gornjem desnom uglu da biste je zakačili kao što je prikazano:

<div class="text-center">
    <img src="images/fc-extension-pin.png" alt="Kako zakačiti ekstenziju" title="Kako zakačiti ekstenziju" class="lozad" />
</div>

Ekstenzija može pomoći u otklanjanju dve klase grešaka. Prva je ako widget nije uključен na stranicu uopšte ili ako postoji velika greška u skripti.

Druga je ako neka konfiguracija ne izgleda kao da se primenjuje.

Da biste otklonili greške, počnite jednostavno klikom na ikonu.

Ako alat ne pronađe widget za komentare na stranici, dobićete veliku crvenu grešku:

<div class="text-center">
    <img src="images/fc-extension-embed-js-not-found.png" alt="Primer 'Embed.js not found'" title="Primer 'Embed.js not found'" class="lozad" />
</div>

Ako je pronađeno jedno ili više instanci widgeta, videćete njihove konfiguracije prikazane odvojeno:

<div class="text-center">
    <img src="images/fc-extension-multiple-instances.png" alt="Primer višestrukih konfiguracija" title="Primer višestrukih konfiguracija" class="lozad" />
</div>

Štaviše, FastComments Debugger će takođe prikazati upozorenja za česte greške - poput toga da se widget ne prikazuje u režimu samo za čitanje ako nema dostupnih komentara.

#### "Završene" Postavke Instance?

Možda ćete primetiti da debugger prikazuje dva seta konfiguracija - jedan označen kao "Prosledjeno Widgetu" i jedan označen kao "Završno".

Konfiguracija "Prosledjeno Widgetu" je, kao što možete pretpostaviti, konfiguracija koju prosleđujete widgetu. Neke vrednosti se implicitno prosleđuju putem embed.js poput URL-a ili Naslova Strane - i one su uključene.

"Završna" konfiguracija je sve što widget koristi da se prikaže. To može značiti samopopunjene vrednosti (poput id instance), ili <b>vrednosti sa stranice za prilagođavanje widgeta</b>.

#### Kako Radi

Widget za komentare čuva svoju konfiguraciju na mestu gde debugger može da je pronađe, a zatim debugger skenira trenutnu stranicu na kojoj se nalazite za instance widgeta i učitava ih u memoriju.

#### Koje Informacije Ova Ekstenzija Prikuplja?

FastComments Debug Tool ne uspostavlja vezu sa bilo kojim FastComments serverima. Zapravo, widget čak ni ne proverava sadržaj stranice na kojoj se nalazite
osim ako je ne otvorite.

#### Na Zaključku

Nadamo se da pružanjem više alata poput ovoga čini podešavanje FastComments-a lakšim za sve tipove naših korisnika. Javite nam u odeljku za komentare ispod
kako je to funkcionisalo za vas.

Znamo da u nekim slučajevima i dalje možete trebati pomoć - i za to postoji <a href="https://fastcomments.com/auth/my-account/help" target="_blank">stranica za korisničku podršku</a>.

Pozdrav! 

{{/isPost}}