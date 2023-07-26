import { Testing } from "../projectIcons";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

export const NavBar = () => {
  const { cartNumber } = useSelector((store) => store.name);
  return (
    <div className="h-full w-full">
      <div className="flex justify-around w-full items-center bg-black/80 h-20 fixed z-40">
        <h1 className="text-white text-2xl font-bold">
          <Link to="/">Toolkit Master</Link>
        </h1>
        <div className="cursor-pointer text-white">
          <p className="h-6 w-6  flex items-center justify-center bg-red-500 rounded-full absolute mt-[-15px] ml-3">
            {cartNumber}
          </p>
          <Link to="/cart-items">
            <Testing />
          </Link>
        </div>
      </div>
    </div>
  );
};
