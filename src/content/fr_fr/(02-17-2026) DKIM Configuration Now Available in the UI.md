---
[category:Features]
[category:Email]

###### [postdate]
# [postlink]Configuration DKIM Maintenant Disponible dans l'UI[/postlink]

{{#unless isPost}}
FastComments propose maintenant une interface pour configurer DKIM, facilitant ainsi l'amélioration des taux de livraison des emails sans utiliser l'API.
{{/unless}}

{{#isPost}}

### Quoi de Neuf

Configurer DKIM pour votre domaine email personnalisé est devenu plus facile. Auparavant, la configuration de DKIM nécessitait d’utiliser directement l’
<a href="https://docs.fastcomments.com/guide-api.html#domain-config-structure" target="_blank">API de Configuration de Domaines</a>. Désormais, vous pouvez
configurer DKIM directement depuis l'interface d'administration de FastComments.

### Pourquoi DKIM Est Important

Lorsque vous personnalisez le domaine d'expédition pour les emails que FastComments envoie en votre nom, les fournisseurs d'emails doivent vérifier que
ces emails sont légitimes. DKIM (DomainKeys Identified Mail) est l'un des principaux mécanismes d'authentification qui aide à cela.
Sans une configuration DKIM appropriée, les emails envoyés au nom de votre domaine sont plus susceptibles de finir dans les dossiers de spam.

### Comment le Configurer

Naviguez vers la page <a href="https://fastcomments.com/auth/my-account/configure-domains" target="_blank">Mes Domaines</a> et cliquez sur
"Afficher Avancé" pour le domaine que vous souhaitez configurer. Vous verrez les paramètres DKIM où vous pouvez entrer votre nom de domaine, sélecteur de clé,
et clé privée.

Après avoir enregistré, la configuration DKIM sera appliquée à tous les emails envoyés depuis ce domaine.

### L'API Fonctionne Toujours

Si vous préférez gérer la configuration DKIM de manière programmatique, l’
<a href="https://docs.fastcomments.com/guide-api.html#domain-config-structure" target="_blank">API de Configuration de Domaines</a> continue de fonctionner
comme avant.

### En Conclusion

Nous espérons que cela facilitera la réception des emails que FastComments envoie en votre nom par vos utilisateurs. Faites-nous savoir
ci-dessous si vous avez des questions.

À bientôt !

{{/isPost}}

---