//This is a React component
//Import reactstrap components into this Component
import React, { Component } from 'react';
import{
    Container,
    Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  // eslint-disable-next-line
  UncontrolledDropdown,
  // eslint-disable-next-line
  DropdownToggle,
  // eslint-disable-next-line
  DropdownMenu,
  // eslint-disable-next-line
  DropdownItem,
  // eslint-disable-next-line
  NavbarText
} from 'reactstrap';


//Component Class Creation
class AppNavBar extends Component {
    state = {
        isOpen: false
    }

    toggle = () => {
        this.setState({
            isOpen: !this.state.isOpen
        });
    }

    render() {
        return(
            <div>
                <Navbar color="dark" dark expand="sm" className="mb-5">
                    <Container>
                        <NavbarBrand href="/"> Shopping List </NavbarBrand>
                        <NavbarToggler onClick={this.toggle}/>
                        <Collapse isOpen={this.state.isOpen} navbar>
                            <Nav className="ml-auto" navbar>
                                <NavItem>
                                    <NavLink href="https://romocesar.github.io/">Personal Portfolio</NavLink>
                                </NavItem>
                            </Nav>
                        </Collapse>
                    </Container>
                </Navbar>                
            </div>
        );
    }
}

//This file returns/outputs AppNavBar component
export default AppNavBar;