---
[category:Moderation]
[category:Tutorials]
###### [postdate]
# [postlink]Hvordan man forhindrer spam i dine kommentarer[/postlink]

Der er ingen måde at bekæmpe spam 100%. Men FastComments implementerer en række foranstaltninger for at hjælpe.

{{#isPost}}

## Administrationsdokumentation for stedet

En standardinstallation af FastComments har både spam- og bannefiltrering aktiveret.

Disse standardindstillinger rammer en balance mellem at forhindre spam og ikke være for påtrængende for de fleste fællesskaber.

[Du vil måske kigge på moderationsguiden](https://docs.fastcomments.com/guide-moderation.html).

## Hvordan det fungerer

Vores spamfilter bruger en [Naiv Bayes-klassifikator](https://en.wikipedia.org/wiki/Naive_Bayes_classifier) til at identificere spam.

Det trænes over tid baseret på, hvad administratorer markerer som spam og ikke spam.

FastComments kører i et iframe på dit site. Dette gør det sværere for automatiserede spam-bots at målrette mod din kommentar sektion. Men hvis de gør
og vores klassifikator finder ud af, at deres kommentarer er "spammy", vil de blive skjult for dine brugere. Ligesom alle andre kommentarer bliver de også markeret som
"skal gennemgås" på [moderationssiden](https://fastcomments.com/auth/my-account/moderate-comments) på dashboardet.

Bannefiltrering fører dog ikke til skjulte kommentarer som standard. Det vil blot maskere de "dårlige ord" med stjerner.

## Blokering af spam helt

Som standard vil FastComments tillade spammen, men skjule den og markere den til gennemgang.

Hvis du ønsker at informere brugeren om, at deres kommentar er blevet registreret som spam, og bede dem om at revidere den, kan dette gøres i [Moderationsindstillinger](https://fastcomments.com/auth/my-account/moderate-comments/settings) 
ved at aktivere indstillingen `Bloker Spam`.

## Skjule beskidte kommentarer

Beskidte kommentarer kan skjules ved at aktivere `Automatisk send beskidte kommentarer til spam` i [Moderationsindstillinger](https://fastcomments.com/auth/my-account/moderate-comments/settings).

## Indstillinger

Både banne- og spamfiltrering kan individuelt slukkes i [Moderationsindstillinger](https://fastcomments.com/auth/my-account/moderate-comments/settings) siden.

## Kommentarverifikation

FastComments anvender et verifikationssystem, hvor, som standard, [uverificerede kommentarer](https://docs.fastcomments.com/guide-comment-vote-verification.html#unverified-comments) er markeret som sådan for alle brugere at se.

Ved at tillade brugere at kommentere uden at være helt logget ind, sænkes barriererne for at deltage i en diskussion. Den uverificerede etiket kan skjules via tilpassede regler.

Uverificerede kommentarer vises som standard, men de kan skjules indtil de er verificeret via e-mail, ved at aktivere `Kun auto-godkend verificerede kommentarer`.

Bemærk, at med SSO vil alle kommentarer altid være verificerede. Hvis en bruger er logget ind i en verificeret session, vil deres kommentarer også altid være verificerede.

Uverificerede kommentarer kan også planlægges til fjernelse.

## Til kommentatorer

Hvis din kommentar bliver opdaget som spam, vil du se en besked med det samme. Dette er for at lade dig vide, at kommentaren skal gennemgås, før den vises for andre. Spamdetektering kan ikke være 100% nøjagtig, så vi forstår, hvis du oplever noget frustration. Hvis din kommentar er legitim, bør siteadministratoren kunne genkende det og markere din kommentar som ikke-spam.

{{/isPost}}

---