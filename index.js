const express = require('express');
const app = express();
const bodyParser = require('body-parser');

app.use(bodyParser.urlencoded({ extended: false }))


app.get('/siswa', (req,res) => {
    res.end('menampilkan siswa');
})

app.get('/siswa/:nama', (request,response) =>{
    // Proses dengan siswa bernama X
    let namaSiswa = request.params.nama;
    
    response.end("Menampilkan siswa dengan nama : " +namaSiswa);
})

app.post('/siswa',(request,response)=>{
    let namaSiswa = request.body.nama;
    let alamatSiswa = request.body.alamat;

    response.end("Siswa Baru! nama : " +namaSiswa + ", Alamat : " +alamatSiswa);
})

app.delete('/siswa/:nama' , (request,response)=>{
    let namaSiswa = request.params.nama;

    response.end("Siswa bernama " +namaSiswa + " akan dihapus dari sistem!");
})

app.put('/siswa/:id', (request,response)=>{
    let id = request.params.id;
    let namaSiswa = request.body.nama;
    let alamatSiswa = request.body.alamat;

    response.end("Siswa dengan ID " +id+" telah terupdate");
})

app.listen('8080')