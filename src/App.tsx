import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import SidebarDesktop from "./components/SidebarDesktop";
import PlayerDesktop from "./components/PlayerDesktop";
import TopNavbarMobile from "./components/TopNavbarMobile";
import { Container, Row } from "react-bootstrap";
import SingleCard from "./components/SingleCard";
import PlayListTitle from "./components/PlayListTitle";
import PlayListCard from "./components/PlayListCard";
import NuoveUscite from "./components/NuoveUscite";
import H1 from "./components/H1";
import Altro from "./components/Altro";
import Footer from "./components/Footer";

import img1 from "./assets/images/1a.png";
import img2 from "./assets/images/1b.png";

import img4 from "./assets/images/2a.png";
import img5 from "./assets/images/2b.png";
import img6 from "./assets/images/2c.png";
import img7 from "./assets/images/2d.png";
import img8 from "./assets/images/2e.png";
import img9 from "./assets/images/2f.png";

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
          <H1 />

          <Container fluid className="mb-3">
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

          <Container>
            <Row className="g-3">
              <PlayListTitle title="Nuovi episodi radio" />
              <PlayListCard img={img4} />
              <PlayListCard img={img5} />
              <PlayListCard img={img6} />
              <PlayListCard img={img7} />
              <PlayListCard img={img8} />
              <PlayListCard img={img9} />
            </Row>
          </Container>

          <Container>
            <Row>
              <NuoveUscite />
            </Row>
          </Container>

          <Container>
            <Row className="g-3">
              <PlayListTitle title="Altro da esplorare" />
              <Altro />
            </Row>
          </Container>

          <Footer />
        </main>
      </div>
    </div>
  );
}

export default App;
