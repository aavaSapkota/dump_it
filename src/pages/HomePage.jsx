import React, { Component } from "react";
import { Button, ButtonGroup, Container } from "reactstrap";
import { Link, Route, Switch } from "react-router-dom";
import ButtonOption from "../components/ButtonOption";
import "./HomePage.module.css";

export default class HomePage extends Component {
  render() {
    return (
      <Container>
        <div className="options">
          <ButtonOption title="Home" route="/" />
          <ButtonOption title="Take a snap" route="/camera" />
          <ButtonOption title="Location" route="/location" />
        </div>
      </Container>
    );
  }
}
