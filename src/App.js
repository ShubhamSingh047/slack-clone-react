import "./App.css";
import Header from "./Component/Header";
import Sidebar from "./Component/Sidebar";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Header />
      <div className="app__body">
        <Sidebar />

        <Switch>
          <Route path="/room/:roomId">
            <h1>Chat Screen</h1>
          </Route>
          <Route path="/room/:roomId">
            <h1>Welcomr</h1>
          </Route>
        </Switch>
      </div>
    </div>
  );
}

export default App;
