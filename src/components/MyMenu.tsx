const MyMenu = () => {
  return (
    <nav className="nav flex-column gap-2">
      <form className="mb-2">
        <div className="position-relative">
          <i
            className="bi bi-search position-absolute text-secondary"
            style={{
              left: "10px",
              top: "50%",
              transform: "translateY(-50%)",
            }}
          ></i>
          <input
            type="text"
            className="form-control bg-dark border-secondary text-white ps-5"
          />
        </div>
      </form>
      <a href="#" className="nav-link text-white p-2">
        <i className="bi bi-house-door text-danger me-2"></i> Home
      </a>
      <a
        href="#"
        className="nav-link text-danger rounded p-2"
        style={{
          backgroundColor: "rgba(57, 57, 59)",
        }}
      >
        <i className="bi bi-grid me-2"></i> Novità
      </a>
      <a href="#" className="nav-link text-white p-2">
        <i className="bi bi-broadcast text-danger me-2"></i> Radio
      </a>
    </nav>
  );
};

export default MyMenu;
