---
[category:Migration]

###### [postdate]
# [postlink]Migracija Reakcija Iz Hyvor Talk-a Je Sada Podržana[/postlink]

{{#unless isPost}}
Kada importujete svoj izvoz podataka iz Hyvor Talk-a, sada možemo migrirati vaše reakcije na nivou stranice.
{{/unless}}

{{#isPost}}

### Šta je novo

Kada uvezete komentare da ih migrirate iz Hyvor Talk-a, FastComments sada može da uveze vaše reakcije na stranici. Pored toga, otkrićemo da li su
komentatorske niti na stranicama zatvorene ili ne, i migrirati to stanje takođe.

Ponovno pokretanje uvoza neće uzrokovati da se brojevi dupliciraju ili izgube bilo koju vrednost reakcija od pre uvoza.

### Kako postaviti reakcije

Prikazivanje reakcija na stranici nije automatsko. Da biste započeli, moraćete da ažurirate konfiguraciju vašeg widget-a:

```
<script src="https://cdn.fastcomments.com/js/embed-v2.min.js"></script>
<div id="fastcomments-widget"></div>
<script>
    FastCommentsUI(document.getElementById('fastcomments-widget'), {
        "tenantId": "demo",
        pageReactConfig: {
            reacts: [
                {id: 'superb', src: 'https://raw.githubusercontent.com/hfg-gmuend/openmoji/master/color/618x618/1F929.png'}, // Oduševljen
                {id: 'love', src: 'https://raw.githubusercontent.com/hfg-gmuend/openmoji/master/color/618x618/2764.png'}, // Crveno Srce
                {id: 'wow', src: 'https://raw.githubusercontent.com/hfg-gmuend/openmoji/master/color/618x618/1F62E.png'}, // Lice sa Otvorenim Ustima
                {id: 'sad', src: 'https://raw.githubusercontent.com/hfg-gmuend/openmoji/master/color/618x618/1F622.png'}, // Plakati
                {id: 'laugh', src: 'https://raw.githubusercontent.com/hfg-gmuend/openmoji/master/color/618x618/1F602.png'}, // Lice sa Suza Radosnica
                {id: 'angry', src: 'https://raw.githubusercontent.com/hfg-gmuend/openmoji/master/color/618x618/1F620.png'}  // Ljuto Lice
            ]
        }
    });
</script>
```

Id-evi moraju odgovarati onima iz uvoza Hyvor Talk-a. Ovaj primer koristi ispravne vrednosti.

Moraćete da pronađete svoje slike reakcija. Mogu biti bilo kog formata, uključujući gifove. Gornji primer koristi neke iz OpenMoji projekta.

### Na kraju

Kao i kod svih važnih izdanja, drago nam je da smo mogli da odvojimo vreme za optimizaciju, testiranje i pravilno puštanje ove funkcije. Javite nam
u nastavku ako otkrijete bilo kakve probleme.

Živeli!

{{/isPost}}