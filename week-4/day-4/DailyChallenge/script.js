// Array of planets with their moons and colors
const planets = [
  {
    name: "Mercury",
    moons: 0,
    color: "brown",
  },
  {
    name: "Venus",
    moons: 0,
    color: "orange",
  },
  {
    name: "Earth",
    moons: 1,
    color: "blue",
  },
  {
    name: "Mars",
    moons: 2,
    color: "red",
  },
  // ... (add more planets)
];

const planetSection = document.querySelector(".listPlanets");

// Create planet divs and append them to the section
planets.forEach((planet) => {
  const planetDiv = document.createElement("div");
  planetDiv.classList.add("planet", `planet-${planet.color}`);
  planetDiv.textContent = planet.name;
  planetSection.appendChild(planetDiv);

  // Create moon divs for each planet and position them randomly
  for (let i = 0; i < planet.moons; i++) {
    const moonDiv = document.createElement("div");
    moonDiv.classList.add("moon");

    // Position moon randomly around the planet
    moonDiv.style.top = `${Math.random() * 50 - 25}%`;
    moonDiv.style.left = `${Math.random() * 50 - 25}%`;

    planetDiv.appendChild(moonDiv);
  }
});
