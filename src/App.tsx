import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import SidebarDesktop from "./components/SidebarDesktop";
import PlayerDesktop from "./components/PlayerDesktop";
import TopNavbarMobile from "./components/TopNavbarMobile";
import { Container, Row } from "react-bootstrap";
import SingleCard from "./components/SingleCard";

import img1 from "./assets/images/1a.png";
import img2 from "./assets/images/1b.png";

function App() {
  return (
    <div
      className="d-flex min-vh-100 text-white"
      style={{ backgroundColor: "rgba(31, 31, 31)" }}
    >
      <SidebarDesktop />

      <div className="flex-grow-1 d-flex flex-column">
        <TopNavbarMobile />
        <PlayerDesktop />

        <main className="p-0">
          <Container fluid>
            <Row>
              <SingleCard
                mainTitle="Nuova Stazione Radio"
                subTitle="Rilassati, al resto pensiamo noi!"
                img={img1}
              />

              <SingleCard
                mainTitle="Nuova Stazione Radio"
                subTitle="Ecco la nuova casa della musica latina!"
                img={img2}
              />
            </Row>
          </Container>
        </main>
      </div>
    </div>
  );
}

export default App;
