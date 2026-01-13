---
[category:Features]
###### [postdate]
# [postlink]Tri des fils de commentaires avec FastComments[/postlink]

{{#unless isPost}}
Depuis le lancement, FastComments ne vous permettait pas de changer l'ordre de tri des fils de commentaires. Cela change avec cette version !
{{/unless}}

{{#isPost}}

#### Public Cible

Le public cible de cet article se compose à la fois d'administrateurs et de commentateurs.

#### Introduction

Les commentaires ont toujours été triés en utilisant une combinaison de leur ancienneté et de leur karma (votes positifs + votes négatifs). Jusqu'à présent, c'était la seule direction de tri autorisée.

#### Nouvelles Directions de Tri

Le widget de commentaires FastComments prend désormais également en charge le tri par Nouveaux et Anciens en premier.

#### Changer la Direction de Tri

Lorsque le nombre de commentaires de premier niveau est supérieur à un, un nouveau menu déroulant apparaîtra pour permettre de changer la direction de tri.

<div class="text-center">
    <img src="images/fc-sort-dropdown.png" alt="Menu déroulant de sélection de tri" title="Menu déroulant de sélection de tri" />
</div>

Lors de la sélection de Nouveaux ou Anciens en premier, nous ne tenons pas compte du karma du commentaire.

#### Changer la Direction de Tri par Défaut

Bien que la direction de tri par défaut soit la Plus Pertinente, la direction de tri par défaut peut facilement être personnalisée en créant une <a href="https://fastcomments.com/auth/my-account/customize-widget" target="_blank">règle de personnalisation</a>.

#### Garder Cela Rapide

Afin que FastComments continue à vivre à la hauteur de son nom, une quantité considérable de temps a été consacrée à garantir que le tri de toutes les manières soit bien optimisé. Les commentaires sont triés au fur et à mesure qu'ils sont laissés, donc aucun tri réel n'a lieu lors du chargement de la page. Cela garantit que le chargement du widget de commentaires, et le changement de direction de tri, est rapide peu importe le nombre de commentaires que vous avez.

#### En Conclusion

Nous espérons que vous avez trouvé cette mise à jour utile. N'hésitez pas à commenter ci-dessous si vous avez des questions.

Cheers!

{{/isPost}}

---