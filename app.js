const express = require('express'); //express i app.js sayfasına dahil etme
const mongoose = require('mongoose'); //mongoose u kullanmak için app.js dosyasına ekliyoruz.
const fileUpload = require('express-fileupload'); //express-fileupload ı kullanmak için app.jsdosyasına ekliyoruz.
const methodOverride = require('method-override'); //put ve delete metodunu post metodu gibi işlev görmesi için app.js dosyasında çağırma
const ejs = require('ejs'); //ejs template şablonunu kullanmak için ejs modülünü app.js sayfasına dahil etme
const photoController = require('./controllers/photoController'); //fotoğraf modeliyle ilişkili olan yönlendirmeler için photocontroller dosyasını çağırma
const pageController = require('./controllers/pageController'); //add, about gibi diğer sayfalara yönlendirme için pageController dosyasını çağırma

const app = express();

//Connect db-mongoose.connect('veritabanı://localbağlantı(bağlanacağın yer)/veritabanıadı')
mongoose.connect('mongodb://localhost/pcat-test-db', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

/*EJS modülü template dosyaları görebilmek için varsayılan olarak views klasörünün içerisindeki .ejs uzantılı 
dosyalara bakar. Bu ne denle temp dosyamızın ismini views olarak değiştiriyoruz. Videws klasörü içerisindeki tüm .html
uzantılarını .ejs olarak değiştiriyoruz.  */

//TEMPLATE ENGINE
app.set('view engine', 'ejs'); //ejs yi kullanacağımızı gösteriyoruz.

//MIDDLEWARES
app.use(express.static('public')); //index.html,css gibi statik dosyaları ekleme
app.use(express.urlencoded({ extended: true })); //url deki datayı okumamızı sağlar
app.use(express.json()); //url deki datayı json formatına dönüştürmemizi sağlar.
app.use(fileUpload()); //fileupload modülünü middleware olrak kullandığımızı belirtiyoruz.
app.use(methodOverride('_method')); //burada Put yani güncelleme işlemini Post olarak simüle etme
app.use(
  methodOverride('_method', {
    methods: ['POST', 'GET'],
  })
); //burada delete yani silme işlemi için post olarak simüle etme ve get isteği yapma

//ROUTES
app.get('/', photoController.getAllPhotos); //Bütün fotoğraflar
app.get('/photos/:id', photoController.getPhoto); //tek bir fotoğrafı göstermek için
app.post('/photos', photoController.createPhoto); //yeni bir fotoğraf ekleme
app.put('/photos/:id', photoController.updatePhoto); //put requesti ile fotoğraf verilerini güncelleme
app.delete('/photos/:id', photoController.deletePhoto); //delete requesti ile fotoğrafı silme

app.get('/about', pageController.getAboutPage); //about sayfasına yönlendirme
app.get('/add', pageController.getAddPage); //add sayfasına yönlendirme
app.get('/photos/edit/:id', pageController.getEditPage); //get request ile edi.ejs sayfasına yani fotoğraf bilgileri güncelleme sayfasına yönlendirme

const port = 3000;
app.listen(port, () => {
  console.log(`Sunucu ${port} numaralı portta başlatıldı...`);
});
