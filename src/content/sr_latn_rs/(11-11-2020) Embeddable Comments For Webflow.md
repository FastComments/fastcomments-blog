---
[category:Integracije]

###### [postdate]
# [postlink]Ugrađeni komentari za Webflow[/postlink]

{{#unless isPost}}
Uputstva, uključujući video, za instalaciju FastComments na Webflow.io sajtu.
{{/unless}}

{{#isPost}}

#### Ciljna publika

Ovaj članak je namenjen svima koji žele da dodaju podršku za komentarisanje na svoj Webflow sajt.

#### Uvod

Instalacija FastComments na Webflow sajtu je jednako jednostavna kao i na bilo kojem drugom - sa samo jednim problemom specifičnim za provajdere hostinga kao što je Webflow.

#### Koraci

1. Dodajte domen vašeg Webflow sajta u vaš nalog - widget se neće učitati bez njega. Ovo je domen koji se koristi kada kliknete "Publish" u Webflow, na primer "https://your-superb-project.webflow.io".
2. U dizajn modu, idite na "Add Elements" u gornjem levom uglu, zatim skrolujte skroz na dole do "Components". Kliknite na "Embed" - dodajte FastComments kod koji možete pronaći <a href="https://fastcomments.com/auth/my-account/get-acct-code" target="_blank">ovde</a>.

#### Video

Evo videa koji detaljno objašnjava instalaciju, koji počinje sa nama u Webflow dizajneru i završava sa funkcionalnim ugrađenim komentarima na našem sajtu.

<div class="text-center">
    <video src="images/fc-webflow-install.mp4" controls alt="Webflow Uputstvo za Instalaciju Video" title="Webflow Uputstvo za Instalaciju Video"></video>
</div>

#### Problemi

FastComments osigurava vašu instalaciju validacijom zahteva po imenu domena. Ako želite da se widget za komentare prikaže na vašem Webflow sajtu pre nego što imate posvećen naziv domena, **moraćete da dodate "weblfow.io" kao domen u vaš nalog <a href="https://fastcomments.com/auth/my-account/configure-domains" target="_blank">ovde</a>.**

Za povećanu sigurnost, možete definisati celo ime domena, na primer "your-awesome-site.webflow.io".

#### Zaključak

Nadamo se da ste našli ovaj vodič korisnim i lakim za čitanje. Slobodno ostavite komentar ispod sa bilo kojim pitanjima.

Živeli!

{{/isPost}}