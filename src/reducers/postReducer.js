const postReducer = (state={post: []}, action) => {
    switch(action.type){
        case 'ADD_POST':
            return {
                ...state,
                ...state.post,
                state: [...state.post, action.post]
            }
        default: 
        return state
    }
}

export default postReducer