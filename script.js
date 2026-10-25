const form = document.getElementById("formEl");

form.addEventListener("submit", (e) => {
  e.preventDefault();
  const fullName = document.getElementById("fullName").value;
  const email = document.getElementById("email").value;
  const subject = document.getElementById("subject").value;
  const message = document.getElementById("message").value;

  if (
    fullName.trim() === "" ||
    email.trim() === "" ||
    subject.trim() === "" ||
    message.trim() === ""
  ) {
    alert("Fields should not be empty!");
    return;
  }

  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  if (!emailPattern.test(email)) {
    alert("Please enter a valid email address");
    return;
  }

  alert("Your form has been submitted succesfully!");
});
