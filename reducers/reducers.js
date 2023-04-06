import {
    CALCULATE,
    ALLCLEAR,
    CLEAR,
    MAX,
    MIN,
    MULTIPLY,
    DEVIDE,
    PERSEN,
    NUMBER_7,
    NUMBER_8,
    NUMBER_9,
    NUMBER_4,
    NUMBER_5,
    NUMBER_6,
    NUMBER_1,
    NUMBER_2,
    NUMBER_3,
    NUMBER_00,
    NUMBER_0,
    COMA,
} from '../actions/actions'

var stringMath = require('string-math');

const initialState = {
    number: '0',
    result : 0,
    even : true
}

const handleOperator = (number, operation) => {
    if(number.slice(-1) === '/' || number.slice(-1) === '*' || number.slice(-1) === '+' || number.slice(-1) === '-' ||number.slice(-1) === '.'){
        return number.slice(0, -1) + operation
    }else{
        return number + operation
    }
}

const handleCalculate = (number) => {
    if(number === ''){
        return 0
    }else if(number.slice(-1) === 0){
        return stringMath(0)
    }else if(number.slice(-1) === '/' || number.slice(-1) === '*' || number.slice(-1) === '+' || number.slice(-1) === '-' ||number.slice(-1) === '.'){
        return stringMath(number.slice(0, -1))
    } else{
        return stringMath(number)
    }
}

const handlePercentage = (number) => {
    if(number.slice(-1) === '/' || number.slice(-1) === '*' || number.slice(-1) === '+' || number.slice(-1) === '-'||number.slice(-1) === '.'){
        return number.slice(0, -1) + '/100'
    }else{
        return number + '/100'
    }
}

export const calculateNumber = (state = initialState, action) => {
    switch(action.type){
        case CALCULATE :
            return {
                ...state,
                even : true
            }
        case ALLCLEAR : 
            return {
                number: '0',
                result : 0,
                even : false
            }
        case CLEAR : 
            return{
                ...state,
                number : state.number.slice(0, -1),
                result : handleCalculate(state.number.slice(0, -1)),
                even : state.number.slice(0, -1) === '' ? true : false
            }
           case NUMBER_7 : 
            return{
                ...state,
                number : state.number === '0'? '7' : state.number.concat(7),
                result : handleCalculate(state.number.concat(7)),
                even : false
            }
           case NUMBER_8 : 
            return{
                ...state,
                number : state.number === '0'? '8' : state.number.concat(8),
                result : handleCalculate(state.number.concat(8)),
                even : false
            }
           case NUMBER_9 : 
            return{
                ...state,
                number : state.number === '0'? '9' : state.number.concat(9),
                result : handleCalculate(state.number.concat(9)),
                even : false
            }
           case NUMBER_4 : 
            return{
                ...state,
                number : state.number === '0'? '4' : state.number.concat(4),
                result : handleCalculate(state.number.concat(4)),
                even : false
            }
           case NUMBER_5 : 
            return{
                ...state,
                number : state.number === '0'? '5' : state.number.concat(5),
                result : handleCalculate(state.number.concat(5)),
                even : false
            }
           case NUMBER_6 : 
            return{
                ...state,
                number : state.number === '0'? '6' : state.number.concat(6),
                result : handleCalculate(state.number.concat(6)),
                even : false
            }
           case NUMBER_1 : 
            return{
                ...state,
                number : state.number === '0'? '1' : state.number.concat(1),
                result : handleCalculate(state.number.concat(1)),
                even : false
            }
           case NUMBER_2 : 
            return{
                ...state,
                number : state.number === '0'? '2' : state.number.concat(2),
                result : handleCalculate(state.number.concat(2)),
                even : false
            }
           case NUMBER_3 : 
            return{
                ...state,
                number : state.number === '0'? '3' : state.number.concat('3'),
                result : handleCalculate(state.number.concat(3)),
                even : false
            }
           case NUMBER_00 : 
            return{
                ...state,
                number : state.number === '0'? '00' : state.number.concat('00'),
                result : handleCalculate(state.number.concat('00')),
                even : false
            }
           case NUMBER_0 : 
            return{
                ...state,
                number : state.number.concat(0),
                result : handleCalculate(state.number.concat('0')),
                even : false
            }
           case COMA : 
            return{
                ...state,
                number : state.number.concat('.'),
            }
            case MAX :
                return{
                    ...state,
                    number : handleOperator(state.number, '+')
                }
            case MIN :
                return{
                    ...state,
                    number : handleOperator(state.number, '-'),
                }
            case MULTIPLY :
                return{
                    ...state,
                    number :  handleOperator(state.number, '*'),
                }
            case DEVIDE :
                return{
                    ...state,
                    number :  handleOperator(state.number, '/'),
                }
            case PERSEN :
                return{
                    ...state,
                    number :  handleOperator(state.number, '/100'),
                    result : handleCalculate(handleOperator(state.number, '/100'))
                }
        default: 
            return state
    }
}