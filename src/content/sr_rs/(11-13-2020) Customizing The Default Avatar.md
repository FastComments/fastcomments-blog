---
[category:UI & Customization]

###### [postdate]
# [postlink]Prilagođavanje Podrazumevanog Avatara[/postlink]

{{#unless isPost}}
Slika podrazumevanog avatara može se sada prilagoditi.
{{/unless}}

{{#isPost}}

### <i class="circle">!</i> Ovaj Članak Sadrži Tehničku Terminologiju

#### Uvod

Podrazumeviconi je isti otkako je FastComments lansiran. Poglejte slavu podrazumevanog ikona profila.

<div class="text-center">
    <img src="https://fastcomments.com/images/unknown-person.png" title="Podrazumevani Ikon Profila" alt="Podrazumevani Ikon Profila" />
</div>

Međutim, sada ga možete prilagoditi.

#### Bez Koda

Prvo, <a href="https://fastcomments.com/auth/my-account/customize-widget" target="_blank">dodajte ili izmenite pravilo prilagođavanja</a>. Pravila prilagođavanja mogu
se primeniti samo za jednu stranicu, domen ili ceo vaš nalog. Ako želite da promenite profilnu sliku globalno, možete ostaviti polje ID URL-a prazno.

Skrolujte do dela "Podrazumevani Avatar".

<img 
    src="/images/fc-customize-default-icon-button.png"
    alt="FastComments Hackaday Podešavanja"
    class='lozad' />
    
Kliknite na dugme da otpremite JPG, PNG ili GIF do 20mb. Biće promenjen u kvadrat od 100px.

#### U Kodu

Ako želite da hostujete podrazumevani avatar, i već imate javni URL za njega, može se definisati u kodu kao u datom primeru.

<div class="code">    window.FastCommentsUI(document.getElementById('fastcomments-widget'), {
        tenantId: 'demo',
        defaultAvatarSrc: 'https://example.com/some-100-x-100-image.png'
    });
</div>

Slika treba da bude kvadratna, a njena veličina treba da bude kvadrat od 100px. Pridržavanje ovih ograničenja osiguraće najbolje iskustvo.

#### Problemi

1. Prilagođavanje podrazumevane profilne slike utiče samo na vašu stranicu. Ne utiče na email obaveštenja ili naloge korisnika na bilo koji način.
2. Komentari kreirani pre ove promene možda i dalje prikazuju staru profilnu sliku. Ako prilagodite podrazumevani ikona profila i primetite mnogo komentara na vašoj stranici
koji koriste staru profilnu ikonu, <a href="https://fastcomments.com/auth/my-account/help" target="_blank">javite nam</a>.

#### Zaključak

Nadamo se da ste našli ovaj vodič korisnim i lako čitljivim. Slobodno komentarišite ispod sa bilo kakvim pitanjima.

Živeli!

{{/isPost}}

---