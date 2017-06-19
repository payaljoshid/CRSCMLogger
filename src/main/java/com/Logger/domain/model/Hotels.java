package com.Logger.domain.model;

import lombok.Data;

import java.util.List;


@Data
public class Hotels{
    public Integer hotelId;
    public List<Rooms> rooms;

}
