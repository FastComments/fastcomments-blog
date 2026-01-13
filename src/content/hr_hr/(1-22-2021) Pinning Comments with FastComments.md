---
[category:Značajke]
[category:Moderacija]
###### [postdate]
# [postlink]Piniranje komentara s FastComments[/postlink]

{{#unless isPost}}
Komentari na najvišoj razini sada se mogu pinirati u nitima komentara!
{{/unless}}

{{#isPost}}

#### Uvod

Komentari se sada mogu "pinirati" na vrh niti komentara, bez obzira na redoslijed sortiranja.

To se može učiniti putem izbornika s tri točke u gornjem desnom kutu komentara, ako ste prijavljeni kao administrator ili moderator.

<div class="text-center">
    <img src="images/fc-pinned-comment-example.png" alt="Piniran komentar" title="Piniran komentar" />
</div>

Novi komentari će se pojaviti ispod piniranih komentara.

Nema ograničenja na broj piniranih komentara u niti komentara.

#### Glasovi i starost komentara

Bez obzira na broj glasova ili starost drugih komentara, pinirani komentari uvijek se prikazuju na vrhu.

#### Tko može pinirati i otpiniti komentare

Administratori i moderatori su jedini korisnici koji mogu pinirati i otpiniti komentare.

#### Živo komentiranje

Kada god se komentar pinira ili otpini, ta se obavijest šalje svim gledateljima niti komentara.

Kada se stanje pinovanja komentara promijeni, komentar se odmah premješta za osobu koja pinira komentar i za sve 
koje gledaju nit komentara. Ako se korisnik disconnecta, a zatim se komentar pinira, komentar će biti piniran i premješten 
za tog korisnika prilikom ponovnog spajanja.

#### Performanse

Redoslijed sortiranja niti komentara se prethodno izračunava pri svakoj promjeni. To znači da dodatno sortiranje koje je potrebno 
za piniranje komentara na vrh neće utjecati na vrijeme učitavanja stranice.

#### U zaključku

Nadamo se da ste ovaj vodič pronašli korisnim i lako čitljivim. Slobodno komentirajte u nastavku s bilo kakvim pitanjima.

Živjeli!

{{/isPost}}

---