---
[category:Migration]

###### [postdate]
# [postlink]Migracija reakcij iz Hyvor Talk je zdaj podprta[/postlink]

{{#unless isPost}}
Ko uvozite svoj izvoz podatkov iz Hyvor Talk, lahko zdaj migriramo vaše reakcije na ravni strani.
{{/unless}}

{{#isPost}}

### Kaj je novega

Ko uvozite komentarje, da jih migrirate iz Hyvor Talk, lahko FastComments zdaj uvozi vaše reakcije na strani. Poleg tega bomo zaznali, ali so
komentarske niti na straneh zaprte ali ne, in migrirali tudi to stanje.

Ponovni zagon uvoza ne bo povzročil podvajanja številk ali izgube vrednosti reakcij izpred uvoza.

### Kako nastaviti reakcije

Prikaz reakcij na strani ni samodejen. Da začnete, boste morali posodobiti konfiguracijo svojega vtičnika:

```
<script src="https://cdn.fastcomments.com/js/embed-v2.min.js"></script>
<div id="fastcomments-widget"></div>
<script>
    FastCommentsUI(document.getElementById('fastcomments-widget'), {
        "tenantId": "demo",
        pageReactConfig: {
            reacts: [
                {id: 'superb', src: 'https://raw.githubusercontent.com/hfg-gmuend/openmoji/master/color/618x618/1F929.png'}, // Očaran
                {id: 'love', src: 'https://raw.githubusercontent.com/hfg-gmuend/openmoji/master/color/618x618/2764.png'}, // Rdeče srce
                {id: 'wow', src: 'https://raw.githubusercontent.com/hfg-gmuend/openmoji/master/color/618x618/1F62E.png'}, // Obraz z odprtimi usti
                {id: 'sad', src: 'https://raw.githubusercontent.com/hfg-gmuend/openmoji/master/color/618x618/1F622.png'}, // Jokajoč obraz
                {id: 'laugh', src: 'https://raw.githubusercontent.com/hfg-gmuend/openmoji/master/color/618x618/1F602.png'}, // Obraz s solzami veselja
                {id: 'angry', src: 'https://raw.githubusercontent.com/hfg-gmuend/openmoji/master/color/618x618/1F620.png'}  // Jezen obraz
            ]
        }
    });
</script>
```

Id-ji morajo ustrezati tistim iz izvoza Hyvor Talk. Ta primer uporablja pravilne vrednosti.

Morali boste pridobiti svoje slike reakcij. Lahko so v katerem koli formatu, vključno z gif-i. Zgornji primer uporablja nekatere iz projekta OpenMoji.

### V zaključku

Kot pri vseh večjih izdajah smo veseli, da smo si lahko vzeli čas za optimizacijo, testiranje in pravilno izdajo te funkcije. Sporočite nam
spodaj, če odkrijete kakršne koli težave.

Na zdravje!

{{/isPost}}

---