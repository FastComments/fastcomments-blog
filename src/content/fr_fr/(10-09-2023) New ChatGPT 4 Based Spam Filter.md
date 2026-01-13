---
[category:Features]
[category:AI & Machine Learning]
###### [postdate]
# [postlink]Nouveau Filtre Anti-Spam Basé sur ChatGPT 4.[/postlink]

{{#unless isPost}}
FastComments enrichit sa liste d'options de filtres anti-spam.
{{/unless}}

{{#isPost}}

### Quoi de Neuf

FastComments continue d'améliorer son classificateur anti-spam Naïve-Bayes, cependant nous avons ajouté une nouvelle option à la flotte de détecteurs de spam.

Vous pouvez maintenant détecter le spam en utilisant ChatGPT 4 fourni par OpenAI.

### Comment L'obtenir

Pour configurer quel détecteur de spam utiliser, vérifiez la page des Paramètres de Modération dans votre tableau de bord admin. Le détecteur de spam basé sur GPT4 est facturé à `$0.08` tous les `1000` tokens.

Ce détecteur de spam n'est disponible que pour les clients sur un plan Flex, car il est facturé en fonction des tokens utilisés.

### Optimisations

Nous passons d'abord tout le contenu par le classificateur Naïve-Bayes partagé afin de limiter les appels à OpenAI. Cela vous permet d'économiser de l'argent pour les spams très évidents. Pour les spams plus sournois, nous appelons ensuite OpenAI pour voir si le contenu ressemble à du spam.

### Résultats

Nous avons observé des améliorations immédiates dans les communautés qui ont activé cette fonctionnalité.

### Documentation

Cela peut être configuré via la page des Paramètres de Modération dans votre tableau de bord admin.

[La documentation est également disponible ici](https://docs.fastcomments.com/guide-moderation.html#spam-detection)

### En Conclusion

Nous remercions nos clients qui nous font part de leurs retours continus afin que nous puissions réfléchir à des idées comme celle-ci. Nous espérons que vous continuez à aimer FastComments.

Santé !

{{/isPost}}

---