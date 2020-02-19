function getExchangeUser(userId) {
    return sendRequest('exchangeuser/getlist?userid=' + userId, "GET", null, false);
}

function createExchange(data) {
    return sendRequest('exchangeuser/post', "POST", data, false);
}

function updateExchange(data) {
    return sendRequest('exchangeuser/put', "PUT", data, false);
}