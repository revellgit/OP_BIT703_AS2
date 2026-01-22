// JavaScript validation used to control navigation in multi-step checkout

document.getElementById("next-btn").addEventListener("click", function (e) {
  const form = document.querySelector(".shipping-form");
  const errorBox = document.getElementById("form-error");

  // clear previous error message text content
  errorBox.textContent = "";

  // Reset custom validity messages first 
  // (allow new inputs after errors)
  const inputs = form.querySelectorAll("input");
  inputs.forEach(input => input.setCustomValidity(""));

  // HTML5 validation check first
  if (!form.checkValidity()) {
    e.preventDefault();
    // Scroll the page upward to show the errors
    errorBox.scrollIntoView({ behavior: "smooth", block: "start" });

    // focus first invalid field
    const firstInvalid = form.querySelector(":invalid");
    if (firstInvalid) {
      firstInvalid.focus();
    }

    // Custom red error message per field
    // combines browser messages and custom red warning text.
    if (firstInvalid.id === "fname") {
      errorBox.textContent = "First Name is required.";
      firstInvalid.setCustomValidity("First Name is required."); // browser tooltip
    } else if (firstInvalid.id === "postcode") {
      errorBox.textContent = "Postcode must be up to 4 digits.";
      firstInvalid.setCustomValidity("Postcode must be 4 digits.");
    } else {
      errorBox.textContent = "Please fill in all required fields.";
    }

    form.reportValidity(); // show browser messages
    return;
  }

  // Example of JS for cross-field validation after HTML5 checks pass
  // enforces a 4 digit postcode when the country is 'NZ' or 'New Zealand'
  // a custom error message displays if this combination of rules are not met.
  const postcodeVal = document.getElementById("postcode").value.trim();
  const postcodeInp = document.getElementById("postcode");
  const country = document.getElementById("country").value.trim().toLowerCase();

  if (
    (country === "nz" || country === "new zealand") &&
    !/^\d{4}$/.test(postcodeVal)
  ) {
    e.preventDefault();
    errorBox.scrollIntoView({ behavior: "smooth", block: "start" });
    postcodeInp.focus();
    errorBox.textContent = "New Zealand postcodes must be 4 digits.";
    return;
  }

  // if inputs are valid link proceeds
});
