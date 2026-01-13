---
[category:Migration]

###### [postdate]
# [postlink]Подкрепата за мигриране на реакциите от Hyvor Talk вече е налична[/postlink]

{{#unless isPost}}
Когато импортирате експорта на данните си от Hyvor Talk, можем сега да мигрираме вашите реакции на ниво страница.
{{/unless}}

{{#isPost}}

### Какво е новото

Когато импортирате коментари, за да ги мигрирате от Hyvor Talk, FastComments вече може да импортира вашите реакции на страницата. Освен това, ще детектираме дали
нишките на коментарите на страниците са затворени или не, и ще мигрираме и този статус.

Повторното стартиране на импорта не ще доведе до дублиране на броя или загуба на стойности на реакциите от преди импорта.

### Как да настроите реакциите

Показването на реакциите на страницата не е автоматично. За да започнете, ще трябва да актуализирате конфигурацията на вашия уиджет:

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

Идентификаторите трябва да съвпадат с тези от експорта на Hyvor Talk. Този пример използва правилните стойности.

Ще трябва да осигурите собствените си изображения за реакция. Те могат да бъдат в какъвто и да е формат, включително gif. Горният пример използва някои от проекта OpenMoji.

### В заключение

Както при всички основни версии, сме щастливи, че можехме да отделим време да оптимизираме, тестваме и правилно да пуснем тази функция. Уведомете ни
по-долу, ако откриете някакви проблеми.

Наздраве!

{{/isPost}}

---