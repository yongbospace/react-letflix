import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./Components/Header";
import Home from "./Routes/Home";
import Search from "./Routes/Search";
import Tv from "./Routes/Tv";

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/Tv" element={<Tv />} />
        <Route path="/Search" element={<Search />} />
        <Route path="/*" element={<Home />} />
        <Route path="/movies/:id" element={<Home />} />
      </Routes>
    </BrowserRouter>
  );
}
export default App;
