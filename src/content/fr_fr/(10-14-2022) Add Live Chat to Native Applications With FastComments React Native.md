---
[category:Integrations]
[category:API & Development]
###### [postdate]
# [postlink]Ajoutez un chat en direct aux applications natives avec FastComments React Native[/postlink]

{{#unless isPost}}
Après des mois de travail, nous sommes heureux d'annoncer que fastcomments-react-native-sdk est maintenant disponible en version 1.0 pour le grand public.
{{/unless}}

{{#isPost}}

### <i class="circle">!</i> Cet article contient du jargon technique

### Quoi de Neuf

Chez FastComments, nous avons lancé une nouvelle façon de construire des applications React Native avec FastComments. Auparavant, vous utilisiez notre wrapper react-native autour de
la bibliothèque VanillaJS. Cela introduisait plusieurs problèmes de mémoire et de latence en raison de la nécessité d'une vue web - un navigateur dans votre application - juste pour charger notre bibliothèque.

Nous avons maintenant **complètement** porté FastComments vers React Native, et écrit notre propre éditeur WYSIWYG pour éliminer complètement le besoin de vues web.

La bibliothèque prend en charge différents thèmes et mises en page. Par exemple, voici le thème Erebus qui est un thème sombre de style chat en direct :

<div class="text-center">
    <img src="images/skin-erebus.png" alt="Thème Erebus" title="Thème Erebus" />
</div>

La bibliothèque est disponible [sur GitHub à FastComments/fastcomments-react-native-sdk](https://github.com/FastComments/fastcomments-react-native-sdk) ainsi que
[sur NPM](https://www.npmjs.com/package/fastcomments-react-native-sdk).

### Personnalisable

La nouvelle bibliothèque native est conçue pour être personnalisable tout comme la bibliothèque web existante.

Vous pouvez :

- Personnaliser tous les assets et icônes utilisés par la bibliothèque.
- Personnaliser le style de chaque composant dans la bibliothèque en passant un objet Styles depuis le haut.
- Personnaliser toutes les traductions.
- Utiliser l'un des thèmes prédéfinis ou développés par la communauté.
- Utiliser de nombreuses options de configuration que la bibliothèque web prend en charge.

### Liste Complet des Fonctionnalités

La bibliothèque prend en charge de nombreuses fonctionnalités. Une liste incomplète est :

- [x] Blocage
- [x] Réactions au Chat
- [x] Commentaires & Réponses Enfant
- [x] Styles Personnalisés (sous forme de feuille de style typée)
- [x] Émoticônes
- [x] Signalement
- [x] Navigateur Gif - Avec tendance par défaut + capacité de recherche. Images et recherche anonymisées par proxy.
- [x] Commentaires en direct
- [x] Sélection et Téléchargements de Médias
- [x] Éditeur WYSIWYG natif avec support des images.
- [x] Service de Notification (obtenir les notifications non lues de l'utilisateur en arrière-plan pour les pousser, etc.)
- [x] Liste de Notifications (s'affiche lors du clic sur la cloche). Prend en charge les abonnements.
- [x] Pagination (Boutons)
- [x] Pagination (Défilement Infini)
- [x] Épingler les Commentaires
- [x] Commentaires sécurisés, simples SSO et anonymes.
- [x] Plusieurs thèmes prédéfinis.
- [x] Touche Afficher/Cacher les Commentaires
- [x] Discussions
- [x] Indicateurs d'activité utilisateur
- [x] Vote

### Comment ça Marche

La bibliothèque est une réécriture complète du client FastComments en TypeScript et React Native.

### Plan à Long Terme

À long terme, nous maintiendrons à la fois la bibliothèque VanillaJS et la bibliothèque react-native en parallèle, ainsi que toute bibliothèque native future que nous pourrions développer.

### Quelles sont les Prochaines Étapes ?

Nous attendons avec impatience les retours des utilisateurs et de la communauté pour améliorer cette bibliothèque au fil du temps, tout comme nous l'avons fait avec l'écosystème web.

### En Conclusion

Nous savons que cette bibliothèque a été longtemps attendue par certains. Comme pour toutes les grandes versions, nous sommes heureux d'avoir pu prendre le temps d'optimiser, tester et lancer correctement cette bibliothèque.

À votre santé !

{{/isPost}}