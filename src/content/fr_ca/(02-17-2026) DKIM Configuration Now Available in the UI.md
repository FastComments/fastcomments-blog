---
[category:Features]
[category:Email]

###### [postdate]
# [postlink]Configuration DKIM Maintenant Disponible dans l'UI[/postlink]

{{#unless isPost}}
FastComments propose maintenant une interface utilisateur pour configurer DKIM, facilitant ainsi l'amélioration des taux de livraison d'emails sans utiliser l'API.
{{/unless}}

{{#isPost}}

### Quoi de Neuf

La configuration de DKIM pour votre domaine email personnalisé est désormais plus simple. Auparavant, configurer DKIM requerrait d'utiliser directement
<a href="https://docs.fastcomments.com/guide-api.html#domain-config-structure" target="_blank">l'API de Configurations de Domaine</a>. Maintenant, vous pouvez
configurer DKIM directement depuis l'interface d'administration de FastComments.

### Pourquoi DKIM est Important

Lorsque vous personnalisez le Domaine d'Expéditeur pour les emails que FastComments envoie en votre nom, les fournisseurs d'email doivent vérifier que
ces emails sont légitimes. DKIM (DomainKeys Identified Mail) est l'un des mécanismes d'authentification clés qui aide avec cela.
Sans une configuration DKIM adéquate, les emails envoyés en votre nom ont plus de chances de se retrouver dans les dossiers de spam.

### Comment le Configurer

Accédez à la page <a href="https://fastcomments.com/auth/my-account/configure-domains" target="_blank">Mes Domaines</a> et cliquez
sur "Afficher Avancé" pour le domaine que vous souhaitez configurer. Vous verrez les paramètres DKIM où vous pouvez entrer votre nom de domaine, sélecteur de clé,
et clé privée.

Après avoir enregistré, la configuration DKIM sera appliquée à tous les emails envoyés depuis ce domaine.

### L'API Fonctionne Toujours

Si vous préférez gérer la configuration DKIM de manière programmatique, l'
<a href="https://docs.fastcomments.com/guide-api.html#domain-config-structure" target="_blank">API de Configurations de Domaine</a> continue de fonctionner
comme auparavant.

### En Conclusion

Nous espérons que cela facilitera la garantie que vos utilisateurs reçoivent les emails que FastComments envoie en votre nom. Faites-nous savoir
ci-dessous si vous avez des questions.

À votre santé !

{{/isPost}}

---