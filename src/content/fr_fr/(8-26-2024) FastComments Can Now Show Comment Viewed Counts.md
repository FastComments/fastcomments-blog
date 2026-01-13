---
[category:Analytics]
###### [postdate]
# [postlink]FastComments peut désormais afficher le nombre de vues des commentaires[/postlink]

{{#unless isPost}}
FastComments prend désormais en charge l'affichage d'un compte à côté de chaque commentaire qui s'incrémente en temps réel à mesure que les utilisateurs consultent les commentaires.
{{/unless}}

{{#isPost}}

### Quoi de neuf

FastComments prend désormais en charge l'affichage d'un compte à côté de chaque commentaire qui s'incrémente en temps réel à mesure que les utilisateurs consultent les commentaires. Que le commentaire soit consulté ou non est déterminé par le compte de l'utilisateur ou la session anonyme. Il prend en charge le SSO (à la fois le SSO sécurisé et le SSO simple).

### Démo en direct

Nous avons activé le compte des vues des commentaires pour ce billet de blog en particulier ! Vérifiez le compte à côté de l'œil sur chaque commentaire !

### Documentation

[Vous pouvez trouver la documentation pour les développeurs afin de configurer les comptes de vues ici.](https://docs.fastcomments.com/guide-customizations-and-configuration.html#enable-comment-view-counts)

### Performance

Les comptes ne sont pas mis à jour immédiatement, il y a un léger (jusqu'à trois secondes) retard pendant que les comptes sont agrégés puis envoyés sur le réseau. C'est une optimisation afin que si vous avez un événement en direct, et que quelques milliers de personnes consultent disons 10 commentaires en moyenne sur la page, nous n'envoyions pas instantanément des millions de mises à jour (`3000 utilisateurs x 3000 chargements de page = ~9 millions de changements`) à chaque utilisateur et ne ralentissons pas leur navigateur ou n'utilisons pas toute leur bande passante réseau.

### En conclusion

Nous remercions nos clients qui nous donnent des retours continus afin que nous puissions penser à des idées comme celle-ci et nous donner également le temps de lancer des fonctionnalités bien optimisées. Nous espérons que vous continuerez à aimer FastComments.

Santé !

<script>
    window.demoOverrides = {
        enableViewCounts: true
    }
</script>

{{/isPost}}

---