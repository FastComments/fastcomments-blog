---
[category:Features]

###### [postdate]

# [postlink]April Badges Update[/postlink]

{{#unless isPost}}Der er blevet foretaget nogle ændringer i badges, nogle funktioner er blevet tilføjet, og nogle forbedringer er blevet implementeret for at forhindre, at badges forsvinder, når rebehandling foregår.{{/unless}}

{{#isPost}}

### Hvad er nyt - Badge Stacking

Før i går, hvis du havde et sæt badges i dit fællesskab som følgende:

- Ny Kommentator (1 kommentar)
- Fællesskabsmedlem (50 kommentarer)
- Ekspert (500 kommentarer)

... og en bruger ender med 500 kommentarer, vil de få badges vist på deres kommentarer som dette:

    [Ny Kommentator] [Fællesskabsmedlem] [Ekspert]

I dette specifikke scenarie ønsker vi sandsynligvis kun, at `Ekspert` badge skal vises. Nå, de fleste af vores kunder ønsker dette, men ikke alle. Ikke alle vores lejere har den samme opsætning, og vi anerkender dette.

Men for de fællesskaber, der følger det ovenstående mønster, hvilket er det fleste af dem, ønsker de, at kommentarerne skal vise det mest prestigefyldte badge.

For at håndtere dette brugsscenarie har vi tilføjet konceptet med et badge, der **erstatter** et andet badge. Ved at gøre dette kan vi skabe en strøm af badges, som en bruger kan optjene:

<div class="text-center">
    <img src="images/fc-badge-stacking.png" alt="Badge Stacking" title="Badge Stacking" />
</div>

Internt kalder vi dette *badge stacking*. Det nye badge "stables" oven på det gamle.

Vi kan konfigurere dette ved at redigere et badge og sige, at det erstatter et andet:

<div class="text-center">
    <img src="images/fc-badge-stacking-setup.png" alt="Badge Stacking Setup" title="Badge Stacking Setup" />
</div>

Det er tydeligt, at dette kan blive vanskeligt at holde styr på, så badge-listen er også blevet opdateret for at give mere information, herunder
hvilket badge der erstatter hvad.

### Hvad er nyt - Forbedringer af Rebehandling

Når du foretager en ændring i et badge, skal vi gennemgå alle dine brugere og afgøre, om de stadig bør "optjene" badge'et,
og opdatere alle de viste badge-stile og cache, så den nyeste version vises.

Rebehandling fjerner ikke længere et badge fra en bruger ved gemning, selvom de ikke længere opfylder kriterierne **medmindre de konfigurerede kriterier ændres**.

Administratorer bemærk - du kan sænke tærskelkriterierne for et badge uden at rebehandling fjerner det badge. Kun **øgning** af tærsklen vil
forårsage rebehandling, der kan fjerne badge'et i nogle tilfælde.

For mere, læs videre i *Kommentatorens Perspektiv*.

### Kommentatorens Perspektiv

Rebehandling af badges er meget risikabelt, da brugere elsker deres badges - og vi anerkender det! Vi ønsker ikke at tage en brugers badge væk, fordi
de optjente Reply badge'et på grund af 100 brugere, der svarede på deres kommentarer, og så 10 brugere senere sletter deres kommentarer eller bliver fjernet af moderatorer.

Badge'et bør forblive, og det gør det, bortset fra...

Ved rebehandling ved vi ikke, at de tidligere kommentarer eksisterer, så badge'et kan blive fjernet fra nogle brugere, hvis et badge redigeres, som hvis stilen
opdateres, eller hvis badge stacking opsættes.

Dette skete den 17. april 2023, da vi gik i gang med *Badge Stacking* og nogle fællesskaber aktiverede funktionen.

To scenarier blev observeret:

1. Brugere opdagede, at nogle af deres badges så ud til at være fjernet. Hvad der faktisk skete var, at alle undtagen de mest prestigefyldte badges blev skjult.
   - **Du kan vise alle dine badges, hvis du vil.** Klik blot på de tre prikker i øverste højre hjørne af din profil og klik `Administrer Badges`.
2. Nogle badges blev reelt fjernet for nogle brugere, som i eksemplet med Reply badge ovenfor. For at forhindre, at dette sker i fremtiden, har vi
    forbedret rebehandlingssystemet, så badge'et ikke fjernes, medmindre badge-kriterierne selv ændres, og du ikke længere opfylder kriterierne. Vi 
    fraråder dog fællesskabsadministratorer at gøre dette, fordi brugere igen elsker deres badges.

### For Moderatorer

Der er ingen ændring fra moderatorers perspektiv, bortset fra at du i de fleste tilfælde vil se færre badges vist. I stedet vil du se de mest prestigefyldte
af dine og dine fællesskabsmedlemmers badges vist.

### Eksisterende Kunder

Vi har afsluttet udrulningen af denne funktion til alle eksisterende kunder på alle niveauer! Badge stacking er ikke aktiveret som standard og skal konfigureres manuelt.

### Afslutning

Vi håber, du finder dette nye sæt af funktioner og rettelser nyttigt og nemt at bruge. 

Skål!

{{/isPost}}