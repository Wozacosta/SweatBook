import React, {Component} from 'react';
import { Welcome } from './containers/Welcome'
import { Main } from './containers/Main'
import { Provider } from 'react-redux';
import { store } from './store';

export class Root extends Component {

  constructor() {
    super();

    this.state = {
      started: false
    }
  }

  startWorkout = () => {
    this.setState({ started: true});
  }

  renderRoot(ComponentToRender){
    return (
      <Provider store={store}>
        <ComponentToRender startWorkout={this.startWorkout}/>
      </Provider>
    )
  }

  render() {
    const {started} = this.state;
    return started ? this.renderRoot(Main) : this.renderRoot(Welcome);
  }
};