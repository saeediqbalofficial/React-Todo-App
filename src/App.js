import "./App.css";
import Todo from "../src/UI Comps/Todo";

// console.log(myData);
function App() {
  return (
    <div className="App">
      <h4
        style={{ paddingTop: "20px", paddingBottom: "20px", fontSize: "2rem" }}
      >
        TODO APP REACT JS
      </h4>
      <div className="render-comps">
        <Todo />
      </div>
    </div>
  );
}

export default App;
