import Navbar from './components/Navbar'
import Home from './components/Home'
import './App.css';
import {
  BrowserRouter as Router,
} from "react-router-dom";
function App() {
  return (
    <div className="App">
       
      <Router>
      <Navbar/>
      <Home/>
      </Router>

 
    </div>
  );
}

export default App;
