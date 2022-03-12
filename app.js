const express = require('express'); //express i app.js sayfasına dahil etme

const ejs = require('ejs'); //ejs tempalte şablonunu kullanmak için ejs modülünü app.js sayfasına dahil etme

const app = express();

/*EJS modülü template dosyaları görebilmek için varsayılan olarak views klasörünün içerisindeki .ejs uzantılı dosyalara bakar. Bu ne denle temp dosyamızın ismini views olarak değiştiriyoruz. Videws klasörü içerisindeki tüm .html uzantılarını .ejs olarak değiştiriyoruz.  */

//TEMPLATE ENGINE
app.set('view engine', 'ejs'); //ejs yi kullanacağımızı gösteriyoruz.

//MIDDLEWARES
app.use(express.static('public')); //index.html,css gibi statik dosyaları ekleme
app.use(express.urlencoded({extended:true})) //url deki datayı okumamızı sağlar
app.use(express.json()) //url deki datayı json formatına dönüştürmemizi sağlar.
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

app.post('/photos', (req, res) => {
  //Uygulamamızdaki .get metodunu düzenlersek, bu şekilde '/' isteğine karşılık index.ejs dosyasını render ederiz.
  console.log(req.body)
  res.redirect('/')
});

const port = 3000;
app.listen(port, () => {
  console.log(`Sunucu ${port} numaralı portta başlatıldı...`);
});
