const cookieToken = "TOKEN";
const cookieUserId = "USERID";

function login(username, password, captcha, callback, beforeSend)
{
    var data = {
        email: username,
        password: password,
        vcode: captcha,
        IPAddress: getUserIP()
    };

    return sendRequestAsync('public/login/post', 'POST', data, callback, beforeSend);
}

function logout()
{
    var data = {
        "UserId": $.cookie(config.COOKIE_USER_ID),
        "IPAddress": getUserIP()
    };
    logoutRequest(data);

    $.removeCookie(config.COOKIE_TOKEN_NAME);
    $.removeCookie(config.COOKIE_USER_ID);
    window.location.href = config.DEFAULT_PAGE;
}

function createUser(data)
{
    return sendRequest('public/signup/post', "POST", data, false);
   /* var result = {};
    $.ajax({
        url: config.APIURL + 'public/signup/post',
        type: "POST",
        async: false,
        data: data,
        dataType: 'json',
        success: function (response) {
            result.data = response.data;
            result.Success = true;
        },
        error: function (err) {
            result.Success = false;

            if (err.responseJSON.ExceptionMessage)
            {
                var message = err.responseJSON.ExceptionMessage.toLowerCase();
                if (message.indexOf("duplicate") >= 0 && message.indexOf("phonenumber_unique") >= 0)
                {
                    result.Message = "User with current phone number already exists."
                }
                if (message.indexOf("duplicate") >= 0 && message.indexOf("emailaddress_unique") >= 0) {
                    result.Message = "User with current email address already exists."
                }
                if (message.indexOf("duplicate") >= 0 && message.indexOf("primary") >= 0) {
                    result.Message = "User with current user id already exists."
                }
            }
        }
    });

    return result;*/
}

function forgotPassword(data) {
    return sendRequest('public/login/get', "GET", data, false);
}

function changePassword(data) {
    return result = sendRequest('public/login/put', "PUT", data, false);
}

function logoutRequest(data) {
    return result = sendRequestAsync('public/login/delete', "DELETE", data);
}