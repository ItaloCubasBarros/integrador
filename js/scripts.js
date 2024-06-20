
function sendMessage() {
    const message = document.getElementById('message').value;
    const phoneNumber = '556592428441'; // Substitua pelo número de WhatsApp desejado
    const url = `https://api.whatsapp.com/send?phone=${phoneNumber}&text=${encodeURIComponent(message)}`;
    window.open(url, '_blank');
}
