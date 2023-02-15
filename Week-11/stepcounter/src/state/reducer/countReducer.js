export const countReducer =(state=0, action) => {
    if(action.type === 'increase'){
        return state + action.payload;
    }
    else if (action.type === 'reset') {
        return state = action.payload;
    }
    else {
        return state;
    };
}
