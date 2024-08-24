
import Navbar from "./Components/Navbar/Navbar";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Shop from "./Pages/Shop";
import Cart from "./Pages/Cart";
import Login from "./Pages/Login";
import ShopCategory from "./Pages/ShopCategory";
import Product from "./Pages/Product";
import Footer from "./Components/Footer/Footer";
import bannermen from "./Components/Assets/bannerm.png"
import bannerwomen from "./Components/Assets/bannerw.png"
import bannerkids from "./Components/Assets/bannerk.png"
import SignUp from "./Pages/SignUp.jsx";


function App() {
  return (
    
    <div>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Shop />}></Route>
          <Route path="/cart" element={<Cart />}></Route>
          <Route path="/login" element={<Login />}></Route>
          <Route path="/register" element={<SignUp />}></Route>
          <Route path="/mens" element={<ShopCategory banner={bannermen}  category="mens" />}></Route>
          <Route
            path="/womens"
            element={<ShopCategory banner={bannerwomen} category="womens" />}
          ></Route>
          <Route path="/kids" element={<ShopCategory banner={bannerkids} category="kids" />}></Route>
          <Route path="/product" element={<Product />}>
            <Route path=":productId" element={<Product/>}></Route>
          </Route>
        </Routes>
        {/* <Footer/> */}
      </BrowserRouter>
    </div>
  );
}

export default App;
