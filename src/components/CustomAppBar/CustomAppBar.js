import {
  Navbar,
  Container,
  Nav,
  InputGroup,
  FormControl,
  Button,
} from "react-bootstrap";
import styles from "./CustomAppBar.module.css";

const CustomAppBar = ({ label, onSearch }) => {
  return (
    <Navbar bg="dark" expand="lg" sticky="top">
      <Container fluid>
        <Navbar.Brand>
          <a href="/"><img src="../logo.svg" alt="logo" height={70} /></a>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Nav>
          <InputGroup className="mb-3">
            <FormControl 
              placeholder="Search Youtube"
              aria-label="search youtube"
              aria-describedby="basic-addon2"
              onChange={onSearch}
            />
            <Button classname={styles.searchBtn} variant="danger" type="submit">
              Search
            </Button>
            <Button className="mx-3" variant="outline-light" href="/license">
              License
            </Button>
          </InputGroup>
        </Nav>
      </Container>
    </Navbar>
  );
};

export default CustomAppBar;
