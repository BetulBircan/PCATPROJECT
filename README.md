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
Uygulamamızın sayfalarına ulaşabiliyoruz. Ancak hala uygulama verilerimizin tamamı statik bir şekilde template dosyalarının içerisinde bulunuyor. Bir uygulama oluşturmanın temel mantığı nedir? Uygulamamızdaki verileri gerektiğinde silmek, güncellemek, yeni veri yüklemek ve bu değişimleri görmektir.

Bunun için verilemizi uygulamamızın dışında başka bir yazılımlarda bulundurmak en kolay yöntemdir. Bu yazılımlara veritabanı denir. Ben MongoDB veri tabanından yararlanacağım. MongoDB bir NoSQL veri tabanıdır. Node.js de en sık kullanılan veri tabanlarından biridir çünkü yapısı json dökümanına benzer.

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

- Veritabanına bağlanmak için connect metodnu kullanacağız. Veritabanı adı "pcat test-db". Sonrasında hata almamak için useNewUrlParser ve useUnifiedTopology parametrelerini ekleyeceğim.

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

---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
## Model Oluşturma ve Dinamik Yapı Kurma
Bu uygulamada gelen photo bilgilerini yakalayıp oluşturacağımı model ile veritabanına bir döküman olarak yazdırıp sonrasında bu verileri uygun yerde listeleme işlemi yapacağım. 

- Bunun için ilk yapılması gereken ihtiyac duyulan olan modeli oluşturmak. Modeli oluşturma için proje dosyasına models adlı klasör oluşturdum ve bu klasörün içerisine Photo.js dosyasını oluşturdum. Bu dosyanın içerisine gerekli işlemleri yapan kod bloğunu yazdım.

