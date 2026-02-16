---
---
[category:API & Development]
[category:Announcements]

###### [postdate]
# [postlink]SDK Client Generati Sicuri per Tipo Rilasciati[/postlink]

{{#unless isPost}}
Come accennato nel nostro post sulla migrazione a TypeScript, abbiamo rilasciato SDK client generati e sicuri per tipo per dieci linguaggi di programmazione.
{{/unless}}

{{#isPost}}

### <i class="circle">!</i> Questo Articolo Contiene Terminologia Tecnica

### Novità

Nel nostro [post sulla migrazione a TypeScript](/blog/fastcomments-typescript-migration-completed), abbiamo menzionato che gli SDK client generati erano in arrivo. Sono finalmente qui.

FastComments ora rilascia SDK ufficiali e sicuri per tipo per **dieci linguaggi**:

- TypeScript / JavaScript (npm)
- Python (PyPI)
- Rust (crates.io)
- Go (moduli Go)
- Java (Maven)
- PHP (Composer)
- Ruby (RubyGems)
- Swift (Gestore Pacchetti Swift)
- C++ (CMake)
- Nim (Nimble)

Ogni SDK è generato dalla stessa specifica OpenAPI che produce il nostro server. Tipi, firme dei metodi e modelli di richiesta/risposta rimangono sincronizzati con la vera API automaticamente. Il tuo compilatore rileva errori di battitura nei nomi dei campi e parametri mancanti prima che il tuo codice effettui una richiesta di rete.

### Come Funziona

La migrazione a TypeScript era un prerequisito per questo. Ora che il codice del nostro server è completamente tipizzato, utilizziamo [il nostro fork di TSOA](https://github.com/FastComments/tsoa) per generare una specifica OpenAPI 3.0 direttamente dai nostri controller delle rotte. Quella specifica viene inserita in [OpenAPI Generator](https://openapi-generator.tech/) per produrre librerie client per ogni linguaggio.

Quando l'API cambia, i nostri strumenti rilevano la differenza nella specifica, rigenerano gli SDK interessati, eseguono test per ciascun linguaggio e aprono richieste di pull automaticamente. Abbiamo creato un piccolo strumento di gestione in Nim che orchestra il ciclo di aggiornamento-test-rilascio su tutti e dieci i repository.

### Cosa Contiene Ogni SDK

Ogni SDK fornisce due classi API:

- **`DefaultApi`**: endpoint autenticati che richiedono la tua chiave API. Utilizza questi server-side per moderazione, gestione degli utenti, analisi e operazioni in blocco.
- **`PublicApi`**: endpoint non autenticati sicuri da chiamare da browser e app mobili. Questi coprono il recupero di commenti, pubblicazione, votazione e altre operazioni a contatto con il client.

Tutti gli SDK includono anche strumenti SSO per integrarsi con il tuo sistema di autenticazione esistente. L'SDK TypeScript fornisce inoltre sottoscrizioni a eventi in tempo reale per commenti dal vivo.

### Documentazione

La documentazione completa dell'API è disponibile su [docs.fastcomments.com](https://docs.fastcomments.com/guide-api.html). Ogni repository SDK include anche documenti generati che coprono ogni metodo e modello disponibile.

Per l'integrazione SSO, consulta la nostra [guida SSO](https://docs.fastcomments.com/guide-sso.html). Tutti e dieci gli SDK includono helper SSO utilizzando le loro librerie di crittografia native.

### In Conclusione

Avere un server completamente tipizzato ha reso semplice generare una specifica OpenAPI affidabile e, da lì, generare client per dieci (e un giorno più!) lingue è stato principalmente una questione di costruire l'automazione
e migliorare le nostre definizioni di tipo in modo che siano consumabili, senza aggiungere troppa astrazione che rallenterebbe FastComments!

Come tutte le principali versioni, siamo felici di aver potuto prendere il tempo necessario per ottimizzare, testare e rilasciare correttamente questi SDK. Facci sapere
qui sotto se hai feedback o se c'è un linguaggio che vorresti che aggiungessimo.

Saluti!

{{/isPost}}

---

---