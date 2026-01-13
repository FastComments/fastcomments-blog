---
[category:Migration]

###### [postdate]
# [postlink]Теперь поддерживается миграция реакций из Hyvor Talk[/postlink]

{{#unless isPost}}
Когда вы импортируете экспорт данных из Hyvor Talk, мы теперь можем мигрировать ваши реакции на уровне страницы.
{{/unless}}

{{#isPost}}

### Новое

Когда вы импортируете комментарии, чтобы мигрировать их из Hyvor Talk, FastComments теперь может импортировать ваши реакции на страницу. Кроме того, мы будем определять, закрыты ли потоки комментариев на страницах или нет, и мигрировать это состояние.

Повторный запуск импорта не приведет к дублированию счетчиков или потере каких-либо значений реакций до импорта.

### Как настроить реакции

Отображение реакций на странице не является автоматическим. Чтобы начать, вам нужно обновить конфигурацию вашего виджета:

```
<script src="https://cdn.fastcomments.com/js/embed-v2.min.js"></script>
<div id="fastcomments-widget"></div>
<script>
    FastCommentsUI(document.getElementById('fastcomments-widget'), {
        "tenantId": "demo",
        pageReactConfig: {
            reacts: [
                {id: 'superb', src: 'https://raw.githubusercontent.com/hfg-gmuend/openmoji/master/color/618x618/1F929.png'}, // Звезды в глазах
                {id: 'love', src: 'https://raw.githubusercontent.com/hfg-gmuend/openmoji/master/color/618x618/2764.png'}, // Красное сердце
                {id: 'wow', src: 'https://raw.githubusercontent.com/hfg-gmuend/openmoji/master/color/618x618/1F62E.png'}, // Лицо с открытым ртом
                {id: 'sad', src: 'https://raw.githubusercontent.com/hfg-gmuend/openmoji/master/color/618x618/1F622.png'}, // Плачущая мордочка
                {id: 'laugh', src: 'https://raw.githubusercontent.com/hfg-gmuend/openmoji/master/color/618x618/1F602.png'}, // Лицо с радостными слезами
                {id: 'angry', src: 'https://raw.githubusercontent.com/hfg-gmuend/openmoji/master/color/618x618/1F620.png'}  // Злая мордочка
            ]
        }
    });
</script>
```

Идентификаторы должны совпадать с теми, что в экспорте Hyvor Talk. Этот пример использует правильные значения.

Вам нужно будет предоставить собственные изображения реакций. Они могут быть в любом формате, включая gif. В приведенном выше примере использованы некоторые из проекта OpenMoji.

### В заключение

Как и во всех крупных релизах, мы рады, что смогли уделить время оптимизации, тестированию и правильному выпуску этой функции. Дайте нам знать ниже, если вы обнаружите какие-либо проблемы.

Ура!

{{/isPost}}

---