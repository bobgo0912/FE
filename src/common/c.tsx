import React, { useReducer } from "react";

type ActionType = {
    type: "increment" | "decrement";
};

type State = { count: number };

const Counter: React.FC = () => {
    const reducer: React.Reducer<State, ActionType> = (state, action) => {
        switch (action.type) {
            case "increment":
                return { count: state.count + 1 };
            case "decrement":
                return { count: state.count - 1 };
            default:
                throw new Error();
        }
    };

    const initialState: State = {count: 0}
    const [state, dispatch] = useReducer(reducer, initialState);

    return (
        <>
            Count: {state.count}
            <button onClick={() => dispatch({ type: "increment" })}>+</button>
            <button onClick={() => dispatch({ type: "decrement" })}>-</button>
        </>
    );
};

export default Counter;
