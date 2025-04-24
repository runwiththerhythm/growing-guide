/* jshint esversion: 11 */

const { plantData } = require('./data.js');

test('plantData contains Leek with correct months', () => {
  const leek = plantData.find(p => p.name === "Leek");
  expect(leek).toBeDefined();
  expect(leek.sow).toContain("February");
});
