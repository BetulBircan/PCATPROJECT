//Fotoğraf ile ilgili gelen isteklere karşı yönlendirmeler burada yapılır.

const Photo = require('../models/Photo'); //model dosyası içerisinde photo modelini çağırma
const fs = require('fs'); //fs modülüni çağırma

//Bütün Fotoğraflar burada listelenir.
exports.getAllPhotos = async (req, res) => {
  //veritabanındakifotoğrafları index.ejs dosyasında göstermek istiyoruz.
  const photos = await Photo.find({}).sort('-dateCreated');
  //Uygulamamızdaki .get metodunu düzenlersek, bu şekilde '/' isteğine karşılık index.ejs dosyasını render ederiz.
  res.render('index', {
    photos,
  });
};

//Tek bir fotoğrafı getirme işlemi burada yapılır. unique değer olan id özelliğini yakalayıp o id ye ait fotoğraf için photo.ejs dosyasını render etme
exports.getPhoto = async (req, res) => {
  //fotoğrafin id sine göre listeleme
  const photo = await Photo.findById(req.params.id);
  //Uygulamamızdaki .get metodunu düzenlersek, bu şekilde '/photo' isteğine karşılık photo.ejs dosyasını render ederiz.
  //Burada photo değişkenine gelen fotoğrafın özelliklerini photo.ejs dosyasına eklemiş oluyoruz.
  res.render('photo', {
    photo,
  });
};

//Yeni bir fotoğraf ekleme işlemi burada yapılır.
exports.createPhoto = async (req, res) => {
  // req.files.image ile yüklediğimiz image ile ilgili bilgiler yer alır.
  // console.log(req.file ns.image)

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
};

//Fotoğraf güncelleme işlemi burada yapılır.
exports.updatePhoto = async (req, res) => {
  const photo = await Photo.findOne({ _id: req.params.id });
  photo.title = req.body.title;
  photo.description = req.body.description;
  photo.save();

  res.redirect(`/photos/${req.params.id}`);
};

//Fotoğraf silme işlemi burada yapılır.
exports.deletePhoto = async (req, res) => {
  const photo = await Photo.findOne({ _id: req.params.id });
  let deletedImage = __dirname + '/public' + photo.image;
  fs.unlinkSync(deletedImage);
  await Photo.findByIdAndRemove(req.params.id);
  res.redirect('/');
};
