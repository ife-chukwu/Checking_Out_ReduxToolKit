import { NavBar } from "./Component/NavBar";
import { Route, Routes } from "react-router-dom";
import { Home } from "./Component/Pages/Home";
import { CartItems } from "./Component/Pages/CartItems";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Modal } from "./Component/Modal";
import { useSelector } from "react-redux";

function App() {
  const { isOpen } = useSelector((store) => store.modal);

  return (
    <div className="w-full h-full items-center">
      <NavBar />
      {isOpen && <Modal />}
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/cart-items" element={<CartItems />} />
      </Routes>
      <ToastContainer />
    </div>
  );
}

export default App;
