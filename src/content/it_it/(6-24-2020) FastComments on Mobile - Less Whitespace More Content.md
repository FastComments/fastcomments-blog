---
[category:UI & Customization]
###### [postdate]
# [postlink]FastComments su Mobile - Meno Spazio Bianco, Più Contenuto[/postlink]

{{#unless isPost}}
Abbiamo migliorato la leggibilità e l'aspetto di FastComments su mobile.
{{/unless}}

{{#isPost}}
#### Il Problema

Quando abbiamo inizialmente lanciato FastComments volevamo un design elegante che funzionasse bene sia su mobile che su browser desktop. Tuttavia, mentre aggiungevamo più funzionalità e vedevamo gli utenti interagire con FastComments ci siamo resi conto che stavamo sprecando spazio sullo schermo nella nostra UI mobile cercando di renderla "carina".

Quindi abbiamo trovato un compromesso.

#### La Soluzione

Qui puoi vedere prima, non usavamo lo spazio in modo molto efficiente.

<div class="text-center">
    <img 
        src="images/mobile-v1.png"
        alt="Mobile Version Before"
        title="Mobile Version Before"
        class='lozad' />
</div>

Ora, abbiamo scambiato lo spazio verticale dello schermo con lo spazio orizzontale.

<div class="text-center">
    <img 
        src="images/mobile-v2.png"
        alt="Mobile Version After"
        title="Mobile Version After"
        class='lozad' />
</div>

    
#### Implicazioni delle Regole di Personalizzazione

Siamo consapevoli che quando apportiamo modifiche allo stile del widget dei commenti pubblico, possiamo rompere le personalizzazioni dei nostri clienti. Non preoccuparti, ti abbiamo coperto e abbiamo esaminato lo stile personalizzato di tutti i widget per assicurarci che non sia rotto. Tuttavia, se riscontri problemi faccelo sapere.

#### Implicazioni sulle Prestazioni

Questa modifica ha aumentato le dimensioni del widget di circa 300 byte, portandolo a un totale di 10.1kb. Come per tutti i rilasci che aumentano le dimensioni del widget, stiamo cercando modi per riportarlo a una dimensione inferiore.

Buon commento!

{{/isPost}}