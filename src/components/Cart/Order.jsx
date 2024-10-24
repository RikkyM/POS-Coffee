import Button from "../Button";

const Order = (props) => {
  const { total, handleCheckout } = props;
  return (
    <>
      <div className="flex items-center justify-between my-3">
        <p className="text-lg font-semibold text-[#C6C6C6]">Total:</p>
        <p className="text-[#FFA16C] font-semibold">
          Rp{" "}
          {total.toLocaleString("id-ID", {
            styles: "currency",
            currency: "IDR",
          })}
        </p>
      </div>
      <Button
        onClick={handleCheckout}
        classname="bg-[#FFA16C] text-white py-3 text-lg font-semibold px-6 mb-3 mx-5 rounded-full"
      >
        Place an order
      </Button>
    </>
  );
};

export default Order;
