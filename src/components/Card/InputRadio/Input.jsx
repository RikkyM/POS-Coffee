const Input = (props) => {
  const { data, ukuran, onChange, checked } = props;
  return (
    <>
      <input
        type="radio"
        id={`${ukuran}_${data.id}`}
        name={`size_${data.id}`}
        className="peer hidden"
        checked={checked}
        onChange={onChange}
        value={ukuran}
      />
    </>
  );
};

export default Input;
