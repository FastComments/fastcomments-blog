---
[category:Features]
###### [postdate]
# [postlink]Ordinare le Discussioni sui Commenti con FastComments[/postlink]

{{#unless isPost}}
Dalla sua creazione, FastComments non ha permesso di cambiare l'ordine di ordinamento della discussione sui commenti. Questo cambia con questa release!
{{/unless}}

{{#isPost}}

#### Pubblico di Destinazione

Il pubblico di destinazione per questo articolo è costituito sia da amministratori che da commentatori.

#### Introduzione

I commenti sono sempre stati ordinati utilizzando una combinazione della loro età e del karma (voti positivi + negativi). Fino ad ora, quella
era l'unica direzione di ordinamento consentita.

#### Nuove Direzioni di Ordinamento

Il widget dei commenti di FastComments ora supporta anche l'ordinamento per Nuovi e Vecchi.

#### Cambiare la Direzione di Ordinamento

Quando il numero di commenti di primo livello è maggiore di uno, apparirà un nuovo menu a discesa per consentire di cambiare la direzione di ordinamento.

<div class="text-center">
    <img src="images/fc-sort-dropdown.png" alt="Menu a Discesa per Selezione Ordinamento" title="Menu a Discesa per Selezione Ordinamento" />
</div>

Quando si seleziona Nuovi o Vecchi, non teniamo conto del karma del commento.

#### Cambiare la Direzione di Ordinamento Predefinita

Sebbene la direzione di ordinamento predefinita sia la Più Rilevante, la direzione di ordinamento predefinita può essere facilmente personalizzata creando una <a href="https://fastcomments.com/auth/my-account/customize-widget" target="_blank">regola di personalizzazione</a>.

#### Mantenerlo Veloce

Affinché FastComments continui a vivere fino al suo nome, è stato speso un considerevole tempo per garantire che
l'ordinamento in tutti i modi sia ben ottimizzato. I commenti vengono ordinati man mano che vengono lasciati, quindi non avviene alcun ordinamento effettivo quando
carichi la pagina. Questo assicura che il caricamento del widget dei commenti e il cambiamento della direzione di ordinamento siano veloci indipendentemente
dal numero di commenti presenti.

#### In Conclusione

Speriamo che tu abbia trovato utile questo aggiornamento. Sentiti libero di commentare qui sotto con eventuali domande.

Saluti!

{{/isPost}}