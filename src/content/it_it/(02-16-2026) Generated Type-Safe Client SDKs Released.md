---
---
[category:API & Development]
[category:Announcements]

###### [postdate]
# [postlink]Generated Type-Safe Client SDKs Released[/postlink]

{{#unless isPost}}
Come accennato nel nostro post sulla migrazione a TypeScript, abbiamo rilasciato SDK client generati e tipizzati per dieci linguaggi di programmazione.
{{/unless}}

{{#isPost}}

### <i class="circle">!</i> Questo Articolo Contiene Gergo Tecnico

### Novità

Nel nostro [TypeScript migration post](/(1-31-2025)-fastcomments-typescript-migration-completed-it_it.html), abbiamo menzionato che gli SDK client generati sarebbero arrivati. Sono qui.

FastComments ora fornisce SDK ufficiali e tipizzati per **dieci linguaggi**:

- TypeScript / JavaScript (npm)
- Python (GitHub)
- Rust (crates.io)
- Go (Go modules)
- Java (Maven)
- PHP (Composer)
- Ruby (RubyGems)
- Swift (Swift Package Manager)
- C++ (CMake)
- Nim (Nimble)

Ogni SDK è generato dalla stessa specifica OpenAPI prodotta dal nostro server. Tipi, firme dei metodi e modelli di richiesta/risposta rimangono sincronizzati automaticamente con l'API reale. Il tuo compilatore rileva errori di battitura nei nomi dei campi e parametri mancanti prima che il tuo codice effettui una richiesta di rete.

### Come Funziona

La migrazione a TypeScript è stata un prerequisito per questo. Ora che il codice del nostro server è completamente tipizzato, utilizziamo [our fork of TSOA](https://github.com/FastComments/tsoa) per generare una specifica OpenAPI 3.0 direttamente dai nostri controller di route. Tale specifica viene fornita a [OpenAPI Generator](https://openapi-generator.tech/) per produrre librerie client per ogni linguaggio.

Quando l'API cambia, i nostri strumenti rilevano la differenza nella specifica, rigenerano gli SDK interessati, eseguono i test per ogni linguaggio e aprono pull request automaticamente. Abbiamo creato un piccolo strumento di gestione in Nim che orchestra il ciclo di aggiornamento-test-rilascio su tutti e dieci i repository.

### Cosa Contiene Ogni SDK

Ogni SDK fornisce due classi API:

- **`DefaultApi`**: endpoint autenticati che richiedono la tua chiave API. Usali lato server per moderazione, gestione utenti, analisi e operazioni in batch.
- **`PublicApi`**: endpoint non autenticati sicuri da chiamare da browser e app mobile. Coprono il recupero dei commenti, la pubblicazione, il voto e altre operazioni rivolte al client.

Tutti gli SDK includono anche utility SSO per l'integrazione con il tuo sistema di autenticazione esistente. L'SDK TypeScript fornisce inoltre sottoscrizioni a eventi in tempo reale per i commenti live.

### Documentazione

La documentazione completa dell'API è disponibile su [docs.fastcomments.com](https://docs.fastcomments.com/guide-api.html). Ogni repository SDK include anche documenti generati che coprono ogni metodo e modello disponibile.

Per l'integrazione SSO, consulta la nostra [SSO guide](https://docs.fastcomments.com/guide-sso.html). Tutti e dieci gli SDK includono helper SSO che utilizzano le loro librerie di crittografia native.

### In Conclusione

Avere un server completamente tipizzato ha reso semplice generare una specifica OpenAPI affidabile e, da lì, generare client per dieci (e un giorno più!) linguaggi è stato principalmente una questione di costruire l'automazione e migliorare le nostre definizioni di tipo affinché siano consumabili, senza aggiungere troppa astrazione che rallenterebbe FastComments!

Come per tutti i grandi rilasci, siamo felici di aver potuto dedicare tempo all'ottimizzazione, al test e al rilascio corretto di questi SDK. Fateci sapere qui sotto se avete feedback o se c'è un linguaggio che vorreste aggiungere.

Saluti!

{{/isPost}}

---

---