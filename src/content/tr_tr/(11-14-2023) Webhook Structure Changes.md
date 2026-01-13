---
[category:API & Development]

###### [postdate]
# [postlink]Webhook Yapısı Değişiklikleri[/postlink]

{{#unless isPost}}
Webhook yapılarına yönelik bazı davranış değişiklikleri yaptık.
{{/unless}}

{{#isPost}}

### Yenilikler

14 Kasım 2023'ten önce, webhooks'lara aşağıdaki değişiklikleri yaptık:

#### Webhooks Güncellemesi

**Daha önce**, güncellemeler bir yorumun en son sürümünü içeriyordu. İki kullanıcı bir yoruma peş peşe oy verdiklerinde, bu 
iki webhook'u tetikliyordu. Ancak, ilk webhook olayının **en son sürümü** içermesi mümkündü, bu da iki 
aynı webhook olayı ile sonuçlanıyordu:

1. ` ... { votes: 2 } ...`
2. ` ... { votes: 2 } ...`

**14 Kasım itibarıyla** her webhook olayı idempotent olup değişiklik anındaki yorum nesnesini içermektedir. Yukarıdaki örnekte artık iki olayı
şöyle alacaksınız:

1. ` ... { votes: 1 } ...`
2. ` ... { votes: 2 } ...`

#### Webhooks Silme

**Daha önce**, silme webhooks yalnızca yorum kimliğini içeriyordu. Bu, `{ id: string }` gibi bir nesne idi.

**14 Kasım itibarıyla**, silme webhooks, kaldırma anındaki **tüm** yorum nesnesini içerecektir.

### Sonuç Olarak

Tüm büyük sürümlerde olduğu gibi, bu özelliği optimize etmek, test etmek ve düzgün bir şekilde yayınlamak için zaman ayırabildiğimiz için mutluyuz. Aşağıda herhangi bir sorun keşfetmeniz durumunda bize bildirin.

Sağlıkla!

{{/isPost}}

---