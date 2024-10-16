// Changement de thème (clair/sombre)
const themeToggle = document.getElementById("theme-toggle");
themeToggle.addEventListener("click", () => {
  document.body.classList.toggle("dark-mode");
  if (document.body.classList.contains("dark-mode")) {
    themeToggle.textContent = "Light Mode";
  } else {
    themeToggle.textContent = "Dark Mode";
  }
});

// Traductions pour le changement de langue
const translations = {
  en: {
    heroTitle: "Welcome to My Portfolio",
    heroSubtitle: "Full-Stack Developer | React | Flask",
    aboutLink: "About",
    projectsLink: "Projects",
    contactLink: "Contact",
    aboutTitle: "About Me",
    aboutText:
      "I'm a passionate developer with experience in building web applications using React and Flask. I love turning ideas into reality with code.",
    projectsTitle: "My Projects",
    project1Title: "Task Manager",
    project1Text: "A task management app built with React and Flask.",
    project2Title: "E-commerce Platform",
    project2Text: "An e-commerce platform with advanced search and filtering.",
    project3Title: "Portfolio Website",
    project3Text:
      "This portfolio website built using HTML, CSS, JS, and Bootstrap.",
    contactTitle: "Contact Me",
    contactText:
      "If you'd like to get in touch, feel free to send me a message!",
    contactButton: "Email Me",
  },
  fr: {
    heroTitle: "Bienvenue sur Mon Portfolio",
    heroSubtitle: "Développeur Full-Stack | React | Flask",
    aboutLink: "À propos",
    projectsLink: "Projets",
    contactLink: "Contact",
    aboutTitle: "À propos de moi",
    aboutText:
      "Je suis un développeur passionné, spécialisé dans la création d'applications web avec React et Flask. J'adore transformer les idées en réalité avec du code.",
    projectsTitle: "Mes Projets",
    project1Title: "CRM de gestion d'annonces de véhicules",
    project1Text:
      "Cette application permet à des concessionaires automobiles de stocker leurs véhicules dans une unique base de données. Les gérer, les modifier, grâce à une interface React TS, les publier automatiquement sur des réseaux à l'aide de GPT 4o.",
    project2Title: "Fichier LibreOffice Calc vers base de données SQL",
    project2Text:
      "Un script plutôt simple permettant de convertir des fichiers ODS vers SQL. Très pratiques pour les entreprises cherchant à moderniser leur système de gestion de données.",
    project3Title: "Site de Portfolio",
    project3Text: "Ce site portfolio réalisé avec HTML, CSS, JS, et Bootstrap.",
    contactTitle: "Contactez-moi",
    contactText:
      "Si vous souhaitez me contacter, n'hésitez pas à m'envoyer un message !",
    contactButton: "Envoyez-moi un email",
  },
};

// Changement de langue
const languageToggle = document.getElementById("language-toggle");
let currentLanguage = "en";

languageToggle.addEventListener("click", () => {
  currentLanguage = currentLanguage === "en" ? "fr" : "en";
  updateLanguage(currentLanguage);
  languageToggle.textContent =
    currentLanguage === "en" ? "Français" : "English";
});

function updateLanguage(lang) {
  document.getElementById("hero-title").textContent =
    translations[lang].heroTitle;
  document.getElementById("hero-subtitle").textContent =
    translations[lang].heroSubtitle;
  document.getElementById("about-link").textContent =
    translations[lang].aboutLink;
  document.getElementById("projects-link").textContent =
    translations[lang].projectsLink;
  document.getElementById("contact-link").textContent =
    translations[lang].contactLink;
  document.getElementById("about-title").textContent =
    translations[lang].aboutTitle;
  document.getElementById("about-text").textContent =
    translations[lang].aboutText;
  document.getElementById("projects-title").textContent =
    translations[lang].projectsTitle;
  document.getElementById("project1-title").textContent =
    translations[lang].project1Title;
  document.getElementById("project1-text").textContent =
    translations[lang].project1Text;
  document.getElementById("project2-title").textContent =
    translations[lang].project2Title;
  document.getElementById("project2-text").textContent =
    translations[lang].project2Text;
  document.getElementById("project3-title").textContent =
    translations[lang].project3Title;
  document.getElementById("project3-text").textContent =
    translations[lang].project3Text;
  document.getElementById("contact-title").textContent =
    translations[lang].contactTitle;
  document.getElementById("contact-text").textContent =
    translations[lang].contactText;
  document.getElementById("contact-button").textContent =
    translations[lang].contactButton;
}
