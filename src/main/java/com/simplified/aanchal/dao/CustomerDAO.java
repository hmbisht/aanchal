package com.simplified.aanchal.dao;

import java.util.List;

import com.simplified.aanchal.modal.Customer;

public interface CustomerDAO {
	
	List<Customer> get();
	
	Customer get(int id);
	
	void save(Customer customer);
	
	void delete(int id);
	

}
