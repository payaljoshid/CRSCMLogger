package com.Logger.domain.model;

import org.springframework.data.mongodb.core.mapping.Document;

@Document(collection = "CRSChain")
public class Chain extends RequestDataLog {
}
