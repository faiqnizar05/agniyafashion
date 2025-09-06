// 🔎 Fungsi pencarian
document.getElementById("search").addEventListener("keyup", function () {
  let filter = this.value.toLowerCase();
  let links = document.querySelectorAll(".link-card");

  links.forEach(link => {
    let text = link.innerText.toLowerCase();
    link.style.display = text.includes(filter) ? "flex" : "none";
  });
});

// 📊 Modal & Iframe
const iframe = document.getElementById("spreadsheetFrame");
const links = document.querySelectorAll(".link-card");
const modal = document.getElementById("modal");
const openHereBtn = document.getElementById("openHere");
const openOutsideBtn = document.getElementById("openOutside");
const closeModalBtn = document.getElementById("closeModal");

let currentLink = null;

// Klik link → buka modal
links.forEach(link => {
  link.addEventListener("click", function (e) {
    e.preventDefault();
    currentLink = this.href;
    modal.style.display = "flex";
  });
});

// Buka di iframe
openHereBtn.addEventListener("click", () => {
  if (currentLink) {
    iframe.src = currentLink;
    window.scrollTo({ top: iframe.offsetTop - 50, behavior: "smooth" });
  }
  modal.style.display = "none";
});

// Buka di tab baru
openOutsideBtn.addEventListener("click", () => {
  if (currentLink) window.open(currentLink, "_blank");
  modal.style.display = "none";
});

// Tutup modal
closeModalBtn.addEventListener("click", () => {
  modal.style.display = "none";
});

// Klik luar modal → tutup
window.addEventListener("click", (e) => {
  if (e.target === modal) modal.style.display = "none";
});
