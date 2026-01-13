---
[category:Migration]

###### [postdate]
# [postlink]Migracija reakcija iz Hyvor Talk-a je sada podržana[/postlink]

{{#unless isPost}}
Kada uvezete svoj izvoz podataka iz Hyvor Talk-a, sada možemo migrirati vaše reakcije na nivou stranice.
{{/unless}}

{{#isPost}}

### Šta je novo

Kada uvezete komentare da ih migrirate iz Hyvor Talk-a, FastComments sada može uvesti vaše reakcije na stranici. Pored toga, otkrićemo da li
su komentatorske niti na stranicama zatvorene ili ne, i migrirati taj status takođe.

Ponovno pokretanje uvoza neće uzrokovati duplikate brojeva ili gubitak bilo kojih vrednosti reakcija pre uvoza.

### Kako postaviti reakcije

Prikazivanje reakcija na stranici nije automatsko. Da biste započeli, moraćete da ažurirate konfiguraciju svog vidžeta:

```
<script src="https://cdn.fastcomments.com/js/embed-v2.min.js"></script>
<div id="fastcomments-widget"></div>
<script>
    FastCommentsUI(document.getElementById('fastcomments-widget'), {
        "tenantId": "demo",
        pageReactConfig: {
            reacts: [
                {id: 'superb', src: 'https://raw.githubusercontent.com/hfg-gmuend/openmoji/master/color/618x618/1F929.png'}, // Zapanjen
                {id: 'love', src: 'https://raw.githubusercontent.com/hfg-gmuend/openmoji/master/color/618x618/2764.png'}, // Crveno Srce
                {id: 'wow', src: 'https://raw.githubusercontent.com/hfg-gmuend/openmoji/master/color/618x618/1F62E.png'}, // Lice sa otvorenim ustima
                {id: 'sad', src: 'https://raw.githubusercontent.com/hfg-gmuend/openmoji/master/color/618x618/1F622.png'}, // Plačno lice
                {id: 'laugh', src: 'https://raw.githubusercontent.com/hfg-gmuend/openmoji/master/color/618x618/1F602.png'}, // Lice sa suzama radosnicama
                {id: 'angry', src: 'https://raw.githubusercontent.com/hfg-gmuend/openmoji/master/color/618x618/1F620.png'}  // Ljuto lice
            ]
        }
    });
</script>
```

Ids moraju odgovarati onima iz Hyvor Talk izvoza. Ovaj primer koristi ispravne vrednosti.

Moraćete da nabavite svoje slike reakcija. Mogu biti u bilo kom formatu, uključujući gifove. Gornji primer koristi neke iz OpenMoji projekta.

### Na kraju

Kao i svi glavni izdaci, drago nam je što smo mogli da odvojimo vreme da optimizujemo, testiramo i pravilno objavimo ovu funkciju. Javite nam ispod ako otkrijete bilo kakve probleme.

Živeli!

{{/isPost}}

---