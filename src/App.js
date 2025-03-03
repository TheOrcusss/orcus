import DisplayText from "./Components/DisplayText"; 
import ClassDisplayText from "./Components/ClassDisplayText";
import Counter from "./Components/Counter"; 
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom"; 
import Home from "./Components/Home";
import About from "./Components/About"; 
import Contact from "./Components/Contact";


function App() 
{
  return (
    <div>
      <h1>React Functional Component Example</h1>
      <DisplayText/>

      <hr></hr>

      <h1>React Class Component Example</h1>
      <ClassDisplayText/>

      <hr></hr>

      <h1>React State Example</h1>
      <Counter /> 
      
      <hr></hr>
      
      <Router>
        <div>
          <h1>React Single Page Application</h1>
          <nav>
            <ul>
              <li><Link to="/">Home</Link></li>
              <li><Link to="/about">About</Link></li>
              <li><Link to="/contact">Contact</Link></li>
            </ul>
          </nav>

          {/* Define Routes */}
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </div>
      </Router>

    </div>
  );
}

export default App;
