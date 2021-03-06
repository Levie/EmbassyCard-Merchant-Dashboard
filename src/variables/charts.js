
const Chart = require("chart.js");

Chart.pluginService.register({
  beforeDraw: function (chart) {
    if (chart.config.options.elements.center) {
      //Get ctx from string
      var ctx = chart.chart.ctx;

      //Get options from the center object in options
      var centerConfig = chart.config.options.elements.center;
      var fontStyle = centerConfig.fontStyle || "Arial";
      var txt = centerConfig.text;
      var color = centerConfig.color || "#000";
      var sidePadding = centerConfig.sidePadding || 20;
      var sidePaddingCalculated = (sidePadding / 100) * (chart.innerRadius * 2);
      //Start with a base font of 30px
      ctx.font = "30px " + fontStyle;

      //Get the width of the string and also the width of the element minus 10 to give it 5px side padding
      var stringWidth = ctx.measureText(txt).width;
      var elementWidth = chart.innerRadius * 2 - sidePaddingCalculated;

      // Find out how much the font can grow in width.
      var widthRatio = elementWidth / stringWidth;
      var newFontSize = Math.floor(30 * widthRatio);
      var elementHeight = chart.innerRadius * 2;

      // Pick a new font size so it will not be larger than the height of label.
      var fontSizeToUse = Math.min(newFontSize, elementHeight);

      //Set font settings to draw it correctly.
      ctx.textAlign = "center";
      ctx.textBaseline = "middle";
      var centerX = (chart.chartArea.left + chart.chartArea.right) / 2;
      var centerY = (chart.chartArea.top + chart.chartArea.bottom) / 2;
      ctx.font = fontSizeToUse + "px " + fontStyle;
      ctx.fillStyle = color;

      //Draw text in center
      ctx.fillText(txt, centerX, centerY);
    }
  },
});

// default color for the charts
let chartColor = "#FFFFFF";
// ##############################
// // // Function that converts a hex color number to a RGB color number
// #############################
const hexToRGB = (hex, alpha) => {
  var r = parseInt(hex.slice(1, 3), 16),
    g = parseInt(hex.slice(3, 5), 16),
    b = parseInt(hex.slice(5, 7), 16);

  if (alpha) {
    return "rgba(" + r + ", " + g + ", " + b + ", " + alpha + ")";
  } else {
    return "rgb(" + r + ", " + g + ", " + b + ")";
  }
};

// ##############################
// // // Chart variables
// #############################

// #########################################
// // // used inside src/views/Dashboard.js and src/views/Charts.js
// #########################################
const chartExample1 = {
  data: {
    labels: [
      "Jan",
      "Feb",
      "Mar",
      "Apr",
      "May",
      "Jun",
      "Jul",
      "Aug",
      "Sep",
      "Oct",
    ],
    datasets: [
      {
        label: "Active Users",
        borderColor: "#6bd098",
        pointRadius: 0,
        pointHoverRadius: 0,
        fill: false,
        borderWidth: 3,
        barPercentage: 1.6,
        data: [542, 480, 430, 550, 530, 453, 380, 434, 568, 610],
      },
    ],
  },
  options: {
    legend: {
      display: false,
    },

    tooltips: {
      enabled: false,
    },

    scales: {
      yAxes: [
        {
          ticks: {
            fontColor: "#9f9f9f",
            beginAtZero: false,
            maxTicksLimit: 5,
            //padding: 20
          },
          gridLines: {
            drawBorder: false,
            zeroLineColor: "transparent",
            color: "rgba(255,255,255,0.05)",
          },
        },
      ],

      xAxes: [
        {
          gridLines: {
            drawBorder: false,
            color: "rgba(255,255,255,0.1)",
            zeroLineColor: "transparent",
            display: false,
          },
          ticks: {
            padding: 20,
            fontColor: "#9f9f9f",
          },
        },
      ],
    },
  },
};

