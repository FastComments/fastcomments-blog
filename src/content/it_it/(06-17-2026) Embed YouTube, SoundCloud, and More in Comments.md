---
[category:Features]  
[category:UI & Customization]  
###### [postdate]  
# [postlink]Incorpora YouTube, SoundCloud e altro nei commenti[/postlink]  

{{#unless isPost}}  
I commentatori ora possono incollare un codice di incorporamento e avere il video o il lettore visualizzato direttamente all'interno del commento. È disattivato per impostazione predefinita, attivabile per sito, e limitato a fornitori fidati.  
{{/unless}}  

{{#isPost}}  

### Novità

Le persone amano condividere un video o una traccia in una discussione. Fino ad ora, incollare un incorporamento di YouTube o SoundCloud in un commento non serviva a molto. L'`<iframe>` grezzo veniva rimosso per motivi di sicurezza, oppure veniva racchiuso come un blocco di codice.  

Ora puoi attivare gli incorporamenti multimediali per il tuo sito. Quando è attivo, un commentatore può incollare il codice di incorporamento direttamente dal fornitore e viene visualizzato inline, nello stesso modo in cui apparirebbe su qualsiasi altra pagina.  

Ecco il tipo di frammento che le persone copiano da un pulsante "Condividi" o "Incorpora":  

<div class="code"><iframe width="560" height="315" src="https://www.youtube.com/embed/Wfc0Tc12-t8" title="Riproduttore video YouTube" frameborder="0" allowfullscreen></iframe></div>  

Incolla questo in un commento con gli incorporamenti attivati e ottieni il lettore effettivo.  

### Solo Fornitori Fidati

Consentire iframe arbitrari sulla tua pagina è un reale rischio per la sicurezza, quindi non abbiamo semplicemente aperto i cancelli. Gli incorporamenti sono limitati a un elenco integrato di fornitori fidati, tra cui YouTube, Vimeo, SoundCloud, Spotify, Bandcamp, Twitch e Dailymotion.  

Se un commento contiene un iframe che punta altrove, l'iframe viene rimosso quando il commento viene salvato. La stessa sanificazione che protegge da `<script>` e trucchi `onload=` viene comunque eseguita su ogni commento. Gli incorporamenti sono solo un'ulteriore concessione attentamente delimitata oltre a questo.  

### Aggiungere i Propri Fornitori

Se utilizzi un fornitore che non è nell'elenco integrato, puoi permetterlo. C'è un campo "Domini di incorporamento aggiuntivi" dove puoi elencare nomi host extra da considerare fidati, oltre ai fornitori integrati.  

Il confronto avviene per hostname esatto, quindi aggiungi l'intero host da cui viene caricato l'incorporamento, ad esempio `player.example.com`. Qualsiasi cosa tu non elenchi rimane bloccata.  

### Come Attivarlo

È un'impostazione per sito sulla pagina di personalizzazione del widget, proprio accanto alle opzioni di caricamento delle immagini. Seleziona "Consentire incorporamenti multimediali?" e salva. Non è necessario alcun codice o ridistribuzione.  

Come le nostre altre impostazioni di contenuto, questa è per regola di personalizzazione, quindi puoi attivare gli incorporamenti su un sito o su un insieme di pagine e lasciarli disattivati altrove.  

### Funziona in Entrambi gli Editor

Incollare funziona sia nella casella di commento semplice che nell'editor WYSIWYG. Nella casella semplice, il codice di incorporamento viene inserito come testo e diventa un lettore al momento dell'invio. Nell'editor WYSIWYG, l'incorporamento appare immediatamente come un blocco, con un piccolo pulsante di rimozione nell'angolo in modo da poterlo facilmente eliminare se era un errore.  

### In Conclusione

Gli incorporamenti sono disattivati per impostazione predefinita, quindi nulla cambia per il tuo sito a meno che tu non decida di attivarli. Quando lo fai, i tuoi commentatori hanno un modo più carino per condividere video e tracce, e tu mantieni le stesse garanzie di sicurezza che avevi già.  

Attivalo, incolla un video e facci sapere cosa ne pensi qui sotto.  

Saluti!  

{{/isPost}}  

---