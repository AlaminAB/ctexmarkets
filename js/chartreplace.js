var color = "red";

var getJSON = function(url, callback) {
  var xhr = new XMLHttpRequest();
  xhr.open("GET", url, true);
  xhr.responseType = "json";
  xhr.onload = function() {
    var status = xhr.status;
    if (status === 200) {
      callback(null, xhr.response);
    } else {
      callback(status, xhr.response);
    }
  };
  xhr.send();
};

getJSON(
  "https://cors-anywhere.herokuapp.com/" +
    "http://aipoc.us-east-2.elasticbeanstalk.com/home/GetDailyCurr?strcurr=BTC",
  function(err, data) {
    if (err !== null) {
      console.log(err);
    } else {
      drawDailyChart(data, color, "daily_chart", "BTC");
    }
  }
);

getJSON(
  "https://cors-anywhere.herokuapp.com/" +
    "http://aipoc.us-east-2.elasticbeanstalk.com/home/Get24hrCurr?strcurr=LTC",
  function(err, data) {
    if (err !== null) {
      console.log(err);
    } else {
      drawHourlyChart(data, color, "hourly_chart", "BTC");
    }
  }
);

function drawDailyChart(data, color, id, title) {
  var dates = data.map(function(d) {
    return d.TimeStamp;
  });
  var values = data.map(function(d) {
    return d.Index;
  });
  var config = {
    type: "line",
    data: {
      labels: dates,
      datasets: [
        {
          label: title,
          backgroundColor: color,
          borderColor: color,
          data: values,
          fill: false
        }
      ]
    },
    options: {
      responsive: true,
      title: {
        display: true,
        text: "Daily Sentiment"
      },

      hover: {
        mode: "nearest",
        intersect: true
      },
      scales: {
        xAxes: [
          {
            display: true,
            type: "time",
            time: {
              tooltipFormat: "MMM D"
            }
          }
        ],
        yAxes: [
          {
            display: true
          }
        ]
      }
    }
  };

  var ctx = document.getElementById(id).getContext("2d");
  window.daily = new Chart(ctx, config);
}
function drawHourlyChart(data, color, id, text) {
  var dates = data.map(function(d) {
    return d.TimeStamp;
  });
  var values = data.map(function(d) {
    return d.Index;
  });
  var config = {
    type: "line",
    data: {
      labels: dates,
      datasets: [
        {
          label: text,
          backgroundColor: color,
          borderColor: color,
          data: values,
          fill: false
        }
      ]
    },
    options: {
      responsive: true,
      title: {
        display: true,
        text: "Hourly Sentiment"
      },

      hover: {
        mode: "nearest",
        intersect: true
      },
      scales: {
        xAxes: [
          {
            display: true,
            type: "time",
            time: {
              tooltipFormat: "hh:mm a"
            }
          }
        ],
        yAxes: [
          {
            display: true
          }
        ]
      }
    }
  };

  var ctx = document.getElementById(id).getContext("2d");
  window.hourly = new Chart(ctx, config);
}

function onCoinChange(e) {
  console.log(e);
  var newCoin = e.value;
  var dailyUrl =
    "http://aipoc.us-east-2.elasticbeanstalk.com/home/GetDailyCurr?strcurr=" +
    newCoin;
  var hourlyUrl =
    "http://aipoc.us-east-2.elasticbeanstalk.com/home/Get24hrCurr?strcurr=" +
    newCoin;

  getJSON("https://cors-anywhere.herokuapp.com/" + hourlyUrl, function(
    err,
    data
  ) {
    if (err !== null) {
      console.log(err);
    } else {
      updateHourlyChart(data, e.value);
    }
  });
  getJSON("https://cors-anywhere.herokuapp.com/" + dailyUrl, function(
    err,
    data
  ) {
    if (err !== null) {
      console.log(err);
    } else {
      updateDailyChart(data, e.value);
    }
  });
}

function updateHourlyChart(data, coinName) {
  var dates = data.map(function(d) {
    return d.TimeStamp;
  });
  var values = data.map(function(d) {
    return d.Index;
  });

  var chart = window.hourly;
  chart.data.labels = dates;
  chart.data.datasets = [
    {
      label: coinName,
      backgroundColor: color,
      borderColor: color,
      data: values,
      fill: false
    }
  ];
  chart.update();
}

function updateDailyChart(data, coinName) {
  var dates = data.map(function(d) {
    return d.TimeStamp;
  });
  var values = data.map(function(d) {
    return d.Index;
  });

  var chart = window.daily;
  chart.data.labels = dates;
  chart.data.datasets = [
    {
      label: coinName,
      backgroundColor: color,
      borderColor: color,
      data: values,
      fill: false
    }
  ];
  chart.update();
}
