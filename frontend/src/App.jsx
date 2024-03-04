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
import UserPage from "./pages/Admin/UserPage";
import CategoryPage from "./pages/Admin/Categories/CategoryPage";
import UpdateCategoryPage from "./pages/Admin/Categories/UpdateCategoryPage";
import CreateCategoryPage from "./pages/Admin/Categories/CreateCategoryPage";
import CreateProductPage from "./pages/Admin/Products/CreateProductPage";
import ProductPage from "./pages/Admin/Products/ProductPage";
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
        <Route path="users" element={<UserPage />} />
        <Route path="categories" element={<CategoryPage />} />
        <Route path="categories/update/:id" element={<UpdateCategoryPage />} />
        <Route path="categories/create" element={<CreateCategoryPage />} />
        <Route path="products/create" element={<CreateProductPage />} />
        <Route path="products" element={<ProductPage />} />




      </Route>
    </Routes>
  );
}

export default App;
