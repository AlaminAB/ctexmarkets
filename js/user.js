function getUser(userId) {
    return sendRequest('user/get?id=' + userId, "GET", null, false);
}

function updateUser(data) {
    return sendRequest('user/put', "PUT", data, false);
}

function uploadFile(file, userId, fileCategory) {
    var form = $('#upload_form')[0];
    var formData = new FormData(form);

    formData.append('fileName', file);

    var result = {};
    $.ajax({
        crossOrigin: true,
        crossDomain: true,
        url: config.APIURL + 'storage/post?userId=' + userId + '&fileCategory=' + fileCategory + '&' + config.COOKIE_TOKEN_NAME + '=' + $.cookie(config.COOKIE_TOKEN_NAME),
        type: "POST",
        async: false,
        data: formData,
        contentType: false,
        processData: false,
        headers: { 'TOKEN': $.cookie(config.COOKIE_TOKEN_NAME) },
        beforeSend: function () {
        },
        success: function (response) {
            result.Success = true;
        },
        error: function (err) {
            result.Success = false;
            result.Message = err.responseJSON.ExceptionMessage;
        }
    });
    return result;
}

function getUserVerification(userId) {
    return sendRequest('userverification/get?id=' + userId, "GET", null, false);
}

function verifyUserFiles(userId) {
    return sendRequest('userverification/put?id=' + userId, "PUT", null, false);
}

function createSupportTicket(data, callback) {
    return sendRequestAsync('supportticket/post', "POST", data, callback);
}

function getUserStatistics(userId, callback) {
    return sendRequestAsync('user/post?id=' + userId, "POST", null, callback);
}