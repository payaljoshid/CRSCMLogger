package com.Logger.utils.Response;

import com.Logger.utils.TypeValue;
import com.fasterxml.jackson.annotation.JsonFormat;
import lombok.Data;

import java.util.Date;

@Data
public class InventoryResponse {
    @JsonFormat(shape = JsonFormat.Shape.STRING,pattern = "yy-MM-dd")
    Date date;
    Long reservationId;
    Long revisionId;
    Integer hotelId;
    Integer roomId;
    Integer occupancy;
    Long uniqueId;
    String status;
    TypeValue type;
    @JsonFormat(shape = JsonFormat.Shape.STRING, pattern = "yyyy-MM-dd@HH:mm:ss.SSSZ",timezone="GMT+5:30")
    Date createdDate;
}
