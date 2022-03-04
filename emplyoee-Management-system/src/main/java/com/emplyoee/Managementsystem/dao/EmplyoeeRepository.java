package com.emplyoee.Managementsystem.dao;
import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.stereotype.Repository;

import com.emplyoee.Managementsystem.model.Emplyoee;

@Repository
public interface EmplyoeeRepository extends MongoRepository<Emplyoee,Long> {
	
}
