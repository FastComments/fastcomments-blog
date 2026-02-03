---
[category:Moderation]
[category:Tutorials]
###### [postdate]
# [postlink]Kako sprečiti spam u vašim komentarima[/postlink]

Nema načina da se 100% bori protiv spama. Ali FastComments primenjuje niz mera koje pomažu.

{{#isPost}}

## Dokumentacija za Administratore

Podrazumevana instalacija FastComments ima filtriranje spama i uvredljivih reči omogućeno.

Ova podrazumevana podešavanja ostvaruju ravnotežu između sprečavanja spama i ne prekomerne intruzivnosti za većinu zajednica.

[Možda želite da pogledate vodič za moderaciju](https://docs.fastcomments.com/guide-moderation.html).

## Kako to funkcioniše

Naš filter za spam koristi [Naivni Bejzov klasifikator](https://en.wikipedia.org/wiki/Naive_Bayes_classifier) za identifikaciju spama.

Obučava se tokom vremena na osnovu onoga što administratori označe kao spam i ne-spam.

FastComments se pokreće u iframe-u na vašem sajtu. Ovo otežava automatizovanim spam botovima da ciljaju vašu sekciju komentara. Ipak, ako uspeju 
i naš klasifikator utvrdi da su njihovi komentari "spamovski", biće sakriveni od vaših korisnika. Kao i svi drugi komentari, oni su takođe označeni kao
"treba pregledati" na [stranici za moderaciju](https://fastcomments.com/auth/my-account/moderate-comments) u instrument-tabli.

Međutim, filtriranje uvredljivih reči ne rezultira skrivenim komentarima po defaultu. Samo će maskirati "loše reči" zvezdicama.

## Potpuno blokiranje spama

Podrazumevano, FastComments će dozvoliti spam, ali će ga sakriti i označiti za pregled.

Ako želite da obavestite korisnika da je njihov komentar otkriven kao spam i da ih zamolite da ga prepravite, to možete uraditi u [Podešavanjima Moderacije](https://fastcomments.com/auth/my-account/moderate-comments/settings) 
omogućavanjem podešavanja `Blokiraj Spam`.

## Sakrivanje uvredljivih komentara

Uvredljivi komentari mogu biti sakriveni omogućavanjem opcije `Automatski šaljite uvredljive komentare u spam` u [Podešavanjima Moderacije](https://fastcomments.com/auth/my-account/moderate-comments/settings).

## Podešavanja

Kako filtriranje uvredljivih reči tako i filtriranje spama mogu se pojedinačno isključiti na stranici [Podešavanja Moderacije](https://fastcomments.com/auth/my-account/moderate-comments/settings).

## Verifikacija komentara

FastComments koristi sistem verifikacije gde su podrazumevano, [neverifikovani komentari](https://docs.fastcomments.com/guide-comment-vote-verification.html#unverified-comments) označeni kao takvi za sve korisnike da vide.

Omogućavanjem korisnicima da komentarišu bez potpuno prijavljenog naloga, smanjuje se barijera za ulazak u diskusiju. Oznaka neverifikovano može biti sakrivena putem pravila prilagođavanja.

Neverifikovani komentari se po defaultu prikazuju, ali mogu biti sakriveni dok ne budu verifikovani putem emaila, aktiviranjem `Samo automatski odobreni verifikovani komentari`.

Imajte na umu da je sa SSO, svi komentari uvek verifikovani. Ako je korisnik prijavljen u verifikovanu sesiju, njihovi komentari će takođe uvek biti verifikovani.

Neverifikovani komentari mogu takođe biti zakazani za uklanjanje.

## Za komentatore

Ako je vaš komentar otkriven kao spam, odmah ćete videti poruku. Ovo je da vas obavesti da će komentar morati da bude pregledan 
pre nego što se prikaže drugim korisnicima. Detekcija spama ne može biti 100% tačna, tako da razumemo ako doživite neko nezadovoljstvo. Ako je vaš komentar legitiman, 
administrator sajta bi trebao biti u stanju da to prepozna i označi vaš komentar kao ne-spam.

{{/isPost}}

---