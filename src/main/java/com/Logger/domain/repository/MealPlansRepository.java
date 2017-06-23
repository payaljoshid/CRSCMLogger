package com.Logger.domain.repository;

import com.Logger.domain.model.MealPlans;
import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface MealPlansRepository extends MongoRepository<MealPlans,String>{
}
