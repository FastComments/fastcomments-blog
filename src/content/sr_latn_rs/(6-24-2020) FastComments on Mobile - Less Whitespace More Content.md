---
[category:UI & Customization]
###### [postdate]
# [postlink]FastComments na Mobilnom - Manje Bele Površine, Više Sadržaja[/postlink]

{{#unless isPost}}
Poboljšali smo čitljivost i izgled FastComments na mobilnim uređajima.
{{/unless}}

{{#isPost}}
#### Problem

Kada smo prvi put lansirali FastComments želeli smo moderan dizajn koji će dobro raditi na mobilnim i desktop preglednicima. Međutim, kako smo dodavali više funkcija i videli korisnike kako interaguju
sa FastComments, shvatili smo da smo trošili prostor na ekranu u našoj mobilnoj UI dok smo pokušavali da je učinimo "lepom".

Tako da smo došli do kompromisa.

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

    
#### Implikaacije Pravilâ o Prilagođavanju

Svesni smo da kada menjamo stilizovanje javno dostupnog dodatka za komentare, možemo pokvariti prilagođavanja naših kupaca. Ne brinite, imamo sve pokriveno i pregledali smo stilizovanje prilagođenih dodataka
svih korisnika da bismo se uverili da nije pokvareno. Međutim, ako primetite probleme, javite nam.

#### Implikaacije Performansi

Ova promena je povećala veličinu dodatka za oko 300 bajtova, dovodeći je na ukupno 10.1kb. Kao i sa svim izdanjima koja povećavaju veličinu dodatka, razmotrićemo načine da je smanjimo.

Srećno komentarisanje!

{{/isPost}}

---