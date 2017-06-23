package com.Logger.utils;

public final class regex {
    public static final String regex= "^(https?|ftp|file)://([-a-zA-Z0-9+&@#/%?=~_|!:,.;]*[-a-zA-Z0-9+&@#/%=~_|]|((\\d{1,3})\\.(\\d{1,3})\\.(\\d{1,3})\\.(\\d{1,3}):(\\d{4})))";
    public static String regexProperty = regex.concat("(/api/resources/)(\\d{1,})(/property/update)");
    public static String regexChain=regex.concat("(/api/resources/)(\\d{1,})(/chain)");
    public static String regexRooms=regex.concat("(/api/resources/)(\\d{1,})(/rooms/)(\\d{1,})");
    public static String regexRoomType=regex.concat("(/api/resources/)(\\d{1,})(/roomTypes/)(\\d{1,})");
    public static String regexMealPlans=regex.concat("(/api/resources/)(\\d{1,})(/mealPlans/)(\\d{1,})");
    public static String regexSurchargePlans=regex.concat("(/api/resources/)(\\d{1,})(/surchargePlans/)(\\d{1,})");
    public static String regexReservations=regex.concat("(/api/resources/)(\\d{1,})(/reservations)");
    public static String regexPrices=regex.concat("(/api/resources/)(\\d{1,})(/prices)");
    //public String utils= "^(https?|ftp|file)://([-a-zA-Z0-9+&@#/%?=~_|!:,.;]*[-a-zA-Z0-9+&@#/%=~_|]|((\\d{1,3})\\.(\\d{1,3})\\.(\\d{1,3})\\.(\\d{1,3}):(\\d{4})))";
}
