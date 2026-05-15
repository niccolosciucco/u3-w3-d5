import { Card, Col } from "react-bootstrap";

interface PlayListCardProps {
  img: string;
  title?: string;
  artist?: string;
}

const PlayListCard = ({ img, title, artist }: PlayListCardProps) => {
  return (
    <Col xs={4} lg={2} className="mb-4">
      <Card className="bg-transparent border-0">
        <Card.Img
          variant="top"
          src={img}
          className="rounded-3 shadow-sm mb-2"
          style={{ aspectRatio: "1/1", objectFit: "cover" }}
        />
        <Card.Body className="p-0">
          {title && (
            <Card.Title
              className="text-white mb-0 text-truncate"
              style={{ fontSize: "0.85rem", fontWeight: "500" }}
            >
              {title}
            </Card.Title>
          )}

          {artist && (
            <Card.Text
              className="text-secondary text-truncate"
              style={{ fontSize: "0.8rem" }}
            >
              {artist}
            </Card.Text>
          )}
        </Card.Body>
      </Card>
    </Col>
  );
};

export default PlayListCard;
