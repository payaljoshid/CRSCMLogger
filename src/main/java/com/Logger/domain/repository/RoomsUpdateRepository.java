package com.Logger.domain.repository;

import com.Logger.domain.model.RoomsUpdate;
import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface RoomsUpdateRepository extends MongoRepository<RoomsUpdate,String> {
}
