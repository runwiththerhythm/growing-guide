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

