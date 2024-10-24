import List from "./List";
import Order from "./Order";
import Profile from "./Profile";

const Cart = (props) => {
  const {
    cart,
    total,
    handleCheckout,
    handleIncrementQtyCart,
    handleDecrementQtyCart,
    handleQtyCartChange,
    datas,
  } = props;
  return (
    <div className="bg-white w-[380px] select-none overflow-auto">
      <Profile />
      <div className="overflow-auto relative h-[calc(100%_-_90px)]">
        <h2 className="font-bold capitalize text-2xl mx-3 mt-4">cart</h2>
        <div className="h-[calc(100%_-_48px)] flex flex-col overflow-auto">
          <div className="flex flex-col h-full overflow-auto flex-[2]">
            <div className="flex flex-col gap-7 my-5">
              {cart.map((item, index) => {
                const coffee = datas.find((data) => data.id === item.id);
                return (
                  <List
                    key={index + 1}
                    coffee={coffee}
                    item={item}
                    index={index}
                    handleIncrementQtyCart={handleIncrementQtyCart}
                    handleDecrementQtyCart={handleDecrementQtyCart}
                    handleQtyCartChange={handleQtyCartChange}
                  />
                );
              })}
            </div>
          </div>
          <div className="h-1/4 flex flex-col justify-between border-t mx-3">
            <Order total={total} handleCheckout={handleCheckout}/>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;
