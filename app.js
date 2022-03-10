const express = require('express'); //express i app.js sayfasına dahil etme
const path = require('path'); //statik dosyaları response olarak döndürmek için path modülünü app.js sayfasına dahil etme
const ejs = require('ejs'); //ejs tempalte şablonunu kullanmak için ejs modülünü app.js sayfasına dahil etme

const app = express();

/*EJS modülü template dosyaları görebilmek için varsayılan olarak views klasörünün içerisindeki .ejs uzantılı dosyalara bakar. Bu ne denle temp dosyamızın ismini views olarak değiştiriyoruz. Videws klasörü içerisindeki tüm .html uzantılarını .ejs olarak değiştiriyoruz.  */

//TEMPLATE ENGINE
app.set('view engine', 'ejs'); //ejs yi kullanacağımızı gösteriyoruz.

//MIDDLEWARES
app.use(express.static('public')); //index.html,css gibi statik dosyaları ekleme

//ROUTES
app.get('/', (req, res) => {
  //Uygulamamızdaki .get metodunu düzenlersek, bu şekilde '/' isteğine karşılık index.ejs dosyasını render ederiz.
  res.render('index');
});

app.get('/about', (req, res) => {
  //Uygulamamızdaki .get metodunu düzenlersek, bu şekilde '/' isteğine karşılık index.ejs dosyasını render ederiz.
  res.render('about');
});
app.get('/add', (req, res) => {
  //Uygulamamızdaki .get metodunu düzenlersek, bu şekilde '/' isteğine karşılık index.ejs dosyasını render ederiz.
  res.render('add');
});

const port = 3000;
app.listen(port, () => {
  console.log(`Sunucu ${port} numaralı portta başlatıldı...`);
});
