const express = require('express');

const path = require('path');

const app = express();

//MIDDLEWARES
app.use(express.static('public'));  //index.html,css gibi statik dosyaları ekleme

app.get('/', (req, res) => {
  //template klasöründeki index.html dosyasını resolve olarak döndürme
  res.sendFile(path.resolve(__dirname, 'template/index.html'));
});

const port = 3000;
app.listen(port, () => {
  console.log(`Sunucu ${port} numaralı portta başlatıldı...`);
});
