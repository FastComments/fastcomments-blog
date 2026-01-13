---
[category:Features]
[category:Moderation]
###### [postdate]
# [postlink]Języki używane w komentarzach można teraz ograniczyć[/postlink]

{{#unless isPost}}
Niektóre społeczności chcą ograniczyć używane języki. To można teraz zrobić z FastComments.
{{/unless}}

{{#isPost}}

### Co nowego

FastComments zawsze starał się wspierać jak najwięcej języków i regionalnych ustawień.

Jednak niektóre społeczności chcą ograniczyć języki używane do komunikacji i pisania komentarzy.

Zamiast egzekwować to jako zasadę i potencjalnie banować użytkowników, można to teraz wyraźnie skonfigurować na platformie.

### Jak to ustawić

W tym samym interfejsie dostosowywania widgetu, z którym prawdopodobnie jesteś zaznajomiony, możesz teraz wybrać jeden lub więcej języków, w których można pisać komentarze.

Platforma, po przesłaniu komentarza, spróbuje w czasie rzeczywistym określić język komentarza. Jeśli pewność określonego języka przekracza 70%, a on pasuje do dozwolonego języka, komentarz jest dozwolony.

Jeśli napisany komentarz nie jest w języku zdefiniowanym w twojej konfiguracji, użytkownik zobaczy komunikat o błędzie w swoim języku.

### Wpływ na deweloperów

Ta konfiguracja wpłynie również na komentarze zapisane za pośrednictwem API.

Otrzymasz błąd taki jak poniższy:

            status: 'failed',
            reason: `Komentarz wydaje się być w jednym z tych języków: [es], ale dozwolone są tylko [en,fr].`,
            code: 'language-not-allowed',
            translatedError: "Komunikat o błędzie w języku użytkownika."

### Podsumowując

Jak w przypadku wszystkich dużych wydań, cieszymy się, że mogliśmy poświęcić czas na optymalizację, testowanie i odpowiednie wydanie tej funkcji. Daj nam znać
poniżej, jeśli odkryjesz jakieś problemy.

Na zdrowie!

{{/isPost}}