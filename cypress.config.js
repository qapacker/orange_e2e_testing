const { defineConfig } = require('cypress');

module.exports = defineConfig({
  e2e: {
    baseUrl: 'http://localhost:8200',
    setupNodeEvents(on, config) {
      // Implementa eventos del nodo aquí
    },
  },
});
