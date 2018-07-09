import React from "react";
import ErrorMessage from "./ErrorMessage";

class InputField extends React.Component {

    handleFieldChanged = event => {
        this.props.onChange(event.target.id, event.target.value);
    };

    render() {
        return (
            <div>
                <input id={this.props.id}
                       type="text"
                       className="form-control"
                       onChange={this.handleFieldChanged}
                />
                {
                    !this.props.status.isValid && this.props.status.isTouched &&
                    <ErrorMessage errorMessage={this.props.status.errorMessage}/>
                }
            </div>
        );
    }

}

export default InputField;