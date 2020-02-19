function loadCookiesFromQuery() {
    let urlParams = getUrlParams(location.search);
    if (urlParams) {
        if (urlParams[config.COOKIE_TOKEN_NAME]) {
            $.cookie(config.COOKIE_TOKEN_NAME, urlParams[config.COOKIE_TOKEN_NAME]);
        }
        if (urlParams[config.COOKIE_USER_ID]) {
            $.cookie(config.COOKIE_USER_ID, urlParams[config.COOKIE_USER_ID]);
        }
    }
}

function initPage() {
    //load prices
    loadPrices();
    setInterval(function () {
        loadPrices();
    }, 30000);
}

function loadPrices() {
    getPrice(loadPricesCallback);
}

function loadPricesCallback(result) {
    if (result.data) {
        $('#btc_buy').text(result.data.BtcBuy);
        $('#btc_sell').text(result.data.BtcSell);
        $('#eth_buy').text(result.data.EthBuy);
        $('#eth_sell').text(result.data.EthSell);
    }
}