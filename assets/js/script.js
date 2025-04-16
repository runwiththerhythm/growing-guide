// Get elements from the DOM
const plantGrid = document.getElementById("plantGrid");
const monthGrid = document.getElementById("monthGrid");
const modal = document.getElementById("plantModal");
const modalBody = document.getElementById("modalBody");
const closeButton = document.querySelector(".close-button");
const viewByPlantBtn = document.getElementById("viewByPlant");
const viewByMonthBtn = document.getElementById("viewByMonth");

// View switching: Show plant grid view
viewByPlantBtn.addEventListener("click", () => {
  renderPlants(plantData);
  plantGrid.classList.remove("hidden");
  monthGrid.classList.add("hidden");
});

// View switching: Show month view
viewByMonthBtn.addEventListener("click", () => {
  renderMonthView();
  plantGrid.classList.add("hidden");
  monthGrid.classList.remove("hidden");
});

// Render the plants as cards
function renderPlants(data) {
  plantGrid.innerHTML = "";
  data.forEach(plant => {
    const card = document.createElement("div");
    card.className = "plant-card";
    // Create the card HTML
card.innerHTML = `
<div class="img">
  <img src="${plant.img}" alt="${plant.name}" />
</div>
<div class="name">${plant.name}</div>
`;
    card.addEventListener("click", () => openModal(plant));
    plantGrid.appendChild(card);
  });
}

// Open a modal with the plant's details and calendar strip
function openModal(plant) {
  modalBody.innerHTML = `
    <div class="modal-header">
      <img src="${plant.img}" alt="${plant.name}" class="modal-img" />
      <h2>${plant.name}</h2>
    </div>
    <p><strong>✅ Good Companions:</strong> ${plant.companions.join(", ")}</p>
    <p><strong>❌ Avoid:</strong> ${plant.avoid.join(", ")}</p>
    <p><strong>📏 Spacing:</strong> ${plant.spacing}</p>
    <p><strong>☀️ Light:</strong> ${plant.light}</p>
    <p><strong>💧 Water:</strong> ${"💧".repeat(plant.water)}</p>
    <p><strong>🌱 Tip:</strong> ${plant.tip}</p>
    <div class="calendar-strip">
      ${generateCalendarStrip(plant)}
    </div>
  `;
  modal.classList.remove("hidden");
}

