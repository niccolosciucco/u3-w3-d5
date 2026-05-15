import { Col } from "react-bootstrap";

interface SingleCardAltroProps {
  text: string;
}

const SingleCardAltro = ({ text }: SingleCardAltroProps) => {
  return (
    <Col xs={12} lg={4} className="py-1">
      <div
        className="d-flex justify-content-between align-items-center py-2 px-3 rounded-4"
        style={{
          backgroundColor: "rgba(42, 42, 42)",
          cursor: "pointer",
        }}
      >
        <p className="mb-0 text-danger fw-bold">{text}</p>
        <i className="bi bi-chevron-right text-danger"></i>
      </div>
    </Col>
  );
};

export default SingleCardAltro;
