import { BrowserRouter as Router, Routes, Route } from "react-router";
import React, { Suspense, lazy } from "react";
const SignIn = lazy(() => import("./pages/AuthPages/SignIn"));
const SignUp = lazy(() => import("./pages/AuthPages/SignUp"));
const NotFound = lazy(() => import("./pages/OtherPage/NotFound"));
const UserProfiles = lazy(() => import("./pages/UserProfiles"));
const SearchComponent = lazy(() => import("./pages/Searchbar/searchbar"));
const ToDo = lazy(() => import("./pages/ToDo/ToDo"));
const Home = lazy(() => import("./pages/Dashboard/Home"));
const Orders = lazy(() => import("./pages/Orders"));
const Purchasing = lazy(() => import("./pages/Purchasing"));
const CompleteForm = lazy(() => import("./pages/Forms/CompleteForm"));
const Roles = lazy(() => import("./pages/OtherPage/Roles"));
const Permissions = lazy(() => import("./pages/OtherPage/Permissions"));
const StyleMatrix = lazy(() => import("./components/common/StyleMatrix"));
const Tracking = lazy(() => import("./pages/Tracking"));
import AppLayout from "./layout/AppLayout";
import { ScrollToTop } from "./components/common/ScrollToTop";

export default function App() {
  return (
    <>
      <Router>
        <ScrollToTop />
        <Suspense
          fallback={
            <div className="min-h-screen flex items-center justify-center text-base text-gray-600 dark:text-gray-300">
              Loading...
            </div>
          }
        >
          <Routes>
          {/* Dashboard Layout */}
          <Route element={<AppLayout />}>
            <Route index path="/" element={<Home />} />

            {/* Others Page */}
            <Route path="/profile" element={<UserProfiles />} />
            <Route path="/orders" element={<Orders />} />
            <Route path="/orders/purchasing" element={<Purchasing />} />
            <Route path="/style-matrix" element={<StyleMatrix />} />
            <Route path="/roles" element={<Roles />} />
            <Route path="/permissions" element={<Permissions />} />
            {/* <Route path="/calendar" element={<Calendar />} /> */}
            {/* <Route path="/blank" element={<Blank />} /> */}
            <Route path="/search" element={<SearchComponent />} />
            <Route path="/todo" element={<ToDo />} />
            <Route path="/tracking" element={<Tracking />} />
            {/* Forms */}
            <Route path="/complete-form" element={<CompleteForm />} />
            {/* <Route path="/form-elements" element={<FormElements />} /> */}

            {/* Tables */}
            {/* <Route path="/basic-tables" element={<BasicTables />} /> */}

            {/* Ui Elements */}
            {/* <Route path="/alerts" element={<Alerts />} /> */}
            {/* <Route path="/avatars" element={<Avatars />} />
            <Route path="/badge" element={<Badges />} />
            <Route path="/buttons" element={<Buttons />} />
            <Route path="/images" element={<Images />} />
            <Route path="/videos" element={<Videos />} /> */}

            {/* Charts */}
            {/* <Route path="/line-chart" element={<LineChart />} />
            <Route path="/bar-chart" element={<BarChart />} /> */}
          </Route>

          {/* Auth Layout */}
          <Route path="/signin" element={<SignIn />} />
          <Route path="/signup" element={<SignUp />} />

          {/* Fallback Route */}
          <Route path="*" element={<NotFound />} />
          </Routes>
        </Suspense>
      </Router>
    </>
  );
}
