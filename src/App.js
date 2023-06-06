import { Route, Routes } from "react-router-dom";
import "./App.scss";
import Navigation from "./components/Navigation/Navigation";
import Sidebar from "./components/Sidebar/Sidebar";
import { useEffect } from "react";

function App() {
  useEffect(() => {
    const rootElement = document.documentElement;
    rootElement.setAttribute("translate", "no");
  }, []);

  return (
    <div className="App">
      <Navigation />
      <div className="main-content">
        <Sidebar />
        <Routes>
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
    </div>
  );
}

export default App;
