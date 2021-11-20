import "./App.css";
import React, { useState } from "react";
import Navbar from "../src/Components/Navbar/Nav";
import Checkbox from "@material-ui/core/Checkbox";
import Button from "@material-ui/core/Button";

function App(props) {
  const [fetch, setFetch] = useState([]);

  let textInput = React.createRef();
  const handleClick = () => {
    setFetch([...fetch, textInput.current.value]);
    console.log(fetch);
  };
  // const handleRemove = () => {
  //   setFetch([textInput.current.value]);
  // };
  const handleRemoveItem = (e) => {
    setFetch(fetch.filter((item, i) => i !== e));
  };

  return (
    <div className="App">
      <Navbar />
      <div className="Input-Search">
        <input ref={textInput} id="input-1" placeholder="Enter Task"></input>
        <Button
          onClick={handleClick}
          id="Btn-1"
          variant="contained"
          color="primary"
        >
          Add
        </Button>
      </div>
      <div className="task-content">
        <h3 className="contentTag">
          {fetch.map((item, index) => {
            return (
              <div className="dataInputed">
                {" "}
                <Button onClick={() => handleRemoveItem(index)}>click</Button>
                <p>{item}</p>
                <Checkbox
                  defaultChecked
                  indeterminate
                  inputProps={{ "aria-label": "indeterminate checkbox" }}
                />
              </div>
            );
          })}
        </h3>
      </div>
    </div>
  );
}

export default App;
