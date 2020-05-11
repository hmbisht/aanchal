package com.simplified.aanchal.service;

import java.util.List;

import com.simplified.aanchal.modal.Customer;

public interface CustomerService {
	

	List<Customer> get();
	
	Customer get(int id);
	
	void save(Customer customer);
	
	void delete(int id);
	

}
