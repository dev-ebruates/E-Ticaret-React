import "./App.css";
import { Route, Routes } from "react-router-dom";
import { HomePage } from "./pages/HomePage";
import ShopPage from "./pages/ShopPage";
import BlogPages from "./pages/BlogPages";
import ContactPage from "./pages/ContactPage";
import CartPage from "./pages/CartPage";
import AccountPage from "./pages/AccountPage";
import ProductDetailsPage from "./pages/ProductDetailsPage";
import BlogDetailsPage from "./pages/BlogDetailsPage";
import AdminUserPage from "./pages/admin/AdminUserPage";
function App() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/shop" element={<ShopPage />} />
      <Route path="/blog" element={<BlogPages />} />
      <Route path="/contact" element={<ContactPage />} />
      <Route path="/cart" element={<CartPage />} />
      <Route path="/account" element={<AccountPage />} />
      <Route path="/product/:id" element={<ProductDetailsPage />} />
      <Route path="/blog/:id" element={<BlogDetailsPage />} />
      {/*burada yıldız demek tüm admin sayfalarını direk yönlendirmek demek  */}
      <Route path="/admin/">
        <Route path="users" element={<AdminUserPage />} />
      </Route>
    </Routes>
  );
}

export default App;
