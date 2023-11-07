import {Container, Nav, Navbar} from "react-bootstrap";

function NavHeader(){
    return(
        <>
            <Navbar bg="light" data-bs-theme="light">
                <Container>
                    <Navbar.Brand href="#home">Navbar</Navbar.Brand>
                    <Nav className="me-auto">
                        <Nav.Link href="#home" className="text-primary">Home</Nav.Link>
                        <Nav.Link href="#features" className="text-primary">Features</Nav.Link>
                        <Nav.Link href="#pricing" className="text-primary">Pricing</Nav.Link>
                    </Nav>
                    <div>
                        <p>Rushiksh Malvadkar</p>
                    </div>
                </Container>
            </Navbar>
        </>
    );
}

export default NavHeader;