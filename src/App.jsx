import { Suspense, lazy } from "react";
import { Toaster } from "react-hot-toast";
import Loader from "@components/Loader";
const ScrollToTopBtn = lazy(() => import("@components/ScrollToTopBtn"));
const Header = lazy(() => import("@components/Header"));
const Footer = lazy(() => import("@components/Footer"));
import Routes from "@routes";

function App() {
  return (
    <>
      <div className="min-h-screen w-full flex flex-col bg-white dark:bg-gray-900 select-none">
        <Header />
        <Toaster />
        <div className="flex flex-col w-full h-full flex-grow flex-1 bg-gray-100 dark:bg-gray-900">
          <Suspense fallback={<Loader />}>
            <Routes />
          </Suspense>
        </div>
        <Footer />
      </div>
      <ScrollToTopBtn />
    </>
  );
}

export default App;
