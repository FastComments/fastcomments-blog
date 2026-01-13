---
[category:Features]

###### [postdate]
# [postlink]Support facile des extraits de code avec FastComments[/postlink]

Certains de nos clients ont des sites et des blogs liés au développement de logiciels. Dans ces communautés, il est courant de partager des extraits de code. Voici comment FastComments facilite cela.

{{#isPost}}

FastComments permet de partager du code simplement en le collant dans la zone de commentaires. Il peut être mélangé avec d'autres textes et images, et ne nécessite pas d'ajouter manuellement des balises "code"
pour formater le texte. Il suffit de coller !

Voici une démonstration rapide montrant son fonctionnement.

<video src="images/fc-code-snippet-demo.mp4" autoplay controls loop=true alt="Démonstration de partage d'extraits de code" title="Démonstration de partage d'extraits de code"></video>

### Implications de performance

L'ajout de cette fonctionnalité n'a ajouté qu'environ 150 octets au widget côté client, la majeure partie de la fonctionnalité étant gérée côté serveur. En fait, si vous regroupez cela avec les récentes fonctionnalités Markdown ajoutées, la taille du widget a en fait diminué avec ces nouvelles fonctionnalités !

### À noter

Si vous avez une communauté partageant fortement du code, vous devriez envisager d'augmenter la taille maximale des commentaires pour faciliter le partage des extraits de code. Cela se fait via l'onglet "Personnaliser"
du tableau de bord administrateur.

### Détection de code

Afin de maintenir la taille du widget côté client basse, nous allons uniquement détecter automatiquement le code collé pour les langages de type C et Python (Java, JavaScript, CSS, C++, par exemple) qui utilisent soit "{" soit des espaces pour le flux de contrôle.
Si vous utilisez couramment un langage qui n'est pas détecté automatiquement, contactez-nous.

Pour insérer manuellement un bloc de code, écrivez un commentaire comme : ```<code>(defun someLispCode(1, 2, 3))</code>```. Nous pouvons détecter automatiquement environ 150 langages.

### Migration des commentaires existants

Si vous souhaitez migrer vers FastComments et avez beaucoup de commentaires contenant des extraits de code que vous aimeriez formater correctement, <a href="https://fastcomments.com/auth/my-account/help" target="_blank">nous pouvons vous aider</a>.

### En conclusion

C'est tout ! Nous avons déployé cela à toutes les communautés en ligne sur FastComments.

Bon commentaire !

{{/isPost}}