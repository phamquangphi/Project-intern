import "./App.css";
import { Route, Routes } from "react-router-dom";
import Home from "./component/Home";
import { PATH } from "./constant/config";
import Login from "./component/Login";
import Register from "./component/Register";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path={PATH.login} element={<Login />} />
      <Route path={PATH.register} element={<Register />} />
    </Routes>
  );
}

export default App;
