const qrcodeContainer = document.querySelector(".qrcodeContainer");
const containerSize = document.querySelector("#sizeSelect");
const generateButton = document.querySelector("#generate");
const downloadButton = document.querySelector("#download");
const inputBox = document.querySelector(".inputBox");

function generateQRCode(url, value) {
  qrcodeContainer.innerHTML = "";
  qrcodeContainer.style.height = value;
  qrcodeContainer.style.width = value;

  new QRCode(qrcodeContainer, {
    text: url,
    width: value,
    height: value,
    colorDark: "#000000",
    colorLight: "#ffffff",
    correctLevel: QRCode.CorrectLevel.H,
  });

  qrcodeContainer.appendChild(
    document.createTextNode(`URL: ${inputBox.value}`)
  );
}

function downloadAsJPG() {
  html2canvas(qrcodeContainer).then((canvas) => {
    const link = document.createElement("a");
    link.href = canvas.toDataURL("image/jpeg");
    link.download = "qrcodeContainer.jpg";
    link.click();
  });
}

generateButton.addEventListener("click", (e) => {
  generateQRCode(inputBox.value, containerSize.value);
});

downloadButton.addEventListener("click", (e) => {
  downloadAsJPG();
});
