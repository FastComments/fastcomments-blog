---
[category:UI & Customization]

###### [postdate]
# [postlink]Tilpasning Af Det Standard Avatar[/postlink]

{{#unless isPost}}
Det standard avatarbillede kan nu tilpasses.
{{/unless}}

{{#isPost}}

### <i class="circle">!</i> Denne Artikel Indeholder Teknisk Jargon

#### Introduktion

Det standard ikon har været det samme siden FastComments blev lanceret. Se her æren af det standard profilikon.

<div class="text-center">
    <img src="https://fastcomments.com/images/unknown-person.png" title="Standard Profilikon" alt="Standard Profilikon" />
</div>

Men nu kan du tilpasse det.

#### Uden Kode

Først, <a href="https://fastcomments.com/auth/my-account/customize-widget" target="_blank">tilføj eller rediger en tilpasningsregel</a>. Tilpasningsregler kan
anvendes til kun en side, et domæne, eller hele din konto. Hvis du vil ændre profilbilledet globalt kan du lade URL ID-feltet stå tomt.

Rul ned til sektionen "Standard Avatar".

<img 
    src="/images/fc-customize-default-icon-button.png"
    alt="FastComments Hackaday Indstillinger"
    class='lozad' />
    
Klik på knappen for at uploade et JPG, PNG, eller GIF på op til 20mb. Det vil blive ændret til en 100px kvadrat.

#### I Kode

Hvis du ønsker at hoste det standard avatar, og du allerede har en offentlig URL til det, kan det defineres i kode som i det givne eksempel.

<div class="code">    window.FastCommentsUI(document.getElementById('fastcomments-widget'), {
        tenantId: 'demo',
        defaultAvatarSrc: 'https://example.com/some-100-x-100-image.png'
    });
</div>

Billedet skal være kvadratisk, og dets størrelse skal være en 100px kvadrat. At følge disse begrænsninger vil sikre den bedste oplevelse.

#### Fælde

1. Tilpasning af det standard profilbillede påvirker kun din side. Det påvirker ikke notifikations-e-mails, eller brugernes konti på nogen måde.
2. Kommentarer oprettet før denne ændring kan stadig vise det gamle profilbillede. Hvis du justerer det standard profilikon og observerer mange kommentarer på din side
der bruger det gamle profilikon, <a href="https://fastcomments.com/auth/my-account/help" target="_blank">lad os vide</a>.

#### Afslutning

Vi håber, du har fundet denne guide nyttig og let at læse. Tøv ikke med at kommentere nedenfor med eventuelle spørgsmål.

Skål!

{{/isPost}}

---