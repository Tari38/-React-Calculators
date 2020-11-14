import React, { Component } from 'react';

import "./Social.css";

class Social extends Component {
    render() {
        return (
            <div className="social">
            <a href="https://codepen.io/Tari38"><i className="fab fa-codepen"></i></a>
            <a href="https://github.com/Tari38"><i className="fab fa-github"></i></a>
            <a href="https://www.coderlist.io/profile/sam39"><i className="fas fa-rocket"></i></a>
            <a href="https://www.facebook.com/sam.dorrell"><i className="fab fa-facebook-f"></i></a>
            <a href="https://www.linkedin.com/in/samantha-dorrell-307377188/"><i className="fab fa-linkedin-in"></i></a>
            <a href="https://codesandbox.io/u/Tari38"><i className="fab fa-react"></i></a>
            </div>
            )
        }
    }

export default Social;
