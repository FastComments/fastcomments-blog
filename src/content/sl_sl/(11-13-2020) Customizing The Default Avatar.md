---
[category:UI & Customization]

###### [postdate]
# [postlink]Prilagajanje privzetega avatra[/postlink]

{{#unless isPost}}
Privzeta slika avatara je zdaj lahko prilagojena.
{{/unless}}

{{#isPost}}

### <i class="circle">!</i> Ta članek vsebuje tehnične izraze

#### Uvod

Privzeta ikona je bila enaka, odkar je FastComments začel delovati. Oglejte si slavo privzete ikone profila.

<div class="text-center">
    <img src="https://fastcomments.com/images/unknown-person.png" title="Privzeta ikona profila" alt="Privzeta ikona profila" />
</div>

Vendar jo zdaj lahko prilagodite.

#### Brez kode

Najprej <a href="https://fastcomments.com/auth/my-account/customize-widget" target="_blank">dodajte ali uredite pravilo prilagajanja</a>. Pravila prilagajanja
se lahko uporabijo za posamezno stran, domeno ali vaš celotni račun. Če želite spremeniti profilno sliko globalno, lahko pustite polje URL ID prazno.

Pomaknite se navzdol do razdelka "Privzeti avatar".

<img 
    src="/images/fc-customize-default-icon-button.png"
    alt="Nastavitve FastComments Hackaday"
    class='lozad' />
    
Kliknite gumb za nalaganje JPG, PNG ali GIF do velikosti 20mb. Prilagojena bo na kvadrat velikosti 100px.

#### V kodi

Če želite gostiti privzeti avatar in že imate javni URL zanj, ga lahko definirate v kodi, kot je v spodnjem primeru.

<div class="code">    window.FastCommentsUI(document.getElementById('fastcomments-widget'), {
        tenantId: 'demo',
        defaultAvatarSrc: 'https://example.com/some-100-x-100-image.png'
    });
</div>

Slika mora biti kvadratna, njena velikost pa mora biti 100px kvadrat. Sledite tem omejitvam, da zagotovite najboljšo izkušnjo.

#### Spremembe

1. Prilagoditev privzete profilne slike vpliva le na vašo stran. Ne vpliva na e-poštna obvestila ali račune uporabnikov na kakršen koli način.
2. Komentarji, ustvarjeni pred to spremembo, morda še vedno prikazujejo staro profilno sliko. Če prilagodite privzeto ikono profila in opazite veliko komentarjev na vaši strani,
ki uporabljajo staro ikono profila, <a href="https://fastcomments.com/auth/my-account/help" target="_blank">nam sporočite</a>.

#### Na zaključek

Upamo, da ste našli ta priročnik koristen in enostaven za branje. Ne oklevajte in komentirajte spodaj s kakršnimi koli vprašanji.

Na zdravje!

{{/isPost}}

---