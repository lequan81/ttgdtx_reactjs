import { lazy, Suspense } from "react";
import { useRoutes } from "react-router-dom";
import Loader from "@components/Loader";

const Blog = lazy(() => import("@components/Blog"));
const Landing = lazy(() => import("@pages/Landing"));
const Grade10 = lazy(() => import("@pages/Enroll/Grade10"));
const TradeSchool = lazy(() => import("@pages/Enroll/TradeSchool"));
const Other = lazy(() => import("@pages/Enroll/Other"));
const Grade = lazy(() => import("@pages/Search/Grade"));
const Extra = lazy(() => import("@pages/Search/Extra"));
const Recent = lazy(() => import("@pages/Recent"));
const Training = lazy(() => import("@pages/Training"));
const SignUp = lazy(() => import("@pages/SignUp"));
const Document = lazy(() => import("@pages/Document"));
const Ref = lazy(() => import("@pages/Ref"));
const FAQ = lazy(() => import("@pages/FAQ"));
const Privacy = lazy(() => import("@pages/Privacy"));
const Statement = lazy(() => import("@pages/Statement"));
const ErrorPage = lazy(() => import("@pages/ErrorPage"));

export default function Routes() {
  let routes = useRoutes([
    {
      path: "/",
      children: [
        {
          index: true,
          element: (
            <Suspense fallback={<Loader />}>
              <Landing />
            </Suspense>
          ),
        },
        {
          path: "recently/:slug",
          element: (
            <Suspense falllback={<Loader />}>
              <Blog />
            </Suspense>
          ),
        },
      ],
    },
    {
      path: "/enroll",
      children: [
        {
          path: "grade10",
          index: true,
          element: (
            <Suspense fallback={<Loader />}>
              <Grade10 />
            </Suspense>
          ),
        },
        {
          path: "tradeschool",
          element: (
            <Suspense fallback={<Loader />}>
              <TradeSchool />
            </Suspense>
          ),
        },
        {
          path: "other",
          element: (
            <Suspense fallback={<Loader />}>
              <Other />
            </Suspense>
          ),
        },
        {
          path: ":slug",
          element: (
            <Suspense falllback={<Loader />}>
              <Blog />
            </Suspense>
          ),
        },
      ],
    },
    {
      path: "/search",
      children: [
        {
          path: "grade",
          index: true,
          element: (
            <Suspense fallback={<Loader />}>
              <Grade />
            </Suspense>
          ),
        },
        {
          path: "extra-activities",
          element: (
            <Suspense fallback={<Loader />}>
              <Extra />
            </Suspense>
          ),
        },
        {
          path: ":slug",
          element: (
            <Suspense falllback={<Loader />}>
              <Blog />
            </Suspense>
          ),
        },
      ],
    },
    {
      path: "/recent",
      children: [
        {
          index: true,
          element: (
            <Suspense fallback={<Loader />}>
              <Recent />
            </Suspense>
          ),
        },
        {
          path: ":slug",
          element: (
            <Suspense falllback={<Loader />}>
              <Blog />
            </Suspense>
          ),
        },
      ],
    },
    {
      path: "/training",
      children: [
        {
          index: true,
          element: (
            <Suspense fallback={<Loader />}>
              <Training />
            </Suspense>
          ),
        },
        {
          path: ":slug",
          element: (
            <Suspense falllback={<Loader />}>
              <Blog />
            </Suspense>
          ),
        },
      ],
    },
    {
      path: "/ref",
      element: (
        <Suspense fallback={<Loader />}>
          <Ref />
        </Suspense>
      ),
    },
    {
      path: "/document",
      element: (
        <Suspense fallback={<Loader />}>
          <Document />
        </Suspense>
      ),
    },
    {
      path: "/signup",
      element: (
        <Suspense fallback={<Loader />}>
          <SignUp />
        </Suspense>
      ),
    },
    {
      path: "/faq",
      element: (
        <Suspense fallback={<Loader />}>
          <FAQ />
        </Suspense>
      ),
    },
    {
      path: "/privacy",
      element: (
        <Suspense fallback={<Loader />}>
          <Privacy />
        </Suspense>
      ),
    },
    {
      path: "/statement",
      element: (
        <Suspense fallback={<Loader />}>
          <Statement />
        </Suspense>
      ),
    },
    {
      path: "*",
      element: (
        <Suspense fallback={<Loader />}>
          <ErrorPage />
        </Suspense>
      ),
    },
  ]);

  return routes;
}
