import axios from 'axios'

const CUSTOMERS = 'customers'
const AANCHAL_API_URL = 'http://localhost:9780'
const CUSTOMER_API_URL = `${AANCHAL_API_URL}/api/${CUSTOMERS}`

class CustomerDataService {

    retrieveAllCustomers() {
        return axios.get(`${CUSTOMER_API_URL}`);
    }

    updateCustomer(id) {
        //console.log('executed update service')
        return axios.put(`${CUSTOMER_API_URL}/${id}`);
    }

    deleteCustomer(id) {
        //console.log('executed delete service')
        return axios.delete(`${CUSTOMER_API_URL}/${id}`);
    }
}

export default new CustomerDataService()