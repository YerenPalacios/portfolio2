import logo from './logo.svg';
import './App.css';
import {
  HashRouter as Router,
   Route, Routes
} from "react-router-dom"

import Portfolio  from "./pages/portfolio"
import Contact from "./pages/contact"
import About from "./pages/about"
import Projects from "./pages/projects"

function Error404(){
  return(
    <h2>Not Found</h2>
  )
}

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Portfolio/>} ></Route>
        <Route path="/contact" element={<Contact/>} ></Route>
        <Route path="/projects" element={<Projects/>} ></Route>
        <Route path="/about" element={<About/>} ></Route>
        <Route path="*" element={<Error404/>} />
      </Routes>
    </Router>
  );
}

export default App;
