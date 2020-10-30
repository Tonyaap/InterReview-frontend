import React from "react";
import { useSelector } from "react-redux";
import { selectUser } from "../store/user/selectors";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import { Interview, Questions } from "../types/types";

const useStyles = makeStyles({
  root: {
    display: "flex",
    flexWrap: "wrap",
  },

  card: {
    flexDirection: "row",
    flexWrap: "wrap",
    padding: 50,
    textAlign: "left",
    borderWidth: 2,
    borderColor: "red,",
    borderStyle: "solid",
    margin: 80,
  },
  bullet: {
    display: "inline-block",
    margin: "0 2px",
    transform: "scale(0.8)",
  },
  title: {
    color: "black",
    fontSize: 30,
    borderBottomColor: "grey",
    borderBottomWidth: 3,
    borderBottomStyle: "solid",
  },

  question: { fontSize: 16, color: "red" },

  answer: { fontSize: 14, color: "black" },

  pos: {
    fontSize: 16,
    color: "black",
    marginBottom: 12,
  },
});

export default function Interviews() {
  const user = useSelector(selectUser);
  const classes = useStyles();

  const interviews = user.user.Interviews;

  return (
    <div className={classes.root}>
      {interviews ? (
        interviews.map((i: Interview) => {
          return (
            <Card className={classes.card}>
              <CardContent>
                <Typography
                  className={classes.title}
                  color="textSecondary"
                  gutterBottom
                >
                  {i.name}
                </Typography>
                <Typography className={classes.pos} color="textSecondary">
                  bodylanguageScore:{i.bodylanguageScore}
                </Typography>
                <Typography className={classes.pos} color="textSecondary">
                  nervousScore:{i.nervousScore}
                </Typography>
                <Typography className={classes.pos} color="textSecondary">
                  rapportScore:{i.rapportScore}
                </Typography>
                <Typography className={classes.pos} color="textSecondary">
                  preparationScore:{i.preparationScore}
                </Typography>
                {i.questions.map((q: Questions) => {
                  return (
                    <div style={{ margin: 20 }}>
                      <p className={classes.question}> • {q.Question}</p>{" "}
                      <p className={classes.answer}>{q.Answer}</p>
                    </div>
                  );
                })}
              </CardContent>
            </Card>
          );
        })
      ) : (
        <div>loading...</div>
      )}
    </div>
  );
}