// #########################################
// // // used inside src/views/Dashboard.js
// #########################################
const chartExample2 = {
  data: (canvas) => {
    let ctx = canvas.getContext("2d");

    let gradientStroke = ctx.createLinearGradient(500, 0, 100, 0);
    gradientStroke.addColorStop(0, "#18ce0f");
    gradientStroke.addColorStop(1, chartColor);

    let gradientFill = ctx.createLinearGradient(0, 170, 0, 50);
    gradientFill.addColorStop(0, "rgba(128, 182, 244, 0)");
    gradientFill.addColorStop(1, hexToRGB("#18ce0f", 0.4));
    return {
      labels: ["12pm", "3pm", "6pm", "9pm", "12am", "3am", "6am", "9am"],
      datasets: [
        {
          label: "Email Stats",
          borderColor: "#ef8156",
          pointHoverRadius: 0,
          pointRadius: 0,
          fill: false,
          backgroundColor: gradientFill,
          borderWidth: 3,
          barPercentage: 1.6,
          data: [40, 500, 650, 700, 1200, 1250, 1300, 1900],
        },
      ],
    };
  },
  options: {
    legend: {
      display: false,
    },
    tooltips: {
      enabled: false,
    },
    scales: {
      yAxes: [
        {
          ticks: {
            fontColor: "#9f9f9f",
            beginAtZero: false,
            maxTicksLimit: 5,
          },
          gridLines: {
            drawBorder: false,
            zeroLineColor: "transparent",
            color: "rgba(255,255,255,0.05)",
          },
        },
      ],
      xAxes: [
        {
          gridLines: {
            drawBorder: false,
            color: "rgba(255,255,255,0.1)",
            zeroLineColor: "transparent",
            display: false,
          },
          ticks: {
            padding: 20,
            fontColor: "#9f9f9f",
          },
        },
      ],
    },
  },
};

// #########################################
// // // used inside src/views/Dashboard.js
// #########################################
const chartExample3 = {
  data: (canvas) => {
    let ctx = canvas.getContext("2d");

    let gradientStroke = ctx.createLinearGradient(500, 0, 100, 0);
    gradientStroke.addColorStop(0, "#2CA8FF");
    gradientStroke.addColorStop(1, chartColor);

    let gradientFill = ctx.createLinearGradient(0, 170, 0, 50);
    gradientFill.addColorStop(0, "rgba(128, 182, 244, 0)");
    gradientFill.addColorStop(1, hexToRGB("#2CA8FF", 0.4));
    return {
      labels: [
        "January",
        "February",
        "March",
        "April",
        "May",
        "June",
        "July",
        "August",
        "September",
        "October",
      ],
      datasets: [
        {
          label: "Active Countries",
          backgroundColor: gradientFill,
          borderColor: "#fbc658",
          pointHoverRadius: 0,
          pointRadius: 0,
          fill: false,
          borderWidth: 3,
          barPercentage: 1.6,
          data: [80, 78, 86, 96, 83, 85, 76, 75, 88, 90],
        },
      ],
    };
  },
  options: {
    legend: {
      display: false,
    },
    tooltips: {
      enabled: false,
    },
    scales: {
      yAxes: [
        {
          ticks: {
            fontColor: "#9f9f9f",
            beginAtZero: false,
            maxTicksLimit: 5,
          },
          gridLines: {
            drawBorder: false,
            zeroLineColor: "transparent",
            color: "rgba(255,255,255,0.05)",
          },
        },
      ],
      xAxes: [
        {
          gridLines: {
            drawBorder: false,
            color: "rgba(255,255,255,0.1)",
            zeroLineColor: "transparent",
            display: false,
          },
          ticks: {
            padding: 20,
            fontColor: "#9f9f9f",
          },
        },
      ],
    },
  },
};

