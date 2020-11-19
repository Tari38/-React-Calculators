import React from 'react';
import "./styles/Button.css";

class Button extends React.Component {
    render() {
        return(
					<div className="button" onClick={this.props.onClick}>
						{this.props.label}
					</div>
        )
    }
}

export default Button;
