var names = document.getElementById("signInName");
var email = document.getElementById("signInEmail");
var password = document.getElementById("signInPassword");

var about = [];
if (localStorage.getItem("user") != null) {
  about = JSON.parse(localStorage.getItem("user"));
} else {
  about = [];
}

var regex = {
  regexSignInName: /^[a-z0-9_-]{3,15}$/,
  regexSignInEmail: /[^@ \t\r\n]+@[^@ \t\r\n]+\.[^@ \t\r\n]+/,
  regexSignInPassword:
    /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$/
};

function signIn() {
  var isNameValid = validateForm(names);
  var isEmailValid = validateForm(email);
  var isPasswordValid = validateForm(password);

  if (isNameValid && isEmailValid && isPasswordValid) {
    var req = document.getElementById("req");
    req.innerHTML = "";

    if (names.value === "" || email.value === "" || password.value === "") {
      req.innerHTML = `<p class="text-danger m-3 text-center">All inputs are required</p>`;
    } else {
      var info = {
        name: names.value,
        email: email.value,
        password: password.value
      };
      about.push(info);
      localStorage.setItem("user", JSON.stringify(about));
      location.href = "login.html";
    }
  } else {
    console.log("Validation failed");
  }
}

function validateForm(element) {
  var regexPattern =
    regex[`regex${element.id.charAt(0).toUpperCase() + element.id.slice(1)}`];

  if (regexPattern && regexPattern.test(element.value)) {
    element.classList.remove("is-invalid");
    element.classList.add("is-valid");
    element.nextElementSibling?.classList.add("d-none");
    return true;
  } else {
    element.classList.add("is-invalid");
    element.classList.remove("is-valid");
    element.nextElementSibling?.classList.remove("d-none");
    return false;
  }
}
