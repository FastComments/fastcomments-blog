---
[category:Moderation]
[category:Tutorials]
###### [postdate]
# [postlink]Comment empêcher le spam dans vos commentaires[/postlink]

Il n'y a aucun moyen de lutter contre le spam à 100 %. Mais FastComments déploie un certain nombre de mesures pour aider.

{{#isPost}}

## Documentation pour l'Administrateur du Site

Une installation par défaut de FastComments a à la fois le filtrage de Spam et de Propreté activé.

Ces paramètres par défaut trouvent un équilibre entre la prévention du spam et le fait de ne pas être trop intrusif pour la plupart des communautés.

[Vous voudrez peut-être consulter le guide de modération](https://docs.fastcomments.com/guide-moderation.html).

## Comment ça Fonctionne

Notre filtre anti-spam utilise un [classificateur Naive Bayes](https://en.wikipedia.org/wiki/Naive_Bayes_classifier) pour identifier le spam.

Il est entraîné au fil du temps en fonction de ce que les administrateurs marquent comme spam ou non spam.

FastComments fonctionne dans une iframe sur votre site. Cela rend plus difficile pour les bots de spam automatisés de cibler votre section de commentaires. Cependant, s'ils le font
et que notre classificateur détermine que leurs commentaires sont "suspects", ils seront masqués pour vos utilisateurs. Comme tous les autres commentaires, ils sont également marqués comme
"nécessite une révision" dans la [page de modération](https://fastcomments.com/auth/my-account/moderate-comments) du tableau de bord.

Le filtrage de la grossièreté ne conduit cependant pas à des commentaires masqués par défaut. Il masquera simplement les "mauvais mots" avec des astérisques.

## Bloquer Complètement le Spam

Par défaut, FastComments permettra le spam, mais le masquera et le marquera pour révision.

Si vous souhaitez informer l'utilisateur que son commentaire a été détecté comme spam, et lui demander de le réviser, cela peut être fait dans [Paramètres de Modération](https://fastcomments.com/auth/my-account/moderate-comments/settings) 
en activant le paramètre `Bloquer le Spam`.

## Masquer les Commentaires Grossiers

Les commentaires grossiers peuvent être masqués en activant `Envoyer automatiquement les commentaires grossiers au Spam` dans [Paramètres de Modération](https://fastcomments.com/auth/my-account/moderate-comments/settings).

## Paramètres

Le filtrage de la grossièreté et du spam peut être activé ou désactivé individuellement dans la page [Paramètres de Modération](https://fastcomments.com/auth/my-account/moderate-comments/settings).

## Vérification des Commentaires

FastComments utilise un système de vérification où, par défaut, [les commentaires non vérifiés](https://docs.fastcomments.com/guide-comment-vote-verification.html#unverified-comments) sont marqués comme tels pour que tous les utilisateurs puissent les voir.

En permettant aux utilisateurs de commenter sans être complètement connectés, cela abaisse la barrière d'entrée pour participer à une discussion. L'étiquette non vérifiée peut être masquée via des règles de personnalisation.

Les commentaires non vérifiés sont affichés par défaut, mais ils peuvent être masqués jusqu'à ce qu'ils soient vérifiés par email, en activant `Approuver automatiquement seulement les commentaires vérifiés`.

Notez qu'avec la SSO, tous les commentaires sont toujours vérifiés. Si un utilisateur est connecté à une session vérifiée, ses commentaires seront également toujours vérifiés.

Les commentaires non vérifiés peuvent également être programmés pour suppression.

## Pour les Commentateurs

Si votre commentaire est détecté comme spam, vous verrez un message immédiatement. Cela est fait pour vous informer que le commentaire devra être révisé
avant d'apparaître aux autres. La détection de spam ne peut pas être 100 % précise, donc nous comprenons si vous ressentez un peu de frustration. Si votre commentaire est légitime, 
l'administrateur du site devrait être en mesure de le reconnaître et de marquer votre commentaire comme non-spam.

{{/isPost}}

---