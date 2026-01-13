---

[category:Features]
###### [postdate]
# [postlink]Page Reacts Lancement[/postlink]

{{#unless isPost}}
FastComments prend désormais en charge l'affichage des réactions de page ainsi que des comptes au-dessus du widget de commentaire.
{{/unless}}

{{#isPost}}

### Quoi de neuf

FastComments avait déjà soutenu ce que nous appelons notre module de Feedback, où vous pouviez afficher une note par étoile, un NPS ou d'autres questions au-dessus de la zone de commentaire.

Cependant, de nombreux utilisateurs souhaitent quelque chose de plus simple - afficher des icônes avec des réactions au-dessus du widget de commentaire, pouvoir personnaliser ces icônes, peut-être personnaliser
les options par utilisateur, et ainsi de suite.

À partir d’aujourd’hui, nous avons lancé cette fonctionnalité.

Tous les plans FastComments ont désormais accès aux Réactions de Page.

### Démo en direct

Nous avons activé une configuration de démo des Réactions de Page pour ce billet de blog spécifiquement, vous pouvez la trouver ci-dessous !

### Documentation

[Vous pouvez trouver la documentation pour les développeurs concernant la configuration des Réactions de Page ici.](https://docs.fastcomments.com/guide-page-reacts.html)

### Liste des utilisateurs réagissant

Les Réactions de Page peuvent également être configurées pour afficher un tooltip qui révèle la liste des utilisateurs ayant laissé une réaction spécifique.

### En conclusion

Nous remercions nos clients qui nous fournissent des retours continus afin que nous puissions penser à des idées comme celle-ci et nous accorder le temps de lancer des fonctionnalités bien optimisées. Nous espérons que vous continuez à aimer FastComments.

Santé !

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