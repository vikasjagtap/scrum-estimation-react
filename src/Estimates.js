import React from "react";
import Card from "./Card";
import "./Estimates.css"
import {ReactComponent as CoffeeIcon} from "./Coffe.svg";

class Estimates extends React.Component {
    constructor(props) {
        super(props);
        this.cardValues = [1, 2, 3, 5, 8, 13, 21, 34];
    }

    renderCard(value, index) {
        return <Card key={index.toString()} value={value} onClick={(clickedValue) => this.handleClick(clickedValue)}/>
    }
    render() {
        return (
                <div className="estimates">
                    {this.renderCard(<CoffeeIcon />, 1)}
                    {this.cardValues.map((value, index) => this.renderCard(value, index + 2))}
                    {this.renderCard('?', this.cardValues.length + 2)}
                </div>
        );
    }

    handleClick(value) {
       this.props.onEstimateChange(value);
        console.log("Selected Value: ",value);
    }
}

export default Estimates;