import { useSelector } from "react-redux";
import { Testing, BackArrow } from "../../projectIcons";
import { useDispatch } from "react-redux";
import { removeItemFromBag, totalNumber } from "../../Features/nameState";
import { Fragment, useEffect } from "react";
import { Modal } from "../../Component/Modal";
import { openModal } from "../../Features/ModalFeature";
import { Link } from "react-router-dom";

export const CartItems = () => {
  const { bag, amount } = useSelector((store) => store.name);
  const { isOpen } = useSelector((store) => store.modal);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(totalNumber());
  });

  return (
    <div className=" w-full flex justify-center">
      {isOpen && <Modal />}
      <div className="w-4/5 pt-24 md:pt-40">
        {bag.length > 0 ? (
          <div className="w-full h-full">
            <h2 className="w-full flex justify-center mb-10 text-lg">
              Your cart items looks great!
            </h2>
            <div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-5 justify-items-center">
                {bag.map((item) => {
                  return (
                    <div key={item.id} className="w-full">
                      <figure className="w-full h-4/5 relative hover:sub cursor-pointer transition-all duration-1000 delete-dad">
                        <div className="w-full absolute h-1/5 delete bg-black/50 backdrop-bg-sm backdrop-blur-[1px] text-white">
                          <button className="w-full h-4/5 hover:bg-white px-5 py-1 hover:text-[black] font-bold transition duration-500 rounded-b-lg">
                            Buy
                          </button>
                          <button
                            onClick={() => dispatch(removeItemFromBag(item.id))}
                            className="w-full h-4/5 hover:text-[white] hover:bg-[red] px-5 py-1 font-bold transition duration-500 rounded-b-lg"
                          >
                            Delete
                          </button>
                        </div>

                        <img
                          src={item.image}
                          alt={item.name}
                          className="w-full h-full"
                        />
                        <span className="flex w-full justify-between py-2 text-white px-2 md:px-10 bg-black/80">
                          <figcaption>{item.name}</figcaption>
                          <figcaption>${item.price.toFixed(2)}</figcaption>
                        </span>
                      </figure>
                    </div>
                  );
                })}
              </div>
              <div className="w-full border-t-black/20 border">
                <div className="w-full flex justify-between py-2 text-[#df3f3f] font-bold">
                  {" "}
                  <p className="">Total :</p>
                  <p>${amount.toFixed(2)}</p>
                </div>
              </div>
            </div>

            <div className="w-full flex justify-center ">
              {bag?.length < 1 ? (
                ""
              ) : (
                <button
                  className="w-full py-2 bg-[#d81d1d] my-5 rounded-md text-white font-semibold hover:bg-[#ff1818] transition duration-300"
                  onClick={() => {
                    dispatch(openModal());
                  }}
                >
                  Clear Cart
                </button>
              )}
            </div>
          </div>
        ) : (
          <Fragment>
            <div className="w-full h-full flex justify-center gap-10">
              <Link to="/" className="hidden md:flex">
                <BackArrow />
              </Link>
              <div className="flex md:flex-row w-full md:gap-3 gap-1 items-center md:justify-center">
                <h1 className="md:text-xl text-md text-black/70 flex justify-center">
                  You have absolutely nothing in your
                </h1>
                <div className="text-[#6e6b6b] md:text-[white] md:bg-black/50  md:px-4 py-1 rounded-sm  md:flex">
                  <Testing className="text-5xl text-[red]" />
                </div>
              </div>
            </div>
            <Link
              to="/"
              className="md:hidden w-full justify-center flex text-[#696666]"
            >
              <BackArrow />
            </Link>
          </Fragment>
        )}
      </div>
    </div>
  );
};
