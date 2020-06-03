import React, { Component } from 'react';
import ListCustomersComponent from "./ListCustomersComponent";
import CustomerComponent from "./CustomerComponent";

class CustomerApp extends Component {
    render() {
        return (<>
            <h1>Instructor Application</h1>
            <ListCustomersComponent/>
            </>
        )
    }
}

export default CustomerApp