import React from "react";
import EstimationStatus from "./EstimationStatus"
import Estimates from "./Estimates";
import "./Estimation.css"

class Estimation extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            estimation: null
        };
    }

    onEstimateChanged(estimation) {
        if (this.props.status !== EstimationStatus.STARTED) {
            return;
        }

        this.setState({
            estimation
        });
    }

    render() {
        let headerLabel;
        let estimation;
        let submission;

        console.log(this.state.status);

        switch (this.props.status) {
            case EstimationStatus.STARTED:
                headerLabel = 'Selected Estimate: ';
                estimation = this.state.estimation;
                submission = <button>Submit</button>
                break
            case EstimationStatus.FINISHED:
                headerLabel = 'Estimate Submitted: '  + this.state.estimation;
                estimation = this.state.estimation;
                break
            default:
                headerLabel = 'Estimation Not Started';
        }

        return (
            <div className="estimation">
                <div className="estimationHeader"><span>{headerLabel}</span><span className="estimationHeaderEstimation">{estimation}</span></div>
                <Estimates onEstimateChange={(estimation) => this.onEstimateChanged(estimation)}/>
                {submission}
            </div>
        )
    }
}

export default Estimation;