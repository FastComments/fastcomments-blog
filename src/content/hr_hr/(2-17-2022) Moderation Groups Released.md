---
[category:Moderation]

###### [postdate]
# [postlink]Objavljene grupe za moderaciju[/postlink]

{{#unless isPost}}
Imate više vrsta sadržaja i želite da različiti timovi moderatora upravljaju svojim sadržajem? Sada to možete s FastComments!
{{/unless}}

{{#isPost}}

## Što je novo

Ranije su moderatori vidjeli sve komentare u vašem računu kada bi posjetili stranicu za moderiranje komentara. Ako ste imali mnogo vrsta sadržaja, svi moderatori
bi vidjeli točno istu listu. Za veće web stranice, to može dovesti do konfuzije oko toga koji moderatori moderiraju što.

Sada pružamo mogućnost da se prikazuju samo komentari koji zahtijevaju moderaciju na temelju grupe moderatora.

## Kako se komentari grupiraju

Prvo, mora se postaviti prilagođena integracija tako da kada se ostave komentari, FastComments zna u koju grupu bi trebao ići rezultat.

[Pogledajte ovdje kako postaviti integraciju.](https://docs.fastcomments.com/guide-customizations-and-configuration.html#moderation-group-ids)

## Dodavanje grupa

Jednostavno odlaskom na novu [stranicu za grupe moderacije](https://fastcomments.com/auth/my-account/moderate-comments/moderation-groups), možemo definirati grupe s vlastitim nazivima, vidjeti generirane id-ove potrebne za integraciju, i čak 
pratiti broj moderatora i komentara u svakoj grupi.

Možete zatim urediti moderatora kao što biste to inače radili, a nova opcija će biti dostupna za odabir njihovih grupa.

Napomena: i moderatori i komentari mogu pripadati više od jedne grupe.

Za detaljnu dokumentaciju o dodavanju grupa, [provjerite dokumente!](https://docs.fastcomments.com/guide-moderation.html#moderation-groups).

## Migracija postojećih komentara

Putem zahtjeva za podršku, FastComments.com može migrirati vaše komentare u željene grupe - samo nas obavijestite!

## Verifikacija integracije

Možete provjeriti je li integracija pravilno postavljena provjerom broja komentara na stranici grupa moderacije.

## Utjecaj na postojeće korisnike

Ako ste postojeći korisnik koji koristi FastComments, značajka je već dostupna vašem računu.

Ako ne napravite nikakve promjene za korištenje ove značajke, vaši moderatori neće doživjeti nikakve promjene u svom radnom toku.

## Zaključak

Nadamo se da ste našli ovo ažuriranje i njegovu dokumentaciju korisnima. Sretno s komentiranjem!

{{/isPost}}