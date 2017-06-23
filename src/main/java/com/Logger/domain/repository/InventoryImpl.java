package com.Logger.domain.repository;

import com.Logger.utils.Aggregate.InventoryAggregate;
import com.Logger.utils.CriteriaChecking;
import com.Logger.utils.Response.InventoryResponse;
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
public class InventoryImpl {
    final MongoTemplate mongoTemplate;
    Aggregation agg;
    AggregationResults<InventoryResponse> results;
    List<InventoryResponse> result;
    List<Criteria> criteriaList;

    @Autowired
    public InventoryImpl(MongoTemplate mongoTemplate) {
        this.mongoTemplate = mongoTemplate;
    }

    public List<InventoryResponse> findForInventory(RoomAvailabilityRequest availabilityRequest) {
        Criteria criteria= new Criteria();
        criteriaList = new ArrayList<>();
        CriteriaChecking.getInventoryCriteria(criteriaList,availabilityRequest);
        criteria = criteria.andOperator(criteriaList.toArray(new Criteria[criteriaList.size()]));
        agg= InventoryAggregate.aggregateInventoryAndResponse(criteria);
        results = mongoTemplate.aggregate(agg, "CRSCMInventory", InventoryResponse.class);
        result= results.getMappedResults();
        return result;
    }
}

