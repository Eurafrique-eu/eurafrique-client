import { Route, Routes } from "react-router-dom";
import "./App.scss";
import Navigation from "./components/Navigation/Navigation";

function App() {
  return (
    <div className="App">
      <Navigation />
      <Routes>
        <Route exact path="/" />
        <Route exact path="/FOCUS" />
        <Route exact path="/AJVI-COJEA" />
        <Route exact path="/POLMAR" />
        <Route exact path="/EAGROPOLE" />
        <Route exact path="/IDEA" />
        <Route exact path="/BENEVOLEA" />
        <Route exact path="/DIGEA" />
        <Route exact path="/GM-TV" />
      </Routes>
    </div>
  );
}

export default App;
