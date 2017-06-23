package com.Logger.controllers;

import com.Logger.domain.model.Inventory;
import com.Logger.domain.model.CMResponse;
import com.Logger.services.InventoryServices;
import com.Logger.utils.Response.InventoryResponse;
import com.Logger.utils.RoomAvailabilityRequest;
import com.fasterxml.jackson.databind.node.ObjectNode;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.MediaType;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RequestMapping("/api/logger/")
@RestController
public class InventoryController {

            @Autowired
            InventoryServices inventoryServices;

            @RequestMapping(value = "/cm/inventory", method = RequestMethod.POST, consumes = MediaType.APPLICATION_JSON_VALUE)
            public String saveInventory(@RequestBody List<ObjectNode> inventoryNode) {
                return inventoryServices.saveInventory(inventoryNode);
            }

            @RequestMapping(value = "/cm/inventory", method = RequestMethod.GET)
            public List<Inventory> getInventoryInfo() {
                return inventoryServices.getInventoryInfo();
            }

            @RequestMapping(value = "/cm/inventory/roomAvailability", method = RequestMethod.POST)
            public List<InventoryResponse> findForInventory(@RequestBody RoomAvailabilityRequest availabilityRequest) {
                return inventoryServices.findForInventory(availabilityRequest);
            }

            @RequestMapping(value = "/crs/response/status", method = RequestMethod.POST,consumes = MediaType.APPLICATION_JSON_VALUE)
            public String saveResponse(@RequestBody CMResponse CMResponse) {
                return inventoryServices.saveResponse(CMResponse);
            }

            @RequestMapping(value = "/crs/response/status", method = RequestMethod.GET)
            public List<CMResponse> getResponse() {
                return inventoryServices.getResponse();
            }
}
