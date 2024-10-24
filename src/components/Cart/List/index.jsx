import Input from "../../Input";
import Image from "../../Image";
import Button from "../../Button";

const List = (props) => {
  const { coffee, item, index, handleIncrementQtyCart, handleDecrementQtyCart, handleQtyCartChange } = props;
  return (
    <>
      <div>
        <div className="flex px-3 gap-3">
          <Image
            data={coffee}
            classname="max-h-24 bg-gray-200 p-4 rounded-md"
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
                  {coffee.harga[item.size].toLocaleString("id-ID", {
                    styles: "currency",
                    currency: "IDR",
                  })}
                </p>
                <div className="flex items-center">
                  <Button
                    onClick={() => handleDecrementQtyCart(item.id, item.size)}
                    classname="border rounded-full p-1 border-gray-300"
                    logo="minus"
                    iconSize="size-4"
                  />
                  <Input
                    classname="max-w-9 text-center outline-none h-max text-sm"
                    maxLength={3}
                    value={item.qty}
                    onChange={(e) =>
                      handleQtyCartChange(item.id, e.target.value, item.size)
                    }
                    name={`qtyCart_${index + 1}`}
                    id={`qtyCart_${index + 1}`}
                  />
                  <Button
                    onClick={() => handleIncrementQtyCart(item.id, item.size)}
                    classname="border rounded-full p-1 border-gray-300"
                    logo="plus"
                    iconSize="size-4"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default List;
