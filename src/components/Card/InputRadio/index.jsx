import Input from "./Input";
import Label from "./Label";

const InputRadio = (props) => {
  const { data, ukuran, onChange, checked, children } = props;
  return (
    <>
      <div>
        <Input
          data={data}
          ukuran={ukuran}
          onChange={onChange}
          checked={checked}
        />
        <Label ukuran={ukuran} data={data}>{children}</Label>
      </div>
    </>
  );
};

export default InputRadio;
