import React, {Component, Fragment} from 'react';
import axios from 'axios';

class NumberFact extends Component {
    constructor() {
    super();
        this.state = {
            number: '',
            numberFact: '',
        }
    }

    handleInput = (e) => {
        this.setState({
            number: e.target.value
        })
    }

    handleClick = (e) => {
        e.preventDefault();
        axios({
            url: `http://numbersapi.com/${this.state.number}/math?json`,
            method: 'GET',
            dataType: 'json'
        }).then( (res) => {
            this.setState({
                numberFact: res.data.text
            })
        }).catch(() => {
            alert('Invalid format, please enter numbers only')
        })
    }

    render() {
        return (
            <Fragment>
                <form>
                    <label htmlFor="numberInput" className="sr-only">Number input</label>
                    <input className="userInput" type="text" name="numberInput" id="numberInput" placeholder="Enter a number" onChange={this.handleInput}/>
                    <button type="submit" onClick={this.handleClick}>Submit</button>
                </form>
                <p>{this.state.numberFact}</p>
            </Fragment>
        )
    }
}

export default NumberFact