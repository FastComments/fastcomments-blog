---
[category:Features]
[category:AI & Machine Learning]
###### [postdate]
# [postlink]Nouveau filtre anti-spam basé sur ChatGPT 4.[/postlink]

{{#unless isPost}}
FastComments ajoute à sa liste d'options de filtres anti-spam.
{{/unless}}

{{#isPost}}

### Quoi de neuf

FastComments continue d'améliorer son classificateur anti-spam Naïve-Bayes, cependant nous avons ajouté une nouvelle option à la flotte de détecteurs de spam.

Vous pouvez maintenant détecter le spam en utilisant ChatGPT 4 fourni par OpenAI.

### Comment l'obtenir

Pour configurer quel détecteur de spam utiliser, consultez la page des paramètres de modération dans votre tableau de bord admin. Le détecteur de spam basé sur GPT4 est facturé à `$0.08` tous les `1000` tokens.

Ce détecteur de spam est uniquement disponible pour les clients ayant un plan Flex, car il est facturé en fonction des tokens utilisés.

### Optimisations

Nous passons d'abord tout le contenu par le classificateur Naïve-Bayes partagé pour limiter les appels à OpenAI. Cela vous fait économiser de l'argent pour les spams très évidents. Pour les spams particulièrement sournois, nous faisons ensuite appel à OpenAI pour voir si le contenu ressemble à du spam.

### Résultats

Nous avons observé des améliorations immédiates dans les communautés qui ont activé cette fonctionnalité.

### Documentation

Cela peut être configuré via la page des paramètres de modération dans votre tableau de bord admin.

[La documentation peut également être consultée ici](https://docs.fastcomments.com/guide-moderation.html#spam-detection)

### En conclusion

Nous remercions nos clients qui nous donnent des retours continus afin que nous puissions penser à des idées comme celle-ci. Nous espérons que vous continuez à aimer FastComments.

À votre santé !

{{/isPost}}

---