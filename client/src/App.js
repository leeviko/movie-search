import './App.css';
import {
  BrowserRouter as Router
} from "react-router-dom";

import Search from "./components/Search";
import Navbar from "./components/Navbar";

function App() {
  return (
    <Router>
      <div className="App">
        {/* <Header /> */}
        {/* <Search /> */}
        <Navbar />
      </div>
    </Router>
  );
}

export default App;
