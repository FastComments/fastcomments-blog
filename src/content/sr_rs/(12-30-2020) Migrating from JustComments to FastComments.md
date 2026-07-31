[category:Migration]
###### [postdate]
# [postlink]Миграција са JustComments на FastComments[/postlink]

{{#unless isPost}}
Прочитајте овај пост да видите како потпуно мигрирати са JustComments на FastComments.

Обично је у питању уклањање малог кода који вам дају и замена њим <a href="https://fastcomments.com/auth/my-account/get-acct-code" target="_blank">са нашим</a>.
Можете чак и привремено покренути JustComments и FastComments на истом сајту да тестирате и прилагодите изглед и осећај. <a href="https://fastcomments.com/auth/my-account/help" target="_blank">Можемо вам помоћи у томе</a>.
{{/unless}}

{{#isPost}}

Од 2021. године, JustComments ће бити затворен. У FastComments смо вам учинили прелазак на нашу платформу лакшим.

Утврдићете да FastComments пружа многе исте функције на које сте навикли, а и више.

## Разлике у ценама

Док JustComments користи систем заснован на кредитима, FastComments користи слојевити модел са три доступна нивоа. Са FastComments, наш план од 5 $ месечно покрива до 1 млн учитавања страница месечно. Изнад тога су Pro и Enterprise планови, које можете видети на нашој <a href="https://fastcomments.com/traffic-pricing" target="_blank">страници са ценама</a>.

## Ако користите WordPress

FastComments има посебан WordPress додатак: <a href="https://wordpress.org/plugins/fastcomments/" target="_blank">https://wordpress.org/plugins/fastcomments/</a>.

Додатак олакшава инсталацију, подешавање и синхронизацију. Међутим, JustComments не синхронизује ваше коментаре назад у вашу WordPress инсталацију као што то ради FastComments. То значи да након синхронизације треба да пратите кораке за извоз и увоз испод.

## Извезите постојеће коментаре

FastComments увозник ће мигрирати ваше коментаре, корисничка имена, аватаре и уграђене слике. Слике ћемо без проблема преместити на наше сервере.

Да преузмете податке о вашим коментарима са JustComments, идите на страницу вашег налога.

## Увезите у FastComments админ

Не брините о отварању добијене датотеке из JustComments.

Ако сте пријављени, можете ићи <a href="https://fastcomments.com/auth/my-account/manage-data/import" target="_blank">овде да увезете датотеку</a>.

Изаберите JustComments из падајућег списка и отпремите вашу датотеку.

### Идентификатори странице

При увозу, видећете опцију избора Page URL или „Item ID“. Ако нисте сигурни шта да изаберете, изаберите Page URL. Ако имате интеграцију са JustComments где у конфигурацији виџета наводите Item ID, изаберите Item ID.

### Сачекајте неколико минута

FastComments увоз је „асинхрон“. То значи да су отпремање датотеке и обрада различити кораци.

Дакле, у зависности од величине датотеке можете одмах добити поруку о успесу. На страници за увоз, на дну, постоји табела – сваки ред представља покушај увоза. Можете безбедно освежити страницу да видите статус вашег увоза и колико редова је до сада увезено.

### Када је готово

Добићете имејл када се увоз заврши – без обзира да ли је успео или не. Можете затворити страницу након што отпремање датотеке успе и видите ваш увоз на страници Imports. Имаће статус попут „Requested“, а када започне статус ће бити „Running“.

Безбедно је поново увозити колико год пута је потребно – али ако ваш увоз не успе, <a href="https://fastcomments.com/auth/my-account/help" target="_blank">контактирајте нас</a> како бисмо вам помогли.

### Замени JustComments код са FastComments

Ако не користите JustComments WordPress додатак, онда је у питању само уклањање малог кода који вам дају и замена њим <a href="https://fastcomments.com/auth/my-account/get-acct-code" target="_blank">са нашим</a>. Можете привремено покренути JustComments и FastComments на истом сајту да тестирате и прилагодите изглед и осећај. <a href="https://fastcomments.com/auth/my-account/help" target="_blank">Можемо вам помоћи у томе</a>.

### Миграција URL-ова истовремено

Коментари су подразумевано везани за поља „pageUrl“ у извозу из JustComments, па док се ваши URL-ови не промене, прелаз је лак. Ако желите мигрирати URL-ове и задржати коментаре, <a href="https://fastcomments.com/auth/my-account/help" target="_blank">обавестите нас</a> слањем старих и нових URL-ова. Страница за помоћ омогућава отпремање малих текстуалних датотека, па ако мигрирате више од неколико URL-ова, направите Excel табелу.

## Преглед

1. Извезите ваше податке
2. Увезите у FastComments
3. Ако не користите WordPress, замените JustComments JavaScript код са <a href="https://fastcomments.com/auth/my-account/get-acct-code" target="_blank">FastComments-овим</a>

{{/isPost}}