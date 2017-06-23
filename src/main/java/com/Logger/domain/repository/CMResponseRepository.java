package com.Logger.domain.repository;

import com.Logger.domain.model.CMResponse;
import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface CMResponseRepository extends MongoRepository<CMResponse,String> {
}

