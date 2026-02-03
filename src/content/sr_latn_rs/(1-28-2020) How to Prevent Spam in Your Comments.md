---
[category:Moderation]
[category:Tutorials]
###### [postdate]
# [postlink]Kako sprečiti spam u vašim komentarima[/postlink]

Nema načina da se 100% suprotstavite spamu. Ali FastComments sprovodi niz mera kako bi pomogao.

{{#isPost}}

## Dokumentacija za administratore sajta

Podrazumevana instalacija FastComments ima omogućeno filtriranje spama i uvredljivih reči.

Ova podrazumevana podešavanja postižu ravnotežu između sprečavanja spama i nepovređivanja većine zajednica.

[Možda biste želeli da proverite vodič za moderaciju](https://docs.fastcomments.com/guide-moderation.html).

## Kako to funkcioniše

Naš filter za spam koristi [Naive Bayes classifier](https://en.wikipedia.org/wiki/Naive_Bayes_classifier) za identifikaciju spama.

Obučava se tokom vremena na osnovu onoga što administratori označe kao spam i ne-spam.

FastComments radi unutar iframe-a na vašem sajtu. Ovo otežava automatizovanim spam botovima da targetiraju vašu sekciju komentara. Međutim, ako to urade,  
a naš klasifikator otkrije da su njihovi komentari "spamasti", oni će biti sakriveni od vaših korisnika. Kao i svi drugi komentari, takođe su označeni kao  
"treba pregledati" na [stranici za moderaciju](https://fastcomments.com/auth/my-account/moderate-comments) na kontrolnoj tabli.

Filtriranje uvredljivih reči, međutim, ne rezultira skrivenim komentarima po defaultu. Samo će zamaskirati "loše reči" zvezdicama.

## Potpuno blokiranje spama

Podrazumevano, FastComments će dozvoliti spam, ali će ga sakriti i označiti za pregled.

Ako želite da obavestite korisnika da je njihov komentar označen kao spam, i da ih zamolite da ga pregledaju, to se može uraditi u [Podešavanjima moderacije](https://fastcomments.com/auth/my-account/moderate-comments/settings) 
omogućavanjem podešavanja `Blokiraj spam`.

## Sakrivanje uvredljivih komentara

Uredni komentari mogu biti sakriveni omogućavanjem `Automatski šalji uvredljive komentare u spam` u [Podešavanjima moderacije](https://fastcomments.com/auth/my-account/moderate-comments/settings).

## Podešavanja

Filtriranje uvredljivih reči i spama može se pojedinačno isključiti na stranici [Podešavanja moderacije](https://fastcomments.com/auth/my-account/moderate-comments/settings).

## Verifikacija komentara

FastComments koristi sistem verifikacije gde, po defaultu, [neverifikovani komentari](https://docs.fastcomments.com/guide-comment-vote-verification.html#unverified-comments) su označeni kao takvi da svi korisnici mogu videti.

Omogućavanjem korisnicima da komentarišu bez potpunog prijavljivanja, ovo smanjuje prepreke za ulazak u diskusiju. Neverifikovana oznaka može biti sakrivena putem pravila prilagođavanja.

Neverifikovani komentari su po defaultu prikazani, ali mogu biti sakriveni do verifikacije putem email-a, omogućavanjem `Samo automatski odobri verifikovane komentare`.

Imajte na umu da sa SSO, svi komentari su uvek verifikovani. Ako je korisnik prijavljen u verifikovanoj sesiji, njihovi komentari će takođe uvek biti verifikovani.

Neverifikovani komentari takođe mogu biti planirani za uklanjanje.

## Za komentatore

Ako je vaš komentar označen kao spam, odmah ćete videti poruku. Ovo je da vas obavesti da će komentar morati biti pregledan  
pre nego što se prikazuje drugima. Detekcija spama ne može biti 100% tačna, pa razumemo ako doživite neku frustraciju. Ako je vaš komentar legitiman,  
administrator sajta bi trebao biti u mogućnosti da to prepozna i označi vaš komentar kao ne-spam.

{{/isPost}}

---