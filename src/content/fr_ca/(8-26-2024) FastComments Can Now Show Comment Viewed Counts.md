---
[category:Analytics]
###### [postdate]
# [postlink]FastComments peut maintenant afficher les comptes de vues de commentaires[/postlink]

{{#unless isPost}}
FastComments prend maintenant en charge l'affichage d'un compte à côté de chaque commentaire qui s'incrémente en temps réel à mesure que les utilisateurs consultent les commentaires.
{{/unless}}

{{#isPost}}

### Quoi de Neuf

FastComments prend maintenant en charge l'affichage d'un compte à côté de chaque commentaire qui s'incrémente en temps réel à mesure que les utilisateurs consultent les commentaires. L'affichage d'un commentaire ou non est déterminé par le compte de l'utilisateur ou la session anonyme. Cela prend en charge SSO (SSO sécurisé et SSO simple).

### Démonstration en Direct

Nous avons activé les comptes de vues de commentaires pour ce billet de blog en particulier ! Vérifiez le compte à côté de l'œil sur chaque commentaire !

### Documentation

[Vous pouvez trouver la documentation des développeurs pour configurer les comptes de vues ici.](https://docs.fastcomments.com/guide-customizations-and-configuration.html#enable-comment-view-counts)

### Performance

Les comptes ne sont pas mis à jour immédiatement, il y a un petit délai (jusqu'à trois secondes) alors que les comptes sont agrégés puis envoyés sur le réseau. C'est une optimisation, donc si vous avez un événement en direct, et que quelques milliers de personnes consultent en moyenne 10 commentaires sur la page, nous n'envoyons pas instantanément des millions de mises à jour (`3000 utilisateurs x 3000 chargements de page = ~9 millions de changements`) à chaque utilisateur et ne surchargons pas leur navigateur ou n'utilisons pas toute leur bande passante réseau.

### En Conclusion

Nous remercions nos clients qui nous donnent des retours continus afin que nous puissions penser à des idées comme celle-ci et également nous donner le temps de lancer des fonctionnalités bien optimisées. Nous espérons que vous continuerez à aimer FastComments.

Santé !

<script>
    window.demoOverrides = {
        enableViewCounts: true
    }
</script>

{{/isPost}}

---