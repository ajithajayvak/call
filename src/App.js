import "./App.css";
import { BrowserRouter, Route, Routes, Link } from "react-router-dom";
import Usage from "./Pages/Usage";
import Home from "./Pages/Home";
import Chart from "./Pages/Chart";
import Settings from "./Pages/Settings";
import Header from "./components/Header";
import Details from "./Pages/Details";
import Not from "./Pages/Not";
import Marks from "./Pages/Marks";
import Score from "./Pages/Score";
import Price from "./Pages/Price";
function App() {
  return (
    <BrowserRouter>
      <div>
        <Header />
      </div>

      <Routes>
        <Route path="usage" element={<Usage />} />
        <Route path="/" element={<Home />} />
        <Route path="chart" element={<Chart />} />
        <Route path="settings" element={<Settings />} />
        <Route path="details/:userId" element={<Details />}>
          <Route path="marks" element={<Marks />}></Route>
          <Route path="score" element={<Score />}></Route>
          <Route path="price" element={<Price />}></Route>
        </Route>

        <Route path="*" element={<Not />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