// #########################################
// // // used inside src/views/Dashboard.js
// #########################################
const chartExample4 = {
  data: {
    labels: [
      0,
      1,
      2,
      3,
      4,
      5,
      6,
      7,
      8,
      9,
      10,
      11,
      12,
      13,
      14,
      15,
      16,
      17,
      18,
      19,
      20,
    ],
    datasets: [
      {
        label: "Data",
        borderColor: "#fcc468",
        fill: true,
        backgroundColor: "#fcc468",
        hoverBorderColor: "#fcc468",
        borderWidth: 8,
        barPercentage: 0.4,
        data: [
          100,
          120,
          80,
          100,
          90,
          130,
          110,
          100,
          80,
          110,
          130,
          140,
          130,
          120,
          130,
          80,
          100,
          90,
          120,
          130,
        ],
      },
      {
        label: "Data",
        borderColor: "#4cbdd7",
        fill: true,
        backgroundColor: "#4cbdd7",
        hoverBorderColor: "#4cbdd7",
        borderWidth: 8,
        barPercentage: 0.4,
        data: [
          80,
          140,
          50,
          120,
          50,
          150,
          60,
          130,
          50,
          130,
          150,
          100,
          110,
          80,
          140,
          50,
          140,
          50,
          110,
          150,
        ],
      },
    ],
  },
  options: {
    tooltips: {
      tooltipFillColor: "rgba(0,0,0,0.5)",
      tooltipFontFamily: "'Helvetica Neue', 'Helvetica', 'Arial', sans-serif",
      tooltipFontSize: 14,
      tooltipFontStyle: "normal",
      tooltipFontColor: "#fff",
      tooltipTitleFontFamily:
        "'Helvetica Neue', 'Helvetica', 'Arial', sans-serif",
      tooltipTitleFontSize: 14,
      tooltipTitleFontStyle: "bold",
      tooltipTitleFontColor: "#fff",
      tooltipYPadding: 6,
      tooltipXPadding: 6,
      tooltipCaretSize: 8,
      tooltipCornerRadius: 6,
      tooltipXOffset: 10,
    },
    legend: {
      display: false,
    },
    scales: {
      yAxes: [
        {
          ticks: {
            fontColor: "#9f9f9f",
            fontStyle: "bold",
            beginAtZero: true,
            maxTicksLimit: 5,
            padding: 20,
          },
          gridLines: {
            zeroLineColor: "transparent",
            display: true,
            drawBorder: false,
            color: "#9f9f9f",
          },
        },
      ],
      xAxes: [
        {
          gridLines: {
            zeroLineColor: "white",
            display: false,

            drawBorder: false,
            color: "transparent",
          },
          ticks: {
            padding: 20,
            fontColor: "#9f9f9f",
            fontStyle: "bold",
          },
        },
      ],
    },
  },
};

// #########################################
// // // used inside src/views/Dashboard.js
// #########################################
const chartExample5 = {
  data: {
    labels: [1, 2],
    datasets: [
      {
        label: "Emails",
        pointRadius: 0,
        pointHoverRadius: 0,
        backgroundColor: ["#f17e5d", "#f4f3ef"],
        borderWidth: 0,
        barPercentage: 1.6,
        data: [60, 40],
      },
    ],
  },
  options: {
    elements: {
      center: {
        text: "77%",
        color: "#66615c", // Default is #000000
        fontStyle: "Arial", // Default is Arial
        sidePadding: 60, // Defualt is 20 (as a percentage)
      },
    },
    cutoutPercentage: 90,
    legend: {
      display: false,
    },
    tooltips: {
      enabled: false,
    },
    scales: {
      yAxes: [
        {
          ticks: {
            display: false,
          },
          gridLines: {
            drawBorder: false,
            zeroLineColor: "transparent",
            color: "rgba(255,255,255,0.05)",
          },
        },
      ],
      xAxes: [
        {
          gridLines: {
            drawBorder: false,
            color: "rgba(255,255,255,0.1)",
            zeroLineColor: "transparent",
          },
          ticks: {
            display: false,
          },
        },
      ],
    },
  },
};

// #########################################
// // // used inside src/views/Dashboard.js
// #########################################
const chartExample6 = {
  data: {
    labels: [1, 2],
    datasets: [
      {
        label: "Emails",
        pointRadius: 0,
        pointHoverRadius: 0,
        backgroundColor: ["#51bcda", "#f4f3ef"],
        borderWidth: 0,
        barPercentage: 1.6,
        data: [34, 66],
      },
    ],
  },
  options: {
    elements: {
      center: {
        text: "4/10",
        color: "#66615c", // Default is #000000
        fontStyle: "Arial", // Default is Arial
        sidePadding: 60, // Defualt is 20 (as a percentage)
      },
    },
    cutoutPercentage: 90,
    legend: {
      display: false,
    },
    tooltips: {
      enabled: false,
    },
    scales: {
      yAxes: [
        {
          ticks: {
            display: false,
          },
          gridLines: {
            drawBorder: false,
            zeroLineColor: "transparent",
            color: "rgba(255,255,255,0.05)",
          },
        },
      ],
      xAxes: [
        {
          gridLines: {
            drawBorder: false,
            color: "rgba(255,255,255,0.1)",
            zeroLineColor: "transparent",
          },
          ticks: {
            display: false,
          },
        },
      ],
    },
  },
};

