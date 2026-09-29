[category:Features]
[category:Announcements]
[category:UI & Customization]

###### [postdate]
# [postlink]L'arabe et les langues de droite à gauche sont désormais pris en charge[/postlink]

{{#unless isPost}}
FastComments prend désormais en charge l'arabe, et chaque partie de FastComments s'affiche de droite à gauche pour l'arabe et l'hébreu. Les décomptes comme "3 commentaires" utilisent également la forme plurielle correcte dans chaque langue.
{{/unless}}

{{#isPost}}

### Nouveautés

L'arabe est désormais une langue prise en charge, avec le code de locale `ar`. Le widget de commentaires, les autres widgets intégrables, les e‑mails, le tableau de bord et le site marketing sont tous traduits.

L'arabe s'écrit également de droite à gauche, donc son ajout a nécessité d'enseigner à FastComments comment s'afficher dans les deux sens. Cette correction s'applique également à l'hébreu.

### Mise en page de droite à gauche

Lorsque la locale est l'arabe ou l'hébreu, l'ensemble de l'interface est inversé. L'avatar, le nom et les contrôles de réponse d'un commentaire changent de côté, les menus et les listes déroulantes s'ouvrent vers le bord approprié, et les flèches pointent dans le sens de lecture. Cela concerne le widget de commentaires et ses extensions telles que le chat en direct et les sondages, les widgets de ticketing, de chat collaboratif et de résumé d'avis, les e‑mails et le tableau de bord.

Il n'y a rien à configurer, sauf le réglage manuel de votre locale pour votre utilisateur si vous le souhaitez.

### Les commentaires conservent leur propre direction

Il arrive qu'une section de commentaires soit multilingue. Un commentaire en anglais sur une page en arabe, ou un commentaire en arabe sur une page en anglais, doit rester lisible naturellement.

Chaque commentaire et nom d'utilisateur suit la direction de son propre texte. Sur une page en anglais, une réponse en arabe s'affiche de droite à gauche tandis que les commentaires autour s'affichent de gauche à droite, et l'inverse est vrai sur une page en arabe. Les blocs de code à l'intérieur des commentaires s'affichent toujours de gauche à droite, comme le code le fait.

### Configuration de la locale

Par défaut, le widget récupère la locale depuis le navigateur du visiteur, ainsi les locuteurs arabes obtiennent l'arabe automatiquement. Pour la forcer, définissez la locale dans la page de personnalisation du widget sous « Locale / Language », ou dans le code :

<div class="code">    FastCommentsUI(document.getElementById('fastcomments-widget'), {
        tenantId: 'demo',
        locale: 'ar'
    });
</div>

Si vous utilisez le SSO, transmettez `locale: 'ar'` dans l'objet utilisateur afin que leurs e‑mails soient également en arabe.

### Pluriels, correctement gérés

L'anglais possède deux formes pour un décompte : « 1 commentaire » et « 2 commentaires ». L'arabe a des formes distinctes pour un, deux, de trois à dix, et de onze à quatre‑vingt‑dix‑neuf, et utilise à nouveau le singulier pour cent. Le russe, l'ukrainien, le polonais, le croate, le serbe, le slovène et l'hébreu ont également leurs propres règles.

Jusqu'à présent, FastComments ne connaissait que « un » et « tout le reste », de sorte qu'un lecteur russe pouvait voir la mauvaise forme du nom pour 2 ou 5 commentaires. Chaque chaîne contenant un décompte sélectionne désormais la forme correcte pour sa langue, dans le widget, les e‑mails et le tableau de bord.

Pendant que nous y étions, nous avons revu chaque chaîne de décompte dans toutes les langues. Cela a fait apparaître un certain nombre de mauvaises traductions plus anciennes qui sont maintenant corrigées. Par exemple, dans quelques langues, le mot pour « reply » était le verbe « to reply », de sorte qu'un commentaire affichait « 1 Reply » comme l'équivalent de « 1 To reply ».

Si vous avez personnalisé le texte d'un décompte, comme le libellé « comments », votre texte est toujours utilisé pour chaque décompte.

### Trouver votre langue

Les sélecteurs de langue dans le tableau de bord affichent désormais le nom propre de chaque langue à côté de la version anglaise, comme « Arabic (العربية) » et « German (Germany) (Deutsch) ». Si quelqu'un atterrit dans la mauvaise langue, il peut toujours trouver la sienne.

### Documentation

Le <a href="https://docs.fastcomments.com/guide-supported-languages.html" target="_blank">guide des langues prises en charge</a> répertorie chaque code de locale et décrit le comportement de droite à gauche. <a href="https://docs.fastcomments.com/guide-customizations-and-configuration.html#locale" target="_blank">L'option locale</a> explique comment forcer une locale dans le widget.

Cela s'appuie sur [notre première version localisée](/(2-05-2020)-fastcomments-gets-localized.html) de 2020, qui a commencé avec trois langues. Nous disposons maintenant de vingt‑huit locales.

### En conclusion

Nous sommes heureux de pouvoir proposer FastComments aux locuteurs arabes et d'améliorer l'expérience pour les locuteurs hébreux. Si vous repérez une traduction incorrecte dans votre langue, faites‑le nous savoir ci‑dessous et nous la corrigerons.

Santé!

{{/isPost}}