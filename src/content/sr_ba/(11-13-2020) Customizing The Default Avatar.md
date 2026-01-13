---
[category:UI & Customization]

###### [postdate]
# [postlink]Prilagođavanje Podrazumevanog Avatara[/postlink]

{{#unless isPost}}
Sada je moguće prilagoditi sliku podrazumevanog avatara.
{{/unless}}

{{#isPost}}

### <i class="circle">!</i> Ovaj Članak Sadrži Tehnički Rečnik

#### Uvod

Podrazumevana ikona je bila ista od kada je FastComments lansiran. Pogledajte slavu podrazumevane ikone profila.

<div class="text-center">
    <img src="https://fastcomments.com/images/unknown-person.png" title="Podrazumevana Ikona Profila" alt="Podrazumevana Ikona Profila" />
</div>

Međutim, sada je možete prilagoditi.

#### Bez Koda

Prvo, <a href="https://fastcomments.com/auth/my-account/customize-widget" target="_blank">dodajte ili izmenite pravilo prilagođavanja</a>. Pravila prilagođavanja mogu
da se primene samo na jednu stranicu, jedan domen ili ceo vaš nalog. Ako želite da promenite profilnu sliku globalno, možete ostaviti polje URL ID prazno.

Pomaknite se do odeljka "Podrazumevani Avatar".

<img 
    src="/images/fc-customize-default-icon-button.png"
    alt="FastComments Hackaday Podešavanja"
    class='lozad' />
    
Kliknite na dugme da otpremite JPG, PNG ili GIF do 20mb. Biće promenjena u kvadrat dimenzija 100px.

#### U Kodu

Ako želite da hostujete podrazumevani avatar, i imate javni URL za njega, može se definisati u kodu kao u datom primeru.

<div class="code">    window.FastCommentsUI(document.getElementById('fastcomments-widget'), {
        tenantId: 'demo',
        defaultAvatarSrc: 'https://example.com/some-100-x-100-image.png'
    });
</div>

Slika bi trebala biti kvadratna, a njena veličina trebala bi biti kvadrat dimenzija 100px. Poštovanje ovih ograničenja će obezbediti najbolje iskustvo.

#### Problemi

1. Prilagođavanje podrazumevane profilne slike utiče samo na vašu stranicu. Ne utiče na obaveštenja preko e-pošte, niti na korisničke naloge na bilo koji način.
2. Komentari kreirani pre ove promene mogu i dalje prikazivati staru profilnu sliku. Ako prilagodite podrazumevanu ikonu profila i primetite puno komentara na vašoj stranici
koji koriste staru profilnu ikonu, <a href="https://fastcomments.com/auth/my-account/help" target="_blank">javite nam</a>.

#### Na Kraj

Nadamo se da ste našli ovaj vodič korisnim i lakim za čitanje. Slobodno komentarišite ispod sa bilo kakvim pitanjima.

Živeli!

{{/isPost}}

---