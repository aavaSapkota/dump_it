import React, { Component } from "react";
import { Button } from "reactstrap";
import { Link } from "react-router-dom";
import "./ButtonOption.module.css";

export default class ButtonOption extends Component {
  render() {
    const { title, route } = this.props;
    return (
      <div className="buttonOption">
        <Link to={route}>
          <Button className="main-btn mt-3" size="lg" block>
            {title}
          </Button>
        </Link>
      </div>
    );
  }
}
