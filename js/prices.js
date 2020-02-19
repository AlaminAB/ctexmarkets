function getPrice(callback) {
    result = sendRequestAsync('price/get', "GET", null, callback);
}

function getPrices(baseCurrency, targetCurrency, requestId, callback, exchangeType) {
    var url = 'price/post?baseCurrency=' + baseCurrency + '&targetCurrency=' + targetCurrency + '&requestId=' + requestId;
    if(exchangeType) {
        url += '&exchangeType=' + exchangeType;
    }

    result = sendRequestAsync(url, "POST", null, callback);
}

function getPricesSync(baseCurrency, targetCurrency, requestId, exchangeType) {
    var url = 'price/post?baseCurrency=' + baseCurrency + '&targetCurrency=' + targetCurrency + '&requestId=' + requestId;
    if (exchangeType) {
        url += '&exchangeType=' + exchangeType;
    }

    return sendRequest(url, "POST", null, false);
}

function verifyExchange(userId, exchangeTypeId) {
    return sendRequest('balance/post?userId=' + userId + "&exchangeType=" + exchangeTypeId, "POST", null, false);
}

function getBalance(callback) {
    return sendRequestAsync('balance/get?userId=' + $.cookie(config.COOKIE_USER_ID), "GET", null, callback);
}

function getBalanceCurrency(userId, exchangeType, currency, callback) {
    return sendRequestAsync('balance/put?userId=' + userId + '&exchangeType=' + exchangeType + '&currency=' + currency, "PUT", null, callback);
}

function getBalanceCurrencySync(userId, exchangeType, currency) {
    return sendRequest('balance/put?userId=' + userId + '&exchangeType=' + exchangeType + '&currency=' + currency, "PUT", null, false);
}

function buy(exchangeType, userId, majorCurrency, minorCurrency, rate, amount, callback) {
    result = sendRequestAsync('BuySell/get?exchangeType=' + 
        exchangeType + '&userId=' + userId + '&majorCurrency=' + majorCurrency + '&minorCurrency=' + minorCurrency + '&rate=' + rate + '&amount=' + amount,
        "GET", null, callback);
}

function sell(exchangeType, userId, majorCurrency, minorCurrency, rate, amount, callback) {
    result = sendRequestAsync('BuySell/post?exchangeType=' +
        exchangeType + '&userId=' + userId + '&majorCurrency=' + majorCurrency + '&minorCurrency=' + minorCurrency + '&rate=' + rate + '&amount=' + amount,
        "POST", null, callback);
}

function getArbitrage(data, callback) {
    return sendRequestAsync('arbitrage/post', "POST", data, callback);
}