// Ajouter une alerte lorsque l'utilisateur soumet le formulaire
document.querySelector("form").addEventListener("submit", (e) => {
    e.preventDefault(); // Empêche l'envoi réel du formulaire
    alert("Merci pour votre message ! Nous vous répondrons bientôt.");
  });
  
  // Animation de défilement en douceur pour les liens de navigation
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener("click", function (e) {
      e.preventDefault();
      document.querySelector(this.getAttribute("href")).scrollIntoView({
        behavior: "smooth"
      });
    });
  });

const sections = document.querySelectorAll("section");

const revealSection = () => {
  sections.forEach((section) => {
    const sectionTop = section.getBoundingClientRect().top;
    if (sectionTop < window.innerHeight - 100) {
      section.classList.add("active");
    }
  });
};

window.addEventListener("scroll", revealSection);
