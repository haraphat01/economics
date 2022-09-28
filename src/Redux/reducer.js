import cake_Ordered from "../Redux/index"
let initialState = {
    numOfCakes: 10
}
let reducer = (state = initialState, action) => {
    switch(action.type){
        case cake_Ordered:
            return {
                numOfCakes: state.numOfCakes - 1
            }
        default: 
            return state
    }
}

export default reducer