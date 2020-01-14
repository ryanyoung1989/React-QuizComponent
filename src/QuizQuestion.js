import React, { Component } from 'react';
import QuizQuestionButton from './QuizQuestionButton.js';

class QuizQuestion extends Component {

    constructor(props) {
        super(props);
    }

    handleClick = (option) => {
        if (this.props.quiz_question.answer === option) {
            this.props.showNextQuestionHandler(option);
        } else {
            // show that they clicked the wrong answer
        }
    }

    render() {

        return (
            <main>
            <section>
              <p> 
                { this.props.quiz_question.instruction_text } 
              </p>
            </section>
            <section className="buttons">
              <ul>
                { 
                    this.props.quiz_question.answer_options.map((option, index) => 
                        <QuizQuestionButton button_text={ option } 
                            key={ index } 
                            handleClick={ this.handleClick.bind(this, option) }/>
                    )
                }
              </ul>
            </section>
          </main>
        );
    }

}

export default QuizQuestion;