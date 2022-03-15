const express = require('express'); //express i app.js sayfasına dahil etme

const mongoose = require('mongoose'); //mongoose u kullanmak için app.js dosyasına ekliyoruz.

const fileUpload = require('express-fileupload'); //express-fileupload ı kullanmak için app.jsdosyasına ekliyoruz.

const ejs = require('ejs'); //ejs template şablonunu kullanmak için ejs modülünü app.js sayfasına dahil etme

const fs = require('fs'); //dosya işlemleri için(dosya oluşturmaisilmeiokuma, vb) fs modülünü app.js dosyasına ekleme

const Photo = require('./models/Photo'); //modelimizi app.js dosyasına dahil etme

const app = express();

//Connect db-mongoose.connect('veritabanı://localbağlantı(bağlanacağın yer)/veritabanıadı')
mongoose.connect('mongodb://localhost/pcat-test-db', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

/*EJS modülü template dosyaları görebilmek için varsayılan olarak views klasörünün içerisindeki .ejs uzantılı dosyalara bakar. Bu ne denle temp dosyamızın ismini views olarak değiştiriyoruz. Videws klasörü içerisindeki tüm .html uzantılarını .ejs olarak değiştiriyoruz.  */

//TEMPLATE ENGINE
app.set('view engine', 'ejs'); //ejs yi kullanacağımızı gösteriyoruz.

//MIDDLEWARES
app.use(express.static('public')); //index.html,css gibi statik dosyaları ekleme
app.use(express.urlencoded({ extended: true })); //url deki datayı okumamızı sağlar
app.use(express.json()); //url deki datayı json formatına dönüştürmemizi sağlar.
app.use(fileUpload()); //fileupload modülünü middleware olrak kullandığımızı belirtiyoruz.

//ROUTES
app.get('/', async (req, res) => {
  //veritabanındakifotoğrafları index.ejs dosyasında göstermek istiyoruz.
  const photos = await Photo.find({});
  //Uygulamamızdaki .get metodunu düzenlersek, bu şekilde '/' isteğine karşılık index.ejs dosyasını render ederiz.
  res.render('index', {
    photos,
  });
});

//unique değer olan id özelliğini yakalayıp o id ye ait fotoğraf için photo.ejs dosyasını render etme
app.get('/photos/:id', async (req, res) => {
  //fotoğrafin id sine göre listeleme
  const photo = await Photo.findById(req.params.id);
  //Uygulamamızdaki .get metodunu düzenlersek, bu şekilde '/photo' isteğine karşılık photo.ejs dosyasını render ederiz.
  //Burada photo değişkenine gelen fotoğrafın özelliklerini photo.ejs dosyasına eklemiş oluyoruz.
  res.render('photo', {
    photo,
  });
});

app.get('/about', (req, res) => {
  //Uygulamamızdaki .get metodunu düzenlersek, bu şekilde '/about' isteğine karşılık about.ejs dosyasını render ederiz.
  res.render('about');
});
app.get('/add', (req, res) => {
  //Uygulamamızdaki .get metodunu düzenlersek, bu şekilde '/'add isteğine karşılık add.ejs dosyasını render ederiz.
  res.render('add');
});

app.post('/photos', async (req, res) => {
  // req.files.image ile yüklediğimiz image ile ilgili bilgiler yer alır.
  // console.log(req.files.image)

  //Uygulamamızdaki .post metodunu düzenlersek, add.ejs de formda grirlen bilgileri tutar ve '/' dosyasına yani index.ejs dosyasına yönlendirme yapar.
  // await Photo.create(req.body);
  // res.redirect('/');

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

const port = 3000;
app.listen(port, () => {
  console.log(`Sunucu ${port} numaralı portta başlatıldı...`);
});
