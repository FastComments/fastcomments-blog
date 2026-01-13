---
[category:Performance]
[category:Features]
###### [postdate]
# [postlink]Eliminare l'iframe per SEO[/postlink]

{{#unless isPost}}
Abbiamo migliorato la visibilità dei tuoi commenti per i motori di ricerca e aumentato la probabilità che il contenuto venga attribuito al tuo sito.
{{/unless}}

{{#isPost}}

## Cosa c'è di Nuovo

In precedenza, FastComments mostravano i tuoi thread di commenti in un iframe quando venivano indicizzati dai motori di ricerca. Questo perché l'applicazione richiede l'uso di iframes
per come gestiamo i cookie per le sessioni degli utenti.

Tuttavia, questo presenta un problema con i motori di ricerca, poiché non garantiscono che il contenuto nell'iframe venga attribuito al tuo sito.

Ora, quando vengono renderizzati i commenti, lo script di embed controlla se la pagina viene caricata da un crawler. Se sì, non utilizzerà un iframe!

## Quanti Commenti Vengono Mostrati

Fino a 2.000 commenti verranno mostrati ai motori di ricerca per una pagina. Saranno ordinati in base all'ordine di default configurato.

## I Test che Abbiamo Eseguito

Abbiamo garantito che i motori di ricerca ora vedano l'intero thread di commenti per una pagina e abbiamo testato le prestazioni di caricamento di interi thread di commenti contemporaneamente.

## Impatto sui Clienti Esistenti

Se sei un cliente esistente che utilizza FastComments, la modifica è già stata applicata al tuo account e non è richiesta ulteriore azione. Una volta che i motori di ricerca reindicizzano le tue pagine, 
tutti i commenti su quelle pagine dovrebbero essere indicizzati.

## In Conclusione

Speriamo che tu abbia trovato utile questo aggiornamento e la sua documentazione. Buon commento!

{{/isPost}}