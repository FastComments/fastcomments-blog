---
[category:Security]

###### [postdate]
# [postlink]Zaščita komentarnih niti z enotnim prijavljanjem[/postlink]

{{#unless isPost}}
Ali ne menite, da so vaše komentarne niti javne? Imate nastavljen SSO za avtentikacijo? Morda je to za vas.
{{/unless}}

{{#isPost}}

### <i class="circle">!</i> Ta članek vsebuje tehnični jezik

#### Uvod

FastComments SSO <a href="/(4-13-2020)-setting-up-sso-with-fastcomments.html" target="_blank">(podrobnosti tukaj)</a> vašim uporabnikom nudi način
za komentiranje brez prijave na drugo platformo.

Vendar pa to samo po sebi ne zagotavlja varnosti vaših komentarnih niti, saj je privzeto podatki o komentarjih javno dostopne informacije - vsakdo, ki lahko vidi
stran, lahko vidi tudi komentarje. Vendar pa ta različica to spreminja.

#### Nastavitev brez kodiranja

Lahko preprečimo ogled in interakcijo z našimi komentarji, ko je SSO nastavljen, tako da ustvarimo <a href="https://fastcomments.com/auth/my-account/customize-widget" target="_blank">pravilo za prilagoditev</a>.

Ko to počnete, iščite SSO in našli boste to možnost:

<div class="text-center">
    <img src="/images/fc-sso-protection.png" title="Možnost konfiguracije za zaklepanje komentarjev preko SSO" alt="Možnost konfiguracije za zaklepanje komentarjev preko SSO" class="lozad" />
</div>

Omogočite to in shranite pravilo prilagoditve.

#### Zaščitite le določen domen ali stran

Da zaščitite le določen domen ali stran, bomo preprosto konfigurirali pravilo prilagoditve.

Na vrhu uporabniškega vmesnika za prilagoditev bomo našli dva vnosa, Domen in URL ID.

<div class="text-center">
    <img src="/images/fc-sso-protection-by-page.png" title="Možnost konfiguracije po strani ali domeni" alt="Možnost konfiguracije po strani ali domeni" class="lozad" />
</div>

Da zaščitite samo določen domen, vnesite zadevni domen v polje "domen".

Za zaščito določene strani vnesite URL strani v polje "URL ID". Če imate prilagojeno integracijo s FastComments, lahko tukaj vnesete vrsto ID-ja 
namesto URL-ja.

#### Zaščita poleg branja

Omogočanje te možnosti bo zaščitilo stran ali domeno pred komentiranjem, razen če je uporabnik prijavljen preko SSO. 

#### Težave

Uporabniki, ki so ustvarili komentarje pred vašo integracijo SSO, jih ne bodo mogli videti, razen če se prijavijo preko vaše integracije SSO.

#### V zaključku

Upamo, da ste našli ta priročnik koristen in enostaven za branje. Ne oklevajte in komentirajte spodaj, če imate kakšna vprašanja.

Na zdravje!

{{/isPost}}

---