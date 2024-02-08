import "./App.css";
import { Route, Routes } from "react-router-dom";
import { HomePage } from "./pages/HomePage";
function App() {
  return (
    <Routes>
      <Route path="/" element={<HomePage/>}/>
      {/* <HomePage/> */}
      {/* <ShopPage /> */}
      {/* <ContactPage/> */}
      {/* <AccountPage/> */}
      {/* <CartPage /> */}
      {/* <BlogPages/> */}
      {/* <BlogDetailsPage /> */}
      {/* <ProductDetails/> */}
    </Routes>
  );
}

export default App;
