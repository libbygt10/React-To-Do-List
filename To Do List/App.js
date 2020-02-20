import React from "react";

function App() {
  return (
    <div className="todo-div">
      <label className="container">
        <input type="checkbox" />
        <li>
          <span className="check"> Build New React Projects</span>
        </li>
      </label>
      <br />
      <label className="container">
        <input type="checkbox" />
        <span className="check"> Make Sure That My Software Is All Up to Date</span>
      </label>
      <br />
      <label className="container">
        <input type="checkbox" />
        <span className="check"> Run 6.5 Miles</span>
      </label>
      <br />
      <label className="container">
        <input type="checkbox" />
        <span className="check"> Clean My House</span>
      </label>
    </div>
  );
}

export default App;
