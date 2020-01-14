import React, { Component } from 'react';

class QuizQuestionButton extends Component {

    constructor(props) {
        super(props);
    }

    handleClick = (buttonText) => {
        this.props.handleClick(buttonText);
    }

    render() {
        return (
            <li>
                <button onClick={ this.handleClick.bind(this, this.props.button_text) }>
                    { this.props.button_text }
                </button> 
            </li>
        );
    }

}

export default QuizQuestionButton;