[category:Features]
[category:UI &amp; Customization]

###### [postdate]
# [postlink]Commenter sans choisir de nom d'utilisateur[/postlink]

{{#unless isPost}}
FastComments peut désormais attribuer à chaque nouveau visiteur un nom d'utilisateur unique et neutre afin qu'il n'ait jamais à en inventer un. Le nom d'utilisateur par défaut partagé n'est plus non plus « pris » par la première personne qui l'utilise.
{{/unless}}

{{#isPost}}

### Nouveautés

Si votre site ne propose pas de connexion, un visiteur qui souhaite laisser un commentaire doit fournir deux éléments : une adresse e‑mail et un nom d'utilisateur.  
L'e‑mail est simple, mais le nom d'utilisateur doit être unique, il sera public, et ils doivent le choisir immédiatement.

Cette version supprime cette étape. Activez **Generate Usernames Automatically** dans la personnalisation de votre widget, et chaque nouveau
visiteur arrive avec un nom tel que `BraveOtter4172` déjà prérempli. Il peut le conserver ou le remplacer. Dans les deux cas, il
accède plus rapidement à la zone de commentaire.

### Activation

Ouvrez votre <a href="https://fastcomments.com/auth/my-account/customize-widget" target="_blank">Widget Customization</a>,
trouvez la section **Anonymization** et cochez **Generate Usernames Automatically**. Il n'y a rien d'autre à configurer.

Cela fonctionne avec ou sans **Allow Anonymous Comments**. Si vous souhaitez toujours recevoir un e‑mail de chaque commentateur, désactivez les commentaires anonymes. Les visiteurs saisissent leur e‑mail, le nom d'utilisateur est généré pour eux, et c'est tout. Si vous n'avez pas besoin d'e‑mail, activez les commentaires anonymes et un visiteur peut commenter sans rien taper au-delà du commentaire lui‑même.

### Ce que voient les visiteurs

Le champ du nom d'utilisateur est prérempli avec le nom généré. C'est un champ ordinaire, donc toute personne qui souhaite être connue sous un autre nom peut simplement le remplacer. Rien n'est caché et rien n'est imposé.

Les noms sont composés de deux mots et d'un chiffre, ils sont donc lisibles et neutres. Personne ne se retrouve avec `user_83729`.

### Chaque nom est unique

Un nom généré est vérifié par rapport aux comptes existants avant d'être proposé, et il est réservé à la session du navigateur du visiteur afin que le visiteur suivant ne reçoive pas le même. Les utilisateurs connectés, les utilisateurs SSO et les visiteurs qui ont déjà commenté ne reçoivent jamais de nouveau nom. Ils conservent celui qu'ils possèdent.

Un visiteur de retour qui saisit un e‑mail déjà utilisé est associé à son compte existant, de sorte qu'une deuxième visite ne crée pas une seconde identité même si le navigateur a été vidé entre‑temps.

### Correction de bug - Le nom d'utilisateur par défaut est maintenant réellement partagé

Certains d'entre vous utilisaient **Default Username** avec une valeur comme « Anonymous » pour arriver presque au résultat souhaité. Cela présentait un problème. Les noms d'utilisateur sont uniques, donc le premier visiteur à commenter comme « Anonymous » avec son e‑mail possédait le nom, et le visiteur suivant avec un e‑mail différent se voyait indiquer que le nom d'utilisateur était déjà pris.

C'est corrigé. Le nom d'utilisateur par défaut est désormais considéré comme un nom d'affichage partagé plutôt que comme une identité. Chaque visiteur qui le conserve obtient son propre compte en coulisses, et tous s'affichent comme « Anonymous ». Les noms d'utilisateur que les visiteurs saisissent eux‑mêmes doivent toujours être uniques, comme auparavant.

Si vous définissez les deux, le nom généré l'emporte.

### Documentation

<a href="https://docs.fastcomments.com/guide-customizations-and-configuration.html#auto-generate-username" target="_blank">The Generate Usernames Automatically guide</a>
covers the option and how it interacts with the other anonymous commenting settings.  
<a href="https://docs.fastcomments.com/guide-customizations-and-configuration.html#default-username" target="_blank">The Default Username guide</a>
covers the shared-name behavior.

### En conclusion

Celui‑ci provient d'un client qui gère un site où les visiteurs sont des patients qui ne laisseront peut‑être qu'un seul commentaire. Leur demander un e‑mail et un nom d'utilisateur unique était une question de trop. Si un paramètre se trouve entre vos lecteurs et la zone de commentaire, faites‑le nous savoir ci‑dessous.

Santé!

{{/isPost}}