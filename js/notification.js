function getNotificationUser(userId) {
    return sendRequest('notificationuser/get?id=' + userId, "GET", null, false);
}

function createNotificationUser(data, callback) {
    return sendRequestAsync('notificationuser/post', "POST", data, callback);
}

function updateNotificationUser(data, callback) {
    return sendRequestAsync('notificationuser/put', "PUT", data, callback);
}

function createNotification(data) {
    return sendRequest('notification/post', "POST", data, false);
}

function updateNotification(data) {
    return sendRequest('notification/put', "PUT", data, false);
}

function getListNotification(userId) {
    return sendRequest('notification/getlist?userId=' + userId, "GET", null, false);
}