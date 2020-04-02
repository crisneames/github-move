import React, { Component } from 'react';
import LineChart from './components/LineChart.js'
import './App.css';
import Config from './components/Config';

class App extends Component {
  constructor(props){
    super(props)
    this.state = {
        ice_creams: []
    };
    this.geticeCreams = this.geticeCreams.bind(this)
  }
  async geticeCreams(){
    try{
      const response = await fetch(`${Config.baseURL}/ice_creams`);
      const iceCreams = await response.json()
      this.setState({ iceCreams:[...iceCreams] })
      console.log(this.state.iceCreams)
    } catch (err){
        console.error(err)
    }
  }
  componentDidMount(){
    this.geticeCreams();
  }
  render() {
    return (
      <div className="App">
        <LineChart id={1}/>
      </div>
    );
  }
}


export default App;
