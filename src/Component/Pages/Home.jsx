import { Stocks } from "../../Component/Pages/Stocks";
import { useSelector } from "react-redux";
export const Home = () => {
  const { cartItems } = useSelector((store) => store.name);
  return (
    <div className="h-full w-full">
      <div className="w-full h-full flex justify-center items-center">
        <div className="w-full h-full mt-24 md:mt-40">
          <h1 className="md:font-semibold text-xl md:text-2xl text-black/80 flex justify-center">
            Home of Classic Bags
          </h1>

          {cartItems?.length < 1 && (
            <div className="h-full w-full mt-20">
              <h1 className="flex justify-center w-full h-full items-center text-xl">
                Your bag is empty!
              </h1>
            </div>
          )}

          {cartItems.map((item) => {
            return <Stocks key={item.id} {...item} />;
          })}
        </div>
      </div>
    </div>
  );
};
