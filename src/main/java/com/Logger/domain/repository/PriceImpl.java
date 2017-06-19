package com.Logger.domain.repository;

import com.Logger.utils.Aggregate.PriceAggregate;
import com.Logger.utils.CriteriaChecking;
import com.Logger.utils.Response.PriceResponse;
import com.Logger.utils.RoomAvailabilityRequest;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.mongodb.core.MongoTemplate;
import org.springframework.data.mongodb.core.aggregation.Aggregation;
import org.springframework.data.mongodb.core.aggregation.AggregationResults;
import org.springframework.data.mongodb.core.query.Criteria;
import org.springframework.stereotype.Repository;

import java.util.ArrayList;
import java.util.List;

@Repository
public class PriceImpl {
    final MongoTemplate mongoTemplate;
    Aggregation agg;
    AggregationResults<PriceResponse> results;
    List<PriceResponse> result;
    List<Criteria> criteriaList;

    @Autowired
    public PriceImpl(MongoTemplate mongoTemplate) {
        this.mongoTemplate = mongoTemplate;
    }

    public List<PriceResponse> findForPrice(RoomAvailabilityRequest availabilityRequest) {
        Criteria criteria = new Criteria();
        criteriaList = new ArrayList<>();
        CriteriaChecking.getPriceCriteria(criteriaList,availabilityRequest);
        criteria = criteria.andOperator(criteriaList.toArray(new Criteria[criteriaList.size()]));
        agg = PriceAggregate.aggregatePriceAndResponse(criteria);
        results = mongoTemplate.aggregate(agg, "price", PriceResponse.class);
        result= results.getMappedResults();
        return result;
    }
}




















































 /* try {
            if ((hotelId != 0 && hotelId != null) && (roomId != 0 && roomId != null) && (rateplanId != 0 && rateplanId != null)) {
                agg = newAggregation(
                        match(Criteria.where("hotels.rooms.rateplans.priceDetails.date")
                                .gte(DateUtils.getDate(startDate, DateUtils.DB_FORMAT_DATETIME)).lte(DateUtils.getDate(endDate, DateUtils.DB_FORMAT_DATETIME))
                                .orOperator(Criteria.where("hotels.hotelId").is(hotelId).orOperator(
                                        Criteria.where("hotels.rooms.roomId").is(roomId).orOperator(
                                        Criteria.where("hotels.rooms.rateplans.rateplanId").is(rateplanId))))),
                        unwind("hotels"),
                        unwind("hotels.rooms"),
                        unwind("hotels.rooms.rateplans"),
                        unwind("hotels.rooms.rateplans.priceDetails"),
                        match(Criteria.where("hotels.rooms.rateplans.priceDetails.date")
                                .gte(DateUtils.getDate(startDate, DateUtils.DB_FORMAT_DATETIME)).lte(DateUtils.getDate(endDate, DateUtils.DB_FORMAT_DATETIME))
                                .orOperator(Criteria.where("hotels.hotelId").is(hotelId).orOperator(
                                        Criteria.where("hotels.rooms.roomId").is(roomId).orOperator(
                                                Criteria.where("hotels.rooms.rateplans.rateplanId").is(rateplanId))))),
                        group("_id","userName","userId","createdDate","hotels.hotelId", "hotels.rooms.roomId", "hotels.rooms.rateplans.rateplanId")
                                .push("$hotels.rooms.rateplans.priceDetails").as("priceDetails")
                                .push("$hotels.rooms.rateplans.rateplanId").as("rateplanId")
                                .push("$hotels.rooms.roomId").as("roomId"),
                        group("_id").push(new BasicDBObject("rateplanId", "$rateplanId").append("priceDetails", "$priceDetails")).as("rateplans")
                                .addToSet(new BasicDBObject("roomIdNew", "$roomId")).as("roomId"),
                        group("_id").push(new BasicDBObject("roomId", "$roomId.roomIdNew").append("rateplans", "$rateplans")).as("rooms"),
                               // .addToSet(new BasicDBObject("hotelIdNew", "$_id.hotelId")).as("hotelId"),
                        group("_id").push(new BasicDBObject("hotelId", "$_id.hotelId").append("rooms", "$rooms")).as("hotels"),
                        project("hotels").andInclude("_id._id","_id.userId","_id.userName","_id.createdDate")

                        );
            }
            else if ((hotelId != null && hotelId != 0) && (roomId != null && roomId != 0) && (rateplanId == null) ) {
                agg = newAggregation(
                        match(Criteria.where("hotels.rooms.rateplans.priceDetails.date").gte(DateUtils.getDate(startDate, DateUtils.DB_FORMAT_DATETIME)).lte(DateUtils.getDate(endDate, DateUtils.DB_FORMAT_DATETIME))
                                .andOperator(Criteria.where("hotels.hotelId").is(hotelId),Criteria.where("hotels.rooms.roomId").is(roomId))),
                        unwind("hotels"),
                        unwind("hotels.rooms"),
                        unwind("hotels.rooms.rateplans"),
                        unwind("hotels.rooms.rateplans.priceDetails"),
                        match(Criteria.where("hotels.rooms.rateplans.priceDetails.date").gte(DateUtils.getDate(startDate, DateUtils.DB_FORMAT_DATETIME)).lte(DateUtils.getDate(endDate, DateUtils.DB_FORMAT_DATETIME))
                                .andOperator(Criteria.where("hotels.hotelId").is(hotelId),Criteria.where("hotels.rooms.roomId").is(roomId))),
                        group("_id","userName","userId","createdDate","hotels.hotelId", "hotels.rooms.roomId", "hotels.rooms.rateplans.rateplanId")
                                .push("$hotels.rooms.rateplans.priceDetails").as("priceDetails")
                                .push("$hotels.rooms.rateplans.rateplanId").as("rateplanId")
                                .push("$hotels.rooms.roomId").as("roomId"),
                        group("_id").push(new BasicDBObject("rateplanId", "$rateplanId").append("priceDetails", "$priceDetails")).as("rateplans")
                                .addToSet(new BasicDBObject("roomIdNew", "$roomId")).as("roomId"),
                        group("_id").push(new BasicDBObject("roomId", "$roomId.roomIdNew").append("rateplans", "$rateplans")).as("rooms"),
                        // .addToSet(new BasicDBObject("hotelIdNew", "$_id.hotelId")).as("hotelId"),
                        group("_id").push(new BasicDBObject("hotelId", "$_id.hotelId").append("rooms", "$rooms")).as("hotels"),
                        project("hotels").andInclude("_id._id","_id.userId","_id.userName","_id.createdDate")

                );
            }
            else if (hotelId != null && hotelId != 0) {
                agg = newAggregation(
                        match(Criteria.where("hotels.rooms.rateplans.priceDetails.date").gte(DateUtils.getDate(startDate, DateUtils.DB_FORMAT_DATETIME)).lte(DateUtils.getDate(endDate, DateUtils.DB_FORMAT_DATETIME))
                                .andOperator(Criteria.where("hotels.hotelId").is(hotelId))),
                        unwind("hotels"),
                        unwind("hotels.rooms"),
                        unwind("hotels.rooms.rateplans"),
                        unwind("hotels.rooms.rateplans.priceDetails"),
                        match(Criteria.where("hotels.rooms.rateplans.priceDetails.date").gte(DateUtils.getDate(startDate, DateUtils.DB_FORMAT_DATETIME)).lte(DateUtils.getDate(endDate, DateUtils.DB_FORMAT_DATETIME))
                                .andOperator(Criteria.where("hotels.hotelId").is(hotelId))),
                        group("_id","userName","userId","createdDate","hotels.hotelId", "hotels.rooms.roomId", "hotels.rooms.rateplans.rateplanId")
                                .push("$hotels.rooms.rateplans.priceDetails").as("priceDetails")
                                .push("$hotels.rooms.rateplans.rateplanId").as("rateplanId")
                                .push("$hotels.rooms.roomId").as("roomId"),
                        group("_id").push(new BasicDBObject("rateplanId", "$rateplanId").append("priceDetails", "$priceDetails")).as("rateplans")
                                .addToSet(new BasicDBObject("roomIdNew", "$roomId")).as("roomId"),
                        group("_id").push(new BasicDBObject("roomId", "$roomId.roomIdNew").append("rateplans", "$rateplans")).as("rooms"),
                        // .addToSet(new BasicDBObject("hotelIdNew", "$_id.hotelId")).as("hotelId"),
                        group("_id").push(new BasicDBObject("hotelId", "$_id.hotelId").append("rooms", "$rooms")).as("hotels"),
                        project("hotels").andInclude("_id._id","_id.userId","_id.userName","_id.createdDate")

                );
            }
                else if ((hotelId == 0 ||  hotelId== null) && (roomId == 0 || roomId == null) && (rateplanId == 0 || rateplanId==null)) {
                agg = newAggregation(
                        match(Criteria.where("hotels.rooms.rateplans.priceDetails.date")
                                .gte(DateUtils.getDate(startDate, DateUtils.DB_FORMAT_DATETIME)).lte(DateUtils.getDate(endDate, DateUtils.DB_FORMAT_DATETIME))),
                        unwind("hotels"),
                        unwind("hotels.rooms"),
                        unwind("hotels.rooms.rateplans"),
                        unwind("hotels.rooms.rateplans.priceDetails"),
                        match(Criteria.where("hotels.rooms.rateplans.priceDetails.date")
                                .gte(DateUtils.getDate(startDate, DateUtils.DB_FORMAT_DATETIME)).lte(DateUtils.getDate(endDate, DateUtils.DB_FORMAT_DATETIME))),
                        group("_id","userName","userId","createdDate","hotels.hotelId", "hotels.rooms.roomId", "hotels.rooms.rateplans.rateplanId")
                                .push("$hotels.rooms.rateplans.priceDetails").as("priceDetails")
                                .push("$hotels.rooms.rateplans.rateplanId").as("rateplanId")
                                .push("$hotels.rooms.roomId").as("roomId"),
                        group("_id").push(new BasicDBObject("rateplanId", "$rateplanId").append("priceDetails", "$priceDetails")).as("rateplans")
                                .addToSet(new BasicDBObject("roomIdNew", "$roomId")).as("roomId"),
                        group("_id").push(new BasicDBObject("roomId", "$roomId.roomIdNew").append("rateplans", "$rateplans")).as("rooms"),
                        // .addToSet(new BasicDBObject("hotelIdNew", "$_id.hotelId")).as("hotelId"),
                        group("_id").push(new BasicDBObject("hotelId", "$_id.hotelId").append("rooms", "$rooms")).as("hotels"),
                        project("hotels").andInclude("_id._id","_id.userId","_id.userName","_id.createdDate")

                );
            }*/