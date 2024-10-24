import { useState, useEffect } from "react";

export const useCart = (datas) => {
  const [cart, setCart] = useState([]);
  const [total, setTotal] = useState(0);

  useEffect(() => {
    if (cart.length > 0) {
      const sum = cart.reduce((acc, item) => {
        const product = datas.find((product) => product.id === item.id);
        const price = product.harga[item.size];
        return acc + price * item.qty;
      }, 0);
      setTotal(sum);
    } else {
      setTotal(0);
    }
  }, [cart, datas]);

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

  const addToCart = (id, size, qty) => {
    if (!size || !qty) return;

    const existingCartItem = cart.find(
      (item) => item.id === id && item.size === size
    );

    if (existingCartItem) {
      setCart(
        cart.map((item) =>
          item.id === id && item.size === size
            ? { ...item, qty: item.qty + qty }
            : item
        )
      );
    } else {
      setCart([...cart, { id, qty, size }]);
    }
  };

  return {
    cart,
    total,
    handleQtyCartChange,
    handleIncrementQtyCart,
    handleDecrementQtyCart,
    addToCart,
  };
};
