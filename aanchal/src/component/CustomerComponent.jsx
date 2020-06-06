import React, { Component } from 'react'
import { Formik, Form, Field, ErrorMessage } from 'formik';
import CustomerDataService from '../service/CustomerDataService.js'

class CustomerComponent extends Component {
    constructor(props) {
        super(props)

        this.state = {
            id: this.props.match.params.id,
            code: '',
            name: '',
            gender: ''
        }

        this.onSubmit = this.onSubmit.bind(this)
        this.validate = this.validate.bind(this)

    }

    componentDidMount() {

        if (this.state.id === -1) {
            return
        }

        CustomerDataService.retrieveCustomer(this.state.id)
            .then(response => this.setState({
                code: response.data.code,
                name: response.data.name,
                gender: response.data.gender
            }))
    }

    validate(values) {
        let errors = {}
        if (!values.name) {
            errors.name = 'Enter a Description'
        } else if (values.name.length > 15) {
            errors.description = 'Name should not be greater than 15 characters.'
        }

        return errors

    }

    onSubmit(values) {

        let customer = {
            id: this.state.id,
            code: values.code,
            name: values.name,
            gender: values.gender
        }

        if (this.state.id === -1) {
            CustomerDataService.createCustomer(customer)
                .then(() => this.props.history.push('/customers'))
        } else {
            CustomerDataService.updateCustomer(this.state.id, customer)
                .then(() => this.props.history.push('/customers'))
        }

        console.log(values);
    }

    render() {

        let { code, name, gender } = this.state

        return (
            <div>
                <h1>Customer</h1>
                <div className="container">
                    <Formik
                        initialValues={{ code, name, gender }}
                        onSubmit={this.onSubmit}
                        validateOnChange={false}
                        validateOnBlur={false}
                        validate={this.validate}
                        enableReinitialize={true}
                    >
                        {
                            (props) => (
                                <Form>
                                    <ErrorMessage name="name" component="div"
                                        className="alert alert-warning" />
                                    <ErrorMessage name="gender" component="div"
                                        className="alert alert-warning" />
                                    <fieldset className="form-group">
                                        <label>Name</label>
                                        <Field className="form-control" type="text" name="name" />
                                    </fieldset>
                                    <fieldset className="form-group">
                                        <label>Code</label>
                                        <Field className="form-control" type="text" name="code" />
                                    </fieldset>
                                    <fieldset className="form-group">
                                        <label>Gender</label>
                                        <Field className="form-control" type="text" name="gender" />
                                    </fieldset>
                                    <button className="btn btn-success" type="submit">Save</button>
                                </Form>
                            )
                        }
                    </Formik>

                </div>
            </div>
        )
    }
}

export default CustomerComponent