---
[category:UI & Customization]
###### [postdate]
# [postlink]FastComments na Mobilnim Uređajima - Manje Praznog Prostor, Više Sadržaja[/postlink]

{{#unless isPost}}
Poboljšali smo čitljivost i izgled FastComments na mobilnim uređajima.
{{/unless}}

{{#isPost}}
#### Problem

Kada smo prvi put objavili FastComments, želeli smo moderan dizajn koji dobro funkcioniše na mobilnim i desktop pregledačima. Međutim, kako smo dodavali više funkcija i gledali kako korisnici koriste FastComments, shvatili smo da trošimo prostor na ekranu na našem mobilnom UI dok smo pokušavali da ga učinimo "lepim".

Tako da smo došli do kompromisa.

#### Rešenje

Ovde možete videti pre, nismo koristili prostor veoma efikasno.

<div class="text-center">
    <img 
        src="images/mobile-v1.png"
        alt="Mobilna Verzija Pre"
        title="Mobilna Verzija Pre"
        class='lozad' />
</div>

Sada smo zamenili vertikalni prostor na ekranu za horizontalni prostor na ekranu.

<div class="text-center">
    <img 
        src="images/mobile-v2.png"
        alt="Mobilna Verzija Posle"
        title="Mobilna Verzija Posle"
        class='lozad' />
</div>

    
#### Impikacije Pravila Prilagođavanja

Svesni smo da kada pravimo promene u stilizovanju javno dostupnog komentatorskog vidžeta, možemo pokvariti prilagođavanja naših klijenata. Ne brinite, mi smo to pokrili i pregledali stilizovanja prilagođenih vidžeta kako bismo se uverili da nije pokvareno. Međutim, ako primećujete probleme, javite nam.

#### Impikacije Performansi

Ova promena je povećala veličinu vidžeta za oko 300 bajtova, dovodeći je na ukupno 10.1kb. Kao i sa svim izdanjima koja povećavaju veličinu vidžeta, tražićemo načine da je ponovo smanjimo.

Srećno komentarisanje!

{{/isPost}}

---