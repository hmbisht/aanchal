package com.simplified.aanchal.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.simplified.aanchal.dao.CustomerDAO;
import com.simplified.aanchal.modal.Customer;

@Service
public class CustomerServiceImpl implements CustomerService {
	
	@Autowired
	private CustomerDAO customerDao;

	@Transactional
	@Override
	public List<Customer> get() {
		return customerDao.get();
	}

	@Transactional
	@Override
	public Customer get(int id) {
		return customerDao.get(id);
	}

	@Transactional
	@Override
	public void save(Customer customer) {
		customerDao.save(customer);
		
	}

	@Transactional
	@Override
	public void delete(int id) {
		customerDao.delete(id);
		
	}

}