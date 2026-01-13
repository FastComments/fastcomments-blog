---
[category:UI & Customization]
###### [postdate]
# [postlink]FastComments na mobilnom - manje praznog prostora, više sadržaja[/postlink]

{{#unless isPost}}
Poboljšali smo čitljivost i izgled FastComments na mobilnim uređajima.
{{/unless}}

{{#isPost}}
#### Problem

Kada smo prvi put objavili FastComments, želeli smo moderan dizajn koji dobro funkcioniše na mobilnim i desktop pregledačima. Međutim, dok smo dodavali više funkcija i gledali korisnike kako interaguju s FastComments, shvatili smo da gubimo prostor na ekranu u našoj mobilnoj UI dok smo pokušavali da je učinimo "lepom".

Tako smo došli do kompromisa.

#### Rešenje

Ovde možete videti kako je to izgledalo pre, nismo efikasno koristili prostor.

<div class="text-center">
    <img 
        src="images/mobile-v1.png"
        alt="Mobilna verzija pre"
        title="Mobilna verzija pre"
        class='lozad' />
</div>

Sada smo zamenili vertikalni prostor na ekranu za horizontalni prostor na ekranu.

<div class="text-center">
    <img 
        src="images/mobile-v2.png"
        alt="Mobilna verzija posle"
        title="Mobilna verzija posle"
        class='lozad' />
</div>

    
#### Implkacije pravila prilagodbe

Svesni smo da kada napravimo promene u stilu javnog komentarskog vidžeta, možemo pokvariti prilagodbe naših korisnika. Ne brinite, mislimo na vas i pregledali smo stilizacije prilagođenih vidžeta kako bismo se uverili da nisu pokvareni. Međutim, ako primetite probleme, javite nam.

#### Implkacije performansi

Ova promena je povećala veličinu vidžeta za oko 300 bajtova, dovodeći je do ukupno 10.1kb. Kao i sa svim izdanjima koja povećavaju veličinu vidžeta, istražićemo načine kako da je smanjimo.

Srećno komentarisanje!

{{/isPost}}

---