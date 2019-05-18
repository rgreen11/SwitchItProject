import React, {
    createContext,
    useReducer,
} from 'react';

const initialState = {}
const reducer = (state, action) => {
    switch (action.type) {
        case "UPDATE_LOADING":
            return {...state, loading: action.payload};
        default:
            return {...state};
    }
}
const StateContext = createContext(initialState);
const StateProvider = props => {
    const [state, dispatch] = useReducer(reducer, initialState);
    return <StateContext.Provider value={{state, dispatch}}>
        {props.children}
    </StateContext.Provider>
}

export {StateContext, StateProvider}