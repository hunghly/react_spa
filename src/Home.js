import React, {useReducer} from "react";

const Home = () => {

  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <div>
      <h2>HELLO</h2>
      <p>
        Cras facilisis urna ornare ex volutpat, et convallis erat elementum. Ut
        aliquam, ipsum vitae gravida suscipit, metus dui bibendum est, eget
        rhoncus nibh metus nec massa. Maecenas hendrerit laoreet augue nec
        molestie. Cum sociis natoque penatibus et magnis dis parturient montes,
        nascetur ridiculus mus.
      </p>
      <p>Duis a turpis sed lacus dapibus elementum sed eu lectus.</p>
      Count: {state.count}
      <button onClick={() => dispatch({type: 'decrement'})}>-</button>
      <button onClick={() => dispatch({type: 'increment'})}>+</button>
    </div>
  );
};

const initialState = {count: 0};

function reducer(state, action) {
  switch (action.type) {
    case 'increment':
      return {count: state.count + 1};
    case 'decrement':
      return {count: state.count - 1};
    default:
      throw new Error();
  }
}

export default Home;
