import { useDispatch } from "react-redux";
import { closeModal } from "../Features/ModalFeature";
import { clearCart } from "../Features/nameState";

export const Modal = () => {
  const dispatch = useDispatch();
  const close = () =>
    setTimeout(() => {
      dispatch(closeModal());
    }, 300);
  const clear = () =>
    setTimeout(() => {
      dispatch(clearCart());
    }, 300);
  return (
    <aside className="w-full h-full fixed bg-black/10 z-40">
      <div className="absolute  flex items-center justify-center h-full w-full">
        <div className="bg-white h-40 md:w-2/5 w-[90%] flex justify-center items-center rounded-md md:rounded-sm">
          <div className="w-4/5 md:w-3/5">
            <h1 className="w-full flex justify-center font-bold text-lg">
              Clear items in your cart
            </h1>
            <div className="w-full flex justify-between gap-5 md:gap-10 mt-5">
              <button
                onClick={() => {
                  close();
                  clear();
                }}
                className="bg-black/80 w-full md:w-3/5 h-7 rounded-md text-white font-bold"
              >
                Clear
              </button>
              <button
                onClick={() => close()}
                className="bg-[#b91b1b] w-full md:w-3/5 h-7 rounded-md text-white font-bold"
              >
                Cancel
              </button>
            </div>
          </div>
        </div>
      </div>
    </aside>
  );
};
