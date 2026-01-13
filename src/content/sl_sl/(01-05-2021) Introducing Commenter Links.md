---
[category:Features]
###### [postdate]
# [postlink]Predstavljamo povezave komentatorjev[/postlink]

{{#unless isPost}}
Naša prva izdaja v letu 2021 prinaša možnost (če je omogočena na ravni najemnika), da uporabniki dodajo povezavo do svojega bloga, ko komentirajo.
{{/unless}}

{{#isPost}}

## Kaj je novega

Naša prva izdaja v letu 2021 prinaša možnost (če je omogočena na ravni najemnika), da uporabniki dodajo povezavo do svojega bloga, ko komentirajo.

## Kaj so povezave komentatorjev?

Kot vidimo pri tem zelo zanimivem izmenjavi, je eden od teh uporabnikov njegovo uporabniško ime podčrtano, da označi, da gre za povezavo:

<div class="text-center">
    <img src="images/fc-blog-links.png" alt="Povezave komentatorjev" title="Demonstracija povezav komentatorjev" />
</div>

To je zato, ker je spletna stran konfigurirala njihovo namestitev FastComments, da omogoča izpolnjevanje novega polja pri komentiranju, kjer lahko
uporabnik pusti povezavo:

<div class="text-center">
    <img src="images/fc-blog-link-input.png" alt="Vnos povezave komentatorja" title="Vnos povezave komentatorja" />
</div>

To povezavo je mogoče tudi prilagoditi z urejanjem vaših <a href="https://fastcomments.com/auth/my-account/edit-details" target="_blank">podrobnosti računa</a>.

## Omogočanje povezav komentatorjev

S ustvarjanjem <a href="https://fastcomments.com/auth/my-account/customize-widget" target="_blank">pravil o prilagoditvi</a> lahko omogočimo novo
vnosno polje. Preprosto omogočite možnost "Omogoči povezave komentatorjev".

<div class="text-center">
    <img src="images/fc-commenter-links-enabling.png" alt="Omogočanje povezav komentatorjev" title="Povezave do blogov" />
</div>

## Zamenjava besedila v vnosnem polju

Privzeto je mesto za vnos povezave komentatorja "Vaša URL povezava do bloga.". To lahko zamenjate prek istega pravila o prilagoditvi,
ki ste ga uporabili za omogočanje funkcionalnosti, tako da kliknete "Prikaži prilagojeno besedilo".

## Izboljšanje klasifikacije neželene pošte

Ta funkcionalnost ima stranski učinek pri zmanjševanju vsebine, ki je označena kot neželena pošta, ki morda ni neželena pošta. Komentarji z malo besedila in povezavo imajo višjo verjetnost, da so klasificirani
kot neželena pošta. Vendar pa povezava komentatorja ne vpliva na klasifikacijo, ali je komentar neželena pošta ali ne. To pomeni, da lahko uporabnik komentira s svojo povezavo do bloga
z bistveno nižjim tveganjem, da bo komentar označen kot neželena pošta.

Iz teh razlogov lahko strani z visokim številom neželene pošte morda ne želijo omogočiti te funkcionalnosti, vendar pa bodo tiste, ki tega ne bodo, našle vrednost v njenem uporabi pri določenih občinstvih.

## Vpliv na obstoječe stranke

Če ste obstoječa stranka, ki uporablja FastComments, vaši uporabniki ne bodo doživeli nobenih sprememb v funkcionalnosti, razen če to funkcionalnost omogočite. Isto velja za nove stranke - ugotovili boste,
da je ta funkcionalnost privzeto izklopljena.

## Na zaključek

Upamo, da je ta funkcionalnost začetek boljšega leta kot prejšnje. Srečno komentiranje!

{{/isPost}}