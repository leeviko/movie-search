import './App.css';
import {
  BrowserRouter as Router
} from "react-router-dom";

import Navbar from "./components/Navbar";
import Content from "./components/Content";

function App() {
  return (
    <Router>
      <div className="App">
        {/* <Header /> */}
        {/* <Search /> */}
        <Navbar />
        <Content />
      </div>
    </Router>
  );
}

export default App;
