import "./App.css";
import Header from "./Component/Header";
import Sidebar from "./Component/Sidebar";

function App() {
  return (
    <div className="App">
      <Header />
      <div className="app__body">
        <Sidebar />
      </div>
    </div>
  );
}

export default App;
