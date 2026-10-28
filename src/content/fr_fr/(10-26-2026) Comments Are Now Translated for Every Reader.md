[category:Features]
[category:UI & Customization]

###### [postdate]
# [postlink]Les commentaires sont maintenant traduits pour chaque lecteur[/postlink]

{{#unless isPost}}
FastComments peut désormais traduire les commentaires eux‑mêmes, pas seulement le widget qui les entoure. Activez‑le par site ou par page, automatiquement ou avec un bouton Traduire, et chaque lecteur voit la conversation dans sa propre langue avec l'original à un clic.
{{/unless}}

{{#isPost}}

### Nouveautés

FastComments a été traduit en vingt‑huit langues depuis un certain temps, de sorte que les boutons, les libellés et les e‑mails s’affichent déjà dans la langue du lecteur. Les commentaires, eux, ne l’étaient pas. Un commentaire en espagnol sur une page en anglais restait en espagnol, et quiconque ne le lisait pas faisait défiler la page.

Cette version ajoute la **Traduction des commentaires**. Lorsqu’elle est activée, un commentaire rédigé dans une langue différente de celle du lecteur est affiché traduit, avec une petite ligne en dessous indiquant sa provenance et un lien **Afficher l'original** pour voir ce qui a réellement été écrit.

<img src="images/fc-comment-translation-auto.png" alt="Un lecteur anglais voyant un commentaire espagnol traduit, avec une ligne Traduit de l'espagnol et un lien Afficher l'original en dessous" title="Traduction automatique des commentaires" class="lozad" />

### Deux modes

**Automatique** traduit immédiatement. Chaque commentaire dans une autre langue arrive traduit, et le lecteur peut basculer vers l'original s’il le souhaite. C’est le mode pour une communauté qui écrit réellement en deux langues ou plus et qui veut que tout le monde lise la même conversation.

**Manuel** ajoute un lien **Traduire** à chaque commentaire et ne fait rien tant qu’il n’est pas cliqué. Le lecteur décide quels commentaires méritent d’être traduits, et rien n’est dépensé pour ceux dont personne ne demande la traduction. Un commentaire déjà dans la langue du lecteur l’indique plutôt que de faire semblant de le traduire.

<img src="images/fc-comment-translation-manual.png" alt="Mode manuel, où un commentaire en espagnol a été traduit au clic et un commentaire en anglais indique qu’il est déjà dans la langue du lecteur" title="Traduction manuelle des commentaires" class="lozad" />

Dans les deux modes, la langue du lecteur est celle que le widget affiche déjà : le **Locale / Langue** que vous avez défini dans la règle de personnalisation, ou la langue du navigateur du visiteur si vous n’en avez pas défini. Il n’y a rien à installer, à s’inscrire ou à configurer pour le visiteur. Cela fonctionne de la même façon que le widget soit intégré à votre page, dans un constructeur de site comme Google Sites, ou sur une page de commentaires FastComments autonome.

### Activation

Ouvrez votre <a href="https://fastcomments.com/auth/my-account/customize-widget" target="_blank">Personnalisation du widget</a>, trouvez **Traduction des commentaires** juste sous **Locale / Langue**, et choisissez Automatique ou Manuel. Elle est désactivée par défaut.

Comme elle fait partie d’une règle de personnalisation, vous pouvez la déployer comme vous le souhaitez : sur l’ensemble de votre site, un domaine, ou une page unique où vous savez que le public est mixte. C’est un paramètre côté serveur, il ne peut donc pas être activé uniquement depuis la configuration JavaScript du widget.

### Coût

Les traductions sont générées par un modèle linguistique et facturées sous forme de jetons LLM, le même compteur que les [AI Agents](/(04-27-2026)-fastcomments-launches-ai-agents.html). Tout plan peut l’activer.

Chaque commentaire est traduit une fois par langue et la traduction est stockée avec le commentaire. Si mille lecteurs espagnols ouvrent le même fil anglais, le travail de traduction n’est effectué qu’une fois. Un commentaire typique représente quelques centaines de jetons, ce qui, aux tarifs Flex, équivaut à environ un demi‑centime. Si l’auteur ou un modérateur modifie un commentaire, la traduction stockée est supprimée et le commentaire est retraduit lors de la prochaine visualisation, de sorte que personne ne lit une traduction d’un texte qui n’existe plus.

Le mode manuel ne coûte rien tant que personne ne clique pas.

### Les détails

Le texte traduit est traité exactement comme un commentaire tapé par un utilisateur. Il passe par la même désinfection et les mêmes règles de lien que l’original, de sorte qu’une traduction ne peut contenir rien que l’original ne pouvait contenir. Les mentions et les hashtags conservent leur formatage.

Les commentaires très longs, ou dont la langue ne peut être détectée avec certitude, sont laissés tels quels plutôt que devinés. La ligne de langue sous un commentaire traduit est également dans la langue du lecteur, de sorte qu’un lecteur espagnol d’un commentaire anglais voit « Traduit de l'anglais » et « Afficher l'original ».

### Surcharge

Le code de cette nouvelle fonctionnalité n’est chargé que lorsqu’il est activé, il ne ralentit donc pas le widget de commentaires pour nos autres utilisateurs.

### Documentation

<a href="https://docs.fastcomments.com/guide-customizations-and-configuration.html#comment-translation" target="_blank">Le guide de la traduction des commentaires</a>
couvre les deux modes, le paramètre de règle et la facturation.
<a href="https://docs.fastcomments.com/guide-customizations-and-configuration.html#locale" target="_blank">Le guide des paramètres régionaux</a>
explique comment la langue du widget est choisie initialement.

### En conclusion

Celui‑ci provient d’une association de quartier dont les résidents commentent en anglais et en espagnol, et qui souhaitaient que les deux groupes lisent le même fil sans demander à quiconque d’installer une extension de navigateur ou de s’inscrire à quoi que ce soit.

Si vous gérez une communauté qui écrit dans plusieurs langues, activez‑la et dites‑nous ci‑dessous comment les traductions se lisent.

Santé!

{{/isPost}}

---