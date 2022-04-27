import Nav from "./components/Nav/Nav.jsx";
import Cards from "./components/Cards/Cards.jsx";
import  About  from "./components/About/About.jsx";
import { Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Nav/>
      <main>
      <Route exact path='/' component={Cards}/>
      <Route exact path='/about' component={About}/>
      </main>
    </div>
  );
}

export default App;
