---
[category:Features]

###### [postdate]
# [postlink]FastComments prend maintenant en charge Markdown[/postlink]

Une expérience de commentaire plus riche est arrivée sur FastComments grâce à l'utilisation de Markdown !

{{#isPost}}

Markdown est un ensemble de conventions pour styliser le texte. Par exemple, pour créer un mot en gras, nous pourrions \*\*faire ceci\*\*.
Insérer des liens normaux signifie simplement coller l'URL brute, et les images fonctionnent comme auparavant.

Voici une feuille de triche Markdown, fournie par Github : <a href="https://enterprise.github.com/downloads/en/markdown-cheatsheet.pdf" target="_blank">https://enterprise.github.com/downloads/en/markdown-cheatsheet.pdf</a>.

### Quelle syntaxe Markdown FastComments prend-il en charge ?

Nous prenons pleinement en charge Markdown, sauf pour les titres. Lorsque nous définissons un titre, nous le rendons simplement en tant que texte régulier car cela distrait du flux de la conversation. Les titres
sont destinés à des contenus comme des articles de blog et des documents - pas à des conversations.

FastComments a toujours pris en charge les images via la syntaxe [img]...[/img]. Cela continuera d'être pris en charge car c'est plus facile à comprendre que celle de Markdown.

### Mélanger les contenus

Un seul commentaire peut contenir toutes les formes de formatage - markdown, liens, images, extraits de code et tableaux.

### Éviter les attaques XSF/XSS

Auparavant, FastComments envoyait du texte brut sur le réseau et le analysait côté client. Maintenant, le HTML est envoyé sur le réseau, et nous maintenons deux versions de chaque commentaire
dans notre base de données pour soutenir des fonctionnalités comme l'édition de commentaires.

L'envoi direct de HTML aux commentaires comporte ses risques - donc tous les commentaires générés sont analysés et nettoyés pour prévenir les attaques intersites et inter-frames.

### Exportations de données

Lors de l'exportation des commentaires, vous obtiendrez la version que l'utilisateur a vue lorsqu'il a tapé son commentaire. Si vous souhaitez obtenir le HTML brut, contactez-nous.

### Préoccupations de performance

L'accumulation de fonctionnalités a tendance à ralentir les choses. Ce n'est pas ce que nous voulons faire sur FastComments.
Ajouter cette fonctionnalité a **réduit** la taille de notre widget côté client d'environ 400 octets - de 9,53 Ko à 9,12 Ko - signifiant des chargements de page plus rapides.

Bien que théoriquement cette fonctionnalité puisse ralentir le mécanisme de sauvegarde des commentaires, nous n'avons constaté aucune dégradation de performance et surveillons toujours nos APIs.

### Comment l'obtenir ?

Le support Markdown a été déployé automatiquement à tous nos clients. Vous ne devriez pas voir trop de changements dans le contenu publié sur votre site - sauf que maintenant, les utilisateurs peuvent mettre en gras, souligner et faire des choses sympas 
comme créer des tableaux simples.

Comme pour toutes les versions de fonctionnalités, nous attendons vos retours et bien que nous ayons beaucoup de tests automatisés... si vous voyez des problèmes - faites-le nous savoir !

Bon commentaire.

{{/isPost}}

---