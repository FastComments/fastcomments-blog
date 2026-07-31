[category:Migration]

###### [postdate]
# [postlink]Миграција реакција са Hyvor Talk сада је подржана[/postlink]

{{#unless isPost}}
Када увезете ваш извоз података из Hyvor Talk, сада можемо мигрирати реакције на нивоу странице.
{{/unless}}

{{#isPost}}

### Шта је ново

Када увезете коментаре да их мигрирате са Hyvor Talk, FastComments сада може увозити реакције на вашој страници. Поред тога, открићемо да ли су теме коментара на страницама затворене или не, и такође мигрирати тај статус.

Поновно покретање увоза неће довести до дуплирања бројева нити до губитка било којих вредности реакција пре увоза.

### Како поставити реакције

Приказ реакција на страници није аутоматски. Да бисте започели, мораћете да ажурирате конфигурацију вашег виџета:

```
<script src="https://cdn.fastcomments.com/js/embed-v2.min.js"></script>
<div id="fastcomments-widget"></div>
<script>
    FastCommentsUI(document.getElementById('fastcomments-widget'), {
        "tenantId": "demo",
        pageReactConfig: {
            reacts: [
                {id: 'superb', src: 'https://raw.githubusercontent.com/hfg-gmuend/openmoji/master/color/618x618/1F929.png'}, // Star-Struck
                {id: 'love', src: 'https://raw.githubusercontent.com/hfg-gmuend/openmoji/master/color/618x618/2764.png'}, // Red Heart
                {id: 'wow', src: 'https://raw.githubusercontent.com/hfg-gmuend/openmoji/master/color/618x618/1F62E.png'}, // Face with Open Mouth
                {id: 'sad', src: 'https://raw.githubusercontent.com/hfg-gmuend/openmoji/master/color/618x618/1F622.png'}, // Crying Face
                {id: 'laugh', src: 'https://raw.githubusercontent.com/hfg-gmuend/openmoji/master/color/618x618/1F602.png'}, // Face with Tears of Joy
                {id: 'angry', src: 'https://raw.githubusercontent.com/hfg-gmuend/openmoji/master/color/618x618/1F620.png'}  // Angry Face
            ]
        }
    });
</script>
```

ИД-ови морају да одговарају онима из Hyvor Talk извоза. Овај пример користи исправне вредности.

Мораћете да обезбедите сопствене слике за реакције. Могу бити у било ком формату, укључујући гифове. Пример изнад користи неке из OpenMoji пројекта.

### У закључку

Као и код свих главних издања, радује нас што смо успели да одвојимо време за оптимизацију, тестирање и правилно пуштање ове функције. Јавите нам у наставку ако откријете било какве проблеме.

Поздрав!

{{/isPost}}