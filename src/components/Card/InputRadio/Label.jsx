const Label = (props) => {
  const { ukuran, data, children } = props;
  return (
    <>
      <label
        htmlFor={`${ukuran}_${data.id}`}
        className="peer-checked:bg-black px-5 py-2 rounded-full text-sm peer-checked:text-white font-semibold border border-gray-300 peer-checked:border-black cursor-pointer"
      >
        {children}
      </label>
    </>
  );
};

export default Label;
