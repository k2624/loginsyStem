var userNameElement = document.getElementById("span");
var span = localStorage.getItem("userName");

if (span) {
  userNameElement.textContent = span;
} else {
  userNameElement.textContent = "Guest";
}
document.getElementById("logOut").addEventListener("click", () => {
  localStorage.removeItem("userName");
  location.href = "index.html";
});
