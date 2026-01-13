---
[category:UI & Customization]
###### [postdate]
# [postlink]Les commentaires non lus sont maintenant surlignés avec FastComments[/postlink]

{{#unless isPost}}
Avez-vous déjà été de retour sur une page et voulu reprendre la lecture de la section des commentaires là où vous vous étiez arrêté ? FastComments stylise maintenant les commentaires que vous avez manqués, rendant cela facile.
{{/unless}}

{{#isPost}}

### Quoi de Neuf

Avez-vous déjà été de retour sur une page et voulu reprendre la lecture de la section des commentaires là où vous vous étiez arrêté ? FastComments stylise maintenant les commentaires que vous avez manqués, rendant cela facile.

<div class="text-center">
    <img src="/images/new-comment-highlighted.png" alt="Avatar dans le nouveau commentaire surligné." />
</div>

### Comment l'Obtenir

Tout commentaire qui a déclenché une notification dans l’application (réponses, réponses dans le même fil, ou commentaires sur une page à laquelle vous êtes abonné) sera automatiquement surligné avec l’avatar de l’utilisateur qui scintille légèrement. La couleur peut être personnalisée via CSS en utilisant la classe `is-unread`. Le style par défaut supporte également le mode sombre.

De plus, une nouvelle classe CSS `24hr` a été ajoutée aux éléments de commentaire publiés dans les dernières 24 heures. Vous pouvez l'utiliser pour styliser les commentaires également.

### Pourquoi Surligner L'Avatar ?

Nous reconnaissons qu'il peut être préférable de surligner l'ensemble du commentaire. Cependant, cela pose des problèmes de lisibilité et de style pour nos clients qui ont customisé la plateforme pour s'adapter à leur produit. Nous avons constaté que surligner légèrement l'avatar est un changement plutôt discret dans la plupart des cas. Si désiré, le scintillement peut être retiré et modifié en utilisant les règles de personnalisation du widget.

### En Conclusion

Nous savons que cette fonctionnalité a été longtemps attendue par certains. Nous avons passé du temps à choisir un style qui n'était pas trop intrusif mais toujours utile, et nous pourrions apporter d'autres ajustements en fonction des retours.

Santé !

{{/isPost}}

---