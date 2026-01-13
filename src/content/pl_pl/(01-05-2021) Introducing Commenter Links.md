---
[category:Cechy]
###### [data publikacji]
# [link do posta]Wprowadzenie Linków Komentujących[/link do posta]

{{#unless isPost}}
Nasze pierwsze wydanie w 2021 roku wprowadza możliwość (jeśli jest włączona na poziomie najemcy) dla użytkowników dodania linku do swojego bloga podczas komentowania.
{{/unless}}

{{#isPost}}

## Co nowego

Nasze pierwsze wydanie w 2021 roku wprowadza możliwość (jeśli jest włączona na poziomie najemcy) dla użytkowników dodania linku do swojego bloga podczas komentowania.

## Czym są Linki Komentujące?

Jak widzimy w tej bardzo ciekawej wymianie, jeden z tych użytkowników ma swoją nazwę użytkownika podkreśloną, aby wskazać, że jest to link:

<div class="text-center">
    <img src="images/fc-blog-links.png" alt="Linki Komentujące" title="Demo Linków Komentujących" />
</div>

Dzieje się tak, ponieważ strona skonfigurowała swoją instalację FastComments, aby umożliwić wypełnienie nowego pola podczas komentowania, gdzie użytkownik może pozostawić link:

<div class="text-center">
    <img src="images/fc-blog-link-input.png" alt="Wprowadzenie Linku Komentującego" title="Wprowadzenie Linku Komentującego" />
</div>

Ten link można również dostosować, edytując swoje <a href="https://fastcomments.com/auth/my-account/edit-details" target="_blank">Szczegóły Konta</a>.

## Włączanie Linków Komentujących

Tworząc <a href="https://fastcomments.com/auth/my-account/customize-widget" target="_blank">Regułę Dostosowania</a>, możemy włączyć nowe pole wejściowe. Wystarczy włączyć opcję "Włącz Linki Komentujące".

<div class="text-center">
    <img src="images/fc-commenter-links-enabling.png" alt="Włączanie Linków Komentujących" title="Linki Blogowe" />
</div>

## Nadpisywanie Tekstu w Polu Wejściowym

Domyślnie tekst zastępczy w polu linku komentującego to "Twój URL bloga.". Można to nadpisać za pomocą tej samej reguły dostosowania, której użyto do włączenia funkcji, klikając "Pokaż Tekst Niestandardowy".

## Poprawa Klasyfikacji Spamu

Ta funkcja ma efekt uboczny w postaci zmniejszenia ilości treści oznaczanych jako spam, które mogą nie być spamem. Komentarze z małą ilością tekstu i linkiem mają większe szanse na zaklasyfikowanie ich jako spam. Jednak link komentujący nie wpływa na klasyfikację, czy komentarz jest spamem, czy nie. Oznacza to, że użytkownik może komentować ze swoim linkiem do bloga z znacznie mniejszym ryzykiem, że komentarz zostanie oznaczony jako spam.

Z tych powodów, strony z dużą ilością spamu mogą nie chcieć włączać tej funkcji, jednak te, które nie mają, znajdą wartość w jej wykorzystaniu w przypadku niektórych odbiorców.

## Wpływ na Istniejących Klientów

Jeśli jesteś istniejącym klientem korzystającym z FastComments, Twoi użytkownicy nie doświadczą żadnych zmian w funkcjonalności, chyba że włączysz tę funkcję. To samo dotyczy nowych klientów - odkryjesz, że ta funkcja jest domyślnie wyłączona.

## Podsumowanie

Mamy nadzieję, że ta funkcja jest początkiem lepszego roku niż ostatni. Miłego komentowania!

{{/isPost}}