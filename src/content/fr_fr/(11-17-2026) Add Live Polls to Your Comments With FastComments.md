[category:Features]
[category:UI & Customization]
[category:Announcements]

###### [postdate]
# [postlink]Ajoutez des sondages en direct à vos commentaires avec FastComments[/postlink]

{{#unless isPost}}
Les commentaires disposent désormais de sondages en direct ! Les lecteurs votent directement dans le fil, les résultats se mettent à jour en temps réel pour tous les visiteurs de la page, et les sondages fonctionnent à la fois dans le widget web et dans nos SDK iOS, Android et React Native.
{{/unless}}

{{#isPost}}

### Nouveautés

Cette version ajoute les **Sondages en direct**. Un sondage est attaché à un commentaire et s’affiche à l’intérieur. Les lecteurs cliquent sur une option pour voter,
sans quitter le fil, et les résultats se mettent à jour en direct pour tous les visiteurs de la page au fur et à mesure que les votes arrivent. Aucun rafraîchissement, et
personne n’a besoin de comptabiliser les réponses à la main.

<img src="images/fc-live-polls.png" alt="Un commentaire avec un sondage demandant quel format devrait avoir la prochaine rencontre, affichant En personne à 34 %, En ligne à 21 % et Hybride à 45 %, avec 53 réponses" title="Sondages en direct" class="lozad" />

Comme le sondage est un commentaire, la conversation reste attachée à celui‑ci. Les gens votent, puis répondent pour expliquer pourquoi.

### Créer un sondage

Lorsque les sondages sont activés, l’éditeur de commentaire affiche un bouton sondage. En cliquant dessus, un éditeur de sondage s’ouvre sous le champ de texte, où vous
définissez :

- **La question**, jusqu’à 200 caractères.
- **Les options**, de 2 à 10.
- **Quand il se ferme** : jamais, ou après 1 jour, 3 jours ou 1 semaine. Un sondage fermé affiche ses résultats finaux et n’accepte plus de votes.
- **Confidentialité** : anonyme, visible par les administrateurs, ou public.
- **Exiger un vote pour voir les résultats**, ce qui garde les résultats cachés à chaque visiteur jusqu’à ce qu’il vote ou que le sondage se ferme.

Ensuite, rédigez votre commentaire et publiez‑le comme d’habitude. Les sondages fonctionnent sur les nouveaux commentaires et sur les réponses.

### Voter

Chaque personne obtient un vote par sondage, et peut le modifier tant que le sondage est ouvert. À moins que le sondage n’exige un vote préalable,
les lecteurs peuvent cliquer sur **Afficher les résultats** pour voir la situation avant de choisir.

La confidentialité est définie par sondage et affichée juste sous les options, afin que les votants sachent qui peut voir leur vote avant de le soumettre.
Les sondages anonymes (par défaut) n’affichent que les totaux, et personne, même les administrateurs, ne peut voir qui a voté pour quoi. Sur les sondages visibles par les administrateurs,
les admins et modérateurs peuvent ouvrir **Voir qui a voté**. Sur les sondages publics, tout le monde peut le faire.

### Activation

Les sondages sont désactivés par défaut. Ouvrez votre <a href="https://fastcomments.com/auth/my-account/customize-widget" target="_blank">Personnalisation du widget</a>,
cochez **Activer les sondages**, et choisissez qui peut les créer :

- **Admins/Modérateurs uniquement** (par défaut), pour quand vous voulez gérer les sondages vous‑même.
- **Tout le monde**, pour laisser votre communauté interroger les uns les autres.

Le vote nécessite par défaut un utilisateur connecté. Cochez **Autoriser les votes anonymes aux sondages** pour laisser n’importe qui voter. Pour garder cela équitable,
les votes anonymes sont limités à trois par adresse IP, par sondage, par heure.

Comme toute règle de personnalisation, cela peut s’appliquer à l’ensemble de votre site, à un domaine, ou à une page unique.

### Notifications

L’auteur d’un sondage reçoit des notifications au fur et à mesure que les réponses arrivent : une notification, groupée lorsque de nombreuses personnes
votent en même temps, et un e‑mail quotidien lorsque le sondage a reçu de nouvelles réponses ce jour‑là. Seul le premier vote compte comme réponse, donc
un changement d’avis n’envoie pas de notification supplémentaire. Les notifications respectent la confidentialité du sondage, ainsi un sondage anonyme
indique seulement le nombre de nouvelles réponses, jamais qui les a fournies.

### SDK mobiles natifs

Les sondages ne se limitent pas au widget web. Nos SDK natifs affichent la carte du sondage, l’éditeur, les résultats en direct et la liste des votants avec de vrais composants natifs, et ils lisent les mêmes paramètres du widget depuis votre tableau de bord. Activez les sondages une fois
et ils apparaissent sur votre site et dans vos applications.

- **iOS** : <a href="https://github.com/FastComments/fastcomments-ios" target="_blank">fastcomments-ios</a> 2.1.0, via Swift Package Manager.
- **Android** : <a href="https://github.com/FastComments/fastcomments-android" target="_blank">fastcomments-android</a> 2.1.0, sous forme de `com.fastcomments:android-sdk:2.1.0`.
- **React Native** : <a href="https://www.npmjs.com/package/fastcomments-react-native-sdk" target="_blank">fastcomments-react-native-sdk</a> 5.3.0, sur NPM.

Les SDK iOS et Android peuvent également publier un sondage depuis votre propre interface. Sur iOS, cela ressemble à ceci :

<div class="code">let draft = PollDraft(question: "Where should we eat?", options: ["Tacos", "Ramen"], closesDays: 1)
if draft.validate() == nil {
    try await sdk.postComment(text: "Lunch vote", poll: draft.toInput())
}</div>

Les READMEs pour <a href="https://github.com/FastComments/fastcomments-ios#polls" target="_blank">iOS</a> et
<a href="https://github.com/FastComments/fastcomments-android#polls" target="_blank">Android</a>, ainsi que le
<a href="https://github.com/FastComments/fastcomments-react-native-sdk/blob/main/CHANGELOG.md" target="_blank">changelog React Native</a>,
détaillent les spécificités, y compris comment re‑styler les couleurs du sondage pour les faire correspondre à votre application.

### L’API

Les sondages sont également disponibles via l’API REST. Vous pouvez créer un sondage avec son commentaire en passant `poll` à `POST /api/v1/comments`,
ou ajouter, modifier, fermer et supprimer un sondage ultérieurement via `/api/v1/polls/:commentId`. Les votes peuvent être listés, soumis et retirés avec
`/api/v1/poll-votes`, ce qui rend l’exportation des résultats vers une feuille de calcul ou votre propre CMS simple. L’API suit les mêmes paramètres que le widget, et les votes individuels sur les sondages anonymes ne sont pas lisibles via celle‑ci.

### Impact sur les performances

Le code du sondage n’est chargé que si les sondages sont activés, il n’alourdit donc pas le widget de commentaires pour les autres utilisateurs.

### Documentation

<a href="https://docs.fastcomments.com/guide-polls.html" target="_blank">Le guide des sondages en direct</a> couvre l’activation des sondages,
qui peut les créer, les votes anonymes, la confidentialité des votants, les notifications et l’API.

### Essayer

Il y a un sondage en direct sur la <a href="https://fastcomments.com/product/live-polls" target="_blank">démo des sondages en direct</a>. Votez
dessus, ouvrez la page dans un second onglet, et observez les résultats évoluer. Vous pouvez également publier votre propre sondage là‑bas.

### En conclusion

Si vos fils de discussion se transforment en décomptes de participants, essayez les sondages et dites‑nous ci‑dessous ce que vous aimeriez voir ensuite.

Santé !

{{/isPost}}

---