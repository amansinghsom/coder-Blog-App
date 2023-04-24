import React, { useReducer } from 'react';

const MyContext = React.createContext('default value');

function reducer(state, action) {
    switch (action.type) {
        case 'setToken':
            return {
                ...state,
                token: action.payload.token
            };
        case 'RemoveToken':
            return { ...state, token: null };
        default:
            throw new Error();
    }
}

function MyProvider(props) {
    // const [state, setState] = React.useState();
    const [state, dispatch] = useReducer(reducer, {
        token: localStorage.getItem('token') || null
    });

    const setToken = (data) => {
        dispatch({
            type: "setToken",
            payload: data
        })
    }
    const RemoveToken = () => {
        dispatch({
            type: "RemoveToken",
        })
    }
    return (
        <MyContext.Provider value={{ ...state, RemoveToken, setToken }}>
            {props.children}
        </MyContext.Provider>
    );
}

export default MyProvider;
export { MyContext };


// react router dom , context api , useContext hook , useReducer Hook,graphql,apollo client , mongodb , apollo server 
