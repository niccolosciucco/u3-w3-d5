import { Container, Row } from "react-bootstrap";
import SingleCardAltro from "./SingleCardAltro";

const Altro = () => {
  return (
    <Container className="mt-4">
      {" "}
      <Row className="g-2">
        {" "}
        <SingleCardAltro text="Esplora per genere" />
        <SingleCardAltro text="Decenni" />
        <SingleCardAltro text="Attività e stati d'animo" />
        <SingleCardAltro text="Worldwide" />
        <SingleCardAltro text="Classifiche" />
        <SingleCardAltro text="Audio spaziale" />
        <SingleCardAltro text="Video musicali" />
        <SingleCardAltro text="Nuovi artisti" />
        <SingleCardAltro text="Hit del passato" />
      </Row>
    </Container>
  );
};

export default Altro;
