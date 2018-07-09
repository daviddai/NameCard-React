import React from "react"

class ErrorMessage extends React.Component {

    render() {
        return (
            <div>
                <small className="form-text text-muted">{this.props.errorMessage}</small>
            </div>
        );
    }

}

export default ErrorMessage;