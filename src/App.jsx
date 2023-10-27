import { useLayoutEffect } from "react";
import { Route, Routes, useLocation } from "react-router-dom";

import * as Pages from "./pages/index.js";

function App() {
  const location = useLocation();
  useLayoutEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, [location]);
  return (
    <>
      <div className="min-h-screen w-full flex flex-col bg-white dark:bg-gray-900">
        <Pages.Header />
        <div className="flex flex-col w-full h-full flex-grow flex-1 bg-gray-100 dark:bg-gray-900">
          <Routes>
            <Route path="/" element={<Pages.Landing />} />
            <Route path="/enroll">
              <Route path="/enroll/2023" element={<Pages.CurrentYear />} />
              <Route path="/enroll/other" element={<Pages.EnrollOther />} />
            </Route>
            <Route path="/search">
              <Route path="/search/grade" element={<Pages.Grade />} />
              <Route
                path="/search/extra-activities"
                element={<Pages.Extra />}
              />
            </Route>
            <Route path="/recent" element={<Pages.Recent />} />
            <Route path="/other" element={<Pages.Other />} />
            <Route path="/training" element={<Pages.Training />} />
            <Route path="/signup" element={<Pages.SignUp />} />
            <Route path="/about" element={<Pages.About />} />
            <Route path="/faq" element={<Pages.FAQ />} />
            <Route path="*" element={<Pages.ErrorPage />} />
          </Routes>
        </div>
        <Pages.Footer location={location.pathname} />
      </div>
      <Pages.ScrollToTopBtn />
    </>
  );
}

export default App;
