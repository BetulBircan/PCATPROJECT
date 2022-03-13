# PCAT Projesi
## Projeden İstenilenler 1.Kısım
PCAT prpjesi,sayfamıza fotoğraf yükleyebilmek,silmek, yeni açıklamalar eklemek üzere oluşturulmuş bir projedir.
PCAT projesini farklı ödevlere ayırarak yapmaya çalışacağız. Bu ödevimizde yapılması gerekenler:

- PCAT proje klasörünü oluşturalım.

- Package.json dosyasını oluşturalım.

- Prettier ayarlarını yapalım.(İsteğe bağlı)

- Express ve Nodemon modüllerini indirelim.

- get request içerisinde const photo = { id: 1, title: "Photo Name", description: "Photo Description" }, içeriğini gönderelim.

### Proje Açıklaması
- İlk başta kendi bilgisayarıma istenildiği şekilde PCAT klasörü oluşturdum. Daha sonra da `npm init` ile de package.json dosyasını oluşturdum.

- Kodumuzun daha düzenli olmasını sağlamak için Prettier eklentisini Extention kısmından yükledim ve `npm install prettier -D --save-exact` komutuyla proje dosyama dahil ettim.
Daha sonra da CTRL+Shift+p yardımıyla Create Configuration File diyerek .prettirerc dosyasını oluşturdum, ardından da şu düzenlemeleri ekledim.

```
{
  "tabWidth": 2,
  "useTabs": false,
  "semi":true,
  "singleQuote": true,
  "trailingComma": "es5"
}

```
- Kendi Sunucumuzu yazmak için `npm i express --save` komutu ile express i, bir değişiklik yapmak istediğimizde kaydetmek için sunucuyu sürekli kapatıp yeniden başlatmamak için yani her değişiklik yaptığımızda otomatik olarak sunucunun yeniden başlatılması için de `npm install --save-dev nodemon` komutu ile de nodemon u yükledim.

- En sonunda da express i app.js dosyasına require ile ekleyerek get request içerisinde const blog = { id: 1, title: "Blog title", description: "Blog description" }, içeriğini göndermek için gerekli kodları oluşturdum.

```
const express = require('express');

const app = express();

app.get('/', (req, res) => {

    const photo = {
        id: 1,
        name: "Photo Name",
        description: "Photo Description"
    }
    res.send(photo)
})

const port = 3000;
app.listen(port, () => {
  console.log(`Sunucu ${port} numaralı portta başlatıldı...`);
});
```
---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
## Projeden İstenilenler 2.Kısım

- Public klasörü oluşturup statik dosyalarımızı içerisine yerleştirelim.

- İlgili middleware fonksiyonunu yazarak public klasörümüzü uygulamamıza kaydedelim.

- EJS modülünü indirelim.

- Uygulamamızda EJS modülünü kullanacağımızı belirtelim.

- Views klasörü oluşturalım ve tüm .html dosyalarımız views klasörü içerisinde .ejs dosyalarına çevirelim.

- Partials klasör yapısını oluşturalım.

- İlgili yönlendirmeleri ve _navigation.ejs klasöründeki link düzenlemelerini yapalım.

### Proje Açıklaması
- İlk başta proje klasörüne public klasörünü oluşturdum ve projede kullanılacak olan stil dosyaları gibi static dosyalarını bu klasörün içine attım.

