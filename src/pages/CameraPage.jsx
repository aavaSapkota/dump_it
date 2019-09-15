import React, { Component } from "react";
import { Link } from "react-router-dom";
import Camera from "react-html5-camera-photo";
import { Button, Container } from "react-bootstrap";
import "react-html5-camera-photo/build/css/index.css";
import "./CameraPage.css";

// Note: you do not need to import @tensorflow/tfjs here.

export default class CameraPage extends Component {
  constructor() {
    super();
    this.state = {
      imageUrl: null
    };
  }
  onTakePhoto(dataUri) {
    this.setState({
      imageUrl: dataUri
    });

    this.props.history.push({
      pathname: "/result",
      data: { imageUrl: dataUri }
    });

    var canvas = document.querySelectorAll("img");

    console.log(canvas[1]);
  }

  onCameraError(error) {
    console.error("onCameraError", error);
  }

  onCameraStart(stream) {
    console.log("onCameraStart");
  }

  onCameraStop() {
    console.log("onCameraStop");
  }

  render() {
    return (
      <Container>
        <div className="options">
          <Link to="/">
            <Button variant="secondary">Go back</Button>
          </Link>
        </div>
        <div id="cam" className="camera">
          <Camera
            onTakePhoto={dataUri => {
              this.onTakePhoto(dataUri);
            }}
          />
        </div>
      </Container>
    );
  }
}
