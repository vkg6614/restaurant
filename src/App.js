import "./App.css";
import Restaurant from "./components/Restaurant/Restaurant";
import { useReducer } from "react";
const reducer = (state, action) => {
  if (action.type === "INC") {
    state += 1;
  }
  if (state > 0 && action.type === "DEC") {
    state -= 1;
  }
  return state;
};
function App() {
  let initialState = 0;
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <div className="App">
      <Restaurant />

      <div>
        <h1>Using Reducer</h1>
        <h1>{state}</h1>
        <button onClick={() => dispatch({ type: "INC" })}>Click Me</button>
        <button onClick={() => dispatch({ type: "DEC" })}>DClick ME</button>
      </div>
    </div>
  );
}

export default App;
