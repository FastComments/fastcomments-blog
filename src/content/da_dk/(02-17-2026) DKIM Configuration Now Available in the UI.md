---
[category:Features]
[category:Email]

###### [postdate]
# [postlink]DKIM-konfiguration nu tilgængelig i UI'en[/postlink]

{{#unless isPost}}
FastComments tilbyder nu en UI til at konfigurere DKIM, hvilket gør det lettere at forbedre e-mail leveringsraterne uden at bruge API'en.
{{/unless}}

{{#isPost}}

### Hvad er nyt

Opsætning af DKIM for dit tilpassede e-maildomæne er blevet lettere. Tidligere krævede konfiguration af DKIM direkte brug af
<a href="https://docs.fastcomments.com/guide-api.html#domain-config-structure" target="_blank">Domain Configs API</a>. Nu kan du
konfigurere DKIM direkte fra FastComments-admin UI'en.

### Hvorfor DKIM er vigtigt

Når du tilpasser "From Domain" for e-mails, som FastComments sender på dine vegne, skal e-mailudbydere bekræfte, at
disse e-mails er legitime. DKIM (DomainKeys Identified Mail) er en af de centrale autentifikationsmekanismer, der hjælper med dette.
Uden korrekt DKIM-konfiguration er e-mails sendt på vegne af dit domæne mere tilbøjelige til at ende i spam-mapper.

### Sådan sætter du det op

Naviger til siden <a href="https://fastcomments.com/auth/my-account/configure-domains" target="_blank">Mine Domæner</a> og klik på
"Vis Avanceret" for det domæne, du vil konfigurere. Du vil se DKIM-indstillingerne, hvor du kan indtaste dit domænenavn, nøglevælger
og privat nøgle.

Efter gemning vil DKIM-konfigurationen blive anvendt på alle e-mails sendt fra det domæne.

### API'en virker stadig

Hvis du foretrækker at administrere DKIM-konfigurationen programmatisk, fungerer
<a href="https://docs.fastcomments.com/guide-api.html#domain-config-structure" target="_blank">Domain Configs API</a> som før.

### Afslutningsvis

Vi håber, at dette gør det lettere at sikre, at dine brugere modtager de e-mails, som FastComments sender på dine vegne. Lad os vide
nedenfor, hvis du har spørgsmål.

Skål!

{{/isPost}}

---