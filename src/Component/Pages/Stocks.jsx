import { ChevronUp, ChevronDown } from "../../projectIcons";
import {
  addToCart,
  increasePrice,
  decreasePrice,
  removeItem,
} from "../../Features/nameState";

import { useDispatch } from "react-redux";
export const Stocks = ({ id, name, image, price }) => {
  const dispatch = useDispatch();
  return (
    <div className="w-full h-full flex justify-center mt-10">
      <div className="md:w-[60%] flex flex-col md:flex-row justify-between items-center h-full">
        <div className="flex md:flex-row flex-col w-full md:w-[90%] md:h-2/5  md:gap-10 items-center">
          <figure className="mb-5 w-4/5 md:w-2/5 border-black/10 border rounded-xl">
            <img src={image} alt={name} className="w-full h-full rounded-xl" />
          </figure>
          <div className="flex flex-col w-4/5 md:w-auto">
            <div className="w-full text-start flex flex-row md:flex-col justify-center items-center md:items-start">
              <p className="text-xl text-black/70 font-medium mb-3 flex w-4/5 md:w-auto">
                {name}
              </p>
              <p className="text-[#df3838] md:w-20 mb-3">
                ${price.toFixed(2)}
              </p>
            </div>

            <div className="flex justify-center">
              <div className="flex flex-row md:flex-col gap-3 md:gap-0 w-[75%] md:w-full">
                <button
                  className="text-start flex mb-2 gap-1 bg-[#2c2c2c] hover:bg-[black] duration-300 transition rounded-sm text-white w-[100px] justify-center h-6 items-center"
                  onClick={() => dispatch(removeItem(id))}
                >
                  Remove
                </button>
                <button
                  className="text-start bg-[white] hover:bg-[#f8e6e6] duration-300 transition  rounded-sm text-black w-[100px] justify-center h-6 items-center flex"
                  onClick={() => dispatch(addToCart(id))}
                >
                  Add
                </button>
              </div>
              <div className="md:hidden flex w-2/5 justify-center gap-1">
                <button
                  className="cursor-pointer md:bg-[white] duration-300 transition  rounded-l-xl h-6 "
                  onClick={() => dispatch(increasePrice({ id }))}
                >
                  <ChevronUp />
                </button>

                <button
                  className="cursor-pointer md:bg-[#2c2c2c] duration-300 transition h-6 text-black rounded-r-xl"
                  onClick={() => dispatch(decreasePrice({ id }))}
                >
                  <ChevronDown />
                </button>
              </div>
            </div>
          </div>
        </div>
        <div className="md:flex flex-col hidden">
          <button
            className="cursor-pointer bg-[white] hover:bg-[#f8e6e6] duration-300 transition  px-2 rounded-t-xl py-1 "
            onClick={() => dispatch(increasePrice({ id }))}
          >
            <ChevronUp />
          </button>

          <button
            className="cursor-pointer bg-[#2c2c2c] hover:bg-[#000000] duration-300 transition  px-2 py-1 text-white rounded-b-xl"
            onClick={() => dispatch(decreasePrice({ id }))}
          >
            <ChevronDown />
          </button>
        </div>
      </div>
    </div>
  );
};
