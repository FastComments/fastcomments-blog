---
[category:UI & Customization]

###### [postdate]
# [postlink]Kusursuz Karanlık Mod Geçişi Eklendi[/postlink]

{{#unless isPost}}
FastComments her zaman karanlık modu destekliyordu. Ancak, karanlık moda geçmek için yorum widget'ının yeniden yüklenmesi gerekiyordu. Bu sorun giderildi.
{{/unless}}

{{#isPost}}

### Yenilikler

FastComments her zaman karanlık modu destekliyordu. Ancak, karanlık moda geçmek için yorum widget'ının yeniden yüklenmesi gerekiyordu.

Bu, bir site karanlık modu kullanıyorsa veya kullanıcıların açık ve karanlık modlar arasında geçiş yapmasına izin veriyorsa, yorum widget'ının tarayıcıdan tamamen kaldırılıp yeniden yüklenmesi gerektiği anlamına geliyordu. Bu, ürünün başlangıçta daha basit hale getirilmesi için teknik nedenlerle yapıldı, çünkü durumun ana sayfa ile widget'ın iframe'i arasında sürekli olarak iletilmesi gerekiyordu.

Korkunç sezonun sona ermesiyle birlikte - karanlık mod geçişi iyileştirildi. Yorum widget'ı artık açık ve karanlık modlar arasında kusursuz geçişleri destekliyor. Ancak, gerekli olduğunda `hasDarkBackground` bayrağını geçmeyi gerektiriyor.

### Geliştiriciler İçin ve Dikkat Edilmesi Gerekenler

Yorum widget'ına sitenizin karanlık modda olduğunu veya karanlık bir arka plan uygulandığını belirtmek için `hasDarkBackground` bayrağını geçersiniz. Bu değişmez. Ancak, artık `instance.update(newConfig)` çağrısı yaptığınızda (veya React, Svelte vb. gibi kütüphanelerimizden birinde durumu değiştirdiğinizde), sadece değiştirilen parametrenin `hasDarkBackground` olup olmadığını tespit edeceğiz ve eğer öyleyse yorum widget'ını zarif bir şekilde güncelleyeceğiz. Widget, gerektiğinde arka planda karanlık mod uzantısını asenkron olarak yükleyecek ve stilini güncelleyecektir.

Bir büyük dikkat edilmesi gereken nokta, `newConfig` geçildiğinde bunun tamamen yeni bir nesne olması gerektiğidir; bu özellik çalışsın diye.

### Sonuç

Tüm büyük sürümlerde olduğu gibi, bu özelliği optimize edip test etmek ve uygun bir şekilde yayınlamak için zaman ayırabildiğimiz için mutluyuz. Herhangi bir sorunla karşılaşırsanız aşağıda bize bildirin.

Şerefe!

{{/isPost}}

---