// #########################################
// // // used inside src/views/Dashboard.js
// #########################################
const chartExample7 = {
  data: {
    labels: [1, 2],
    datasets: [
      {
        label: "Emails",
        pointRadius: 0,
        pointHoverRadius: 0,
        backgroundColor: ["#f17e5d", "#f4f3ef"],
        borderWidth: 0,
        barPercentage: 1.6,
        data: [80, 20],
      },
    ],
  },
  options: {
    elements: {
      center: {
        text: "???50,000",
        color: "#66615c", // Default is #000000
        fontStyle: "Arial", // Default is Arial
        sidePadding: 60, // Defualt is 20 (as a percentage)
      },
    },
    cutoutPercentage: 90,
    legend: {
      display: false,
    },
    tooltips: {
      enabled: false,
    },
    scales: {
      yAxes: [
        {
          ticks: {
            display: false,
          },
          gridLines: {
            drawBorder: false,
            zeroLineColor: "transparent",
            color: "rgba(255,255,255,0.05)",
          },
        },
      ],
      xAxes: [
        {
          gridLines: {
            drawBorder: false,
            color: "rgba(255,255,255,0.1)",
            zeroLineColor: "transparent",
          },
          ticks: {
            display: false,
          },
        },
      ],
    },
  },
};

// #########################################
// // // used inside src/views/Dashboard.js
// #########################################
const chartExample8 = {
  data: {
    labels: [1, 2],
    datasets: [
      {
        label: "Emails",
        pointRadius: 0,
        pointHoverRadius: 0,
        backgroundColor: ["#66615b", "#f4f3ef"],
        borderWidth: 0,
        barPercentage: 1.6,
        data: [11, 89],
      },
    ],
  },
  options: {
    elements: {
      center: {
        text: "???50,000",
        color: "#66615c", // Default is #000000
        fontStyle: "Arial", // Default is Arial
        sidePadding: 60, // Defualt is 20 (as a percentage)
      },
    },
    cutoutPercentage: 90,
    legend: {
      display: false,
    },
    tooltips: {
      enabled: false,
    },
    scales: {
      yAxes: [
        {
          ticks: {
            display: false,
          },
          gridLines: {
            drawBorder: false,
            zeroLineColor: "transparent",
            color: "rgba(255,255,255,0.05)",
          },
        },
      ],
      xAxes: [
        {
          gridLines: {
            drawBorder: false,
            color: "rgba(255,255,255,0.1)",
            zeroLineColor: "transparent",
          },
          ticks: {
            display: false,
          },
        },
      ],
    },
  },
};

// #########################################
// // // used inside src/views/Charts.js
// #########################################

const chartExample9 = {
  data: {
    labels: ["6pm", "9pm", "11pm", "2am", "4am", "6am", "8am"],
    datasets: [
      {
        label: "Active Users",
        borderColor: "#f17e5d",
        pointBackgroundColor: "#f17e5d",
        pointRadius: 3,
        pointHoverRadius: 3,
        lineTension: 0,
        fill: false,
        borderWidth: 3,
        barPercentage: 1.6,
        data: [200, 250, 300, 350, 280, 330, 400],
      },
    ],
  },
  options: {
    legend: {
      display: false,
    },
    tooltips: {
      enabled: false,
    },
    scales: {
      yAxes: [
        {
          ticks: {
            fontColor: "#9f9f9f",
            beginAtZero: false,
            maxTicksLimit: 5,
          },
          gridLines: {
            drawBorder: false,
            borderDash: [8, 5],
            zeroLineColor: "transparent",
            color: "#9f9f9f",
          },
        },
      ],
      xAxes: [
        {
          gridLines: {
            drawBorder: false,
            borderDash: [8, 5],
            color: "#9f9f9f",
            zeroLineColor: "transparent",
          },
          ticks: {
            padding: 20,
            fontColor: "#9f9f9f",
          },
        },
      ],
    },
  },
};

// #########################################
// // // used inside src/views/Charts.js
// #########################################

