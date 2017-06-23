package com.Logger.domain.model;

import org.springframework.data.mongodb.core.mapping.Document;

@Document(collection = "CRSPrice")
public class PriceUpdate extends RequestDataLog{
}
