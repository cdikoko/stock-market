import { React, useState } from "react"
import "../styling/Nav.css"
import { Link, useHistory } from 'react-router-dom'
import { Nav, Container, Navbar, ListGroup, Card } from 'react-bootstrap'
import { IoIosArrowDown, IoIosArrowUp } from 'react-icons/io'

function NavbarComponent() {

    const [loggedIn, setLoggedIn] = useState(false)
    const [showDropdown, setShowDropdown] = useState(false)

    const history = useHistory()

    const loginOrOut = (e) => {
        e.preventDefault()
        if (loggedIn) {
            setLoggedIn(false)
        } else {
            setLoggedIn(true)
        }
    }

    const options = [
        {
            name: "Register",
            handler: "/company/register"
        }
    ]

    const onClickDropdown = () => {
        setShowDropdown(true)
        history.push('/')
    }

    return (

        <>
            <Navbar bg="dark" variant="dark" expand="md">
                <Container>
                    <Navbar.Brand href="">Lemontez Exchange</Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="me-auto">
                            <Nav.Link href="" onClick={() => onClickDropdown()}>
                                Companies
                            </Nav.Link>
                            <Nav.Link onClick={() => history.push('/company/view')}>Stock Exchange</Nav.Link>
                            <Nav.Link className="login-btn" onClick={(e) => loginOrOut(e)} href="">{loggedIn ? "Logout" : "Login"}</Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
            {showDropdown &&
                <div className="tab-items">
                    <IoIosArrowUp onClick={() => setShowDropdown(false)} />
                    <Card>
                        <ListGroup variant="flush" >
                            {options.map(companyOption => <ListGroup.Item onClick={() => setShowDropdown(!showDropdown)} className="dropdown" key={companyOption.name}>
                                <Link to={companyOption.handler}>{companyOption.name}</Link></ListGroup.Item>)}
                        </ListGroup>
                    </Card>
                </div>

            }
        </>


    );
}


export default NavbarComponent