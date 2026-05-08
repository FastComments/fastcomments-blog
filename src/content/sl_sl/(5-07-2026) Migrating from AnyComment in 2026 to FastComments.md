[category:Migration]
###### [postdate]
# [postlink]Migracija iz AnyComment v 2026 na FastComments[/postlink]

{{#unless isPost}}
Preberite ta prispevek, da izveste, kako se popolnoma migrira iz AnyComment na FastComments v 2026.
{{/unless}}

{{#isPost}}

Število naših strank je povprašalo o migraciji iz AnyComment v 2026.

## AnyComment je del WordPressa

AnyComment je vtičnik za WordPress. V nasprotju z neodvisnimi platformami, kot sta Disqus ali Hyvor Talk, ne upravlja svojega lastnega strežnika - vaši komentarji so shranjeni neposredno v vaši WordPress bazi podatkov, v isti tabeli `wp_comments`, ki jo uporablja jedro WordPressa. To je odlična novica za migracijo: ni ločenega izvoza AnyComment, ki bi ga bilo treba obvladovati, in ni tretjega strežnika, s katerim bi se usklajevali. Vaši podatki so že na vašem strežniku.

To pomeni, da standardni postopek migracije FastComments za WordPress obravnava AnyComment brez dodatnih korakov.

## Možnost 1: Vtičnik FastComments za WordPress (Priporočeno)

Najlažja pot je namestiti <a href="https://wordpress.org/plugins/fastcomments/" target="_blank">vtičnik FastComments za WordPress</a>. Vtičnik vas vodi skozi povezovanje vaše namestitve WordPress z FastComments in samodejno prenese vaše obstoječe podatke o komentarjih. Ničesar ni treba prenašati ali nalagati ročno. Podatki se kopirajo iz vaše WordPress baze podatkov na naše strežnike, tako da bo to tudi razbremenilo vaše strežnike, ko bo migracija končana.

Večina migracij se zaključi v nekaj minutah.

Ko so podatki preneseni, deaktvirajte AnyComment. Komentarje bo še naprej obravnaval FastComments, vtičnik pa ohranja vašo WordPress bazo podatkov sinhronizirano kot varnostno kopijo (če omogočite to funkcijo), tako da vedno obvladujete svoje podatke.

## Možnost 2: Izvoz XML WordPressa

Če želite migirati ročno ali ste že prešli na drugo platformo in imate le varnostno kopijo XML, uporabite vgrajen izvoz WordPressa.

1. V svojem WordPress adminu pojdite na **Orodja -> Izvoz** in prenesite datoteko XML.
2. Prijavite se v nadzorno ploščo FastComments in pojdite <a href="https://fastcomments.com/auth/my-account/manage-data/import" target="_blank">tukaj, da uvozite datoteko</a>.
3. Izberite **WordPress (.xml)** iz spustnega menija in naložite svojo datoteko.

Ker AnyComment zapisuje v `wp_comments`, je vsak AnyComment pogovor v tem XML poleg vaših drugih WordPress komentarjev. Uvoznik jih samodejno usklajuje s pravim prispevkom.

## Zamenjava vtičnika AnyComment

Če ste uporabili Možnost 1, je vtičnik FastComments za WordPress že zamenjal AnyComment na vaši strani - po zaključku migracije samo deaktivirajte AnyComment.

Če ste uporabili Možnost 2 in obdržali svojo namestitev WordPress, nato po migraciji namestite vtičnik FastComments, da upravljate z upodabljanjem vtičnikov in stalno sinhronizacijo. Če se popolnoma umikate iz WordPressa, vstavite naš <a href="https://fastcomments.com/install-wizard" target="_blank">namestitveni del</a> na vaši novi strani - podpiramo številne prednje okvire, ki <a href="https://fastcomments.com/install-wizard" target="_blank">jih lahko najdete tukaj</a>. <a href="https://fastcomments.com/auth/my-account/help" target="_blank">Lahko vam pomagamo pri tem</a>.

## EU

Če ste v EU, boste verjetno želeli ustvariti svoj račun na <a href="https://eu.fastcomments.com" target="_blank">eu.fastcomments.com</a>, da bodo vaši podatki strank ostali v EU.

## Povzetek

1. Namestite vtičnik FastComments za WordPress in pustite, da prenese vaše podatke, **ali** izvozite iz WordPressa kot XML in jih naložite na strani za uvoz.
2. Deaktivirajte AnyComment.
3. Če zapuščate tudi WordPress, zamenjajte kodo vtičnika na vaši novi strani.

{{/isPost}}