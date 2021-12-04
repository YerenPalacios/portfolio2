import logo from './logo.svg';
import './App.css';
import {
  BrowserRouter as Router,
   Route, Routes
} from "react-router-dom"

import Home from "./pages/home/home"
function Error404(){
  return(
    <h2>Not Found</h2>
  )
}

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home/>} ></Route>
        <Route path="*" element={<Error404/>} />
      </Routes>
    </Router>
  );
}

export default App;
