import React, { useState } from "react";
import {
  Collapse,
  Navbar,
  NavbarToggler,
  Nav,
  NavItem,
  NavLink,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  CustomInput,
  FormGroup,
  Form,
  Input,
  Label
} from "reactstrap";

function Sort() {
  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => setIsOpen(!isOpen);

  return (
    <div className="row border-top border-bottom my-4 py-3">
      <div>
        <Navbar color="light" expand="lg">
          <span className="navbar-text">SORT BY:</span>
          <NavbarToggler onClick={toggle} />
          <Collapse isOpen={isOpen} navbar>
            <Nav className="mr-auto" navbar>
              <UncontrolledDropdown nav inNavbar>
                <DropdownToggle nav caret>
                  PRICE
                </DropdownToggle>
                <DropdownMenu right>
                  <DropdownItem>
                    <CustomInput
                      type="range"
                      id="exampleCustomRange"
                      name="customRange"
                      min="10" max="188"
                    />
                  </DropdownItem>
                </DropdownMenu>
              </UncontrolledDropdown>
              <UncontrolledDropdown nav inNavbar>
                <DropdownToggle nav caret>
                  COLORS
                </DropdownToggle>
                <DropdownMenu left style={{width: '250px'}}>
                <div className="container col-12">
                <div className="row">
                <div className="col-5" style={{borderRight: '1px solid lightgrey'}}>
                  <Label check>
                <Input type="checkbox" id="checkbox2"><i className="fas fa-circle" style={{color: 'black'}}></i> Black</Input>
                </Label>
                <Label check></Label>
                <Input type="checkbox" id="checkbox2"><i className="fas fa-circle" style={{color: 'teal'}}></i> Teal</Input>
                <Label check></Label>
                <Input type="checkbox" id="checkbox2"><i className="fas fa-circle" style={{color: 'gold'}}></i> Gold</Input>
                <Label check></Label>
                <Input type="checkbox" id="checkbox2"><i className="fas fa-circle" style={{color: 'grey'}}></i> Grey</Input>
                <Label check></Label>
                <Input type="checkbox" id="checkbox2"><i className="fas fa-circle" style={{color: 'orange'}}></i> Orange</Input>
                <Label check></Label>
                <Input type="checkbox" id="checkbox2"><i className="fas fa-circle" style={{color: 'purple'}}></i> Purple</Input>
                <Label check></Label>
                <Input type="checkbox" id="checkbox2"><i className="fas fa-circle" style={{color: 'lightgrey'}}></i> Silver</Input>
                <Label check></Label>
                <Input type="checkbox" id="checkbox2"><i className="fas fa-circle" style={{color: 'yellow'}}></i> Yellow</Input>
                <Label check></Label>
                <Input type="checkbox" id="checkbox2"><i className="fas fa-circle" style={{color: 'magenta'}}></i> Neon</Input>
                <Label check></Label>
                <Input type="checkbox" id="checkbox2"><i className="fas fa-circle" style={{color: 'lightpink'}}></i> Pastel</Input>
                <Label check></Label>
                </div>
                <div className="col-5">
                <Input type="checkbox" id="checkbox2"><i className="fas fa-circle" style={{color: 'blue'}}></i> Blue</Input>
                <Input type="checkbox" id="checkbox2"><i className="fas fa-circle" style={{color: 'saddlebrown'}}></i> Brown</Input>
                <Input type="checkbox" id="checkbox2"><i className="fas fa-circle" style={{color: 'green'}}></i> Green</Input>
                <Input type="checkbox" id="checkbox2"><i className="fas fa-circle" style={{color: 'peachpuff'}}></i> Nude</Input>
                <Input type="checkbox" id="checkbox2"><i className="fas fa-circle" style={{color: 'pink'}}></i> Pink</Input>
                <Input type="checkbox" id="checkbox2"><i className="fas fa-circle" style={{color: 'red'}}></i> Red</Input>
                <Input type="checkbox" id="checkbox2"><i className="fas fa-circle fa-sm" style={{color: 'white', border: '1px solid lightgrey', borderRadius: '100%'}}></i> White</Input>
                <Input type="checkbox" id="checkbox2"><i className="fas fa-circle" style={{color: 'lavender'}}></i> Periwinkle</Input>
                <Input type="checkbox" id="checkbox2"><i className="fas fa-circle" style={{color: 'fuschia'}}></i> Fuschia</Input>
                <Input type="checkbox" id="checkbox2"><i className="fas fa-circle" style={{color: 'rosybrown'}}></i> Neutral</Input>
                </div>
                </div>
                </div>
                </DropdownMenu>
              </UncontrolledDropdown>
            </Nav>
          </Collapse>
        </Navbar>
      </div>
    </div>
  );
}

export default Sort;
