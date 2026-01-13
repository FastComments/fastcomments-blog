---
[category:UI & Customization]

###### [postdate]
# [postlink]Personalizzazione dell'Avatar Predefinito[/postlink]

{{#unless isPost}}
L'immagine avatar predefinita può ora essere personalizzata.
{{/unless}}

{{#isPost}}

### <i class="circle">!</i> Questo Articolo Contiene Terminologia Tecnica

#### Introduzione

L'icona predefinita è rimasta la stessa sin dal lancio di FastComments. Ecco la gloria dell'icona del profilo predefinita.

<div class="text-center">
    <img src="https://fastcomments.com/images/unknown-person.png" title="Icona Profilo Predefinita" alt="Icona Profilo Predefinita" />
</div>

Tuttavia, ora puoi personalizzarla.

#### Senza Codice

Per prima cosa, <a href="https://fastcomments.com/auth/my-account/customize-widget" target="_blank">aggiungi o modifica una regola di personalizzazione</a>. Le regole di personalizzazione possono
essere applicate solo a una pagina, a un dominio o al tuo intero account. Se desideri cambiare l'immagine del profilo globalmente, puoi lasciare vuoto il campo ID URL.

Scorri verso il basso fino alla sezione "Avatar Predefinito".

<img 
    src="/images/fc-customize-default-icon-button.png"
    alt="Impostazioni FastComments Hackaday"
    class='lozad' />
    
Clicca il pulsante per caricare un JPG, PNG o GIF fino a 20mb. Sarà ridimensionato in un quadrato di 100px.

#### In Codice

Se desideri ospitare l'avatar predefinito e hai già un URL pubblico per esso, può essere definito nel codice come nell'esempio fornito.

<div class="code">    window.FastCommentsUI(document.getElementById('fastcomments-widget'), {
        tenantId: 'demo',
        defaultAvatarSrc: 'https://example.com/some-100-x-100-image.png'
    });
</div>

L'immagine dovrebbe essere quadrata e la sua dimensione dovrebbe essere di 100px quadrati. Seguire questi vincoli garantirà la migliore esperienza.

#### Avvertenze

1. La personalizzazione dell'immagine del profilo predefinita influisce solo sul tuo sito. Non influisce in alcun modo sulle email di notifica o sugli account degli utenti.
2. I commenti creati prima di questa modifica potrebbero ancora mostrare la vecchia immagine del profilo. Se regoli l'icona del profilo predefinita e osservi molti commenti sul tuo sito
che utilizzano la vecchia icona del profilo, <a href="https://fastcomments.com/auth/my-account/help" target="_blank">facci sapere</a>.

#### In Conclusione

Speriamo che tu abbia trovato utile e facile da leggere questa guida. Sentiti libero di commentare qui sotto con ulteriori domande.

Saluti!

{{/isPost}}

---