import React, { Component } from "react";
import { Container } from "reactstrap";
import ButtonOption from "../components/ButtonOption";
import "./HomePage.module.css";

export default class HomePage extends Component {
  render() {
    return (
      <Container>
        <div className="options">
          <ButtonOption title="Home" route="/" />
          <ButtonOption title="Take a Snap" route="/camera" />
          <ButtonOption title="Nearest Location" route="/location" />
        </div>
      </Container>
    );
  }
}
