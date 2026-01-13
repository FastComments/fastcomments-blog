---
[category:Features]
[category:Moderation]
###### [postdate]
# [postlink]Les langues utilisées dans les commentaires peuvent désormais être limitées[/postlink]

{{#unless isPost}}
Certaines communautés souhaitent restreindre les langues utilisées. Cela peut désormais être fait avec FastComments.
{{/unless}}

{{#isPost}}

### Quoi de neuf

FastComments a toujours essayé de prendre en charge autant de langues et de régions que possible.

Cependant, certaines communautés souhaitent limiter les langues utilisées pour communiquer et écrire des commentaires.

Au lieu d’imposer cela comme une règle, et potentiellement de bannir des utilisateurs, cela peut désormais être configuré explicitement sur la plateforme.

### Comment configurer cela

Dans la même interface de personnalisation de widget que vous connaissez probablement, vous pouvez désormais sélectionner une ou plusieurs langues dans lesquelles les commentaires peuvent être écrits.

La plateforme tentera, lors de la soumission d'un commentaire, de déterminer la langue du commentaire en temps réel. Si la confiance dans la langue déterminée est
supérieure à 70 %, et qu'elle correspond à une langue autorisée, alors le commentaire est autorisé.

Si le commentaire écrit n'est pas dans une langue définie par votre configuration, l'utilisateur verra un message d'erreur dans sa propre langue.

### Impact sur les développeurs

Cette configuration aura également un impact sur les commentaires enregistrés via l'API.

Vous recevrez une erreur comme suit :

            status: 'failed',
            reason: `Le commentaire semble être dans l'une de ces langues : [es], mais seules [en,fr] sont autorisées.`,
            code: 'language-not-allowed',
            translatedError: "Un message d'erreur dans la langue de l'utilisateur."

### En conclusion

Comme pour toutes les grandes versions, nous sommes heureux d'avoir pu prendre le temps d'optimiser, de tester et de publier correctement cette fonctionnalité. Faites-le nous savoir
ci-dessous si vous découvrez des problèmes.

Cheers!

{{/isPost}}

---