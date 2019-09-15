import React from "react";
import "./App.css";
import { Link, Route, Switch } from "react-router-dom";
import CameraPage from "./pages/CameraPage";
import HomePage from "./pages/HomePage";
import ResultPage from "./pages/ResultPage";
import { LocationPage } from "./pages/LocationPage";
import logo from "./logo1.png";
import "bootstrap/dist/css/bootstrap.min.css";

import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink
} from "reactstrap";

class App extends React.Component {
  constructor(props) {
    super(props);

    this.toggleNavbar = this.toggleNavbar.bind(this);
    this.state = {
      collapsed: true
    };
  }

  toggleNavbar() {
    this.setState({
      collapsed: !this.state.collapsed
    });
  }

  render() {
    return (
      <div>
        <Navbar class="navbar" dark>
          <NavbarToggler onClick={this.toggleNavbar} className="hi" />

          <NavbarBrand className="navbar-brand text-center">
            <img class="logo" src={logo} style={{ width: 50 }} alt="Logo" />
            RECYCLE CAM
          </NavbarBrand>

          <Collapse isOpen={!this.state.collapsed} navbar>
            <Nav navbar>
              <NavItem>
                <NavLink className="text-center mr-auto">
                  <Link class="link" to="/">
                    Home Page
                  </Link>
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink className="text-center mr-auto">
                  <Link class="link" to="/camera">
                    Camera Page
                  </Link>
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink className="text-center mr-auto">
                  <Link class="link" to="/location">
                    Location
                  </Link>
                </NavLink>
              </NavItem>
            </Nav>
          </Collapse>
        </Navbar>

        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route path="/camera" component={CameraPage} />
          <Route path="/result" component={ResultPage} />
          <Route path="/location" component={LocationPage}></Route>
        </Switch>
      </div>
    );
  }
}

export default App;
