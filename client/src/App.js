import './App.css';
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom"
import Home from "./components/Home"
import Navigationbar from './components/Navbar';

function App() {
  return (
    <>
    <Router>
      <Navigationbar/>
      {/* <Navigationbar showAlert={showAlert} /> */}
      {/* <Alerts alert={alert}/> */}
      <Routes>
        <Route exact path="/" element={<Home/>}/>
      </Routes>
    </Router>
    </>
  )
}

export default App;
