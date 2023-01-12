
// import logo from './logo.svg';
import './App.css';
import { Routes, Route } from "react-router-dom";
import Home from "./components/home";
import Layout from "./components/layout";
import About from "./components/about";

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route component={Layout} index element={<Home />} />
          <Route component={Layout} path="/about" element={<About />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
