package com.simplified.aanchal.dao;

import java.util.List;

import javax.persistence.EntityManager;

import org.hibernate.query.Query;
import org.hibernate.Session;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;

import com.simplified.aanchal.modal.Customer;

@Repository
public class CustomerDAOImpl implements CustomerDAO {

	@Autowired
	private EntityManager entityManager;

	@Override
	public List<Customer> get() {

		Session currSession = entityManager.unwrap(Session.class);
		Query<Customer> query = currSession.createQuery("from Customer", Customer.class);
		List<Customer> list = query.getResultList();
		return list;

	}

	@Override
	public Customer get(int id) {
		Session currSession = entityManager.unwrap(Session.class);
		Customer emp = currSession.get(Customer.class, id);
		return emp;
	}

	@Override
	public void save(Customer customer) {
		
		Session currSession = entityManager.unwrap(Session.class);
		currSession.saveOrUpdate(customer);

	}

	@Override
	public void delete(int id) {
		Session currSession = entityManager.unwrap(Session.class);
		Customer emp = currSession.get(Customer.class, id);
		currSession.delete(emp);

	}

}
