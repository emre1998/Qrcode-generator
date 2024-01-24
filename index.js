function handleSubmit(event) {
    event.preventDefault();
    let text = document.getElementById("inptxt").value;

    if(!isValidText(text)) {
        showAlert("Lütfen geçerli bir url giriniz");
        return;
    }
    let qrsrc = `http://api.qrserver.com/v1/create-qr-code/?data=${text}`;
    let qrimg = document.getElementById("qrimg");
    qrimg.src = qrsrc;

    function isValidText(text) {
        try {
            new URL(text);
            return true;
        } catch (error) {
            return false;
        }
    }

    function showAlert(message) {
        alert(message);
    }
}
