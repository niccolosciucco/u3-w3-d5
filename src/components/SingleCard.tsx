import { Col } from "react-bootstrap";

interface SingleCardProps {
  mainTitle: string;
  subTitle: string;
  img: string;
}

const SingleCard = ({ mainTitle, subTitle, img }: SingleCardProps) => {
  return (
    <Col xs={6} className="d-flex flex-column">
      <div
        style={{ minHeight: "70px" }}
        className="d-flex flex-column justify-content-end mb-2"
      >
        <p className="text-secondary fw-bold fs-5 mb-1">{mainTitle}</p>
        <h6 className="text-white mb-0 fs-5">{subTitle}</h6>
      </div>

      <div>
        <img src={img} className="img-fluid rounded-4" alt={subTitle} />
      </div>
    </Col>
  );
};

export default SingleCard;
