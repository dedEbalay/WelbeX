const initialState = {
    fetchList: [],
    loading: true,
    showedIndex: 10
};

const reducer = (state = initialState, action) => {

    function sliceArray(array, elementId, newElement) {                                         //Заменяет элемент массива 'array' с ID 'elementID'
        const beforeArray =  array.slice(0, array.findIndex(item => item.id === elementId)),
              afterArray = array.slice(array.findIndex(item => item.id === elementId) + 1),
              newArray = [...beforeArray, newElement, ...afterArray];
        return newArray
    }

    function removeElement(array, elementId) {                   // Удаляет из массива 'array' элемент с ID 'elementId'
        const beforeArray =  array.slice(0, array.findIndex(item => item.id === elementId)),
              afterArray = array.slice(array.findIndex(item => item.id === elementId) + 1),
              newArray = [...beforeArray, ...afterArray];
        return newArray
    }

    switch ( action.type ) {
        case 'SET_LIST':
            const oldArray = state.fetchList,
                  newArray = [...oldArray, ...action.payload]
            return {
                ...state,
                fetchList: newArray,
                loading: false
            }
        case 'SET_FLAG': 
            const newElem = state.fetchList[state.fetchList.findIndex(item => item.id === action.payload)] = {
                ...state.fetchList[state.fetchList.findIndex(item => item.id === action.payload)],
                completed: !state.fetchList[state.fetchList.findIndex(item => item.id === action.payload)].completed
            }
            const array = sliceArray(state.fetchList, action.payload, newElem);
            return {
                ...state,
                fetchList: array,
            }
        case 'ADD_POST':
            const oldArray1 = state.fetchList,
                  newArray1 = [action.payload, ...oldArray1];
            return {
                ...state,
                fetchList: newArray1
            }
        case 'REMOVE_POST':
            const newArray2 = removeElement(state.fetchList, action.payload)
            return {
                ...state,
                fetchList: newArray2
            }
        case 'EDIT_POST':
            const newElement = state.fetchList[state.fetchList.findIndex(item => item.id === action.payload)] = {
                ...state.fetchList[state.fetchList.findIndex(item => item.id === action.payload)],
                title: action.title
            }
            const array1 = sliceArray(state.fetchList, action.payload, newElement)
            return {
                ...state,
                fetchList: array1
            }
        case 'INC_SHOWED_INDEX': 
            const oldIndex = state.showedIndex,
                  newIndex =  oldIndex + 10;
            return {
                ...state,
                showedIndex: newIndex
            }
        default:
            return {
                ...state
            }
    }
}

export default reducer;