const QRCode = require('qrcode');

const contenido = '';

QRCode.toFile('./out-qr/qrcode.png', contenido, function (err : any) {
    if (err) throw err
    console.log('The Qr code saved in output folder!');
});