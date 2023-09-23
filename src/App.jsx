import { useLayoutEffect } from "react";
import { Route, Routes, useLocation } from "react-router-dom";

import Header from "./components/Header";
import Footer from "./components/Footer";
import ScrollToTopBtn from "./components/ScrollToTopBtn";
import Landing from "./pages/Landing";
import About from "./pages/About";
import FAQ from "./pages/FAQ";
import ErrorPage from "./pages/ErrorPage";
import NamHoc from "./pages/TuyenSinh/NamHoc";
import ChuongTrinhKhac from "./pages/TuyenSinh/ChuongTrinhKhac";
import DangKy from "./pages/DangKy";

function App() {
  const location = useLocation();
  useLayoutEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, [location]);
  return (
    <>
      <ScrollToTopBtn />
      <div className="min-h-screen w-full bg-white dark:bg-gray-900 border border-dashed border-red-400">
        <Header />
        <div className="h-full w-full bg-white dark:bg-gray-900">
          <Routes>
            <Route path="/" element={<Landing />} />
            <Route path="/tuyen-sinh/">
              {/* <Route index element={<TuyenSinh />} /> */}
              <Route path="nh-2023" element={<NamHoc />} />
              <Route path="chuong-trinh-khac" element={<ChuongTrinhKhac />} />
            </Route>
            <Route path="/signin" element={<DangKy />} />
            <Route path="/about" element={<About />} />
            <Route path="/faq" element={<FAQ />} />
            <Route path="*" element={<ErrorPage />} />
          </Routes>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default App;
