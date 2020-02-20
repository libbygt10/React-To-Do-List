import React from "react";

function App() {
  return (
    <div className="todo-div">
      <label className="container">
        <input type="checkbox" />
        <li>
          <span className="check"> Practice React</span>
        </li>
      </label>
      <br />
      <label className="container">
        <input type="checkbox" />
        <span className="check"> Read up on React Interview Questions</span>
      </label>
      <br />
      <label className="container">
        <input type="checkbox" />
        <span className="check"> Peruse Slack For Opportunities</span>
      </label>
      <br />
      <label className="container">
        <input type="checkbox" />
        <span className="check"> Apply To Etsy</span>
      </label>
    </div>
  );
}

export default App;
