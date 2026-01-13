---
[category:Performance]
###### [postdate]
# [postlink]Indicizzazione dei tuoi thread di commenti nei motori di ricerca[/postlink]

{{#unless isPost}}
Abbiamo migliorato le informazioni che i motori di ricerca vedono quando esplorano il tuo sito con FastComments.
{{/unless}}

{{#isPost}}

## Novità

In precedenza, quando i motori di ricerca esploravano i siti web con FastComments installato, indicizzavano solo i commenti della prima pagina (i primi 30).

Questo accadeva perché i motori di ricerca vedevano la stessa cosa che vedevi tu visitando il tuo sito.

Ora, quando un motore di ricerca visita il tuo sito, verranno caricati tutti i commenti.

## Impatti sulla Pagina Rank

I moderni motori di ricerca considerano molti fattori quando classificano una pagina, inclusa la rilevanza del contenuto sulla pagina rispetto a ciò che stai cercando e anche fattori come
il tempo di caricamento della pagina.

Questa modifica significa che il contenuto completo dei tuoi thread di commenti è disponibile per l'indicizzazione, aumentando potenzialmente la rilevanza delle ricerche. Mostra anche coinvolgimento, cosa che
il motore di ricerca può utilizzare per la classificazione.

Un possibile svantaggio è la performance, poiché ora stiamo caricando più commenti; tuttavia, nei nostri test abbiamo riscontrato che sarebbero necessari molti centinaia, se non migliaia di commenti
in un thread per rallentare FastComments al punto da impattare sui tempi di caricamento della pagina e causare una variazione di rank.

Ad esempio, la nostra pagina demo con oltre 100 commenti, mantiene ancora <a href="https://developers.google.com/speed/pagespeed/insights/?url=https%3A%2F%2Ffastcomments.com%2Fdemo" target="_blank">un punteggio di 99/100 da Google PageSpeed Insights</a>.

## I Test Eseguiti

Abbiamo assicurato che i motori di ricerca ora vedano l'intero thread di commenti per una pagina e abbiamo testato la performance di caricamento di interi thread di commenti contemporaneamente.

## Impatto sui Clienti Esistenti

Se sei un cliente esistente che utilizza FastComments, la modifica è già stata applicata al tuo account e non è richiesta ulteriore azione. Una volta che i motori di ricerca reindicizzano le tue pagine,
tutti i commenti su quelle pagine dovrebbero essere indicizzati.

## In Conclusione

Speriamo che tu abbia trovato utile questo aggiornamento e la sua documentazione. Buon commento!

{{/isPost}}