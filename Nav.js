import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";

function Nav() {
  return (
    <Navbar
      className="bg-body-tertiary"
      style={{ background: "#36486b", padding: "13px" }}
    >
      <Container>
        <Navbar.Brand
          style={{
            color: "White",
            fontFamily: "san-sarif",
            fontWeight: "bold",
            fontSize: "23px",
          }}
        >
          Financial Management
        </Navbar.Brand>
        <Navbar.Brand
          href=" https://deepesh-parihar-700af6.netlify.app/"
          style={{
            color: "#80ced6",
            fontFamily: "san-sarif",
            fontWeight: "bold",
            fontSize: "20px",
            marginLeft: "73rem",
          }}
        >
          made by @ Deepesh Parihar
        </Navbar.Brand>
        <Navbar.Collapse className="justify-content-end"></Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Nav;
