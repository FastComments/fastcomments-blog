---
[category:Moderation]
[category:Tutorials]
###### [postdate]
# [postlink]Kako sprečiti spam u vašim komentarima[/postlink]

Ne postoji način da se 100% bori protiv spama. Ali FastComments primenjuje niz mera kako bi pomogao.

{{#isPost}}

## Dokumentacija za administratore sajta

Podrazumevana instalacija FastComments ima aktivirane filtre za spam i vulgarnosti.

Ova podrazumevana podešavanja nalaze ravnotežu između sprečavanja spama i toga da ne budu previše intruzivna za većinu zajednica.

[Možda biste želeli da pogledate vodič za moderaciju](https://docs.fastcomments.com/guide-moderation.html).

## Kako to funkcioniše

Naš spam filter koristi [Naive Bayes klasifikator](https://en.wikipedia.org/wiki/Naive_Bayes_classifier) za identifikaciju spama.

On se obučava tokom vremena na osnovu onoga što administratori označe kao spam i ne-spam.

FastComments radi unutar iframe-a na vašem sajtu. To otežava automatskim spam botovima da ciljaju vašu sekciju komentara. Međutim, ako to i učine
i naš klasifikator shvati da su njihovi komentari "spamasti", oni će biti skriveni od vaših korisnika. Kao i svi drugi komentari, oni su takođe označeni kao
"zahteva pregled" na [stranici za moderaciju](https://fastcomments.com/auth/my-account/moderate-comments) u kontrolnoj tabli.

Filtriranje vulgarnosti, međutim, ne dovodi automatski do skrivenih komentara. Ono će samo maskirati "loše reči" zvezdicama.

## Potpuno blokiranje spama

Podrazumevano, FastComments će dozvoliti spam, ali ga skrivati i označavati za pregled.

Ako želite da obavestite korisnika da je njegov komentar prepoznat kao spam i da ga zamolite da ga preradi, to se može uraditi u [Podešavanjima moderacije](https://fastcomments.com/auth/my-account/moderate-comments/settings) 
aktiviranjem opcije `Blokiraj spam`.

## Sakrivanje vulgarnog komentara

Vulgarnosti se mogu sakriti aktiviranjem `Automatski slati vulgarnosti u spam` u [Podešavanjima moderacije](https://fastcomments.com/auth/my-account/moderate-comments/settings).

## Podešavanja

I filtriranje vulgarnosti i spama mogu se pojedinačno isključiti na stranici [Podešavanja moderacije](https://fastcomments.com/auth/my-account/moderate-comments/settings).

## Verifikacija komentara

FastComments koristi sistem verifikacije gde, podrazumevano, [neovereni komentari](https://docs.fastcomments.com/guide-comment-vote-verification.html#unverified-comments) su označeni kao takvi za sve korisnike.

Dozvoljavajući korisnicima da komentarišu bez potpuno prijavljenog naloga, ovo smanjuje prepreke za ulazak u diskusiju. Neoverena oznaka se može sakriti putem pravila prilagođavanja.

Neovereni komentari se prikazuju po defaultu, ali mogu biti sakriveni dok ne budu verifikovani putem email-a, uključivanjem `Samo automatski odobriti verifikovane komentare`.

Napomena: sa SSO, svi komentari su uvek verifikovani. Ako je korisnik prijavljen u verifikovanoj sesiji, njihovi komentari će takođe biti uvek verifikovani.

Neovereni komentari se takođe mogu planirati za uklanjanje.

## Za komentatore

Ako je vaš komentar prepoznat kao spam, odmah će biti prikazana poruka. To je da vas obavesti da će komentar morati biti pregledan
pre nego što se prikaže drugima. Otkrivanje spama ne može biti 100% tačno, stoga razumemo ako doživite neku frustraciju. Ako je vaš komentar legitiman,
administrator sajta bi trebao biti u stanju da ga prepozna i označi vaš komentar kao ne-spam.

{{/isPost}}