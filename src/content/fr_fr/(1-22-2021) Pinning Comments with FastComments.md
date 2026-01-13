---
[category:Features]
[category:Moderation]
###### [postdate]
# [postlink]Épingler des commentaires avec FastComments[/postlink]

{{#unless isPost}}
Les commentaires de premier niveau peuvent désormais être épinglés dans les fils de discussion !
{{/unless}}

{{#isPost}}

#### Introduction

Les commentaires peuvent désormais être "épinglés" en haut des fils de discussion, quel que soit l'ordre de tri.

Cela peut être fait sous le menu à trois points situé en haut à droite d'un commentaire, si vous êtes connecté en tant qu'administrateur ou modérateur.

<div class="text-center">
    <img src="images/fc-pinned-comment-example.png" alt="Un commentaire épinglé" title="Un commentaire épinglé" />
</div>

Les nouveaux commentaires apparaîtront sous les commentaires épinglés.

Il n'y a pas de limite au nombre de commentaires épinglés dans un fil de discussion.

#### Votes et âge des commentaires

Quel que soit le nombre de votes ou l'âge des autres commentaires, les commentaires épinglés s'affichent toujours en haut.

#### Qui peut épingler et désépingler des commentaires

Les administrateurs et les modérateurs sont les seuls utilisateurs qui peuvent épingler et désépingler des commentaires.

#### Commentaire en direct

Chaque fois qu'un commentaire est épinglé ou désépinglé, cette mise à jour est envoyée à tous les spectateurs du fil de discussion.

Lorsque l'état d'épingle d'un commentaire change, le commentaire est immédiatement déplacé pour la personne qui épingle le commentaire et toute personne
visualisant le fil de discussion. Si un utilisateur se déconnecte, suivi d'un commentaire étant épinglé, le commentaire sera épinglé et déplacé
pour cet utilisateur lors de la reconnexion.

#### Performance

L'ordre de tri du fil de commentaire est pré-calculé à chaque changement. Cela signifie que le tri supplémentaire requis pour
épingler les commentaires en haut n'affectera pas les temps de chargement de la page.

#### En conclusion

Nous espérons que ce guide vous a été utile et facile à lire. N'hésitez pas à commenter ci-dessous avec vos questions.

À bientôt !

{{/isPost}}

---