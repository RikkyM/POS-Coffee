import InputRadio from "./InputRadio";

const CardSize = (props) => {
  const { data, size, handleSizeChange } = props;
  return (
    <div className="flex gap-2">
      <InputRadio
        data={data}
        ukuran={"reguler"}
        onChange={() => handleSizeChange(data.id, "reguler")}
        checked={size[data.id] === "reguler"}
      >
        Reguler
      </InputRadio>
      <InputRadio
        data={data}
        ukuran={"large"}
        onChange={() => handleSizeChange(data.id, "large")}
        checked={size[data.id] === "large"}
      >
        Large
      </InputRadio>
    </div>
  );
};

export default CardSize;
