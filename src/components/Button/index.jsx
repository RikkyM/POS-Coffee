const Button = (props) => {
  const { onClick, classname, children = '', logo = '', iconSize } = props;
  return (
    <>
      <button onClick={onClick} className={classname}>
        <Icon logo={logo} iconSize={iconSize} />
        {children}
      </button>
    </>
  );
};

const Icon = ({ logo, iconSize }) => {
  if (logo === "minus") {
    return (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className={iconSize}
        viewBox="0 0 16 16"
      >
        <rect
          width="10"
          height="1.5"
          x="3"
          y="7.25"
          fill="currentColor"
          rx=".5"
        />
      </svg>
    );
  } else if (logo === "plus") {
    return (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className={iconSize}
        viewBox="0 0 16 16"
      >
        <path
          fill="currentColor"
          d="M8.25 3a.5.5 0 0 1 .5.5v3.75h3.75a.5.5 0 0 1 .5.5v.5a.5.5 0 0 1-.5.5H8.75v3.75a.5.5 0 0 1-.5.5h-.5a.5.5 0 0 1-.5-.5V8.75H3.5a.5.5 0 0 1-.5-.5v-.5a.5.5 0 0 1 .5-.5h3.75V3.5a.5.5 0 0 1 .5-.5z"
        />
      </svg>
    );
  }
};

export default Button;
