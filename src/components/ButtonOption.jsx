import React, { Component } from "react";
import { Button, ButtonGroup, Col, Row } from 'reactstrap';
import { Link, Route, Switch } from "react-router-dom";
import "./ButtonOption.module.css";

export default class ButtonOption extends Component {
    
    render() {
        const {title} = this.props;
        return (
            
            <Link class="link" to="/camera">
                <Button className="main-btn">{title}</Button>
            </Link>
                
        );
    }
}

        