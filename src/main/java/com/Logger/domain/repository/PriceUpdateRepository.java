package com.Logger.domain.repository;

import com.Logger.domain.model.PriceUpdate;
import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface PriceUpdateRepository extends MongoRepository<PriceUpdate,String> {
}
