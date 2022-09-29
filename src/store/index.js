import {createStore} from 'redux'


const reducerFn = (state = {counter: 0}, action)=>{
    if (action.type === "INC"){
        return {...state, state: state.counter + 1 }
    } else if (action.type === "DEC"){
        return {...state, state: state.counter - 1 }
    }
}
const store = createStore(reducerFn)
export default store