import React from "react";
import useResize from "./hooks/useResize";

const App = (props) => {
  const state = useResize();

  console.log("state:: ", state);

  return <h1>hello</h1>;
};

export default App;
