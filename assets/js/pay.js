function sendMessage() {
  const num = document.getElementById('ii').value // Replace with the recipient's phone number
  let tid = document.getElementById('transaction_id').value
  var url = "https://wa.me/" + "+919319641143" + "?text=" + "*Transition ID:* " + tid + "%0a" + "Please note that after clicking the ‘Confirm’ button, a message will be sent to the doctor via WhatsApp to confirm their booking.";
  window.open(url);
}