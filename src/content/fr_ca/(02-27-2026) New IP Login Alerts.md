---
[category:Features]
[category:Accounts & Security]

###### [postdate]
# [postlink]Nouvelles alertes de connexion depuis une nouvelle IP[/postlink]

{{#unless isPost}}
FastComments envoie maintenant un courriel d'alerte de sécurité lorsqu'une connexion est détectée depuis une nouvelle adresse IP, incluant l'emplacement approximatif, pour aider les utilisateurs à détecter un accès non autorisé.
{{/unless}}

{{#isPost}}

### Quoi de neuf

FastComments envoie maintenant automatiquement un courriel d'alerte de sécurité lorsque nous détectons une connexion à votre compte depuis une adresse IP que nous n'avons pas vue auparavant. Le courriel comprend :

- L'**emplacement approximatif** (ville et pays) de la connexion.
- L'**adresse IP** utilisée.
- Le **moment** de la connexion.
- Un lien direct pour **changer votre mot de passe** si la connexion n'était pas de vous.

Cela s'applique à tous les moyens de connexion : connexion par mot de passe, liens magiques et flux d'authentification à deux facteurs.

### Confidentialité

Nous ne stockons pas votre adresse IP brute. Nous ne conservons qu'une forme obfusquée à des fins de comparaison de sécurité. L'emplacement approximatif est déterminé au moment de la connexion et n'est pas stocké.

**Votre IP n'est pas partagée avec un tiers** pour déterminer l'emplacement. Nous hébergeons notre propre service qui extrait l'emplacement approximatif d'une copie de la base de données MaxMind (mise à jour hebdomadairement).

### Quand les alertes sont envoyées

Une alerte est envoyée lorsque **toutes** les conditions suivantes sont vraies :

- La connexion a réussi.
- Ce n'est pas la première connexion de l'utilisateur.
- L'adresse IP n'a pas été vue lors d'une connexion réussie précédente pour ce compte.

Cela signifie que vous ne recevrez pas d'alerte lors de votre toute première connexion, et vous ne recevrez pas d'alertes répétées pour la même IP.

### En conclusion

C'est une étape de plus pour garder votre compte en sécurité. Si vous recevez une alerte que vous ne reconnaissez pas, nous vous recommandons de changer immédiatement votre mot de passe.

Faites-nous savoir ci-dessous si vous avez des commentaires !

Bien à vous !

{{/isPost}}