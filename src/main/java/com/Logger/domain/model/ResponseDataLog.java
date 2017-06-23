package com.Logger.domain.model;

import com.mongodb.BasicDBObject;
import lombok.Data;

@Data
public class ResponseDataLog {
    public Integer responseId;
    public String url;
    public BasicDBObject responseBody;
}
