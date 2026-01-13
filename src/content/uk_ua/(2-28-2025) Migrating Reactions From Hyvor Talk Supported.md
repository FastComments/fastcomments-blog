---
[category:Migration]

###### [postdate]
# [postlink]Тепер підтримується міграція реакцій з Hyvor Talk[/postlink]

{{#unless isPost}}
Коли ви імпортуєте свій експорт даних з Hyvor Talk, ми тепер можемо мігрувати ваші реакції на рівні сторінки.
{{/unless}}

{{#isPost}}

### Що нового

Коли ви імпортуєте коментарі для міграції з Hyvor Talk, FastComments тепер може імпортувати ваші реакції на сторінки. Крім того, ми визначимо, чи
коментарі на сторінках закриті, і мігруємо цей статус.

Повторний запуск імпорту не призведе до дублювання підрахунків або втрати значень реакцій до імпорту.

### Як налаштувати реакції

Відображення реакцій на сторінці не є автоматичним. Щоб розпочати, вам потрібно оновити конфігурацію віджета:

```
<script src="https://cdn.fastcomments.com/js/embed-v2.min.js"></script>
<div id="fastcomments-widget"></div>
<script>
    FastCommentsUI(document.getElementById('fastcomments-widget'), {
        "tenantId": "demo",
        pageReactConfig: {
            reacts: [
                {id: 'superb', src: 'https://raw.githubusercontent.com/hfg-gmuend/openmoji/master/color/618x618/1F929.png'}, // Зіркове захоплення
                {id: 'love', src: 'https://raw.githubusercontent.com/hfg-gmuend/openmoji/master/color/618x618/2764.png'}, // Червоне серце
                {id: 'wow', src: 'https://raw.githubusercontent.com/hfg-gmuend/openmoji/master/color/618x618/1F62E.png'}, // Обличчя з відкритим ротом
                {id: 'sad', src: 'https://raw.githubusercontent.com/hfg-gmuend/openmoji/master/color/618x618/1F622.png'}, // Плачуче обличчя
                {id: 'laugh', src: 'https://raw.githubusercontent.com/hfg-gmuend/openmoji/master/color/618x618/1F602.png'}, // Обличчя зі сльозами радості
                {id: 'angry', src: 'https://raw.githubusercontent.com/hfg-gmuend/openmoji/master/color/618x618/1F620.png'}  // Сердите обличчя
            ]
        }
    });
</script>
```

Ідентифікатори повинні відповідати тим, що з експорту Hyvor Talk. Цей приклад використовує правильні значення.

Вам потрібно знайти свої власні зображення реакцій. Вони можуть бути в будь-якому форматі, включаючи gifs. Вищезгаданий приклад використовує деякі з проекту OpenMoji.

### На завершення

Як і в усіх великих релізах, ми раді, що змогли знайти час для оптимізації, тестування та належного випуску цієї функції. Дайте нам знати
нижче, якщо ви виявите будь-які проблеми.

До зустрічі!

{{/isPost}}