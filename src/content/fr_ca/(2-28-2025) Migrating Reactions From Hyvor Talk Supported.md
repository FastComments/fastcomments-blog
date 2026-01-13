---
[category:Migration]

###### [postdate]
# [postlink]La migration des réactions depuis Hyvor Talk est maintenant prise en charge[/postlink]

{{#unless isPost}}
Lorsque vous importez votre export de données depuis Hyvor Talk, nous pouvons maintenant migrer vos réactions au niveau de la page.
{{/unless}}

{{#isPost}}

### Quoi de Neuf

Lorsque vous importez des commentaires pour les migrer depuis Hyvor Talk, FastComments peut maintenant importer vos réactions de page. De plus, nous détecterons si
les fils de commentaires sur les pages sont fermés ou non, et migrerons également cet état.

Relancer l'importation ne causera pas de duplication des comptes ni de perte de valeurs de réaction avant l'importation.

### Comment Configurer les Réactions

L'affichage des réactions de page n'est pas automatique. Pour commencer, vous devrez mettre à jour la configuration de votre widget :

```
<script src="https://cdn.fastcomments.com/js/embed-v2.min.js"></script>
<div id="fastcomments-widget"></div>
<script>
    FastCommentsUI(document.getElementById('fastcomments-widget'), {
        "tenantId": "demo",
        pageReactConfig: {
            reacts: [
                {id: 'superb', src: 'https://raw.githubusercontent.com/hfg-gmuend/openmoji/master/color/618x618/1F929.png'}, // Étoile Émerveillée
                {id: 'love', src: 'https://raw.githubusercontent.com/hfg-gmuend/openmoji/master/color/618x618/2764.png'}, // Cœur Rouge
                {id: 'wow', src: 'https://raw.githubusercontent.com/hfg-gmuend/openmoji/master/color/618x618/1F62E.png'}, // Visage avec Bouche Ouverte
                {id: 'sad', src: 'https://raw.githubusercontent.com/hfg-gmuend/openmoji/master/color/618x618/1F622.png'}, // Visage en Pleure
                {id: 'laugh', src: 'https://raw.githubusercontent.com/hfg-gmuend/openmoji/master/color/618x618/1F602.png'}, // Visage avec larmes de Joie
                {id: 'angry', src: 'https://raw.githubusercontent.com/hfg-gmuend/openmoji/master/color/618x618/1F620.png'}  // Visage En Colère
            ]
        }
    });
</script>
```

Les ids doivent correspondre à ceux de l'exportation Hyvor Talk. Cet exemple utilise les valeurs correctes.

Vous devrez trouver vos propres images de réaction. Elles peuvent être de n'importe quel format, y compris des gifs. L'exemple ci-dessus utilise certains du projet OpenMoji.

### En Conclusion

Comme pour toutes les grandes versions, nous sommes heureux d'avoir pu prendre le temps d'optimiser, de tester et de publier correctement cette fonctionnalité. Faites-nous savoir
ci-dessous si vous découvrez des problèmes.

Santé !

{{/isPost}}

---