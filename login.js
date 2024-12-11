var about = [];
about = JSON.parse(localStorage.getItem("user")) || [];

var signEmail = document.getElementById("loginEmail");
var signPw = document.getElementById("loginPassword");

document.getElementById("login").addEventListener("click", () => {
  var requiredInput = document.getElementById("req");
  if (signEmail.value == "" || signPw.value == "") {
    requiredInput.innerHTML =
      '<p class="text-danger m-3 text-center">All input is required</p>';
  } else {
    validate();
  }
});

function validate() {
  var isValid = false;
  for (let i = 0; i < about.length; i++) {
    if (
      signEmail.value == about[i].email &&
      signPw.value == about[i].password
    ) {
      var nameOfUser = about[i].name;
      localStorage.setItem("userName", nameOfUser);
      location.href = "home.html";
      isValid = true;
      break;
    }
  }

  if (!isValid) {
    var requiredInput = document.getElementById("req");
    requiredInput.innerHTML =
      '<p class="text-danger m-3 text-center">Invalid email or password</p>';
  }
}

console.log(about);
