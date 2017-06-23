package com.Logger.domain.model;

import com.mongodb.BasicDBObject;
import lombok.Data;

@Data
public class RequestDataLog {
    public Integer requestId;
    public String url;
    public BasicDBObject requestBody;
    public Integer chainId;
    public Integer propertyId;
}
