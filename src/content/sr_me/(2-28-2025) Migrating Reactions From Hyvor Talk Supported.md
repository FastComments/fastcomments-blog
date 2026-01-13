---
[category:Migration]

###### [postdate]
# [postlink]Migracija reakcija sa Hyvor Talk-a je sada podržana[/postlink]

{{#unless isPost}}
Kada uvezete svoj izvoz podataka sa Hyvor Talk-a, sada možemo migrirati vaše reakcije na nivou stranice.
{{/unless}}

{{#isPost}}

### Šta je novo

Kada uvezete komentare da ih migrirate sa Hyvor Talk-a, FastComments sada može uvesti vaše reakcije na stranici. Pored toga, otkrivaćemo da li
su nitovi komentara na stranicama zatvoreni ili ne, i migriraćemo i taj status.

Ponovno pokretanje uvoza neće uzrokovati duplikate broja ili gubitak bilo kojih vrednosti reakcija pre uvoza.

### Kako postaviti reakcije

Prikazivanje reakcija na stranici nije automatsko. Da biste započeli, moraćete da ažurirate konfiguraciju svog widget-a:

```
<script src="https://cdn.fastcomments.com/js/embed-v2.min.js"></script>
<div id="fastcomments-widget"></div>
<script>
    FastCommentsUI(document.getElementById('fastcomments-widget'), {
        "tenantId": "demo",
        pageReactConfig: {
            reacts: [
                {id: 'superb', src: 'https://raw.githubusercontent.com/hfg-gmuend/openmoji/master/color/618x618/1F929.png'}, // Oduševljen
                {id: 'love', src: 'https://raw.githubusercontent.com/hfg-gmuend/openmoji/master/color/618x618/2764.png'}, // Crveno srce
                {id: 'wow', src: 'https://raw.githubusercontent.com/hfg-gmuend/openmoji/master/color/618x618/1F62E.png'}, // Lice sa otvorenom ustima
                {id: 'sad', src: 'https://raw.githubusercontent.com/hfg-gmuend/openmoji/master/color/618x618/1F622.png'}, // Plačuće lice
                {id: 'laugh', src: 'https://raw.githubusercontent.com/hfg-gmuend/openmoji/master/color/618x618/1F602.png'}, // Lice sa suzama radosnicama
                {id: 'angry', src: 'https://raw.githubusercontent.com/hfg-gmuend/openmoji/master/color/618x618/1F620.png'}  // Ljuto lice
            ]
        }
    });
</script>
```

Id-evi moraju odgovarati onima iz Hyvor Talk izvoza. Ovaj primer koristi ispravne vrednosti.

Moraćete da obezbedite sopstvene slike reakcija. Mogu biti u bilo kojem formatu, uključujući gif-ove. Gornji primer koristi neke iz OpenMoji projekta.

### Zaključak

Kao i kod svih velikih izdanja, drago nam je što smo mogli da odvojimo vreme za optimizaciju, testiranje i pravilno objavljivanje ove funkcije. Javite nam
ispod ako primetite bilo kakve probleme.

Živeli!

{{/isPost}}

---