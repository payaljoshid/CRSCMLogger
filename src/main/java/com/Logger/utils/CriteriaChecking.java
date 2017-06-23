package com.Logger.utils;

import org.springframework.data.mongodb.core.query.Criteria;

import java.util.List;

public class CriteriaChecking {

    public static void checkForNullValue(List<Criteria> criteriaList, RoomAvailabilityRequest request) {
        if (request.startDate == null && request.endDate == null && request.hotelId == null
                && request.roomId == null && request.reservationId == null && request.rateplanId==null ) {
            criteriaList.add(new Criteria());
        }
    }

    public static void checkForInventoryDateRange(List<Criteria> criteriaList, RoomAvailabilityRequest request) {
        if(request.startDate != null && request.endDate != null)
        {
            criteriaList.add(Criteria.where("hotels.rooms.availability.date")
                    .gte(DateUtils.getDate(request.startDate, DateUtils.DB_FORMAT_DATETIME))
                    .lte(DateUtils.getDate(request.endDate, DateUtils.DB_FORMAT_DATETIME)));
        }
        else if(request.startDate != null)
        {
            criteriaList.add(Criteria.where("hotels.rooms.availability.date")
                    .is(DateUtils.getDate(request.startDate, DateUtils.DB_FORMAT_DATETIME)));
        }
        else if(request.endDate != null)
        {
            criteriaList.add(Criteria.where("hotels.rooms.availability.date")
                    .is(DateUtils.getDate(request.endDate, DateUtils.DB_FORMAT_DATETIME)));
        }
    }

    public static void checkForPriceDateRange(List<Criteria> criteriaList, RoomAvailabilityRequest request) {
        if(request.startDate != null && request.endDate != null)
        {
            criteriaList.add(Criteria.where("hotels.rooms.rateplans.priceDetails.date")
                    .gte(DateUtils.getDate(request.startDate, DateUtils.DB_FORMAT_DATETIME))
                    .lte(DateUtils.getDate(request.endDate, DateUtils.DB_FORMAT_DATETIME)));
        } else if(request.startDate != null)
        {
            criteriaList.add(Criteria.where("hotels.rooms.rateplans.priceDetails.date")
                    .is(DateUtils.getDate(request.startDate, DateUtils.DB_FORMAT_DATETIME)));
        } else if(request.endDate != null)
        {
            criteriaList.add(Criteria.where("hotels.rooms.rateplans.priceDetails.date")
                    .is(DateUtils.getDate(request.endDate, DateUtils.DB_FORMAT_DATETIME)));
        }
    }

    public static void checkForHotelIdOrRoomIdOrRateplanId(List<Criteria> criteriaList, RoomAvailabilityRequest request) {
        if(request.hotelId != null  && request.roomId != null && request.rateplanId!=null)
        {
            criteriaList.add(Criteria.where("hotels.hotelId").is(request.hotelId).and("hotels.rooms.roomId").is(request.roomId).and("hotels.rooms.rateplans.rateplanId").is(request.rateplanId));
        }
        else if(request.hotelId != null && request.roomId != null )
        {
            criteriaList.add(Criteria.where("hotels.hotelId").is(request.hotelId).and("hotels.rooms.roomId").is(request.roomId));
        }
        else if(request.hotelId != null) {
            criteriaList.add(Criteria.where("hotels.hotelId").is(request.hotelId));
        }
    }

    public static void checkForReservationId(List<Criteria> criteriaList, RoomAvailabilityRequest request)
    {
        if (request.reservationId != null) {
            criteriaList.add(Criteria.where("reservationId").is(request.reservationId));
        }
    }

    public static void getInventoryCriteria(List<Criteria> criteriaList,RoomAvailabilityRequest availabilityRequest) {
        checkForNullValue(criteriaList,availabilityRequest);
        checkForInventoryDateRange(criteriaList,availabilityRequest);
        checkForHotelIdOrRoomIdOrRateplanId(criteriaList,availabilityRequest);
        checkForReservationId(criteriaList,availabilityRequest);
    }

    public static void getPriceCriteria(List<Criteria> criteriaList,RoomAvailabilityRequest availabilityRequest) {
        checkForNullValue(criteriaList, availabilityRequest);
        checkForPriceDateRange(criteriaList, availabilityRequest);
        checkForHotelIdOrRoomIdOrRateplanId(criteriaList, availabilityRequest);
    }
}
