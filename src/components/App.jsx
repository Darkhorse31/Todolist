import React from "react";

function App() {
  const [inputT, setInput] = React.useState("");
  const [item, setItems] = React.useState([]);

  const handle = (event) => {
    let change = event.target.value;
    setInput(change);
  };
  const additem = () => {
    setItems((previtems) => {
      return [...previtems, inputT];
    });
    setInput(" ");
  };

  return (
    <div className="container">
      <div className="heading">
        <h1>To-Do List</h1>
      </div>
      <div className="form">
        <input type="text" onChange={handle} value={inputT} />
        <button>
          <span onClick={additem}>Add</span>
        </button>
      </div>
      <div>
        <ul>
          {item.map((newitems) => {
            return <li>{newitems}</li>;
          })}
        </ul>
      </div>
    </div>
  );
}

export default App;
