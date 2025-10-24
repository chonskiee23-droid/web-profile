document.addEventListener("DOMContentLoaded", async () => {
  const projectContainer = document.getElementById("project-list");

  try {
    const response = await fetch("data.json");
    const data = await response.json();

    data.projects.forEach((project) => {
      const card = document.createElement("div");
      card.className = "project-card";
      card.innerHTML = `
        <h3>${project.title}</h3>
        <p>${project.description}</p>
      `;
      projectContainer.appendChild(card);
    });
  } catch (error) {
    projectContainer.innerHTML = "<p>⚠️ Unable to load projects.</p>";
    console.error("Error:", error);
  }

  // Scroll animation
  ScrollReveal().reveal(".card, .project-card, .skill", {
    duration: 1000,
    distance: "50px",
    easing: "ease-out",
    origin: "bottom",
    interval: 100
  });
});
