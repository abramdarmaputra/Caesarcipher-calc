function encrypt() {
  var message = document.getElementById("message").value;
  var shift = parseInt(document.getElementById("shift").value);

  var encryptedMessage = "";

  for (var i = 0; i < message.length; i++) {
    var charCode = message.charCodeAt(i);

    if (charCode >= 65 && charCode <= 90) {
      // Uppercase letters
      encryptedMessage += String.fromCharCode(((charCode - 65 + shift) % 26) + 65);
    } else if (charCode >= 97 && charCode <= 122) {
      // Lowercase letters
      encryptedMessage += String.fromCharCode(((charCode - 97 + shift) % 26) + 97);
    } else {
      encryptedMessage += message[i];
    }
  }

  document.getElementById("result").value = encryptedMessage;
}

function decrypt() {
  var message = document.getElementById("message").value;
  var shift = parseInt(document.getElementById("shift").value);

  var decryptedMessage = "";

  for (var i = 0; i < message.length; i++) {
    var charCode = message.charCodeAt(i);

    if (charCode >= 65 && charCode <= 90) {
      // Uppercase letters
      decryptedMessage += String.fromCharCode(((charCode - 65 - shift + 26) % 26) + 65);
    } else if (charCode >= 97 && charCode <= 122) {
      // Lowercase letters
      decryptedMessage += String.fromCharCode(((charCode - 97 - shift + 26) % 26) + 97);
    } else {
      decryptedMessage += message[i];
    }
  }

  document.getElementById("result").value = decryptedMessage;
}
