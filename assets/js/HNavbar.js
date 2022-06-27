import React from "react"

import { Navbar, Nav, NavDropdown, Container } from "react-bootstrap"

class HNavbar extends React.Component {
    constructor (props) {
        super(props)
        this.items = {
            [this.props.menu.home] : {
                name    : "WWN",
                action  : this.openPage.bind(this, this.props.menu.home)
            },
            [this.props.menu.about] : {
                name    : "about",
                action  : this.openPage.bind(this, this.props.menu.about)
            },
            [this.props.menu.links] : {
                name    : "links",
                action : this.openPage.bind(this, this.props.menu.links)
            }
        }
    }

    openPage (item) {
        this.props.openPage(item)
    }

    render () {
        let menu  = this.props.menu
        let items = this.items
        return (<>
            <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
                <Container>
                    <Navbar.Brand onClick={items[menu.home].action}>{items[menu.home].name}</Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="me-auto">
                        <Nav.Link onClick={items[menu.about].action}>{items[menu.about].name}</Nav.Link>
                        {/* <NavDropdown title="Dropdown" id="collasible-nav-dropdown">
                            <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                        </NavDropdown> */}
                    </Nav>
                    <Nav>
                        <Nav.Link onClick={items[menu.links].action}>{items[menu.links].name}</Nav.Link>
                    </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </>)
    }
}

export default HNavbar