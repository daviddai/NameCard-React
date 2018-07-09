import React from "react";

import "bootstrap/dist/css/bootstrap.css";
import "font-awesome/css/font-awesome.css";

class Card extends React.PureComponent {

    render() {
        const cardStyle = {
            width: "40%"
        };

        const spanStyle = {
            marginLeft: "10px",
            color: "#6c757d"
        };

        return (
            <div className="card mx-auto mb-2" style={cardStyle}>
                <img className="card-img-top"
                     src={this.props.imageUrl}
                />
                <div className="card-body">
                    <h5 className="card-title">{this.props.title}</h5>
                    <p className="card-text">
                        {this.props.description}
                    </p>
                </div>
                <div className="card-footer">
                    <div>
                        <i className="fa fa-phone" /><span style={spanStyle}>{this.props.contactNumber}</span>
                    </div>
                    <div>
                        <i className="fa fa-envelope" /><span style={spanStyle}>{this.props.email}</span>
                    </div>
                </div>
            </div>
        );
    }

}

export default Card;