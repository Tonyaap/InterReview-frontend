import React, { useEffect, useState } from "react";
import { selectUser } from "../store/user/selectors";
import { useSelector } from "react-redux";
import { Bar, Line } from "react-chartjs-2";

export default function GraphPage() {
  const user = useSelector(selectUser);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
      const timer = setTimeout(() => {

  
    if (user.user.id) {
      setLoading(false);
      
    }

      }, 2000);
    return () => clearTimeout(timer);
  }, [user.user.id]);

  if (loading) { 
    return  <div className="lds-roller"> <div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div></div>;
  }

  const interviews = user.user.interviews.map((interview: any) => {
    return interview;
  });

  const interviewNames = interviews.map((interview: any) => {
    return `${interview.name}`;
  });

  let numberOfInterviews = interviews.length;

  const nervousScore = interviews.map((interview: any) => {
    return parseInt(interview.nervousScore);
  });
  let nervousSum = nervousScore.reduce((a: number, b: number) => {
    return a + b;
  }, 0);
  let aNervous = nervousSum / nervousScore.length;

  const rapportScore = interviews.map((interview: any) => {
    return parseInt(interview.rapportScore);
  });

  let rapportSum = rapportScore.reduce((a: number, b: number) => {
    return a + b;
  }, 0);

  let aRapport = rapportSum / rapportScore.length;

  const technicalScore = interviews.map((interview: any) => {
    return parseInt(interview.technicalScore);
  });

  let technicalSum = technicalScore.reduce((a: number, b: number) => {
    return a + b;
  }, 0);

  let aTechnical = technicalSum / technicalScore.length;

  const preparationScore = interviews.map((interview: any) => {
    return parseInt(interview.preparationScore);
  });

  let preparationSum = preparationScore.reduce((a: number, b: number) => {
    return a + b;
  }, 0);

  let aPreparation = preparationSum / preparationScore.length;

  const bodyLanguageScore = interviews.map((interview: any) => {
    return parseInt(interview.bodylanguageScore);
  });

  let bodyLanguageSum = bodyLanguageScore.reduce((a: number, b: number) => {
    return a + b;
  }, 0);

  let aBodyLanguage = bodyLanguageSum / bodyLanguageScore.length;

  return (
    <div>
      <p>this is the home page of: {user.user.name} </p>
      <div>
        <h1> HOMEPAGE </h1>

        <div>
          <p> Number of interviews: {numberOfInterviews} </p>
     
        </div>

        <div className="barchart" style={{ height: 100, width: 1000 }}>
          <canvas id="chart"></canvas>
          <Bar
            data={{
              labels: ["Average Scores"],
              datasets: [
                {
                  label: "Nervous",
                  data: [aNervous],
                  backgroundColor: [
                    "red",
                  ],
                  borderColor: "red",
                  borderWidth: 10,
                },
                {
                  label: "Rapport",
                  data: [aRapport],
                  backgroundColor: "black",
                  borderWidth: 10,
                  borderColor: "black",
                },
                {
                  label: "Technical",
                  data: [aTechnical],
                  backgroundColor: "blue",
                  borderWidth: 10,
                  borderColor: "blue",
                },
                {
                  label: "Preparation",
                  data: [aPreparation],
                  backgroundColor: "green",
                  borderWidth: 10,
                  borderColor: "green",
                },
                {
                  label: "Body-Language",
                  data: [aBodyLanguage],
                  backgroundColor: "yellow",
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

        <br></br> <br></br> <br></br> <br></br> <br></br> <br></br> <br></br> <br></br> <br></br> <br></br> <br></br> <br></br> <br></br> <br></br> <br></br> <br></br> <br></br> <br></br> <br></br> <br></br> <br></br> <br></br>

        <div className="linechart" style={{ height: 100, width: 1000 }}>
          <canvas id="chart"></canvas>
          <Line
            data={{
              labels: [...interviewNames],
              datasets: [
                {
                  label: "Nervous",
                  data: [...nervousScore],
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
                  data: [...rapportScore],
                  backgroundColor: "",
                  borderWidth: 10,
                  borderColor: "black",
                },
                {
                  label: "Technical",
                  data: [...technicalScore],
                  backgroundColor: "",
                  borderWidth: 10,
                  borderColor: "blue",
                },
                {
                  label: "Preparation",
                  data: [...preparationScore],
                  backgroundColor: "",
                  borderWidth: 10,
                  borderColor: "green",
                },
                {
                  label: "Body-Language",
                  data: [...bodyLanguageScore],
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
    </div>
  );
}
