package com.Logger.utils.Aggregate;

import org.springframework.data.mongodb.core.aggregation.Aggregation;
import org.springframework.data.mongodb.core.aggregation.ConditionalOperators;
import org.springframework.data.mongodb.core.query.Criteria;
import static org.springframework.data.mongodb.core.aggregation.Aggregation.*;

public class InventoryAggregate {
    public static Aggregation aggregateInventoryAndResponse(Criteria criteria)
    {
        return newAggregation(
                match(criteria),
                unwind("hotels"),
                unwind("hotels.rooms"),
                unwind("hotels.rooms.availability"),
                match(criteria),
                project("uniqueId", "createdDate", "type", "reservationId", "revisionId")
                        .and("hotels.hotelId").as("hotelId").and("hotels.rooms.roomId").as("roomId")
                        .and("hotels.rooms.availability.free").as("occupancy")
                        .and("hotels.rooms.availability.date").as("date"),
                lookup("response", "uniqueId", "uniqueId", "responseField"),
                unwind("responseField",true),
                project("uniqueId","type","createdDate","reservationId","revisionId","hotelId","roomId","occupancy","date")
                        .and("responseField.status").applyCondition(ConditionalOperators.ifNull("responseField.status").then("N/A"))
        );
    }
}

