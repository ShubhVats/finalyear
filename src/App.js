import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import Data from "./screens/Data";
import Blog from "./screens/Blog";
import Album from "./screens/Album";
import SignUp from "./screens/SignUp";
import Pricing from "./screens/Pricing";
import Checkout from "./screens/Checkout";
import SignInSide from "./screens/SignInSide";
import UniversityData from "./screens/UniversityData";

function App() {
  // const Login = () => {
  //   fire.auth().createUserWithEmailAndPassword("Shubh69@gmail.com", "123456");
  // };

  return (
    <Router>
      <div className="App">
        <Route path="/UniversityData" component={UniversityData} />
        <Route path="/Data" component={Data} />
        <Route path="/" exact component={Blog} />
        <Route path="/Exams" component={Album} />
        <Route path="/SignUp" component={SignUp} />
        <Route path="/Pricing" component={Pricing} />
        <Route path="/Checkout" component={Checkout} />
        <Route path="/SignInSide" component={SignInSide} />
      </div>
    </Router>
  );
}

export default App;
