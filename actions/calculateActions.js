import {
    CALCULATE
} from './actions'

export const handleCalculate = (itemsActions) => {
    return (dispatch,store)=> {
        const number = store()
        dispatch({type: CALCULATE})

    }
}