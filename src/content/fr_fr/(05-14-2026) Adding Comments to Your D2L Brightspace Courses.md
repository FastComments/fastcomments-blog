---
[category:Integrations]
[category:Features]
###### [postdate]
# [postlink]Ajout de commentaires à vos cours D2L Brightspace[/postlink]

{{#unless isPost}}
FastComments s'installe désormais dans D2L Brightspace en une seule étape via LTI 1.3 Dynamic Registration, avec SSO automatique, commentaires en fil et chat collaboratif pour chaque unité de cours.
{{/unless}}

{{#isPost}}

### Quoi de Neuf

FastComments prend maintenant en charge D2L Brightspace grâce à la norme IMS LTI 1.3 Advantage, y compris l'enregistrement dynamique.
Cela signifie qu'il n'y a pas de plugin à installer, pas d'échange de clés à coordonner et pas de câblage par cours. Votre
administrateur Brightspace colle une seule URL dans l'écran d'enregistrement LTI Advantage, et FastComments et Brightspace
terminent la poignée de main automatiquement. Les instructeurs peuvent ensuite ajouter FastComments à n'importe quelle unité de la même manière qu'ils ajoutent n'importe quel autre outil externe, et les étudiants voient des commentaires en fil intégrés directement dans le contenu du cours.

<div class="text-center">
    <div class="sm">Commentaires en fil intégrés en tant que sujet à l'intérieur d'une unité Brightspace</div>
    <img src="images/d2l-course-comments.png" alt="FastComments fonctionnant à l'intérieur d'une unité D2L Brightspace" title="FastComments sur une unité Brightspace" />
</div>

### Prise en Main

Depuis votre tableau de bord FastComments, ouvrez la [page de configuration LTI 1.3](https://fastcomments.com/auth/my-account/lti-config),
sélectionnez **D2L Brightspace** dans le menu déroulant de la plateforme, puis cliquez sur **Générer l'URL**. Vous obtenez une URL d'enregistrement à usage unique valide pendant 30 minutes.

Dans Brightspace, votre administrateur ouvre **Outils Admin > Gérer l'extensibilité > LTI Advantage > Enregistrer l'outil**, colle l'URL dans le champ **Point de terminaison d'enregistrement de l'outil**, et soumet. Brightspace effectue la poignée de main d'enregistrement avec FastComments, échange les clés de signature et crée l'entrée de l'outil. La fenêtre contextuelle se ferme automatiquement une fois terminé.

Après l'enregistrement, l'administrateur active l'outil et crée un déploiement limité aux unités d'organisation qui doivent avoir accès. À partir de ce moment, FastComments apparaît dans le sélecteur de contenu de chaque cours sous **Ajouter existant**.

### Ajout à un Cours

À l'intérieur de n'importe quelle unité de cours, l'instructeur clique sur **Ajouter existant**, choisit **FastComments** dans la liste des activités, et l'outil est placé en tant que sujet dans l'unité. Renommer le sujet, le réorganiser à l'intérieur de l'unité, le restreindre à des groupes spécifiques ou à des conditions de publication, et activer ou désactiver la visibilité utilisent tous les contrôles standard de Brightspace. Il n'y a pas d'écran de paramètres FastComments distinct à apprendre pour les instructeurs.

Pour l'intégration en ligne, le même outil FastComments est également disponible via le dialogue **Insérer du contenu** de l'éditeur HTML de Brightspace sous **LTI Advantage**. Cela utilise le flux de liaison profonde LTI pour intégrer un fil de commentaires directement dans une lecture, des instructions de quiz ou tout autre sujet HTML, de sorte que la discussion soit à côté du contenu concerné.

### SSO Automatique

Les étudiants ne voient jamais d'écran de connexion. Le lancement LTI 1.3 transporte l'identité Brightspace de l'étudiant (`sub`, `name`, `email`,
et `picture`) signée par la clé privée de Brightspace. FastComments vérifie la signature par rapport aux JWKS publiés par Brightspace, crée une session SSO sécurisée pour l'utilisateur et affiche le widget de commentaires. Les commentaires sont attribués au compte Brightspace de l'étudiant, et les instructeurs modèrent également avec leur identité Brightspace.

Le mappage des rôles est automatique. Les utilisateurs **Administrateur** de Brightspace apparaissent comme des administrateurs FastComments, les utilisateurs **Instructeur** comme modérateurs, et tout le reste comme des commentateurs standard. Il n'y a pas de liste d'utilisateurs séparée à maintenir du côté de FastComments - elle suit ce que dit Brightspace.

### Délimité des Discussions

Chaque fil de commentaires est lié à un triplet : l'hôte Brightspace, le cours et le lien de ressource. Cela signifie que deux cours utilisant tous deux un sujet "Réflexions de lecture" obtiennent chacun leur propre discussion. Il en va de même si un instructeur ajoute FastComments deux fois dans le même cours (par exemple, une fois en tant que sujet d'unité et une autre fois en tant qu'intégration en ligne à l'intérieur d'une page HTML) - chaque placement est son propre fil.

La partie hôte fait délibérément partie de l'identifiant du fil. Si votre institution gère plusieurs instances de Brightspace sous un seul compte FastComments, les conversations restent isolées à chaque instance même lorsque les ID de cours se chevauchent.

### En Conclusion

Si vous utilisez D2L Brightspace, vous pouvez être opérationnel avec FastComments en une après-midi : générez l'URL, collez-la dans Brightspace, et laissez les instructeurs intégrer l'outil dans leurs unités. Pour le guide complet étape par étape, y compris le dépannage et les captures d'écran par page, consultez le
[Guide d'installation LTI 1.3](https://docs.fastcomments.com/guide-installation-lti-1p3.html). La même intégration couvre également Moodle, Blackboard, Sakai, Schoology et toute autre plateforme LTI 1.3 Advantage, mais Brightspace était notre cible pilote et le flux est solide là-bas.

Santé !

{{/isPost}}

---