import './App.css';
import CreatePost from './components/CreatePost'
import React from 'react'
import GlobalCovid from './components/GlobalCovid'
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
        <GlobalCovid />
        <CreatePost name="Kat"/>
      </div>
    )
  };
}

export default App;
