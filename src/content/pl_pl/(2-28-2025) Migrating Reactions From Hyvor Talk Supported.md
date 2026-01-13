---
[category:Migration]

###### [postdate]
# [postlink]Migracja reakcji z Hyvor Talk jest teraz obsługiwana[/postlink]

{{#unless isPost}}
Kiedy importujesz swój eksport danych z Hyvor Talk, możemy teraz migrować twoje reakcje na poziomie strony.
{{/unless}}

{{#isPost}}

### Co nowego

Kiedy importujesz komentarze, aby je migrować z Hyvor Talk, FastComments może teraz importować twoje reakcje na stronie. Dodatkowo, wykryjemy, czy wątki komentarzy na stronach są zamknięte, i również migrujemy ten status.

Ponowne uruchomienie importu nie spowoduje duplikacji zliczeń ani utraty jakichkolwiek wartości reakcji sprzed importu.

### Jak skonfigurować reakcje

Pokazywanie reakcji na stronie nie jest automatyczne. Aby rozpocząć, musisz zaktualizować konfigurację widgetu:

```
<script src="https://cdn.fastcomments.com/js/embed-v2.min.js"></script>
<div id="fastcomments-widget"></div>
<script>
    FastCommentsUI(document.getElementById('fastcomments-widget'), {
        "tenantId": "demo",
        pageReactConfig: {
            reacts: [
                {id: 'superb', src: 'https://raw.githubusercontent.com/hfg-gmuend/openmoji/master/color/618x618/1F929.png'}, // Zaskoczony
                {id: 'love', src: 'https://raw.githubusercontent.com/hfg-gmuend/openmoji/master/color/618x618/2764.png'}, // Czerwone serce
                {id: 'wow', src: 'https://raw.githubusercontent.com/hfg-gmuend/openmoji/master/color/618x618/1F62E.png'}, // Twarz z otwartą buzią
                {id: 'sad', src: 'https://raw.githubusercontent.com/hfg-gmuend/openmoji/master/color/618x618/1F622.png'}, // Płacząca twarz
                {id: 'laugh', src: 'https://raw.githubusercontent.com/hfg-gmuend/openmoji/master/color/618x618/1F602.png'}, // Twarz ze łzami radości
                {id: 'angry', src: 'https://raw.githubusercontent.com/hfg-gmuend/openmoji/master/color/618x618/1F620.png'}  // Wściekła twarz
            ]
        }
    });
</script>
```

Id muszą odpowiadać tym z eksportu Hyvor Talk. Ten przykład używa poprawnych wartości.

Będziesz musiał dostarczyć własne obrazy reakcji. Mogą być w dowolnym formacie, w tym w gifach. Powyższy przykład korzysta z niektórych z projektu OpenMoji.

### Podsumowanie

Jak przy wszystkich dużych wydaniach, cieszymy się, że mogliśmy poświęcić czas na optymalizację, testowanie i odpowiednie wydanie tej funkcji. Daj nam znać poniżej, jeśli napotkasz jakiekolwiek problemy.

Na zdrowie!

{{/isPost}}