import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.scss";
import Home from "./Component/Main/Home";
import Header from "./Component/Top/Header";
const App = () => {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
