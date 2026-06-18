---
[category:Features]  
[category:UI & Customization]  
###### [postdate]  
# [postlink]Intégrez YouTube, SoundCloud, et plus dans les commentaires[/postlink]  

{{#unless isPost}}  
Les commentateurs peuvent désormais coller un code d'intégration et faire en sorte que la vidéo ou le lecteur s'affiche directement dans le commentaire. C'est désactivé par défaut, à activer par site, et restreint aux fournisseurs de confiance.  
{{/unless}}  

{{#isPost}}  

### Quoi de Neuf  

Les gens adorent partager une vidéo ou un morceau dans une discussion. Jusqu'à présent, coller un code d'intégration YouTube ou SoundCloud dans un commentaire n'était pas très efficace. La balise brute `<iframe>` était supprimée pour des raisons de sécurité, ou elle était encapsulée en tant que bloc de code.  

Vous pouvez désormais activer les intégrations multimédias pour votre site. Quand c'est activé, un commentateur peut coller le code d'intégration directement depuis le fournisseur et il s'affiche en ligne, de la même manière que sur n'importe quelle autre page.  

Voici le genre de snippet que les gens copient depuis un bouton "Partager" ou "Intégrer" :  

<div class="code"><iframe width="560" height="315" src="https://www.youtube.com/embed/Wfc0Tc12-t8" title="Lecteur vidéo YouTube" frameborder="0" allowfullscreen></iframe></div>  

Collez cela dans un commentaire avec les intégrations activées et vous obtenez le lecteur réel.  

### Fournisseurs de Confiance Uniquement  

Permettre des iframes arbitraires sur votre page représente un véritable risque de sécurité, nous n'avons donc pas simplement ouvert les vannes. Les intégrations sont restreintes à une liste intégrée de fournisseurs de confiance, y compris YouTube, Vimeo, SoundCloud, Spotify, Bandcamp, Twitch, et Dailymotion.  

Si un commentaire contient un iframe pointant vers un autre endroit, l'iframe est supprimé lorsque le commentaire est enregistré. La même désinfection qui protège contre les balises `<script>` et les astuces `onload=` s'applique toujours à chaque commentaire. Les intégrations ne sont qu'une autorisation supplémentaire, soigneusement limitée en plus de cela.  

### Ajouter Vos Propres Fournisseurs  

Si vous utilisez un fournisseur qui n'est pas sur la liste intégrée, vous pouvez l'autoriser. Il y a un champ "Domaines complémentaires d'intégration" où vous pouvez lister des noms d'hôte supplémentaires de confiance, en plus des fournisseurs intégrés.  

La correspondance se fait par nom d'hôte exact, donc ajoutez l'hôte complet à partir duquel l'intégration se charge, par exemple `player.example.com`. Tout ce que vous ne listez pas reste bloqué.  

### Comment L'activer  

C'est un paramètre par site sur la page de personnalisation du widget, juste à côté des options de téléchargement d'image. Cochez "Autoriser les intégrations multimédias ?" et enregistrez. Aucune modification de code ou redéploiement n'est nécessaire.  

Comme nos autres paramètres de contenu, ceci est par règle de personnalisation, donc vous pouvez activer les intégrations sur un site ou un ensemble de pages et les laisser désactivées ailleurs.  

### Fonctionne dans les Deux Éditeurs  

Le collage fonctionne à la fois dans la boîte de commentaire simple et dans l'éditeur WYSIWYG. Dans la boîte simple, le code d'intégration entre comme du texte et devient un lecteur lors de la soumission. Dans l'éditeur WYSIWYG, l'intégration apparaît immédiatement comme un bloc, avec un petit bouton de suppression dans le coin pour le supprimer facilement si c'était une erreur.  

### En Conclusion  

Les intégrations sont désactivées par défaut, donc rien ne change pour votre site à moins que vous ne décidiez de les activer. Quand vous le faites, vos commentateurs ont un moyen plus agréable de partager des vidéos et des morceaux, et vous gardez les mêmes garanties de sécurité que vous aviez déjà.  

Activez-le, collez une vidéo, et faites-nous savoir ce que vous en pensez ci-dessous.  

À bientôt !  

{{/isPost}}  

---