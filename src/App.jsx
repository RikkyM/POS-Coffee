import { useState } from "react";

const coffee = [
  {
    id: 1,
    nama: "iced cappuccino",
    gambar: "/image/Capucino Iced.jpg",
    harga: 29000,
    deskripsi: `Lorem ipsum dolor, sit amet consectetur adipisicing elit. Facere, laudantium explicabo adipisci.`,
  },
  {
    id: 2,
    nama: "iced classic latte",
    gambar: "/image/classiclatteiced.jpg",
    harga: 24000,
    deskripsi: `Lorem ipsum dolor, sit amet consectetur adipisicing elit. Facere, laudantium explicabo adipisci.`,
  },
  {
    id: 3,
    nama: "double iced shaken latte",
    gambar: "/image/Double Iced Shaken Latte.jpg",
    harga: 33000,
    deskripsi: `Lorem ipsum dolor, sit amet consectetur adipisicing elit. Facere, laudantium explicabo adipisci.`,
  },
];

const App = () => {
  const [cart, setCart] = useState([]);
  const [size, setSize] = useState({});
  const [qty, setQty] = useState(0);

  const handleIncrementQty = (id) => {
    setQty((prevQty) => ({
      ...prevQty,
      [id]: (prevQty[id] || 0) + 1,
    }));
  };

  const handleDecrementQty = (id) => {
    setQty((prevQty) => ({
      ...prevQty,
      [id]: Math.max((prevQty[id] || 0) - 1, 0),
    }));
  };

  const handleChangeQty = (id, value) => {
    const newValue = parseInt(value, 10);
    if (!isNaN(newValue) && newValue >= 0) {
      setQty((prevQty) => ({
        ...prevQty,
        [id]: newValue,
      }));
    } else {
      setQty((prevQty) => ({
        ...prevQty,
        [id]: 0,
      }));
    }
  };

  const handleSelectedSize = (id, size) => {
    setSize((prevSize) => ({
      ...prevSize,
      [id]: size,
    }));
  };

  const handleAddToCart = (id) => {
    const selectedQty = qty[id] || 0;
    const selectedSizeValue = size[id];

    if (selectedQty > 0 && selectedSizeValue) {
      const checkItem = cart.findIndex(
        (item) => item.id === id && item.size === selectedSizeValue
      );

      if (checkItem !== -1) {
        const updateCart = [...cart];
        updateCart[checkItem].qty += selectedQty;
        setCart(updateCart);
      } else {
        setCart([
          ...cart,
          {
            id,
            qty: selectedQty,
            size: selectedSizeValue,
          },
        ]);
      }
      qty[id] = 0;
      setSize((prevSize) => ({
        ...prevSize,
        [id]: "",
      }));
    } else {
      alert("Please select quantity and size before adding to cart");
    }

    console.log(cart);
  };

  return (
    <section className="min-h-screen flex bg-[#E4E0E1]">
      <div className="h-screen w-full p-5">
        <h1 className="text-3xl font-bold">Coffee menu</h1>
        <div className="flex flex-wrap gap-4 mt-5">
          {coffee.map((item) => (
            <div
              className="max-w-sm w-full  bg-white rounded-md p-3 select-none"
              key={item.id}
            >
              <div className="flex gap-2">
                <img
                  draggable="false"
                  className="max-h-36 rounded-md"
                  src={item.gambar}
                  alt={item.nama}
                />
                <div>
                  <h3 className="capitalize font-bold">{item.nama}</h3>
                  <p className=" text-[#FF9458] font-semibold">
                    {item.harga.toLocaleString("id-ID", {
                      style: "currency",
                      currency: "IDR",
                    })}
                  </p>
                  <p className="text-xs text-gray-500">{item.deskripsi}</p>
                  <div className="flex items-center gap-2 px-1.5 py-2">
                    <p className="font-bold text-gray-700">Size</p>
                    <div className="flex items-center justify-center">
                      <input
                        type="radio"
                        id={`small_${item.id}`}
                        className="peer hidden"
                        name={`size_${item.id}`}
                        onChange={() => handleSelectedSize(item.id, "Small")}
                        checked={size[item.id] === "Small"}
                      />
                      <label
                        className="border border-black/20 rounded-full px-4 py-2 cursor-pointer peer-checked:bg-black peer-checked:text-white font-semibold text-sm"
                        htmlFor={`small_${item.id}`}
                      >
                        Small
                      </label>
                    </div>
                    <div className="flex items-center justify-center">
                      <input
                        type="radio"
                        id={`large_${item.id}`}
                        className="peer hidden"
                        name={`size_${item.id}`}
                        onChange={() => handleSelectedSize(item.id, "Large")}
                        checked={size[item.id] === "Large"}
                      />
                      <label
                        className="border border-black/20 rounded-full px-4 py-2 cursor-pointer peer-checked:bg-black peer-checked:text-white font-semibold text-sm"
                        htmlFor={`large_${item.id}`}
                      >
                        Large
                      </label>
                    </div>
                  </div>
                </div>
              </div>
              <div className="flex items-center justify-between pl-4">
                <div className="flex items-center justify-center py-2 max-w-36">
                  <button
                    className="text-xl font-bold border border-black/40 p-1.5 rounded-full"
                    onClick={() => handleDecrementQty(item.id)}
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="size-5"
                      viewBox="0 0 16 16"
                    >
                      <rect
                        width="10"
                        height="1.5"
                        x="3"
                        y="7.25"
                        fill="currentColor"
                        rx=".5"
                      />
                    </svg>
                  </button>
                  <input
                    type="text"
                    className="w-12 bg-transparent text-lg font-semibold text-center focus:outline-none"
                    maxLength="3"
                    value={qty[item.id] || 0}
                    onChange={(e) => handleChangeQty(item.id, e.target.value)}
                  />
                  <button
                    className="text-xl font-bold border border-black/40 p-1.5 rounded-full"
                    onClick={() => handleIncrementQty(item.id)}
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="size-5"
                      viewBox="0 0 16 16"
                    >
                      <path
                        fill="currentColor"
                        d="M8.25 3a.5.5 0 0 1 .5.5v3.75h3.75a.5.5 0 0 1 .5.5v.5a.5.5 0 0 1-.5.5H8.75v3.75a.5.5 0 0 1-.5.5h-.5a.5.5 0 0 1-.5-.5V8.75H3.5a.5.5 0 0 1-.5-.5v-.5a.5.5 0 0 1 .5-.5h3.75V3.5a.5.5 0 0 1 .5-.5z"
                      />
                    </svg>
                  </button>
                </div>
                <button
                  onClick={() => handleAddToCart(item.id)}
                  className="w-full border border-[#FFA16C] select-none text-[#FFA16C] mx-8 rounded-full py-2 font-bold text-white relative focus:before:content-['Added_to_cart'] focus:before:h-full focus:before:w-full focus:before:bg-[#FFA16C] focus:before:outline-0 before:text-white focus:before:absolute focus:before:left-0 focus:before:top-0 focus:before:rounded-full focus:before:flex focus:before:items-center focus:before:justify-center"
                >
                  Add to cart
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="h-screen max-w-[250px] w-full bg-white">
        {cart.map((data, index) => {
          const dataCoffee = coffee.find((item) => item.id === data.id);
          return <div key={index + 1}>{dataCoffee.nama}</div>;
        })}
      </div>
    </section>
  );
};

export default App;
