import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Alert, Button } from "react-bootstrap";

import { Media } from "react-bootstrap";
import "./ResultPage.module.css";

export default class ResultPage extends Component {
  constructor() {
    super();
    this.state = {
      imageUrl: null,
      predictions: []
    };
  }
  callApi(blob) {
    return fetch(
      "https://northcentralus.api.cognitive.microsoft.com/customvision/v3.0/Prediction/3aae5557-2969-47c8-a0ff-58c925bb8f6d/classify/iterations/recycle_cam/image",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/octet-stream",
          "Prediction-Key": "e03e4c248dae4e5e92d6f9c7de167ad8"
        },
        body: blob
      }
    ).then(res => res.json());
  }
  componentDidMount() {
    const { data } = this.props.location;

    if (data) {
      this.setState({
        imageUrl: data.imageUrl
      });

      fetch(data.imageUrl)
        .then(res => res.blob())
        .then(blob => this.callApi(blob))
        .then(res =>
          this.setState({
            predictions: res.predictions
          })
        );
    }
  }

  findTypeWaste(predictions) {
    var maxResult = 0;
    var object = {};
    for (var i = 0; i < predictions.length; i++) {
      var currentProbability = predictions[i].probability;
      if (currentProbability > maxResult) {
        maxResult = currentProbability;
        object = predictions[i];
      }
    }
    return object;
  }
  render() {
    const { imageUrl, predictions } = this.state;
    const prediction = this.findTypeWaste(predictions);
    console.log(prediction);
    console.log(predictions);

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
              <h2>{prediction.tagName}</h2>
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
