import { useState } from "react";

export const useProduct = () => {
  const [size, setSize] = useState({});
  const [qty, setQty] = useState({});

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

  const isValidProducts = (id) => {
    return size[id] && qty[id] && qty[id] > 0;
  };

  const reset = (id) => {
    setSize({ ...size, [id]: ""});
    setQty({ ...qty, [id]: 0})
  }

  return {
    // State
    size,
    qty,

    // Handlers
    handleSizeChange,
    handleQtyChange,
    handleIncrementQty,
    handleDecrementQty,

    // Functions
    isValidProducts,
    reset
  };
};
