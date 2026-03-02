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

Nous sommes ravis d'annoncer le plugin officiel FastComments pour Moodle. Si vous utilisez Moodle et souhaitez ajouter des
commentaires en direct, en fil ou un chat collaboratif à vos cours, ce plugin simplifie cela. Il remplace l'ancienne approche manuelle en PHP
par un véritable plugin Moodle qui s'installe en quelques minutes et s'intègre à vos comptes utilisateurs Moodle existants. Le plugin fonctionne
avec Moodle 4.1 et versions ultérieures, et le code source est disponible sur [GitHub](https://github.com/FastComments/fastcomments-moodle).

### Commencer

Pour installer, téléchargez le ZIP depuis le [répertoire GitHub](https://github.com/FastComments/fastcomments-moodle) et extraire
dans `<moodle-root>/local/fastcomments`. Ensuite, connectez-vous en tant qu'administrateur du site et visitez **Administration du Site > Notifications**.
Moodle détectera le nouveau plugin et l'installera automatiquement.

Une fois installé, allez à **Administration du Site > Plugins > Plugins locaux > FastComments** pour configurer. Vous aurez besoin de votre
**ID de locataire** (trouvé dans votre tableau de bord FastComments) et de votre **API Secret** si vous souhaitez utiliser le SSO sécurisé, ce que nous recommandons.

Notez que le téléchargement manuel depuis GitHub est temporaire en attendant l'approbation du plugin dans le répertoire des plugins Moodle. Une fois approuvé, vous pourrez l'installer directement à partir de l'installateur de plugins de Moodle.

### Styles de Commentaires

Le plugin prend en charge trois styles de commentaires, vous pouvez donc choisir celui qui fonctionne le mieux pour vos étudiants et votre structure de cours.

Le mode **Commentaires** place un widget de commentaire complet sous le contenu de la page. Les étudiants obtiennent des réponses en fil, des @mentions,
des votes positifs et négatifs, un éditeur de texte enrichi, et la cloche de notification pour s'abonner aux nouveaux commentaires sur une page.

<div class="text-center">
    <div class="sm">Commentaires sur une page de cours</div>
    <img src="images/moodle-course-comments.png" alt="Commentaires de Cours" title="Commentaires de Cours" />
</div>

Le mode **Collab Chat** ajoute une barre en haut de la page qui invite les utilisateurs à sélectionner du texte et à commencer une discussion. Le
texte surligné est ancré au contenu, de sorte que la conversation reste liée exactement à ce qui est discuté. Il montre également les utilisateurs en ligne et le nombre de discussions actives. Ce mode ne rend pas un widget en bas.

<div class="text-center">
    <div class="sm">Chat collaboratif ancré au texte sélectionné</div>
    <img src="images/moodle-collab-chat.png" alt="Chat Collaboratif" title="Chat Collaboratif" />
</div>

Le mode **Collab Chat + Commentaires** vous donne les deux en même temps. Les étudiants peuvent surligner du texte pour des discussions en ligne et aussi
utiliser le widget de commentaire complet en dessous du contenu. C'est excellent pour les cours où vous souhaitez à la fois des feedbacks rapides en ligne et
des conversations plus longues en fil.

<div class="text-center">
    <div class="sm">Les deux styles de commentaires actifs sur une page</div>
    <img src="images/moodle-page-comments.png" alt="Commentaires de Page" title="Commentaires de Page" />
</div>

### SSO Automatique

Le plugin prend en charge trois modes SSO. **SSO Sécurisé** est l'option recommandée. Il signe l'identité de l'utilisateur côté serveur avec
HMAC-SHA256 en utilisant votre API Secret, de sorte que les informations d'identification ne sont jamais exposées du côté client. Avec le SSO sécurisé, les administrateurs Moodle sont
automatiquement synchronisés en tant que modérateurs FastComments, ce qui signifie que vos administrateurs de site peuvent modérer les commentaires sans aucune
configuration supplémentaire. Les avatars, noms et adresses e-mail des utilisateurs sont tous transmis en toute sécurité.

**SSO Simple** transmet les données utilisateur (nom, e-mail, avatar) côté client sans signature. C'est rapide à mettre en place mais moins sécurisé
que l'approche HMAC. Enfin, **Aucun** désactive complètement le SSO, ainsi les utilisateurs commentent de manière anonyme.

### Préférences de Notification des Utilisateurs

Les étudiants peuvent gérer leurs paramètres de notification FastComments directement depuis leur profil Moodle. Sous la section **FastComments**,
ils peuvent activer ou désactiver les notifications de réponse (recevoir un e-mail lorsqu'une personne répond à leur commentaire) et les notifications d'abonnement (recevoir des e-mails pour les fils auxquels ils se sont abonnés). Cela maintient tout en un seul endroit et donne aux étudiants
le contrôle sur la quantité d'e-mails qu'ils reçoivent.

### En Conclusion

Le plugin Moodle est disponible dès maintenant. Pour le guide complet de configuration, consultez le
[Guide d'Intégration Moodle](https://docs.fastcomments.com/guide-installation-moodle.html), et le code source est sur
[GitHub](https://github.com/FastComments/fastcomments-moodle). Faites-nous savoir ci-dessous si vous avez des retours !

Santé !

{{/isPost}}

---