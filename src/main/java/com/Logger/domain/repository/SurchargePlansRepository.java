package com.Logger.domain.repository;

import com.Logger.domain.model.SurchargePlans;
import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface SurchargePlansRepository extends MongoRepository<SurchargePlans,String> {
}
