import React, { Component } from 'react';
import CustomerDataService from "../service/CustomerDataService";

class ListCustomersComponent extends Component {

    constructor(props) {
        super(props)
        this.state = {
            customers: [],
            message: null
        }
        this.addCustomerClicked = this.addCustomerClicked.bind(this)
        this.updateCustomerClicked = this.updateCustomerClicked.bind(this)
        this.deleteCustomerClicked = this.deleteCustomerClicked.bind(this)
        this.refreshCustomers = this.refreshCustomers.bind(this)
    }

    componentWillUnmount() {
        console.log('componentWillUnmount')
    }

    shouldComponentUpdate(nextProps, nextState) {
        console.log('shouldComponentUpdate')
        console.log(nextProps)
        console.log(nextState)
        return true
    }

    componentDidMount() {
        this.refreshCustomers();
    }

    refreshCustomers() {
        CustomerDataService.retrieveAllCustomers()
            .then(
                response => {
                    console.log(response);
                    this.setState({ customers: response.data });
                }
            )
    }

    addCustomerClicked() {
        console.log('A customer is being added.')
        // TODO:: How does it works? this.props.history.push
        this.props.history.push(`/customers/-1`)
    }

    updateCustomerClicked(id) {
        console.log('Update customer: ')
        this.props.history.push(`/customers/${id}`)
    }

    deleteCustomerClicked(id) {
        CustomerDataService.deleteCustomer(id)
            .then(
                response => {
                    this.setState({ message: `Customer ${id} deleted successfully!` })
                    this.refreshCustomers()
                }
            )

    }

    render() {
        return (
            <div className="container">
                <h4>All Customers</h4>
                {this.state.message && <div class="alert alert-success">{this.state.message}</div>}
                <div className="container">
                    <table className="table">
                        <thead>
                        <tr>
                            <th>Id</th>
                            <th>Code</th>
                            <th>Name</th>
                            <th>Update</th>
                            <th>Delete</th>
                        </tr>
                        </thead>
                        <tbody>
                        {
                            this.state.customers.map(
                                customer =>
                                    <tr key={customer.code}>
                                        <td>{customer.id}</td>
                                        <td>{customer.code}</td>
                                        <td>{customer.name}</td>
                                        <td><button className="btn btn-success" onClick={() => this.updateCustomerClicked(customer.id)}>Update</button></td>
                                        <td><button className="btn btn-warning" onClick={() => this.deleteCustomerClicked(customer.id)}>Delete</button></td>
                                    </tr>
                            )
                        }
                        </tbody>
                    </table>
                    <div className="row">
                        <button className="btn btn-success" onClick={this.addCustomerClicked}>Add</button>
                    </div>
                </div>
            </div>
        )
    }
}

export default ListCustomersComponent