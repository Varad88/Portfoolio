const name = document.getElementById('name')
const gender = document.getElementsByName('gender:checked[]')
const email = document.getElementById('email')

function b() {
  if (name.value.trim() == "" || gender.value == "" || email.value.trim() == "") {
    alert("Please Fill All Fields")
  }
  else if (!email.value.includes('@gmail.com')) {
    alert("Invalid and Email only contain gmail.com")
  }
  else {
    document.getElementById('ff').style.display = 'none';
    document.getElementById('fg').style.display = 'block';
  }
}

function sendMessage() {
  let tid = document.getElementById('transaction_id')
  var url = "https://wa.me/+919319641143?text=" +
    "*Name:* " + name.value + "%0a" +
    "*Email:* " + email.value + "%0a" +
    "*Gender:* " + gender.value + "%0a" +
    "*Transition ID:* " + tid.value + "%0a" +
    "Please note that after clicking the ‘Confirm’ button, a message will be sent to the doctor via WhatsApp to confirm their booking.";
  window.open(url);
}