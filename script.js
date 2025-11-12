
const basliklar = document.querySelectorAll(".panel-baslik");

basliklar.forEach(baslik => {
  baslik.addEventListener("click", () => {
    const icerik = baslik.nextElementSibling;
    icerik.classList.toggle("goster");
  });
});

const aramaKutusu = document.getElementById("aramaKutusu");
const paneller = document.querySelectorAll(".panel");

aramaKutusu.addEventListener("input", () => {
  const aranan = aramaKutusu.value.toLowerCase();

  paneller.forEach(panel => {
    const baslik = panel.querySelector(".panel-baslik");
    if (!baslik) return;

    const metin = baslik.textContent.toLowerCase();

    if (metin.startsWith(aranan)) {
      panel.style.display = "block";
    } else {
      panel.style.display = "none";
    }
  });
});
