import { useLayoutEffect, lazy, Suspense } from "react";
import { useRoutes, useLocation } from "react-router-dom";
import * as Pages from "./pages/index.js";
lazy(() => import("./pages/index.js"));

function App() {
  const location = useLocation();
  useLayoutEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, [location]);

  let routes = [
    {
      path: "/",
      children: [
        { index: true, element: <Pages.Landing /> },
        { path: "recently/:slug", element: <Pages.Blog /> },
      ],
    },
    {
      path: "/enroll",
      children: [
        {
          path: "grade10",
          element: (
            <Suspense fallback={<></>}>
              <Pages.Grade10 />
            </Suspense>
          ),
        },
        {
          path: "tradeschool",
          element: (
            <Suspense fallback={<></>}>
              <Pages.TradeSchool />
            </Suspense>
          ),
        },
        {
          path: "other",
          element: (
            <Suspense fallback={<></>}>
              <Pages.Other />
            </Suspense>
          ),
        },
        { path: ":slug", element: <Pages.Blog /> },
      ],
    },
    {
      path: "/search",
      children: [
        {
          path: "grade",
          element: (
            <Suspense fallback={<></>}>
              <Pages.Grade />
            </Suspense>
          ),
        },
        {
          path: "extra-activities",
          element: (
            <Suspense fallback={<></>}>
              <Pages.Extra />
            </Suspense>
          ),
        },
        { path: ":slug", element: <Pages.Blog /> },
      ],
    },
    {
      path: "/recent",
      children: [
        {
          index: true,
          element: (
            <Suspense fallback={<></>}>
              <Pages.Recent />
            </Suspense>
          ),
        },
        { path: ":slug", element: <Pages.Blog /> },
      ],
    },
    {
      path: "/training",
      children: [
        {
          index: true,
          element: (
            <Suspense fallback={<></>}>
              <Pages.Training />
            </Suspense>
          ),
        },
        { path: ":slug", element: <Pages.Blog /> },
      ],
    },
    {
      path: "/signup",
      element: (
        <Suspense fallback={<></>}>
          <Pages.SignUp />
        </Suspense>
      ),
    },
    {
      path: "/ref",
      element: (
        <Suspense fallback={<></>}>
          <Pages.Ref />
        </Suspense>
      ),
    },
    {
      path: "/document",
      element: (
        <Suspense fallback={<></>}>
          <Pages.Document />
        </Suspense>
      ),
    },
    {
      path: "/faq",
      element: (
        <Suspense fallback={<></>}>
          <Pages.FAQ />
        </Suspense>
      ),
    },
    {
      path: "/privacy",
      element: (
        <Suspense fallback={<></>}>
          <Pages.Privacy />
        </Suspense>
      ),
    },
    {
      path: "/statement",
      element: (
        <Suspense fallback={<></>}>
          <Pages.Statement />
        </Suspense>
      ),
    },
    { path: "*", element: <Pages.ErrorPage /> },
  ];

  return (
    <>
      <div className="min-h-screen w-full flex flex-col bg-white dark:bg-gray-900">
        <Pages.Header />
        <div className="flex flex-col w-full h-full flex-grow flex-1 bg-gray-100 dark:bg-gray-900">
          {useRoutes(routes)}
        </div>
        <Pages.Footer />
      </div>
      <Pages.ScrollToTopBtn />
    </>
  );
}

export default App;
