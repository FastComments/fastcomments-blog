---
[category:Features]

###### [postdate]
# [postlink]FastComments dodaja podporo za #HashTags[/postlink]

{{#unless isPost}}
Ste kdaj želeli označiti temo ali kos informacij? Zdaj lahko.
{{/unless}}

{{#isPost}}

### Kaj je novega

Pri komentiranju lahko uporabniki zdaj vnašajo enega ali več `#hashtagov`. Ko kliknete na `#hashtag` v komentarju, vas bo to pripeljalo do pogleda z drugimi komentarji, kjer je prikazan hashtag.

Poleg tega lahko `#hashtagi` služijo tudi za povezovanje z zunanjimi vsebinami. Skupaj s to izdajo smo lansirali naš [HashTag API](https://docs.fastcomments.com/guide-api.html#hash-tag-structure), 
ki omogoča predhodno izpolnjevanje hashtagov v vašem računu.

Pri predhodnem izpolnjevanju hashtagov lahko za vsak tag določimo URL. To pomeni, da se `#hashtagi` lahko uporabijo tudi za povezovanje, na primer, s številko vozovnice ali 
dokumentom v CRM.

Simbol `#` lahko po potrebi prilagodimo.

### Kako ga uporabiti

Ko vpišete `#` in nato začetek hashtag, se prikaže seznam rezultatov iskanja.

<div class="text-center">
    <img src="images/fc-hashtags.png" alt="Uporaba HashTags" title="#hashtags Demo" />
</div>

Preprosto kliknite na hashtag, ki ga želite dodati.

Poleg tega lahko uporabite tipki s puščicama navzgor in navzdol za krmarjenje po tem seznamu ter pritisnete enter za izbiro ali escape za izhod.

Zavedamo se, da morda želite uporabiti simbol `#` brez dodajanja hashtagov. FastComments to zazna in ne bo motil vašega tipkanja.

### Dodajanje Hashtagov

Če hashtag, ki ga želite uporabiti, ni v seznamu predlog, bo FastComments preprosto samodejno ustvaril hashtag v ozadju.

Samodejno ustvarjanje `#hashtaga` je mogoče onemogočiti v skladu z dokumentacijo [tukaj](https://docs.fastcomments.com/guide-customizations-and-configuration.html#disable-automatic-hashtag-creation).

### Kdo ga prejme

Vsi trenutni in novi uporabniki FastComments, na vseh ravneh, imajo zdaj dostop do `#hashtagov`. `#hashtagi` so bili preneseni tudi v starejše različice 
komentarnega vtičnika.

### Kako deluje samodejno dokončevanje

Oznake, prikazane v seznamu samodejno dokončanje, so le iz vašega računa. HashTags niso deljene med najemniki FastComments.

### Dokumentacija

Obstaja posebna dokumentacija za `#hashtage`. Oglejte si tukaj: https://docs.fastcomments.com/guide-hashtags.html

### V zaključku

Kot ostali deli FastComments upamo, da boste to funkcijo našli hitro in enostavno za uporabo.

Na zdravje!

{{/isPost}}

---