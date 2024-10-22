import { useEffect, useState } from "react";

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
  const [qty, setQty] = useState(0);

  const handleQtyCart = (id, value) => {
    const newValue = parseInt(value, 10);
    if (!isNaN(newValue) && newValue >= 0) {
      setCart(
        cart.map((item) => (item.id === id ? { ...item, qty: newValue } : item))
      );
    } else {
        setCart(cart.filter((item) => item.id !== id));
    }
  };

  const handleQty = (id, value) => {
    const newValue = parseInt(value, 10);
    if (!isNaN(newValue) && newValue >= 0) {
      setQty({
        ...qty,
        [id]: newValue,
      });
    } else {
      setQty({
        ...qty,
        [id]: 0,
      });
    }
  };

  const handleIncrementQtyCart = (id) => {
    setCart(
      cart.map((item) =>
        item.id === id ? { ...item, qty: item.qty + 1 } : item
      )
    );
  };

  const handleDecrementQtyCart = (id) => {
    setCart(cart.map(item => item.id === id ? { ...item, qty: item.qty - 1 } : item).filter(item => item.qty > 0))
  }

  const handleIncrement = (id) => {
    setQty({
      ...qty,
      [id]: qty[id] ? qty[id] + 1 : 1,
    });
  };

  const handleAddToCart = (id) => {
    if (qty[id] > 0) {
      if (cart.find((item) => item.id === id)) {
        setCart(
          cart.map((item) =>
            item.id === id ? { ...item, qty: item.qty + qty[id] } : item
          )
        );
      } else {
        setCart([
          ...cart,
          {
            id,
            qty: qty[id],
          },
        ]);
      }
    }
  };

  return (
    <>
      <div className="h-screen">
        <div className="flex gap-20">
          {coffee.map((item, index) => (
            <div key={index + 1}>
              <p>{item.nama}</p>
              <p>
                Rp{" "}
                {item.harga.toLocaleString("id-ID", {
                  styles: "currency",
                  currency: "IDR",
                })}
              </p>
              <div>
                <button>-</button>
                <input
                  type="text"
                  className="text-center"
                  value={qty[item.id] || 0}
                  onChange={(e) => handleQty(item.id, e.target.value)}
                  maxLength={3}
                />
                <button onClick={() => handleIncrement(item.id)}>+</button>
              </div>
              <button
                onClick={() => handleAddToCart(item.id)}
                className="bg-green-500 w-full mt-4 py-2 rounded-md font-bold text-white"
              >
                Add
              </button>
            </div>
          ))}
        </div>
        <div className="flex gap-10 mt-10">
          {cart.map((item, index) => {
            const data = coffee.find((coffee) => coffee.id === item.id);

            return (
              <div key={index + 1}>
                <p>{data.nama}</p>
                <p>
                  Rp{" "}
                  {data.harga.toLocaleString("id-ID", {
                    styles: "currency",
                    currency: "IDR",
                  })}
                </p>
                <p>
                  Rp{" "}
                  {(item.qty * data.harga).toLocaleString("id-ID", {
                    styles: "currency",
                    currency: "IDR",
                  })}
                </p>
                <button onClick={() => handleDecrementQtyCart(item.id)}>
                  -
                </button>
                <input
                  className="text-center"
                  type="text"
                  value={item.qty}
                  onChange={(e) => handleQtyCart(item.id, e.target.value)}
                  maxLength={3}
                />
                <button onClick={() => handleIncrementQtyCart(item.id)}>
                  +
                </button>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default App;
