function changeBackground() {
  document.body.style.backgroundColor = "#e0f7fa";
}

function validateForm() {
  const name = document.getElementById("name").value;
  if (name.trim() === "") {
    alert("Please enter your name.");
    return false;
  }
  alert("Form submitted successfully!");
  return true;
}

// Set static custom message instead of API fetch
document.getElementById('api-data').innerText = "API Title: Welcome to My Custom Web App!";