const chartExample10 = {
  data: {
    labels: [
      0,
      1,
      2,
      3,
      4,
      5,
      6,
      7,
      8,
      9,
      10,
      11,
      12,
      13,
      14,
      15,
      16,
      17,
      18,
      19,
      20,
    ],
    datasets: [
      {
        label: "Data",
        borderColor: "",
        fill: true,
        backgroundColor: "#51bcda",
        hoverBorderColor: "#51bcda",
        borderWidth: 5,
        barPercentage: 0.4,
        data: [
          10,
          12,
          8,
          7,
          9,
          13,
          6,
          10,
          8,
          11,
          13,
          5,
          3,
          10,
          3,
          0,
          1,
          4,
          0,
          5,
        ],
      },
    ],
  },
  options: {
    tooltips: {
      tooltipFillColor: "rgba(0,0,0,0.5)",
      tooltipFontFamily: "'Helvetica Neue', 'Helvetica', 'Arial', sans-serif",
      tooltipFontSize: 14,
      tooltipFontStyle: "normal",
      tooltipFontColor: "#fff",
      tooltipTitleFontFamily:
        "'Helvetica Neue', 'Helvetica', 'Arial', sans-serif",
      tooltipTitleFontSize: 14,
      tooltipTitleFontStyle: "bold",
      tooltipTitleFontColor: "#fff",
      tooltipYPadding: 6,
      tooltipXPadding: 6,
      tooltipCaretSize: 8,
      tooltipCornerRadius: 6,
      tooltipXOffset: 10,
    },
    legend: {
      display: false,
    },
    scales: {
      yAxes: [
        {
          ticks: {
            fontColor: "#9f9f9f",
            fontStyle: "bold",
            beginAtZero: true,
            maxTicksLimit: 5,
            padding: 20,
          },
          gridLines: {
            zeroLineColor: "transparent",
            display: true,
            drawBorder: false,
            color: "#9f9f9f",
          },
        },
      ],
      xAxes: [
        {
          gridLines: {
            zeroLineColor: "white",
            display: false,
            drawBorder: false,
            color: "transparent",
          },
          ticks: {
            padding: 20,
            fontColor: "#9f9f9f",
            fontStyle: "bold",
          },
        },
      ],
    },
  },
};

// #########################################
// // // used inside src/views/Charts.js
// #########################################

const chartExample11 = {
  data: {
    labels: [1, 2, 3],
    datasets: [
      {
        label: "Emails",
        pointRadius: 0,
        pointHoverRadius: 0,
        backgroundColor: ["#ef8156", "#4acccd", "#feb201" ],
        borderWidth: 0,
        barPercentage: 1.6,
        data: [33, 28, 78],
      },
    ],
  },
  options: {
    legend: {
      display: false,
    },
    tooltips: {
      enabled: true,
    },
    scales: {
      yAxes: [
        {
          ticks: {
            display: false,
          },
          gridLines: {
            drawBorder: false,
            zeroLineColor: "transparent",
            color: "rgba(255,255,255,0.05)",
          },
        },
      ],
      xAxes: [
        {
          gridLines: {
            drawBorder: false,
            color: "rgba(255,255,255,0.1)",
            zeroLineColor: "transparent",
          },
          ticks: {
            display: false,
          },
        },
      ],
    },
  },
};

// #########################################
// // // used inside src/views/Charts.js
// #########################################

const chartExample12 = {
  data: {
    labels: [
      "Jan",
      "Feb",
      "Mar",
      "Apr",
      "May",
      "Jun",
      "Jul",
      "Aug",
      "Sep",
      "Oct",
    ],
    datasets: [
      {
        borderColor: "#6bd098",
        backgroundColor: "#6bd098",
        pointRadius: 0,
        pointHoverRadius: 0,
        borderWidth: 3,
        barPercentage: 1.6,
        data: [300, 310, 316, 322, 330, 326, 333, 345, 338, 354],
      },
      {
        borderColor: "#f17e5d",
        backgroundColor: "#f17e5d",
        pointRadius: 0,
        pointHoverRadius: 0,
        borderWidth: 3,
        barPercentage: 1.6,
        data: [320, 340, 365, 360, 370, 385, 390, 384, 408, 420],
      },
      {
        borderColor: "#fcc468",
        backgroundColor: "#fcc468",
        pointRadius: 0,
        pointHoverRadius: 0,
        borderWidth: 3,
        barPercentage: 1.6,
        data: [370, 394, 415, 409, 425, 445, 460, 450, 478, 484],
      },
    ],
  },
  options: {
    legend: {
      display: false,
    },
    tooltips: {
      enabled: false,
    },
    scales: {
      yAxes: [
        {
          ticks: {
            fontColor: "#9f9f9f",
            beginAtZero: false,
            maxTicksLimit: 5,
          },
          gridLines: {
            drawBorder: false,
            zeroLineColor: "transparent",
            color: "rgba(255,255,255,0.05)",
          },
        },
      ],
      xAxes: [
        {
          gridLines: {
            drawBorder: false,
            color: "rgba(255,255,255,0.1)",
            zeroLineColor: "transparent",
            display: false,
          },
          ticks: {
            padding: 20,
            fontColor: "#9f9f9f",
          },
        },
      ],
    },
  },
};

