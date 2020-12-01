import './App.css';
import React from 'react'
import CovidGraph from './containers/CovidGraph'
import FormContainer from './containers/FormContainer'
// import CanvasJSChart from './assetsCanvas/CanvasJSChart';
// import CanvasJSReact from './canvasjs.react'

class App extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      covidGraph: {
        graph: ''
      },
      posts: {
        bio: '',
        userPic: '',
        departedPic: ''
      },
      form: {
        info: ''
      },
      comments: {
        content: ''
      },
      likes: 0

    }
  }
  render(){
    
    return (
      <div className="App">
        <CovidGraph />
        <FormContainer />
      </div>
    )
  };
}

export default App;
