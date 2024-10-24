import { useEffect, useState } from "react";

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
  const [cart, setCart] = useState([]);
  const [size, setSize] = useState([]);
  const [qty, setQty] = useState(0);
  const [total, setTotal] = useState(0);

  useEffect(() => {
    if (cart.length > 0) {
      const sum = cart.reduce((acc, item) => {
        const product = datas.find((product) => product.id === item.id);
        const price = product.harga[item.size];
        return acc + price * item.qty;
      }, 0);
      setTotal(sum);
    }
  }, [cart]);

  const handleQtyCartChange = (id, value, size) => {
    const newQty = parseInt(value, 10);
    if (!isNaN(newQty) && newQty >= 0) {
      setCart(
        cart.map((item) =>
          item.id === id && item.size === size ? { ...item, qty: newQty } : item
        )
      );
    } else {
      setCart(cart.filter((item) => !(item.id === id && item.size === size)));
    }
  };

  const handleIncrementQtyCart = (id, size) => {
    setCart(
      cart.map((item) =>
        item.id === id && item.size === size
          ? { ...item, qty: item.qty + 1 }
          : item
      )
    );
  };

  const handleDecrementQtyCart = (id, size) => {
    setCart((prevCart) => {
      return prevCart
        .map((item) => {
          if (item.id === id && item.size === size) {
            return { ...item, qty: item.qty - 1 };
          }
          return item;
        })
        .filter((item) => item.qty > 0);
    });
  };

  const handleQtyChange = (id, value) => {
    const newQty = parseInt(value, 10);
    if (!isNaN(newQty) && newQty >= 0) {
      setQty({
        ...qty,
        [id]: newQty,
      });
    } else {
      setQty({
        ...qty,
        [id]: 0,
      });
    }
  };

  const handleIncrementQty = (id) => {
    setQty({
      ...qty,
      [id]: (qty[id] || 0) + 1,
    });
  };

  const handleDecrementQty = (id) => {
    setQty({
      ...qty,
      [id]: Math.max((qty[id] || 0) - 1, 0),
    });
  };

  const handleSizeChange = (id, size) => {
    setSize((prevState) => ({
      ...prevState,
      [id]: size,
    }));
  };

  const handleAddToCart = (id) => {
    if (!size[id]) {
      return;
    }

    if (!qty[id] || qty[id] <= 0) return;

    const existingCartItem = cart.find(
      (item) => item.id === id && item.size === size[id]
    );

    if (existingCartItem) {
      setCart(
        cart.map((item) =>
          item.id === id && item.size === size[id]
            ? { ...item, qty: item.qty + qty[id], size: size[id] }
            : item
        )
      );
    } else {
      setCart([...cart, { id, qty: qty[id], size: size[id] }]);
    }

    setSize({
      ...size,
      [id]: "",
    });
    setQty({
      ...qty,
      [id]: 0,
    });
  };

  return (
    <div className="bg-[#F8F8F8]">
      <div className="h-screen max-w-screen-2xl mx-auto flex bg-[#F8F8F8]">
        <div className="w-full p-3">
          <h2 className="text-3xl font-semibold">Coffee menu</h2>
          <div className="flex flex-wrap gap-2.5 mt-3">
            {datas.map((data, index) => (
              <div
                className="p-3 bg-[#FFF] rounded-md max-w-sm w-full shadow-sm select-none"
                key={index + 1}
              >
                <div className="flex gap-4">
                  <img
                    src={data.gambar}
                    alt={data.nama}
                    className="max-h-32 bg-gray-200 p-4 rounded-md"
                    draggable="false"
                  />
                  <div>
                    <p className="font-bold capitalize">{data.nama}</p>
                    <p className="text-[#FFA16C] font-semibold">
                      Rp{" "}
                      {size[data.id] === "large"
                        ? data.harga.large.toLocaleString("id-ID", {
                            styles: "currency",
                            currency: "IDR",
                          })
                        : data.harga.reguler.toLocaleString("id-ID", {
                            styles: "currency",
                            currency: "IDR",
                          })}
                    </p>
                    <p className="text-xs text-slate-400 mt-0.5">
                      {data.deskripsi}
                    </p>
                    <div className="flex mt-4 gap-2">
                      <h3 className="font-semibold">Size</h3>
                      <div className="flex gap-2">
                        <div>
                          <input
                            type="radio"
                            id={`reguler_${data.id}`}
                            name={`size_${data.id}`}
                            className="peer hidden"
                            checked={size[data.id] === "reguler"}
                            onChange={() =>
                              handleSizeChange(data.id, "reguler")
                            }
                            value="reguler"
                          />
                          <label
                            htmlFor={`reguler_${data.id}`}
                            className="peer-checked:bg-black px-5 py-2 rounded-full text-sm peer-checked:text-white font-semibold border border-gray-300 peer-checked:border-black cursor-pointer"
                          >
                            Reguler
                          </label>
                        </div>
                        <div>
                          <input
                            type="radio"
                            id={`large_${data.id}`}
                            name={`size_${data.id}`}
                            className="peer hidden"
                            checked={size[data.id] === "large"}
                            onChange={() => handleSizeChange(data.id, "large")}
                            value="large"
                          />
                          <label
                            htmlFor={`large_${data.id}`}
                            className="peer-checked:bg-black px-5 py-2 rounded-full text-sm peer-checked:text-white font-semibold border border-gray-300 peer-checked:border-black cursor-pointer"
                          >
                            Large
                          </label>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="flex justify-between mt-0.5">
                  <div className="flex gap-2 items-center pl-1">
                    <button
                      onClick={() => handleDecrementQty(data.id)}
                      className="border rounded-full p-1 border-gray-300"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="size-6"
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
                      className="w-10 text-center outline-none h-max"
                      maxLength={3}
                      value={qty[data.id] || 0}
                      onChange={(e) => handleQtyChange(data.id, e.target.value)}
                      id={`qty_${data.id}`}
                    />
                    <button
                      onClick={() => handleIncrementQty(data.id)}
                      className="border rounded-full p-1 border-gray-300"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="size-6"
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
                    onClick={() => handleAddToCart(data.id)}
                    className="h-10 px-6 mt-3 font-semibold w-full ml-12 rounded-full border border-[#FFA16C] text-[#FFA16C]"
                  >
                    Add To Cart
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="bg-white w-[390px] select-none overflow-auto">
          <div className="py-5 px-3 flex gap-3 border-b">
            <img
              src="/image/profile.jpeg"
              alt="profil"
              draggable="false"
              className="max-h-12 rounded-full aspect-square"
            />
            <div className="flex flex-col justify-center">
              <p className="capitalize font-semibold text-sm">rikky mahendra</p>
              <p className="text-xs font-semibold text-gray-300">
                rikky.mahendra54@gmail.com
              </p>
            </div>
          </div>
          <div className=" overflow-auto relative h-[calc(100%_-_90px)]">
            <h2 className="font-bold capitalize text-2xl mx-3 mt-4">cart</h2>
            <div className="flex flex-col h-full overflow-auto max-h-[380px] h-full ">
              <div className="flex flex-col gap-7 my-5">
                {cart.map((item, index) => {
                  const coffee = datas.find((data) => data.id === item.id);
                  return (
                    <div key={index + 1}>
                      <div className="flex px-3 gap-3">
                        <img
                          src={coffee.gambar}
                          alt={coffee.nama}
                          className="max-h-20 bg-gray-200 p-2.5 rounded-md"
                          draggable="false"
                        />
                        <div className="w-full">
                          <p className="capitalize font-bold">{coffee.nama}</p>
                          <div>
                            <p className="capitalize text-sm font-semibold text-gray-400">
                              {item.size}
                            </p>
                            <div className="flex items-center gap-3 justify-between w-full mt-3">
                              <p className="text-sm">
                                Rp{" "}
                                {(
                                  item.qty * coffee.harga[item.size]
                                ).toLocaleString("id-ID", {
                                  styles: "currency",
                                  currency: "IDR",
                                })}
                              </p>
                              <div className="flex items-center">
                                <button
                                  onClick={() =>
                                    handleDecrementQtyCart(item.id, item.size)
                                  }
                                  className="border rounded-full p-1 border-gray-300"
                                >
                                  <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    className="size-4"
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
                                  className="max-w-9 text-center outline-none h-max text-sm"
                                  maxLength={3}
                                  value={item.qty}
                                  onChange={(e) =>
                                    handleQtyCartChange(
                                      item.id,
                                      e.target.value,
                                      item.size
                                    )
                                  }
                                  name={`qtyCart_${index + 1}`}
                                  id={`qtyCart_${index + 1}`}
                                />
                                <button
                                  onClick={() =>
                                    handleIncrementQtyCart(item.id, item.size)
                                  }
                                  className="border rounded-full p-1 border-gray-300"
                                >
                                  <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    className="size-4"
                                    viewBox="0 0 16 16"
                                  >
                                    <path
                                      fill="currentColor"
                                      d="M8.25 3a.5.5 0 0 1 .5.5v3.75h3.75a.5.5 0 0 1 .5.5v.5a.5.5 0 0 1-.5.5H8.75v3.75a.5.5 0 0 1-.5.5h-.5a.5.5 0 0 1-.5-.5V8.75H3.5a.5.5 0 0 1-.5-.5v-.5a.5.5 0 0 1 .5-.5h3.75V3.5a.5.5 0 0 1 .5-.5z"
                                    />
                                  </svg>
                                </button>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
            <div>
              <div className="flex items-center justify-between px-3">
                <p>Total:</p>
                <p>
                  Rp{" "}
                  {total.toLocaleString("id-ID", {
                    styles: "currency",
                    currency: "IDR",
                  })}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;
