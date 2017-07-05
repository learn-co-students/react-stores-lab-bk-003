class Store {
  constructor(initialState) {
  	this.state = initialState
  	this.listeners = []
  }

  addListener(listener) {
  	this.listeners.push(listener)
  	let removeListener = () => {
  		this.listeners = this.listeners.filter(l => {
  			return l !== listener
  		})
  	}
  	return removeListener
  }

  setState(state) {
  	this.state = state
  	for (const listener of this.listeners) {
  		listener(state)
  	}
  }

  getState() {
  	return this.state
  }
}

module.exports = Store;
