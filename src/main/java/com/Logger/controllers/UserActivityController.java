package com.Logger.controllers;

import com.Logger.services.UserActivityServices;
import com.fasterxml.jackson.databind.node.ObjectNode;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.MediaType;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RequestMapping("/api/logger/userActivity/")
@RestController
public class UserActivityController {
    @Autowired
    UserActivityServices userActivityServices;

    @RequestMapping(value = "/requestData", method = RequestMethod.POST,consumes= MediaType.APPLICATION_JSON_VALUE)
    public String saveRequestByUrl(@RequestBody List<ObjectNode> requestDataNode) throws Exception {
        return userActivityServices.saveByRequestUrl(requestDataNode);
    }

    @RequestMapping(value = "/responseData", method = RequestMethod.POST,consumes= MediaType.APPLICATION_JSON_VALUE)
    public String saveResponseByUrl(@RequestBody List<ObjectNode> responseDataNode) throws Exception {
        return userActivityServices.saveByResponseUrl(responseDataNode);
    }
}
