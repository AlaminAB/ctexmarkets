function getAccount(userId, exchangeType, currency, callback) {
    return sendRequestAsync('account/get?userId=' + userId + '&exchangeType=' + exchangeType + '&currency=' + currency, "GET", null, callback);
}

function getAccountSync(userId, exchangeType, currency) {
    return sendRequest('account/get?userId=' + userId + '&exchangeType=' + exchangeType + '&currency=' + currency, "GET", null, false);
}

function transferSync(userId, exchangeType, currency, amount, address, accountId, toExchangeType) {
    return sendRequest('transfer/post?userId=' + userId + '&exchangeType=' + exchangeType + '&currency=' + currency + '&amount=' + amount + '&address=' + address
        + '&accountId=' + accountId + '&toExchangeType=' + toExchangeType,
        "Post", null, false);
}