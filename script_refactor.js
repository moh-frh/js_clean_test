const data = [
  {
    Cheese: 22.2,
    CHOCOLATE: 10.3,
    Impulse: 1.5,
    period: "2021_26",
  },
  {
    Cheese: 21.8,
    CHOCOLATE: 9.8,
    Impulse: 1.5,
    period: "2021_27",
  },
  {
    Cheese: 21.2,
    CHOCOLATE: 9.7,
    Impulse: 1.4,
    period: "2021_28",
  },
];

const setDataWithTotal = (data) => {
  let keys = Object.keys(data[0]);
  keys.splice(keys.length - 1);
  return data.map((element) => {
    total = 0;

    keys.forEach((key) => {
      total += element[key];
    });
    element.total = total / keys.length;
    return element;
  });
};
const setGraph = (keys, dataWithTotal) => {
  const graphValuesTmp = [];

  keys.forEach((keysElement) => {
    if (keysElement !== "period") {
      let temp = {
        label: keysElement,
        data: [],
        backgroundColor: [
          "rgba(255, 99, 132, 0.2)",
          "rgba(54, 162, 235, 0.2)",
          "rgba(255, 206, 86, 0.2)",
          "rgba(75, 192, 192, 0.2)",
        ],
        borderColor: [
          "rgba(255, 99, 132, 1)",
          "rgba(54, 162, 235, 1)",
          "rgba(255, 206, 86, 1)",
          "rgba(75, 192, 192, 1)",
        ],
      };

      dataWithTotal.forEach((dataElement) => {
        temp.data.push(dataElement[keysElement]);
      });

      graphValuesTmp.push(temp);
    }
  });
  return graphValuesTmp;
};

const drawGraph = (graphValues, labels) => {
  let ctx = document.getElementById("myChart").getContext("2d");
  let myChart = new Chart(ctx, {
    type: "line",
    data: {
      labels: labels,
      datasets: graphValues,
    },
  });
};

function generateGraph() {
  let labels = [];

  const dataWithTotal = setDataWithTotal(data);

  dataWithTotal.forEach((element) => {
    labels.push(element.period);
  });

  const graphValues = setGraph(Object.keys(dataWithTotal[0]), dataWithTotal);

  drawGraph(graphValues, labels);
}

generateGraph();
