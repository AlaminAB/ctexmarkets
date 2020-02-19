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
      fetch(
        "https://cors-anywhere.herokuapp.com/https://min-api.cryptocompare.com/data/v2/histoday?fsym=" +
          "BTC" +
          "&tsym=" +
          "USD" +
          "&limit=30&api_key=1d4ae6f5d3c3d33b49b534bf3fc01e713eb6b430110ee8c7498033709a6c24b8",
        {
          method: "GET"
        }
      )
        .then(res => res.json())
        .then(res => {
          drawDailyChart(data, res.Data.Data, color, "daily_chart", "BTC");
        });
    }
  }
);

getJSON(
  "https://cors-anywhere.herokuapp.com/" +
    "http://aipoc.us-east-2.elasticbeanstalk.com/home/Get24hrCurr?strcurr=BTC",
  function(err, data) {
    if (err !== null) {
      console.log(err);
    } else {
      fetch(
        "https://cors-anywhere.herokuapp.com/https://min-api.cryptocompare.com/data/v2/histohour?fsym=" +
          "BTC" +
          "&tsym=" +
          "USD" +
          "&limit=24&api_key=1d4ae6f5d3c3d33b49b534bf3fc01e713eb6b430110ee8c7498033709a6c24b8",
        {
          method: "GET"
        }
      )
        .then(res => res.json())
        .then(res => {
          drawHourlyChart(data, res.Data.Data, color, "hourly_chart", "BTC");
        });
    }
  }
);

function drawDailyChart(data, data2, color, id, title) {
  var dates = data.map(function(d) {
    return d.TimeStamp;
  });
  var values = data.map(function(d) {
    return d.Index;
  });

  var value2 = data2.map(d => d.open);
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
          fill: false,
          yAxisID: "A"
        },
        {
          label: "USD/BTC Price",
          backgroundColor: "green",
          borderColor: "green",
          data: value2,
          fill: false,
          yAxisID: "B"
        }
      ]
    },
    options: {
      // responsive: true,
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
            position: "right",
            id: "B"
            // display: false
          },
          {
            position: "left",
            id: "A"
          }
        ]
      }
    }
  };

  var ctx = document.getElementById(id).getContext("2d");
  window.daily = new Chart(ctx, config);
}
function drawHourlyChart(data, data2, color, id, title) {
  var dates = data.map(function(d) {
    return d.TimeStamp;
  });
  var values = data.map(function(d) {
    return d.Index;
  });
  var value2 = data2.map(d => d.open);

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
          fill: false,
          yAxisID: "A"
        },
        {
          label: "USD/BTC Price",
          backgroundColor: "green",
          borderColor: "green",
          data: value2,
          fill: false,
          yAxisID: "B"
        }
      ]
    },
    options: {
      // responsive: true,
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
            position: "right",
            id: "B"
            // display: false
          },
          {
            position: "left",
            id: "A"
          }
        ]
      }
    }
  };

  var ctx = document.getElementById(id).getContext("2d");
  window.hourly = new Chart(ctx, config);
}

function onCoinChange(e) {
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
      fetch(
        "https://cors-anywhere.herokuapp.com/https://min-api.cryptocompare.com/data/v2/histohour?fsym=" +
          newCoin +
          "&tsym=" +
          "USD" +
          "&limit=24&api_key=1d4ae6f5d3c3d33b49b534bf3fc01e713eb6b430110ee8c7498033709a6c24b8",
        {
          method: "GET"
        }
      )
        .then(res => res.json())
        .then(res => {
          updateHourlyChart(data, res.Data.Data, e.value);
        });
    }
  });
  getJSON("https://cors-anywhere.herokuapp.com/" + dailyUrl, function(
    err,
    data
  ) {
    if (err !== null) {
      console.log(err);
    } else {
      fetch(
        "https://cors-anywhere.herokuapp.com/https://min-api.cryptocompare.com/data/v2/histoday?fsym=" +
          newCoin +
          "&tsym=" +
          "USD" +
          "&limit=30&api_key=1d4ae6f5d3c3d33b49b534bf3fc01e713eb6b430110ee8c7498033709a6c24b8",
        {
          method: "GET"
        }
      )
        .then(res => res.json())
        .then(res => {
          updateDailyChart(data, res.Data.Data, e.value);
        });
    }
  });
}

function updateHourlyChart(data, data2, coinName) {
  var dates = data.map(function(d) {
    return d.TimeStamp;
  });
  var values = data.map(function(d) {
    return d.Index;
  });
  var value2 = data2.map(d => d.open);

  var chart = window.hourly;
  chart.data.labels = dates;
  chart.data.datasets = [
    {
      label: coinName + " Mood",
      backgroundColor: color,
      borderColor: color,
      data: values,
      fill: false,
      yAxisID: "A"
    },
    {
      label: `USD/${coinName} Price`,
      backgroundColor: "green",
      borderColor: "green",
      data: value2,
      fill: false,
      yAxisID: "B"
    }
  ];
  chart.update();
}

function updateDailyChart(data, data2, coinName) {
  var dates = data.map(function(d) {
    return d.TimeStamp;
  });
  var values = data.map(function(d) {
    return d.Index;
  });
  var value2 = data2.map(d => d.open);

  var chart = window.daily;
  chart.data.labels = dates;
  chart.data.datasets = [
    {
      label: coinName + " Mood",
      backgroundColor: color,
      borderColor: color,
      data: values,
      fill: false,
      yAxisID: "A"
    },
    {
      label: `USD/${coinName} Price`,
      backgroundColor: "green",
      borderColor: "green",
      data: value2,
      fill: false,
      yAxisID: "B"
    }
  ];
  chart.update();
}

// // *************************** comair chart

var chart = null;
function showCompairChart(currency1, currency2) {
  var data = [];
  var green = {
    backgroundColor: "#BFE5D3",
    borderColor: "#0F9D58"
  };
  var red = {
    backgroundColor: "rgba(255, 99, 132, 0.2)",
    borderColor: "rgba(255, 99, 132, 1)"
  };
  fetch(
    "https://cors-anywhere.herokuapp.com/https://min-api.cryptocompare.com/data/v2/histohour?fsym=" +
      currency1 +
      "&tsym=" +
      currency2 +
      "&limit=48&api_key=1d4ae6f5d3c3d33b49b534bf3fc01e713eb6b430110ee8c7498033709a6c24b8",
    {
      method: "GET"
    }
  )
    .then(res => res.json())
    .then(res => {
      var canvas = document.getElementById("compairChart");
      canvas.style.width = "100%";

      var ctx = canvas.getContext("2d");
      data = res.Data.Data;
      var label = data.map(d => d.time * 1000);
      var value = data.map(d => d.open);
      if (value[0] > value[value.length - 1]) {
        var color = red;
      } else {
        var color = green;
      }
      if (chart) chart.destroy();
      chart = new Chart(ctx, {
        responsive: true,
        type: "line",
        data: {
          labels: label,
          datasets: [
            {
              label: currency1 + " to " + currency2,
              data: value,
              backgroundColor: color.backgroundColor,
              borderColor: color.borderColor,
              borderWidth: 1
            }
          ]
        },
        options: {
          scales: {
            yAxes: [
              {
                gridLines: {
                  display: true
                }
              }
            ],
            xAxes: [
              {
                gridLines: {
                  display: false
                },
                type: "time",
                time: {
                  unit: "hour",
                  displayFormats: {
                    hour: "hA",
                    day: "MMM D"
                  }
                }
              }
            ]
          }
        }
      });
    });
}
