---
[category:Integrations]
[category:Features]
###### [postdate]
# [postlink]Plugin FastComments pour Moodle[/postlink]

{{#unless isPost}}
FastComments a désormais un plugin Moodle dédié avec SSO, des commentaires en fil de discussion et un chat collaboratif pour vos cours.
{{/unless}}

{{#isPost}}

### Quoi de Neuf

Nous sommes ravis d'annoncer le plugin officiel FastComments pour Moodle. Si vous utilisez Moodle et souhaitez ajouter des commentaires en temps réel, en fil de discussion, ou un chat collaboratif à vos cours, ce plugin le rend simple. Il remplace l'ancienne approche manuelle en PHP par un véritable plugin Moodle qui s'installe en quelques minutes et s'intègre avec vos comptes utilisateurs Moodle existants. Le plugin fonctionne avec Moodle 4.1 et ultérieur, et le code source est disponible sur [GitHub](https://github.com/FastComments/fastcomments-moodle).

### Commencer

Pour installer, téléchargez le ZIP depuis le [répertoire GitHub](https://github.com/FastComments/fastcomments-moodle) et extrayez-le
dans `<moodle-root>/local/fastcomments`. Ensuite, connectez-vous en tant qu'administrateur du site et visitez **Administration du site > Notifications**.
Moodle détectera le nouveau plugin et exécutera l'installation automatiquement.

Une fois installé, rendez-vous dans **Administration du site > Plugins > Plugins locaux > FastComments** pour configurer. Vous aurez besoin de votre
**ID de locataire** (trouvé dans votre tableau de bord FastComments) et de votre **clé API secrète** si vous souhaitez utiliser SSO sécurisé, ce que nous recommandons.

Notez que le téléchargement manuel depuis GitHub est temporaire pendant que nous attendons l'approbation du plugin sur le répertoire des plugins Moodle. Une fois approuvé, vous pourrez l'installer directement depuis l'installateur de plugins de Moodle.

### Styles de Commentaires

Le plugin prend en charge trois styles de commentaires, afin que vous puissiez choisir celui qui fonctionne le mieux pour vos étudiants et la structure de votre cours.

**Mode Commentaires** place un widget de commentaire complet sous le contenu de la page. Les étudiants reçoivent des réponses en fil de discussion, des mentions, des votes positifs et négatifs, un éditeur de texte enrichi et la cloche de notification pour s'abonner aux nouveaux commentaires sur une page.

<div class="text-center">
    <div class="sm">Commentaires sur une page de cours</div>
    <img src="images/moodle-course-comments.png" alt="Commentaires de Cours" title="Commentaires de Cours" />
</div>

**Mode Chat Collaboratif** ajoute une barre en haut de la page qui invite les utilisateurs à sélectionner du texte et à commencer une discussion. Le texte mis en surbrillance est ancré au contenu, de sorte que la conversation reste liée à ce qui est discuté. Il montre également les utilisateurs en ligne et le nombre de discussions actives. Ce mode ne rend pas de widget en bas.

<div class="text-center">
    <div class="sm">Chat collaboratif ancré au texte sélectionné</div>
    <img src="images/moodle-collab-chat.png" alt="Chat Collaboratif" title="Chat Collaboratif" />
</div>

**Mode Chat Collaboratif + Commentaires** vous donne les deux en même temps. Les étudiants peuvent mettre en surbrillance le texte pour des discussions en ligne et utiliser également le widget de commentaire complet sous le contenu. Cela est idéal pour les cours où vous souhaitez à la fois des retours rapides en ligne et des conversations plus longues en fil de discussion.

<div class="text-center">
    <div class="sm">Les deux styles de commentaire actifs sur une page</div>
    <img src="images/moodle-page-comments.png" alt="Commentaires de Page" title="Commentaires de Page" />
</div>

### SSO Automatique

Le plugin prend en charge trois modes SSO. **SSO Sécurisé** est l'option recommandée. Il signe l'identité de l'utilisateur côté serveur avec
HMAC-SHA256 en utilisant votre clé API secrète, de sorte que les identifiants ne sont jamais exposés côté client. Avec le SSO Sécurisé, les administrateurs Moodle sont
automatiquement synchronisés en tant que modérateurs FastComments, ce qui signifie que vos administrateurs de site peuvent modérer les commentaires sans configuration supplémentaire. Les avatars, noms et adresses e-mail des utilisateurs sont tous transmis en toute sécurité.

**SSO Simple** transmet les données utilisateur (nom, e-mail, avatar) côté client sans signature. Il est rapide à mettre en place mais moins sécurisé
que l'approche HMAC. Enfin, **Aucun** désactive complètement le SSO, de sorte que les utilisateurs commentent de manière anonyme.

### Préférences de Notification des Utilisateurs

Les étudiants peuvent gérer leurs paramètres de notification FastComments directement depuis leur profil Moodle. Sous la section **FastComments**,
ils peuvent activer ou désactiver les notifications de réponse (recevoir un e-mail lorsqu'un commentaire est répondu) et les notifications d'abonnement (recevoir des e-mails pour les discussions auxquelles ils se sont abonnés). Cela garde tout au même endroit et donne aux étudiants le contrôle sur la quantité d'e-mails qu'ils reçoivent.

### En Conclusion

Le plugin Moodle est maintenant disponible. Pour le guide complet d'installation, consultez le
[Guide d'Intégration Moodle](https://docs.fastcomments.com/guide-installation-moodle.html), et le code source est sur
[GitHub](https://github.com/FastComments/fastcomments-moodle). Faites-nous savoir ci-dessous si vous avez des commentaires!

Santé!

{{/isPost}}