---
[category:Moderation]
[category:Tutorials]
###### [postdate]
# [postlink]Kako spriječiti spam u vašim komentarima[/postlink]

Nema načina da se 100% bori protiv spama. No, FastComments implementira niz mjera kako bi pomogao.

{{#isPost}}

## Dokumentacija za Administratore

Zadana instalacija FastCommentsa ima omogućene filtre za spam i vulgarnosti.

Ova zadana podešavanja postižu ravnotežu između sprječavanja spama i neprikazivanja previše intruzivnog sadržaja za većinu zajednica.

[Možda biste htjeli provjeriti vodič za moderaciju](https://docs.fastcomments.com/guide-moderation.html).

## Kako to funkcionira

Naš filtriranje spama koristi [Naivni Bayesov klasifikator](https://en.wikipedia.org/wiki/Naive_Bayes_classifier) za identifikaciju spama.

Obučava se tijekom vremena na temelju onoga što administratori označe kao spam i ne spam.

FastComments radi u iframe-u na vašoj stranici. To otežava automatiziranim spam botovima da ciljaju vašu sekciju za komentare. Međutim, ako oni to učine i naš klasifikator utvrdi da su njihovi komentari "spamasti", bit će skriveni od vaših korisnika. Kao i svi drugi komentari, također su označeni kao "treba pregledati" na [stranici za moderaciju](https://fastcomments.com/auth/my-account/moderate-comments) na kontrolnoj ploči.

Filtriranje vulgarnosti, međutim, ne dovodi do skrivenih komentara prema zadanim postavkama. Samo će prikriti "loše riječi" zvjezdicama.

## Potpuno blokiranje spama

Prema zadanim postavkama, FastComments će dopustiti spam, ali ga sakriti i označiti za pregled.

Ako želite obavijestiti korisnika da je njegov komentar prepoznat kao spam i zamoliti ga da ga revidira, to se može učiniti u [Postavkama Moderacije](https://fastcomments.com/auth/my-account/moderate-comments/settings) 
omogućavanjem postavke `Blokiraj Spam`.

## Skrivanje vulgarnog sadržaja

Vulgarnost se može sakriti omogućavanjem `Automatski šalji vulgarnu komentare u Spam` u [Postavkama Moderacije](https://fastcomments.com/auth/my-account/moderate-comments/settings).

## Postavke

I filtriranje vulgarnosti i spama može se pojedinačno isključiti na stranici [Postavke Moderacije](https://fastcomments.com/auth/my-account/moderate-comments/settings).

## Verifikacija Komentara

FastComments koristi sustav verifikacije gdje, prema zadanim postavkama, [neverificirani komentari](https://docs.fastcomments.com/guide-comment-vote-verification.html#unverified-comments) označeni su kao takvi za sve korisnike da vide.

Omogućavanjem korisnicima da komentiraju bez potpunog prijavljivanja, smanjuje se prepreka za ulazak u raspravu. Oznaka neverificirano može se sakriti putem pravila prilagodbe.

Neverificirani komentari se prikazuju prema zadanim postavkama, ali ih je moguće sakriti dok se ne verificiraju putem e-pošte, uključivanjem `Samo automatski odobravaj verificirane komentare`.

Imajte na umu da s SSO-om, svi komentari uvijek budu verificirani. Ako je korisnik prijavljen u verificiranoj sesiji, njegovi komentari će također uvijek biti verificirani.

Neverificirani komentari također se mogu planirati za uklanjanje.

## Za Komentatore

Ako je vaš komentar prepoznat kao spam, odmah ćete vidjeti poruku. To je da vas obavijesti da komentar mora biti pregledan
prije nego što se prikaže drugima. Detekcija spama ne može biti 100% točna, stoga razumijemo ako doživite neku frustraciju. Ako je vaš komentar legitiman, 
administrator stranice trebao bi biti u mogućnosti prepoznati to i označiti vaš komentar kao ne-spam.

{{/isPost}}

---