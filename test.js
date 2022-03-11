//mongoose u kullanmak için test.js dosyasına ekliyoruz.
const mongoose = require('mongoose');
//Schema oluşturma
const Schema = mongoose.Schema;

//Connect db-mongoose.connect('veritabanı://localbağlantı(bağlanacağın yer)/veritabanıadı')
mongoose.connect('mongodb://localhost/pcat-test-db', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

//Create Schema-Kullanacağımız fotoğraf verisine ait şablon oluşturuyoruz.
const PhotoScheama = new Schema({
  title: String,
  description: String,
});

//Create Model-Veritabanınımızdaki collection ve dökümanımızı oluşturur.
const Photo = mongoose.model('Photo', PhotoScheama);

//Create a photo's data

/* Photo.create({
  title: 'Photo 2',
  description: 'Photo Description 2 Lorem Ipsum',
});
 */

//read a photo's data
/* Photo.find({}, (err, data) => {
  console.log(data);
}); */

//update a photo's data

/* const id = '622b804b8ce4237107e6f9cb';

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
); */

//delete a photo's data

const id = '622b83b50dcf4eebca651ea1';

Photo.findByIdAndDelete(id, (err, data) => {
  console.log('Photo is Removed...');
});
