---
[category:API & Development]
###### [postdate]
# [postlink]Użycie FastComments w VanillaJS Aplikacjach Jednostronicowych[/postlink]

{{#unless isPost}}
Chociaż mamy dedykowane komponenty React i VueJS, to widget vanilla może być również używany w aplikacjach jednostronicowych.
{{/unless}}

{{#isPost}}

### <i class="circle">!</i> Ten artykuł zawiera techniczne terminy

#### Grupa docelowa

Ten artykuł jest skierowany do programistów.

#### Wprowadzenie

Większość przykładów użycia widgetu FastComments VanillaJS to bardzo prosty fragment kodu, który ładuje wątek komentarzy dla bieżącego adresu URL strony. Dzieje się tak, ponieważ
to jest przypadek użycia dla przytłaczającej większości naszych klientów, ale ostatnio zaobserwowaliśmy napływ programistów budujących aplikacje SPA i używających FastComments.

Najpierw pamiętaj, że FastComments ma dedykowane komponenty <a href="https://github.com/FastComments/fastcomments-react" target="_blank">React</a> i <a href="https://github.com/FastComments/fastcomments-vue" target="_blank">Vue</a>, więc sprawdź je,
jeśli korzystasz z tych bibliotek, aby nie musieć budować własnego wrappera dla FastComments.

Jeśli jednak budujesz swoją aplikację przy użyciu VanillaJS, możesz dynamicznie instancjonować i aktualizować widget komentarzy.

#### Najpierw adres URL i identyfikator URL

FastComments ma dwa identyfikatory dla strony lub artykułu, do którego związany jest wątek komentarzy. W obiekcie konfiguracyjnym są to właściwości "url" i "urlId".

Adres URL to adres URL do widgetu komentarzy. Idealnie, powinieneś móc odwiedzić ten adres URL z zewnątrz swojej aplikacji. Będzie on wyświetlany jako link w e-mailach powiadamiających oraz w
narzędziach administracyjnych.

Identyfikator URL to ciąg, który jest albo adresem URL, albo identyfikatorem - może to być dowolna wartość, pod warunkiem, że reprezentuje bieżącą stronę. Jeśli masz identyfikator posta, artykułu lub strony, możesz go użyć
zamiast adresu URL strony dla tej wartości. Powód, dla którego identyfikator URL jest oddzielny, to fakt, że możesz chcieć przechować dodatkowe informacje w adresie URL, które uczyniłyby ten adres URL nieunikalnym dla strony.

Zauważ, że udokumentowaliśmy pełną konfigurację, którą widget obsługuje w TypeScript <a href="https://github.com/FastComments/fastcomments-typescript/blob/main/src/fastcomments-config.ts#L14" target="_blank">na GitHubie</a>.

#### Szczegóły i prawdziwa demonstracja

Gdy widget jest instancjonowany, przechwyć wynik z funkcji FastCommentsUI, którą normalnie byś wywołał:

<div class="code">    const config = {tenantId: 'demo'};
    const widgetInstance = window.FastCommentsUI(document.getElementById('fastcomments-widget'), config);
</div>

Następnie możesz wywołać metodę "update" na obiekcie instancji, aby zaktualizować konfigurację. To odświeży komponent:

<div class="code">    const config = {tenantId: 'demo'};
    const widgetInstance = window.FastCommentsUI(document.getElementById('fastcomments-widget'), config);
    widgetInstance.update({
        ...config,
        urlId: getUrlId(),
        url: getUrl()
    });
</div>

Możesz zobaczyć działający przykład <a href="https://jsfiddle.net/winrid/y4wrs3h2/4/" target="_blank">w tym fiddle</a>.

Zauważ, że w tym przykładzie używamy document.getElementById, ale możesz użyć dowolnego mechanizmu, który chcesz, aby uzyskać docelowy element.

#### Pułapki

Chociaż samo zaktualizowanie "urlId" zadziała, powinieneś zaktualizować zarówno "urlId", jak i "url", nawet jeśli są one takie same, aby linki z e-maili powiadamiających oraz
narzędzi moderacyjnych działały. Samo zaktualizowanie "url" nie zadziała - komentarze są związane z "urlId".

#### Na zakończenie

Mamy nadzieję, że ten przewodnik był pomocny. Śmiało komentuj poniżej, jeśli masz jakiekolwiek pytania.

Na zdrowie!

{{/isPost}}

---