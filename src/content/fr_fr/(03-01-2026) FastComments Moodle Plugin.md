---
[category:Integrations]
[category:Features]
###### [postdate]
# [postlink]Plugin FastComments pour Moodle[/postlink]

{{#unless isPost}}
FastComments dispose désormais d'un plugin Moodle dédié avec SSO, des commentaires en fil et un chat collaboratif pour vos cours.
{{/unless}}

{{#isPost}}

### Quoi de Neuf

Nous sommes ravis d'annoncer le plugin officiel FastComments pour Moodle. Si vous utilisez Moodle et souhaitez ajouter des commentaires en direct,
en fil ou un chat collaboratif à vos cours, ce plugin simplifie les choses. Il remplace l'ancienne approche manuelle en PHP
par un vrai plugin Moodle qui s'installe en quelques minutes et s'intègre à vos comptes utilisateurs Moodle existants. Le plugin fonctionne
avec Moodle 4.1 et versions ultérieures, et la source est disponible sur [GitHub](https://github.com/FastComments/fastcomments-moodle).

### Commencer

Pour installer, téléchargez le fichier ZIP depuis le [répertoire GitHub](https://github.com/FastComments/fastcomments-moodle) et extrayez-le
dans `<moodle-root>/local/fastcomments`. Ensuite, connectez-vous en tant qu'administrateur du site et visitez **Administration du site > Notifications**.
Moodle détectera le nouveau plugin et effectuera l'installation automatiquement.

Une fois installé, rendez-vous sur **Administration du site > Plugins > Plugins locaux > FastComments** pour le configurer. Vous aurez besoin de votre
**ID de locataire** (trouvé dans votre tableau de bord FastComments) et de votre **clé API** si vous souhaitez utiliser le SSO sécurisé, ce que nous recommandons.

Notez que le téléchargement manuel depuis GitHub est temporaire en attendant l'approbation du plugin dans le répertoire des plugins Moodle. Une fois approuvé,
vous pourrez l'installer directement depuis l'installateur de plugins de Moodle.

### Styles de Commentaires

Le plugin prend en charge trois styles de commentaires, vous pouvez donc choisir celui qui fonctionne le mieux pour vos étudiants et la structure de votre cours.

Le mode **Commentaires** place un widget de commentaire complet sous le contenu de la page. Les étudiants bénéficient de réponses en fil, de @mentions,
de votes positifs et négatifs, d'un éditeur de texte enrichi et de la cloche de notification pour s'abonner aux nouveaux commentaires sur une page.

<div class="text-center">
    <div class="sm">Commentaires sur une page de cours</div>
    <img src="images/moodle-course-comments.png" alt="Commentaires de Cours" title="Commentaires de Cours" />
</div>

Le mode **Chat Collaboratif** ajoute une barre en haut de la page qui invite les utilisateurs à sélectionner du texte et à commencer une discussion. Le
texte surligné est ancré au contenu, de sorte que la conversation reste liée exactement à ce qui est discuté. Il montre également les utilisateurs en ligne
et le nombre de discussions actives. Ce mode ne rend pas de widget en bas.

<div class="text-center">
    <div class="sm">Chat collaboratif ancré au texte sélectionné</div>
    <img src="images/moodle-collab-chat.png" alt="Chat Collaboratif" title="Chat Collaboratif" />
</div>

Le mode **Chat Collaboratif + Commentaires** vous donne les deux en même temps. Les étudiants peuvent surligner du texte pour des discussions en ligne
et utiliser également le widget de commentaire complet sous le contenu. C'est parfait pour les cours où vous souhaitez à la fois un retour rapide en ligne
et des conversations en fil plus longues.

<div class="text-center">
    <div class="sm">Les deux styles de commentaires actifs sur une page</div>
    <img src="images/moodle-page-comments.png" alt="Commentaires de Page" title="Commentaires de Page" />
</div>

### SSO Qui Fonctionne

Le plugin prend en charge trois modes SSO. **SSO Sécurisé** est l'option recommandée. Il signe l'identité de l'utilisateur côté serveur avec
HMAC-SHA256 en utilisant votre clé API, de sorte que les identifiants ne sont jamais exposés côté client. Avec le SSO Sécurisé, les administrateurs Moodle sont
automatiquement synchronisés en tant que modérateurs FastComments, ce qui signifie que vos administrateurs de site peuvent modérer les commentaires sans aucune
configuration supplémentaire. Les avatars d'utilisateur, les noms et les adresses email sont tous transmis en toute sécurité.

**SSO Simple** passe les données utilisateur (nom, email, avatar) côté client sans signature. Il est rapide à configurer mais moins sécurisé
que l'approche HMAC. Enfin, **Aucun** désactive complètement le SSO, de sorte que les utilisateurs peuvent commenter anonymement.

### Préférences de Notification des Utilisateurs

Les étudiants peuvent gérer leurs paramètres de notification FastComments directement depuis leur profil Moodle. Sous la section **FastComments**,
ils peuvent activer ou désactiver les notifications de réponse (recevoir un email lorsque quelqu'un répond à leur commentaire) et les notifications
d'abonnement (recevoir des emails pour les fils auxquels ils se sont abonnés). Cela maintient tout en un seul endroit et donne aux étudiants
le contrôle sur le nombre d'emails qu'ils reçoivent.

### En Conclusion

Le plugin Moodle est désormais disponible. Pour le guide complet d'installation, consultez le
[Guide d'Intégration Moodle](https://docs.fastcomments.com/guide-moodle.html), et le code source est sur
[GitHub](https://github.com/FastComments/fastcomments-moodle). Faites-nous savoir ci-dessous si vous avez des commentaires !

Cordialement !

{{/isPost}}