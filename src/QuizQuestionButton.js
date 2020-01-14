import React, { Component } from 'react';

class QuizQuestionButton extends Component {

    constructor(props) {
        super(props);
    }

    handleClick = () => {

    }

    render() {
        return (
            <li>
                <button onClick={ this.props.handleClick.bind(this) }>
                    { this.props.button_text }
                </button> 
            </li>
        );
    }

}

export default QuizQuestionButton;