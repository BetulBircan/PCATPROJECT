//mongoose u kullanmak için Photo.js dosyasına ekliyoruz.
const mongoose = require('mongoose');
//Schema oluşturma
const Schema = mongoose.Schema;

//Create Schema-Kullanacağımız fotoğraf verisine ait şablon oluşturuyoruz.
const PhotoScheama = new Schema({
  title: String,
  description: String,
  image: String,
  dateCreated: {
    type: Date,
    default: Date.now,
  },
});

//Create Model-Veritabanınımızdaki collection ve dökümanımızı oluşturur.
const Photo = mongoose.model('Photo', PhotoScheama);

module.exports = Photo;