// #########################################
// // // used inside src/views/Charts.js
// #########################################

const chartExample13 = {
  data: {
    labels: [
      "Jan",
      "Feb",
      "Mar",
      "Apr",
      "May",
      "Jun",
      "Jul",
      "Aug",
      "Sep",
      "Oct",
    ],
    datasets: [
      {
        borderColor: "#6bd098",
        backgroundColor: "#6bd098",
        pointRadius: 0,
        pointHoverRadius: 0,
        borderWidth: 3,
        barPercentage: 1.6,
        data: [300000, 310000, 316000, 322000, 330000, 326000, 333000, 345000, 338000, 354000],
      },

    ],
  },
  options: {
    legend: {
      display: false,
    },
    tooltips: {
      enabled: false,
    },
    scales: {
      yAxes: [
        {
          ticks: {
            fontColor: "#9f9f9f",
            beginAtZero: false,
            maxTicksLimit: 5,
          },
          gridLines: {
            drawBorder: false,
            zeroLineColor: "transparent",
            color: "rgba(255,255,255,0.05)",
          },
        },
      ],
      xAxes: [
        {
          gridLines: {
            drawBorder: false,
            color: "rgba(255,255,255,0.1)",
            zeroLineColor: "transparent",
            display: false,
          },
          ticks: {
            padding: 20,
            fontColor: "#9f9f9f",
          },
        },
      ],
    },
  },
};

// #########################################
// // // used inside src/views/Charts.js
// #########################################

const chartExample14 = {
  data: {
    labels: [
      "Jan",
      "Feb",
      "Mar",
      "Apr",
      "May",
      "Jun",
      "Jul",
      "Aug",
      "Sep",
      "Oct",
    ],
    datasets: [

      {
        borderColor: "#51bcda",
        backgroundColor: "#51bcda",
        pointRadius: 0,
        pointHoverRadius: 0,
        borderWidth: 3,
        barPercentage: 1.6,
        data: [270000, 234000, 253000, 209000, 251000, 210300, 160231, 250000, 238000, 224000],
      },
    ],
  },
  options: {
    legend: {
      display: false,
    },
    tooltips: {
      enabled: false,
    },
    scales: {
      yAxes: [
        {
          ticks: {
            fontColor: "#9f9f9f",
            beginAtZero: false,
            maxTicksLimit: 5,
          },
          gridLines: {
            drawBorder: false,
            zeroLineColor: "transparent",
            color: "rgba(255,255,255,0.05)",
          },
        },
      ],
      xAxes: [
        {
          gridLines: {
            drawBorder: false,
            color: "rgba(255,255,255,0.1)",
            zeroLineColor: "transparent",
            display: false,
          },
          ticks: {
            padding: 20,
            fontColor: "#9f9f9f",
          },
        },
      ],
    },
  },
};

const chartExample15 = {
  data: {
    labels: [1, 2, 3, 4],
    datasets: [
      {
        label: "Emails",
        pointRadius: 0,
        pointHoverRadius: 0,
        backgroundColor: ["#ef8156", "#4acccd", "#feb201", "#6cd097" ],
        borderWidth: 0,
        barPercentage: 1.6,
        data: [33, 80, 60, 55],
      },
    ],
  },
  options: {
    legend: {
      display: false,
    },
    tooltips: {
      enabled: true,
    },
    scales: {
      yAxes: [
        {
          ticks: {
            display: false,
          },
          gridLines: {
            drawBorder: false,
            zeroLineColor: "transparent",
            color: "rgba(255,255,255,0.05)",
          },
        },
      ],
      xAxes: [
        {
          gridLines: {
            drawBorder: false,
            color: "rgba(255,255,255,0.1)",
            zeroLineColor: "transparent",
          },
          ticks: {
            display: false,
          },
        },
      ],
    },
  },
};

