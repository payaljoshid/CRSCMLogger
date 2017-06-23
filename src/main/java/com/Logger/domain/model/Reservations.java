package com.Logger.domain.model;

import org.springframework.data.mongodb.core.mapping.Document;

@Document(collection = "CRSReservations")
public class Reservations extends RequestDataLog{
}