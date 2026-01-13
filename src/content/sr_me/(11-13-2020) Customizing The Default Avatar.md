---
[category:UI & Customization]

###### [postdate]
# [postlink]Prilagođavanje Podrazumevanog Avatara[/postlink]

{{#unless isPost}}
Slika podrazumevanog avatara može se sada prilagoditi.
{{/unless}}

{{#isPost}}

### <i class="circle">!</i> Ovaj Članak Sadrži Tehnički Jezik

#### Uvod

Podrazumevana ikona je bila ista otkako je FastComments lansiran. Uživajte u slavi podrazumevane profilne ikone.

<div class="text-center">
    <img src="https://fastcomments.com/images/unknown-person.png" title="Podrazumevana Profilna Ikona" alt="Podrazumevana Profilna Ikona" />
</div>

Međutim, sada je možete prilagoditi.

#### Bez Koda

Prvo, <a href="https://fastcomments.com/auth/my-account/customize-widget" target="_blank">dodajte ili uredite pravilo prilagođavanja</a>. Pravila prilagođavanja mogu
se primeniti za samo jednu stranicu, domen ili vaš ceo nalog. Ako želite da promenite profilnu sliku globalno, možete ostaviti polje za URL ID prazno.

Pomjerite se do sekcije "Podrazumevani Avatar".

<img 
    src="/images/fc-customize-default-icon-button.png"
    alt="FastComments Hackaday Podešavanja"
    class='lozad' />
    
Kliknite na dugme da otpremite JPG, PNG ili GIF veličine do 20mb. Biće promenjeno u kvadrat od 100px.

#### U Kodu

Ako želite da hostujete podrazumevani avatar, i već imate javni URL za njega, može se definisati u kodu kao u datom primeru.

<div class="code">    window.FastCommentsUI(document.getElementById('fastcomments-widget'), {
        tenantId: 'demo',
        defaultAvatarSrc: 'https://example.com/some-100-x-100-image.png'
    });
</div>

Slika treba da bude kvadratna, a njena veličina treba da bude kvadrat od 100px. Pridržavanje ovih ograničenja osiguraće najbolje iskustvo.

#### Problemi

1. Prilagođavanje podrazumevane profilne slike utiče samo na vaš sajt. Ne utiče na obaveštavajuće e-poruke, niti na naloge korisnika na bilo koji način.
2. Komentari napravljeni pre ove promene možda će i dalje prikazivati staru profilnu sliku. Ako prilagodite podrazumevanu profilnu ikonu i primetite mnogo komentara na vašem sajtu
koji koriste staru profilnu ikonu, <a href="https://fastcomments.com/auth/my-account/help" target="_blank">javite nam</a>.

#### Na Zaključak

Nadamo se da ste pronašli ovaj vodič korisnim i lakim za čitanje. Slobodno komentarišite ispod sa bilo kakvim pitanjima.

Živeli!

{{/isPost}}

---