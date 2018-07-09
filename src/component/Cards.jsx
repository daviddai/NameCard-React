import React from "react";
import Card from "./Card";
import PropTypes from "prop-types";

import {connect} from "react-redux";


const mapStateToProps = state => ({
    nameCards: state.nameCards
});

class Cards extends React.PureComponent {

    render() {
        if (this.props.nameCards.length > 0) {
            return (
                <div>
                    {
                        this.props.nameCards.map(
                            (nameCard, i) => (
                                <Card key={i}
                                      imageUrl={nameCard.imageUrl}
                                      title={nameCard.title}
                                      description={nameCard.description}
                                      email={nameCard.email}
                                      contactNumber={nameCard.contactNumber}
                                />
                            )
                        )
                    }
                </div>
            );
        } else {
            return null;
        }
    }

}

Cards.propTypes = {
    nameCards: PropTypes.array.isRequired
};

export default connect(mapStateToProps)(Cards);