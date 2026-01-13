---
[category:Tutoriels]
###### [postdate]
# [postlink]Débogage de votre installation FastComments facilité[/postlink]

{{#unless isPost}}
Les commentaires ne s’affichent pas ? Les paramètres semblent ne pas s’appliquer ? Trouver cela vient de devenir beaucoup plus facile.
{{/unless}}

{{#isPost}}

### <i class="circle">!</i> Cet article contient un jargon technique

#### Quoi de neuf

Chez <a href="https://fastcomments.com">FastComments</a>, nous venons de lancer une extension pour le navigateur Google Chrome. Cette extension vous aidera à comprendre quelle configuration
le widget de commentaire reçoit ainsi que pourquoi il peut ne pas s'afficher.

Vous pouvez trouver l'extension ici : <a href="https://chrome.google.com/webstore/detail/fastcomments-debugger/cadggdemhfkjjghkdbfhonoccnplffjj" target="_blank">https://chrome.google.com/webstore/detail/fastcomments-debugger/cadggdemhfkjjghkdbfhonoccnplffjj</a>

#### Comment l'utiliser

Si vous constatez que le widget de commentaire ne se charge pas, ou que certaines configurations que vous avez définies ne s'affichent pas, essayez d’installer <a href="https://chrome.google.com/webstore/detail/fastcomments-debugger/cadggdemhfkjjghkdbfhonoccnplffjj">l'extension</a>
et de l'ouvrir sur la page en question. Pour voir l'icône dans votre barre d'outils, vous devrez peut-être cliquer sur la pièce de puzzle en haut à droite pour l’épingler comme montré :

<div class="text-center">
    <img src="images/fc-extension-pin.png" alt="Comment épingler l'extension" title="Comment épingler l'extension" class="lozad" />
</div>

L'extension peut aider à déboguer deux classifications d’erreurs. La première, si le widget n'est pas du tout inclus sur la page ou s'il y a une faute de frappe majeure dans le script.

La seconde est si certaines configurations semblent ne pas prendre effet.

Pour déboguer les deux, il suffit de cliquer sur l'icône.

Si l'outil ne trouve pas le widget de commentaire sur la page, vous recevrez une grande erreur rouge :

<div class="text-center">
    <img src="images/fc-extension-embed-js-not-found.png" alt="Exemple de Embed.js non trouvé" title="Exemple de Embed.js non trouvé" class="lozad" />
</div>

Si une ou plusieurs instances du widget ont été trouvées, vous verrez leurs configurations affichées séparément :

<div class="text-center">
    <img src="images/fc-extension-multiple-instances.png" alt="Exemple de Configuration Multiple" title="Exemple de Configuration Multiple" class="lozad" />
</div>

De plus, le Débogueur FastComments affichera également des avertissements pour des pièges courants - comme le fait que le widget ne s'affiche pas en mode lecture seule si aucun commentaire n'est disponible.

#### Réglages de l'instance "Finale" ?

Vous pouvez voir que le débogueur montre deux ensembles de configurations - l'un étiqueté "Transmis au widget" et l'autre étiqueté "Final".

La configuration "Transmise au widget" est, comme vous pouvez l'imaginer, la configuration que vous passez au widget. Certaines valeurs sont implicitement transmises par embed.js, comme l'URL ou le Titre de la Page - et celles-ci sont incluses.

La configuration "Finale" est tout ce que le widget utilise pour se rendre. Cela peut signifier des valeurs auto-remplies (comme l'identifiant d'instance), ou <b>des valeurs de la page d'administration de personnalisation du widget</b>.

#### Comment cela fonctionne

Le widget de commentaire stocke sa configuration dans un endroit où le débogueur peut la trouver, puis le débogueur analyse la page actuelle sur laquelle vous êtes pour trouver des instances du widget et les charge en mémoire.

#### Quelles informations cette extension collecte-t-elle ?

L'outil de débogage FastComments ne communique pas avec les serveurs FastComments. En fait, le widget ne vérifiera même pas le contenu de la page sur laquelle vous êtes
à moins que vous l'ouvriez.

#### En conclusion

Nous espérons que le fait de fournir plus d'outils comme celui-ci rendra la mise en place de FastComments plus facile pour chaque type de client que nous avons. Faites-nous savoir dans la section des commentaires ci-dessous
comment cela a fonctionné pour vous.

Nous savons que dans certains cas, vous aurez encore peut-être besoin d’un coup de main - et pour cela, il y a toujours la <a href="https://fastcomments.com/auth/my-account/help" target="_blank">page de support client</a>.

À la vôtre !

{{/isPost}}

---