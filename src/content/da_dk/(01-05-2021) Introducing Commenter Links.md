---
[category:Features]
###### [postdate]
# [postlink]Introduktion af Kommentar Links[/postlink]

{{#unless isPost}}
Vores første udgivelse i 2021 giver mulighed for (hvis aktiveret på lejer-niveau) for brugere at tilføje deres bloglink, når de kommenterer.
{{/unless}}

{{#isPost}}

## Hvad er nyt

Vores første udgivelse i 2021 giver mulighed for (hvis aktiveret på lejer-niveau) for brugere at tilføje deres bloglink, når de kommenterer.

## Hvad er Kommentar Links?

Som vi ser med denne meget nysgerrige udveksling, har en af disse brugere deres brugernavn understreget for at indikere, at det er et link:

<div class="text-center">
    <img src="images/fc-blog-links.png" alt="Kommentar Links" title="Kommentar Links Demo" />
</div>

Dette skyldes, at siden har konfigureret deres FastComments-installation til at tillade udfyldning af et nyt felt, når man kommenterer, hvor brugeren kan efterlade et link:

<div class="text-center">
    <img src="images/fc-blog-link-input.png" alt="Kommentar Link Indgang" title="Kommentar Link Indgang" />
</div>

Dette link kan også tilpasses ved at redigere dine <a href="https://fastcomments.com/auth/my-account/edit-details" target="_blank">Kontooplysninger</a>.

## Aktivering af Kommentarlinks

Ved at oprette en <a href="https://fastcomments.com/auth/my-account/customize-widget" target="_blank">Tilpasningsregel</a> kan vi aktivere det nye indtastningsfelt. Aktivér blot muligheden "Aktivér Kommentar Links".

<div class="text-center">
    <img src="images/fc-commenter-links-enabling.png" alt="Aktivering af Kommentar Links" title="Blog Links" />
</div>

## Overskrive Teksten i Indgangsfeltet

Som standard er pladsholderen for kommentar linkfeltet "Din Blog URL.". Dette kan overskrives via den samme tilpasningsregel, du brugte til at aktivere funktionen, ved at klikke på "Vis Tilpasset Tekst".

## Forbedring af Spam Kategorisering

Denne funktion har den bivirkning at reducere indhold, der bliver markeret som spam, som måske ikke er spam. Kommentarer med lidt tekst og et link har en højere chance for at blive klassificeret som spam. Dog påvirker kommentarlinket ikke klassifikationen af, om kommentaren er spam eller ej. Dette betyder, at en bruger kan kommentere med deres bloglink med en meget lavere risiko for, at kommentaren bliver markeret som spam.

Af disse grunde ønsker sider med mange spam muligvis ikke at aktivere denne funktion, men de, der ikke gør, vil finde værdi i at bruge det med bestemte målgrupper.

## Indvirkning på Eksisterende Kunder

Hvis du er en eksisterende kunde, der bruger FastComments, vil dine brugere ikke opleve nogen ændringer i funktionalitet, medmindre du aktiverer denne funktion. Det samme gælder for nye kunder - du vil opdage, at denne funktion er slået fra som standard.

## Afslutningsvis

Vi håber, at denne funktion er starten på et bedre år end det sidste. God kommentering!

{{/isPost}}