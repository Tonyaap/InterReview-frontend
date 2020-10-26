import React from "react";
import { Line } from "react-chartjs-2";

export function Home() {
  return (
    <div>
      <h1> HOMEPAGE </h1>
      <div className="chart-container" style={{ height: 100, width: 1000 }}>
        <canvas id="chart"></canvas>
        <Line
          data={{
            labels: [
              "Interview 1",
              "Interview 2",
              "Interview 3",
              "Interview 4",
              "Interview 5",
              "Interview 6",
            ],
            datasets: [
              {
                label: "Nervous",
                data: [1, 3, 3, 5, 2, 4],
                backgroundColor: [
                  "rgba(255, 99, 132, 0.2)",
                  "rgba(54, 162, 235, 0.2)",
                  "rgba(255, 206, 86, 0.2)",
                  "rgba(75, 192, 192, 0.2)",
                  "rgba(153, 102, 255, 0.2)",
                  "rgba(255, 159, 64, 0.2)",
                ],
                borderColor: "red",
                borderWidth: 10,
              },
              {
                label: "Rapport",
                data: [0, 1, 4, 5, 5, 0],
                backgroundColor: "",
                borderWidth: 10,
                borderColor: "black",
              },
              {
                label: "Technical",
                data: [3, 2, 1, 5, 4, 3],
                backgroundColor: "",
                borderWidth: 10,
                borderColor: "blue",
              },
              {
                label: "Preparation",
                data: [5, 4, 3, 2, 1, 0],
                backgroundColor: "",
                borderWidth: 10,
                borderColor: "green",
              },
              {
                label: "Body-Language",
                data: [4, 4, 3, 5, 2, 0],
                backgroundColor: "",
                borderWidth: 10,
                borderColor: "yellow",
              },
            ],
          }}
          height={40}
          width={80}
          options={{
            maintainAspectsRatio: false,
            scales: {
              yAxes: [
                {
                  ticks: {
                    beginAtZero: true,
                  },
                },
              ],
            },
          }}
        />
      </div>
    </div>
  );
}
