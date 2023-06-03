function HeroBanner() {
  return (
    <div
      className="p-5 text-center bg-image rounded-3"
      style={{
        backgroundImage:
          "url('https://files.kfcku.com/uploads/media/header_2.jpg')",
        height: "400px",
      }}
    >
      <div
        className="mask"
        style={{ backgroundColor: "rgba(0, 0, 0, 0.6)" }}
      ></div>
    </div>
  );
}

export default HeroBanner;
