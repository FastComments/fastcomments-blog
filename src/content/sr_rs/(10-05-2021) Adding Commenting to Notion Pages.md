[category:Integrations]
[category:Tutorials]
###### [postdate]
# [postlink]Додавање коментарирања на Notion странице[/postlink]

{{#unless isPost}}
Желите ли да додате коментаре на своје Notion странице? Ми смо ту за вас.
{{/unless}}

{{#isPost}}

## Шта је ново

FastComments је сада провајдер за embed.ly, и као таква пружа API‑је и услуге које омогућавају да се конверзије коментара уграђују у апликације које подржавају [oEmbed](https://oembed.com).

То значи да сада можете лако да додате живо коментарисање на сајт изграђен помоћу Notion, Google Sites или Nimbus Note.

## Како се користи – Брзи демонстрацијски пример

Када сте пријављени у ваш налог, можете једноставно посетити [fastcomments.com/create](https://fastcomments.com/create) да бисте створили везу за разговор која се затим може додати у вашу Notion страницу, или у било коју апликацију која се интегрише са embed.ly.

Можете то пробати сами користећи ваш демонстрациони embed линк, [fastcomments.com/c/demo](https://fastcomments.com/c/demo):

<video src="images/fastcomments-notion.mp4" controls alt="FastComments and Notion Demo" title="FastComments and Notion Demo"></video>

Уграђени виџет за коментарисање се затим може прилагодити као и било која друга инстанца FastComments.

На пример, као што је приказано у горњем видеу, можемо прилагодити виџет за коментаре тако да корисник мора унети само своје име, а не и имејл, да би коментарисао или гласао.

## Ажурирање 2023 – Подршка за Super.so

Сада можете додати коментарисање на Super.so сајтове, који су изграђени на врху Notion докумената, користећи FastComments! [Документацију можете пронаћи овде.](https://docs.fastcomments.com/guide-installation-super-so.html)

## Google Sites

Google Sites је такође подржан, а процес је сличан.

1. [Креирајте разговор за уградњу.](https://fastcomments.com/create)
2. Приликом уређивања вашег Google Site-а, идите на `Insert` → `Embed`. Одаберите `By URL`.
3. Налепите URL из корака 1.
4. Притисните `Insert`. Готово!

#### Додавање embed линка

<div class="text-center">
    <img src="/images/google-sites-howto.png" title="How to add FastComments to a Google Site" alt="How to add FastComments to a Google Site" />
</div>

#### Коментари су додати вашем Google Site-у!

<div class="text-center">
    <img src="/images/google-sites-howto-done.png" title="Done!" alt="Done!" />
</div>

## Nimbus Note

Nimbus Note је такође подржан, а процес је сличан.

1. [Креирајте разговор за уградњу.](https://fastcomments.com/create)
2. Приликом уређивања ваше белешке, додајте embed блок.
3. Користите URL из корака 1 као URL за уградњу.
4. Притисните `Insert`. Готово!

### Ко добија

Сви постојећи и нови FastComments клијенти, на свим плановима, сада имају приступ oEmbed подршци.

### Уграђивање постојећег разговора

Да бисте уградили постојећи разговор, једноставно унесите вредност <a href="https://docs.fastcomments.com/guide-customizations-and-configuration.html#url-id" target="_blank">URL ID</a> која се прослеђује виџету за коментарисање у страницу Креирајте разговор као име разговора.

### У закључку

Као и остали делови FastComments, надамо се да ће вам ова функција бити брза и лака за коришћење.

Поздрав!

{{/isPost}}

---