package com.Logger.domain.repository;

import com.Logger.domain.model.Reservations;
import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface ReservationsRepository extends MongoRepository<Reservations,String> {
}
