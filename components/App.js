const counterStore = require('../stores/counterStore');
const actions = require('../actions/index')
const React = require('react');

class App extends React.Component {
  constructor (props) {
    super(props);
    this.state = {
      counter: counterStore.getState()
    };
  }
  componentDidMount () {
    this.removeListener = counterStore.addListener((state) => {
      this.setState({counter: state})
    })
  }
  componentWillUnmount () {
    this.removeListener()
  }
  increment(ev) {
    ev.preventDefault()
    actions.increment()
  }
  decrement(ev) {
    ev.preventDefault()
    actions.decrement()
  }
  render () {
    return (
      <div className='app'>
        <h1 className='counter'>{this.state.counter}</h1>
        <div className='actions'>
          <button className='decrement' onClick={this.decrement}>
            -
          </button>
          <button className='increment' onClick={this.increment}>
            +
          </button>
        </div>
      </div>
    );
  }
}

module.exports = App;
