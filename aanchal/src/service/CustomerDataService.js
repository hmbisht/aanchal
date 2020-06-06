import axios from 'axios'

const CUSTOMERS = 'customers'
const AANCHAL_API_URL = 'http://localhost:9780'
const CUSTOMER_API_URL = `${AANCHAL_API_URL}/api/${CUSTOMERS}`

/**
 * Will be used to interact with database through backend java code using axios.
 * Axios is a Promise based HTTP client for the browser and node.js
 */
class CustomerDataService {


    retrieveCustomer(id) {
        const headers = {
            'x-request-id': 'retrieveCustomer12345',
            'x-debug-id': 'retrieveCustomer12345',
            'Content-Type': 'application/json',
            'Authorization': 'Bearer efABCDEFG'
        };
        return axios.get(`${CUSTOMER_API_URL}/${id}`, {"headers" : headers});
    }

    retrieveAllCustomers() {
        const headers = {
            'x-request-id': 'retrieveAllCustomers12345',
            'x-debug-id': 'retrieveAllCustomers12345',
            'Content-Type': 'application/json',
            'Authorization': 'Bearer efABCDEFG'
        };
        return axios.get(`${CUSTOMER_API_URL}`, {"headers" : headers});
    }

    createCustomer(customer) {
        const headers = {
            'x-request-id': 'createCustomer12345',
            'x-debug-id': 'createCustomer12345',
            'Content-Type': 'application/json',
            'Authorization': 'Bearer efABCDEFG'
        };
        return axios.post(`${CUSTOMER_API_URL}`, customer, {"headers" : headers});
    }

    updateCustomer(id, customer) {
        const headers = {
            'x-request-id': 'updateCustomer12345',
            'x-debug-id': 'updateCustomer12345',
            'Content-Type': 'application/json',
            'Authorization': 'Bearer efABCDEFG'
        };
        return axios.put(`${CUSTOMER_API_URL}/${id}`, customer, {"headers" : headers});
    }

    deleteCustomer(id) {
        const headers = {
            'x-request-id': 'deleteCustomer12345',
            'x-debug-id': 'deleteCustomer12345',
            'Content-Type': 'application/json',
            'Authorization': 'Bearer efABCDEFG'
        };
        return axios.delete(`${CUSTOMER_API_URL}/${id}`, {"headers" : headers});
    }
}

export default new CustomerDataService()