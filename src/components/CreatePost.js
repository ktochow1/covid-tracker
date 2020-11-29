import { render } from "@testing-library/react"
import React from 'react'

function CreatePost(props){
    // handleSubmit((event) => {
    //     event.preventDefault()

    // })l
    return(
    <div>
        <form>
            {/* <span> */}
                <p>
                <label>Title: </label><input type="text"></input><br/>
                <input type="textarea" />
                <button>Click Me</button>
                </p>
            {/* </span> */}
        </form>
    </div>) 
}

export default CreatePost