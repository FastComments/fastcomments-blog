---
[category:UI & Customization]
###### [postdate]
# [postlink]FastComments na mobilnim uređajima - Manje praznog prostora, više sadržaja[/postlink]

{{#unless isPost}}
Poboljšali smo čitljivost i izgled FastComments na mobilnim uređajima.
{{/unless}}

{{#isPost}}
#### Problem

Kada smo prvi put objavili FastComments željeli smo atraktivan dizajn koji dobro funkcionira na mobilnim i desktop preglednicima. Međutim, kako smo dodavali više značajki i vidjeli korisnike u interakciji s FastComments, shvatili smo da trošimo prostor na ekranu u našoj mobilnoj UX dok smo pokušavali učiniti da izgleda "lijepo".

Tako smo došli do kompromisa.

#### Rješenje

Ovdje možete vidjeti kako je bilo prije, nismo koristili prostor vrlo učinkovito.

<div class="text-center">
    <img 
        src="images/mobile-v1.png"
        alt="Mobilna verzija prije"
        title="Mobilna verzija prije"
        class='lozad' />
</div>

Sada smo zamijenili vertikalni prostor na ekranu za horizontalni prostor.

<div class="text-center">
    <img 
        src="images/mobile-v2.png"
        alt="Mobilna verzija nakon"
        title="Mobilna verzija nakon"
        class='lozad' />
</div>

    
#### ImplIikacije prilagodbe

Svjesni smo da kada napravimo promjene u stilu javnog komentarskog widgeta, možemo pokvariti prilagodbe naših klijenata. Ne brinite, imamo vas pokrivene i pregledali smo stilove prilagođenih widgeta svih, kako bismo osigurali da nisu pokvareni. Međutim, ako primijetite probleme, javite nam.

#### ImplIikacije performansi

Ova promjena je povećala veličinu widgeta za otprilike 300 bajtova, dovodeći je na ukupno 10.1kb. Kao i sa svim izdanjima koja povećavaju veličinu widgeta, proučit ćemo načine kako ga smanjiti.

Sretno komentiranje!

{{/isPost}}

---