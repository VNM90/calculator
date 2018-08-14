import { createStore, combineReducers } from 'redux'
import counter, { incAction, decAction, resetAction, addAction, substractAction,  } from './state/counter'
import addReducer, {addingAction} from './state/add'
import calculator,{inputAction, addCalculatorAction} from './state/calculator'

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

// automatic testing
const getDiplayedVal = () => {
    const state = store.getState().calculator
  
    return state.isResultShown ? state.result : state.input
  }
  
  store.dispatch(inputAction(6))
  if (getDiplayedVal() !== 6) {
    throw new Error('Input not works! Should be 6!')
  }
  store.dispatch(inputAction(7))
  if (getDiplayedVal() !== 67) {
    throw new Error('Input not works! Should be 67!')
  }
  store.dispatch(inputAction(3))
  if (getDiplayedVal() !== 673) {
    throw new Error('Input not works! Should be 673!')
  }
  
  store.dispatch(addCalculatorAction())
  if (getDiplayedVal() !== 673) {
    throw new Error('Add not works! Should be 673!')
  }
  store.dispatch(inputAction(3))
  if (getDiplayedVal() !== 3) {
    throw new Error('Input not works! Should be 3!')
  }
  store.dispatch(addCalculatorAction())
  if (getDiplayedVal() !== 676) {
    throw new Error('Add not works! Should be 676!')
  }

//function in widnow are only for manual testing
window.inputAction = (number) => store.dispatch(inputAction(number))

window.state = () => {
    const state = store.getState().calculator
    console.log({
    ...state, 
    display: state.isResultShown ? state.result : state.input
})
}