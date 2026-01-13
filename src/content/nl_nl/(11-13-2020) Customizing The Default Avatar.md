---
[category:UI & Customization]

###### [postdate]
# [postlink]Het Aanpassen van het Standaard Avatar[/postlink]

{{#unless isPost}}
De standaard avatar afbeelding kan nu worden aangepast.
{{/unless}}

{{#isPost}}

### <i class="circle">!</i> Dit Artikel Bevat Technisch Jargon

#### Inleiding

Het standaard icoon is hetzelfde gebleven sinds de lancering van FastComments. Bewonder de glorie van het standaard profielicoon.

<div class="text-center">
    <img src="https://fastcomments.com/images/unknown-person.png" title="Standaard Profielicoon" alt="Standaard Profielicoon" />
</div>

Maar nu kun je het aanpassen.

#### Zonder Code

Eerst, <a href="https://fastcomments.com/auth/my-account/customize-widget" target="_blank">voeg een aanpassingsregel toe of bewerk een bestaande</a>. Aanpassingsregels kunnen
worden toegepast op slechts een pagina, een domein, of je gehele account. Als je de profielfoto wereldwijd wilt wijzigen, kun je het veld voor de URL ID leeg laten.

Scroll naar beneden naar de sectie "Standaard Avatar".

<img 
    src="/images/fc-customize-default-icon-button.png"
    alt="FastComments Hackaday Instellingen"
    class='lozad' />
    
Klik op de knop om een JPG, PNG of GIF tot 20mb te uploaden. Het zal worden verkleind tot een vierkant van 100px.

#### In Code

Als je de standaard avatar wilt hosten, en je hebt er al een openbare URL voor, kan deze in code worden gedefinieerd zoals in het gegeven voorbeeld.

<div class="code">    window.FastCommentsUI(document.getElementById('fastcomments-widget'), {
        tenantId: 'demo',
        defaultAvatarSrc: 'https://example.com/some-100-x-100-image.png'
    });
</div>

De afbeelding moet vierkant zijn, en de grootte moet een vierkant van 100px zijn. Volg deze beperkingen voor de beste ervaring.

#### Probleemgevallen

1. Het aanpassen van de standaard profielfoto heeft alleen invloed op jouw site. Het heeft op geen enkele manier invloed op notificatie-e-mails of de accounts van de gebruikers.
2. Opmerkingen die voor deze wijziging zijn gemaakt, kunnen nog steeds de oude profielfoto tonen. Als je het standaard profielicoon aanpast en veel opmerkingen op jouw site ziet met het oude profielicoon, <a href="https://fastcomments.com/auth/my-account/help" target="_blank">laat het ons weten</a>.

#### Conclusie

We hopen dat je deze gids nuttig en gemakkelijk te lezen vond. Voel je vrij om hieronder te reageren met eventuele vragen.

Proost!

{{/isPost}}

---