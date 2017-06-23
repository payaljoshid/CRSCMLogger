package com.Logger.domain.model;

import org.springframework.data.mongodb.core.mapping.Document;

@Document(collection = "CRSProperty")
public class Property extends RequestDataLog {
}
