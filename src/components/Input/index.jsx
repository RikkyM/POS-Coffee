const Input = (props) => {
  const { id, classname, value, onChange, name = '' } = props;
  return (
    <>
      <input
        type="text"
        className={classname}
        maxLength={3}
        value={value}
        onChange={onChange}
        id={id}
        name={name}
      />
    </>
  );
};

export default Input;
