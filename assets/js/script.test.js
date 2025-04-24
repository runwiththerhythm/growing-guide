/* jshint esversion: 11 */

/**
 * @jest-environment jsdom
 */

let renderPlants, generateCalendarStrip, viewByPlantBtn, viewByMonthBtn;

// Load data.js so we can attach plantData to global
const { plantData } = require('./data.js');

beforeAll(() => {
  // 1) Create ALL the DOM elements script.js expects at load time
  document.body.innerHTML = `
    <input type="text" id="searchInput" />
    <div id="plantGrid"></div>
    <div id="monthGrid" class="hidden"></div>

    <div id="plantModal" class="modal hidden">
      <span class="close-button">&times;</span>
      <div id="modalBody"></div>
    </div>

    <button id="viewByPlant">View by Plant</button>
    <button id="viewByMonth">View by Month</button>

    <div class="type-filters">
      <button data-type="all">All</button>
      <button data-type="vegetable">Vegetables</button>
      <button data-type="fruit">Fruits</button>
      <button data-type="herb">Herbs</button>
      <button data-type="flower">Flowers</button>
    </div>
  `;

  // 2) Make plantData global so script.js can see it
  global.plantData = plantData;

  // 3) Now load script.js (it will wire up listeners against real DOM nodes)
  const script = require('./script.js');
  renderPlants          = script.renderPlants;
  generateCalendarStrip = script.generateCalendarStrip;
  viewByPlantBtn        = script.viewByPlantBtn;
  viewByMonthBtn        = script.viewByMonthBtn;
});

describe('script.js — pure functions', () => {
  beforeEach(() => {
    // wipe the plantGrid before each test
    document.getElementById('plantGrid').innerHTML = '';
  });

  test('renderPlants sorts plant data alphabetically by name (via DOM)', () => {
    renderPlants(plantData);
    const names = Array.from(
      document.querySelectorAll('#plantGrid .plant-card .name')
    ).map(el => el.textContent);

    expect(names).toEqual([...names].sort());
  });

  test('generateCalendarStrip includes month labels', () => {
    const leek = plantData.find(p => p.name === 'Leek');
    const html = generateCalendarStrip(leek);
    expect(html).toContain('Jan');
    expect(html).toContain('Feb');
  });
});

describe('script.js — view toggles', () => {
  beforeEach(() => {
    // reset visibility
    document.getElementById('plantGrid').classList.remove('hidden');
    document.getElementById('monthGrid').classList.add('hidden');
  });

  test('clicking "View by Plant" shows plant grid, hides month grid', () => {
    // simulate we were in month view first
    document.getElementById('plantGrid').classList.add('hidden');
    document.getElementById('monthGrid').classList.remove('hidden');

    viewByPlantBtn.click();

    expect(document.getElementById('plantGrid').classList.contains('hidden')).toBe(false);
    expect(document.getElementById('monthGrid').classList.contains('hidden')).toBe(true);
  });

  test('clicking "View by Month" shows month grid, hides plant grid', () => {
    // ensure start in plant view
    document.getElementById('plantGrid').classList.remove('hidden');
    document.getElementById('monthGrid').classList.add('hidden');

    viewByMonthBtn.click();

    expect(document.getElementById('monthGrid').classList.contains('hidden')).toBe(false);
    expect(document.getElementById('plantGrid').classList.contains('hidden')).toBe(true);
  });
});
