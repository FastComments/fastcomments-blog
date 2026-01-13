---
[category:Tutoriels]

###### [postdate]
# [postlink]Comment autoriser les commentaires anonymes avec FastComments[/postlink]

{{#unless isPost}}
Par défaut, FastComments exige un e-mail pour commenter si vous n'êtes pas connecté. Nous utilisons cet e-mail pour créer automatiquement un compte pour l'utilisateur et lui permettre de vérifier son commentaire.
Pour autoriser les commentaires anonymes, vous devez simplement créer une règle de personnalisation. Définissez le domaine, et éventuellement la page, sur laquelle vous souhaitez
autoriser les commentaires anonymes.
{{/unless}}

{{#isPost}}
Par défaut, FastComments exige un e-mail pour commenter si vous n'êtes pas connecté. Nous utilisons cet e-mail pour créer automatiquement un compte pour l'utilisateur et lui permettre de vérifier son commentaire.
Pour autoriser les commentaires anonymes, vous devez simplement créer une règle de personnalisation. Définissez le domaine, et éventuellement la page, sur laquelle vous souhaitez
autoriser les commentaires anonymes.

Cela signifie que vous pouvez contrôler page par page où vous autorisez les commentaires anonymes.

<img 
    src="images/fc-allow-anon.png"
    alt="Autoriser les commentaires anonymes"
    class='lozad' />

{{/isPost}}