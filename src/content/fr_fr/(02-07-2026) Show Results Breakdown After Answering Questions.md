---
[category:Features]
[category:Ratings & Reviews]
###### [postdate]
# [postlink]Afficher la Répartition des Résultats Après Avoir Répondu aux Questions[/postlink]

{{#unless isPost}}
FastComments permet désormais de montrer aux utilisateurs une répartition agrégée de toutes les réponses après qu'ils aient répondu à une question d'évaluation ou de sondage.
{{/unless}}

{{#isPost}}

### Quoi de Neuf

Lorsque vous recueillez des commentaires via des évaluations par étoiles, NPS, des pouces en l'air/en bas, ou des questions à glissière, vous pouvez maintenant montrer aux utilisateurs une répartition des résultats agrégée immédiatement après qu'ils aient répondu.

Auparavant, les utilisateurs répondaient à une question et voyaient simplement leur sélection mise en évidence. Maintenant, avec le nouveau paramètre **Afficher la Répartition des Résultats Après Avoir Répondu**, ils peuvent voir comment tout le monde d'autre sur cette page a répondu.

### À Quoi Cela Ressemble

Pour les **évaluations par étoiles**, la répartition montre la note moyenne avec des étoiles partiellement remplies, un graphique en barres de distribution par étoile avec des pourcentages, et le total des réponses.

Pour les **questions NPS**, elle affiche le score NPS ainsi que les pourcentages de Promoteurs, Passifs et Détracteurs avec des barres codées par couleur.

Pour les **pouces en l'air/en bas**, les utilisateurs voient la répartition en pourcentage entre pouces en l'air et pouces en bas.

Pour les **questions à glissière**, la valeur moyenne et le total des réponses sont affichés.

Chaque sous-question obtient également sa propre répartition individuelle.

### Comment L'activer

1. Allez sur [Personnaliser l'UI](https://fastcomments.com/auth/my-account/customize-widget).
2. Modifiez votre règle de personnalisation (ou créez-en une nouvelle).
3. Sous les paramètres de la question, cochez **Afficher la Répartition des Résultats Après Avoir Répondu**.
4. Enregistrez.

C'est tout. La répartition apparaîtra pour les utilisateurs sur cette page après qu'ils aient soumis leur réponse.

### Performance

Les données de répartition sont agrégées par page et mises en cache côté serveur, donc cela n'ajoute pas une charge significative. Lorsqu'un utilisateur soumet une nouvelle réponse, le cache est actualisé pour que la répartition reflète immédiatement les dernières données.

### Mode Sombre

La répartition prend entièrement en charge le mode sombre. Lorsque votre site utilise un arrière-plan sombre, les barres, les étiquettes et les couleurs de texte s'adaptent automatiquement.

### En Conclusion

Cette fonctionnalité offre aux utilisateurs une preuve sociale immédiate et du contexte après avoir répondu, ce qui peut augmenter l'engagement avec vos évaluations et sondages. Elle fonctionne avec les quatre types de questions et ne nécessite aucun changement de code pour être activée.

Nous espérons que vous apprécierez cet ajout. Faites-nous savoir ci-dessous si vous avez des commentaires !

Cheers!

{{/isPost}}

---