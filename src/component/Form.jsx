import React from "react";
import ActionButton from "./ActionButton";
import InputField from "./InputField";

import {connect} from "react-redux";
import {addNameCard} from "../actions/index";

const mapDispatchToProps = dispatch => ({
    addNameCard: nameCard => dispatch(addNameCard(nameCard))
});

class Form extends React.Component {

    constructor() {
        super();
        this.state = {
            nameCard: {},
            statuses: {
                "imageUrl": {"isValid": false, "isTouched": false, "errorMessage": "Image url is invalid"},
                "title": {"isValid": false, "isTouched": false, "errorMessage": "Title is invalid"},
                "description": {"isValid": false, "isTouched": false, "errorMessage": "Description is invalid"},
                "contactNumber": {"isValid": false, "isTouched": false, "errorMessage": "Contact number is invalid"},
                "email": {"isValid": false, "isTouched": false, "errorMessage": "Email address is invalid"},
            },
            canSubmit: false
        }
    }

    updateNameCard = (fieldId, fieldValue) => {
        let nameCard = this.state.nameCard;
        let statuses = this.state.statuses;

        nameCard[fieldId] = fieldValue;
        statuses[fieldId].isTouched = true;

        let isValid;

        switch (fieldId) {
            case "imageUrl":
                isValid = this.validateImageUrl(fieldValue);
                break;
            case "title":
                isValid = this.validateTitle(fieldValue);
                break;
            case "description":
                isValid = this.validateDescription(fieldValue);
                break;
            case "contactNumber":
                isValid = this.validateContactNumber(fieldValue);
                break;
            case "email":
                isValid = this.validateEmail(fieldValue);
                break;
            default:
                isValid = true;
        }

        statuses[fieldId].isValid = isValid;

        this.setState({
            nameCard: nameCard,
            statuses: statuses,
            canSubmit: this.hasPassedAllValidation(statuses)
        });
    };

    hasPassedAllValidation = (statuses) => {
        return Object.keys(statuses).every((key) => statuses[key].isValid);
    };

    submitNewNameCard = () => {
        this.props.addNameCard(this.state.nameCard);
        this.setState({
            nameCard: {}
        });
    };

    validateImageUrl = (url) => {
        return url !== "";
    };

    validateTitle = (title) => {
        return title !== "";
    };

    validateDescription = (description) => {
        return description !== '';
    };

    validateContactNumber = (contactNumber) => {
        return new RegExp(/^\d+$/).test(contactNumber);
    };

    validateEmail = (email) => {
        return new RegExp(/^\S+@\S+\.\S+$/).test(email);
    };

    render() {
        return (
            <div>
                <form id="createNameCardForm">
                    <div>
                        <h2>Create New Name Card</h2>
                    </div>
                    <div className="form-group">
                        <label>Card Image</label>
                        <InputField id="imageUrl"
                                    onChange={this.updateNameCard}
                                    status={this.state.statuses.imageUrl}
                        />
                    </div>
                    <div className="form-group">
                        <label>Card Title</label>
                        <InputField id="title"
                                    onChange={this.updateNameCard}
                                    status={this.state.statuses.title}
                        />
                    </div>
                    <div className="form-group">
                        <label>Card Description</label>
                        <InputField id="description"
                                    onChange={this.updateNameCard}
                                    status={this.state.statuses.description}
                        />
                    </div>
                    <div className="form-group">
                        <label>Contact Number</label>
                        <InputField id="contactNumber"
                                    onChange={this.updateNameCard}
                                    status={this.state.statuses.contactNumber}
                        />
                    </div>
                    <div className="form-group">
                        <label>Email</label>
                        <InputField id="email"
                                    onChange={this.updateNameCard}
                                    status={this.state.statuses.email}
                        />
                    </div>
                    <ActionButton onClick={this.submitNewNameCard}
                                  formId="createNameCardForm"
                                  isDisabled={!this.state.canSubmit}
                    />
                </form>
            </div>
        );
    }

}

export default connect(null, mapDispatchToProps)(Form);