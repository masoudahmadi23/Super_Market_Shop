import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import ProductsContextProvider from "./context/ProductsContextProvider";
import Store from "./pages/Store";
import CartContextProvider from "./context/CartContextProvider";
import Layout from "./components/layout/Layout";
import DetailsPage from "./pages/DetailsPage";
import CheckoutPage from "./pages/CheckoutPage";
import ContactUs from "./pages/ContactUs";
import DetailsCategori from "./pages/DetailsCategori";
import AboutPage from "./pages/AboutPage";
import FavoritPage from "./pages/FavoritPage";
import NotFoundPage from "./pages/NotFoundPage";
import SignUpLogin from "./pages/SignUpLogin";
import Dashboard from "./pages/Dashboard";
function App() {
  return (
    <ProductsContextProvider>
      <CartContextProvider>
        <Layout>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/shop" element={<Store />} />
            <Route path="/product/:id" element={<DetailsPage />} />
            <Route path="/categori/:id" element={<DetailsCategori />} />
            <Route path="/checkout" element={<CheckoutPage />} />
            <Route path="/contactus" element={<ContactUs />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/favorit" element={<FavoritPage />} />
            <Route path="/login" element={<SignUpLogin />} />
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/*" element={<NotFoundPage />} />
          </Routes>
        </Layout>
      </CartContextProvider>
    </ProductsContextProvider>
  );
}

export default App;
