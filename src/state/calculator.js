const INPUT = 'calculator/INPUT'
const ADD = 'calculator/ADD'
const SUBSTRACT = 'calculator/SUBSTRACT'

export const inputAction = number => ({
    type: INPUT,
    number
})

const initialState = {
    result: 0,
    input: 0,
    isResaultShown: false
}

export default (state = initialState, action) => {
    switch(action.type){
        case INPUT:
        return {
            ...state,
            input: action.number,
            isResaultShown: false
        }
        default: 
        return state
    }
}
