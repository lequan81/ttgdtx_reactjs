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
            <Route path="/recently/:slug" element={<Pages.Blog />} />
            <Route path="/enroll">
              <Route path="/enroll/grade10" element={<Pages.Grade10 />} />
              <Route
                path="/enroll/tradeschool"
                element={<Pages.TradeSchool />}
              />
              <Route path="/enroll/other" element={<Pages.Other />} />
              <Route path="/enroll/:slug" element={<Pages.Blog />} />
            </Route>
            <Route path="/search">
              <Route path="/search/grade" element={<Pages.Grade />} />

              <Route
                path="/search/extra-activities"
                element={<Pages.Extra />}
              />
              <Route path="/search/:slug" element={<Pages.Blog />} />
            </Route>
            <Route path="/recent" element={<Pages.Recent />}>
              <Route path="/recent/:slug" element={<Pages.Blog />} />
            </Route>
            <Route path="/training" element={<Pages.Training />}>
              <Route path="/training/:slug" element={<Pages.Blog />} />
            </Route>
            <Route path="/ref" element={<Pages.Ref />} />
            <Route path="/signup" element={<Pages.SignUp />} />
            <Route path="/faq" element={<Pages.FAQ />} />
            <Route path="/privacy" element={<Pages.Privacy />} />
            <Route path="/statement" element={<Pages.Statement />} />
            <Route path="*" element={<Pages.ErrorPage />} />
          </Routes>
        </div>
        <Pages.Footer />
      </div>
      <Pages.ScrollToTopBtn />
    </>
  );
}

export default App;
