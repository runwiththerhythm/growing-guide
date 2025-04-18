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


// Generate a calendar strip for sowing and harvesting
// Data in plant.sow and plant.harvest use full month names (e.g., "February")
function generateCalendarStrip(plant) {
  const shortMonths = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
  return `
    <div class="calendar">
      ${shortMonths.map(month => {
        let className = "";
        // Convert short month to full month name
        const fullMonth = shortToFull(month);
        if (plant.sow.includes(fullMonth)) {
          className = "sow";
        } else if (plant.harvest.includes(fullMonth)) {
          className = "harvest";
        }
        return `<div class="month ${className}">${month}</div>`;
      }).join("")}
    </div>
    <div class="calendar-labels">
      <span class="label sow">🟩 Sow</span>
      <span class="label harvest">🟧 Harvest</span>
    </div>
  `;
}

// Helper function to convert short month to full month name
function shortToFull(shortMonth) {
  const mapping = {
    "Jan": "January", "Feb": "February", "Mar": "March",
    "Apr": "April", "May": "May", "Jun": "June",
    "Jul": "July", "Aug": "August", "Sep": "September",
    "Oct": "October", "Nov": "November", "Dec": "December"
  };
  return mapping[shortMonth];
}

// Render the month view: A grid of 12 month cards
function renderMonthView() {
  monthGrid.innerHTML = "";
  const fullMonths = ["January", "February", "March", "April", "May", "June",
                      "July", "August", "September", "October", "November", "December"];
  
  fullMonths.forEach(month => {
    // For each month, list plants to sow and harvest that have this month in their array.
    const sowPlants = plantData.filter(plant => plant.sow.includes(month)).map(p => p.name);
    const harvestPlants = plantData.filter(plant => plant.harvest.includes(month)).map(p => p.name);

    const card = document.createElement("div");
    card.className = "month-card";
    card.innerHTML = `
      <h3>${month}</h3>
      <p><strong>Sow:</strong> ${sowPlants.join(", ") || "None"}</p>
      <p><strong>Harvest:</strong> ${harvestPlants.join(", ") || "None"}</p>
    `;
    monthGrid.appendChild(card);
  });
}

// Close modal when clicking the close button
closeButton.addEventListener("click", () => modal.classList.add("hidden"));

// Show plant view by default
document.addEventListener("DOMContentLoaded", () => {
  renderPlants(plantData);
});
