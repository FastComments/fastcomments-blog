---

[category:Features]
###### [postdate]
# [postlink]Lancement de Page Reacts[/postlink]

{{#unless isPost}}
FastComments prend désormais en charge l'affichage des réactions de page avec des comptes au-dessus du widget de commentaires.
{{/unless}}

{{#isPost}}

### Quoi de Neuf

FastComments avait déjà pris en charge ce que nous appelons notre module de Feedback, où vous pouviez afficher une note par étoiles, un NPS ou d'autres questions au-dessus de la zone de commentaires.

Cependant, de nombreux utilisateurs souhaitent quelque chose de plus simple : montrer quelques icônes avec des réactions au-dessus du widget de commentaires, pouvoir personnaliser ces icônes, peut-être personnaliser les options par utilisateur, et ainsi de suite.

À partir d'aujourd'hui, nous avons lancé cette fonctionnalité.

Tous les plans FastComments ont désormais accès aux Reactions de Page.

### Démo en Direct

Nous avons activé une configuration de démonstration des Reactions de Page pour cet article de blog en particulier, que vous pouvez trouver ci-dessous !

### Documentation

[Vous pouvez trouver la documentation développeur pour configurer les Reactions de Page ici.](https://docs.fastcomments.com/guide-page-reacts.html)

### Liste des Utilisateurs Réactionnaires

Les Reactions de Page peuvent également être configurées pour afficher une info-bulle qui révèle la liste des utilisateurs ayant laissé une réaction spécifique.

### En Conclusion

Nous remercions nos clients qui nous fournissent des retours continus afin que nous puissions penser à des idées comme celle-ci et aussi nous donner le temps de lancer des fonctionnalités bien optimisées. Nous espérons que vous continuez à aimer FastComments.

Cordialement !

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