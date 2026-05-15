import { Col, Container, Row, Form } from "react-bootstrap";
import MyPlayer from "./MyPlayer";
import mowgli from "../assets/images/mowgli.jpg";

const MusicPlayer = () => {
  return (
    <div
      className="fixed-bottom"
      style={{
        backgroundColor: "rgba(25, 25, 25)",
        height: "60px",
        zIndex: 10,
      }}
    >
      <Container fluid className="h-100">
        <Row className="h-100 align-items-center">
          <Col md={3} className="d-none d-md-flex align-items-center">
            <img
              src={mowgli}
              alt="cover"
              className="rounded"
              style={{ width: "40px", height: "40px", objectFit: "cover" }}
            />
            <div className="ms-3 text-truncate">
              <p
                className="mb-0 text-white fw-bold"
                style={{ fontSize: "0.85rem" }}
              >
                Mowgli
              </p>
              <p className="mb-0 text-secondary" style={{ fontSize: "0.7rem" }}>
                Tedua
              </p>
            </div>
          </Col>

          <Col xs={12} md={6} className="d-flex justify-content-center">
            <MyPlayer />
          </Col>

          <Col
            md={3}
            className="d-none d-md-flex align-items-center justify-content-end gap-2 text-secondary"
          >
            <i className="bi bi-list fs-5"></i>
            <i className="bi bi-volume-up fs-6"></i>
            <Form.Range className="custom-range" style={{ width: "80px" }} />
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default MusicPlayer;
