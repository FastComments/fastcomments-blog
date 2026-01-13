---
[category:UI & Customization]

###### [postdate]
# [postlink]Prilagođavanje Podrazumevanog Avatara[/postlink]

{{#unless isPost}}
Podrazumevana slika avatara sada može biti prilagođena.
{{/unless}}

{{#isPost}}

### <i class="circle">!</i> Ovaj Članak Sadrži Tehnički Rečnik

#### Uvod

Podrazumevana ikona je ostala ista otkako je FastComments pokrenut. Poglede u slavu podrazumevane ikone profila.

<div class="text-center">
    <img src="https://fastcomments.com/images/unknown-person.png" title="Podrazumevana Ikona Profila" alt="Podrazumevana Ikona Profila" />
</div>

Međutim, sada je možete prilagoditi.

#### Bez Koda

Prvo, <a href="https://fastcomments.com/auth/my-account/customize-widget" target="_blank">dodajte ili izmenite pravilo prilagođavanja</a>. Pravila prilagođavanja se mogu
primeniti samo za stranicu, domen, ili ceo vaš nalog. Ako želite da promenite profilnu sliku globalno, možete ostaviti polje za ID URL-a prazno.

Scrollujte do sekcije "Podrazumevani Avatar".

<img 
    src="/images/fc-customize-default-icon-button.png"
    alt="FastComments Hackaday Podešavanja"
    class='lozad' />
    
Kliknite na dugme da otpremite JPG, PNG, ili GIF do 20mb. Biće promenjen u kvadrat od 100px.

#### U Kodu

Ako želite da hostujete podrazumevani avatar, i već imate javni URL za njega, može se definisati u kodu kao u datom primeru.

<div class="code">    window.FastCommentsUI(document.getElementById('fastcomments-widget'), {
        tenantId: 'demo',
        defaultAvatarSrc: 'https://example.com/some-100-x-100-image.png'
    });
</div>

Slika bi trebala da bude kvadratna, i njen veličina treba da bude 100px kvadrat. Pridržavanje ovih ograničenja će osigurati najbolje iskustvo.

#### Zapažanja

1. Prilagođavanje podrazumevane profilne slike utiče samo na vaš sajt. Ne utiče na obaveštavajuće e-poruke, niti na naloge korisnika na bilo koji način.
2. Komentari kreirani pre ove promene mogu i dalje prikazivati staru profilnu sliku. Ako prilagodite podrazumevanu ikonu profila i primetite mnogo komentara na vašem sajtu
koji koriste staru ikonu profila, <a href="https://fastcomments.com/auth/my-account/help" target="_blank">javite nam</a>.

#### Na Zaključak

Nadamo se da ste pronašli ovaj vodič korisnim i lakim za čitanje. Slobodno komentarišite ispod sa bilo kojim pitanjima.

Pozdrav!

{{/isPost}}