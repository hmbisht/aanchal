import React, { Component } from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import ListCustomersComponent from "./ListCustomersComponent";
import CustomerComponent from "./CustomerComponent";
import HeaderComponent from "./HeaderComponent";
import FooterComponent from "./FooterComponent";

class CustomerApp extends Component {
    render() {
        return (
            <div className="CustomerApp">
                <Router>
                    <>
                        <HeaderComponent/>
                        <Switch>
                            <Route path="/" exact component={ListCustomersComponent}/>
                            <Route path="/customers/:id" component={CustomerComponent}/>
                            <Route path="/customers" component={ListCustomersComponent}/>
                        </Switch>
                        <FooterComponent/>
                    </>
                </Router>
            </div>
        )
    }
}

export default CustomerApp