package com.Logger.utils.Aggregate;

import org.springframework.data.mongodb.core.aggregation.Aggregation;
import org.springframework.data.mongodb.core.aggregation.ConditionalOperators;
import org.springframework.data.mongodb.core.query.Criteria;
import static org.springframework.data.mongodb.core.aggregation.Aggregation.*;

public class PriceAggregate {
    public static Aggregation aggregatePriceAndResponse(Criteria criteria)
    {
     return newAggregation(
                match(criteria),
                unwind("hotels"),
                unwind("hotels.rooms"),
                unwind("hotels.rooms.rateplans"),
                unwind("hotels.rooms.rateplans.priceDetails"),
                match(criteria),
                project("uniqueId", "createdDate","userName", "userId")
                        .and("hotels.hotelId").as("hotelId")
                        .and("hotels.rooms.roomId").as("roomId")
                        .and("hotels.rooms.rateplans.rateplanId").as("rateplanId")
                        .and("hotels.rooms.rateplans.priceDetails.price").as("price")
                        .and("hotels.rooms.rateplans.priceDetails.date").as("date"),
                lookup("CMResponse","uniqueId","uniqueId", "responseField"),
                unwind("responseField",true),
                project("uniqueId", "userName", "createdDate", "userId", "rateplanId", "hotelId", "roomId", "price", "date")
                        .and("responseField.status").applyCondition(ConditionalOperators.ifNull("responseField.status").then("N/A"))
        );
    }
}
