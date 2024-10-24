import Button from "../Button";
import Input from "../Input";
import CardDetails from "./CardDetails";
import CardSize from "./CardSize";
import Image from "../Image";

const Card = (props) => {
  const {
    data,
    size,
    qty,
    handleSizeChange,
    handleAddToCart,
    handleIncrementQty,
    handleDecrementQty,
    handleQtyChange,
  } = props;
  return (
    <div className="p-3 bg-[#FFF] rounded-md max-w-sm w-full shadow-sm select-none">
      <div className="flex gap-4">
        <Image data={data} classname="max-h-32 bg-gray-200 p-4 rounded-md" />
        <div>
          <CardDetails data={data} size={size} />
          <div className="flex mt-4 gap-2">
            <h3 className="font-semibold">Size</h3>
            <CardSize
              data={data}
              size={size}
              handleSizeChange={handleSizeChange}
            />
          </div>
        </div>
      </div>
      <div className="flex justify-between mt-0.5 items-center">
        <div className="flex gap-2 items-center pl-1">
          <Button
            onClick={() => handleDecrementQty(data.id)}
            classname="border rounded-full p-1 border-gray-300 bg"
            logo="minus"
            iconSize="size-6"
          />
          <Input
            id={`qty_${data.id}`}
            data={data}
            value={qty[data.id] || 0}
            onChange={(e) => handleQtyChange(data.id, e.target.value)}
            classname="w-10 text-center outline-none h-max"
          />
          <Button
            onClick={() => handleIncrementQty(data.id)}
            classname="border rounded-full p-1 border-gray-300"
            logo="plus"
            iconSize="size-6"
          ></Button>
        </div>

        <Button
          onClick={() => handleAddToCart(data.id)}
          classname="h-10 px-6 mt-3 font-semibold w-full ml-4 rounded-full border border-[#FFA16C] text-[#FFA16C]"
        >
          Add to cart
        </Button>
      </div>
    </div>
  );
};

export default Card;
