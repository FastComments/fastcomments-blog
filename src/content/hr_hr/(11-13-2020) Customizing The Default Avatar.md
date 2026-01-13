---
[category:UI & Customization]

###### [postdate]
# [postlink]Prilagodba Zadane Avatare[/postlink]

{{#unless isPost}}
Zadana slika avatare može se sada prilagoditi.
{{/unless}}

{{#isPost}}

### <i class="circle">!</i> Ovaj Članak Sadrži Tehnički Rječnik

#### Uvod

Zadika ikona je bila ista otkako je FastComments pokrenut. Poglede slavu zadane ikone profila.

<div class="text-center">
    <img src="https://fastcomments.com/images/unknown-person.png" title="Zadana Ikona Profila" alt="Zadana Ikona Profila" />
</div>

Međutim, sada je možete prilagoditi.

#### Bez Koda

Prvo, <a href="https://fastcomments.com/auth/my-account/customize-widget" target="_blank">dodajte ili uredite pravilo prilagodbe</a>. Pravila prilagodbe mogu se 
primijeniti samo na jednu stranicu, domenu ili na čitav vaš račun. Ako želite promijeniti sliku profila globalno, možete ostaviti polje URL ID prazno.

Pomaknite se prema dolje do odjela "Zadani Avatar".

<img 
    src="/images/fc-customize-default-icon-button.png"
    alt="FastComments Hackaday Postavke"
    class='lozad' />
    
Kliknite gumb za učitavanje JPG, PNG ili GIF do 20mb. Bit će promijenjena veličina na kvadrat od 100px.

#### U Kod

Ako želite hostati zadani avatar, i već imate javni URL za njega, može se definirati u kodu kao u danom primjeru.

<div class="code">    window.FastCommentsUI(document.getElementById('fastcomments-widget'), {
        tenantId: 'demo',
        defaultAvatarSrc: 'https://example.com/some-100-x-100-image.png'
    });
</div>

Slika bi trebala biti kvadratna, a njezina veličina trebala bi biti kvadrat od 100px. Pridržavanje ovih ograničenja osigurat će najbolje iskustvo.

#### Problemi

1. Prilagodba zadane slike profila utječe samo na vašu stranicu. Ne utječe na obavijesne e-poruke ili račune korisnika na bilo koji način.
2. Komentari stvoreni prije ove promjene mogu još uvijek prikazivati staru sliku profila. Ako prilagodite zadanu ikonu profila i primijetite mnogo komentara na vašoj stranici 
koji koriste staru ikonu profila, <a href="https://fastcomments.com/auth/my-account/help" target="_blank">javite nam</a>.

#### Zaključak

Nadamo se da ste ovaj vodič pronašli korisnim i lakim za čitanje. Slobodno komentirajte ispod sa svojim pitanjima.

Živjeli!

{{/isPost}}

---