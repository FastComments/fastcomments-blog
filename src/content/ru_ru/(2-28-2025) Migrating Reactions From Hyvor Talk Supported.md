---
[category:Migration]

###### [postdate]
# [postlink]Поддержка миграции реакций из Hyvor Talk теперь доступна[/postlink]

{{#unless isPost}}
Когда вы импортируете экспорт данных из Hyvor Talk, мы теперь можем мигрировать ваши реакции на уровне страницы.
{{/unless}}

{{#isPost}}

### Что нового

Когда вы импортируете комментарии для их миграции из Hyvor Talk, FastComments теперь может импортировать ваши реакции на страницу. Кроме того, мы определим, закрыты ли потоки комментариев на страницах, и мигрируем этот статус.

Повторный запуск импорта не приведет к дублированию счетчиков или потере каких-либо значений реакций до импорта.

### Как настроить реакции

Отображение реакций на странице не является автоматическим. Для начала вам нужно будет обновить конфигурацию вашего виджета:

```
<script src="https://cdn.fastcomments.com/js/embed-v2.min.js"></script>
<div id="fastcomments-widget"></div>
<script>
    FastCommentsUI(document.getElementById('fastcomments-widget'), {
        "tenantId": "demo",
        pageReactConfig: {
            reacts: [
                {id: 'superb', src: 'https://raw.githubusercontent.com/hfg-gmuend/openmoji/master/color/618x618/1F929.png'}, // Удивленный
                {id: 'love', src: 'https://raw.githubusercontent.com/hfg-gmuend/openmoji/master/color/618x618/2764.png'}, // Красное сердце
                {id: 'wow', src: 'https://raw.githubusercontent.com/hfg-gmuend/openmoji/master/color/618x618/1F62E.png'}, // Лицо с открытым ртом
                {id: 'sad', src: 'https://raw.githubusercontent.com/hfg-gmuend/openmoji/master/color/618x618/1F622.png'}, // Плачущий
                {id: 'laugh', src: 'https://raw.githubusercontent.com/hfg-gmuend/openmoji/master/color/618x618/1F602.png'}, // Лицо с слезами радости
                {id: 'angry', src: 'https://raw.githubusercontent.com/hfg-gmuend/openmoji/master/color/618x618/1F620.png'}  // Разъяренное лицо
            ]
        }
    });
</script>
```

Идентификаторы должны совпадать с теми, что в экспорте Hyvor Talk. Этот пример использует правильные значения.

Вам нужно будет найти изображения реакций самостоятельно. Они могут быть в любом формате, включая гифки. Приведенный выше пример использует некоторые изображения из проекта OpenMoji.

### В заключение

Как и во всех крупных релизах, мы рады, что смогли уделить время на оптимизацию, тестирование и правильный запуск этой функции. Дайте нам знать ниже, если вы обнаружите какие-либо проблемы.

Ура!

{{/isPost}}

---