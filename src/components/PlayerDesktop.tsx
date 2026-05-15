import AccediButton from "./AccediButton";
import MyPlayer from "./MyPlayer";

const PlayerDesktop = () => {
  return (
    <div
      className="d-none d-lg-flex align-items-center justify-content-between p-1 px-2 border-bottom border-secondary"
      style={{ backgroundColor: "rgba(44, 44, 44)" }}
    >
      <MyPlayer />

      <div
        className="flex-grow-1 mx-5 border border-secondary rounded p-2 text-center"
        style={{ backgroundColor: "rgba(77, 77, 77)" }}
      >
        <i className="bi bi-apple me-2"></i>
      </div>

      <div className="d-flex align-items-center gap-3">
        <i className="bi bi-volume-up"></i>
        <input type="range" className="form-range" style={{ width: "80px" }} />
        <AccediButton />
      </div>
    </div>
  );
};

export default PlayerDesktop;
