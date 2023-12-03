const username = document.querySelector("#username");
const password = document.querySelector("#password");

const admins = {
  admin: "admin",
};

document.querySelector("form").addEventListener("submit", (e) => {
  e.preventDefault();

  const usernameValue = username.value;
  const passwordValue = password.value;

  if (admins[usernameValue] === passwordValue) {
    window.location.href = "./pages/dashboard.html";
  } else {
    alert("Wrong username or password");
  }
});
