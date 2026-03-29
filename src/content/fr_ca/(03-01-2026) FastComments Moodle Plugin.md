---
[category:Integrations]
[category:Features]
###### [postdate]
# [postlink]Plugin Moodle FastComments[/postlink]

{{#unless isPost}}
FastComments a maintenant un plugin Moodle dédié avec SSO, des commentaires en fil et un chat collaboratif pour vos cours.
{{/unless}}

{{#isPost}}

### Quoi de Neuf

Nous sommes ravis d'annoncer le plugin officiel FastComments pour Moodle. Si vous utilisez Moodle et souhaitez ajouter des commentaires vivants, en fil ou un chat collaboratif à vos cours, ce plugin facilite les choses. Il remplace l'ancienne approche manuelle en PHP par un véritable plugin Moodle qui s'installe en quelques minutes et s'intègre à vos comptes utilisateurs Moodle existants. Le plugin fonctionne avec Moodle 4.1 et plus, et le code source est disponible sur [GitHub](https://github.com/FastComments/fastcomments-moodle).

### Commencer

Pour installer, téléchargez le plugin depuis le [Moodle Plugin Directory](https://moodle.org/plugins/local_fastcomments) et installez-le via l'installateur de plugins de votre site Moodle. Alternativement, vous pouvez le télécharger et l'extraire dans `<moodle-root>/local/fastcomments`, puis vous connecter en tant qu'administrateur du site et visiter **Administration du site > Notifications**. Moodle détectera le nouveau plugin et lancera l'installation automatiquement.

Une fois installé, allez dans **Administration du site > Plugins > Plugins locaux > FastComments** pour configurer. Vous aurez besoin de votre **ID de locataire** (trouvé dans votre tableau de bord FastComments) et de votre **clé API** si vous souhaitez utiliser le SSO sécurisé, ce que nous recommandons.

### Styles de Commentaire

Le plugin prend en charge trois styles de commentaires, vous pouvez donc choisir ce qui fonctionne le mieux pour vos étudiants et votre structure de cours.

**Mode Commentaires** place un widget de commentaire complet sous le contenu de la page. Les étudiants reçoivent des réponses en fil, des @mentions, la possibilité de voter pour ou contre, un éditeur de texte enrichi, et la cloche de notification pour s'abonner aux nouveaux commentaires sur une page.

<div class="text-center">
    <div class="sm">Commentaires sur une page de cours</div>
    <img src="images/moodle-course-comments.png" alt="Commentaires de Cours" title="Commentaires de Cours" />
</div>

**Mode Chat Collaboratif** ajoute une barre en haut de la page qui pousse les utilisateurs à sélectionner du texte et à commencer une discussion. Le texte surligné est ancré au contenu, ce qui permet à la conversation de rester liée à ce qui est réellement discuté. Il montre également les utilisateurs en ligne et le nombre de discussions actives. Ce mode ne rend pas de widget en bas.

<div class="text-center">
    <div class="sm">Chat collaboratif ancré au texte sélectionné</div>
    <img src="images/moodle-collab-chat.png" alt="Chat Collaboratif" title="Chat Collaboratif" />
</div>

**Chat Collaboratif + Commentaires** vous donne les deux en même temps. Les étudiants peuvent surligner du texte pour des discussions intégrées et également utiliser le widget de commentaire complet sous le contenu. C'est idéal pour les cours où vous souhaitez à la fois un retour rapide en ligne et de plus longues conversations en fil.

<div class="text-center">
    <div class="sm">Les deux styles de commentaire actifs sur une page</div>
    <img src="images/moodle-page-comments.png" alt="Commentaires de Page" title="Commentaires de Page" />
</div>

### SSO Automatique

Le plugin prend en charge trois modes SSO. Le **SSO Sécurisé** est l'option recommandée. Il signe l'identité de l'utilisateur côté serveur avec HMAC-SHA256 en utilisant votre clé API, de sorte que les identifiants ne soient jamais exposés du côté client. Avec le SSO Sécurisé, les administrateurs Moodle sont automatiquement synchronisés en tant que modérateurs FastComments, ce qui signifie que vos administrateurs de site peuvent modérer les commentaires sans aucune configuration supplémentaire. Les avatars, noms et adresses e-mail des utilisateurs sont tous transmis de manière sécurisée.

**SSO Simple** transmet les données des utilisateurs (nom, e-mail, avatar) côté client sans signature. Il est rapide à configurer mais moins sécurisé que l'approche HMAC. Enfin, **Aucun** désactive complètement le SSO, de sorte que les utilisateurs commentent anonymement.

### Préférences de Notification des Utilisateurs

Les étudiants peuvent gérer leurs paramètres de notification FastComments directement depuis leur profil Moodle. Sous la section **FastComments**, ils peuvent activer ou désactiver les notifications de réponse (recevoir un e-mail lorsque quelqu'un répond à leur commentaire) et les notifications d'abonnement (recevoir des e-mails pour les fils auxquels ils se sont abonnés). Cela garde tout au même endroit et donne aux étudiants le contrôle sur la quantité d'e-mails qu'ils reçoivent.

### En Conclusion

Le plugin Moodle est disponible maintenant. Pour le guide d'installation complet, consultez le 
[Guide d'Intégration Moodle](https://docs.fastcomments.com/guide-installation-moodle.html), et le code source est sur 
[GitHub](https://github.com/FastComments/fastcomments-moodle). Faites-nous savoir ci-dessous si vous avez des commentaires !

À la vôtre!

{{/isPost}}

---