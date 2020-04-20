import React from "react";
import "./styles.css";
import Functional from "./Functional_com";

function App() {
  let obj = [{ name: "Gaurav", age: "25" }, { name: "Shivam", age: "26" }];
  return (
    <div className="App">
      <h1>Hello CodeSandbox</h1>
      <h2>Start editing to see some magic happen!</h2>
      <Functional obj={obj} />
    </div>
  );
}
function abcd() {
  return "Tera Baap aya!";
}
class App_clsBasedComp extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: []
    };
    this.a = {
      val: true
    };
    this.StateHandler = this.StateHandler.bind(this);
    this.abcd = abcd.bind(this);
  }
  StateHandler = function(a) {
    let array = [{ name: "shiv" }, { name: "ravi" }];
    if (this.a.val) {
      this.setState(
        {
          name: array
        },
        () => console.log(this.a.val)
      );
      this.a.val = false;
    } else {
      this.setState(
        {
          name: []
        },
        () => console.log(this.a.val)
      );
      this.a.val = true;
    }
  };
  render() {
    const name = this.state.name.map((item, index) => (
      <>
        <h3 key={index}>{item.name}</h3>
      </>
    ));
    return (
      <>
        {name.length !== 0 && name}
        <h1 onClick={this.StateHandler.bind(this.a.val)}>
          Gaurav:{this.a.val}
        </h1>
        <p>{this.abcd()}</p>
        <App />
      </>
    );
  }
}

export default App_clsBasedComp;
