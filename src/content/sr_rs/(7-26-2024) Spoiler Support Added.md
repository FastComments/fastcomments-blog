---
[category:Features]
###### [postdate]
# [postlink]Dodata podrška za spoiler-e[/postlink]

{{#unless isPost}}
Korisnici sada mogu dodavati spoiler-e u svoje komentare koji su skriveni dok se ne pređu mišem.
{{/unless}}

{{#isPost}}

### Šta je novo
Korisnici FastComments-a sada mogu kliknuti na dugme "SPOILER" da dodaju spoiler-e u svoje komentare. Takođe mogu direktno napisati `<spoiler>neki tekst</spoiler>` oznake ako žele.
Napomena: opcija na traci sa alatima za spoiler-e je podrazumevano onemogućena.

### Uključivanje spoiler-a

U prilagođavanju vidžeta jednostavno možete omogućiti opciju `Spoilers` i sačuvati. Dokumentacija je [ovde](https://docs.fastcomments.com/guide-customizations-and-configuration.html#enable-spoilers).
Omogućili smo ih za ovaj blog post kako bismo prikazali funkciju.

### Za developere i zamerke

Podrazumevani stil spoiler-a podržava svetle i tamne režime. Ako napišete prilagođeni CSS za maskirani tekst, zapamtite da pokrijete
tamniji režim ako vaša stranica to podržava.

### Zaključak

Kao i kod svih velikih izdanja, drago nam je što smo mogli odvojiti vreme da optimizujemo, testiramo i pravilno objavimo ovu funkciju. Javite nam
ispod ako otkrijete bilo kakve probleme.

Živeli!

{{/isPost}}

---