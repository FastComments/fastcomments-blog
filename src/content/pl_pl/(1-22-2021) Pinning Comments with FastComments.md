---
[category:Features]
[category:Moderation]
###### [postdate]
# [postlink]Przypinanie komentarzy z FastComments[/postlink]

{{#unless isPost}}
Komentarze na najwyższym poziomie mogą teraz być przypinane w wątkach komentarzy!
{{/unless}}

{{#isPost}}

#### Wprowadzenie

Komentarze mogą teraz być "przypięte" na górze wątków komentarzy, niezależnie od porządku sortowania.

Można to zrobić w menu trzy kropki w prawym górnym rogu komentarza, jeśli jesteś zalogowany jako administrator lub moderator.

<div class="text-center">
    <img src="images/fc-pinned-comment-example.png" alt="Przypięty komentarz" title="Przypięty komentarz" />
</div>

Nowe komentarze będą pojawiać się pod przypiętymi komentarzami.

Nie ma ograniczeń co do liczby przypiętych komentarzy w wątku komentarzy.

#### Głosowanie i wiek komentarzy

Bez względu na liczbę głosów czy wiek innych komentarzy, przypięte komentarze zawsze będą pokazywane na górze.

#### Kto może przypinać i odpinąć komentarze

Administratorzy i moderatorzy to jedyni użytkownicy, którzy mogą przypinać i odpinąć komentarze.

#### Na żywo komentowanie

Kiedy komentarz jest przypięty lub odpinany, ta aktualizacja jest wysyłana do wszystkich widzów wątku komentarzy.

Gdy stan przypięcia komentarza się zmienia, komentarz jest natychmiast przenoszony dla osoby przypinającej komentarz oraz dla wszystkich
oglądających wątek komentarzy. Jeśli użytkownik się rozłączy, a następnie komentarz zostanie przypięty, komentarz będzie przypięty i przeniesiony
dla tego użytkownika po ponownym połączeniu.

#### Wydajność

Porządek sortowania wątku komentarzy jest wstępnie obliczany przy każdej zmianie. Oznacza to, że dodatkowe sortowanie wymagane do
przypięcia komentarzy na górze nie wpłynie na czasy ładowania strony.

#### Podsumowanie

Mamy nadzieję, że ten przewodnik był pomocny i łatwy do przeczytania. Zachęcamy do komentowania poniżej, jeśli masz jakiekolwiek pytania.

Pozdrawiamy!

{{/isPost}}

---