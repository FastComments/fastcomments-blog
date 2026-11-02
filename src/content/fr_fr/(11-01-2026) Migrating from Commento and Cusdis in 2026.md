[category:Migration]
###### [postdate]
# [postlink]Migration de Commento et Cusdis en 2026[/postlink]

{{#unless isPost}}
Les services hébergés Commento et Cusdis ont cessé de répondre. Voici comment passer à FastComments, et comment nous pouvons aider à récupérer vos commentaires depuis l'Internet Archive si vous ne les avez jamais exportés.
{{/unless}}

{{#isPost}}

Si la section des commentaires de votre site est devenue vide, cet article est pour vous. Il couvre ce qui a changé, comment importer une exportation si vous en avez une, et comment nous pouvons vous aider à récupérer vos commentaires depuis l'Internet Archive si vous ne le faites pas.

## Ce qui s'est passé

Voici ce que nous observons au 1er novembre 2026 :

- **Commento.** commento.io, son API et son script de widget renvoient tous un 404. Les captures de l'Internet Archive montrent le site fonctionnant le 25 mai 2026 et renvoyant un 404 au 11 juin 2026.
- **Cusdis.** cusdis.com et son API renvoient l'erreur Cloudflare 521, ce qui signifie que le serveur derrière Cloudflare est hors service. Les captures montrent qu'il fonctionnait jusqu'au 27 août 2026 et renvoyait un 521 au 16 octobre 2026. Le script du widget se charge toujours, donc votre page affiche une boîte vide à l'endroit où se trouvaient les commentaires.

Nous n'avons trouvé aucun avis d'arrêt de la part de l'un ou l'autre projet. Si vous auto-hébergez Commento ou Cusdis, votre installation n'est pas affectée par cela, et vous pouvez l'exporter quand vous êtes prêt à migrer.

## Trouver vos données

Quel chemin vous empruntez dépend de ce que vous avez :

1. **Vous avez un fichier d'exportation.** Recherchez également dans votre boîte de réception, car Commento envoyait ses exportations par e‑mail sous forme de fichier « .gz ». Passez directement aux étapes d'importation.
2. **Vous auto-hébergez.** Exportez depuis votre propre tableau de bord, puis suivez les étapes d'importation.
3. **Vous avez utilisé le service hébergé et n'avez aucune exportation.** Le tableau de bord depuis lequel vous auriez exporté a disparu. Lisez la section de récupération ci‑dessous.

## Importer un fichier d'exportation

Une fois connecté, cliquez <a href="https://fastcomments.com/auth/my-account/manage-data/import" target="_blank">ici pour importer le fichier</a>. Sélectionnez **Commento (.gz, .json)** ou **Cusdis (.json)** dans le menu déroulant et téléversez votre fichier. Il n'est pas nécessaire de décompresser d'abord le fichier « .gz » de Commento.

L'importation s'exécute en arrière‑plan, et vous recevrez un e‑mail lorsqu'elle sera terminée. Ré‑importer est sûr, car chaque commentaire est associé à son identifiant d'origine et mis à jour sur place.

Nous disposons d'un guide plus complet pour chaque format : <a href="https://blog.fastcomments.com/(1-25-2020)-migrating-from-commento-to-fastcomments.html" target="_blank">Commento</a> et <a href="https://blog.fastcomments.com/(07-24-2026)-migrating-from-cusdis-to-fastcomments.html" target="_blank">Cusdis</a>. Leurs étapes pour demander une exportation depuis le tableau de bord hébergé ne s'appliquent plus, mais leurs détails d'importation le sont.

## Récupérer vos commentaires depuis l'Internet Archive

Commento et Cusdis chargent tous deux les commentaires avec JavaScript depuis leurs propres serveurs. Lorsque l'Internet Archive capture une page avec un navigateur, il peut enregistrer ces réponses avec la page. Ces réponses enregistrées contiennent les fils de commentaires.

Nous l'avons testé nous‑mêmes. La <a href="https://web.archive.org" target="_blank">Wayback Machine</a> contient plus de 12 000 réponses de commentaires Commento capturées et des captures pour 448 projets Cusdis, et les plus récentes datent de 2026. Nous n'avons pas d'outil en libre-service pour cela. Nous effectuons la récupération pour vous, alors <a href="https://fastcomments.com/contact-us" target="_blank">écrivez‑nous</a> pour commencer.

### Vérifiez d'abord votre propre site

Ouvrez l'un de vos articles les plus fréquentés dans la Wayback Machine, en remplaçant l'adresse par la vôtre :

<div class="code">    https://web.archive.org/web/2025/https://example.com/your-post
</div>

Faites défiler jusqu'à la section des commentaires. Si vos commentaires apparaissent, l'archive possède ce fil. S'ils n'apparaissent pas, essayez une autre année en utilisant le calendrier en haut de la page. Un résultat vide sur un article n'exclut pas le reste de votre site, alors écrivez‑nous dans tous les cas.

### Comment la récupération fonctionne

1. **Dites‑nous votre domaine.** Si vous avez utilisé Cusdis, envoyez également votre App ID, la valeur `data-app-id` dans le snippet sur votre site. Nous vous demanderons de prouver que vous contrôlez le domaine, car ces commentaires appartiennent à votre site.
2. **Nous trouvons vos fils.** Nous collectons les captures de votre site et vérifions que chacune appartient à votre domaine et à votre page. Les récupérations Commento prennent plus de temps, car l'archive n'indexe pas ses captures par site et nous devons les parcourir toutes.
3. **Nous vous montrons ce que nous avons trouvé.** Vous verrez combien de pages et de commentaires sont revenus, ainsi que la date du commentaire le plus récent, avant toute importation.
4. **Nous importons les fils dans votre compte.** Vous pouvez ensuite modifier ou supprimer tout commentaire depuis votre tableau de bord de modération.

### Ce qui revient

<div class="pretty-table wide-table">

| Données | Commento | Cusdis |
| --- | --- | --- |
| Texte du commentaire | Yes | Yes |
| Nom d'affichage de l'auteur | Yes | Yes |
| Date du commentaire | Yes | Yes |
| Fil de réponses | Yes | Yes |
| Score de vote | Yes | Cusdis has no votes |
| Adresse de la page | Yes | Yes, though some sites stored only a path, so we need your domain |
| E‑mail de l'auteur | No | No |
| Commentaires en attente d'approbation | No | No |
| Commentaires écrits après la dernière capture | No | No |
| Pages jamais capturées par l'archive | No | No |

</div>

### À quoi s'attendre

Il s'agit d'une récupération à partir de snapshots, prévoyez donc des lacunes. Cela fonctionne mieux pour les pages suffisamment populaires pour être capturées fréquemment et récemment.

Deux résultats de nos tests illustrent la fourchette. Sur un blog, 30 recherches ont renvoyé 810 commentaires sur 19 pages. Sur un autre site, qui affiche toujours ses commentaires, la copie archivée la plus récente s'est arrêtée en octobre 2023 alors que la page en direct a continué jusqu'en mars 2025. Tout ce qui a été écrit entre la dernière capture et l'arrêt n'est pas présent dans l'archive.

Les e‑mails manquants sont également importants. Les commentaires récupérés conservent le nom de l'auteur, mais ils ne peuvent pas être associés à un compte FastComments, et leurs auteurs ne seront pas notifiés des nouvelles réponses.

## Remplacer le widget

Quel que soit le chemin que vous avez suivi, l'ancien snippet doit être retiré de votre site. Pour Commento, supprimez ceci, ainsi que `count.js` si vous utilisez le comptage des commentaires :

<div class="code">    &lt;script defer src="https://cdn.commento.io/js/commento.js"&gt;&lt;/script&gt;
    &lt;div id="commento"&gt;&lt;/div&gt;
</div>

Pour Cusdis, supprimez ceci :

<div class="code">    &lt;div id="cusdis_thread" data-app-id="..." data-page-id="..."&gt;&lt;/div&gt;
    &lt;script async defer src="https://cusdis.com/js/cusdis.es.js"&gt;&lt;/script&gt;
</div>

Puis ajoutez le nôtre :

<div class="code">    &lt;script async src="https://cdn.fastcomments.com/js/embed-v2-async.min.js"&gt;&lt;/script&gt;
    &lt;div id="fastcomments-widget"&gt;&lt;/div&gt;
    &lt;script&gt;
        window.fcConfigs = [{
            target: '#fastcomments-widget',
            tenantId: 'YOUR_TENANT_ID'
        }];
    &lt;/script&gt;
</div>

Nous supportons également de nombreux frameworks front‑end, que vous pouvez trouver <a href="https://fastcomments.com/install-wizard" target="_blank">ici</a>. Il n'est pas nécessaire d'attendre la fin d'une récupération avant de changer. Vos lecteurs peuvent commencer à commenter immédiatement, et les fils récupérés s'ajoutent aux mêmes pages lorsqu'ils sont importés.

### Si vos URL changent

Les commentaires importés sont liés à l'URL de leur page, donc si vos URL restent les mêmes, les fils s'alignent automatiquement. Si elles changent, importez d'abord, puis utilisez l'outil <a href="https://fastcomments.com/auth/my-account/manage-data/migrate-domains" target="_blank">Migrate Comments</a> sous Gestion des données pour les déplacer vers les nouvelles adresses.

## UE

Si vous êtes dans l'UE, vous voudrez probablement créer votre compte sur <a href="https://eu.fastcomments.com" target="_blank">eu.fastcomments.com</a> afin que les données de vos clients restent dans l'UE.

## Récapitulatif

1. Recherchez un fichier d'exportation, y compris dans votre e‑mail.
2. Si vous en avez un, téléversez‑le sur la <a href="https://fastcomments.com/auth/my-account/manage-data/import" target="_blank">page d'importation</a>.
3. Si vous n'en avez pas, vérifiez votre site dans la Wayback Machine et <a href="https://fastcomments.com/contact-us" target="_blank">écrivez‑nous</a> avec votre domaine.
4. Remplacez l'ancien snippet par <a href="https://fastcomments.com/auth/my-account/get-acct-code" target="_blank">le nôtre</a>.

Santé!

{{/isPost}}

---