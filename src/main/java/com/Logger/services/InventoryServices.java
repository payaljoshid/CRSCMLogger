package com.Logger.services;

import com.Logger.domain.model.Inventory;
import com.Logger.domain.model.CMResponse;
import com.Logger.domain.repository.InventoryImpl;
import com.Logger.domain.repository.InventoryRepository;
import com.Logger.domain.repository.CMResponseRepository;
import com.Logger.utils.ParserUtility;
import com.Logger.utils.Response.InventoryResponse;
import com.Logger.utils.RoomAvailabilityRequest;
import com.fasterxml.jackson.databind.node.ObjectNode;
import com.mongodb.MongoException;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class InventoryServices {

    @Autowired
    InventoryRepository inventoryRepository;

    @Autowired
    InventoryImpl inventoryImpl;

    @Autowired
    ParserUtility parserUtility;

    @Autowired
    CMResponseRepository cmResponseRepository;

    public List<Inventory> getInventoryInfo() {
        return inventoryRepository.findAll();
    }

    public String saveInventory(List<ObjectNode> inventoryNode) throws MongoException{
       List<Inventory> inventoryResult;
       try {
           List<Inventory> inventories = parserUtility.createInventoryObjectNode(inventoryNode);
           inventoryResult = inventoryRepository.insert(inventories);
       }
       catch (Exception mongoProblem)
       {
           throw new MongoException(mongoProblem.getMessage(),mongoProblem);
       }
       return inventoryResult.isEmpty()?"Cannot save Empty List!!":"Saved successfully";
   }

    public List<InventoryResponse> findForInventory(RoomAvailabilityRequest availabilityRequest) {
        return inventoryImpl.findForInventory(availabilityRequest);
    }

    public String saveResponse(CMResponse CMResponse) throws MongoException {
        CMResponse CMResponseResult;
        try {
            CMResponseResult = cmResponseRepository.save(CMResponse);
        }
        catch (Exception mongoProblem) {
            throw new MongoException(mongoProblem.getMessage(), mongoProblem);
        }
        return CMResponseResult == null ? "Cannot Save Empty Arguments" : "Saved successfully";
    }

    public List<CMResponse> getResponse()
    {
        return cmResponseRepository.findAll();
    }
    }











