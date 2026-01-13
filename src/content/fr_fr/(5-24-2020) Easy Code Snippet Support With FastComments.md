---
[category:Features]

###### [postdate]
# [postlink]Support facile des extraits de code avec FastComments[/postlink]

Certains de nos clients ont des sites et des blogs liés au développement logiciel. Dans ces communautés, il est courant de partager des extraits de code. Voici comment FastComments facilite cela.

{{#isPost}}

FastComments permet de partager du code simplement en le collant dans la zone de commentaires. Il peut être mélangé avec d'autres textes et images, et ne nécessite pas d'ajouter manuellement des balises "code" pour ajouter le formatage. Il suffit de coller !

Voici une rapide démo montrant cela en action.

<video src="images/fc-code-snippet-demo.mp4" autoplay controls loop=true alt="Démo de partage d'extraits de code" title="Démo de partage d'extraits de code"></video>

### Implications sur la performance

L'ajout de cette fonctionnalité a seulement ajouté ~150 octets au widget côté client, car la plupart des fonctionnalités sont gérées côté serveur. En fait, si vous regroupez cela avec les récentes fonctionnalités Markdown ajoutées, la taille du widget a en réalité diminué avec ces récentes fonctionnalités !

### Choses à noter

Si vous avez une communauté qui partage beaucoup de code, vous devriez envisager d'augmenter la taille maximale des commentaires pour faciliter le partage d'extraits de code. Cela se fait via l'onglet "Personnaliser" du tableau de bord administrateur.

### Détection de code

Afin de maintenir la taille du widget côté client réduite, nous ne détecterons automatiquement le code collé que pour les langages similaires à C et Python (Java, JavaScript, CSS, C++, par exemple) qui utilisent soit "{" soit des espaces pour le flux de contrôle. Si vous utilisez couramment un langage qui n'est pas détecté automatiquement, contactez-nous.

Pour insérer manuellement un bloc de code, écrivez un commentaire comme : ```<code>(defun someLispCode(1, 2, 3))</code>```. Nous pouvons détecter automatiquement environ 150 langages.

### Migration des commentaires existants

Si vous souhaitez migrer vers FastComments et avez beaucoup de commentaires contenant des extraits de code que vous aimeriez formater correctement, <a href="https://fastcomments.com/auth/my-account/help" target="_blank">nous pouvons vous aider</a>.

### En conclusion

C'est tout ! Nous avons déployé cela à toutes les communautés en ligne sur FastComments.

Bon commentaire !

{{/isPost}}