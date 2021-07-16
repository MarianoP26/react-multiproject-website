import './index.css';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

//Components
import Navbar from './components/Navbar';

//Pages
import Home from './pages/Home';
import About from './pages/About';
import Algos from './pages/Algos';

function App() {
  return (
    <div>
      <Router>
        <Navbar/>
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/about">
            <About />
          </Route>
          <Route path="/algos">
            <Algos />
          </Route>
        </Switch>
      </Router>
      
    </div>
  );
}

export default App;
