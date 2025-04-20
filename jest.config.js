// jest.config.js
module.exports = {
    testEnvironment: 'jsdom',         // simulate window/document
    setupFiles: ['<rootDir>/jest.setup.js'],  // run before each suite
  };
  