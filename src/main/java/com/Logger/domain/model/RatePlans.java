package com.Logger.domain.model;

import lombok.Data;

import java.util.List;

@Data
public class RatePlans {
    public List<PriceDetails> priceDetails;
    public Integer rateplanId;
    public List<Integer> otaIds;
}
