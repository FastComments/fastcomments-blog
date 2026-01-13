---
[category:Migration]

###### [postdate]
# [postlink]Migracija Reakcija Iz Hyvor Talk-a Sada Je Podržana[/postlink]

{{#unless isPost}}
Kada uvozite svoj izvoz podataka iz Hyvor Talk-a, sada možemo migrirati vaše reakcije na razini stranice.
{{/unless}}

{{#isPost}}

### Što je Novo

Kada uvozite komentare kako biste ih migrirali iz Hyvor Talk-a, FastComments sada može uvesti vaše reakcije na stranici. Dodatno, otkrit ćemo da li su
komentarske teme na stranicama zatvorene ili ne, te migrirati stanje također.

Ponovni unos neće uzrokovati dupliciranje brojeva ili gubitak bilo kakvih vrijednosti reakcija prije uvoza.

### Kako Postaviti Reakcije

Prikazivanje reakcija na stranici nije automatsko. Da biste započeli, morat ćete ažurirati konfiguraciju vašeg widgeta:

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
                {id: 'wow', src: 'https://raw.githubusercontent.com/hfg-gmuend/openmoji/master/color/618x618/1F62E.png'}, // Lice s Otvorenim Ustima
                {id: 'sad', src: 'https://raw.githubusercontent.com/hfg-gmuend/openmoji/master/color/618x618/1F622.png'}, // Plačuće Lice
                {id: 'laugh', src: 'https://raw.githubusercontent.com/hfg-gmuend/openmoji/master/color/618x618/1F602.png'}, // Lice s Supraskama Rados
                {id: 'angry', src: 'https://raw.githubusercontent.com/hfg-gmuend/openmoji/master/color/618x618/1F620.png'}  // Ljuti Lice
            ]
        }
    });
</script>
```

ID-ovi moraju odgovarati onima iz Hyvor Talk izvoza. Ovaj primjer koristi točne vrijednosti.

Morat ćete izvoriti svoje vlastite slike reakcija. Mogu biti bilo kojeg formata, uključujući gifove. Gornji primjer koristi neke iz OpenMoji projekta.

### Na Kraj

Kao i svi veliki izdanci, drago nam je što smo mogli odvojiti vrijeme za optimizaciju, testiranje i pravilno izdavanje ove funkcije. Javite nam
ispod ako otkrijete bilo kakve probleme.

Živjeli!

{{/isPost}}

---