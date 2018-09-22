import React, { Component } from 'react';
import Ninjas from './Ninjas';
import AddNinja from './AddNinja';

class App extends Component {
  state = {
    ninjas: [
      {name: "ryu", age: 30, belt: "black", id: 1},
      {name: "joe", age: 20, belt: "white", id: 2},
      {name: "jenna", age: 70, belt: "yellow", id: 3},
    ]
  }
  addNinja = (ninja) => {
    ninja.id = Math.random();
    let ninjas = [...this.state.ninjas, ninja];
    this.setState({
      ninjas
    })
  }
  deleteNinja = (id) => {
    let ninjas = this.state.ninjas.filter(ninja => {
      return ninja.id !== id
    })
    this.setState({
      ninjas
    })
  }
  componentDidMount = () => {
    console.log('mounted')  
  }
  componentDidUpdate = (prevProps, prevState) => {
    console.log('updated');
    console.log(prevProps, prevState)
  }
  
  render() {
    return (
      <div className="App">
          <h1 className="App-title">Welcome to React</h1>
          <Ninjas ninjas={this.state.ninjas} deleteNinja={this.deleteNinja}/>
          <AddNinja addNinja={this.addNinja} />
      </div>
    );
  }
}

export default App;
