new QRCode(document.getElementById('qrcode'), {
    text: window.location.href,
    width: 128,
    height: 128,
    correctLevel: QRCode.CorrectLevel.H
})