package com.Logger.utils;

import com.Logger.domain.model.*;
import com.Logger.domain.repository.*;
import com.mongodb.BasicDBObject;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;
import java.util.regex.Pattern;
import java.util.regex.PatternSyntaxException;

@Component
public class URLIdentification {
    static String result;
    static Boolean flag=false;
    @Autowired
    PropertyRepository propertyRepository;
    @Autowired
    ChainRepository chainRepository;
    @Autowired
    MealPlansRepository mealPlansRepository;
    @Autowired
    PriceUpdateRepository priceUpdateRepository;
    @Autowired
    ReservationsRepository reservationsRepository;
    @Autowired
    RoomsUpdateRepository roomsUpdateRepository;
    @Autowired
    RoomTypeRepository roomTypeRepository;
    @Autowired
    SurchargePlansRepository surchargePlansRepository;

    Property property=new Property();
    Chain chain=new Chain();
    MealPlans mealPlans=new MealPlans();
    PriceUpdate prices=new PriceUpdate();
    Reservations reservations=new Reservations();
    RoomsUpdate rooms=new RoomsUpdate();
    RoomType roomType=new RoomType();
    SurchargePlans surchargePlans=new SurchargePlans();

    public String checkForUrl(String url) {
    try {
        if (Pattern.matches(regex.regexProperty, url)) {
            result="Property";
        } else if (Pattern.matches(regex.regexChain, url)) {
            result="Chain";
        } else if (Pattern.matches(regex.regexRooms, url)) {
            result="Rooms";
        } else if (Pattern.matches(regex.regexRoomType, url)) {
            result="RoomType";
        } else if (Pattern.matches(regex.regexMealPlans, url)) {
            result="MealPlans";
        } else if (Pattern.matches(regex.regexSurchargePlans, url)) {
            result="SurchargePlans";
        } else if (Pattern.matches(regex.regexReservations, url)) {
            result="Reservations";
        } else if (Pattern.matches(regex.regexPrices, url)) {
            result="Prices";
        }
        else
            result="Unmatched";
    }
    catch (PatternSyntaxException syntaxException) {
        System.err.print(syntaxException);
    }
    return result;
}

    public String saveByUrl(Integer requestId, String url, BasicDBObject requestBody,Integer chainId, Integer propertyId, String results) throws Exception {
        try {
            switch (results) {
                case "Property":
                    property=(Property)setRequestParameter(property,requestId,url,requestBody,chainId,propertyId);
                    flag=propertyRepository.insert(property)!=null?flag=true:flag;
                    break;
                case "Chain":
                    chain=(Chain) setRequestParameter(chain,requestId,url,requestBody,chainId,propertyId);
                    flag=chainRepository.insert(chain)!=null?flag=true:flag;
                    break;
                case "Rooms":
                    rooms=(RoomsUpdate)setRequestParameter(rooms,requestId,url,requestBody,chainId,propertyId);
                    flag=roomsUpdateRepository.insert(rooms)!=null?flag=true:flag;
                    break;
                case "RoomType":
                    roomType=(RoomType)setRequestParameter(roomType,requestId,url,requestBody,chainId,propertyId);
                    flag=roomTypeRepository.insert(roomType)!=null?flag=true:flag;
                    break;
                case "MealPlans":
                    mealPlans=(MealPlans)setRequestParameter(mealPlans,requestId,url,requestBody,chainId,propertyId);
                    flag=mealPlansRepository.insert(mealPlans)!=null?flag=true:flag;
                    break;
                case "SurchargePlans":
                    surchargePlans=(SurchargePlans) setRequestParameter(surchargePlans,requestId,url,requestBody,chainId,propertyId);
                    flag=surchargePlansRepository.insert(surchargePlans)!=null?flag=true:flag;
                    break;
                case "Reservations":
                    reservations=(Reservations) setRequestParameter(reservations,requestId,url,requestBody,chainId,propertyId);
                    flag=reservationsRepository.insert(reservations)!=null?flag=true:flag;
                    break;
                case "Prices":
                    prices=(PriceUpdate)setRequestParameter(prices,requestId,url,requestBody,chainId,propertyId);
                    flag=priceUpdateRepository.insert(prices)!=null?flag=true:flag;
                    break;
                case "Unmatched":
                    break;
            }
        }
        catch (Exception exception)
        {
            throw new Exception(exception.getMessage(),exception);
        }
        return flag==true? "Saved Successfully":"Unmatched URL";
    }

    private Object setRequestParameter(RequestDataLog object, Integer requestId, String url, BasicDBObject requestBody,Integer chainId, Integer propertyId) {
        object.setRequestId(requestId);
        object.setUrl(url);
        object.setRequestBody(requestBody);
        object.setChainId(chainId);
        object.setPropertyId(propertyId);
        return object;
    }

    public String updateByRequestId(Integer requestId, String url, BasicDBObject responseBody, String results) {
return "";
    }
}