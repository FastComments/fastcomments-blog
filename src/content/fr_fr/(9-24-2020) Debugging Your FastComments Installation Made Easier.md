---
[category:Tutorials]
###### [postdate]
# [postlink]Déboguer votre Installation FastComments Devient Plus Facile[/postlink]

{{#unless isPost}}
Les commentaires ne s'affichent pas ? Les paramètres semblent ne pas être appliqués ? Comprendre cela vient de devenir beaucoup plus facile.
{{/unless}}

{{#isPost}}

### <i class="circle">!</i> Cet Article Contient du Jargon Technique

#### Quoi de Neuf

Chez <a href="https://fastcomments.com">FastComments</a>, nous venons de publier une extension de navigateur pour Google Chrome. Cette extension vous aidera à comprendre quelle configuration
le widget de commentaires reçoit ainsi que pourquoi il peut ne pas s'afficher.

Vous pouvez trouver l'extension ici : <a href="https://chrome.google.com/webstore/detail/fastcomments-debugger/cadggdemhfkjjghkdbfhonoccnplffjj" target="_blank">https://chrome.google.com/webstore/detail/fastcomments-debugger/cadggdemhfkjjghkdbfhonoccnplffjj</a>

#### Comment L'Utiliser

Si vous constatez que le widget de commentaires ne se charge pas, ou qu'une configuration que vous avez définie ne s'affiche pas, essayez d'installer <a href="https://chrome.google.com/webstore/detail/fastcomments-debugger/cadggdemhfkjjghkdbfhonoccnplffjj">l'extension</a>
et de l'ouvrir sur la page en question. Pour voir l'icône dans votre barre d'outils, vous devrez peut-être cliquer sur le morceau de puzzle en haut à droite pour la fixer comme indiqué :

<div class="text-center">
    <img src="images/fc-extension-pin.png" alt="Comment Épingler l'Extension" title="Comment Épingler l'Extension" class="lozad" />
</div>

L'extension peut aider à déboguer deux classifications d'erreurs. La première, si le widget n'est pas du tout inclus sur la page ou s'il y a une faute de frappe majeure dans le script.

La seconde est si une configuration semble ne pas prendre effet.

Pour déboguer les deux, vous commencez simplement par cliquer sur l'icône.

Si l'outil ne trouve pas le widget de commentaires sur la page, vous obtiendrez une grande erreur rouge :

<div class="text-center">
    <img src="images/fc-extension-embed-js-not-found.png" alt="Exemple Embed.js non trouvé" title="Exemple Embed.js non trouvé" class="lozad" />
</div>

Si une ou plusieurs instances du widget ont été trouvées, vous verrez leurs configurations affichées séparément :

<div class="text-center">
    <img src="images/fc-extension-multiple-instances.png" alt="Exemple de Configuration Multiple" title="Exemple de Configuration Multiple" class="lozad" />
</div>

De plus, le Débogueur FastComments affichera également des avertissements pour les pièges courants - comme le widget ne s'affichant pas en mode lecture seule si aucun commentaire n'est disponible.

#### Paramètres de l'Instance "Finale" ?

Vous pouvez voir que le débogueur affiche deux ensembles de configurations - l'un étiqueté "Transmis au Widget" et l'autre étiqueté "Final".

La configuration "Transmis au Widget" est, comme vous pouvez l'imaginer, la configuration que vous passez au widget. Certains valeurs sont implicitement transmises par embed.js comme l'URL ou le Titre de Page - et celles-ci sont incluses.

La configuration "Finale" est tout ce que le widget utilise pour se rendre. Cela peut signifier des valeurs auto-remplies (comme l'identifiant d'instance), ou <b>des valeurs provenant de la page d'administration de personnalisation du widget</b>.

#### Comment Cela Fonctionne

Le widget de commentaires stocke sa configuration à un endroit où le débogueur peut la trouver, puis le débogueur scanne la page actuelle sur laquelle vous vous trouvez pour des instances du widget et les charge en mémoire.

#### Quelles Informations Cette Extension Recueille-t-elle ?

Le FastComments Debug Tool ne téléphone pas à la maison ni ne communique avec des serveurs FastComments. En fait, le widget ne vérifiera même pas le contenu de la page sur laquelle vous vous trouvez
à moins que vous l'ouvriez.

#### En Conclusion

Nous espérons que la fourniture d'outils comme celui-ci facilite la configuration de FastComments pour tous les types de clients que nous avons. Faites-nous savoir dans la section des commentaires ci-dessous
comment cela a fonctionné pour vous.

Nous savons que dans certains cas, vous pourriez encore avoir besoin d'un coup de main - et pour cela, il y a toujours la <a href="https://fastcomments.com/auth/my-account/help" target="_blank">page de support client</a>.

À bientôt !

{{/isPost}}