---
[category:Integrations]
[category:Features]
###### [postdate]
# [postlink]Plugin FastComments pour Moodle[/postlink]

{{#unless isPost}}
FastComments a maintenant un plugin Moodle dédié avec SSO, des commentaires imbriqués et un chat collaboratif pour vos cours.
{{/unless}}

{{#isPost}}

### Quoi de Neuf

Nous sommes ravis d'annoncer le plugin FastComments officiel pour Moodle. Si vous utilisez Moodle et souhaitez ajouter des commentaires live, imbriqués ou un chat collaboratif à vos cours, ce plugin le rend simple. Il remplace l'ancienne méthode manuelle PHP par un vrai plugin Moodle qui s'installe en quelques minutes et s'intègre à vos comptes utilisateurs Moodle existants. Le plugin fonctionne avec Moodle 4.1 et versions ultérieures, et le code source est disponible sur [GitHub](https://github.com/FastComments/fastcomments-moodle).

### Commencer

Pour installer, téléchargez le ZIP depuis le [dépôt GitHub](https://github.com/FastComments/fastcomments-moodle) et extrayez-le dans `<moodle-root>/local/fastcomments`. Ensuite, connectez-vous en tant qu'administrateur de site et visitez **Administration du site > Notifications**. Moodle détectera le nouveau plugin et effectuera l'installation automatiquement.

Une fois installé, rendez-vous sur **Administration du site > Plugins > Plugins locaux > FastComments** pour configurer. Vous aurez besoin de votre **ID de locataire** (trouvé dans votre tableau de bord FastComments) et de votre **clé API secrète** si vous souhaitez utiliser le SSO sécurisé, ce que nous recommandons.

Notez que le téléchargement manuel depuis GitHub est temporaire pendant que nous attendons l'approbation du plugin sur le répertoire des plugins Moodle. Une fois approuvé, vous pourrez l'installer directement depuis l'installateur de plugins de Moodle.

### Styles de Commentaires

Le plugin prend en charge trois styles de commentaires, vous pouvez donc choisir celui qui convient le mieux à vos étudiants et à la structure de votre cours.

Le mode **Commentaires** place un widget de commentaire complet sous le contenu de la page. Les étudiants obtiennent des réponses imbriquées, des mentions @, des votes positifs et négatifs, un éditeur de texte enrichi, et la cloche de notification pour s'abonner aux nouveaux commentaires sur une page.

<div class="text-center">
    <div class="sm">Commentaires sur une page de cours</div>
    <img src="images/moodle-course-comments.png" alt="Commentaires de cours" title="Commentaires de cours" />
</div>

Le mode **Collab Chat** ajoute une barre en haut de la page qui invite les utilisateurs à sélectionner du texte et à commencer une discussion. Le texte mis en surbrillance est ancré au contenu, de sorte que la conversation reste liée à ce qui est discuté. Il affiche également les utilisateurs en ligne et le nombre de discussions actives. Ce mode ne rend pas de widget en bas.

<div class="text-center">
    <div class="sm">Chat collaboratif ancré au texte sélectionné</div>
    <img src="images/moodle-collab-chat.png" alt="Chat Collab" title="Chat Collab" />
</div>

Le mode **Collab Chat + Commentaires** vous donne les deux en même temps. Les étudiants peuvent mettre en surbrillance du texte pour des discussions en ligne et utiliser également le widget de commentaire complet sous le contenu. C'est idéal pour les cours où vous souhaitez à la fois des retours rapides en ligne et des conversations imbriquées plus longues.

<div class="text-center">
    <div class="sm">Les deux styles de commentaires actifs sur une page</div>
    <img src="images/moodle-page-comments.png" alt="Commentaires de Page" title="Commentaires de Page" />
</div>

### SSO Qui Fonctionne

Le plugin prend en charge trois modes SSO. **SSO Sécurisé** est l'option recommandée. Il signe l'identité de l'utilisateur côté serveur avec HMAC-SHA256 en utilisant votre clé API secrète, de sorte que les identifiants ne sont jamais exposés côté client. Avec SSO Sécurisé, les administrateurs Moodle sont automatiquement synchronisés en tant que modérateurs FastComments, ce qui signifie que vos administrateurs de site peuvent modérer les commentaires sans aucune configuration supplémentaire. Les avatars, noms et adresses e-mail des utilisateurs sont tous transmis de manière sécurisée.

**SSO Simple** passe les données des utilisateurs (nom, e-mail, avatar) côté client sans signature. Il est rapide à configurer mais moins sécurisé que l'approche HMAC. Enfin, **Aucun** désactive entièrement le SSO, de sorte que les utilisateurs commentent anonymement.

### Préférences de Notification des Utilisateurs

Les étudiants peuvent gérer leurs paramètres de notification FastComments directement depuis leur profil Moodle. Sous la section **FastComments**, ils peuvent activer ou désactiver les notifications de réponse (recevoir un e-mail lorsque quelqu'un répond à leur commentaire) et les notifications d'abonnement (recevoir des e-mails pour les fils auxquels ils se sont abonnés). Cela garde tout au même endroit et donne aux étudiants le contrôle sur la quantité d'e-mails qu'ils reçoivent.

### En Conclusion

Le plugin Moodle est disponible dès maintenant. Pour le guide complet de configuration, consultez le [Guide d'Intégration Moodle](https://docs.fastcomments.com/guide-installation-moodle.html), et le code source est sur [GitHub](https://github.com/FastComments/fastcomments-moodle). Faites-nous savoir ci-dessous si vous avez des commentaires !

À bientôt !

{{/isPost}}

---