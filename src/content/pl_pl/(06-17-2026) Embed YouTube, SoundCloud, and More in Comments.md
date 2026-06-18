---
[category:Features]
[category:UI & Customization]
###### [postdate]
# [postlink]Osadzanie YouTube, SoundCloud i więcej w komentarzach[/postlink]

{{#unless isPost}}
Komitentom można teraz wkleić kod osadzenia, a wideo lub odtwarzacz na pewno pojawią się bezpośrednio w komentarzu. Domyślnie jest to wyłączone, aktywacja jest dla każdego serwisu i ograniczone do zaufanych dostawców.
{{/unless}}

{{#isPost}}

### Co nowego

Ludzie uwielbiają dzielić się wideo lub utworem w dyskusjach. Do tej pory wklejenie osadzenia z YouTube lub SoundCloud do komentarza niewiele dawało. Surowy `<iframe>` był usuwany ze względu na bezpieczeństwo, albo był opakowywany jako blok kodu.

Teraz możesz włączyć osadzanie mediów na swojej stronie. Gdy jest włączone, komitent może wkleić kod osadzenia bezpośrednio od dostawcy, a to wyświetla się w linii, dokładnie tak, jak na każdej innej stronie.

Oto rodzaj fragmentu, który ludzie kopiują z przycisku "Udostępnij" lub "Osadź":

<div class="code"><iframe width="560" height="315" src="https://www.youtube.com/embed/Wfc0Tc12-t8" title="Odtwarzacz wideo YouTube" frameborder="0" allowfullscreen></iframe></div>

Wklej to do komentarza z włączonym osadzaniem, a otrzymasz rzeczywisty odtwarzacz.

### Tylko zaufani dostawcy

Pozwolenie na dowolne iframy na twojej stronie stanowi realne ryzyko bezpieczeństwa, więc nie otworzyliśmy po prostu bram. Osadzenia są ograniczone do wbudowanej listy zaufanych dostawców, w tym YouTube, Vimeo, SoundCloud, Spotify, Bandcamp, Twitch i Dailymotion.

Jeśli komentarz zawiera iframe wskazujący gdzie indziej, iframe jest usuwany po zapisaniu komentarza. Ta sama sanizacja, która chroni przed tagami `<script>` i sztuczkami `onload=`, nadal działa w każdym komentarzu. Osadzenia to tylko dodatkowa, starannie zakrojona zgoda na to.

### Dodawanie własnych dostawców

Jeśli korzystasz z dostawcy, który nie jest na wbudowanej liście, możesz go dodać. Istnieje pole "Dodatkowe domeny osadzania", w którym wymieniasz dodatkowe nazwy hostów, które mają być zaufane, oprócz wbudowanych dostawców.

Dopasowanie odbywa się według dokładnej nazwy hosta, więc dodaj pełnego hosta, z którego ładowane jest osadzenie, na przykład `player.example.com`. Wszystko, czego nie wymienisz, pozostaje zablokowane.

### Jak to włączyć

To ustawienie dla każdej strony na stronie dostosowywania widgetu, tuż obok opcji przesyłania obrazów. Zaznacz "Czy zezwolić na osadzanie mediów?" i zapisz. Żaden kod ani ponowne wdrożenie nie są potrzebne.

Podobnie jak w przypadku innych ustawień treści, jest to zasada dostosowania per stronę, więc możesz włączyć osadzanie na jednej stronie lub jednym zestawie stron, a w innych je wyłączyć.

### Działa w obu edytorach

Wklejanie działa zarówno w zwykłym oknie komentarza, jak i w edytorze WYSIWYG. W zwykłym oknie kod osadzenia pojawia się jako tekst i staje się odtwarzaczem po przesłaniu. W edytorze WYSIWYG osadzenie pojawia się od razu jako blok, z małym przyciskiem usuwania w rogu, aby łatwo go usunąć, jeśli to był błąd.

### Podsumowując

Osadzenia są domyślnie wyłączone, więc nic się nie zmienia na twojej stronie, chyba że postanowisz je włączyć. Kiedy to zrobisz, twoi komitenci zyskają ładniejszy sposób na dzielenie się wideo i utworami, a ty zachowasz te same gwarancje bezpieczeństwa, które już miałeś.

Włącz to, wklej wideo i daj nam znać, co myślisz poniżej.

Na zdrowie!

{{/isPost}}