function checkFileExists(userId, fileCategory) {
    return sendRequest('storage/put?userId=' + userId + '&fileCategory=' + fileCategory + '&' + config.COOKIE_TOKEN_NAME + '=' + $.cookie(config.COOKIE_TOKEN_NAME), "PUT", null, false);
}

function getFile(userId, fileCategory) {
    return config.APIURL + 'storage/get?userId=' + userId + '&fileCategory=' + fileCategory + '&' + config.COOKIE_TOKEN_NAME + '=' + $.cookie(config.COOKIE_TOKEN_NAME);
}