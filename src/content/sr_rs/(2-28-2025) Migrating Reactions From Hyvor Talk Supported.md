---
[category:Migration]

###### [postdate]
# [postlink]Migracija Reakcija Iz Hyvor Talk-a Je Sada Podržana[/postlink]

{{#unless isPost}}
Kada uvezete svoj izvoz podataka iz Hyvor Talk-a, sada možemo migrirati vaše reakcije na nivou stranice.
{{/unless}}

{{#isPost}}

### Šta je Novo

Kada uvezete komentare da ih migrirate iz Hyvor Talk-a, FastComments sada može uvesti vaše reakcije na stranici. Pored toga, otkrićemo da li su
niti komentara na stranicama zatvorene ili ne, i migrirati taj status takođe.

Ponovno pokretanje uvoza neće izazvati duplikate broja ili gubitak vrednosti reakcija pre uvoza.

### Kako Postaviti Reakcije

Prikazivanje reakcija na stranici nije automatsko. Da biste počeli, moraćete da ažurirate konfiguraciju svog vidgeta:

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
                {id: 'sad', src: 'https://raw.githubusercontent.com/hfg-gmuend/openmoji/master/color/618x618/1F622.png'}, // Plačljivo Lice
                {id: 'laugh', src: 'https://raw.githubusercontent.com/hfg-gmuend/openmoji/master/color/618x618/1F602.png'}, // Lice sa Suzama Radosnicama
                {id: 'angry', src: 'https://raw.githubusercontent.com/hfg-gmuend/openmoji/master/color/618x618/1F620.png'}  // Ljuto Lice
            ]
        }
    });
</script>
```

ID-ovi moraju odgovarati onima iz Hyvor Talk izvoza. Ovaj primer koristi ispravne vrednosti.

Moraćete da obezbedite svoje slike reakcija. Mogu biti bilo kog formata, uključujući gifove. Gornji primer koristi neke iz OpenMoji projekta.

### Na Zaključak

Kao i svi veliki izdanja, drago nam je što smo mogli da odvojimo vreme za optimizaciju, testiranje i pravilno objavljivanje ove funkcije. Javite nam
ispod ako otkrijete bilo kakve probleme.

Pozdrav!

{{/isPost}}

---