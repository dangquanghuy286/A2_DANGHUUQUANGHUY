import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";

import TravelBookingForm from "./components/TravelBookingForm/TravelBookingForm.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <TravelBookingForm />
  </StrictMode>
);
