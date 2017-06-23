package com.Logger.utils;

import com.Logger.domain.model.*;
import com.fasterxml.jackson.databind.JsonNode;
import com.fasterxml.jackson.databind.ObjectMapper;
import com.fasterxml.jackson.databind.node.ArrayNode;
import com.fasterxml.jackson.databind.node.ObjectNode;
import com.mongodb.BasicDBObject;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.LinkedList;
import java.util.List;

@Service
public class ParserUtility {
    @Autowired
    Parser parser;
    @Autowired
    URLIdentification urlIdentification;

    List<Inventory> inventoryList;
    List<Price> priceList;
    public List<Inventory> createInventoryObjectNode(List<ObjectNode> inventoryNode) {
        inventoryList = new LinkedList<>();
        for (ObjectNode node : inventoryNode) {
            Inventory inventory = new Inventory();
            inventory.createdDate = parser.getCurrentDate();
            inventory.uniqueId = parser.getLong("uniqueId", node);
            inventory.reservationId = parser.getLong("reservationId", node);
            inventory.revisionId = parser.getLong("revisionId", node);
            inventory.type = parser.getTypeValue("revisionId", "reservationId", node);

            ArrayNode hotelsNode = (ArrayNode) node.get("hotels");
            List<Hotels> hotels = new LinkedList<>();
            for (JsonNode hotelNode : hotelsNode) {
                Hotels hotel = new Hotels();
                hotel.hotelId = hotelNode.get("hotelId").intValue();

                List<Rooms> rooms = new LinkedList<>();
                ArrayNode roomsNode = (ArrayNode) hotelNode.get("rooms");
                for (JsonNode roomNode : roomsNode) {
                    Rooms room = new Rooms();
                    room.roomId = roomNode.get("roomId").intValue();

                    List<Availability> availabilities = new LinkedList<>();
                    ArrayNode availabilitiesNode = (ArrayNode) roomNode.get("availability");
                    for (JsonNode availabilityNode : availabilitiesNode) {
                        Availability availability = new Availability();
                        availability.free = availabilityNode.get("free").intValue();
                        availability.date = parser.getDate("date", availabilityNode);
                        availabilities.add(availability);
                    }
                    rooms.add(room);
                    room.availability = availabilities;
                }
                hotel.rooms = rooms;
                hotels.add(hotel);
                inventory.hotels = hotels;
            }
            inventoryList.add(inventory);
        }
        return inventoryList;
    }

    public List<Price> createPriceObjectNode(List<ObjectNode> priceNode) {
        priceList = new LinkedList<>();
        for (ObjectNode node : priceNode) {
            Price price = new Price();
            price.userId = parser.getLong("userId", node);
            price.userName = parser.getString("userName", node);
            price.createdDate = parser.getCurrentDate();
            price.uniqueId = parser.getLong("uniqueId", node);

            ArrayNode hotelsNode = (ArrayNode) node.get("hotels");
            List<Hotels> hotels = new LinkedList<>();
            for (JsonNode hotelNode : hotelsNode) {
                Hotels hotel = new Hotels();
                hotel.hotelId = hotelNode.get("hotelId").intValue();

                List<Rooms> rooms = new LinkedList<>();
                ArrayNode roomsNode = (ArrayNode) hotelNode.get("rooms");
                for (JsonNode roomNode : roomsNode) {
                    Rooms room = new Rooms();
                    room.roomId = Integer.parseInt(roomNode.get("roomId").textValue());

                    ArrayNode ratePlansNodeList = (ArrayNode) roomNode.get("rateplans");
                    List<RatePlans> ratePlans = new LinkedList<>();
                    for (JsonNode ratePlanNode : ratePlansNodeList) {
                        RatePlans ratePlan = new RatePlans();
                        ratePlan.rateplanId = Integer.parseInt(ratePlanNode.get("rateplanId").textValue());

                        List<PriceDetails> priceDetails = new LinkedList<>();
                        ArrayNode priceDetailsNodeList = (ArrayNode) ratePlanNode.get("priceDetails");
                        for (JsonNode priceDetailNode : priceDetailsNodeList) {
                            PriceDetails priceDetail = new PriceDetails();
                            priceDetail.date = parser.getDate("date", priceDetailNode);

                            JsonNode pricesNode = priceDetailNode.get("price");
                            Prices pricesObject = new Prices();
                            pricesObject.triple = pricesNode.get("Triple").decimalValue();
                            pricesObject.quad = pricesNode.get("Quad").decimalValue();
                            pricesObject.single = pricesNode.get("Single").decimalValue();
                            pricesObject.extraInfant = pricesNode.get("Extra Infant").decimalValue();
                            pricesObject.Double = pricesNode.get("Double").decimalValue();
                            pricesObject.extraAdult = pricesNode.get("Extra Adult").decimalValue();
                            pricesObject.extraChild = pricesNode.get("Extra Child").decimalValue();

                            priceDetail.price = pricesObject;
                            priceDetails.add(priceDetail);
                        }
                        ratePlan.priceDetails = priceDetails;
                        ratePlans.add(ratePlan);
                    }
                    room.rateplans = ratePlans;
                    rooms.add(room);

                }
                hotel.rooms = rooms;
                hotels.add(hotel);
            }
            price.hotels = hotels;
            priceList.add(price);
        }
        return priceList;
    }

    public String createRequestDataNode(List<ObjectNode> requestDataNode) throws Exception {
        String results;
        String result=null;
            for (ObjectNode node : requestDataNode) {
                Integer requestId = parser.getInt("requestId", node);
                String url = parser.getString("url", node);
                ObjectMapper mapper = new ObjectMapper();
                BasicDBObject requestBody = mapper.convertValue(node.get("requestBody"), BasicDBObject.class);
                Integer chainId = parser.getInt("chainId", node);
                Integer propertyId = parser.getInt("propertyId", node);
                results=urlIdentification.checkForUrl(url);
                result=urlIdentification.saveByUrl(requestId, url, requestBody, chainId, propertyId, results);
            }
    return result;
    }

    public String createResponseDataNode(List<ObjectNode> responseDataNode) {
        String results;
        String result=null;
        for (ObjectNode node : responseDataNode) {
            Integer requestId = parser.getInt("requestId", node);
            String url = parser.getString("url", node);
            ObjectMapper mapper = new ObjectMapper();
            BasicDBObject responseBody = mapper.convertValue(node.get("responseBody"), BasicDBObject.class);
            results=urlIdentification.checkForUrl(url);
            result=urlIdentification.updateByRequestId(requestId, url, responseBody, results);
        }
        return result;
    }
}






















