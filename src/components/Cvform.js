import { Component } from "react";

export default class Cvform extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        const {attr} = this.props;

        return (
            <div className="cvfield">
                {Object.keys(attr).map((field, i) => <p key={i}>{field}: {attr[field]}</p>)}
            </div>
        )
    }

}