![pcatmodels](https://user-images.githubusercontent.com/86554799/158063869-cd362f7a-1c72-4f04-80b6-7425d406ff71.jpg)

- Daha sonrasında bu modeli add.js de çağırdım.

`const Photo = require('./models/Photo') //modelimizi app.js dosyasına dahil etme`

- Sonrasında da POST metodu ile gelen veriyi model dosyası ile yakalayıp veritabanına gönderdim. Bunun için de şu kodlardan faydalandım.

 ```
 app.post('/photos', async  (req, res) => {
  //Uygulamamızdaki .post metodunu düzenlersek, add.ejs de formda grirlen bilgileri tutar ve '/' dosyasına yani index.ejs dosyasına yönlendirme yapar.
 await Photo.create(req.body)
  res.redirect('/')
});
 ```
 
![pcataddphoto4](https://user-images.githubusercontent.com/86554799/158065992-9bceafe0-f43a-489c-aac2-d67acf042a86.jpg)

**Anasayfaya Yönlendirir.**

![pcatanasayfa2](https://user-images.githubusercontent.com/86554799/158066010-bf3f6be0-5879-472b-9b27-43f274a726b0.jpg)

**VeriTabanına Ekler.**

![pcatmongodb](https://user-images.githubusercontent.com/86554799/158066031-3e4f2b07-6f53-4218-9bd5-e25a85e20ce2.jpg)er

- Bu verileri anasayfada sıralamak için de şu kodlardan yararlandım:

```
//ROUTES
app.get('/', async (req, res) => {
  //veritabanındakifotoğrafları index.ejs dosyasında göstermek istiyoruz.
  const photos = await  Photo.find({})
  //Uygulamamızdaki .get metodunu düzenlersek, bu şekilde '/' isteğine karşılık index.ejs dosyasını render ederiz.
  res.render('index', {
    photos
  });
});
```
- En sonunda ilgili template in veritabanındaki özellikleri alması yani listelemesi için gerekli kod eklemelerini index.ejs dosyasında yaparız.

![pcatindexejs](https://user-images.githubusercontent.com/86554799/158068108-f4d44d6f-7b32-469e-b847-9e041a491a21.jpg)

![pcataddphoto5](https://user-images.githubusercontent.com/86554799/158068218-412e3f0b-d3c7-4379-be5e-7fa3a52c2130.jpg)

---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
## Anasayfada Bulunan Fotoğraflara Ait Olan Tekil Sayfaları Oluşturma
- Anasayfada görüntülenen fotoğrafa tıkladığımızda bu fotoğrafa ait sayfasının görüntülenmesi işlemini yapmak için ilk başta photo.ejs adlı bir şablon oluşturdum ve diğer şablonlarda olduğu gibi gerekli düzenlemeleri yaptım.

**Photo.ejs**
```
<%- include('./partials/_header') -%>
<body>
	<div class="tm-page-wrap mx-auto">
		<div class="position-relative">
			
            <%- include('./partials/_navigation') -%>
			
            <div class="tm-welcome-container tm-fixed-header tm-fixed-header-1">
				<div class="text-center">
					<p class="pt-5 px-3 tm-welcome-text tm-welcome-text-2 mb-1 text-white mx-auto">Background image can be fixed. Content will simply slide over.</p>                	
				</div>                
            </div>

			<!-- Header image -->
            <div id="tm-fi
            
            <%- include('./partials/_footer') -%>
```
- Sonrasında bu fotoğrafları diğerlerinden ayırt edebilecek bir özellikten yararlanmak için mongodb nin otomotik olarak ürettiği id özelliğini kullandım ve bunu index.ejs dosyasında link özelliği olarak verdim.

**index.ejs dosyası**

```
<div class="col-lg-4 col-md-6 col-sm-12 tm-catalog-item">
                            <div class="position-relative tm-thumbnail-container">
                                <img src="img/tn-01.jpg" alt="Image" class="img-fluid tm-catalog-item-img">    
                                **<a href="/photos/<%=photos[i]._id %>" class="position-absolute tm-img-overlay">** özelliği burada vermiş oldum
                                    <i class="fas fa-play tm-overlay-icon"></i>
                                </a>
                            </div>    
                            <div class="p-4 tm-bg-gray tm-catalog-item-description">
                                <h3 class="tm-text-primary mb-3 tm-catalog-item-title"> <%=photos[i].title %></h3>
                                <p class="tm-catalog-item-text"> <%=photos[i].description %></p>
                            </div>
                        </div>
                        <% } %>
                    </div>
```

- Sonrasında fotoğrafa tıklandığında veritabanında bulunan id sine göre kendi tekil sayfasına yönlendirmesi için de app.js dosyasında gerekli olan kodları yazdım.

```
//unique değer olan id özelliğini yakalayıp o id ye ait fotoğraf için photo.ejs dosyasını render etme
app.get('/photos/:id', async (req, res) => {
  //fotoğrafin id sine göre listeleme
  const photo = await  Photo.findById(req.params.id)
  //Uygulamamızdaki .get metodunu düzenlersek, bu şekilde '/photo' isteğine karşılık photo.ejs dosyasını render ederiz.
  //Burada photo değişkenine gelen fotoğrafın özelliklerini photo.ejs dosyasına eklemiş oluyoruz.
  res.render('photo', {
    photo
  })
});
```

- En sonunda photo.ejs dosyasında başlığı ve açıklama kısmını bizim add.photodaki bilgileri girdiğimizde veritabanına kaydeden ve bu verileri bu sayfada gösteren gerekli kodları yazdım.

```
						<div class="col-xl-8 col-lg-7">
							<!-- Video description -->
							<div class="tm-video-description-box">
								<h2 class="mb-5 tm-video-title"><%=photo.title %></h2>
								<p class="mb-4"><%=photo.description %></p>	
							</div>							
						</div>
```

**Sonucu**

![pcatanasayfa](https://user-images.githubusercontent.com/86554799/158261231-c700c051-4fc2-4c79-a185-5eef54657327.jpg)
 
![pcatphotoejs](https://user-images.githubusercontent.com/86554799/158261255-05acccff-d60e-4bc4-8090-9782b6bd7321.jpg)

---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
## Fotoğraf Yüklemek
- Bu uygulamada Add New Photo sayfasında fotoğraf yükleme işlemini yapacağım.
- Bunun için ilk başta fotoğrafın yüklenebilmesi için express-fileupload modülünü `npm i express-fileupload` yardımıyla proje klasörüne dahil ettim.
- Dahil ettikten sonra express-fileupload modülünü app.js dosyasına dahil ettim ve middleware olarak kullanıma hazır hale getirdim.

```
const fileUpload = require('express-fileupload'); //express-fileupload ı kullanmak için app.jsdosyasına ekliyoruz.

//MIDDLEWARES
app.use(express.static('public')); //index.html,css gibi statik dosyaları ekleme
app.use(express.urlencoded({ extended: true })); //url deki datayı okumamızı sağlar
app.use(express.json()); //url deki datayı json formatına dönüştürmemizi sağlar.
app.use(fileUpload()); //fileupload modülünü middleware olrak kullandığımızı belirtiyoruz.

```
- **Not:** Görseli göndermek için formumuzda ilgili input alanının, name="image" ve type="file" olduğuna dikkat etmek gerekir. Ayrıca görsel göndermek için encType="multipart/form-data" eklememiz gerekir.

 ```
 
                        <div class="row">
                            <div class="col-lg-12 mb-5">
                                <form method="POST" action="/photos" class="tm-contact-form" enctype="multipart/form-data">
                                  <div class="form-group">
                                    <input type="text" name="title" class="form-control rounded-0" placeholder="Photo Title" required>
                                  </div>
                                  
                                  <div class="form-group">
                                    <textarea rows="8" name="description" class="form-control rounded-0" placeholder="Photo Description"
                                              required></textarea>
                                  </div>

                                  <div class="form-group">
                                    <input type="file" name="image" class="form-control-file rounded-0">
                                  </div>

                                  <div class="form-group mb-0">
                                    <button type="submit" class="btn btn-primary rounded-0 d-block ml-auto mr-0 tm-btn-animate tm-btn-submit tm-icon-submit"><span>Submit</span>				     </button>
                                  </div>
                                </form>    
                            </div>
                            
                        </div>  
                            
 ```
- Bundan sonra express-fileupload modülün de yardımıyla bundan sonra req.files.image nesnesi yardımıyla gönderilen görsel özelliklerine ulaşabilir.

- Yüklenen görselleri public klasörünün içerisindeki uploads adlı klasöre yüklemek için önce klasör var mı yok mu diye kontrol etmek ve yoksa yeni klasör oluşturması için fs modülünden yararlandım. app.js dosyasına fs modülünü çağırdıktan sonra bu kontrolü sağlaması için app.post metodu içerisine gerekli olan kodları yazdım. 

```
app.post('/photos', async (req, res) => {
 //Oluşturulmak istenen dosya
  const uploadDir = 'public/uploads';

  //eğer uploads klasörü yoksa public klasörünün içerisine oluşturma
  if (!fs.existsSync(uploadDir)) {
    fs.mkdirSync(uploadDir);
  }
```
- Sonra bu görselin kendisini ve yüklenmek istenen dosya yolunu yakalayabilmek için gerekli kodları yazdım.

```
  //yüklenecek fotoğraf ile ilgili verilerin tutulması için
  let uploadedImage = req.files.image;
  //yüklenecek fotoğrafın gösterileceği yol yani adresi/__dirname(dosyanın kendisi+'fotoğrafın bulunacağı yol'+fotoğrafın adı)
  let uploadPath = __dirname + '/public/uploads/' + uploadedImage.name;
```
- Son olarak da bu bilgileri görsele ait diğer bilgiler ile birlikte veritabanına yazdırdım ve bu yazdırdığım verileri fotoğrafın kendisine ait olan sayfaya yani photo.ejs dosyasına yönlendirme işlemini yapmış oldum.

```
//uzak sunucuda yani serverımızda başka klasöre ekleme
  uploadedImage.mv(
    uploadPath,
    //fotoğrafın bilgilerine ek olarak fotoğrafın kendisini de yüklemek için ve bu fotoğrafın yoluyla brilikte veritabanına kaydetmek için post metoduyla gönderme
    async () => {
      await Photo.create({
        ...req.body,
        image: '/uploads/' + uploadedImage.name,
      });
      res.redirect('/');
    }
  );
});
```

**Photo.ejs dosyasına yönlendirmesinin son hali**

```
app.post('/photos', async (req, res) => {
  // req.files.image ile yüklediğimiz image ile ilgili bilgiler yer alır.
  // console.log(req.files.image)

  //Oluşturulmak istenen dosya
  const uploadDir = 'public/uploads';

  //eğer uploads klasörü yoksa public klasörünün içerisine oluşturma
  if (!fs.existsSync(uploadDir)) {
    fs.mkdirSync(uploadDir);
  }

  //yüklenecek fotoğraf ile ilgili verilerin tutulması için
  let uploadedImage = req.files.image;
  //yüklenecek fotoğrafın gösterileceği yol yani adresi/__dirname(dosyanın kendisi+'fotoğrafın bulunacağı yol'+fotoğrafın adı)
  let uploadPath = __dirname + '/public/uploads/' + uploadedImage.name;

  //uzak sunucuda yani serverımızda başka klasöre ekleme
  uploadedImage.mv(
    uploadPath,
    //fotoğrafın bilgilerine ek olarak fotoğrafın kendisini de yüklemek için ve bu fotoğrafın yoluyla brilikte veritabanına kaydetmek için post metoduyla gönderme
    async () => {
      await Photo.create({
        ...req.body,
        image: '/uploads/' + uploadedImage.name,
      });
      res.redirect('/');
    }
  );
});

```

- En sonunda eklediğimiz fotoğrafı en son yüklenen tarihe göre sıralama yapması için app.js dosyasında gerekli kodu ekledim.

```
app.get('/', async (req, res) => {
  //veritabanındakifotoğrafları index.ejs dosyasında göstermek istiyoruz.
  const photos = await Photo.find({}).sort('-dateCreated');
  //Uygulamamızdaki .get metodunu düzenlersek, bu şekilde '/' isteğine karşılık index.ejs dosyasını render ederiz.
  res.render('index', {
    photos,
  });
});
```

**Sonucu**

![pcataddnewphoto](https://user-images.githubusercontent.com/86554799/158489372-4e79a883-98a5-4708-9719-0e70bb70911a.jpg)

![pcataddnewphoto2](https://user-images.githubusercontent.com/86554799/158489399-c70291bd-65b7-42f8-827a-5ef599181959.jpg)

![pcatmongo](https://user-images.githubusercontent.com/86554799/158489541-f3c3cd94-69fe-46a2-b282-e689eddab967.jpg)

![pcathomepage](https://user-images.githubusercontent.com/86554799/158489465-4865c376-c547-479b-9130-9440e2389c08.jpg)

![pcatphotoejs2](https://user-images.githubusercontent.com/86554799/158489584-05719547-fb1c-428a-a65b-5dacf35dda1f.jpg)

# Fotoğraf Bilgilerini Güncellemek
- Bu uygulamada yüklenilen fotoğraflara ait bilgilerini güncelleme işlemini yapacağım. Yani Update Details butonuna tıklandığında bir GET reguest sonucunda edit sayfası açılacak bu sayfada bulunan formda formlara ait olan önceki bilgiler bulunacak, bilgilerde bir değişiklik yapıldığının sonrasında POST request yardımıyla güncellenmiş bilgilerle tekil fotoğraf sayfasına yönelecek

- Update butonuna tıklanıldığı zaman açılacak edit.ejs template'i add.ejs den faydalanarak oluşturdu . Güncellenecek Fotoğraf bilgisine ait olan _id yi de photo.ejs deki Update Details linkine href="/photos/edit/<%= post._id %>" de yakalıyoruz. İlgili yönlendirme de aşağıdaki gibi olacaktır.

```
//get request ile edi.ejs sayfasına yani fotoğraf bilgileri güncelleme sayfasına yönlendrme
app.get('/photos/edit/:id', async (req, res) => {
  const photo = await Photo.findOne({ _id: req.params.id });
  //Uygulamamızdaki .get metodunu düzenlersek, bu şekilde '/photos/edit/:id isteğine karşılık edit.ejs dosyasını render ederiz.
  res.render('edit', {
    photo,
  });
});
```

- Edit template sayfasına ulaşıldığında ise ilgili photo bilgisinin hali hazırda görünmesini istedim. Bunun için form alanlarındaki value değerlerini görmek gerekir. Bunun için aşağıdaki kodları  edit template içerisindeki ilgili form alanlarına yazdım.

```
<%= photo.title %>
<%= photo.description %>
```

- Böylelikle "GET" request aşaması tamamlanmış oldu. Şimdi ise yapılması gereken değişen bu bilgileri "POST" request ile göndermek ancak değişen bilgileri göndermek için ben http PUT request kullandım. Tarayıcılar bu PUT requesti desteklemedikleri için yapılması gereken PUT requesti tarayıcının anlayacağı POST request şeklinde simüle etmek. Bunun için ise method-override modülünü kullandım.

`npm i method-override`

- Bu metodu çağırdım ve middleware olarak kayıt ettim.

`const methodOverride = require('method-override');` //çağırma

`app.use(methodOverride('_method'));`  //midleware

- edit template içerisindeki formumda POST requesti PUT requeste dönüştürmek için aşağıdaki düzenlemeyi yaptım.

`form method="POST" action="/photos/<%= photo._id %>?_method=PUT"`

En sonunda app.js içerisindeki bu PUT request yönlendirmesini yaptım.

```
//put requesti ile fotoğraf verilerini güncelleme
app.put('/photos/:id', async (req, res) => {
  const photo = await Photo.findOne({ _id: req.params.id });
  photo.title = req.body.title;
  photo.description = req.body.description;
  photo.save();

  res.redirect(`/photos/${req.params.id}`)
});
```

**Sonuç**

![pcat](C:\Users\birca\OneDrive\Resimler\Masaüstü\node.js\PCAT\pcat.gif)
