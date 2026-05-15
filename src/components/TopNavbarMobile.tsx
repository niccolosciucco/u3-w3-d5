import { Navbar, Container, Offcanvas } from "react-bootstrap";
import MyMenu from "./MyMenu";
import AccediButton from "./AccediButton";
import AppleMusicLogo from "./AppleMusicLogo";

const TopNavbarMobile = () => {
  return (
    <Navbar
      expand="lg"
      variant="dark"
      className="d-lg-none border-bottom border-secondary sticky-top"
      style={{ backgroundColor: "rgba(44, 44, 44)" }}
    >
      <Container fluid>
        <Navbar.Toggle
          aria-controls="offcanvasNavbar"
          className="border-0 p-0"
        />

        <Navbar.Brand href="#">
          <AppleMusicLogo mb="0" pb="1" />
        </Navbar.Brand>

        <AccediButton />

        <Navbar.Offcanvas
          id="offcanvasNavbar"
          placement="start"
          style={{ backgroundColor: "rgba(44, 44, 44)" }}
        >
          <Offcanvas.Header
            closeButton
            closeVariant="white"
            className="border-bottom border-secondary"
          >
            <Offcanvas.Title className="text-white">
              <i className="bi bi-apple me-2"></i> Music
            </Offcanvas.Title>
          </Offcanvas.Header>
          <Offcanvas.Body>
            <MyMenu />
          </Offcanvas.Body>
        </Navbar.Offcanvas>
      </Container>
    </Navbar>
  );
};

export default TopNavbarMobile;
