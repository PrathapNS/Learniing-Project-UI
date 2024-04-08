import "./App.css";
import { BrowserRouter, Routes, Route, Switch } from "react-router-dom";
import LoginPage from "./Component/LoginPage";
import Home from "./Screen/Home";
import Cart from "./Screen/Cart";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route exact path="/" Component={Home} />
          <Route exact path="/LoginPage" Component={LoginPage} />
          <Route exact path="/Cart" Component={Cart} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
