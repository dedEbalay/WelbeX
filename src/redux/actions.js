const setList = ( newListItems ) => {
    return {
        type: 'SET_LIST',
        payload: newListItems
    }
}

const setFlag = ( itemId ) => {
    return {
        type: 'SET_FLAG',
        payload: itemId,
    }
}

const addPost = ( newPost ) => {
    return {
        type: 'ADD_POST',
        payload: newPost
    }
}

const removePost = ( postId ) => {
    return {
        type: 'REMOVE_POST',
        payload: postId
    }
}

const editPost = ( postId, newText ) => {
    return {
        type: 'EDIT_POST',
        payload: postId,
        title: newText
    }
}

const incShowedIndex = () => {
    return {
        type: 'INC_SHOWED_INDEX'
    }
}

export {
    setList,
    setFlag,
    addPost,
    removePost,
    editPost,
    incShowedIndex
}