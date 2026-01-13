---
[category:Announcements]

###### [postdate]
# [postlink]FastComments Er Nu Sikkerhedskopieret På Tværs Af Flere Cloud-udbydere[/postlink]

{{#unless isPost}}
Fra april 2023 er FastComments databaser nu gemt hos flere cloud-udbydere for ekstra forsigtighed.
{{/unless}}

{{#isPost}}

### Hvad er Nyt

Tidligere havde FastComments live-database-sikkerhedskopier på flere servere, men i den samme cloud-udbyder.

FastComments bruger primært Linode til US-West og EU-regioner, som separate database- og applikationsimplementeringer.

Hver region havde tidligere sin egen replica for databasen som en live-sikkerhedskopi. Hvis den primære database nogensinde gik tabt, af en hvilken som helst grund, 
ville den live-sikkerhedskopi være tilgængelig for at tage dens plads. Øjebliksbilleder af databasen udføres også på disse sikkerhedskopier.

Vi har nu tilføjet sikkerhedskopier på en anden cloud-udbyder, så dataene i hver region ikke er isoleret til ét datacenter pr. region.

Den nye databasetopologi er:

- US-West
  - Én databaseklynge på Linode i Californien.
  - **NY** Én live-replica på Hetzner i Oregon.
- EU
  - Én databaseklynge på Linode i Frankfurt.
  - **NY** Én live-replica på Hetzner i Falkenstein.

Disse replicaer er live, de har altid den nyeste version af databasen. 

### Afslutning

Som med alle større udgivelser er vi glade for, at vi kunne tage os tid til at optimere, teste og korrekt frigive denne funktion. Lad os vide 
nedenfor, hvis du opdager nogen problemer.

Skål!

{{/isPost}}

---