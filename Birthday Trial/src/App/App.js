import React, {useState} from "react";
import "./App.css";
import data from "../data/data";
import List from "../List/List";

function App() {
  const [people, setPeople] = useState(data);
  return (
    <div className='App'>
      <div className="AppContainer">
        <h3>{people.length} birthdays today</h3>
        <List people={people} />
        <button type="button" onClick={() => setPeople([])}>Clear All</button>
      </div>
    </div> 
  );
}

export default App;