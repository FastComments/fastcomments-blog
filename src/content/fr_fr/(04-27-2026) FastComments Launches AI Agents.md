---
[category:Features]
[category:Moderation]
[category:Announcements]
###### [postdate]
# [postlink]FastComments lance des agents IA[/postlink]

{{#unless isPost}}
Vous pouvez désormais déployer des agents IA qui lisent chaque nouveau commentaire, répondent dans votre voix, escaladent les décisions difficiles et attribuent des badges à vos meilleurs contributeurs. Ils fonctionnent selon votre emploi du temps, dans votre budget, et ne font que ce que vous leur permettez.
{{/unless}}

{{#isPost}}

### Une note pour la communauté

Je veux juste régler cela dès le début - nous ne construisons pas quelque chose qui permet aux bots de faire semblant d'être de vrais utilisateurs. Ce n'est pas quelque chose que je crois être bon pour Internet, les communautés en ligne ou la direction de notre produit. L'objectif avec les agents IA est de renforcer les équipes de modération ou les propriétaires de communauté qui ne peuvent pas se permettre des modérateurs dédiés.

Tous les commentaires laissés par l'IA doivent avoir le tag "Bot". C'est ainsi que le produit est conçu, et tout site retirant d'une manière ou d'une autre le tag Bot des commentaires de bots aura la fonctionnalité désactivée. De plus, nous utilisons uniquement des fournisseurs LLM qui ne s'entraînent pas sur nos données. Nous utilisons actuellement DeepInfra, qui fournit uniquement l'inférence pour des modèles open source.

Maintenant que c'est dit :)

### Quoi de neuf

FastComments propose désormais des agents automatisés capables d'effectuer des tâches de modération, de mettre en avant des commentaires, de résumer des fils de commentaires, et plus encore.

Vous pouvez les trouver sous [Personnaliser, puis Agents IA](https://fastcomments.com/auth/my-account/ai-agents).

### Déclencheurs et outils

Chaque agent est configuré avec une liste de déclencheurs et une liste d'actions autorisées. Les déclencheurs incluent les nouveaux commentaires, les modifications, les suppressions, les seuils de vote, les seuils de signalement, les actions des modérateurs, les premiers commentateurs, et plus encore. Si vous ne souhaitez pas qu'un agent bannisse des utilisateurs, vous pouvez exclure l'outil de bannissement.

Par exemple, si vous souhaitez uniquement un "résumeur de fil" qui ne répond qu'après un certain nombre de commentaires et met en avant ce commentaire, vous pouvez configurer
les autorisations de l'agent pour qu'il ait uniquement accès à ces actions.

Vous pouvez également restreindre un agent à des motifs d'URL spécifiques comme `/news/*` ou `/forums/*`, et à des localisations spécifiques, afin qu'un agent de communauté francophone ne commence pas à répondre sur vos pages en anglais.

### Simulation, approbations et budgets

Chaque agent est lancé en mode simulation par défaut. En mode simulation, l'agent lit le contexte et écrit ce qu'il ferait, mais ne fait en réalité rien. Vous pouvez observer quelques déclencheurs réels passer, regarder les actions proposées et le raisonnement de l'agent, et décider si vous lui faites confiance avant de l'activer.

Pour des outils sensibles, vous pouvez exiger une approbation humaine. L'agent met l'action en file d'attente, un administrateur examine l'action proposée avec le raisonnement de l'agent et sa confiance, et approuve ou rejette. Les bans nécessitent toujours une approbation dans l'UE selon l'Article 17 de la DSA, mais vous pouvez demander une approbation pour n'importe quel outil, n'importe où.

Chaque agent a un plafond budgétaire quotidien et mensuel. Lorsque le plafond est atteint, l'agent cesse de fonctionner jusqu'à la fin de la période. Nous vous envoyons un email aux seuils par défaut de 80 % et 100 % (vous pouvez également opter pour une alerte à 50 %) afin qu'il n'y ait pas de factures surprises.

### Mémoire

Les agents ont une mémoire que l'agent lit et écrit pour lui-même. Ils peuvent enregistrer de courtes notes sur un utilisateur ou un motif, comme "averti pour hors sujet trois fois" ou "anneau de spam publiant des liens vers le domaine X", et relire ces notes lors du prochain déclencheur. La mémoire est partagée entre les agents de votre locataire, de sorte que les notes d'un agent d'accueil peuvent informer les décisions d'un agent de modération ultérieurement. La mémoire associée à un utilisateur est nettoyée s'il supprime son compte.

### Relecture et test

Avant de laisser un agent interagir avec le trafic en direct, vous pouvez l'exécuter contre vos commentaires historiques. L'outil de relecture examine de vrais commentaires passés en mode simulation, vous montre ce que l'agent aurait fait, et classe chaque action proposée par rapport à ce qui s'est réellement passé. C'est le moyen le plus rapide d'ajuster un prompt système sans attendre des événements en direct.

### Modèles, confidentialité et coût

Les agents fonctionnent sur des modèles open-weight hébergés par des fournisseurs d'infrastructure qui ne s'entraînent pas sur les données des clients. Aujourd'hui, vous pouvez choisir entre un modèle plus rapide (gpt-oss-120B-turbo) et un modèle plus intelligent mais plus lent (GLM 5.1), et nous continuerons à ajouter des options à mesure que le paysage évolue. Le coût est mesuré par token et converti en dollars sur votre page d'utilisation, aux côtés des tendances quotidiennes et mensuelles.

Dans le cadre de ce changement, nous réduisons nos coûts de tokens de 80 $ pour 1M Tokens à 20 $ par 1M de tokens d'entrée/sortie combinés. La plupart de nos clients dépensent très peu pour la détection de spam, car le système de détection de spam basé sur LLM d'origine ne triait vers le LLM que si le spam échappait au classificateur naïf de bayes, d'où le coût élevé à l'origine. Nous abaissons le coût pour encourager l'utilisation de la nouvelle fonctionnalité des agents.

À un moment donné, lorsque les coûts de mémoire redescendront et que des modèles comme GLM 5.1 seront plus raisonnables à utiliser sur du matériel auto-hébergé, nous arrêterons d'utiliser un fournisseur externe et gérerons le matériel nous-mêmes.

### En conclusion

Nous avons longuement réfléchi à la manière de construire cela sans que cela donne l'impression que l'agent était aux commandes. Le mode simulation, les approbations, les outils restreints, les plafonds budgétaires et la relecture contre l'historique existent tous pour vous aider à rester en contrôle. Nous espérons que les agents IA libèrent vos modérateurs pour les conversations qui nécessitent réellement un humain.

Nous remercions nos clients qui nous donnent un retour continu afin que nous puissions penser à des idées comme celle-ci et également nous donner le temps de bien les lancer. Comme toujours, faites-nous savoir ci-dessous si vous découvrez des problèmes.

À bientôt !

{{/isPost}}

---