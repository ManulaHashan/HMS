
function closeAlert() {
  var overlay = document.getElementById('overlay');
  overlay.style.display = 'none';
}

// Close the alert after 0.5 seconds
setTimeout(closeAlert, 500);


function searchClicked() {
  var card = document.querySelector(".card");
  // Add blinking animation to the card
  card.classList.add("blink-animation");
  
  // Change background color
  document.body.style.backgroundColor = '#dbd7d7';

  // After 5 seconds, remove blinking animation and reset background color
  setTimeout(function() {
      card.classList.remove("blink-animation");
      document.body.style.backgroundColor = '#62a9f5'; // Reset to default color
  }, 1000);
}

function reset() {
  
  // Change background color
  document.body.style.backgroundColor = '';
}


// function changeBackgroundColorDelete() {
//   // Set color
//   document.body.style.backgroundColor = '#Ee547b';

//   // Change back to default color after applyed second
//   setTimeout(function() {
//       document.body.style.backgroundColor = ''; // or you can set it to the default color explicitly
//   }, 400);
// }



function deleteRecord() {
  // Change background color to light red
  document.body.style.backgroundColor = 'red';

  // Show alert
  var alertContainer = document.querySelector('.alert-container');
  var alertMessage = document.querySelector('#alertMessage');
  alertMessage.textContent = "Record deleted!!!";
  alertContainer.style.display = 'block';

  // Change back to default color after 1 second
  setTimeout(function() {
      document.body.style.backgroundColor = ''; // Reset to default color
  }, 1000);

  // Disappear alert after 2 seconds
  setTimeout(function() {
      alertContainer.style.display = 'none'; // Hide the alert container
  }, 1000);
}

