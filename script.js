let input = document.getElementById('input');
let imgBox = document.querySelector('.imgBox');
let imgQr = document.getElementById('imgQrcode');
const button = document.getElementById('generate');
const load = document.querySelector('.loader');

button.addEventListener('click', () => {
    load.style.display = "block"; // Show the loading spinner
    imgQr.style.display = "none"; // Hide the QR code initially

    // Set the QR code URL
    const qrCodeUrl = "https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=" + input.value;
    
    // Set the image source to trigger the loading of the QR code
    imgQr.src = qrCodeUrl;

    // When the QR code image has finished loading, hide the loading spinner and show the image
    setTimeout(() => {
        load.style.display = "none"; // Hide the loading spinner
        imgQr.style.display = "block"; 
    }, 2000);
});
