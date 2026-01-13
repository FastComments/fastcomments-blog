---
[category:Tutorials]
###### [postdate]
# [postlink]Debugging Your FastComments Installation Made Easier[/postlink]

{{#unless isPost}}
I commenti non vengono visualizzati? Le impostazioni non sembrano essere applicate? Capire questo è diventato molto più facile.
{{/unless}}

{{#isPost}}

### <i class="circle">!</i> Questo Articolo Contiene Gergo Tecnico

#### Novità

Presso <a href="https://fastcomments.com">FastComments</a> abbiamo appena rilasciato un'estensione per browser per Google Chrome. Questa estensione ti assisterà nella comprensione di quale configurazione
il widget dei commenti sta ricevendo e perché potrebbe non essere visualizzato.

Puoi trovare l'estensione qui: <a href="https://chrome.google.com/webstore/detail/fastcomments-debugger/cadggdemhfkjjghkdbfhonoccnplffjj" target="_blank">https://chrome.google.com/webstore/detail/fastcomments-debugger/cadggdemhfkjjghkdbfhonoccnplffjj</a>

#### Come Usarlo

Se trovi che il widget dei commenti non si carica, o che alcune configurazioni che hai definito non vengono visualizzate, prova a installare <a href="https://chrome.google.com/webstore/detail/fastcomments-debugger/cadggdemhfkjjghkdbfhonoccnplffjj">l'estensione</a>
e ad aprirla sulla pagina in questione. Per vedere l'icona nella tua barra degli strumenti, potrebbe essere necessario cliccare sul pezzo di puzzle in alto a destra per fissarla come mostrato:

<div class="text-center">
    <img src="images/fc-extension-pin.png" alt="Come Fissare l'Estensione" title="Come Fissare l'Estensione" class="lozad" />
</div>

L'estensione può aiutare a fare debug di due classificazioni di errori. La prima, se il widget non è affatto incluso nella pagina o se c'è un errore di battitura importante nello script.

La seconda è se qualche configurazione non sembra avere effetto.

Per fare debug di entrambi, inizi semplicemente cliccando sull'icona.

Se lo strumento non trova il widget dei commenti sulla pagina, riceverai un grande errore rosso:

<div class="text-center">
    <img src="images/fc-extension-embed-js-not-found.png" alt="Esempio Embed.js non trovato" title="Esempio Embed.js non trovato" class="lozad" />
</div>

Se una o più istanze del widget sono state trovate, vedrai le loro configurazioni visualizzate separatamente:

<div class="text-center">
    <img src="images/fc-extension-multiple-instances.png" alt="Esempio di Configurazione Multipla" title="Esempio di Configurazione Multipla" class="lozad" />
</div>

Inoltre, il FastComments Debugger mostrerà anche avvisi per comuni insidie - come il widget che non si visualizza in modalità sola lettura se non ci sono commenti disponibili.

#### Impostazioni dell'Istance "Finale"?

Potresti vedere che il debugger mostra due set di configurazioni - uno etichettato "Passato al Widget" e uno etichettato "Finale".

La configurazione "Passato al Widget" è, come puoi immaginare, la configurazione che passi al widget. Alcuni valori vengono implicitamente passati da embed.js come l'URL o il Titolo della Pagina - e questi sono inclusi.

La configurazione "Finale" è tutto ciò che il widget utilizza per rendere se stesso. Questo può significare valori completati automaticamente (come l'id dell'istanza), o <b>valori dalla pagina di amministrazione della personalizzazione del widget</b>.

#### Come Funziona

Il widget dei commenti memorizza la sua configurazione in un luogo dove il debugger può trovarla, e poi il debugger scansiona la pagina corrente su cui ti trovi per le istanze del widget e le carica in memoria.

#### Quali Informazioni Raccoglie Questa Estensione?

Il FastComments Debug Tool non comunica o interagisce con nessun server di FastComments. Infatti, il widget non controllerà nemmeno il contenuto della pagina su cui ti trovi
a meno che tu non lo apra.

#### In Conclusione

Speriamo che fornire più strumenti come questo renda più facile impostare FastComments per ogni tipo di cliente che abbiamo. Facci sapere nella sezione commenti qui sotto
come ha funzionato per te.

Sappiamo che in alcuni casi potresti aver bisogno ancora di una mano - e per questo c'è sempre la <a href="https://fastcomments.com/auth/my-account/help" target="_blank">pagina di supporto clienti</a>.

Saluti!

{{/isPost}}

---