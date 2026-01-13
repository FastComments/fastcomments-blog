---
[category:Modération]
[category:Tutoriels]
###### [postdate]
# [postlink]Comment prévenir le spam dans vos commentaires[/postlink]

Il n'y a aucun moyen de lutter contre le spam à 100 %. Mais FastComments déploie un certain nombre de mesures pour aider.

{{#isPost}}

## Documentation pour les administrateurs du site

Une installation par défaut de FastComments a à la fois le filtrage du spam et des grossièretés activés.

Ces paramètres par défaut trouvent un équilibre entre la prévention du spam et le fait de ne pas être trop intrusif pour la plupart des communautés.

[Vous voudrez peut-être consulter le guide de modération](https://docs.fastcomments.com/guide-moderation.html).

## Comment cela fonctionne

Notre filtre anti-spam utilise un [classificateur Naive Bayes](https://en.wikipedia.org/wiki/Naive_Bayes_classifier) pour identifier le spam.

Il est entraîné au fil du temps en fonction de ce que les administrateurs marquent comme spam et non spam.

FastComments fonctionne dans une iframe sur votre site. Cela rend plus difficile pour les bots de spam automatisés de cibler votre section de commentaires. Cependant, s'ils le font
et que notre classificateur détermine que leurs commentaires sont "spammés", ils seront cachés à vos utilisateurs. Comme tous les autres commentaires, ils sont également marqués comme
"nécessite une révision" sur la [page de modération](https://fastcomments.com/auth/my-account/moderate-comments) du tableau de bord.

Le filtrage de grossièretés, cependant, ne conduit pas par défaut à des commentaires cachés. Il masquera simplement les "mots inappropriés" avec des astérisques.

## Bloquer complètement le spam

Par défaut, FastComments permettra le spam, mais le cachera et le marquera pour révision.

Si vous souhaitez informer l'utilisateur que son commentaire a été détecté comme spam et lui demander de le réviser, cela peut se faire dans les [Paramètres de modération](https://fastcomments.com/auth/my-account/moderate-comments/settings) 
en activant l'option `Bloquer le spam`.

## Cacher les commentaires profanes

Les commentaires profanes peuvent être cachés en activant `Envoyer automatiquement les commentaires profanes au spam` dans les [Paramètres de modération](https://fastcomments.com/auth/my-account/moderate-comments/settings).

## Paramètres

Le filtrage des grossièretés et du spam peut être désactivé individuellement dans la page des [Paramètres de modération](https://fastcomments.com/auth/my-account/moderate-comments/settings).

## Vérification des commentaires

FastComments emploie un système de vérification où, par défaut, les [commentaires non vérifiés](https://docs.fastcomments.com/guide-comment-vote-verification.html#unverified-comments) sont marqués comme tels pour que tous les utilisateurs puissent les voir.

En permettant aux utilisateurs de commenter sans être complètement connectés, cela abaisse la barrière à l'entrée pour entrer dans une discussion. L'étiquette non vérifiée peut être cachée via des règles de personnalisation.

Les commentaires non vérifiés sont affichés par défaut, mais ils peuvent être cachés jusqu'à vérification par e-mail, en activant `N'approuver que les commentaires vérifiés automatiquement`.

Notez qu'avec SSO, tous les commentaires sont toujours vérifiés. Si un utilisateur est connecté dans une session vérifiée, ses commentaires seront également toujours vérifiés.

Les commentaires non vérifiés peuvent également être programmés pour suppression.

## Pour les commentateurs

Si votre commentaire est détecté comme spam, vous verrez un message immédiatement. Cela sert à vous informer que le commentaire devra être révisé
avant d'être visible par d'autres. La détection de spam ne peut pas être précise à 100 %, donc nous comprenons si vous ressentez un certain frustration. Si votre commentaire est légitime, l'administrateur du site devrait être en mesure de le reconnaître et de marquer votre commentaire comme non-spam.

{{/isPost}}

---