---
[category:UI & Customization]
###### [postdate]
# [postlink]Les commentaires non lus sont désormais mis en évidence avec FastComments[/postlink]

{{#unless isPost}}
Vous êtes-vous déjà retrouvé sur une page et souhaité reprendre la lecture de la section des commentaires là où vous vous étiez arrêté ? FastComments met désormais en forme les commentaires que vous avez manqués, ce qui rend cela facile.
{{/unless}}

{{#isPost}}

### Quoi de Neuf

Vous êtes-vous déjà retrouvé sur une page et souhaité reprendre la lecture de la section des commentaires là où vous vous étiez arrêté ? FastComments met désormais en forme les commentaires que vous avez manqués, ce qui rend cela facile.

<div class="text-center">
    <img src="/images/new-comment-highlighted.png" alt="Avatar dans le nouveau commentaire mis en évidence." />
</div>

### Comment l'obtenir

Tout commentaire qui a déclenché une notification dans l'application (réponses, réponses dans le même fil, ou commentaires sur une page à laquelle vous êtes abonné) sera automatiquement mis en évidence avec l'avatar de l'utilisateur qui brille légèrement. La couleur peut être personnalisée via CSS en utilisant la classe `is-unread`. Le style par défaut prend également en charge le mode sombre.

De plus, une nouvelle classe CSS `24hr` a été ajoutée aux éléments de commentaire publiés dans les 24 dernières heures. Vous pouvez également l'utiliser pour styliser les commentaires.

### Pourquoi mettre en évidence l'avatar ?

Nous reconnaissons qu'il peut être préférable de mettre en évidence tout le commentaire. Cependant, cela pose des problèmes de lisibilité et de style avec nos clients qui ont personnalisé la plateforme pour correspondre à leur produit. Nous avons constaté que mettre légèrement en évidence l'avatar est un changement plutôt discret dans la plupart des cas. Si souhaité, la lueur peut être supprimée et modifiée en utilisant les règles de personnalisation des widgets.

### En Conclusion

Nous savons que cette fonctionnalité a été longtemps attendue par certains. Nous avons passé du temps à choisir un style qui n'était pas trop intrusive mais néanmoins utile, et nous pourrions apporter d'autres ajustements en fonction des retours.

À votre santé !

{{/isPost}}

---