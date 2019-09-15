import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Container, Col, Row, Alert, Button } from "react-bootstrap";
import base64Img from "base64-img";
import { Media } from "react-bootstrap";
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

      base64Img.img(`${data.imageUrl}`, "../img/", "1", (err, filepath) => {
        if (err) {
          console.log(err);
        } else {
          console.log(filepath);
        }
      });
    }
  }
  render() {
    const { imageUrl } = this.state;
    console.log(imageUrl);
    if (imageUrl) {
      return (
        <div style={{ marginTop: "20px" }}>
          <Media>
            <img
              style={{ width: "40%" }}
              className="mr-3"
              src={imageUrl}
              alt="Generic placeholder"
            />
            <Media.Body>
              <h5>Type of Waste</h5>
              <p>Description</p>
            </Media.Body>
          </Media>
          <div className="buttons" style={{ marginTop: "20px" }}>
            <Button variant="light">
              <Link to="/">Back to home</Link>
            </Button>{" "}
            <Button variant="light">
              <Link to="/camera">Take a snap</Link>
            </Button>
          </div>
        </div>
      );
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
