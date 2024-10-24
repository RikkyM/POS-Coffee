const Image = (props) => {
  const { data, classname } = props;
  return (
    <>
      <img
        src={data.gambar}
        alt={data.nama}
        className={classname}
        draggable="false"
      />
    </>
  );
};

export default Image;
