// Sambutan otomatis di homepage
let userName = prompt("Masukkan nama Anda:");
if (userName) {
  document.getElementById("welcome").innerText = `Hi ${userName}, Welcome To Website`;
} else {
  document.getElementById("welcome").innerText = "Hi, Welcome To Website";
}

// Form Validation & Output
const form = document.getElementById("messageForm");
const output = document.getElementById("output");

form.addEventListener("submit", function(e) {
  e.preventDefault();

  const name = document.getElementById("name").value;
  const birthdate = document.getElementById("birthdate").value;
  const gender = document.querySelector('input[name="gender"]:checked').value;
  const message = document.getElementById("messageInput").value;

  output.innerHTML = `
    <p><strong>Current time:</strong> ${new Date().toString()}</p>
    <p><strong>Nama:</strong> ${name}</p>
    <p><strong>Tanggal Lahir:</strong> ${birthdate}</p>
    <p><strong>Jenis Kelamin:</strong> ${gender}</p>
    <p><strong>Pesan:</strong> ${message}</p>
  `;

  form.reset();
});

// Smooth Scroll untuk navbar
document.querySelectorAll('.navbar a').forEach(anchor => {
  anchor.addEventListener('click', function(e) {
    if (this.getAttribute('href').startsWith("#")) {
      e.preventDefault();
      document.querySelector(this.getAttribute('href')).scrollIntoView({
        behavior: 'smooth'
      });
    }
  });
});
