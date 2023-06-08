import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Views from "./views/Views";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Views />}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
