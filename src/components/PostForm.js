// import { render } from "@testing-library/react"
import React from 'react'
// import {connect} from 'react-redux'

class CreatePost extends React.Component{

    constructor(props){
        super(props)
        this.state = {
            story: ''
        }
    }
    handleChange = event => {
        this.setState({
            story: event.target.value
        })
        // console.log(this.state.story)
    }
    handleSubmit = (event) => {
        event.preventDefault()
        
        
    }
    render(){
        return(
            <div>
                <form onSubmit={this.handleSubmit}>
                    {/* <span> */}
                        <p>
                        <label>Story: </label><input onChange={this.handleChange} type="textarea" value={this.state.story}/><br />
                        <button>Submit</button>
                        </p>
                    {/* </span> */}
                </form>
            </div>) 
        }
}

export default CreatePost