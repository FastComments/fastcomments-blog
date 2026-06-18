---
[category:Features]
[category:UI & Customization]
###### [postdate]
# [postlink]Intégrer YouTube, SoundCloud, et plus dans les commentaires[/postlink]

{{#unless isPost}}
Les commentateurs peuvent maintenant coller un code d'intégration et faire en sorte que la vidéo ou le lecteur s'affiche directement dans le commentaire. C'est désactivé par défaut, activé par site, et restreint aux fournisseurs de confiance.
{{/unless}}

{{#isPost}}

### Quoi de Neuf

Les gens adorent partager une vidéo ou un morceau dans une discussion. Jusqu'à présent, coller un code d'intégration YouTube ou SoundCloud dans un commentaire ne faisait pas grand-chose. Le `<iframe>` brut était supprimé pour des raisons de sécurité, ou il était entouré comme un bloc de code.

Vous pouvez maintenant activer les intégrations multimédias pour votre site. Quand c'est activé, un commentateur peut coller le code d'intégration directement depuis le fournisseur et il s'affiche en ligne, comme cela le ferait sur n'importe quelle autre page.

Voici le type de snippet que les gens copient d'un bouton "Partager" ou "Intégrer" :

<div class="code"><iframe width="560" height="315" src="https://www.youtube.com/embed/Wfc0Tc12-t8" title="Lecteur vidéo YouTube" frameborder="0" allowfullscreen></iframe></div>

Collez cela dans un commentaire avec les intégrations activées et vous obtenez le lecteur réel.

### Fournisseurs de Confiance Seulement

Laisser des iframes arbitraires sur votre page constitue un véritable risque de sécurité, donc nous n'avons pas simplement ouvert la porte. Les intégrations sont restreintes à une liste intégrée de fournisseurs de confiance, y compris YouTube, Vimeo, SoundCloud, Spotify, Bandcamp, Twitch, et Dailymotion.

Si un commentaire contient un iframe pointant ailleurs, l'iframe est supprimé lorsque le commentaire est enregistré. La même sanitation qui protège contre les balises `<script>` et les astuces `onload=` s'applique à chaque commentaire. Les intégrations ne sont qu'une autorisation supplémentaire, soigneusement définie en plus de cela.

### Ajouter Vos Propres Fournisseurs

Si vous utilisez un fournisseur qui n'est pas sur la liste intégrée, vous pouvez l'autoriser. Il existe un champ "Domaines d'intégration supplémentaires" où vous listez des noms d'hôtes supplémentaires à faire confiance, en plus des fournisseurs intégrés.

La correspondance se fait par nom d'hôte exact, donc ajoutez l'hôte complet à partir duquel l'intégration se charge, par exemple `player.example.com`. Tout ce que vous ne listez pas reste bloqué.

### Comment L'Activer

C'est un paramètre par site sur la page de personnalisation du widget, juste à côté des options de téléchargement d'images. Cochez "Autoriser les intégrations multimédias ?" et enregistrez. Aucun code ou redéploiement nécessaire.

Comme pour nos autres paramètres de contenu, cela est par règle de personnalisation, donc vous pouvez activer les intégrations sur un site ou un ensemble de pages et les laisser désactivées ailleurs.

### Fonctionne dans les Deux Éditeurs

Le collage fonctionne aussi bien dans la boîte de commentaire plain que dans l'éditeur WYSIWYG. Dans la boîte plain, le code d'intégration est inséré en tant que texte et devient un lecteur à la soumission. Dans l'éditeur WYSIWYG, l'intégration apparaît immédiatement comme un bloc, avec un petit bouton de suppression dans le coin pour qu'il soit facile de le supprimer si c'était une erreur.

### En Conclusion

Les intégrations sont désactivées par défaut, donc rien ne change pour votre site à moins que vous ne décidiez de les activer. Lorsque vous le faites, vos commentateurs obtiennent une manière plus agréable de partager des vidéos et des morceaux, et vous conservez les mêmes garanties de sécurité que vous aviez déjà.

Activez-le, collez une vidéo, et faites-nous savoir ce que vous en pensez ci-dessous.

À bientôt !

{{/isPost}}

---