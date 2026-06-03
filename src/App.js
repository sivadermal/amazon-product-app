import React from "react";
import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";

import ProductListingPage from "./pages/ProductListingPage";
import ProductDetailsPage from "./pages/ProductDetailsPage";
import "./styles/main.css";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          element={<ProductListingPage />}
        />

        <Route
          path="/product/:id"
          element={<ProductDetailsPage />}
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;