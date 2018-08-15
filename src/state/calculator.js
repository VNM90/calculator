const INPUT = 'calculator/INPUT'
const ADD = 'calculator/ADD'
const SUBSTRACT = 'calculator/SUBSTRACT'
const SUM = 'calculator/SUM'
const RESET = 'calculator/RESET'

export const addCalculatorAction = () => ({ type: ADD })

export const substractCalculatorAction = () => ({ type: SUBSTRACT })

export const sumCalculatorAction = () => ({ type: SUM})

export const resetCalculatorAction = () => ({ type: RESET})

export const inputAction = number => ({
    type: INPUT,
    number
})

const calculateResault = currentState => {
    switch(currentState){
        case ADD:
        return currentState.result + currentState.input
        case SUBSTRACT:
        return currentState.result - currentState.input
        default:
        return currentState.result + currentState.input
    }
}


const initialState = {
    result: 0,
    input: 0,
    isResultShown: false,
    lastOperation: null
}

export default (state = initialState, action) => {
    switch (action.type) {
        case INPUT:
            return {
                ...state,
                input: state.input * 10 + action.number,
                isResultShown: false
            }
        case ADD:
            return {
                ...state,
                result: calculateResault(state),  
                input: 0,
                isResultShown: true,
                lastOperation: action.type
                
            }
        case SUBSTRACT:
        return {
            ...state,
            result: calculateResault(state),
            input: 0,
            isResultShown: true,
            lastOperation: action.type
        }
        case SUM:
        return {
            ...state,
                result: calculateResault(state),  
                input: 0,
                isResultShown: true,
                lastOperation: initialState.lastOperation
        }
        case RESET:
        return {
            ...initialState
                
        }
        default:
            return state
    }
}
