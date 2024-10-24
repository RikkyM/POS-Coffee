const CardDetails = (props) => {
  const { data, size } = props;
  return (
    <>
      <p className="font-bold capitalize">{data.nama}</p>
      <p className="text-[#FFA16C] font-semibold">
        Rp{" "}
        {size[data.id] === "large"
          ? data.harga.large.toLocaleString("id-ID", {
              styles: "currency",
              currency: "IDR",
            })
          : data.harga.reguler.toLocaleString("id-ID", {
              styles: "currency",
              currency: "IDR",
            })}
      </p>
      <p className="text-xs text-slate-400 mt-0.5">{data.deskripsi}</p>
    </>
  );
};

export default CardDetails;
