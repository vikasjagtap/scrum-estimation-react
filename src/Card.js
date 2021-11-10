import React from "react";
// import logo from './logo.svg';
import './Card.css';

class Card extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            faceUp: false
        };
    }
    render() {
        return ( <div className="card" onClick={() => this.handleClick()}>
            <div className="cardValue"><span>{this.props.value}</span></div>
            {/*<img src={logo} className="cardImage bottom" alt="logo" />*/}
        </div>);
    }

    handleClick() {
        console.log("Card Value: ", this.props.value);
        this.props.onClick(this.props.value);
    }
}

export default Card;