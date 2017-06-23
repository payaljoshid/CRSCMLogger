package com.Logger.domain.model;
import com.Logger.utils.TypeValue;
import com.fasterxml.jackson.annotation.JsonFormat;
import lombok.Data;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

import java.util.Date;
import java.util.List;

@Document(collection = "CRSCMInventory")
@Data
public class Inventory {
    @Id
    public String _id;
    @JsonFormat(shape = JsonFormat.Shape.STRING, pattern = "yyyy-MM-dd@HH:mm:ss.SSSZ",timezone="GMT+5:30")
    public Date createdDate;
    public Long uniqueId;
    public Long reservationId;
    public Long revisionId;
    public TypeValue type;
    public List<Hotels> hotels;
}


















