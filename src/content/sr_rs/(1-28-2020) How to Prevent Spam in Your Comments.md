---
[category:Moderation]
[category:Tutorials]
###### [postdate]
# [postlink]Kako sprečiti spam u vašim komentarima[/postlink]

Nema načina da se 100% bori protiv spama. Ali FastComments implementira niz mera koje pomažu.

{{#isPost}}

## Dokumentacija za administratore sajta

Podrazumevana instalacija FastComments-a ima omogućene filtere za spam i uvrede.

Ova podrazumevana podešavanja postižu ravnotežu između sprečavanja spama i ne prekomernog ometanja većine zajednica.

[Možda biste želeli da pogledate vodič za moderaciju](https://docs.fastcomments.com/guide-moderation.html).

## Kako to funkcioniše

Naš spam filter koristi [Naive Bayes klasifikator](https://en.wikipedia.org/wiki/Naive_Bayes_classifier) za identifikaciju spama.

Obučava se tokom vremena na osnovu onoga što administratori označe kao spam i ne-spam.

FastComments radi u iframe-u na vašem sajtu. Ovo otežava automatskim spam botovima da ciljaju vašu sekciju komentara. Međutim, ako to urade
i naš klasifikator otkrije da su njihovi komentari "spamasti", oni će biti sakriveni od vaših korisnika. Kao i svi drugi komentari, takođe su označeni kao
"potrebna revizija" na [stranici za moderaciju](https://fastcomments.com/auth/my-account/moderate-comments) na kontrolnoj tabli.

Filter za uvrede, međutim, ne dovodi do skrivanja komentara po defaultu. Samo će maskirati "loše reči" zvezdicama.

## Potpuno blokiranje spama

Podrazumevano, FastComments će dozvoliti spam, ali ga sakriti i označiti za reviziju.

Ako želite da obavestite korisnika da je njegov komentar prijavljen kao spam i zamolite ga da ga prepravi, to se može uraditi u [Podešavanjima za moderaciju](https://fastcomments.com/auth/my-account/moderate-comments/settings) 
omogućavanjem podešavanja `Blokiraj spam`.

## Sakrivanje uvredljivih komentara

Uvredljivi komentari mogu se sakriti omogućavanjem `Automatski slanje uvredljivih komentara u spam` u [Podešavanjima za moderaciju](https://fastcomments.com/auth/my-account/moderate-comments/settings).

## Podešavanja

I filteri za uvrede i spam mogu se pojedinačno isključiti na stranici [Podešavanja za moderaciju](https://fastcomments.com/auth/my-account/moderate-comments/settings).

## Verifikacija komentara

FastComments koristi sistem verifikacije gde, po defaultu, [neovereni komentari](https://docs.fastcomments.com/guide-comment-vote-verification.html#unverified-comments) su označeni kao takvi za sve korisnike da vide.

Omogućavanjem korisnicima da komentarišu bez potpunog prijavljivanja, smanjuje se barijera za ulazak u diskusiju. Neovereni label može biti sakriven putem pravila prilagođavanja.

Neovereni komentari se prikazuju po defaultu, ali mogu biti sakriveni dok se ne provere putem email-a, omogućavanjem `Samo automatski odobravaj verifikovane komentare`.

Napomena: Sa SSO, svi komentari su uvek verifikovani. Ako je korisnik prijavljen u verifikovanoj sesiji, njihovi komentari će takođe uvek biti verifikovani.

Neovereni komentari mogu biti zakazani za uklanjanje.

## Za komentatore

Ako je vaš komentar prijavljen kao spam, odmah ćete videti poruku. Ovo je kako biste znali da će komentar morati biti pregledan
pre nego što se prikaže drugima. Detekcija spama ne može biti 100% tačna, tako da razumemo ako doživite određenu frustraciju. Ako je vaš komentar legitiman, 
administratori sajta bi trebalo da budu sposobni da to prepoznaju i označe vaš komentar kao ne-spam.

{{/isPost}}