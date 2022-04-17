//About, Add Photo ve Fotoğraf güncellemesi için oluşturulan edit.ejs sayfalarına yönlendirme işlemleri burada yapılır.

const Photo = require('../models/Photo'); //model dosyası içerisinde photo modelini çağırma

//About yani hakkımızda sayfasına yönlendirmeyle ilgili işlemler burada yapılır.
exports.getAboutPage = (req, res) => {
  //Uygulamamızdaki .get metodunu düzenlersek, bu şekilde '/about' isteğine karşılık about.ejs dosyasını render ederiz.
  res.render('about');
};

//Add yani fotoğraf ekleme sayfasına yönlendirmeyle ilgili işlemler burada yapılır.
exports.getAddPage = (req, res) => {
  //Uygulamamızdaki .get metodunu düzenlersek, bu şekilde '/'add isteğine karşılık add.ejs dosyasını render ederiz.
  res.render('add');
};

//Fotoğraf güncellemesi için oluşturulan edit.ejs dosyasına yönledirme işlemleri burada yapılır.
exports.getEditPage = async (req, res) => {
  const photo = await Photo.findOne({ _id: req.params.id });
  //Uygulamamızdaki .get metodunu düzenlersek, bu şekilde '/photos/edit/:id isteğine karşılık edit.ejs dosyasını render ederiz.
  res.render('edit', {
    photo,
  });
};
