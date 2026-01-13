---
[category:UI & Customization]
###### [postdate]
# [postlink]FastComments na Mobilnim Uredjajima - Manje Praznog Prostora, Više Sadržaja[/postlink]

{{#unless isPost}}
Poboljšali smo čitljivost i izgled FastComments na mobilnim uređajima.
{{/unless}}

{{#isPost}}
#### Problem

Kada smo prvi put objavili FastComments, želeli smo atraktivan dizajn koji dobro funkcioniše na mobilnim i desktop brauzerima. Međutim, kako smo dodavali nove funkcionalnosti i videli kako korisnici interaguje
sa FastComments, shvatili smo da gubimo prostor na ekranu u našem mobilnom UI dok smo pokušavali da ga učinimo "lepim".

Tako smo došli do kompromisa.

#### Rešenje

Ovde možete videti pre, nismo koristili prostor vrlo efikasno.

<div class="text-center">
    <img 
        src="images/mobile-v1.png"
        alt="Mobilna Verzija Pre"
        title="Mobilna Verzija Pre"
        class='lozad' />
</div>

Sada smo zamenili vertikalni prostor na ekranu sa horizontalnim prostorom.

<div class="text-center">
    <img 
        src="images/mobile-v2.png"
        alt="Mobilna Verzija Posle"
        title="Mobilna Verzija Posle"
        class='lozad' />
</div>

    
#### Implkacije Pravila Prilagođavanja

Svesni smo da kada napravimo promene u stilu javnog komentatorskog vidžeta, možemo pokvariti prilagođavanja naših kupaca. Ne brinite, pokrili smo sve i prolazili kroz stilove prilagođenih vidžeta svih kako bismo se uverili da nisu pokvareni. Međutim, ako primetite probleme, obavestite nas.

#### Implkacije Performansi

Ova promena je povećala veličinu vidžeta za oko 300 bajtova, čime je ukupno došla do 10.1kb. Kao i sa svim izdanjima koja povećavaju veličinu vidžeta, potrudićemo se da je ponovo smanjimo.

Srećno komentarisanje!

{{/isPost}}

---