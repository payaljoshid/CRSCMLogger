package com.Logger.domain.repository;

import com.Logger.domain.model.Chain;
import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface ChainRepository extends MongoRepository<Chain,String> {
}