![pcatpublic](https://user-images.githubusercontent.com/86554799/158023583-5296e145-2e92-4bfa-99e1-1423b79e506d.jpg)

- Public klasörünü uygulamaya kaydetmek için ilgili middleware fonksiyonunu yazdım.

```
//MIDDLEWARES
app.use(express.static('public'));  //index.html,css gibi statik dosyaları ekleme
```
- Sayfamızın dinamik bir şekilde çalışmasını yani içeriğinde değişiklikler yapmak istediğimizde template engine -şablon motoru- kullanılırız.Template engine bize  değişen içeriğin html kodu içerisinde dosya uzantısı değiştirilerek kullanmamızı sağlar. Template engineler sayesinde bir static dosyaları ve değieşn dinamik içeriği birlikte kullanabiliriz. Farklı template engineler kullanılabilir, fakat bu çalışmaada EJS template engine yapısını kullanacağım.

- EJS, Embedded Java Script kelimelerinden oluşur ve bize saf Javascript kodları kullanmamıza imkan verirken aynı zamanda çalışmamıza ait değişen içerikleri de kullanabiliriz.

- Bunun için de `npm i ejs` komutuyla ejs modülünü indirdim.Somrasında da 
```
//Template Engine
app.set('view engine', 'ejs');
```
fonksiyon ile uygulamada ejs modülünü kullanacağımı belirttim.

- EJS modülü template dosyaları görebilmek için varsayılan olarak views klasörünün içerisindeki .ejs uzantılı dosyalara bakar. Bu sebeple de proje dosyasına views klasörünü oluşturdum ve tüm .html dosyalarını views klasörü içerisinde .ejs dosyalarına çevirdim.

![pcatviews](https://user-images.githubusercontent.com/86554799/158023652-01fe085d-a27d-4f80-bc3c-3cdc699a6462.jpg)

- Sonrasında views klasörü içerisine partials klasörü oluşturdum. Bu klasörün içerisine tüm ejs dosyalarında ortak olarak yazılan header kısımını _header.ejs, nav kısmını  _navigation.ejs ve footer kısmını _footer.ejs olacak şekilde düzenledim.

![pcatpartials](https://user-images.githubusercontent.com/86554799/158023736-93dee25c-6fe0-40fe-98b3-05e7b61b11cf.jpg)

- En sonunda da index,about ve app.data sayfalarına get metodu ile app.js dosyasında ilgili yönlendirmeleri yaptım ve  _navigation.ejs klasöründeki link düzenlemelerini yaptım.

**App.js Dosyası**

![cleanblogappjs1](https://user-images.githubusercontent.com/86554799/157755866-040d3090-c071-41e2-bcb9-9dc4252d4b0b.jpg)

![cleanblogappjs2](https://user-images.githubusercontent.com/86554799/158024565-b3248132-4a9d-4f1d-9741-5c414ade7665.jpg)

**_navigation.ejs**

![cleanblognavigation](https://user-images.githubusercontent.com/86554799/157756146-e2b887be-6626-4a60-9b03-93c1eaf8a760.jpg)

**Sonucu**

**Photo**

![pcatanasayfa](https://user-images.githubusercontent.com/86554799/158024896-48806522-9e88-4d0b-b2d5-b9b1df63a44f.jpg)

**About**

![pcatabout1](https://user-images.githubusercontent.com/86554799/158024904-42a9d0f9-f48a-4590-b232-0f773216dc23.jpg)

**Add Photo**

![pcataddphoto](https://user-images.githubusercontent.com/86554799/158024915-2d66c2e9-b922-40c3-bb68-a2766da1e597.jpg)

---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
## Veritabanı CRUD İşlemleri
Uygulamamızın sayfalarına ulaşabiliyoruz. Ancak hala uygulama verilerimizi tamamı statik bir şekilde template dosyalarının içerisinde bulunuyor. Bir uygulama oluşturmanın temel mantığı nedir? Uygulamamızdaki verileri gerektiğinde silmek, güncellemek, yeni veri yüklemek ve bu değişimleri görmek isteriz.

Bunun için verilemizin uygulamamızın dışında başka bir yazılımlarda bulundurmak en kolay yöntemdir. Bu yazılımlara veritabanı denir. Ben MongoDB veri tabanından yararlanacağım. MongoDB bir NoSQL veri tabanıdır. Node.js de ennsık kullanılan veri tabanlarından biridir çünkü yapısı json dökümanına benzer.

Biz Node.js http çekirdek modülü sayesinde kendi web sunucumuzu yazabiliriz, ancak bizim açımızdan yönlendirmeleri (routes) daha kolay yapabilmek ve başka avantajları sayesinde express modülünü kullandık. Aynı şekilde biz veritabanımızda oluşturmak istediğimiz dökümanları mongoDB ile oluşturabiliyoruz.

Bir nesne veri modelleme (ODM) kütüphanesi olarak mongoose, Schema yapısı sayesinde türetilen nesneleri mongoDB içerisindeki dökümanlara dönüştürür. Burada belirtilen Schema, projemizde kullanacağımız verilere ait bir şablon yapısıdır.

- Önce mongoose modelini indirmemiz gerekir.

`npm i mongoose`

- Uygulamamızda kullanmadan önce test.js dosyasının içerisinde kullanacağım. mongoose modülünü ve ve mongoose modülüne ait Schema class ını çağıralım.

```
//mongoose u kullanmak için test.js dosyasına ekliyoruz.
const mongoose = require('mongoose');
//Schema oluşturma
const Schema = mongoose.Schema;

```

- Veritabanına bağlanmak için connect metdonu kullanacağız. Veritabanı adı pcat test-db. Sonrasında hata almamak için useNewUrlParser ve useUnifiedTopology parametrelerini ekleyeceğim.

```
//Connect db-mongoose.connect('veritabanı://localbağlantı(bağlanacağın yer)/veritabanıadı')
mongoose.connect('mongodb://localhost/pcat-test-db', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

```
- Sırada  Schema yapısı var. Ben bu uygulamada Photo verisini kullanacağım ve bu verime ait olan isim ve tanım özelliği olmasını istiyorum.

```
//Create Schema-Kullanacağımız fotoğraf verisine ait şablon oluşturuyoruz.
const PhotoScheama = new Schema({
  title: String,
  description: String,
});
```

- Bu şablonu kullanarak şimdi model metodu sayesinde Schema ve 'Photo' stringini kullanarak yeni bir model oluşturuyorum.

```
//Create Model-Veritabanınımızdaki collection ve dökümanımızı oluşturur.
const Photo = mongoose.model('Photo', PhotoScheama);
```

- Sıra geldi model sayesinde ilk dökümanı oluşturmaya.

```
//Create a photo's data

  Photo.create({
  title: 'Photo 2',
  description: 'Photo Description 2 Lorem Ipsum',
});
 
```

node test komutunu kullanarak, dökümanın oluştuğunu görebiliriz.

Diğer CRUD komutları aşağıdadır:

- read a photo

```
//read a photo's data
Photo.find({}, (err, data) => {
  console.log(data);
}); 
```

- update photo

```
//update a photo's data

 const id = '622b804b8ce4237107e6f9cb';

Photo.findByIdAndUpdate(
  id,
  {
    title: 'Photo 111 updated',
    description: 'Photo Description 111 updated',
  },
  {
      new: true
  },
  (err, data) => {
    console.log(data);
  }
); 
```

- delete a photo
```
//delete a photo's data

const id = '622b83b50dcf4eebca651ea1';

Photo.findByIdAndDelete(id, (err, data) => {
  console.log('Photo is Removed...');
});
```
**Sonucu**

![mongo1](https://user-images.githubusercontent.com/86554799/158026931-71a8047b-9d9d-438a-9a2c-ec486e53c32a.jpg)

---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
## Request Body Nesnesini Kullanarak Fotoğraf Bilgisini Ekrana Taşımak
- İlk başta add photo sayfasındaki form bölümünde yükleceğimiz fotoğrafın title, description ve fotoğraf yükleme kısmı olacak şekilde form alanınnı add.ejs dosyasında düzenledim.

![pcataddphoto2](https://user-images.githubusercontent.com/86554799/158058655-9d294762-817c-4880-a4df-9e79b7b29bb2.jpg)

- Daha sonra uygulamanı add photo sayfasından yükleyeceğimiz fotoğraf bilgisini bir şekilde anasayfaya taşımak istedim. Bunun için de add.ejs dosyasındaki yani add photo sayfasında  kullanacağız metot POST ve action='/photos' olacak şekilde düzzenledim.

- Sonrasında "add photo" sayfadan gelen post metodunu yakalamak için ilgili yönlendirmeyi yakalayıp, consolda request nesnesinden gelen body bilgisini yakalamak için gerekl, kodları yazdım.

```
  app.post('/photos', (req, res) => {
  console.log(req.body);
  res.redirect('/')
});
```

- Add photo sayfasından bilgileri gönderildiğinde console da undefined sonucu ortaya çıkıyor. Bunun nedeni body ile saklanan verinin yakalanamıyor olması. Bu body bilgisini yakalamak için 2 adet middleware fonksiyonunu kullanmak gerekir. Daha sonradan bu fonksiyonları ekledim.

```
//MIDDLEWARES
app.use(express.static('public')); //index.html,css gibi statik dosyaları ekleme
app.use(express.urlencoded({extended:true})) //url deki datayı okumamızı sağlar
app.use(express.json()) //url deki datayı json formatına dönüştürmemizi sağlar.
```

- Bunun sonucunda bilgileri tekrar gönderdiğimde console da body bilgisini bir nesne halinde yakalamış oldum. Ayrıca res.redirect('/') nedeniyle ana sayfaya yönlendirme işlemini yaptım.

![pcataddphoto3](https://user-images.githubusercontent.com/86554799/158062535-ba12c237-99eb-47cc-8539-8df953ddf07d.jpg)

![pcatrequestbody](https://user-images.githubusercontent.com/86554799/158062559-857259e1-9e6c-4384-a05e-a9e942d18865.jpg)

