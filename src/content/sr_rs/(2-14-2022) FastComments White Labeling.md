[category:API & Development]

###### [postdate]
# [postlink]FastComments Бела ознака[/postlink]

{{#unless isPost}}
Бела ознака, са потпуном API интеграцијом и алатима за аутоматизацију, долази у FastComments.
{{/unless}}

{{#isPost}}

## Шта је ново

FastComments сада може да се интегрише са другим апликацијама и трећим продавацима преко Беле ознаке. Бела ознака вам омогућава да креирате FastComments налоге (називани тенанти), кориснике, модераторе и још много тога.

Сада нудимо [свеобухватни API](https://docs.fastcomments.com/guide-white-labeling.html#white-labeling-using-the-api) за аутоматизацију интеграције са трећим странама.

Сада можете, преко API‑ја:

- Креирајте купце (подтенанте) које управља ваш тенант.
- Управљајте пакетима доступним вашим купцима и начином на који ћете обрађивати наплату.
- Додајте и управљајте корисницима у вашим управљаним тенантима.
- Додајте и управљајте модераторима у вашим управљаним тенантима.
- Позовите модераторе и пошаљите линкове за пријаву корисницима тенанта.

## Наплата

За наплату постоје две опције:

1. Преко FastComments Flex, коришћење ваших подтенаната се аутоматски обрачунава и наплаћује родитељском тенанту. Ово се може пратити преко [Стране за аналитичку наплату](https://fastcomments.com/auth/my-account/analytics/billing).
2. Преко FastComments Pro, добијате приступ за креирање фиксног броја подтенаната по фиксној месечној цени.

## Дебрандинг

Управљани тенанти могу имати омогућен дебрандинг, који уклања наше логотипе из виџета за коментаре.

## Како добити Белу ознаку

Тренутно, FastComments Flex и Pro планови нуде приступ White Labeling API-ју.

## Скрипте и примери

Пример скрипте која користи API за постављање тенанта са корисницима и модераторима [доступан је овде](https://github.com/FastComments/fastcomments-code-examples/tree/master/white-labeling).

## Свеобухватна валидација

Сваки API ресурс садржи свеобухватне валидације и ограничења, са корисним порукама о грешкама, како би вас водио у правилној употреби.

<div class="code"><div class="title">Detailed Error Example</div><div class="line">{</div><div class="line">  "status": "failed",</div><div class="line">  "reason": "A user with that id does not exist in this tenant. Create the user first and then make them a moderator.",</div><div class="line">  "code": "not-found"</div><div class="line">}</div></div>

## Други случајеви употребе

API за [тенант кориснике](https://docs.fastcomments.com/guide-api.html#tenant-user-structure) и [модераторе](https://docs.fastcomments.com/guide-api.html#moderator-structure) такође се могу користити за додавање и управљање овим ресурсима у вашем сопственом тенанту, без обзира на белу ознаку.

## Документација

Потпуну документацију о Белој ознаци и како користити API можете пронаћи [овде](https://docs.fastcomments.com/guide-white-labeling.html).

## У закључку

Надамо се да вам је ово ажурирање и његова документација били корисни. Срећно интегрисње!

{{/isPost}}