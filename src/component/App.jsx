import React from "react";
import Cards from "./Cards";
import Form from "./Form";

class App extends React.PureComponent {

    render() {
        return (
            <div className="container">
                <Form/>
                <hr/>
                <Cards/>
            </div>
        );
    }

}

export default App;