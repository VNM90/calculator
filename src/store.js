import { createStore, combineReducers } from 'redux'
import counterReducer, { incAction, decAction, resetAction, addAction, substractAction } from './state/counter'

const reducer = combineReducers({
    counter: counterReducer
})

const store = createStore(
    reducer,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

window.counterInc = () => store.dispatch(incAction())
window.counterDec = () => store.dispatch(decAction())
window.counterReset = () => store.dispatch(resetAction())

store.dispatch(addAction(6))