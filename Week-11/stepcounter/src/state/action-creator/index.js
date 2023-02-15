export const increaseCount = () =>{
    return (dispatch) => {
        dispatch({
            type: 'increase',
            payload: 1,
        })
    }
}

export const resetCount = () =>{
    return (dispatch) => {
        dispatch({
            type: 'reset',
            payload: 0,
        })
    }
}