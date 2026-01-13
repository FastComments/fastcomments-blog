---
[category:Features]
###### [postdate]
# [postlink]Aktualizacja zarządzania najemcami[/postlink]

{{#unless isPost}}
FastComments poprawił interakcje związane z zarządzaniem Twoimi najemcami!
{{/unless}}

{{#isPost}}

### Co nowego

Od 11 grudnia 2023 FastComments posiada możliwość przełączania najemców bez udawania innych użytkowników najemców.

### Docelowa grupa odbiorców

Ta aktualizacja nie jest przeznaczona dla komentatorów lub administratorów stron, którzy prowadzą jeden serwis. Korzystają na tym jedynie administratorzy, którzy zarządzają wieloma stronami lub najemcami.

### Wpływ na administratorów

Wcześniej tworzenie najemców i przełączanie użytkowników było uciążliwe. Niektóre powszechne problemy to:

1. Musiałeś stworzyć użytkownika podczas tworzenia swojego najemcy, ponieważ ten użytkownik "należał" do najemcy.
2. Oznaczało to, że musiałeś używać nowego adresu e-mail dla każdej strony, nawet jeśli chciałeś używać jednego e-maila/konta dla wielu sub-najemców.
3. Przełączanie najemców wymagało udawania, co oznaczało, że Twoi użytkownicy musieli być duplikowani we wszystkich najemcach, z tymi samymi uprawnieniami itd.

Teraz:

1. Tworzenie użytkownika nie jest wymagane podczas tworzenia najemcy.
2. Każdy Super Administrator z odpowiednimi uprawnieniami ma te same uprawnienia we wszystkich sub-najemcach.
3. W liście najemców znajduje się przycisk `Switch`, który zachowuje Twojego aktualnego użytkownika i uprawnienia, ale zmienia, do którego najemcy jesteś zalogowany.
4. Jeśli jesteś administratorem najemcy nadrzędnego, masz uprawnienia moderatora w sub-najemcach, korzystając z widgetu komentarzy. 

Wydarzenia są nadal rejestrowane w Dzienniku audytu dla najemcy, do którego zostałeś przełączony.

### Udawanie

Nadal możesz udawać użytkowników. Przełącz się na najemcę i przejdź do strony `Users`.

### Dla programistów i pułapki

Podczas korzystania z API `POST /tenants`, pole `email` jest teraz opcjonalne. Dokumentacja została zaktualizowana.

### Przyszłe aktualizacje

W przyszłości w liście najemców pojawi się jeszcze kilka akcji administracyjnych, takich jak usuwanie najemców itd.

### Na zakończenie

Jak w przypadku wszystkich głównych wydań, cieszymy się, że mogliśmy poświęcić czas na optymalizację, testowanie i właściwe wprowadzenie tej funkcji. Daj nam znać poniżej, jeśli odkryjesz jakiekolwiek problemy.

Na zdrowie!

{{/isPost}}

---