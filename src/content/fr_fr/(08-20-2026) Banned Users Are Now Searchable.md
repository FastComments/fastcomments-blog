[category:Features]
[category:Moderation]

###### [postdate]
# [postlink]Les utilisateurs bannis sont maintenant recherchables[/postlink]

{{#unless isPost}}
La page Utilisateurs bannis possède désormais une ligne de recherche, vous permettant de trouver un bannissement par e‑mail, nom, qui l’a émis, ou le commentaire qui l’a déclenché.
{{/unless}}

{{#isPost}}

### Nouveautés

La page Utilisateurs bannis sous Modérer les commentaires possède désormais une ligne de recherche au-dessus du tableau. Jusqu’à présent, le seul moyen de parcourir cette liste était les contrôles Page et Nombre par page, ce qui est correct lorsque vous avez une douzaine de bannissements, mais pénible lorsque vous en avez plusieurs milliers.

Il y a trois contrôles : **Search By** choisit le champ, **Match** choisit Contient ou Égale, et **Value** correspond à ce que vous recherchez.

### Ce que vous pouvez rechercher

**Search By** propose cinq options :

- **Any Field** - recherche tout ci‑dessous en même temps
- **Email** - l’adresse bannie
- **Name** - le nom enregistré sur le bannissement
- **Banned By** - le modérateur qui a émis le bannissement
- **Banned For Saying** - le texte du commentaire qui a conduit au bannissement de l’utilisateur

Les quatre dernières correspondent aux colonnes du même nom dans le tableau, de sorte que le menu déroulant lit la même chose que ce qu’il filtre.

### Contient vs Égale

**Contains** trouve votre valeur n’importe où dans le champ. **Equals** correspond à l’ensemble du champ.

Contient est celui que vous voulez la plupart du temps. Rechercher `bademail.com` trouve chaque bannissement sur ce domaine, y compris le bannissement générique `*@bademail.com`, car les bannissements génériques sont stockés avec leur astérisque intact.

Égale sert lorsque vous avez la valeur exacte et ne voulez pas de correspondances partielles. Rechercher un e‑mail `spammer@example.com` avec Égale renvoie ce seul bannissement et rien d’autre.

Les deux sont insensibles à la casse sur chaque champ. Cela compte plus qu’il n’y paraît : lorsqu’un bannissement est créé à partir d’un commentaire, seule la partie domaine de l’adresse est mise en minuscules, de sorte qu’un bannissement peut réellement être stocké comme `MixedCase@Example.com`. Rechercher `mixedcase@example.com` le trouve.

### Deux recherches utiles à connaître

**Banned For Saying** recherche le texte du commentaire qui a déclenché le bannissement. Si une phrase ou un lien particulier circule, vous pouvez récupérer tous ceux qui ont été bannis à cause de cela en une seule requête.

**Banned By** recherche le modérateur qui a émis le bannissement. Si vous souhaitez examiner les décisions d’un modérateur spécifique, ou si vous intégrez quelqu’un et voulez voir ce qu’il a fait, il suffit d’une recherche.

### Fonctionne avec la pagination et le partage

La recherche est intégrée dans l’URL de la page, ainsi la pagination des résultats la conserve appliquée et vous pouvez envoyer une liste filtrée à un autre modérateur en copiant l’URL, de la même façon que vous partagez déjà les liens de modération. Démarrer une nouvelle recherche vous ramène à la première page, et **Clear** vous ramène à la liste complète.

### La recherche par nom correspond à ce que vous voyez

Un bannissement enregistre le nom que l’utilisateur avait au moment du bannissement, mais le tableau affiche le nom qu’il possède actuellement. Ce ne sont pas toujours les mêmes, et un bannissement créé en saisissant une adresse e‑mail n’a aucun nom stocké.

Ainsi, la recherche par Nom résout l’utilisateur derrière chaque bannissement et correspond au nom affiché dans le tableau. Si quelqu’un a été banni sous le nom « OldHandle » et a depuis changé pour « NewHandle », les deux le trouvent. Si vous avez banni une adresse et que le tableau affiche un nom pour celle‑ci, rechercher ce nom fonctionne.

### Documentation

<a href="https://docs.fastcomments.com/guide-moderation.html#banning-users" target="_blank">La section Banning Users du Guide de modération</a> couvre la ligne de recherche en détail.

### En conclusion

Celui‑ci est né de l’observation de la façon dont la page est réellement utilisée. Les bannissements s’accumulent silencieusement pendant des années, puis un jour vous devez en trouver un en particulier et il n’y a aucun moyen de le faire. Maintenant, il y en a un.

Faites‑le nous savoir ci‑dessous s’il y a un champ que vous aimeriez pouvoir rechercher et qui n’est pas dans la liste.

Santé!

{{/isPost}}

---