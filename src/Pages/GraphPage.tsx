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
      <div>
        <h1> Your Stats: </h1>

        <div>
          <h3> Number of interviews: {numberOfInterviews} </h3>
     
        </div>
        <div className="container">
          <div className="row">
        <div className="barchart" style={{ height: 250, width: 1000 }}>
          <canvas id="chart"></canvas>
          <Bar
            data={{
              labels: ["Average Scores"],
              datasets: [
                {
                  label: "Nervous",
                  data: [aNervous],
                  backgroundColor: "#F94144"
                  ,
                
                },
                {
                  label: "Rapport",
                  data: [aRapport],
                  backgroundColor: "#F8961E",
              
                },
                {
                  label: "Technical",
                  data: [aTechnical],
                  backgroundColor: "#90BE6D",
               
                },
                {
                  label: "Preparation",
                  data: [aPreparation],
                  backgroundColor: "#4D908E",
                 
                },
                {
                  label: "Body-Language",
                  data: [aBodyLanguage],
                  backgroundColor: "#277DA1",
                
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

        

        <div className="linechart" style={{ height: 100, width: 1000 }}>
          <canvas id="chart"></canvas>
          <Line
            data={{
              labels: [...interviewNames],
              datasets: [
                {
                  label: "Nervous",
                  data: [...nervousScore],
                
                  borderColor: "#F94144",
                  borderWidth: 10,
                },
                {
                  label: "Rapport",
                  data: [...rapportScore],
                  backgroundColor: "",
                  borderWidth: 10,
                  borderColor: "#F8961E",
                },
                {
                  label: "Technical",
                  data: [...technicalScore],
                  backgroundColor: "",
                  borderWidth: 10,
                  borderColor: "#90BE6D",
                },
                {
                  label: "Preparation",
                  data: [...preparationScore],
                  backgroundColor: "",
                  borderWidth: 10,
                  borderColor: "#4D908E",
                },
                {
                  label: "Body-Language",
                  data: [...bodyLanguageScore],
                  backgroundColor: "",
                  borderWidth: 10,
                  borderColor: "#277DA1",
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
      </div>
    </div>
  );
}
