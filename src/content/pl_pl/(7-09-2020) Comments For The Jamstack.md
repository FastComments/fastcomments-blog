---
[category:Integrations]
###### [postdate]
# [postlink]Komentarze dla Jamstack[/postlink]

{{#unless isPost}}
Co stare, staje się nowym. Pre-renderowanie i serwowanie stron z CDN jest teraz nazywane "JamStack" - ale nie muszą być one całkowicie statyczne!
{{/unless}}

{{#isPost}}

### <i class="circle">!</i> Ten artykuł zawiera terminologię techniczną

<a href="https://jamstack.org/" target="_blank">Jamstack</a> to sposób na pisanie strony internetowej, który nie zależy od tradycyjnego serwera internetowego. Zamiast tego są one
serwowane z serwerów, które nazywamy "CDN", dla najlepszych doświadczeń użytkownika (ładują się bardzo szybko). Wydajność jest ogromnym priorytetem dla stron napisanych z użyciem Jamstack - tak samo jak
FastComments.

#### Dlaczego FastComments działa z Jamstack

FastComments wymaga tylko małego (< 11kb obecnie) fragmentu kodu na dole statycznej strony, do której chcesz dodać komentarze. Zatem zainstalowanie FastComments na typowej
stronie Jamstack zajmuje tylko kilka sekund, tak jak każda statyczna strona.

#### Potencjalne problemy

Rozumiemy, że strony Jamstack nie zawsze zaczynają jako coś statycznego. Mogą być stworzone za pomocą Preact, React lub Vue na przykład. Napisana w czystym JS, stworzyliśmy widget FastComments
dla maksymalnej interoperacyjności, aby działać z wszystkimi głównymi frameworkami. Jeśli jednak napotkasz problemy z FastComments i swoim preferowanym frameworkiem, to
<a href="https://fastcomments.com/auth/my-account/help" target="_blank">daj nam znać</a>.

#### Podsumowanie

Mamy nadzieję, że uznasz, iż FastComments pozwala twoim użytkownikom wchodzić w interakcję z twoją stroną, dzielić się opiniami i zostawiać komentarze w sposób, w jaki normalnie nie mogliby na statycznej stronie.
Na przykład, ta strona jest pre-renderowana tak jak tradycyjna strona Jamstack, a ty możesz zobaczyć, jak FastComments radośnie działa na dole.

Pozdrawiamy!

{{/isPost}}