---
[category:Integrations]
[category:Features]
###### [postdate]
# [postlink]Plugin FastComments pour Moodle[/postlink]

{{#unless isPost}}
FastComments dispose désormais d'un plugin Moodle dédié avec SSO, commentaires en fil et chat collaboratif pour vos cours.
{{/unless}}

{{#isPost}}

### Nouvelles Fonctionnalités

Nous sommes heureux d'annoncer le plugin officiel FastComments pour Moodle. Si vous utilisez Moodle et souhaitez ajouter des commentaires en direct, en fil ou un chat collaboratif à vos cours, ce plugin rend cela simple. Il remplace l'ancienne approche manuelle en PHP par un véritable plugin Moodle qui s'installe en quelques minutes et s'intègre avec vos comptes utilisateurs Moodle existants. Le plugin fonctionne avec Moodle 4.1 et versions ultérieures, et le code source est disponible sur [GitHub](https://github.com/FastComments/fastcomments-moodle).

### Prise en Main

Pour installer, obtenez le plugin depuis le [Répertoire des Plugins Moodle](https://moodle.org/plugins/local_fastcomments) et installez-le via l'installateur de plugins de votre site Moodle. Alternativement, vous pouvez le télécharger et le décompresser dans `<moodle-root>/local/fastcomments`, puis vous connecter en tant qu'administrateur du site et visiter **Administration du Site > Notifications**. Moodle détectera le nouveau plugin et effectuera l'installation automatiquement.

Une fois installé, allez à **Administration du Site > Plugins > Plugins Locaux > FastComments** pour le configurer. Vous aurez besoin de votre **ID de Locataire** (trouvé dans votre tableau de bord FastComments) et de votre **Clé API** si vous souhaitez utiliser le SSO Sécurisé, ce que nous recommandons.

### Styles de Commentaires

Le plugin prend en charge trois styles de commentaires, afin que vous puissiez choisir celui qui convient le mieux à vos étudiants et à la structure de votre cours.

**Mode Commentaires** place un widget de commentaire complet en dessous du contenu de la page. Les étudiants obtiennent des réponses en fil, des @mentions, la possibilité de voter pour ou contre, un éditeur de texte enrichi, et la cloche de notification pour s'abonner aux nouveaux commentaires sur une page.

<div class="text-center">
    <div class="sm">Commentaires sur une page de cours</div>
    <img src="images/moodle-course-comments.png" alt="Commentaires de Cours" title="Commentaires de Cours" />
</div>

**Mode Chat Collaboratif** ajoute une barre en haut de la page qui invite les utilisateurs à sélectionner du texte et à commencer une discussion. Le texte surligné est ancré au contenu, de sorte que la conversation reste liée exactement à ce qui est discuté. Il montre également les utilisateurs en ligne et le nombre de discussions actives. Ce mode ne rend pas un widget en bas.

<div class="text-center">
    <div class="sm">Chat collaboratif ancré au texte sélectionné</div>
    <img src="images/moodle-collab-chat.png" alt="Chat Collaboratif" title="Chat Collaboratif" />
</div>

**Mode Chat Collaboratif + Commentaires** vous donne les deux en même temps. Les étudiants peuvent surligner du texte pour des discussions en ligne et également utiliser le widget de commentaire complet en dessous du contenu. Cela est idéal pour les cours où vous voulez à la fois un retour rapide et des conversations plus longues.

<div class="text-center">
    <div class="sm">Les deux styles de commentaires actifs sur une page</div>
    <img src="images/moodle-page-comments.png" alt="Commentaires de Page" title="Commentaires de Page" />
</div>

### SSO Automatique

Le plugin prend en charge trois modes SSO. **SSO Sécurisé** est l'option recommandée. Il signe l'identité des utilisateurs côté serveur avec HMAC-SHA256 en utilisant votre Clé API, de sorte que les identifiants ne sont jamais exposés côté client. Avec le SSO Sécurisé, les administrateurs Moodle sont automatiquement synchronisés en tant que modérateurs FastComments, ce qui signifie que vos administrateurs de site peuvent modérer les commentaires sans configuration supplémentaire. Les avatars, noms et adresses e-mail des utilisateurs sont tous transmis de manière sécurisée.

**SSO Simple** transmet les données des utilisateurs (nom, e-mail, avatar) côté client sans signature. Il est rapide à mettre en place mais moins sécurisé que l'approche HMAC. Enfin, **Aucun** désactive totalement le SSO, de sorte que les utilisateurs commentent anonymement.

### Préférences de Notification des Utilisateurs

Les étudiants peuvent gérer leurs paramètres de notification FastComments directement depuis leur profil Moodle. Sous la section **FastComments**, ils peuvent activer ou désactiver les notifications de réponse (recevoir un e-mail lorsque quelqu'un répond à leur commentaire) et les notifications d'abonnement (recevoir des e-mails pour les fils auxquels ils se sont abonnés). Cela garde tout en un seul endroit et donne aux étudiants le contrôle sur la quantité d'e-mails qu'ils reçoivent.

### En Conclusion

Le plugin Moodle est disponible maintenant. Pour le guide complet d'installation, consultez le
[Guide d'Intégration Moodle](https://docs.fastcomments.com/guide-installation-moodle.html), et le code source est sur
[GitHub](https://github.com/FastComments/fastcomments-moodle). Faites-nous savoir ci-dessous si vous avez des retours !

À bientôt !

{{/isPost}}

---