---
[category:Features]
[category:Ratings & Reviews]
###### [postdate]
# [postlink]Afficher la répartition des résultats après avoir répondu aux questions[/postlink]

{{#unless isPost}}
FastComments permet maintenant de montrer aux utilisateurs une répartition agrégée de toutes les réponses après qu'ils ont répondu à une question d'évaluation ou d'enquête.
{{/unless}}

{{#isPost}}

### Quoi de Neuf

Lors de la collecte de retours via des évaluations par étoiles, NPS, évaluations J'aime/Pas J'aime, ou des questions à curseur, vous pouvez maintenant montrer aux utilisateurs une répartition des résultats agrégée immédiatement après qu'ils ont répondu.

Auparavant, les utilisateurs répondaient à une question et voyaient simplement leur sélection mise en avant. Désormais, avec le nouveau paramètre **Afficher la répartition des résultats après avoir répondu**, ils voient comment tout le monde sur cette page a répondu.

### À Quoi Cela Ressemble

Pour les **évaluations par étoiles**, la répartition montre la note moyenne avec des étoiles partiellement remplies, un graphique à barres de distribution par étoile avec des pourcentages, et le nombre total de réponses.

Pour les **questions NPS**, cela affiche le score NPS ainsi que les pourcentages de Promoteurs, Passifs et Détracteurs avec des barres codées par couleur.

Pour les **J'aime/Pas J'aime**, les utilisateurs voient la répartition en pourcentage entre les j'aime et les pas j'aime.

Pour les **questions à curseur**, la valeur moyenne et le nombre total de réponses sont affichés.

Les sous-questions obtiennent également leur propre répartition individuelle.

### Comment L'activer

1. Allez sur [Personnaliser l'UI](https://fastcomments.com/auth/my-account/customize-widget).
2. Modifiez votre règle de personnalisation (ou créez-en une nouvelle).
3. Sous les paramètres de la question, cochez **Afficher la répartition des résultats après avoir répondu**.
4. Enregistrez.

C'est tout. La répartition apparaîtra pour les utilisateurs sur cette page après qu'ils ont soumis leur réponse.

### Performance

Les données de répartition sont agrégées par page et mises en cache côté serveur, donc cela n'ajoute pas de charge significative. Lorsqu'un utilisateur soumet une nouvelle réponse, le cache est rafraîchi pour que la répartition reflète immédiatement les dernières données.

### Mode Sombre

La répartition prend totalement en charge le mode sombre. Lorsque votre site utilise un fond sombre, les barres, les étiquettes et les couleurs du texte s'adaptent automatiquement.

### En Conclusion

Cette fonctionnalité fournit aux utilisateurs une preuve sociale et un contexte immédiats après avoir répondu, ce qui peut augmenter l'engagement avec vos évaluations et enquêtes. Elle fonctionne avec les quatre types de questions et ne nécessite aucune modification de code pour l'activer.

Nous espérons que vous apprécierez cet ajout. Faites-nous savoir ci-dessous si vous avez des commentaires !

À bientôt !

{{/isPost}}

---