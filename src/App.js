import Nav from "./components/Nav/Nav.jsx";
import Cards from "./components/Cards/Cards.jsx";
import  About  from "./components/About/About.jsx";
import Ciudad from "./components/Ciudad/Ciudad.jsx";
import { Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Nav/>
      <main>
      <Route exact path='/' component={Cards}/>
      <Route exact path='/about' component={About}/>
      <Route path='/ciudad/:ciudadId' component={Ciudad}></Route>
      </main>
    </div>
  );
}

export default App;
