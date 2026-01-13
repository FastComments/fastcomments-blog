[category:Announcements]

###### [postdate]
# [postlink]FastComments zdaj podpira več dobaviteljev oblaka[/postlink]

{{#unless isPost}}
Od aprila 2023 so podatkovne baze FastComments zdaj shranjene pri več dobaviteljih oblaka za dodatno previdnost.
{{/unless}}

{{#isPost}}

### Kaj je novega

Prej je imela FastComments aktivne varnostne kopije podatkov na več strežnikih, vendar pri istem dobavitelju oblaka.

FastComments predvsem uporablja Linode za zahodno obalo ZDA in EU, kot ločene namestitve podatkovnih baz in aplikacij.

Vsaka regija je prej imela svojo repliko za podatkovno bazo kot aktivno varnostno kopijo. Če bi bila primarna podatkovna baza kdorkoli izgubljena, iz kateregakoli razloga, 
bi bila aktivna varnostna kopija na voljo, da prevzame njeno mesto. Tudi posnetki podatkovne baze so bili izvedeni na teh varnostnih kopijah.

Zdaj smo dodali varnostne kopije pri drugem dobavitelju oblaka, tako da podatki v vsaki regiji niso izolirani na en datacenter na regijo.

Nova topologija podatkovne baze je:

- Zahodna obala ZDA
  - En klaster podatkovne baze na Linode v Kaliforniji.
  - **NOVO** Ena aktivna replika na Hetznerju v Oregonu.
- EU
  - En klaster podatkovne baze na Linode v Frankfurtu.
  - **NOVO** Ena aktivna replika na Hetznerju v Falkensteinu.

Te replike so aktivne, vedno imajo najnovejšo različico podatkovne baze. 

### V zaključku

Kot pri vseh večjih izdajah, smo veseli, da smo imeli čas za optimizacijo, testiranje in pravilno izdajo te funkcionalnosti. Sporočite nam
spodaj, če odkrijete kakršnekoli težave.

Na zdravje!

{{/isPost}}