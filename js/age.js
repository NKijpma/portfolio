const DOB = new Date("05/07/2008");
const age = document.getElementById("age");

age.textContent =`${new Date().getFullYear() - DOB.getFullYear()}`;