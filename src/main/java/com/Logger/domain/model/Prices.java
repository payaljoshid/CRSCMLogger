package com.Logger.domain.model;

import com.fasterxml.jackson.annotation.JsonGetter;
import lombok.Data;
import org.springframework.data.mongodb.core.mapping.Field;

import java.math.BigDecimal;

@Data
public class Prices {
    @Field(value="Triple")
    public BigDecimal triple;
    @Field(value="Quad")
    public BigDecimal quad;
    @Field(value="Single")
    public BigDecimal single;
    @Field(value="Extra Infant")
    public BigDecimal extraInfant;
    public BigDecimal Double;
    @Field(value="Extra Adult")
    public BigDecimal extraAdult;
    @Field(value="Extra Child")
    public BigDecimal extraChild;

    @JsonGetter("Triple")
    public BigDecimal getTriple() {
        return triple;
    }

    @JsonGetter("Quad")
    public BigDecimal getQuad() {
        return quad;
    }

    @JsonGetter("Single")
    public BigDecimal getSingle() {
        return single;
    }

    @JsonGetter("Extra Infant")
    public BigDecimal getExtraInfant() {
        return extraInfant;
    }

    @JsonGetter("Double")
    public BigDecimal getDouble() {
        return Double;
    }

    @JsonGetter("Extra Adult")
    public BigDecimal getExtraAdult() {
        return extraAdult;
    }

    @JsonGetter("Extra Child")
    public BigDecimal getExtraChild() {
        return extraChild;
    }
}
