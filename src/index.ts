const QRCode = require("qrcode");

const contenido = "https://www.facebook.com/61568505023231";

QRCode.toFile(
	"./out-qr/qrcode.png",
	contenido,
	{
		color: {
			dark: "#FFFFFF", // QR code color
			light: "#000000", // Background color
		},
		width: 1000, // Increase the size of the QR code
		version: 5, // Increase the version of the QR code
	},
	(err: Error) => {
		if (err) throw err;
		console.log("The Qr code saved in output folder!");
	},
);
