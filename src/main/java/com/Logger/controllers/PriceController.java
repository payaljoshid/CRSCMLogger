package com.Logger.controllers;

import com.Logger.domain.model.Price;
import com.Logger.services.PriceServices;
import com.Logger.utils.Response.PriceResponse;
import com.Logger.utils.RoomAvailabilityRequest;
import com.fasterxml.jackson.databind.node.ObjectNode;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.MediaType;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@RequestMapping("/api/logger/")
public class PriceController {
    @Autowired
    PriceServices priceServices;

    @RequestMapping(value = "/cm/price", method = RequestMethod.POST, consumes = MediaType.APPLICATION_JSON_VALUE)
    public String savePrice(@RequestBody List<ObjectNode> price)
    {
        return priceServices.savePrice(price);
    }


    @RequestMapping(value = "/cm/price/filter", method = RequestMethod.POST)
    public List<PriceResponse> findForPrice(@RequestBody RoomAvailabilityRequest availabilityRequest)
    {
        return priceServices.findForPrice(availabilityRequest);
    }

    @RequestMapping(value = "/cm/price", method = RequestMethod.GET)
    public List<Price> getPriceInfo() {
        return priceServices.getPriceInfo();
    }


}
