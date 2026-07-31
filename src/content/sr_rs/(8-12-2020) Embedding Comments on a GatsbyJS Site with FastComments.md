[category:Integrations]
###### [postdate]
# [postlink]Уграђивање коментара на GatsbyJS сајту са FastComments[/postlink]

{{#unless isPost}}
Сада можете користити FastComments да уградите коментаре у сајт направљен помоћу Gatsby‑а!
{{/unless}}

{{#isPost}}

### <i class="circle">!</i> Овај чланак садржи технички жаргон

#### Шта је ново

Недавно смо лансирали наш <a href="https://blog.fastcomments.com/(8-12-2020)-fastcomments-goes-react.html" target="_blank">React компонент</a> за FastComments.

Ово отвара многе могућности – укључујући интегрисање FastComments‑а са Gatsby‑ем.

#### Ако сте написали сопствени омотач

Ако сте написали сопствени React омотач за FastComments – размотрите замену са нашим новим. Ми ћемо одржавати ову апстракцију за вас – и он садржи многе практичне функције попут <a href="https://github.com/FastComments/fastcomments-react" target="_blank">аутоматског поновног учитавања при променама конфигурације</a>.

#### Како функционише

Пошто FastComments има React компоненту као омотач око нашег основног виџета – ствар је само у коришћењу наше React библиотеке за инстанцирање виџета на клијентској страни.

Потпуно подржавамо ову компоненту и наставићемо да је ажурирамо.

#### Примери?

Започели смо са постављањем примера, које можете пронаћи <a href="https://github.com/FastComments/fastcomments-gatsbyjs-example" target="_blank">овде</a>.

#### Ноћни режим

Један од примера који имамо је „ноћни режим“ – приказивање FastComments‑а на сајту са црном (или врло тамном) позадином: <a href="https://github.com/FastComments/fastcomments-react" target="_blank">https://github.com/FastComments/fastcomments-react</a>.

Поред тога, пошто виџет реагује на промене конфигурације, то значи да можете имати режим за промену теме вашег сајта и лако рећи fastcomments-react да се ажурира.

#### У закључку

Надамо се да ће вам интегрисање FastComments‑а у ваш Gatsby сајт бити брзо и лако.

Поздрав!

{{/isPost}}