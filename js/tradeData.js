function getTradeDataUser(data, callback) {
    
    return sendRequestAsync('TradeData/Put', "PUT", data, callback);
}

