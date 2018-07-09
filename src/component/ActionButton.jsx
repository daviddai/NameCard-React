import React from "react";

class ActionButton extends React.Component {

    handleButtonClicked = event => {
        event.preventDefault();
        this.props.onClick();
        document.getElementById(this.props.formId).reset();
    };

    render() {
        return (
            <div>
                <button className="btn btn-primary"
                        onClick={this.handleButtonClicked}
                        disabled={this.props.isDisabled}
                >
                    Add New Card
                </button>
            </div>
        );
    }

}

export default ActionButton;