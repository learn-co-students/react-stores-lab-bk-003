const counterStore = require('../stores/counterStore')

module.exports = {
  increment() {
  	counterStore.increment()
  },

  decrement() {
  	counterStore.decrement()
  }
};
