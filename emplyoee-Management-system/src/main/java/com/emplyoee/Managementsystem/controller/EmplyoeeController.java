package com.emplyoee.Managementsystem.controller;
import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import com.emplyoee.Managementsystem.dao.EmplyoeeRepository;
import com.emplyoee.Managementsystem.model.Emplyoee;

@RestController
@CrossOrigin(origins = "http://localhost:3000")
public class EmplyoeeController {
	
	@Autowired
	private EmplyoeeRepository emplyoeeRepository;
	
	 @RequestMapping(value="/emplyoee")
	  	public List<Emplyoee> getAllemplyoee() {
		 return emplyoeeRepository.findAll();
		  	  }
	 @RequestMapping(value="/emplyoee/{emp_id}")
	 public Optional<Emplyoee>getEmplyoee(@PathVariable long emp_id){
		 return emplyoeeRepository.findById(emp_id);
	 }
	 
	 @RequestMapping(value="/insertemplyoee",method=RequestMethod.POST)
	 	public void addEmplyoee(@RequestBody Emplyoee emplyoees) {
		 emplyoeeRepository.insert(emplyoees);
	 }
	 
	 @RequestMapping(value="/emplyoee/{emp_id}",method=RequestMethod.DELETE)
	 public void deleteEmplyoee(@PathVariable long emp_id) {
		 emplyoeeRepository.deleteById(emp_id);
	 }
	

}
