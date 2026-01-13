---
[category:Features]
[category:AI & Machine Learning]
###### [postdate]
# [postlink]Nowy filtr spamowy oparty na ChatGPT 4.[/postlink]

{{#unless isPost}}
FastComments dodaje do swojej listy opcji filtrów spamowych.
{{/unless}}

{{#isPost}}

### Co nowego

FastComments nieustannie poprawia swój klasyfikator spamowy Naïve-Bayes, jednak dodaliśmy nową opcję do floty detektorów spamu.

Możesz teraz wykrywać spam za pomocą ChatGPT 4 dostarczonego przez OpenAI.

### Jak to skonfigurować

Aby skonfigurować, który detektor spamu ma być używany, sprawdź stronę Ustawienia Moderacji w swoim panelu administracyjnym. Detektor spamu oparty na GPT4 jest rozliczany na poziomie `$0.08` za każde `1000` tokenów.

Ten detektor spamu jest dostępny tylko dla klientów na planie Flex, ponieważ jest rozliczany na podstawie użytych tokenów.

### Optymalizacje

Najpierw przesyłamy całą treść do wspólnego klasyfikatora Naïve-Bayes, aby ograniczyć wywołania do OpenAI. To oszczędza Twoje pieniądze na bardzo oczywistym spamie. W przypadku dodatkowo podstępnego spamu
następnie łączymy się z OpenAI, aby sprawdzić, czy treść wygląda na spam.

### Wyniki

Zauważyliśmy natychmiastowe poprawy w społecznościach, które włączyły tę funkcję.

### Dokumentacja

Może to być skonfigurowane za pośrednictwem strony Ustawienia Moderacji w Twoim panelu administracyjnym.

[Dokumentację można również znaleźć tutaj](https://docs.fastcomments.com/guide-moderation.html#spam-detection)

### Na zakończenie

Dziękujemy naszym klientom, którzy dają nam ciągłe opinie, dzięki którym możemy myśleć o takich pomysłach jak ten. Mamy nadzieję, że nadal będziesz kochać FastComments.

Na zdrowie!

{{/isPost}}

---