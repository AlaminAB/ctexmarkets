function sendRequest(url, type, data, async) {
    var result = {};

    $.ajax({
        url: config.APIURL + url,
        crossOrigin: true,
        crossDomain: true,
        type: type,
        async: async,
        dataType: 'json',
        data: data,
        headers: { 'TOKEN': $.cookie(config.COOKIE_TOKEN_NAME) },
        beforeSend: function () {
        },
        success: function (response) {
            result.data = response.data;
            result.Success = true;
        },
        error: function (err) {
            if(err.responseJSON) {
                if(err.responseJSON.Message)
                    toastr.error(err.responseJSON.Message);
                else if(err.responseJSON.ExceptionMessage)
                    toastr.error(err.responseJSON.ExceptionMessage);
            }   
            else
                toastr.error("Unknown error.");

            if (err.status == 403) {
                setInterval(function () {
                    window.location.href = config.DEFAULT_PAGE;
                }, 1000);
            }
            result.Success = false;
            result.Message = err.responseJSON.ExceptionMessage || err.responseJSON.Message;
        }
    });

    return result;
}

function sendRequestAsync(url, type, data, callback, beforeSendMethod) {
    jQuery.support.cors = true;
    $.ajax({
        crossOrigin: true,
        crossDomain: true,
        url: config.APIURL + url,
        type: type,
        async: true,
        dataType: 'json',
        data: data,
        headers: { 'TOKEN': $.cookie(config.COOKIE_TOKEN_NAME) },
        beforeSend: beforeSendMethod,
        success: callback,
        error: function (err) {
            if(err.responseJSON) {
                if(err.responseJSON.Message)
                    toastr.error(err.responseJSON.Message);
                else if(err.responseJSON.ExceptionMessage)
                    toastr.error(err.responseJSON.ExceptionMessage);
            }   
            else
                toastr.error("Unknown error.");

            if (err.status == 403) {
                setInterval(function () {
                    window.location.href = config.DEFAULT_PAGE;
                }, 1000);
            }
        }
    });
}

function escapeObject(data) {
    var result = {};
    $.each(data, function (key, value) {
        if ($.type(value) === "string")
            value = value.replace(/\ /g, '&nbsp;');
        result[key] = value;
    });
    return result;
}

function onlyNumbers(evt) {
    var e = event || evt; // for trans-browser compatibility
    var charCode = e.which || e.keyCode;
    if (charCode == 46) return true;
    if (charCode > 31 && (charCode < 48 || charCode > 57))
        return false;

    return true;

}

function dateToString(date) {
    return date.getFullYear() + '-' + fillNumber(date.getMonth() + 1) + '-' + fillNumber(date.getDate()) + ' ' + fillNumber(date.getHours())
        + ':' + fillNumber(date.getMinutes()) + ':' + fillNumber(date.getSeconds());
}

function fillNumber(number) {
    return number < 10 ? '0' + number : number;
}

function getUserIP() {
    var ret_ip;
    $.ajaxSetup({ async: false });
    $.get('https://jsonip.com/', function (r) {
        ret_ip = r.ip;
    });
    return ret_ip;
}

function getUrlParams(urlOrQueryString) {
    if ((i = urlOrQueryString.indexOf('?')) >= 0) {
        const queryString = urlOrQueryString.substring(i + 1);
        if (queryString) {
            return _mapUrlParams(queryString);
        }
    }

    return {};
}

function _mapUrlParams(queryString) {
    return queryString    
      .split('&') 
      .map(function(keyValueString) { return keyValueString.split('=') })
      .reduce(function(urlParams, [key, value]) {
          if (Number.isInteger(parseInt(value)) && parseInt(value) == value) {
              urlParams[key] = parseInt(value);
          } else {
              urlParams[key] = decodeURI(value);
          }
          return urlParams;
      }, {});
}