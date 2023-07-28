import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Views from "./views/Views";
import AllCategory from "./views/categories/AllCategory";
import Header from "./views/header/Header";
import HeaderPart from "./views/header/headerPart/HeaderPart";
import SingleProductView from "./views/singleProduct/SingleProductView";
import Footer from "./views/footer/Footer";

function App() {
  return (
    <BrowserRouter>
      <Header />
      <HeaderPart />
      <Routes>
        <Route path="/" element={<Views />} />
        <Route path="/category" element={<AllCategory />} />
        <Route path="/singleProduct" element={<SingleProductView />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
