import Hakkimizda from "./pages/Hakkimizda";
import Anasayfa from "./pages/Anasayfa";
import Menu from "./pages/Menu";
import Iletisim from "./pages/Iletisim";
import Header from "./components/Header";
import Footer from "./components/Footer";
import { useState } from "react";
// BrowerRouter >> Routes container'ı >> Routes Route'rın container'ı
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  // const [page, setPage] = useState("Anasayfa");

  return (
    <div className="App d-flex flex-column min-vh-100 ">
      {/* page değeri anasayfa ise Anasayfa Componentsını gösteriyor */}

      <div className="flex-grow-1">
        <BrowserRouter>
          <Header />
          <Routes>
            {/* path {"/"} belli pathlere bağlanın sayfayı gösterir */}
            <Route path={"/"} element={<Anasayfa />} />
            <Route path={"/menu"} element={<Menu />} />
            <Route path={"/hakkimizda"} element={<Hakkimizda />} />
            <Route path={"/iletisim"} element={<Iletisim />} />
          </Routes>
          <Footer />
        </BrowserRouter>
      </div>
    </div>
  );
}

export default App;
