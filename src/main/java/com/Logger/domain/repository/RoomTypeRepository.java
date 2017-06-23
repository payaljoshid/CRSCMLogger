package com.Logger.domain.repository;

import com.Logger.domain.model.RoomType;
import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface RoomTypeRepository extends MongoRepository<RoomType,String> {
}
