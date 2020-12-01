import React from 'react'
import {connect} from 'react-redux'
import PostForm from '../components/PostForm'

class FormContainer extends React.Component{
    render(){
        return(
            <div>
                <PostForm addPost={this.props.addPost}/>
                <Post post={this.props.post}/>
            </div>
        )
    }
}



const mapDispatchToProps = dispatch => {
    return {
        addPost : (post) => dispatch({type: 'ADD_POST', post: post})
    }
    
}

const mapStateToProps = state => {
    // console.log(state)
    return {story: state.story}
}
export default connect(mapStateToProps, mapDispatchToProps)(FormContainer)