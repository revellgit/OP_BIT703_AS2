// JavaScript validation used to control navigation in multi-step checkout

document.getElementById("next-btn").addEventListener("click", function (e) {
  const first = document.getElementById("fname").value.trim();
  
  const postcode = document.getElementById("postcode").value.trim();
  const errorBox = document.getElementById("form-error");

  // clear previous
  errorBox.textContent = "";

  // Check HTML5 validation first
  if (!form.checkValidity()) {
    e.preventDefault();
    errorBox.textContent = "Please fill in all required fields correctly.";
    return;
  }

  // required
  if (!first || !postcode) {
    e.preventDefault();
    errorBox.textContent = "Please fill in all required fields.";
    return;
  }  

  // NZ 4-digit postcode
  if (!/^\d{4}$/.test(postcode)) {
    e.preventDefault();
    errorBox.textContent = "Postcode must be 4 digits.";
    return;
  }

  // link proceeds to payment.html
});
