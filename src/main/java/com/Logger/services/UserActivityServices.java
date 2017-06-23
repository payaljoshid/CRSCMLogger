package com.Logger.services;

import com.Logger.utils.ParserUtility;
import com.fasterxml.jackson.databind.node.ObjectNode;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class UserActivityServices {
    @Autowired
    ParserUtility parserUtility;

    public String saveByRequestUrl(List<ObjectNode> requestDataNode) throws Exception {
       return parserUtility.createRequestDataNode(requestDataNode);
    }

    public String saveByResponseUrl(List<ObjectNode> responseDataNode)throws Exception {
        return parserUtility.createResponseDataNode(responseDataNode);
    }
}
