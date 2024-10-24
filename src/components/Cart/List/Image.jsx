const Image = (props) => {
    const { coffee } = props;
    return (
      <>
        <img
          src={coffee.gambar}
          alt={coffee.nama}
          className="max-h-20 bg-gray-200 p-2.5 rounded-md"
          draggable="false"
        />
      </>
    );
}

export default Image