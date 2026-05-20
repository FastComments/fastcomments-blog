---
[category:Integrations]
[category:Features]
###### [postdate]
# [postlink]Ajouter des commentaires à vos cours D2L Brightspace[/postlink]

{{#unless isPost}}
FastComments s'installe maintenant dans D2L Brightspace en une seule étape via l'enregistrement dynamique LTI 1.3, avec SSO automatique, commentaires en fil et chat collaboratif pour chaque unité de cours.
{{/unless}}

{{#isPost}}

### Quoi de Neuf

FastComments prend maintenant en charge D2L Brightspace via la norme IMS LTI 1.3 Advantage, y compris l'enregistrement dynamique.
Cela signifie qu'il n'y a aucun plugin à installer, aucun échange de clés à coordonner, et aucun câblage par cours. Votre
administrateur Brightspace colle une seule URL dans l'écran d'enregistrement LTI Advantage, et FastComments et Brightspace
terminent l'échange automatiquement. Les enseignants peuvent ensuite ajouter FastComments à n'importe quelle unité de la même
manière qu'ils ajoutent tout autre outil externe, et les étudiants voient les commentaires en fil intégrés directement dans
le contenu du cours.

<div class="text-center">
    <div class="sm">Commentaires en fil intégrés comme un sujet à l'intérieur d'une unité Brightspace</div>
    <img src="images/d2l-course-comments.png" alt="FastComments exécuté à l'intérieur d'une unité D2L Brightspace" title="FastComments sur une unité Brightspace" />
</div>

### Pour Commencer

À partir de votre tableau de bord FastComments, ouvrez la [page de configuration LTI 1.3](https://fastcomments.com/auth/my-account/lti-config),
sélectionnez **D2L Brightspace** dans le menu déroulant de la plateforme, et cliquez sur **Générer URL**. Vous obtenez une
URL d'enregistrement à usage unique qui est valide pendant 30 minutes.

Dans Brightspace, votre administrateur ouvre **Outils d'administration > Gérer l'extensibilité > LTI Advantage > Enregistrer l'outil**, colle l'URL dans le champ **Point de terminaison d'enregistrement de l'initiation de l'outil**, et soumet. Brightspace effectue
l'échange d'enregistrement avec FastComments, échange les clés de signature, et crée l'entrée de l'outil. La fenêtre contextuelle se
ferme d'elle-même une fois terminée.

Après l'enregistrement, l'administrateur active l'outil et crée un déploiement limité aux unités organisationnelles qui devraient avoir
accès. À partir de ce moment, FastComments apparaît dans le sélecteur de contenu de chaque cours sous **Ajouter un existant**.

### Ajout à un Cours

À l'intérieur de n'importe quelle unité de cours, l'instructeur clique sur **Ajouter un existant**, choisit **FastComments** dans
la liste d'activités, et l'outil est placé comme un sujet dans l'unité. Le renommage du sujet, son réordonnancement dans l'unité,
son restriction à des groupes spécifiques ou des conditions de publication, et la bascule de visibilité utilisent tous les contrôles
standard de Brightspace. Il n'y a pas d'écran de paramètres distinct FastComments que les instructeurs doivent apprendre.

Pour une intégration en ligne, le même outil FastComments est également disponible via le dialogue **Insérer des éléments** de l'éditeur HTML de Brightspace sous **LTI Advantage**. Cela utilise le flux de liaison profonde LTI pour placer un fil de commentaires directement à l'intérieur d'une
lecture, des instructions de quiz, ou tout autre sujet HTML, de sorte que la discussion se trouve à côté du contenu dont elle parle.

### SSO Automatique

Les étudiants ne voient jamais un écran de connexion. Le lancement LTI 1.3 transporte l'identité Brightspace de l'étudiant (`sub`, `name`, `email`,
et `picture`) signée par la clé privée de Brightspace. FastComments vérifie la signature contre le JWKS publié de Brightspace,
génère une session SSO sécurisée pour l'utilisateur et affiche le widget de commentaires. Les commentaires sont attribués au compte
Brightspace de l'étudiant, et les instructeurs modèrent également en utilisant leur identité Brightspace.

La cartographie des rôles est automatique. Les utilisateurs **Administrateur** de Brightspace apparaissent comme des administrateurs FastComments, les utilisateurs **Instructeur** comme modérateurs, et tous les autres comme commentateurs standard. Il n'y a pas de liste d'utilisateurs distincte à maintenir du côté de FastComments - cela suit ce que Brightspace dit.

### Portée des Discussions

Chaque fil de commentaire est lié à un triplet : l'hôte Brightspace, le cours et le lien de ressource. Cela signifie que deux
cours utilisant tous deux un sujet "Réflexions de lecture" obtiennent chacun leur propre discussion. Il en va de même si un instructeur
ajoute FastComments deux fois dans le même cours (par exemple, une fois en tant que sujet d'unité et une fois en tant qu'intégration en
ligne à l'intérieur d'une page HTML) - chaque placement est son propre fil.

La partie hôte fait intentionnellement partie de l'identifiant du fil. Si votre institution utilise plusieurs instances de Brightspace
sous un seul compte FastComments, les conversations restent isolées à chaque instance même lorsque les identifiants de cours se
superposent.

### En Conclusion

Si vous utilisez D2L Brightspace, vous pouvez être opérationnel avec FastComments en une après-midi : générez l'URL, collez-la
dans Brightspace et laissez les instructeurs ajouter l'outil dans leurs unités. Pour le guide d'installation complet étape par étape,
y compris le dépannage et les captures d'écran par page, consultez le
[Guide d'Installation LTI 1.3](https://docs.fastcomments.com/guide-installation-lti-1p3.html). La même intégration couvre également
Moodle, Blackboard, Sakai, Schoology, et toute autre plateforme LTI 1.3 Advantage, mais Brightspace était notre cible pilote et le
flux est solide à cet endroit.

Santé !

{{/isPost}}

---