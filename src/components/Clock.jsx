import React from "react";

class Clock extends React.Component {
    constructor() {
        super();

        this.state = {
            time: (new Date()).toLocaleTimeString(),
        }

        setInterval(this.thisTime, 1000);
    }

    thisTime = () => {
        this.setState({
            time: (new Date()).toLocaleTimeString(),
        });
    }

    render() {       
        return (
            <div className="col-12" style={{ textAlign: "center"}}>
                <p>
                    { this.state.time }
                </p>
            </div>
        )
    }
}

export default Clock;