---
[category:UI & Customization]

###### [postdate]
# [postlink]Dostosowywanie Domyślnego Awatara[/postlink]

{{#unless isPost}}
Obraz domyślnego awatara można teraz dostosować.
{{/unless}}

{{#isPost}}

### <i class="circle">!</i> Artykuł Zawiera Terminologię Techniczną

#### Wprowadzenie

Domyślny ikonka była taka sama od momentu uruchomienia FastComments. Oto chwała domyślnej ikony profilu.

<div class="text-center">
    <img src="https://fastcomments.com/images/unknown-person.png" title="Domyślna Ikona Profili" alt="Domyślna Ikona Profili" />
</div>

Jednak teraz możesz ją dostosować.

#### Bez Kodu

Najpierw <a href="https://fastcomments.com/auth/my-account/customize-widget" target="_blank">dodaj lub edytuj zasady dostosowania</a>. Zasady dostosowania mogą być stosowane tylko do jednej strony, domeny lub całego Twojego konta. Jeśli chcesz zmienić zdjęcie profilowe globalnie, możesz zostawić pole ID URL puste.

Przewiń w dół do sekcji "Domyślny Awatar".

<img 
    src="/images/fc-customize-default-icon-button.png"
    alt="Ustawienia FastComments Hackaday"
    class='lozad' />
    
Kliknij przycisk, aby przesłać JPG, PNG lub GIF o wielkości do 20mb. Zostanie on przeskalowany do kwadratu 100px.

#### W Kodzie

Jeśli chcesz hostować domyślny awatar, a już masz publiczny URL do niego, można go zdefiniować w kodzie, jak w podanym przykładzie.

<div class="code">    window.FastCommentsUI(document.getElementById('fastcomments-widget'), {
        tenantId: 'demo',
        defaultAvatarSrc: 'https://example.com/some-100-x-100-image.png'
    });
</div>

Obraz powinien być kwadratowy, a jego rozmiar powinien wynosić 100px kwadrat. Przestrzeganie tych ograniczeń zapewni najlepsze doświadczenia.

#### Pułapki

1. Dostosowanie domyślnego zdjęcia profilowego dotyczy tylko Twojej strony. Nie wpływa na e-maile powiadamiające, ani na konta użytkowników w żaden sposób.
2. Komentarze utworzone przed tą zmianą mogą nadal wyświetlać stare zdjęcie profilowe. Jeśli dostosujesz domyślną ikonę profilu i zauważysz wiele komentarzy na swojej stronie
z użyciem starej ikony profilu, <a href="https://fastcomments.com/auth/my-account/help" target="_blank">daj nam znać</a>.

#### Na Zakończenie

Mamy nadzieję, że ten przewodnik okazał się pomocny i łatwy do przeczytania. Zachęcamy do komentowania poniżej w razie jakichkolwiek pytań.

Pozdrawiamy!

{{/isPost}}

---