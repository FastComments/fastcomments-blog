---
[category:Features]
[category:Moderation]
###### [postdate]
# [postlink]Les langues utilisées dans les commentaires peuvent désormais être limitées[/postlink]

{{#unless isPost}}
Certaines communautés souhaitent restreindre les langues utilisées. Cela peut maintenant être fait avec FastComments.
{{/unless}}

{{#isPost}}

### Quoi de Neuf

FastComments a toujours essayé de supporter autant de langues et de régions que possible.

Cependant, certaines communautés souhaitent limiter les langues utilisées pour communiquer et écrire des commentaires.

Au lieu d'imposer cela comme une règle, et de potentiellement bannir des utilisateurs, cela peut désormais être configuré explicitement sur la plateforme.

### Comment le Configurer

Dans la même interface de personnalisation des widgets que vous connaissez probablement, vous pouvez désormais sélectionner une ou plusieurs langues dans lesquelles les commentaires peuvent être écrits.

La plateforme tentera, lors de la soumission d'un commentaire, de déterminer la langue du commentaire en temps réel. Si le niveau de confiance de la langue déterminée est
supérieur à 70 %, et qu'elle correspond à une langue autorisée, alors le commentaire est permis.

Si le commentaire écrit n'est pas dans une langue définie par votre configuration, un message d'erreur sera affiché à l'utilisateur dans sa propre langue.

### Impact pour les Développeurs

Cette configuration aura également un impact sur les commentaires sauvegardés via l'API.

Vous recevrez une erreur comme suit :

            status: 'failed',
            reason: `Le commentaire semble être dans l'une de ces langues : [es], mais seulement [en,fr] sont autorisées.`,
            code: 'language-not-allowed',
            translatedError: "Un message d'erreur dans la langue de l'utilisateur."

### En Conclusion

Comme pour toutes les grandes versions, nous sommes heureux d'avoir pu prendre le temps d'optimiser, de tester et de bien publier cette fonctionnalité. Faites-nous savoir
ci-dessous si vous découvrez des problèmes.

Santé !

{{/isPost}}

---