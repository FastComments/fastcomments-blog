---
[category:Features]

###### [postdate]
# [postlink]FastComments prend désormais en charge Markdown[/postlink]

Une expérience de commentaire plus riche est arrivée chez FastComments avec l'utilisation de Markdown !

{{#isPost}}

Markdown est un ensemble de conventions pour styliser du texte. Par exemple, pour créer un mot en gras, nous pourrions \*\*faire ceci\*\*.
Insérer des liens normaux signifie simplement coller l'URL brute, et les images fonctionnent comme avant.

Voici une feuille de triche Markdown, fournie par Github : <a href="https://enterprise.github.com/downloads/en/markdown-cheatsheet.pdf" target="_blank">https://enterprise.github.com/downloads/en/markdown-cheatsheet.pdf</a>.

### Quelle syntaxe Markdown FastComments prend-il en charge ?

Nous prenons en charge Markdown dans son intégralité, sauf les titres. Lorsque nous définissons un titre, nous le rendons simplement comme un texte ordinaire car cela perturbe le flux de la conversation. Les titres
sont destinés à des contenus comme des articles de blog et des documents - pas aux conversations.

FastComments a toujours pris en charge les images via la syntaxe [img]...[/img]. Cela continuera d'être pris en charge car c'est plus facile à comprendre que celle de Markdown.

### Mélanger le contenu

Un seul commentaire peut contenir toutes les formes de mise en forme - markdown, liens, images, extraits de code et tableaux.

### Éviter les attaques XSF/XSS

Auparavant, FastComments envoyait du texte brut sur le réseau et le analysait sur le client. Maintenant, du HTML est envoyé sur le réseau, et nous maintenons deux versions de chaque commentaire
dans notre base de données pour prendre en charge des fonctionnalités comme l'édition des commentaires.

L'envoi de HTML directement dans les commentaires comporte des risques - donc tous les commentaires générés sont analysés et nettoyés pour prévenir les attaques par site croisé et par cadre croisé.

### Exportations de données

Lorsque vous exportez des commentaires, vous obtiendrez la version que l'utilisateur a vue lorsqu'il a tapé son commentaire. Si vous souhaitez obtenir le HTML brut, contactez-nous.

### Préoccupations de performance

L'ajout de fonctionnalités a tendance à ralentir les choses. Ce n'est pas ce que nous voulons faire chez FastComments.
Ajouter cette fonctionnalité a **réduit** la taille de notre widget côté client de ~400 octets - de 9,53 ko à 9,12 ko - ce qui signifie des chargements de page plus rapides.

Bien qu'en théorie, cette fonctionnalité pourrait ralentir le mécanisme de sauvegarde des commentaires, nous n'avons constaté aucune dégradation des performances et comme toujours, nous surveillons nos API.

### Comment l'obtenir ?

La prise en charge de Markdown a été déployée automatiquement à tous nos clients. Vous ne devriez pas voir trop de changements dans le contenu publié sur votre site - sauf maintenant les utilisateurs peuvent mettre en gras, souligner et réaliser des choses élégantes
comme créer des tableaux simples.

Comme pour toutes les sorties de fonctionnalités, nous attendons vos retours, et bien que nous ayons beaucoup de tests automatisés... si vous voyez des problèmes - faites-le nous savoir !

Bon commentaire.

{{/isPost}}

---