const chartExample16 = {
  data: {
    labels: [1, 2, ],
    datasets: [
      {
        label: "Emails",
        pointRadius: 0,
        pointHoverRadius: 0,
        backgroundColor: ["#ef8156", "#4acccd" ],
        borderWidth: 0,
        barPercentage: 1.6,
        data: [60, 55],
      },
    ],
  },
  options: {
    legend: {
      display: false,
    },
    tooltips: {
      enabled: true,
    },
    scales: {
      yAxes: [
        {
          ticks: {
            display: false,
          },
          gridLines: {
            drawBorder: false,
            zeroLineColor: "transparent",
            color: "rgba(255,255,255,0.05)",
          },
        },
      ],
      xAxes: [
        {
          gridLines: {
            drawBorder: false,
            color: "rgba(255,255,255,0.1)",
            zeroLineColor: "transparent",
          },
          ticks: {
            display: false,
          },
        },
      ],
    },
  },
};

const chartExample17 = {
  data: {
    labels: [

      1,
      2,

    ],
    datasets: [
      {
        label: "Data",
        borderColor: "#fcc468",
        fill: true,
        backgroundColor: "#fcc468",
        hoverBorderColor: "#fcc468",
        borderWidth: 8,
        barPercentage: 0.4,
        data: [
          100,

        ],
      },
      {
        label: "Data",
        borderColor: "#4cbdd7",
        fill: true,
        backgroundColor: "#4cbdd7",
        hoverBorderColor: "#4cbdd7",
        borderWidth: 8,
        barPercentage: 0.4,
        data: [
          80,

        ],
      },
    ],
  },
  options: {
    tooltips: {
      tooltipFillColor: "rgba(0,0,0,0.5)",
      tooltipFontFamily: "'Helvetica Neue', 'Helvetica', 'Arial', sans-serif",
      tooltipFontSize: 14,
      tooltipFontStyle: "normal",
      tooltipFontColor: "#fff",
      tooltipTitleFontFamily:
        "'Helvetica Neue', 'Helvetica', 'Arial', sans-serif",
      tooltipTitleFontSize: 14,
      tooltipTitleFontStyle: "bold",
      tooltipTitleFontColor: "#fff",
      tooltipYPadding: 6,
      tooltipXPadding: 6,
      tooltipCaretSize: 8,
      tooltipCornerRadius: 6,
      tooltipXOffset: 10,
    },
    legend: {
      display: false,
    },
    scales: {
      yAxes: [
        {
          ticks: {
            fontColor: "#9f9f9f",
            fontStyle: "bold",
            beginAtZero: true,
            maxTicksLimit: 5,
            padding: 20,
          },
          gridLines: {
            zeroLineColor: "transparent",
            display: true,
            drawBorder: false,
            color: "#9f9f9f",
          },
        },
      ],
      xAxes: [
        {
          gridLines: {
            zeroLineColor: "white",
            display: false,

            drawBorder: false,
            color: "transparent",
          },
          ticks: {
            padding: 20,
            fontColor: "#9f9f9f",
            fontStyle: "bold",
          },
        },
      ],
    },
  },
};


module.exports = {
  // used for Charts and Dashboard views
  chartExample1,
  // used for Dashboard view
  chartExample2,
  // used for Dashboard view
  chartExample3,
  // used for Charts and Dashboard views
  chartExample4,
  // used for Dashboard view
  chartExample5,
  // used for Dashboard view
  chartExample6,
  // used for Dashboard view
  chartExample7,
  // used for Dashboard view
  chartExample8,
  // used for Charts view
  chartExample9,
  // used for Charts view
  chartExample10,
  // used for Charts view
  chartExample11,
  // used for Charts view
  chartExample12,
  // used for Charts view
  chartExample13,
  // used for Charts view
  chartExample14,
  // used for Charts view
  chartExample15,
  // used for Charts view
  chartExample16,
  // used for Charts view
  chartExample17,
};
