import { createStore, combineReducers } from 'redux'
import counter, { incAction, decAction, resetAction, addAction, substractAction,  } from './state/counter'
import addReducer, {addingAction} from './state/add'
import calculator,{inputAction} from './state/calculator'

const reducer = combineReducers({
    counter,
    addReducer, 
    calculator
})

export const store = createStore(
    reducer,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

// window.counterInc = () => store.dispatch(incAction())
// window.counterDec = () => store.dispatch(decAction())
// window.counterReset = () => store.dispatch(resetAction())

// store.dispatch(addAction(6))
// store.dispatch(addingAction(3))
window.counterInc = () => store.dispatch(incAction())
window.counterDec = () => store.dispatch(decAction())

window.inputAction = (number) => store.dispatch(inputAction(number))

window.state = () => {
    const state = store.getState().calculator
    console.log({
    ...state, 
    display: state.isResultShown ? state.result : state.input
})
}