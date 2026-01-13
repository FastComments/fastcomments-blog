---

[category:Features]
###### [postdate]
# [postlink]Pokrenuta stranica reakcija[/postlink]

{{#unless isPost}}
FastComments sada podržava prikazivanje stranica-reakcija zajedno s brojevima iznad widgeta za komentare.
{{/unless}}

{{#isPost}}

### Što je novo

FastComments je već podržavao ono što nazivamo našim Modul za povratne informacije, gdje ste mogli prikazati ocjenu, NPS ili drugo pitanje iznad područja komentara.

Međutim, mnogi korisnici žele nešto jednostavnije - prikazati nekoliko ikona s nekim reakcijama iznad widgeta za komentare, moći prilagoditi te ikone, možda prilagoditi
opcijama po korisniku, i tako dalje.

Od danas smo pokrenuli ovu funkciju.

Sve FastComments tarife sada imaju pristup Stranicama reakcija.

### Živa demonstracija

Omogućili smo demo konfiguraciju Stranica reakcija za ovaj blog post posebno, možete je pronaći ispod!

### Dokumentacija

[Možete pronaći dokumentaciju za programere za postavljanje Stranica reakcija ovdje.](https://docs.fastcomments.com/guide-page-reacts.html)

### Popis korisnika reakcija

Stranice reakcija također se mogu konfigurirati za prikazivanje sličice koja otkriva popis korisnika koji su ostavili određenu reakciju.

### Na kraju

Zahvaljujemo našim kupcima koji nam daju kontinuirane povratne informacije kako bismo mogli razmišljati o idejama poput ove i također nam daju vrijeme za pokretanje dobro optimiziranih funkcija. Nadamo se da ćete i dalje voljeti FastComments.

Živjeli!

<script>
    window.demoOverrides = {
        pageReactConfig: {
            showUsers: true,
            reacts: [
                {id: 'droll', src: 'https://docs.fastcomments.com/images/emojis/droll.png'},
                {id: 'he', src: 'https://docs.fastcomments.com/images/emojis/heart-eyes.png'},
                {id: 'laugh', src: 'https://docs.fastcomments.com/images/emojis/laugh.png'},
                {
                    id: 'puke',
                    src: 'https://docs.fastcomments.com/images/emojis/puke.png',
                    selectedSrc: 'https://docs.fastcomments.com/images/emojis/puke-bw.png'
                },
                {id: 'rofl', src: 'https://docs.fastcomments.com/images/emojis/rofl.png'},
            ]
        }
    }
</script>

{{/isPost}}

---