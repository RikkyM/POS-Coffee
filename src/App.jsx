import Card from "./components/Card";
import Cart from "./components/Cart";
import { useProduct } from "./hooks/useProduct";
import { useCart } from "./hooks/useCart";

const datas = [
  {
    id: 1,
    nama: "espresso",
    gambar: "/image/espresso.png",
    harga: {
      reguler: 15000,
      large: 20000,
    },
    deskripsi: `Lorem ipsum dolor, sit amet consectetur adipisicing elit.`,
  },
  {
    id: 2,
    nama: "ice coffee",
    gambar: "/image/ice-coffee.png",
    harga: {
      reguler: 25000,
      large: 30000,
    },
    deskripsi: `Lorem ipsum dolor, sit amet consectetur adipisicing elit.`,
  },
  {
    id: 3,
    nama: "dalgona coffee",
    gambar: "/image/dalgona.png",
    harga: {
      reguler: 27000,
      large: 32000,
    },
    deskripsi: `Lorem ipsum dolor, sit amet consectetur adipisicing elit.`,
  },
];

const App = () => {
  const {
    cart,
    total,
    handleQtyCartChange,
    handleIncrementQtyCart,
    handleDecrementQtyCart,
    addToCart,
  } = useCart(datas);

  const {
    size,
    qty,
    handleSizeChange,
    handleQtyChange,
    handleIncrementQty,
    handleDecrementQty,
    isValidProducts,
    reset,
  } = useProduct();

  const handleAddToCart = (id) => {
    if (isValidProducts(id)) {
      addToCart(id, size[id], qty[id]);
      reset(id);
    }
  };

  const handleCheckout = () => {
    if (cart.length > 0) {
      alert("Terima Kasih, Pesanan anda akan di proses");
    }
  };

  return (
    <div className="bg-[#F8F8F8]">
      <div className="h-screen max-w-screen-2xl mx-auto flex bg-[#F8F8F8]">
        <div className="w-full p-3 overflow-auto">
          <h2 className="text-3xl font-semibold mt-4">Coffee menu</h2>
          <div className="flex flex-wrap gap-2.5 mt-3">
            {datas.map((data, index) => (
              <Card
                key={index + 1}
                data={data}
                size={size}
                qty={qty}
                handleSizeChange={handleSizeChange}
                handleAddToCart={handleAddToCart}
                handleIncrementQty={handleIncrementQty}
                handleDecrementQty={handleDecrementQty}
                handleQtyChange={handleQtyChange}
                datas={datas}
              />
            ))}
          </div>
        </div>
        <Cart
          cart={cart}
          datas={datas}
          total={total}
          handleCheckout={handleCheckout}
          handleIncrementQtyCart={handleIncrementQtyCart}
          handleDecrementQtyCart={handleDecrementQtyCart}
          handleQtyCartChange={handleQtyCartChange}
        />
      </div>
    </div>
  );
};

export default App;
