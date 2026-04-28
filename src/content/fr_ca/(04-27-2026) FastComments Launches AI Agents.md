---
[category:Features]
[category:Moderation]
[category:Announcements]
###### [postdate]
# [postlink]Lancement des agents IA de FastComments[/postlink]

{{#unless isPost}}
Vous pouvez maintenant déployer des agents IA qui lisent chaque nouveau commentaire, répondent dans votre voix, escaladent les décisions difficiles et attribuent des badges à vos meilleurs contributeurs. Ils fonctionnent selon votre horaire, à l'intérieur de votre budget, et ne font que ce que vous leur permettez.
{{/unless}}

{{#isPost}}

### Une note à la communauté

Je veux juste mettre cela au clair dès le départ - nous ne construisons pas quelque chose qui permettrait à des bots de prétendre être de vrais utilisateurs. Ce n'est pas quelque chose que je crois être bon pour Internet, les communautés en ligne ou la direction de notre produit. Le but des agents IA est d'autonomiser les équipes de modération ou les propriétaires de communauté qui ne peuvent pas se permettre de modérateurs dédiés.

Tous les commentaires laissés par l'IA doivent avoir le tag "Bot". C'est ainsi que le produit est livré, et tout site supprimant le tag Bot des commentaires des bots aura la fonctionnalité désactivée. De plus, nous utilisons uniquement des fournisseurs de LLM qui ne s'entraînent pas sur nos données. Nous utilisons actuellement DeepInfra, qui ne fournit que des inférences pour des modèles open source.

Maintenant que cela est mis au clair :)

### Quoi de Neuf

FastComments propose désormais des agents automatisés capables d'effectuer des tâches de modération, de mettre en avant des commentaires, de résumer des fils de commentaires, et plus encore.

Vous pouvez les trouver sous [Personnaliser, puis Agents IA](https://fastcomments.com/auth/my-account/ai-agents).

### Déclencheurs et Outils

Chaque agent est configuré avec une liste de déclencheurs et une liste d'actions autorisées. Les déclencheurs comprennent de nouveaux commentaires, des modifications, des suppressions, des seuils de vote, des seuils de signalement, des actions de modérateurs, des commentateurs pour la première fois, et plus encore. Si vous ne souhaitez pas qu'un agent bannisse des utilisateurs, vous pouvez exclure l'outil de bannissement.

Par exemple, si vous souhaitez uniquement un "résumeur de fil" qui ne répond qu'après un certain nombre de commentaires et met en avant ce commentaire, vous pouvez configurer les permissions de l'agent pour qu'il n'ait accès qu'à ces actions.

Vous pouvez également restreindre un agent à des modèles d'URL spécifiques comme `/news/*` ou `/forums/*`, et à des localisations spécifiques, de sorte qu'un agent de communauté en français ne commence pas à répondre sur vos pages en anglais.

### Exécution à Sec, Approvals et Budgets

Chaque agent se lance par défaut en mode d'exécution à sec. En mode d'exécution à sec, l'agent lit le contexte et décrit ce qu'il ferait, mais ne fait en réalité rien. Vous pouvez observer quelques déclencheurs réels passer, regarder les actions proposées et le raisonnement de l'agent, et décider si vous lui faites confiance avant de l'activer.

Pour les outils sensibles, vous pouvez exiger une approbation humaine. L'agent met en file d'attente l'action, un admin examine l'action proposée ainsi que le raisonnement et la confiance de l'agent, et approuve ou rejette. Les bannissements nécessitent toujours une approbation dans l’UE en vertu de l'article 17 de la DSA, mais vous pouvez exiger une approbation pour n’importe quel outil, n'importe où.

Chaque agent a une limite de budget quotidienne et mensuelle. Lorsque la limite est atteinte, l'agent cesse de fonctionner jusqu'à la fin de la période. Nous vous envoyons un email à des seuils par défaut de 80 % et 100 % (vous pouvez également opter pour une alerte à 50 %) afin qu'il n'y ait pas de factures surprises.

### Mémoire

Les agents possèdent une mémoire que l'agent lit et écrit pour lui-même. Ils peuvent sauvegarder de courtes notes sur un utilisateur ou un modèle, comme "averti pour hors sujet trois fois" ou "anneau de spam publiant des liens vers le domaine X", et lire ces notes lors du prochain déclencheur. La mémoire est partagée entre les agents de votre locataire, donc les notes d'un agent d'accueil peuvent informer les décisions d'un agent de modération par la suite. La mémoire associée à un utilisateur est nettoyée s'il supprime son compte.

### Relecture et Exécution de Test

Avant de laisser un agent agir sur du trafic en direct, vous pouvez le faire fonctionner sur vos commentaires historiques. L'outil de relecture parcourt de vrais commentaires passés en mode d'exécution à sec, vous montre ce que l'agent aurait fait, et classe chaque action proposée par rapport à ce qui a réellement eu lieu. C'est la manière la plus rapide d'ajuster une invite système sans attendre des événements en direct.

### Modèles, Confidentialité et Coût

Les agents fonctionnent sur des modèles à poids ouverts hébergés par des fournisseurs d'infrastructure qui ne s'entraînent pas sur les données des clients. Aujourd'hui, vous pouvez choisir entre un modèle plus rapide (gpt-oss-120B-turbo) et un modèle plus intelligent, mais plus lent (GLM 5.1), et nous continuerons à ajouter des options à mesure que le paysage évolue. Les coûts sont mesurés par jeton et convertis en dollars sur votre page d'utilisation, parmi les tendances quotidiennes et mensuelles.

Dans le cadre de ce changement, nous réduisons nos coûts de jetons de 80 $ pour 1M de jetons à 20 $ pour 1M de jetons d'entrée/sortie combinés. La plupart de nos clients dépensent très peu pour les jetons de détection de spam, car le système de détection de spam basé sur LLM initial ne triageait vers le LLM que si le spam passait le classificateur naïve-bayes, d'où le coût élevé à l'origine. Nous réduisons le coût pour encourager l'utilisation de la nouvelle fonctionnalité d'agents.

À un moment donné, lorsque les coûts de mémoire redescendront et que des modèles comme GLM 5.1 deviendront plus raisonnables à exécuter sur du matériel auto-hébergé, nous passerons à l'abandon de l'utilisation d'un fournisseur externe et exécuterons le matériel nous-mêmes.

### En Conclusion

Nous avons longtemps réfléchi à la manière de construire cela sans donner l'impression que l'agent est aux commandes. L'exécution à sec, les approbations, les outils restreints, les limites de budget et la relecture historique existent tous pour vous aider à garder le contrôle. Nous espérons que les agents IA libéreront vos modérateurs pour les conversations qui ont réellement besoin d'un humain.

Nous remercions nos clients qui nous fournissent des retours continus afin que nous puissions penser à des idées comme celle-ci et nous donner également le temps de bien les lancer. Comme toujours, faites-nous savoir ci-dessous si vous découvrez des problèmes.

Santé !

{{/isPost}}