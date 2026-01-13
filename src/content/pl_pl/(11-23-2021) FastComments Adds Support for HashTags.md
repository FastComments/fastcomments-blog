---
[category:Features]

###### [postdate]
# [postlink]FastComments dodaje wsparcie dla #HashTags[/postlink]

{{#unless isPost}}
Kiedykolwiek chciałeś #oznaczyć temat lub informację? Teraz możesz to zrobić.
{{/unless}}

{{#isPost}}

### Co nowego

Podczas komentowania użytkownicy mogą teraz wprowadzać jeden lub więcej `#hashtagów`. Kliknięcie na `#hashtag` w komentarzu przeniesie Cię do widoku z innymi komentarzami
z wyświetlanym hashtagiem.

Dodatkowo, `#hashtagi` mogą być używane do linking do zewnętrznych treści. Wraz z tym wydaniem uruchomiliśmy nasz [HashTag API](https://docs.fastcomments.com/guide-api.html#hash-tag-structure)
które umożliwia wstępne uzupełnianie hashtagów w Twoim koncie.

Podczas wstępnego uzupełniania hashtagów możemy zdefiniować URL dla każdego tagu. Oznacza to, że `#hashtagi` mogą również być używane do linkowania, na przykład, do numeru biletu, lub
dokumentu w CRM.

Symbol `#` może być również dostosowany na życzenie.

### Jak to używać

Po wpisaniu `#`, a następnie początku hashtagu, pojawi się lista wyników wyszukiwania.

<div class="text-center">
    <img src="images/fc-hashtags.png" alt="HashTags Usage" title="#hashtags Demo" />
</div>

Po prostu kliknij hashtag, który chcesz dodać.

Dodatkowo możesz używać klawiszy strzałek w górę i w dół do nawigacji po tej liście, a następnie nacisnąć enter, aby wybrać, lub escape, aby wyjść.

Wiemy, że możesz chcieć używać symbolu `#` bez dodawania hashtagu. FastComments wykryje to i nie zakłóci Twojego doświadczenia podczas pisania.

### Dodawanie Hashtagów

Jeśli hashtag, którego chcesz użyć, nie znajduje się na liście sugestii - FastComments po prostu automatycznie utworzy hashtag w tle.

Automatyczne tworzenie `#hashtagów` można wyłączyć zgodnie z dokumentacją [tutaj](https://docs.fastcomments.com/guide-customizations-and-configuration.html#disable-automatic-hashtag-creation).

### Kto to otrzymuje

Wszyscy obecni i nowi klienci FastComments, na wszystkich poziomach, mają teraz dostęp do `#hashtagów`. `#hashtagi` zostały zaimplementowane również w wcześniejszych wersjach 
widgetu komentowania.

### Jak działa Autouzupełnianie

Tagi wyświetlane w liście autouzupełnienia pochodzą tylko z Twojego konta. Hashtagi nie są współdzielone między wynajmującymi FastComments.

### Dokumentacja

Istnieje dedykowana dokumentacja dotycząca `#hashtagów`. Zobacz tutaj: https://docs.fastcomments.com/guide-hashtags.html

### Na zakończenie

Jak w przypadku reszty FastComments, mamy nadzieję, że uznasz tę funkcję za szybką i łatwą w użyciu.

Na zdrowie!

{{/isPost}}

---