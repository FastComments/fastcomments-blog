---
[category:Інтеграції]
[category:Посібники]
###### [postdate]
# [postlink]Додавання коментарів до сторінок Notion[/postlink]

{{#unless isPost}}
Хочете додати коментарі до своїх сторінок Notion? Ми допоможемо вам.
{{/unless}}

{{#isPost}}

## Що нового

FastComments тепер є постачальником embed.ly, і, як такий, надає API та сервіси, які дозволяють вбудовувати потоки коментарів
в застосунки, що підтримують [oEmbed](https://oembed.com).

Це означає, що ви тепер можете легко додати живі коментарі до сайту, створеного з Notion, Google Sites або Nimbus Note.

## Як це використовувати - Швидка демонстрація

Після входу у свій обліковий запис, ви можете просто перейти до [fastcomments.com/create](https://fastcomments.com/create), щоб створити посилання на розмову, яке потім
може бути додане до вашої сторінки Notion або будь-якого застосунку, що інтегрується з embed.ly.

Ви можете спробувати самостійно, використовуючи своє демо-посилання, [fastcomments.com/c/demo](https://fastcomments.com/c/demo):

<video src="images/fastcomments-notion.mp4" controls alt="Демонстрація FastComments та Notion" title="Демонстрація FastComments та Notion"></video>

Вбудований віджет коментування можна налаштувати точно так само, як і будь-який інший екземпляр FastComments.

Наприклад, як показано у наведеному вище відео, ми можемо налаштувати віджет коментарів так, щоб користувачу потрібно було ввести лише своє ім'я, а не електронну пошту, щоб коментувати або голосувати.

## Оновлення 2023 - Підтримка Super.so

Тепер ви можете додати коментування на сайти Super.so, які створені на основі документів Notion, використовуючи FastComments! [Документацію можна знайти тут.](https://docs.fastcomments.com/guide-installation-super-so.html)

## Google Sites

Google Sites також підтримується, і процес є схожим.

1. [Створіть розмову для вбудовування.](https://fastcomments.com/create)
2. Під час редагування вашого Google Site перейдіть до `Вставити` -> `Вбудувати`. Виберіть `За URL`.
3. Вставте URL з Кроку 1.
4. Натисніть `Вставити`. Готово!

#### Додавання вбудованого посилання

<div class="text-center">
    <img src="/images/google-sites-howto.png" title="Як додати FastComments до Google Site" alt="Як додати FastComments до Google Site" />
</div>

#### Коментування додано до вашого Google Site!

<div class="text-center">
    <img src="/images/google-sites-howto-done.png" title="Готово!" alt="Готово!" />
</div>

## Nimbus Note

Nimbus Note також підтримується, і процес є схожим.

1. [Створіть розмову для вбудовування.](https://fastcomments.com/create)
2. Під час редагування вашої нотатки додайте блок вбудовування.
3. Використовуйте URL з Кроку 1 як URL для вбудовування.
4. Натисніть `Вставити`. Готово!

### Хто отримує це

Всі поточні та нові клієнти FastComments на всіх рівнях тепер мають доступ до підтримки oEmbed.

### Вбудовування існуючої розмови

Щоб вбудувати існуючу розмову, просто введіть значення <a href="https://docs.fastcomments.com/guide-customizations-and-configuration.html#url-id" target="_blank">URL ID</a>, передане до віджета коментування
на сторінці Створення розмови як назву розмови.

### На завершення

Як і решта FastComments, ми сподіваємося, що ви знайдете цю функцію швидкою та легкою у використанні.

Ура!

{{/isPost}}

---