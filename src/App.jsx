import "./App.css";
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";

// Pages
import Home from "./pages/Home";
import PrayerRequest from "./pages/PrayerRequest";
import WhyKJV from "./pages/WhyKJV";

//Layuouts
import RootLayout from "./layouts/RootLayout";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<RootLayout />}>
      <Route index element={<Home />} />
      <Route path="prayer-request" element={<PrayerRequest />} />
      <Route path="why-kjv" element={<WhyKJV />} />
    </Route>
  )
);

export default function App() {
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}
