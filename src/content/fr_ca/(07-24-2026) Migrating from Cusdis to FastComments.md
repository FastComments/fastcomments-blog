[category:Migration]
###### [postdate]
# [postlink]Migration de Cusdis vers FastComments[/postlink]

{{#unless isPost}}
Lisez cet article pour voir comment migrer complètement de Cusdis vers FastComments, y compris vos fils de discussion, le statut de modération et les URL des pages.
{{/unless}}

{{#isPost}}

Cusdis est un système de commentaires léger et open source. Si vous l'avez dépassé et que vous souhaitez des fonctionnalités telles que le filtrage du spam, les votes, les réactions, les notifications, le SSO et un tableau de bord complet de modération, FastComments importe désormais directement vos données Cusdis.

## Exportez vos commentaires existants

Depuis votre tableau de bord Cusdis, demandez une exportation complète des données. Cusdis vous fournit un seul fichier JSON contenant vos projets, pages et chaque commentaire, ainsi que leurs fils de discussion et le statut d'approbation. Selon votre configuration Cusdis, l'exportation vous est envoyée par courriel ou téléchargée immédiatement.

Il n'y a rien à modifier ou à décompresser. Conservez le fichier « .json » tel quel, et notre serveur le lit directement.

## Importez dans FastComments

Une fois connecté, allez <a href="https://fastcomments.com/auth/my-account/manage-data/import" target="_blank">ici pour importer le fichier</a>. Sélectionnez **Cusdis (.json)** dans le menu déroulant et téléversez votre fichier.

### Attendez quelques minutes

L'importation FastComments est « asynchrone ». Le téléversement du fichier et son traitement sont des étapes distinctes. Pour un petit fichier, le message de succès apparaît immédiatement. En bas de la page d'importation, il y a un tableau, chaque ligne représentant une tentative d'importation. Rafraîchissez la page pour voir le statut et le nombre de commentaires importés jusqu'à présent.

### Quand c'est terminé

Vous recevrez un courriel lorsque l'importation se termine, qu'elle réussisse ou non. Il est sécuritaire de fermer la page après la réussite du téléversement et lorsque vous voyez votre importation affichée avec le statut « Requested » ou « Running ».

Réimporter est sans danger. FastComments associe chaque commentaire à son identifiant Cusdis d'origine, ainsi relancer l'importation met à jour vos commentaires existants au lieu d'en créer des doublons. Si une importation échoue, <a href="https://fastcomments.com/auth/my-account/help" target="_blank">contactez‑nous</a> et nous vous aiderons.

## Ce qui est importé

- **Réponses en fil.** Cusdis imbrique les réponses sur plusieurs niveaux, et FastComments reconstruit la structure complète parent‑enfant.
- **Statut de modération.** Les commentaires approuvés restent approuvés. Les commentaires en attente d'approbation arrivent dans votre file d’attente de modération FastComments afin que vous puissiez les examiner.
- **Auteurs.** Le nom et le courriel de chaque commentateur sont transférés, et les utilisateurs enregistrés de FastComments sont associés par courriel.
- **Mise en forme.** Les commentaires Cusdis sont rédigés en Markdown. FastComments rend ce même Markdown, y compris les liens, images et sauts de ligne, de sorte que vos fils de discussion s'affichent exactement comme avant.

Les commentaires qui ont été supprimés dans Cusdis restent supprimés, de sorte que vos fils importés restent propres.

## Remplacez le widget Cusdis

Une fois vos données transférées, retirez le petit extrait Cusdis de votre site et insérez <a href="https://fastcomments.com/auth/my-account/get-acct-code" target="_blank">le nôtre</a>. Vous pouvez faire fonctionner Cusdis et FastComments côte à côte pendant un certain temps pour tester d'abord l'apparence et la convivialité. Nous prenons en charge de nombreux frameworks front‑end, que <a href="https://fastcomments.com/install-wizard" target="_blank">vous pouvez trouver ici</a>. <a href="https://fastcomments.com/auth/my-account/help" target="_blank">Nous pouvons vous aider avec cela</a>.

### Migration des URL en même temps

Cusdis associe chaque commentaire à l'URL de sa page, donc tant que vos URL ne changent pas, le basculement est simple. Si vos URL changent également, importez d'abord vos données Cusdis, puis utilisez l'outil intégré <a href="https://fastcomments.com/auth/my-account/manage-data/migrate-domains" target="_blank">Migrate Comments</a> sous Gérer les données pour déplacer vos commentaires vers les nouvelles emplacements. Vous pouvez saisir un domaine complet, une URL complète ou un ID d'URL pour l'ancienne et la nouvelle localisation, de sorte qu'une seule paire « de » et « à » déplace toutes les pages correspondantes en une fois. Il s'exécute en tâche de fond et vous envoie un courriel lorsqu'il se termine.

Si vous préférez que nous nous en occupions (si vous avez de nombreuses pages), <a href="https://fastcomments.com/auth/my-account/help" target="_blank">faites‑nous savoir</a> les anciennes et nouvelles URL.

## UE

Si vous êtes dans l'UE, vous voudrez probablement créer votre compte sur <a href="https://eu.fastcomments.com" target="_blank">eu.fastcomments.com</a> afin que les données de vos clients restent dans l'UE.

## Récapitulatif

1. Exportez vos données de Cusdis au format JSON
2. Téléversez‑les sur la page d'importation FastComments et sélectionnez **Cusdis (.json)**
3. Remplacez l'extrait Cusdis par <a href="https://fastcomments.com/auth/my-account/get-acct-code" target="_blank">FastComments</a>

{{/isPost}}

---