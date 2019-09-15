import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Container, Col, Row, Alert, Button } from "react-bootstrap";
import "./ResultPage.module.css";

export default class ResultPage extends Component {
  constructor() {
    super();
    this.state = {
      imageUrl: null
    };
  }

  componentDidMount() {
    const { data } = this.props.location;
    console.log(data);
    if (data) {
      this.setState({
        imageUrl: data.imageUrl
      });
    }
  }
  render() {
    const { imageUrl } = this.state;
    console.log(imageUrl);
    if (imageUrl) {
      return <img src={imageUrl} />;
    }
    return (
      <Alert variant="danger">
        <Alert.Heading>Oh snap! You got an error!</Alert.Heading>
        <p>There is no image. Please take a new one!</p>

        <div className="buttons">
          <Button variant="light">
            <Link to="/">Back to home</Link>
          </Button>{" "}
          <Button variant="light">
            <Link to="/camera">Take a snap</Link>
          </Button>
        </div>
      </Alert>
    );
  }
}
