const MyPlayer = () => {
  return (
    <div
      className="d-flex gap-3 fs-5 align-items-center"
      style={{ cursor: "pointer" }}
    >
      <i className="bi bi-shuffle text-secondary"></i>
      <i className="bi bi-skip-start-fill text-secondary"></i>
      <i className="bi bi-play-fill fs-2 text-secondary"></i>
      <i className="bi bi-skip-end-fill text-secondary"></i>
      <i className="bi bi-repeat text-secondary"></i>
    </div>
  );
};

export default MyPlayer;
